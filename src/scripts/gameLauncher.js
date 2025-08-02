// gameLauncher.js - Sistema principal actualizado
import { environment } from '../environments/enviroment.js';
import { logger } from './logger.js';
import { fileValidator } from './fileValidator.js';
import { retryManager } from './retryManager.js';
import { repairService } from './repairService.js';
import { timerManager } from './timerManager.js';
import RankingService from './rankingService.js';
import PatchDownloader from './patchDownloader.js';

class GameLauncher {
  constructor() {
    this.isDownloading = false;
    this.isRepairing = false;
    this.isClientReady = false;
    this.downloadStats = {
      totalFiles: 0,
      completedFiles: 0,
      currentFile: null,
      currentProgress: 0
    };
    
    // Inicializar servicios
    this.patchDownloader = null;
    this.rankingService = new RankingService();
  }

  async initialize() {
    try {
      logger.info('Initializing GameLauncher systems');
      
      // Inicializar patch downloader
      this.patchDownloader = new PatchDownloader();
      await this.patchDownloader.initialize();
      
      // Inicializar repair service
      logger.info('Initializing repair service');
      await repairService.initialize(this.patchDownloader);
      
      logger.info('GameLauncher initialized successfully');
    } catch (error) {
      logger.error('Failed to initialize GameLauncher', { error: error.message });
      throw error;
    }
  }

  showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-message">${message}</span>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  }

  setupDownloadButton() {
    const btnUpdate = document.getElementById('btnUpdate');
    const btnPlay = document.getElementById('btnPlay');
    const btnRepair = document.getElementById('btnRepair');
    
    // Progress elements
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const progressStatus = document.getElementById('progressStatus');
    const progressDetails = document.getElementById('progressDetails');
    
    const folderPath = document.getElementById('folderPath');

    if (!btnUpdate || !btnPlay || !btnRepair || !progressFill || !progressPercent || 
        !progressStatus || !folderPath) {
      logger.error('Required DOM elements not found', {
        btnUpdate: !!btnUpdate,
        btnPlay: !!btnPlay,
        btnRepair: !!btnRepair,
        progressFill: !!progressFill,
        progressPercent: !!progressPercent,
        progressStatus: !!progressStatus,
        folderPath: !!folderPath
      });
      return;
    }

    logger.info('All DOM elements found correctly');

    // Configurar botón de actualización
    btnUpdate.addEventListener('click', async () => {
      if (this.isDownloading || this.isRepairing) {
        logger.warn('Operation already in progress, ignoring click');
        return;
      }
      
      const selectedFolder = localStorage.getItem('selectedFolder');
      if (!selectedFolder) {
        this.showToast('Please select a folder first', 'warning');
        return;
      }
      
      await this.startUpdate(progressFill, progressPercent, progressStatus, progressDetails, btnUpdate, btnPlay);
    });

    // Configurar botón de reparación
    btnRepair.addEventListener('click', async () => {
      if (this.isDownloading || this.isRepairing) {
        logger.warn('Operation already in progress, ignoring click');
        return;
      }
      
      const selectedFolder = localStorage.getItem('selectedFolder');
      if (!selectedFolder) {
        this.showToast('Please select a folder first', 'warning');
        return;
      }
      
      await this.startRepair(progressFill, progressPercent, progressStatus, progressDetails, btnRepair);
    });

    // Configurar botón de juego
    btnPlay.addEventListener('click', () => {
      if (this.isDownloading || this.isRepairing) {
        logger.warn('Operation in progress, cannot launch game');
        this.showToast('Please wait for current operation to complete', 'warning');
        return;
      }
      
      const selectedFolder = localStorage.getItem('selectedFolder');
      if (!selectedFolder) {
        this.showToast('Please select a folder first', 'warning');
        return;
      }
      
      if (window.electron) {
        window.electron.launchGame(selectedFolder);
      }
    });

    // Verificar estado inicial del cliente
    this.checkClientStatus();
  }

  async checkClientStatus() {
    try {
      const selectedFolder = localStorage.getItem('selectedFolder');
      if (!selectedFolder) return;

      logger.info('Checking client status', { folder: selectedFolder });
      
      const isValid = await fileValidator.validateDirectory(selectedFolder);
      if (isValid) {
        const files = await this.patchDownloader.getLocalFiles(selectedFolder);
        this.isClientReady = files.length > 0;
        logger.info('Client status: Ready', { fileCount: files.length });
        
        // Verificar actualizaciones automáticamente
        await this.checkForUpdates();
      } else {
        this.isClientReady = false;
        logger.warn('Client status: Not ready - invalid directory');
      }
    } catch (error) {
      logger.error('Error checking client status', { error: error.message });
      this.isClientReady = false;
    }
  }

  // Verificar actualizaciones automáticamente
  async checkForUpdates() {
    try {
      const selectedFolder = localStorage.getItem('selectedFolder');
      if (!selectedFolder) return;

      logger.info('Checking for updates automatically');

      // Obtener elementos de la UI
      const progressFill = document.getElementById('progressFill');
      const progressPercent = document.getElementById('progressPercent');
      const progressStatus = document.getElementById('progressStatus');
      const progressDetails = document.getElementById('progressDetails');
      
      if (!progressFill || !progressPercent || !progressStatus) {
        logger.warn('Progress elements not found for auto-update check');
        return;
      }

      // Actualizar la carpeta actual en el patchDownloader
      this.patchDownloader.updateCurrentFolder(selectedFolder);

      // Obtener archivos del servidor
      const serverFiles = await retryManager.retryApiCall(
        () => this.patchDownloader.getAvailableFiles(),
        'get_available_files_auto'
      );

      // Obtener archivos locales
      const localFiles = await this.patchDownloader.getLocalFiles(selectedFolder);

      // Obtener archivos que necesitan actualización
      const filesToUpdate = await this.patchDownloader.getFilesToUpdate(serverFiles, localFiles);

      if (filesToUpdate.length === 0) {
        // No hay actualizaciones necesarias - mostrar 100%
        logger.info('No updates needed, client is up to date');
        
        // Mostrar 100% en la barra
        progressFill.style.width = '100%';
        progressPercent.textContent = '100%';
        progressStatus.textContent = 'Client is up to date ✓';
        
        // Ocultar detalles del progreso cuando no hay descarga
        progressDetails.style.display = 'none';
        
        this.showToast('Client is up to date ✓', 'success');
      } else {
        // Hay actualizaciones disponibles - mostrar 0%
        logger.info(`Updates available: ${filesToUpdate.length} files need update`);
        
        // Mostrar 0% en la barra
        progressFill.style.width = '0%';
        progressPercent.textContent = '0%';
        progressStatus.textContent = `${filesToUpdate.length} files to download`;
        
        // Mostrar detalles del progreso solo cuando hay actualizaciones
        progressDetails.style.display = 'block';
        
        this.showToast(`${filesToUpdate.length} updates available`, 'info');
      }
    } catch (error) {
      logger.error('Error checking for updates', { error: error.message });
      // En caso de error, mostrar estado neutral
      const progressFill = document.getElementById('progressFill');
      const progressPercent = document.getElementById('progressPercent');
      const progressStatus = document.getElementById('progressStatus');
      
      if (progressFill && progressPercent && progressStatus) {
        progressFill.style.width = '0%';
        progressPercent.textContent = '0%';
        progressStatus.textContent = 'Check for updates';
      }
    }
  }

  // Resetear barra de progreso
  resetProgressBar(progressFill, progressPercent, progressStatus, message = 'Ready') {
    if (progressFill) progressFill.style.width = '0%';
    if (progressPercent) progressPercent.textContent = '0%';
    if (progressStatus) progressStatus.textContent = message;
    
    // Resetear detalles del progreso
    this.resetProgressDetails();
    
    // Ocultar detalles del progreso al resetear
    const progressDetails = document.getElementById('progressDetails');
    if (progressDetails) progressDetails.style.display = 'none';
  }

  async startUpdate(progressFill, progressPercent, progressStatus, progressDetails, btnUpdate, btnPlay) {
    try {
      this.isDownloading = true;
      btnUpdate.disabled = true;
      btnPlay.disabled = false;

      const selectedFolder = localStorage.getItem('selectedFolder');
      if (!selectedFolder) {
        throw new Error('No folder selected');
      }

      logger.info('Starting update process', { folder: selectedFolder });

      // Resetear barra de progreso y mostrar progreso inmediatamente
      this.resetProgressBar(progressFill, progressPercent, progressStatus, 'Starting update...');
      
      // Asegurar que la barra esté visible y en 0%
      progressFill.style.width = '0%';
      progressPercent.textContent = '0%';
      progressDetails.style.display = 'block';

      // Actualizar la carpeta actual en el patchDownloader
      this.patchDownloader.updateCurrentFolder(selectedFolder);

      // Inicializar temporizador inmediatamente
      const timerId = `update_${Date.now()}`;
      timerManager.startTimer(timerId, 'download', 0, (timerInfo) => {
        // Actualizar información detallada en tiempo real
        this.updateProgressDetails(timerId, timerInfo.progress || 0, 'download');
      });

      // Mostrar progreso inicial
      progressStatus.textContent = 'Checking for updates...';
      progressFill.style.width = '5%';
      progressPercent.textContent = '5%';

      // Obtener archivos del servidor con reintentos
      progressStatus.textContent = 'Connecting to server...';
      progressFill.style.width = '10%';
      progressPercent.textContent = '10%';
      
      const serverFiles = await retryManager.retryApiCall(
        () => this.patchDownloader.getAvailableFiles(),
        'get_available_files'
      );

      // Mostrar progreso de análisis
      progressStatus.textContent = 'Analyzing files...';
      progressFill.style.width = '20%';
      progressPercent.textContent = '20%';

      // Obtener archivos locales
      const localFiles = await this.patchDownloader.getLocalFiles(selectedFolder);

      // Obtener archivos que necesitan actualización
      progressStatus.textContent = 'Comparing files...';
      progressFill.style.width = '30%';
      progressPercent.textContent = '30%';
      
      const filesToUpdate = await this.patchDownloader.getFilesToUpdate(serverFiles, localFiles);

      if (filesToUpdate.length === 0) {
        logger.info('No files need update');
        progressFill.style.width = '100%';
        progressPercent.textContent = '100%';
        progressStatus.textContent = 'All files are up to date ✓';
        
        // Ocultar detalles del progreso cuando no hay descarga
        progressDetails.style.display = 'none';
        
        this.showToast('All files are up to date ✓', 'success');
        return;
      }

      logger.info(`Found ${filesToUpdate.length} files to update`);

      // Mostrar progreso de preparación
      progressStatus.textContent = `Preparing to download ${filesToUpdate.length} files...`;
      progressFill.style.width = '40%';
      progressPercent.textContent = '40%';

      // Actualizar progreso total
      this.downloadStats = {
        totalFiles: filesToUpdate.length,
        completedFiles: 0,
        currentFile: null,
        currentProgress: 0
      };

      // Usar el método real de descarga y extracción del patchDownloader
      await this.patchDownloader.downloadAndExtractAllFiles(
        selectedFolder,
        (filename, downloaded, total, percent) => {
          // Callback de descarga - actualizar barra de progreso
          this.downloadStats.currentFile = filename;
          this.downloadStats.currentProgress = percent;
          
          // Calcular progreso total de descarga (40% a 90%)
          if (this.downloadStats.totalFiles > 0) {
            const downloadProgress = (this.downloadStats.completedFiles / this.downloadStats.totalFiles) * 50; // 50% para descarga
            const currentFileProgress = (percent / 100) * (50 / this.downloadStats.totalFiles); // 50% dividido entre archivos
            const totalProgress = Math.min(40 + downloadProgress + currentFileProgress, 90);
            
            // Actualizar UI para descarga
            if (!isNaN(totalProgress)) {
              progressFill.style.width = `${totalProgress}%`;
              progressPercent.textContent = `${Math.round(totalProgress)}%`;
              progressStatus.textContent = `Downloading ${filename}... ${Math.round(percent)}%`;
              
              // Log para debuggear
              logger.debug('Download progress update', {
                filename,
                percent,
                totalProgress,
                downloadProgress,
                currentFileProgress,
                completedFiles: this.downloadStats.completedFiles,
                totalFiles: this.downloadStats.totalFiles,
                downloaded,
                total
              });
              
              // Actualizar información detallada para descarga
              this.updateProgressDetails(timerId, totalProgress, 'download', filename);
              
              // Pasar bytes descargados para cálculo de velocidad real
              timerManager.updateProgress(timerId, totalProgress, total, downloaded);
            }
          }
        },
        (filename, progress) => {
          // Callback de extracción - actualizar barra de progreso (90% a 100%)
          const extractionProgress = 90 + (progress * 0.1); // 10% para extracción
          
          // Actualizar UI para extracción
          progressFill.style.width = `${extractionProgress}%`;
          progressPercent.textContent = `${Math.round(extractionProgress)}%`;
          progressStatus.textContent = `Installing ${filename}... ${Math.round(progress)}%`;
          
          // Actualizar información detallada para instalación
          this.updateProgressDetails(timerId, extractionProgress, 'extraction', filename);
          
          // Para extracción, usamos el progreso como bytes procesados (aproximado)
          const processedBytes = Math.floor(progress * 1024 * 1024); // Aproximación: 1MB por 100%
          timerManager.updateProgress(timerId, extractionProgress, 1024 * 1024, processedBytes);
        },
        (filename) => {
          // Archivo completado
          this.downloadStats.completedFiles++;
          this.downloadStats.currentFile = filename;
          logger.info(`File completed: ${filename}`);
          
          // Calcular progreso total para descarga
          const downloadProgress = 40 + (this.downloadStats.completedFiles / this.downloadStats.totalFiles) * 50;
          
          // Actualizar barra de progreso
          progressFill.style.width = `${downloadProgress}%`;
          progressPercent.textContent = `${Math.round(downloadProgress)}%`;
          progressStatus.textContent = `Downloaded: ${filename}`;
          
          // Actualizar información detallada para descarga
          this.updateProgressDetails(timerId, downloadProgress, 'download', filename);
        },
        (summary) => {
          // Descarga completada
          logger.info('Download completed', { summary });
          
          // Asegurar que llegue al 100%
          progressFill.style.width = '100%';
          progressPercent.textContent = '100%';
          progressStatus.textContent = 'Update completed ✓';
          
          // Actualizar información detallada con progreso 100% para mostrar "Finalizado"
          this.updateProgressDetails(timerId, 100, 'download', 'Completed');
          
          this.showToast('Update completed successfully ✓', 'success');
          timerManager.completeTimer(timerId);
        },
        (error) => {
          // Error en descarga
          logger.error('Download failed', { error });
          this.showToast(`Update failed: ${error}`, 'error');
          progressStatus.textContent = `Update failed: ${error}`;
        }
      );

      // Guardar estado de actualización
      await this.patchDownloader.saveUpdateState(serverFiles);

      logger.info('Update process completed successfully');

    } catch (error) {
      logger.error('Update process failed', { error: error.message });
      this.showToast(`Update failed: ${error.message}`, 'error');
      progressStatus.textContent = `Update failed: ${error.message}`;
    } finally {
      this.isDownloading = false;
      btnUpdate.disabled = false;
      btnPlay.disabled = false;
    }
  }

  async startRepair(progressFill, progressPercent, progressStatus, progressDetails, btnRepair) {
    try {
      this.isRepairing = true;
      btnRepair.disabled = true;

      const selectedFolder = localStorage.getItem('selectedFolder');
      if (!selectedFolder) {
        throw new Error('No folder selected');
      }

      logger.info('Starting repair process', { folder: selectedFolder });

      // Resetear barra de progreso y mostrar progreso inmediatamente
      this.resetProgressBar(progressFill, progressPercent, progressStatus, 'Starting repair...');
      
      // Asegurar que la barra esté visible y en 0%
      progressFill.style.width = '0%';
      progressPercent.textContent = '0%';
      progressDetails.style.display = 'block';

      // Actualizar la carpeta actual en el patchDownloader
      this.patchDownloader.updateCurrentFolder(selectedFolder);

      // Inicializar temporizador inmediatamente
      const timerId = `repair_${Date.now()}`;
      timerManager.startTimer(timerId, 'repair', 0, (timerInfo) => {
        // Actualizar información detallada en tiempo real
        this.updateProgressDetails(timerId, timerInfo.progress || 0, 'repair');
      });

      // Mostrar progreso inicial
      progressStatus.textContent = 'Initializing repair...';
      progressFill.style.width = '5%';
      progressPercent.textContent = '5%';

      // Ejecutar reparación
      await repairService.startRepair(
        selectedFolder,
        (progressInfo) => {
          // Actualizar progreso (5% a 95%)
          const repairProgress = 5 + (progressInfo.progress || 0) * 0.9; // 90% del progreso
          progressFill.style.width = `${repairProgress}%`;
          progressPercent.textContent = `${Math.round(repairProgress)}%`;
          progressStatus.textContent = `Repairing ${progressInfo.file || 'files'} (${progressInfo.reason || 'checking'})... ${Math.round(repairProgress)}%`;
          
          // Actualizar información detallada
          this.updateProgressDetails(timerId, repairProgress, 'repair', progressInfo.file);
          
          // Actualizar temporizador
          timerManager.updateProgress(timerId, repairProgress);
        },
        (message) => {
          logger.info('Repair completed', { message });
          
          // Asegurar que llegue al 100%
          progressFill.style.width = '100%';
          progressPercent.textContent = '100%';
          progressStatus.textContent = message;
          
          // Actualizar información detallada con progreso 100% para mostrar "Finalizado"
          this.updateProgressDetails(timerId, 100, 'repair', 'Completed');
          
          this.showToast(message, 'success');
          timerManager.completeTimer(timerId);
        },
        (error) => {
          logger.error('Repair failed', { error });
          this.showToast(`Repair failed: ${error}`, 'error');
          progressStatus.textContent = `Repair failed: ${error}`;
        }
      );

    } catch (error) {
      logger.error('Repair process failed', { error: error.message });
      this.showToast(`Repair failed: ${error.message}`, 'error');
      progressStatus.textContent = `Repair failed: ${error.message}`;
    } finally {
      this.isRepairing = false;
      btnRepair.disabled = false;
    }
  }

  async extractFile(file, destFolder) {
    try {
      logger.info(`Extracting file: ${file.name} to ${destFolder}`);
      
      // Simular extracción con progreso
      await new Promise((resolve) => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 20;
          if (progress >= 100) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      });
      
      logger.info(`File extracted successfully: ${file.name}`);
    } catch (error) {
      logger.error(`Failed to extract file: ${file.name}`, { error: error.message });
      throw error;
    }
  }

  // Cargar rankings usando el rankingService
  async loadRankings() {
    try {
      logger.info('Loading rankings using rankingService');
      await this.rankingService.updateRankings();
      logger.info('Rankings loaded successfully');
    } catch (error) {
      logger.error('Failed to load rankings', { error: error.message });
    }
  }

  // Obtener estadísticas del sistema
  getSystemStats() {
    return {
      isDownloading: this.isDownloading,
      isRepairing: this.isRepairing,
      isClientReady: this.isClientReady,
      downloadStats: this.downloadStats,
      repairStats: repairService.getRepairStats(),
      timerStats: timerManager.getTimerStats(),
      validationStats: fileValidator.getValidationStats(),
      retryStats: retryManager.getRetryStats()
    };
  }

  // Actualizar información detallada del progreso
  updateProgressDetails(timerId, progress, type = 'download', filename = null) {
    const progressTime = document.getElementById('progressTime');
    const progressSpeed = document.getElementById('progressSpeed');
    const currentFile = document.getElementById('currentFile');
    const progressDetails = document.getElementById('progressDetails');
    
    if (!progressTime || !progressSpeed || !currentFile) return;
    
    const timer = timerManager.activeTimers.get(timerId);
    if (!timer) return;
    
    // Mostrar detalles solo cuando hay actividad
    if (progressDetails) {
      progressDetails.style.display = 'block';
    }
    
    // Actualizar tiempo
    const elapsed = Date.now() - timer.startTime;
    const elapsedTime = timerManager.formatTime(elapsed);
    progressTime.textContent = `Time: ${elapsedTime}`;
    
    // Actualizar velocidad según el tipo de operación y velocidad real
    if (progress >= 100) {
      // Operación completada - mostrar velocidad final o "Finalizado"
      if (timer.finalAverageSpeed) {
        const speed = timerManager.formatSpeed(timer.finalAverageSpeed);
        progressSpeed.textContent = `Final Speed: ${speed}`;
      } else {
        progressSpeed.textContent = `Finalizado`;
      }
    } else {
      // Operación en progreso - mostrar velocidad actual
      const speed = timerManager.formatSpeed(timer.estimatedSpeed);
      if (type === 'download') {
        progressSpeed.textContent = `Download Speed: ${speed}`;
      } else if (type === 'extraction') {
        progressSpeed.textContent = `Install Speed: ${speed}`;
      } else {
        progressSpeed.textContent = `Speed: ${speed}`;
      }
    }
    
    // Actualizar archivo actual
    if (filename) {
      currentFile.textContent = `File: ${filename}`;
    } else if (this.downloadStats && this.downloadStats.currentFile) {
      currentFile.textContent = `File: ${this.downloadStats.currentFile}`;
    } else if (timer.currentFile) {
      currentFile.textContent = `File: ${timer.currentFile}`;
    }
  }

  // Resetear información detallada del progreso
  resetProgressDetails() {
    const progressTime = document.getElementById('progressTime');
    const progressSpeed = document.getElementById('progressSpeed');
    const currentFile = document.getElementById('currentFile');
    const progressDetails = document.getElementById('progressDetails');
    
    if (progressTime) progressTime.textContent = 'Time: --';
    if (progressSpeed) progressSpeed.textContent = 'Speed: --';
    if (currentFile) currentFile.textContent = 'File: --';
    if (progressDetails) progressDetails.style.display = 'none';
  }
}

// Función de inicialización global
async function initializeGameLauncher() {
  try {
    const gameLauncher = new GameLauncher();
    await gameLauncher.initialize();
    gameLauncher.setupDownloadButton();
    
    // Cargar rankings
    await gameLauncher.loadRankings();
    
    // Configurar actualización automática de rankings
    setInterval(() => {
      gameLauncher.loadRankings();
    }, 5 * 60 * 1000); // Cada 5 minutos
    
    logger.info('GameLauncher setup completed');
  } catch (error) {
    logger.error('Failed to initialize GameLauncher', { error: error.message });
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGameLauncher);
} else {
  initializeGameLauncher();
}