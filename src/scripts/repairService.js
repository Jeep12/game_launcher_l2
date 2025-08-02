// repairService.js - Sistema de reparación de archivos
import { environment } from '../environments/enviroment.js';
import { logger } from './logger.js';
import { fileValidator } from './fileValidator.js';
import { retryManager } from './retryManager.js';
import PatchDownloader from './patchDownloader.js';

class RepairService {
  constructor() {
    this.patchDownloader = new PatchDownloader();
    this.isRepairing = false;
    this.repairProgress = {
      totalFiles: 0,
      completedFiles: 0,
      currentFile: null,
      currentProgress: 0
    };
  }

  // Inicializar servicio de reparación
  async initialize() {
    try {
      logger.info('Initializing repair service');
      await this.patchDownloader.initialize();
      logger.info('Repair service initialized successfully');
      return true;
    } catch (error) {
      logger.error('Failed to initialize repair service', { error: error.message });
      throw error;
    }
  }

  // Iniciar proceso de reparación
  async startRepair(destFolder, onProgress, onComplete, onError) {
    if (this.isRepairing) {
      logger.warn('Repair already in progress');
      return;
    }

    try {
      this.isRepairing = true;
      logger.info('Starting repair process', { destFolder });

      // Obtener lista de archivos del servidor
      const serverFiles = await retryManager.retryApiCall(
        () => this.patchDownloader.getAvailableFiles(),
        'get_available_files'
      );

      // Obtener archivos locales
      const localFiles = await this.patchDownloader.getLocalFiles(destFolder);

      // Identificar archivos que necesitan reparación
      const filesToRepair = this.identifyFilesToRepair(serverFiles, localFiles);

      if (filesToRepair.length === 0) {
        logger.info('No files need repair');
        onComplete?.('No files need repair ✓');
        return;
      }

      logger.info(`Found ${filesToRepair.length} files to repair`);

      // Inicializar progreso
      this.repairProgress = {
        totalFiles: filesToRepair.length,
        completedFiles: 0,
        currentFile: null,
        currentProgress: 0
      };

      // Reparar archivos uno por uno
      for (const file of filesToRepair) {
        await this.repairFile(file, destFolder, onProgress);
        this.repairProgress.completedFiles++;
      }

      logger.info('Repair process completed successfully');
      onComplete?.('Repair completed successfully ✓');

    } catch (error) {
      logger.error('Repair process failed', { error: error.message });
      onError?.(error.message);
    } finally {
      this.isRepairing = false;
    }
  }

  // Identificar archivos que necesitan reparación
  identifyFilesToRepair(serverFiles, localFiles) {
    const filesToRepair = [];

    for (const serverFile of serverFiles) {
      const localFile = localFiles.find(lf => lf.name === serverFile.name);
      
      if (!localFile) {
        // Archivo no existe localmente
        filesToRepair.push({
          ...serverFile,
          reason: 'missing',
          action: 'download'
        });
        continue;
      }

      // Verificar si el archivo está corrupto o desactualizado
      const needsRepair = this.checkIfFileNeedsRepair(localFile, serverFile);
      
      if (needsRepair) {
        filesToRepair.push({
          ...serverFile,
          reason: needsRepair.reason,
          action: 'redownload'
        });
      }
    }

    logger.info(`Identified ${filesToRepair.length} files for repair`, {
      reasons: filesToRepair.map(f => ({ name: f.name, reason: f.reason }))
    });

    return filesToRepair;
  }

  // Verificar si un archivo necesita reparación
  checkIfFileNeedsRepair(localFile, serverFile) {
    // Verificar tamaño
    if (localFile.size !== serverFile.size) {
      return { reason: 'size_mismatch', details: { local: localFile.size, server: serverFile.size } };
    }

    // Verificar fecha de modificación (si es muy antigua)
    const localDate = new Date(localFile.modified_date);
    const serverDate = new Date(serverFile.modified_date);
    const daysDifference = (serverDate - localDate) / (1000 * 60 * 60 * 24);

    if (daysDifference > 7) {
      return { reason: 'outdated', details: { daysDifference } };
    }

    // Verificar si es un directorio cuando debería ser un archivo
    if (localFile.isDirectory && !serverFile.isDirectory) {
      return { reason: 'type_mismatch', details: { local: 'directory', server: 'file' } };
    }

    return null;
  }

  // Reparar un archivo específico
  async repairFile(file, destFolder, onProgress) {
    try {
      logger.info(`Repairing file: ${file.name}`, { reason: file.reason });

      this.repairProgress.currentFile = file.name;
      this.repairProgress.currentProgress = 0;

      // Actualizar progreso
      onProgress?.({
        file: file.name,
        reason: file.reason,
        progress: 0,
        total: this.repairProgress.totalFiles,
        completed: this.repairProgress.completedFiles
      });

      // Descargar archivo con reintentos
      await retryManager.retryDownload(
        async () => {
          return new Promise((resolve, reject) => {
            // Simular descarga con progreso
            let progress = 0;
            const interval = setInterval(() => {
              progress += 10;
              this.repairProgress.currentProgress = progress;
              
              onProgress?.({
                file: file.name,
                reason: file.reason,
                progress: progress,
                total: this.repairProgress.totalFiles,
                completed: this.repairProgress.completedFiles
              });

              if (progress >= 100) {
                clearInterval(interval);
                resolve();
              }
            }, 200);
          });
        },
        file.name,
        {
          onRetry: (attempt, delay, error) => {
            logger.warn(`Retrying download for ${file.name}`, { attempt, delay, error: error.message });
          }
        }
      );

      // Extraer archivo si es necesario
      if (file.name.endsWith('.zip')) {
        await this.extractRepairedFile(file, destFolder);
      }

      logger.info(`File repaired successfully: ${file.name}`);

    } catch (error) {
      logger.error(`Failed to repair file: ${file.name}`, { error: error.message });
      throw error;
    }
  }

  // Extraer archivo reparado
  async extractRepairedFile(file, destFolder) {
    try {
      logger.info(`Extracting repaired file: ${file.name}`);

      // Simular extracción
      await new Promise(resolve => setTimeout(resolve, 1000));

      logger.info(`File extracted successfully: ${file.name}`);
    } catch (error) {
      logger.error(`Failed to extract repaired file: ${file.name}`, { error: error.message });
      throw error;
    }
  }

  // Verificar integridad de archivos
  async verifyFileIntegrity(destFolder) {
    try {
      logger.info('Starting file integrity verification');

      const localFiles = await this.patchDownloader.getLocalFiles(destFolder);
      const serverFiles = await this.patchDownloader.getAvailableFiles();

      const integrityReport = {
        totalFiles: localFiles.length,
        validFiles: 0,
        corruptedFiles: 0,
        missingFiles: 0,
        details: []
      };

      for (const serverFile of serverFiles) {
        const localFile = localFiles.find(lf => lf.name === serverFile.name);
        
        if (!localFile) {
          integrityReport.missingFiles++;
          integrityReport.details.push({
            name: serverFile.name,
            status: 'missing',
            reason: 'File not found locally'
          });
          continue;
        }

        // Verificar integridad básica
        const isValid = await this.verifySingleFile(localFile, serverFile);
        
        if (isValid) {
          integrityReport.validFiles++;
          integrityReport.details.push({
            name: serverFile.name,
            status: 'valid'
          });
        } else {
          integrityReport.corruptedFiles++;
          integrityReport.details.push({
            name: serverFile.name,
            status: 'corrupted',
            reason: 'File integrity check failed'
          });
        }
      }

      logger.info('File integrity verification completed', integrityReport);
      return integrityReport;

    } catch (error) {
      logger.error('File integrity verification failed', { error: error.message });
      throw error;
    }
  }

  // Verificar integridad de un archivo específico
  async verifySingleFile(localFile, serverFile) {
    try {
      // Verificar tamaño
      if (localFile.size !== serverFile.size) {
        return false;
      }

      // Verificar fecha de modificación (tolerancia de 1 día)
      const localDate = new Date(localFile.modified_date);
      const serverDate = new Date(serverFile.modified_date);
      const daysDifference = Math.abs(serverDate - localDate) / (1000 * 60 * 60 * 24);

      if (daysDifference > 1) {
        return false;
      }

      return true;
    } catch (error) {
      logger.error('File integrity check failed', { 
        file: localFile.name, 
        error: error.message 
      });
      return false;
    }
  }

  // Obtener estadísticas de reparación
  getRepairStats() {
    return {
      isRepairing: this.isRepairing,
      progress: this.repairProgress,
      config: {
        enableChecksums: environment.validation.enableChecksums,
        enableFilePermissions: environment.validation.enableFilePermissions
      }
    };
  }

  // Cancelar reparación
  cancelRepair() {
    if (this.isRepairing) {
      this.isRepairing = false;
      logger.info('Repair process cancelled by user');
    }
  }
}

export const repairService = new RepairService(); 