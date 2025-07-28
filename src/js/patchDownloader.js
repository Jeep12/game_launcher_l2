// patchDownloader.js

class PatchDownloader {
  constructor() {
    this.baseUrl = 'https://patch.l2terra.online/';
    this.token = null;
    this.tokenExpiry = null;
    this.downloadQueue = [];
    this.isDownloading = false;
    this.currentDownload = null;
    this.retryAttempts = 3;
    this.downloadedFiles = new Set();
    this.failedFiles = new Set();
    this.tempDownloadFolder = null;
    this.userDataFolder = null;
    this.updateStateFile = null;
    this.extractionProgress = 0;
    this.downloadProgress = 0;
    this.currentFolder = null; // Nueva propiedad para trackear la carpeta actual
  }

  // Función para generar un hash simple de la ruta de la carpeta
  generateFolderHash(folderPath) {
    // Crear un hash simple basado en la ruta de la carpeta
    let hash = 0;
    for (let i = 0; i < folderPath.length; i++) {
      const char = folderPath.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convertir a entero de 32 bits
    }
    return Math.abs(hash).toString(16);
  }

  // Inicializar el downloader
  async initialize() {
    try {
      console.log('[PATCH] Inicializando PatchDownloader...');
      
      // Obtener carpeta userData para archivo de estado
      if (window.electron) {
        this.userDataFolder = await window.electron.getUserDataPath();
        console.log('[PATCH] UserData folder:', this.userDataFolder);
      }
      
      await this.getToken();
      console.log('[PATCH] Inicialización completada');
      return true;
    } catch (error) {
      console.error('[PATCH] Error en inicialización:', error);
      throw error;
    }
  }

  // Actualizar el estado de la carpeta actual
  updateCurrentFolder(folderPath) {
    this.currentFolder = folderPath;
    if (this.currentFolder && window.electron) {
      const folderHash = this.generateFolderHash(this.currentFolder);
      this.updateStateFile = window.electron.path.join(this.userDataFolder, `update_state_${folderHash}.json`);
      console.log('[PATCH] Current folder updated:', this.currentFolder);
      console.log('[PATCH] Folder hash:', folderHash);
      console.log('[PATCH] Update state file:', this.updateStateFile);
    }
  }

  // Limpiar estado cuando se cambia de carpeta
  clearStateForFolder(folderPath) {
    if (window.electron && this.userDataFolder) {
      const folderHash = this.generateFolderHash(folderPath);
      const stateFile = window.electron.path.join(this.userDataFolder, `update_state_${folderHash}.json`);
      
      try {
        // Intentar eliminar el archivo de estado si existe
        window.electron.writeFile(stateFile, '').then(() => {
          console.log('[PATCH] Cleared state for folder:', folderPath);
        }).catch(() => {
          // Si el archivo no existe, no hay problema
          console.log('[PATCH] No state file to clear for folder:', folderPath);
        });
      } catch (error) {
        console.log('[PATCH] Error clearing state:', error);
      }
    }
  }

  // Obtener token JWT del servidor
  async getToken() {
    try {
      console.log('[PATCH] === Getting JWT token ===');
      console.log('[PATCH] Requesting from URL:', this.baseUrl);
      
      const response = await fetch(this.baseUrl);
      console.log('[PATCH] Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('[PATCH] Token response data:', data);
      
      if (!data.success) {
        throw new Error(data.message || 'Error al obtener token');
      }
      
      this.token = data.token;
      this.tokenExpiry = Date.now() + (data.expires_in * 1000);
      
      console.log('[PATCH] Token obtained successfully');
      console.log('[PATCH] Token expiry:', new Date(this.tokenExpiry));
      return this.token;
      
    } catch (error) {
      console.error('[PATCH] Error obteniendo token:', error);
      throw error;
    }
  }

  // Verificar si el token está expirado y renovarlo si es necesario
  async checkAndUpdateToken() {
    const now = Date.now();
    const bufferTime = 5 * 60 * 1000; // 5 minutos de buffer
    
    if (!this.token || (this.tokenExpiry && now >= (this.tokenExpiry - bufferTime))) {
      console.log('[PATCH] Token expirado o próximo a expirar, renovando...');
      await this.getToken();
    }
    
    return this.token;
  }

  // Obtener archivos disponibles del servidor
  async getAvailableFiles() {
    try {
      console.log('[PATCH] === Getting available files ===');
      console.log('[PATCH] Base URL:', this.baseUrl);
      
      await this.checkAndUpdateToken();
      console.log('[PATCH] Token obtained:', this.token ? 'YES' : 'NO');
      
      const requestUrl = `${this.baseUrl}?action=list&token=${this.token}`;
      console.log('[PATCH] Request URL:', requestUrl);
      
      const response = await fetch(requestUrl);
      console.log('[PATCH] Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('[PATCH] Response data:', data);
      
      if (!data.success) {
        throw new Error(data.message || 'Error al obtener lista de archivos');
      }
      
      console.log('[PATCH] Archivos disponibles:', data.files);
      return data.files || [];
      
    } catch (error) {
      console.error('[PATCH] Error obteniendo archivos disponibles:', error);
      throw error;
    }
  }

    // Obtener archivos locales
  async getLocalFiles(destFolder) {
    try {
      console.log('[PATCH] === Getting local files ===');
      console.log('[PATCH] Destination folder:', destFolder);
      
      // Actualizar la carpeta actual
      this.updateCurrentFolder(destFolder);
      
      if (window.electron) {
        console.log('[PATCH] Using Electron API');
        return await window.electron.getLocalFiles(destFolder);
      } else {
        console.log('[PATCH] Electron no está disponible, usando fallback');
        // Fallback: simular archivos locales vacíos
        return [];
      }
    } catch (error) {
      console.error('[PATCH] Error obteniendo archivos locales:', error);
      return [];
    }
  }

  // Leer estado de actualización guardado
  async getUpdateState() {
    try {
      if (!this.updateStateFile || !window.electron || !this.currentFolder) {
        console.log('[PATCH] No update state file available - folder not set or electron not available');
        return null;
      }

      const stateData = await window.electron.readFile(this.updateStateFile);
      if (stateData) {
        const state = JSON.parse(stateData);
        console.log('[PATCH] Update state loaded for folder:', this.currentFolder);
        console.log('[PATCH] Update state:', state);
        return state;
      }
      
      console.log('[PATCH] No update state file found for folder:', this.currentFolder);
      return null;
    } catch (error) {
      console.log('[PATCH] Error reading update state:', error);
      return null;
    }
  }

  // Guardar estado de actualización en userData
  async saveUpdateState(serverFiles) {
    try {
      if (!this.updateStateFile || !window.electron || !this.currentFolder) {
        console.log('[PATCH] Cannot save update state - no file path available or folder not set');
        return;
      }

      const state = {
        folderPath: this.currentFolder,
        lastUpdate: Date.now(),
        serverFiles: serverFiles.map(file => ({
          name: file.name,
          size: file.size,
          modified: file.modified,
          modified_date: file.modified_date
        }))
      };

      await window.electron.writeFile(this.updateStateFile, JSON.stringify(state, null, 2));
      console.log('[PATCH] Update state saved for folder:', this.currentFolder);
      console.log('[PATCH] State:', state);
    } catch (error) {
      console.error('[PATCH] Error saving update state:', error);
    }
  }

  // Comparar archivos y obtener los que faltan o están desactualizados
  getMissingFiles(serverFiles, localFiles) {
    const localFileNames = new Set(localFiles.map(f => f.name));
    return serverFiles.filter(file => !localFileNames.has(file.name));
  }

  // Verificar si un archivo local está actualizado
  isFileUpToDate(localFile, serverFile) {
    console.log(`[PATCH] === Checking file: ${serverFile.name} ===`);
    console.log(`[PATCH] Local file:`, localFile);
    console.log(`[PATCH] Server file:`, serverFile);
    
    if (!localFile || !serverFile) {
      console.log(`[PATCH] ${serverFile.name}: Missing file data`);
      return false;
    }
    
    // Comparar tamaños
    if (localFile.size !== serverFile.size) {
      console.log(`[PATCH] ${serverFile.name}: Tamaño diferente (local: ${localFile.size}, servidor: ${serverFile.size})`);
      return false;
    }
    
    // Comparar fechas de modificación
    if (localFile.modified && serverFile.modified) {
      const localDate = new Date(localFile.modified * 1000);
      const serverDate = new Date(serverFile.modified * 1000);
      
      console.log(`[PATCH] ${serverFile.name}: Local date: ${localDate.toISOString()}`);
      console.log(`[PATCH] ${serverFile.name}: Server date: ${serverDate.toISOString()}`);
      
      if (localDate.getTime() < serverDate.getTime()) {
        console.log(`[PATCH] ${serverFile.name}: Fecha desactualizada (local: ${localDate.toISOString()}, servidor: ${serverDate.toISOString()})`);
        return false;
      }
    } else {
      console.log(`[PATCH] ${serverFile.name}: No modification dates available`);
    }
    
    console.log(`[PATCH] ${serverFile.name}: Archivo actualizado ✓`);
    return true;
  }

  // Obtener archivos que necesitan actualización
  async getFilesToUpdate(serverFiles, localFiles) {
    console.log('[PATCH] === Comparing files ===');
    console.log('[PATCH] Server files count:', serverFiles.length);
    console.log('[PATCH] Local files count:', localFiles.length);
    console.log('[PATCH] Current folder:', this.currentFolder);
    
    // Primero intentar usar el estado guardado
    const updateState = await this.getUpdateState();
    if (updateState && updateState.serverFiles && updateState.folderPath === this.currentFolder) {
      console.log('[PATCH] Using saved update state for comparison');
      
      const savedFilesMap = new Map(updateState.serverFiles.map(f => [f.name, f]));
      const filesToUpdate = [];
      
      for (const serverFile of serverFiles) {
        console.log(`[PATCH] Checking server file: ${serverFile.name}`);
        const savedFile = savedFilesMap.get(serverFile.name);
        
        if (!savedFile) {
          // Archivo nuevo en el servidor
          console.log(`[PATCH] ${serverFile.name}: Archivo nuevo en servidor`);
          filesToUpdate.push(serverFile);
        } else if (savedFile.modified !== serverFile.modified || savedFile.size !== serverFile.size) {
          // Archivo actualizado en el servidor
          console.log(`[PATCH] ${serverFile.name}: Actualizado en servidor`);
          filesToUpdate.push(serverFile);
        } else {
          console.log(`[PATCH] ${serverFile.name}: Ya está actualizado`);
        }
      }
      
      console.log('[PATCH] Total files to update (using state):', filesToUpdate.length);
      return filesToUpdate;
    } else if (updateState && updateState.folderPath !== this.currentFolder) {
      console.log('[PATCH] Saved state is for different folder, ignoring state');
    }
    
    // Fallback: comparar con archivos locales
    console.log('[PATCH] No saved state or different folder, comparing with local files');
    const localFilesMap = new Map(localFiles.map(f => [f.name, f]));
    const filesToUpdate = [];
    
    for (const serverFile of serverFiles) {
      console.log(`[PATCH] Checking server file: ${serverFile.name}`);
      const localFile = localFilesMap.get(serverFile.name);
      
      if (!localFile) {
        // Archivo no existe localmente
        console.log(`[PATCH] ${serverFile.name}: Archivo nuevo`);
        filesToUpdate.push(serverFile);
      } else if (!this.isFileUpToDate(localFile, serverFile)) {
        // Archivo existe pero está desactualizado
        console.log(`[PATCH] ${serverFile.name}: Necesita actualización`);
        filesToUpdate.push(serverFile);
      } else {
        console.log(`[PATCH] ${serverFile.name}: Ya está actualizado`);
      }
    }
    
    console.log('[PATCH] Total files to update (using local files):', filesToUpdate.length);
    return filesToUpdate;
  }

  // Crear carpeta temporal para descargas
  async createTempDownloadFolder(destFolder) {
    try {
      // Verificar que window.electron esté disponible
      if (!window.electron) {
        throw new Error('Electron no está disponible');
      }
      
      // Usar la función path del preload
      this.tempDownloadFolder = window.electron.path.join(destFolder, 'temp_download');
      await window.electron.createDirectory(this.tempDownloadFolder);
      console.log('[PATCH] Carpeta temporal creada:', this.tempDownloadFolder);
      return this.tempDownloadFolder;
    } catch (error) {
      console.error('[PATCH] Error creando carpeta temporal:', error);
      throw error;
    }
  }

  // Descargar y extraer todos los archivos automáticamente
  async downloadAndExtractAllFiles(destFolder, onDownloadProgress, onExtractionProgress, onFileComplete, onComplete, onError) {
    if (this.isDownloading) {
      console.log('[PATCH] Ya hay una descarga en progreso');
      return;
    }

    try {
      this.isDownloading = true;
      this.downloadedFiles.clear();
      this.failedFiles.clear();
      this.extractionProgress = 0;
      this.downloadProgress = 0;

      console.log('[PATCH] Iniciando descarga y extracción de todos los archivos...');

      // Crear carpeta temporal
      await this.createTempDownloadFolder(destFolder);

      // Obtener archivos disponibles
      const serverFiles = await this.getAvailableFiles();
      if (serverFiles.length === 0) {
        onComplete?.('No hay archivos para descargar');
        return;
      }

      // Obtener archivos locales para comparar
      const localFiles = await this.getLocalFiles(destFolder);
      const filesToUpdate = await this.getFilesToUpdate(serverFiles, localFiles);
      
      if (filesToUpdate.length === 0) {
        console.log('[PATCH] Todos los archivos están actualizados');
        onComplete?.('Todos los archivos están actualizados ✓');
        return;
      }

      console.log(`[PATCH] Descargando y extrayendo ${filesToUpdate.length} archivos de ${serverFiles.length} totales...`);

      let completedFiles = 0;
      const totalFiles = filesToUpdate.length;

      // Procesar archivos uno por uno
      for (const file of filesToUpdate) {
        if (!this.isDownloading) {
          console.log('[PATCH] Proceso cancelado por el usuario');
          break;
        }

        try {
          console.log(`[PATCH] Procesando archivo: ${file.name}`);
          
          // Descargar archivo
          const zipPath = await this.downloadFile(file.name, this.tempDownloadFolder, (progress) => {
            this.downloadProgress = progress.percent;
            onDownloadProgress?.(file.name, progress.downloaded, progress.total, progress.percent);
          });

          // Extraer archivo
          await this.extractFile(zipPath, destFolder, (progress) => {
            this.extractionProgress = progress;
            onExtractionProgress?.(file.name, progress);
          });

          // Mover ZIP a carpeta temporal
          await this.moveZipToTemp(zipPath, file.name);

          console.log(`[PATCH] Archivo procesado exitosamente: ${file.name}`);
          this.downloadedFiles.add(file.name);
          completedFiles++;

          // Notificar completado del archivo
          onFileComplete?.(file.name, completedFiles, totalFiles);

        } catch (error) {
          console.error(`[PATCH] Error procesando ${file.name}:`, error);
          this.failedFiles.add(file.name);
          completedFiles++;
        }
      }

      // Limpiar carpeta temporal
      await this.cleanupTempFolder();

      // Guardar estado de actualización si se descargaron archivos
      if (this.downloadedFiles.size > 0) {
        await this.saveUpdateState(serverFiles);
      }

      // Generar resumen final
      const summary = {
        total: totalFiles,
        downloaded: this.downloadedFiles.size,
        failed: this.failedFiles.size,
        downloadedFiles: Array.from(this.downloadedFiles),
        failedFiles: Array.from(this.failedFiles)
      };

      console.log('[PATCH] Proceso completado:', summary);
      onComplete?.(summary);

    } catch (error) {
      console.error('[PATCH] Error en proceso masivo:', error);
      onError?.(error);
    } finally {
      this.isDownloading = false;
    }
  }

  // Descargar archivo individual
  async downloadFile(filename, destFolder, onProgress) {
    try {
      // Verificar que window.electron esté disponible
      if (!window.electron) {
        throw new Error('Electron no está disponible');
      }
      
      await this.checkAndUpdateToken();
      
      // Construir URL de descarga
      const downloadUrl = `${this.baseUrl}?action=download&token=${this.token}&file=${filename}`;
      
      console.log('[PATCH] Iniciando descarga:', filename, 'en carpeta:', destFolder);
      
      // Usar la API de Electron para descarga con progreso
      return new Promise((resolve, reject) => {
        // Configurar listeners para progreso y eventos
        this.setupDownloadListeners(onProgress, resolve, reject);
        
        // Iniciar descarga
        window.electron.downloadFile(downloadUrl, destFolder, filename);
      });
      
    } catch (error) {
      console.error('[PATCH] Error iniciando descarga:', error);
      throw error;
    }
  }

  // Extraer archivo ZIP
  async extractFile(zipPath, destFolder, onProgress) {
    try {
      // Verificar que window.electron esté disponible
      if (!window.electron) {
        throw new Error('Electron no está disponible');
      }
      
      console.log('[PATCH] Extrayendo archivo:', zipPath, 'a:', destFolder);
      
      return new Promise((resolve, reject) => {
        // Configurar listener para progreso de extracción
        this.setupExtractionListeners(onProgress, resolve, reject);
        
        // Iniciar extracción
        window.electron.extractZipFile(zipPath, destFolder);
      });
      
    } catch (error) {
      console.error('[PATCH] Error extrayendo archivo:', error);
      throw error;
    }
  }

  // Mover ZIP a carpeta temporal
  async moveZipToTemp(zipPath, filename) {
    try {
      // Verificar que window.electron esté disponible
      if (!window.electron) {
        console.error('[PATCH] Electron no está disponible');
        return;
      }
      
      // Verificar si el archivo ya está en la carpeta temporal
      const tempZipPath = window.electron.path.join(this.tempDownloadFolder, filename);
      if (zipPath === tempZipPath) {
        console.log('[PATCH] ZIP ya está en carpeta temporal:', filename);
        return;
      }
      
      // En lugar de mover, copiar el ZIP a la carpeta temporal
      // Esto mantiene el ZIP original en la carpeta principal
      await window.electron.copyFile(zipPath, tempZipPath);
      console.log('[PATCH] ZIP copiado a carpeta temporal:', filename);
    } catch (error) {
      console.error('[PATCH] Error copiando ZIP:', error);
      // No lanzar error, solo log
    }
  }

  // Limpiar carpeta temporal
  async cleanupTempFolder() {
    try {
      // Verificar que window.electron esté disponible
      if (!window.electron) {
        console.error('[PATCH] Electron no está disponible');
        return;
      }
      
      if (this.tempDownloadFolder) {
        console.log('[PATCH] Limpiando carpeta temporal:', this.tempDownloadFolder);
        await window.electron.removeDirectory(this.tempDownloadFolder);
        this.tempDownloadFolder = null;
        console.log('[PATCH] Carpeta temporal eliminada');
      }
    } catch (error) {
      console.error('[PATCH] Error limpiando carpeta temporal:', error);
      // No lanzar error, solo log
    }
  }

  // Configurar listeners para eventos de descarga
  setupDownloadListeners(onProgress, onComplete, onError) {
    // Verificar que window.electron esté disponible
    if (!window.electron) {
      console.error('[PATCH] Electron no está disponible para configurar listeners');
      return;
    }
    
    // Limpiar listeners anteriores
    this.cleanupDownloadListeners();
    
    // Configurar nuevos listeners
    this.downloadProgressListener = (progressData) => {
      console.log('[PATCH] Progreso descarga:', progressData);
      onProgress?.(progressData);
    };
    
    this.downloadErrorListener = (error) => {
      console.error('[PATCH] Error en descarga:', error);
      this.cleanupDownloadListeners();
      onError?.(error);
    };
    
    this.downloadCompleteListener = (info) => {
      console.log('[PATCH] Descarga completada:', info);
      this.cleanupDownloadListeners();
      onComplete?.(info.destPath);
    };
    
    // Registrar listeners
    window.electron.onDownloadProgress(this.downloadProgressListener);
    window.electron.onDownloadError(this.downloadErrorListener);
    window.electron.onDownloadDone(this.downloadCompleteListener);
  }

  // Configurar listeners para eventos de extracción
  setupExtractionListeners(onProgress, onComplete, onError) {
    // Verificar que window.electron esté disponible
    if (!window.electron) {
      console.error('[PATCH] Electron no está disponible para configurar listeners de extracción');
      return;
    }
    
    // Limpiar listeners anteriores
    this.cleanupExtractionListeners();
    
    // Configurar nuevos listeners
    this.extractionProgressListener = (progressData) => {
      console.log('[PATCH] Progreso extracción:', progressData);
      onProgress?.(progressData);
    };
    
    this.extractionErrorListener = (error) => {
      console.error('[PATCH] Error en extracción:', error);
      this.cleanupExtractionListeners();
      onError?.(error);
    };
    
    this.extractionCompleteListener = (info) => {
      console.log('[PATCH] Extracción completada:', info);
      this.cleanupExtractionListeners();
      onComplete?.(info);
    };
    
    // Registrar listeners
    window.electron.onExtractionProgress(this.extractionProgressListener);
    window.electron.onExtractionError(this.extractionErrorListener);
    window.electron.onExtractionDone(this.extractionCompleteListener);
  }

  // Limpiar listeners de descarga
  cleanupDownloadListeners() {
    if (this.downloadProgressListener) {
      // En una implementación real, necesitarías remover los listeners
      // Por ahora, simplemente los sobrescribimos
    }
  }

  // Limpiar listeners de extracción
  cleanupExtractionListeners() {
    if (this.extractionProgressListener) {
      // En una implementación real, necesitarías remover los listeners
      // Por ahora, simplemente los sobrescribimos
    }
  }

  // Cancelar proceso actual
  cancelDownload() {
    if (this.isDownloading) {
      console.log('[PATCH] Cancelando proceso...');
      this.isDownloading = false;
      this.cleanupDownloadListeners();
      this.cleanupExtractionListeners();
      this.currentDownload = null;
      
      // Limpiar carpeta temporal
      this.cleanupTempFolder();
    }
  }

  // Reintentar descarga con backoff exponencial
  async retryDownload(filename, destFolder, onProgress, onComplete, onError, attempt = 1) {
    try {
      await this.downloadFile(filename, destFolder, onProgress, onComplete, onError);
    } catch (error) {
      if (attempt < this.retryAttempts) {
        console.log(`[PATCH] Reintentando descarga (${attempt}/${this.retryAttempts})...`);
        const delay = Math.pow(2, attempt) * 1000; // Backoff exponencial
        setTimeout(() => {
          this.retryDownload(filename, destFolder, onProgress, onComplete, onError, attempt + 1);
        }, delay);
      } else {
        console.error('[PATCH] Máximo de reintentos alcanzado');
        onError?.(`Error después de ${this.retryAttempts} intentos: ${error}`);
      }
    }
  }

  // Obtener información del archivo
  async getFileInfo(filename) {
    try {
      await this.checkAndUpdateToken();
      const response = await fetch(`${this.baseUrl}?action=info&file=${filename}&token=${this.token}`);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('[PATCH] Error obteniendo información del archivo:', error);
      throw error;
    }
  }

  // Verificar espacio disponible
  async checkDiskSpace(requiredBytes) {
    try {
      // En una implementación real, verificarías el espacio en disco
      // Por ahora, asumimos que hay espacio suficiente
      return true;
    } catch (error) {
      console.error('[PATCH] Error verificando espacio en disco:', error);
      return false;
    }
  }

  // Obtener estadísticas de descarga
  getDownloadStats() {
    return {
      isDownloading: this.isDownloading,
      downloadedFiles: Array.from(this.downloadedFiles),
      failedFiles: Array.from(this.failedFiles),
      totalDownloaded: this.downloadedFiles.size,
      totalFailed: this.failedFiles.size,
      downloadProgress: this.downloadProgress,
      extractionProgress: this.extractionProgress
    };
  }
}

export default PatchDownloader; 