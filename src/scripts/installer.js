// installer.js
const path = require('path');

class Installer {
  constructor() {
    this.isInstalling = false;
    this.currentStep = '';
    this.totalSteps = 0;
    this.currentStepNumber = 0;
    this.installedFiles = new Set();
    this.failedFiles = new Set();
  }

  // Inicializar el instalador
  async initialize() {
    console.log('[INSTALLER] Inicializando instalador...');
    this.isInstalling = false;
    this.currentStep = '';
    this.totalSteps = 0;
    this.currentStepNumber = 0;
    this.installedFiles.clear();
    this.failedFiles.clear();
  }

  // Proceso completo de instalación
  async installAllFiles(destFolder, patchDownloader, onProgress, onComplete, onError) {
    if (this.isInstalling) {
      console.log('[INSTALLER] Ya hay una instalación en progreso');
      return;
    }

    try {
      this.isInstalling = true;
      this.totalSteps = 4; // Descargar, Extraer, Instalar, Limpiar
      this.currentStepNumber = 0;

      console.log('[INSTALLER] Iniciando proceso de instalación completo...');

      // Paso 1: Descargar archivos
      await this.downloadFiles(destFolder, patchDownloader, onProgress);
      if (!this.isInstalling) return; // Verificar si fue cancelado

      // Paso 2: Extraer archivos
      await this.extractFiles(destFolder, onProgress);
      if (!this.isInstalling) return;

      // Paso 3: Instalar archivos
      await this.installFiles(destFolder, onProgress);
      if (!this.isInstalling) return;

      // Paso 4: Limpiar archivos temporales
      await this.cleanupFiles(destFolder, onProgress);

      // Resumen final
      const summary = {
        totalSteps: this.totalSteps,
        completedSteps: this.currentStepNumber,
        installedFiles: Array.from(this.installedFiles),
        failedFiles: Array.from(this.failedFiles),
        message: 'Instalación completada exitosamente'
      };

      console.log('[INSTALLER] Instalación completada:', summary);
      onComplete?.(summary);

    } catch (error) {
      console.error('[INSTALLER] Error en instalación:', error);
      onError?.(error);
    } finally {
      this.isInstalling = false;
    }
  }

  // Paso 1: Descargar archivos
  async downloadFiles(destFolder, patchDownloader, onProgress) {
    this.currentStep = 'Descargando archivos...';
    this.currentStepNumber = 1;
    this.updateProgress(onProgress);

    console.log('[INSTALLER] Paso 1: Descargando archivos...');

    // Crear carpeta temporal para descargas
    this.tempDownloadFolder = path.join(destFolder, 'temp_downloads');
    console.log(`[INSTALLER] Carpeta temporal creada: ${this.tempDownloadFolder}`);

    return new Promise((resolve, reject) => {
      patchDownloader.downloadAllFiles(
        this.tempDownloadFolder, // Descargar en carpeta temporal
        (completed, total, percent) => {
          // Progreso de descarga
          this.updateProgress(onProgress, percent);
        },
        (filename, downloaded, total, percent) => {
          // Progreso de archivo individual
          console.log(`[INSTALLER] Descargando ${filename}: ${percent}%`);
        },
        (summary) => {
          console.log('[INSTALLER] Descarga completada:', summary);
          // Verificar si se descargaron archivos o si todos están actualizados
          if (summary.downloaded > 0 || (typeof summary === 'string' && summary.includes('actualizados'))) {
            resolve(summary);
          } else {
            reject(new Error('No se descargaron archivos'));
          }
        },
        (error) => {
          console.error('[INSTALLER] Error en descarga:', error);
          reject(error);
        }
      );
    });
  }

  // Paso 2: Extraer archivos ZIP
  async extractFiles(destFolder, onProgress) {
    this.currentStep = 'Extrayendo archivos...';
    this.currentStepNumber = 2;
    this.updateProgress(onProgress);

    console.log('[INSTALLER] Paso 2: Extrayendo archivos...');
    console.log(`[INSTALLER] Carpeta temporal: ${this.tempDownloadFolder}`);
    console.log(`[INSTALLER] Carpeta destino: ${destFolder}`);

    try {
      // Verificar que la carpeta temporal existe
      console.log(`[INSTALLER] Verificando existencia de carpeta temporal...`);
      
      // Usar IPC para obtener la lista de archivos de la carpeta temporal
      const files = await window.electron.getDirectoryFiles(this.tempDownloadFolder);
      console.log(`[INSTALLER] Archivos encontrados en carpeta temporal:`, files);
      
      const zipFiles = files.filter(file => file.endsWith('.zip'));
      console.log(`[INSTALLER] Archivos ZIP encontrados:`, zipFiles);
      
      if (zipFiles.length === 0) {
        console.log('[INSTALLER] No hay archivos ZIP para extraer');
        // Si no hay archivos ZIP, continuar con el siguiente paso
        return;
      }

      console.log(`[INSTALLER] Encontrados ${zipFiles.length} archivos ZIP para extraer`);

      for (let i = 0; i < zipFiles.length; i++) {
        if (!this.isInstalling) break;

        const zipFile = zipFiles[i];
        const zipPath = path.join(this.tempDownloadFolder, zipFile);
        
        console.log(`[INSTALLER] Extrayendo ${zipFile} a ${destFolder}...`);
        console.log(`[INSTALLER] Ruta completa del ZIP: ${zipPath}`);
        
        try {
          // Extraer directamente a la carpeta raíz
          await this.extractZipFile(zipPath, destFolder);
          this.installedFiles.add(zipFile);
          
          // Progreso de extracción
          const extractProgress = Math.round(((i + 1) / zipFiles.length) * 100);
          this.updateProgress(onProgress, extractProgress);
          
        } catch (error) {
          console.error(`[INSTALLER] Error extrayendo ${zipFile}:`, error);
          this.failedFiles.add(zipFile);
        }
      }

    } catch (error) {
      console.error('[INSTALLER] Error en extracción:', error);
      throw error;
    }
  }

  // Extraer archivo ZIP individual
  async extractZipFile(zipPath, destFolder) {
    return new Promise((resolve, reject) => {
      // Usar IPC para comunicarse con el proceso principal
      window.electron.extractZipFile(zipPath, destFolder)
        .then(() => {
          console.log(`[INSTALLER] Extracción completada: ${path.basename(zipPath)}`);
          resolve();
        })
        .catch((error) => {
          console.error(`[INSTALLER] Error en extracción:`, error);
          reject(new Error(`Error extrayendo archivo: ${error}`));
        });
    });
  }



  // Paso 3: Instalar archivos (mover a ubicaciones finales)
  async installFiles(destFolder, onProgress) {
    this.currentStep = 'Instalando archivos...';
    this.currentStepNumber = 3;
    this.updateProgress(onProgress);

    console.log('[INSTALLER] Paso 3: Instalando archivos...');

    try {
      // Buscar archivos extraídos y moverlos a sus ubicaciones finales
      const extractedFiles = await this.findExtractedFiles(destFolder);
      
      console.log(`[INSTALLER] Encontrados ${extractedFiles.length} archivos para instalar`);

      if (extractedFiles.length === 0) {
        console.log('[INSTALLER] No hay archivos para instalar');
        return;
      }

      for (let i = 0; i < extractedFiles.length; i++) {
        if (!this.isInstalling) break;

        const file = extractedFiles[i];
        
        try {
          await this.installFile(file, destFolder);
          this.installedFiles.add(path.basename(file));
          
          // Progreso de instalación
          const installProgress = Math.round(((i + 1) / extractedFiles.length) * 100);
          this.updateProgress(onProgress, installProgress);
          
        } catch (error) {
          console.error(`[INSTALLER] Error instalando ${file}:`, error);
          this.failedFiles.add(path.basename(file));
        }
      }

    } catch (error) {
      console.error('[INSTALLER] Error en instalación:', error);
      throw error;
    }
  }

  // Encontrar archivos extraídos
  async findExtractedFiles(destFolder) {
    try {
      // Usar IPC para obtener todos los archivos recursivamente
      const files = await window.electron.getDirectoryFilesRecursive(destFolder);
      
      // Filtrar archivos que necesitan ser procesados
      const filesToProcess = files.filter(file => {
        // Excluir archivos ZIP
        if (file.endsWith('.zip')) return false;
        
        // Solo incluir archivos que están en subdirectorios (no en la raíz)
        const relativePath = file.replace(destFolder, '').replace(/^[\\\/]/, '');
        const pathParts = relativePath.split(/[\\\/]/);
        
        // Si el archivo está en un subdirectorio, necesita ser movido
        return pathParts.length > 1;
      });
      
      console.log(`[INSTALLER] Archivos que necesitan ser movidos: ${filesToProcess.length}`);
      return filesToProcess;
    } catch (error) {
      console.error('[INSTALLER] Error obteniendo archivos extraídos:', error);
      return [];
    }
  }

  // Instalar archivo individual
  async installFile(filePath, destFolder) {
    try {
      const fileName = path.basename(filePath);
      const targetPath = path.join(destFolder, fileName);
      
      // Verificar si el archivo ya está en la ubicación correcta
      if (filePath === targetPath) {
        console.log(`[INSTALLER] Archivo ya en ubicación correcta: ${fileName}`);
        return;
      }
      
      // Usar IPC para mover el archivo
      await window.electron.moveFile(filePath, targetPath);
      
      console.log(`[INSTALLER] Instalado: ${fileName}`);
    } catch (error) {
      console.error(`[INSTALLER] Error instalando archivo:`, error);
      throw error;
    }
  }

  // Paso 4: Limpiar archivos temporales
  async cleanupFiles(destFolder, onProgress) {
    this.currentStep = 'Limpiando archivos temporales...';
    this.currentStepNumber = 4;
    this.updateProgress(onProgress);

    console.log('[INSTALLER] Paso 4: Limpiando archivos temporales...');

    try {
      // Eliminar carpeta temporal completa
      if (this.tempDownloadFolder) {
        console.log(`[INSTALLER] Eliminando carpeta temporal: ${this.tempDownloadFolder}`);
        await window.electron.removeDirectory(this.tempDownloadFolder);
        console.log('[INSTALLER] Carpeta temporal eliminada');
      }

    } catch (error) {
      console.error('[INSTALLER] Error en limpieza:', error);
      // No lanzar error aquí, la limpieza no es crítica
    }
  }



  // Actualizar progreso
  updateProgress(onProgress, stepProgress = 0) {
    const overallProgress = Math.round(((this.currentStepNumber - 1) / this.totalSteps) * 100 + (stepProgress / this.totalSteps));
    
    onProgress?.({
      step: this.currentStepNumber,
      totalSteps: this.totalSteps,
      currentStep: this.currentStep,
      stepProgress: stepProgress,
      overallProgress: overallProgress
    });
  }

  // Cancelar instalación
  cancelInstallation() {
    console.log('[INSTALLER] Cancelando instalación...');
    this.isInstalling = false;
  }

  // Obtener estadísticas de instalación
  getInstallStats() {
    return {
      isInstalling: this.isInstalling,
      currentStep: this.currentStep,
      currentStepNumber: this.currentStepNumber,
      totalSteps: this.totalSteps,
      installedFiles: Array.from(this.installedFiles),
      failedFiles: Array.from(this.failedFiles)
    };
  }
}

export { Installer }; 