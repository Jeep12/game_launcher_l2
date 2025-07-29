// gameLauncher.js
import PatchDownloader from './patchDownloader.js';
import { Installer } from './installer.js';

class GameLauncher {
  constructor() {
    this.patchDownloader = new PatchDownloader();
    this.installer = new Installer();
    this.isDownloading = false;
    this.isInstalling = false;
    this.currentDownload = null;
    this.downloadStats = {
      totalFiles: 0,
      completedFiles: 0,
      currentFile: null,
      currentProgress: 0
    };
    this.isClientReady = false;
  }

  // Toast notification function
  showToast(message, type = 'info', duration = 3000) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    
    // Set message and type
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    
    // Show toast
    toast.classList.add('show');
    
    // Hide toast after duration
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  setupDownloadButton() {
    const btnUpdate = document.getElementById('btnUpdate');
    const btnPlay = document.getElementById('btnPlay');
    const btnRepair = document.getElementById('btnRepair');
    const btnSelectFolder = document.getElementById('btnSelectFolder');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const progressStatus = document.getElementById('progressStatus');
    const folderPath = document.getElementById('folderPath');
    
    // Verificar que todos los elementos estén presentes
    const requiredElements = {
      btnUpdate, btnPlay, btnRepair, btnSelectFolder,
      progressFill, progressPercent, progressStatus,
      folderPath
    };
    
    const missingElements = Object.entries(requiredElements)
      .filter(([name, element]) => !element)
      .map(([name]) => name);
    
    if (missingElements.length > 0) {
      console.error('Elementos del DOM no encontrados:', missingElements);
      return;
    }
    
    console.log('All DOM elements found correctly');

    // Configure update button
    btnUpdate.addEventListener('click', () => {
      console.log('=== Update button clicked ===');
      if (this.isDownloading) {
        console.log('Already downloading, ignoring click');
        return; // Avoid multiple downloads
      }

      console.log('Starting update...');
      this.startUpdate(progressFill, progressPercent, progressStatus, btnUpdate, btnPlay);
    });

    // Configure play button
    btnPlay.addEventListener('click', () => {
      const selectedFolder = localStorage.getItem('selectedFolder');
      if (selectedFolder) {
        if (window.electron) {
          window.electron.launchGame(selectedFolder);
        } else {
          this.showToast('Electron is not available.', 'error');
        }
      } else {
        this.showToast('You must select a folder before playing.', 'error');
      }
    });

    // Configure repair button
    btnRepair.addEventListener('click', () => {
      this.startRepair(progressFill, progressPercent, progressStatus, btnRepair);
    });



    // Verificar estado inicial
    this.checkClientStatus();
  }

  async checkClientStatus() {
    const selectedFolder = localStorage.getItem('selectedFolder');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const progressStatus = document.getElementById('progressStatus');
    const btnPlay = document.getElementById('btnPlay');

    if (!selectedFolder) {
      progressFill.style.width = '0%';
      progressPercent.textContent = '0%';
      progressStatus.textContent = 'Select a folder to start';
      btnPlay.disabled = true;
      return;
    }

    try {
      progressStatus.textContent = 'Checking client status...';
      
      // Initialize downloader
      await this.patchDownloader.initialize();
      
      // Get server files
      const serverFiles = await this.patchDownloader.getAvailableFiles();
      const localFiles = await this.patchDownloader.getLocalFiles(selectedFolder);
      const filesToUpdate = await this.patchDownloader.getFilesToUpdate(serverFiles, localFiles);
      
      if (filesToUpdate.length === 0) {
        // Everything is updated
        progressFill.style.width = '100%';
        progressPercent.textContent = '100%';
        progressStatus.textContent = 'Client updated ✓';
        btnPlay.disabled = false;
        this.isClientReady = true;
      } else {
        // Files need updating
        const percentage = Math.round(((serverFiles.length - filesToUpdate.length) / serverFiles.length) * 100);
        progressFill.style.width = `${percentage}%`;
        progressPercent.textContent = `${percentage}%`;
        progressStatus.textContent = `${filesToUpdate.length} file(s) need updating`;
        btnPlay.disabled = true;
        this.isClientReady = false;
      }
      
    } catch (error) {
      console.error('Error checking client status:', error);
      progressStatus.textContent = 'Error checking client status';
      btnPlay.disabled = true;
    }
  }

  async startUpdate(progressFill, progressPercent, progressStatus, btnUpdate, btnPlay) {
    console.log('=== startUpdate method started ===');
    try {
      // Check if folder is selected
      const selectedFolder = localStorage.getItem('selectedFolder');
      console.log('Selected folder:', selectedFolder);
      if (!selectedFolder) {
        console.log('No folder selected');
        this.showToast('You must select a folder before updating.', 'error');
        return;
      }

      this.isDownloading = true;
      btnUpdate.disabled = true;
      
      progressStatus.textContent = 'Checking for updates...';
      progressFill.style.width = '0%';
      progressPercent.textContent = '0%';

      // Initialize downloader
      await this.patchDownloader.initialize();
      
      progressStatus.textContent = 'Checking available files...';

      // Check if updates are needed
      console.log('=== Checking for updates ===');
      const serverFiles = await this.patchDownloader.getAvailableFiles();
      console.log('Server files:', serverFiles);
      
      const localFiles = await this.patchDownloader.getLocalFiles(selectedFolder);
      console.log('Local files:', localFiles);
      
      const filesToUpdate = await this.patchDownloader.getFilesToUpdate(serverFiles, localFiles);
      console.log('Files to update:', filesToUpdate);
      console.log('Files to update length:', filesToUpdate.length);

      if (filesToUpdate.length === 0) {
        // No updates needed
        console.log('=== No updates needed ===');
        progressStatus.textContent = 'Game is already up to date ✓';
        progressFill.style.width = '100%';
        progressPercent.textContent = '100%';
        btnUpdate.disabled = false;
        this.isDownloading = false;
        
        // Show toast notification
        this.showToast('Game is already up to date!', 'success');
        return;
      }

      // Start download and extraction process
      this.patchDownloader.downloadAndExtractAllFiles(
        selectedFolder,
        // Download progress callback
        (filename, downloaded, total, percent) => {
          progressStatus.textContent = `Downloading: ${filename}`;
          progressFill.style.width = `${percent}%`;
          progressPercent.textContent = `${percent}%`;
        },
        // Extraction progress callback
        (filename, percent) => {
          progressStatus.textContent = `Installing: ${filename}`;
          progressFill.style.width = `${percent}%`;
          progressPercent.textContent = `${percent}%`;
        },
        // File completed callback
        (filename, completed, total) => {
          const totalProgress = Math.round((completed / total) * 100);
          progressFill.style.width = `${totalProgress}%`;
          progressPercent.textContent = `${totalProgress}%`;
          progressStatus.textContent = `Processing files... ${completed}/${total} (${totalProgress}%)`;
        },
        // Completed callback
        (summary) => {
          progressStatus.textContent = 'Update completed ✓';
          progressFill.style.width = '100%';
          progressPercent.textContent = '100%';
          btnPlay.disabled = false;
          this.isClientReady = true;
          
          btnUpdate.disabled = false;
          this.isDownloading = false;
          
          console.log('Update completed:', summary);
          
          // Show success toast
          const successMessage = typeof summary === 'string' ? summary : `Update completed. ${summary.downloaded} files processed${summary.failed > 0 ? `, ${summary.failed} failed` : ''}`;
          this.showToast(successMessage, 'success');
        },
        // Error callback
        (error) => {
          progressStatus.textContent = `Error: ${error.message}`;
          
          btnUpdate.disabled = false;
          this.isDownloading = false;
          
          console.error('Update error:', error);
          
          // Show error toast
          this.showToast(`Update error: ${error.message}`, 'error');
        }
      );

    } catch (error) {
      progressStatus.textContent = `Error: ${error.message}`;
      
      btnUpdate.disabled = false;
      this.isDownloading = false;
      
      console.error('Error in startUpdate:', error);
      
      // Show error toast
      this.showToast(`Update error: ${error.message}`, 'error');
    }
  }

  async startRepair(progressFill, progressPercent, progressStatus, btnRepair) {
    try {
      const selectedFolder = localStorage.getItem('selectedFolder');
      if (!selectedFolder) {
        this.showToast('You must select a folder before repairing.', 'error');
        return;
      }

      this.isDownloading = true;
      btnRepair.disabled = true;
      
      progressStatus.textContent = 'Starting repair...';
      progressFill.style.width = '0%';
      progressPercent.textContent = '0%';

      // Simulate repair process
      for (let i = 0; i <= 100; i += 10) {
        if (!this.isDownloading) break;
        
        progressFill.style.width = `${i}%`;
        progressPercent.textContent = `${i}%`;
        progressStatus.textContent = `Repairing files... ${i}%`;
        
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      if (this.isDownloading) {
        progressFill.style.width = '100%';
        progressPercent.textContent = '100%';
        progressStatus.textContent = 'Repair completed ✓';
        
        btnRepair.disabled = false;
        this.isDownloading = false;
        
        this.showToast('Files have been repaired successfully!', 'success');
      }

    } catch (error) {
      progressStatus.textContent = `Repair error: ${error.message}`;
      
      btnRepair.disabled = false;
      this.isDownloading = false;
      
      console.error('Repair error:', error);
    }
  }



  updateFileList(filename, progress, status) {
    const fileList = document.getElementById('fileList');
    if (!fileList) return;

    fileList.style.display = 'block';

    // Buscar o crear elemento para este archivo
    let fileElement = fileList.querySelector(`[data-filename="${filename}"]`);
    if (!fileElement) {
      fileElement = document.createElement('div');
      fileElement.setAttribute('data-filename', filename);
      fileElement.className = 'file-item';
      fileList.appendChild(fileElement);
    }

    // Actualizar contenido del elemento
    const statusIcon = status === 'downloading' ? '📥' : status === 'completed' ? '✅' : status === 'error' ? '❌' : '⏳';
    fileElement.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span>${statusIcon} ${filename}</span>
        <span>${progress}%</span>
      </div>
      ${status === 'downloading' ? `<div class="file-progress"><div class="file-progress-fill" style="width: ${progress}%;"></div></div>` : ''}
    `;
  }

  calculateDownloadSpeed(downloaded, total) {
    if (!downloaded || !total) return '';
    
    const downloadedMB = (downloaded / (1024 * 1024)).toFixed(1);
    const totalMB = (total / (1024 * 1024)).toFixed(1);
    
    return `${downloadedMB}MB / ${totalMB}MB`;
  }

  showNotification(title, message, type = 'info') {
    // Crear notificación visual
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    notification.innerHTML = `
      <strong>${title}</strong><br>
      ${message}
    `;
    
    document.body.appendChild(notification);
    
    // Remover después de 5 segundos
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 5000);
  }

  // Verificar actualizaciones disponibles
  async checkForUpdates() {
    try {
      await this.patchDownloader.initialize();
      const files = await this.patchDownloader.getAvailableFiles();
      console.log('Archivos disponibles:', files);
      return files;
    } catch (error) {
      console.error('Error verificando actualizaciones:', error);
      return null;
    }
  }

  // Obtener información de un archivo específico
  async getFileInfo(filename) {
    try {
      const info = await this.patchDownloader.getFileInfo(filename);
      console.log('Información del archivo:', info);
      return info;
    } catch (error) {
      console.error('Error obteniendo información del archivo:', error);
      return null;
    }
  }

  // Obtener estadísticas de descarga
  getDownloadStats() {
    return this.patchDownloader.getDownloadStats();
  }

  // Las barras de progreso ahora están siempre visibles en el HTML
  // No necesitamos crear barras dinámicamente
  createProgressBars(fileList) {
    // Las barras ya están en el HTML, solo mostrar la lista de archivos si es necesario
    if (fileList) {
      fileList.style.display = 'block';
    }
  }

  // Actualizar progreso de descarga
  updateDownloadProgress(filename, percent) {
    const downloadProgressFill = document.getElementById('downloadProgressFill');
    const downloadProgressPercent = document.getElementById('downloadProgressPercent');
    const downloadStatus = document.getElementById('downloadStatus');
    
    if (downloadProgressFill && downloadProgressPercent && downloadStatus) {
      downloadProgressFill.style.width = `${percent}%`;
      downloadProgressPercent.textContent = `${percent}%`;
      downloadStatus.textContent = `Descargando: ${filename}`;
    }
  }

  // Actualizar progreso de instalación (extracción)
  updateInstallationProgress(filename, percent) {
    const installationProgressFill = document.getElementById('installationProgressFill');
    const installationProgressPercent = document.getElementById('installationProgressPercent');
    const installationStatus = document.getElementById('installationStatus');
    
    if (installationProgressFill && installationProgressPercent && installationStatus) {
      installationProgressFill.style.width = `${percent}%`;
      installationProgressPercent.textContent = `${percent}%`;
      installationStatus.textContent = `Instalando: ${filename}`;
    }
  }

  // Ocultar lista de archivos (las barras siempre están visibles)
  hideProgressBars() {
    const fileList = document.getElementById('fileList');
    if (fileList) {
      fileList.style.display = 'none';
    }
    
    // Resetear barras de progreso
    this.resetProgressBars();
  }

  // Resetear barras de progreso
  resetProgressBars() {
    const downloadProgressFill = document.getElementById('downloadProgressFill');
    const downloadProgressPercent = document.getElementById('downloadProgressPercent');
    const downloadStatus = document.getElementById('downloadStatus');
    const installationProgressFill = document.getElementById('installationProgressFill');
    const installationProgressPercent = document.getElementById('installationProgressPercent');
    const installationStatus = document.getElementById('installationStatus');
    
    if (downloadProgressFill && downloadProgressPercent && downloadStatus) {
      downloadProgressFill.style.width = '0%';
      downloadProgressPercent.textContent = '0%';
      downloadStatus.textContent = 'Esperando...';
    }
    
    if (installationProgressFill && installationProgressPercent && installationStatus) {
      installationProgressFill.style.width = '0%';
      installationProgressPercent.textContent = '0%';
      installationStatus.textContent = 'Esperando...';
    }
  }

  // Cargar rankings desde API
  async loadRankings() {
    try {
      // Mock data por ahora - aquí se conectaría a la API real
      const mockPvpRankings = [
        { position: 1, name: 'DragonSlayer', score: 1250 },
        { position: 2, name: 'ShadowKnight', score: 1180 },
        { position: 3, name: 'BloodWarrior', score: 1120 },
        { position: 4, name: 'DarkMage', score: 1050 },
        { position: 5, name: 'IronGuard', score: 980 }
      ];

      const mockPkRankings = [
        { position: 1, name: 'DeathBringer', score: 850 },
        { position: 2, name: 'NightHunter', score: 780 },
        { position: 3, name: 'ChaosLord', score: 720 },
        { position: 4, name: 'VoidWalker', score: 680 },
        { position: 5, name: 'SoulReaper', score: 620 }
      ];

      this.updateRankings('topPvpList', mockPvpRankings);
      this.updateRankings('topPkList', mockPkRankings);

      // En el futuro, aquí se haría la llamada real a la API:
      // const pvpRankings = await fetch('/api/rankings/pvp').then(r => r.json());
      // const pkRankings = await fetch('/api/rankings/pk').then(r => r.json());
      
    } catch (error) {
      console.error('Error cargando rankings:', error);
    }
  }

  // Actualizar rankings en el DOM
  updateRankings(listId, rankings) {
    const listElement = document.getElementById(listId);
    if (!listElement) return;

    listElement.innerHTML = '';
    
    rankings.forEach(ranking => {
      const item = document.createElement('div');
      item.className = 'ranking-item';
      item.innerHTML = `
        <span class="ranking-position">${ranking.position}</span>
        <span class="ranking-name">${ranking.name}</span>
        <span class="ranking-score">${ranking.score.toLocaleString()}</span>
      `;
      listElement.appendChild(item);
    });
  }
}

// Instanciar y configurar
const gameLauncher = new GameLauncher();

function setupDownloadButton() {
  gameLauncher.setupDownloadButton();
}

export { setupDownloadButton, gameLauncher };
