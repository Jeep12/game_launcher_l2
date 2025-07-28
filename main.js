const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn, exec } = require('child_process');
const https = require('https');
const http = require('http');

// Función para calcular el tamaño de un directorio
function getDirectorySize(dirPath) {
  let totalSize = 0;
  
  function calculateSize(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        calculateSize(itemPath);
      } else {
        totalSize += stats.size;
      }
    }
  }
  
  calculateSize(dirPath);
  return totalSize;
}

// 🧠 Hot reload para desarrollo
try {
  require('electron-reloader')(module);
} catch (_) {}

let mainWindow;
let splash;

const isDev = !app.isPackaged;
function resolveAssetPath(...segments) {
  if (isDev) {
    return path.join(__dirname, ...segments);
  } else {
    // En producción, los archivos están en process.resourcesPath
    return path.join(process.resourcesPath, 'app', ...segments);
  }
}

// 🧱 Ventana de error personalizada
function showErrorWindow(msg = 'Ocurrió un error.') {
  const errorWin = new BrowserWindow({
    width: 500,
    height: 250,
    resizable: false,
    modal: true,
    parent: mainWindow,
    frame: false, 
    backgroundColor: '#252525',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  errorWin.setMenu(null);

  errorWin.loadFile(resolveAssetPath('src', 'static', 'views', 'error.html'));

  errorWin.webContents.once('did-finish-load', () => {
    errorWin.webContents.executeJavaScript(`
      document.getElementById('error-msg').innerText = \`${msg}\`;
    `);
  });
}

function createWindow() {
  splash = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    backgroundColor: '#212121',
    icon: resolveAssetPath('src', 'static', 'assets', 'terraico1.ico'),
  });

  splash.loadFile(resolveAssetPath('splash.html'));

  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    frame: false,
    resizable: false,
    show: false,
    backgroundColor: '#212121',
    fullscreenable: false,
    maximizable: false,
    icon: resolveAssetPath('src', 'static', 'assets', 'terraico1.ico'),
    webPreferences: {
      preload: resolveAssetPath('src', 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });

  mainWindow.loadFile(resolveAssetPath('index.html'));

  mainWindow.once('ready-to-show', () => {
    setTimeout(() => {
      splash.destroy();
      mainWindow.show();
    }, 2000);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Prevenir pantalla completa y maximización
  mainWindow.on('enter-full-screen', () => {
    mainWindow.setFullScreen(false);
  });

  mainWindow.on('leave-full-screen', () => {
    mainWindow.setFullScreen(false);
  });

  mainWindow.on('maximize', () => {
    mainWindow.unmaximize();
  });

  // Manejador para abrir enlaces externos
  mainWindow.webContents.on('new-window', (event, navigationUrl) => {
    event.preventDefault();
    require('electron').shell.openExternal(navigationUrl);
  });

  // Manejador IPC para abrir enlaces externos
  ipcMain.handle('open-external-link', async (event, url) => {
    console.log('[MAIN] IPC open-external-link llamado con URL:', url);
    try {
      await require('electron').shell.openExternal(url);
      console.log('[MAIN] Enlace abierto exitosamente');
      return { success: true };
    } catch (error) {
      console.error('[MAIN] Error abriendo enlace externo:', error);
      return { success: false, error: error.message };
    }
  });

  // Manejadores para la barra de título personalizada
  ipcMain.on('minimize-window', () => {
    mainWindow.minimize();
  });

  ipcMain.on('close-window', () => {
    mainWindow.close();
  });

  // Manejador para extraer archivos ZIP
  ipcMain.handle('extract-zip-file', async (event, zipPath, destFolder) => {
    try {
      console.log(`[MAIN] Extracción solicitada:`);
      console.log(`[MAIN] ZIP original: ${zipPath}`);
      console.log(`[MAIN] Destino original: ${destFolder}`);
      
      // Normalizar rutas para evitar problemas con caracteres especiales
      const normalizedZipPath = path.resolve(zipPath);
      const normalizedDestFolder = path.resolve(destFolder);
      
      console.log('[MAIN] Extrayendo archivo:', normalizedZipPath, 'a:', normalizedDestFolder);
      
      // Verificar que el archivo ZIP existe
      if (!fs.existsSync(normalizedZipPath)) {
        console.error(`[MAIN] Archivo ZIP no existe: ${normalizedZipPath}`);
        throw new Error(`Archivo ZIP no existe: ${normalizedZipPath}`);
      }
      
      console.log(`[MAIN] Archivo ZIP existe: ${normalizedZipPath}`);
      
      // Crear directorio de destino si no existe
      if (!fs.existsSync(normalizedDestFolder)) {
        console.log(`[MAIN] Creando directorio de destino: ${normalizedDestFolder}`);
        fs.mkdirSync(normalizedDestFolder, { recursive: true });
      }
      
      // Función para enviar progreso de extracción
      const sendExtractionProgress = (progress) => {
        console.log('[MAIN] Progreso extracción:', progress);
        mainWindow.webContents.send('extraction-progress', progress);
      };
      
      const sendExtractionError = (error) => {
        console.error('[MAIN] Error extracción:', error);
        mainWindow.webContents.send('extraction-error', error);
      };
      
      const sendExtractionDone = (info) => {
        console.log('[MAIN] Extracción completada:', info);
        mainWindow.webContents.send('extraction-done', info);
      };
      
      // Intentar usar 7-Zip primero
      const sevenZipPath = 'C:\\Program Files\\7-Zip\\7z.exe';
      
      if (fs.existsSync(sevenZipPath)) {
        // Usar 7-Zip
        return new Promise((resolve, reject) => {
          const process = spawn(sevenZipPath, ['x', normalizedZipPath, `-o${normalizedDestFolder}`, '-y'], {
            stdio: 'pipe'
          });

          let stdout = '';
          let stderr = '';
          let progress = 0;

          process.stdout.on('data', (data) => {
            stdout += data.toString();
            // Simular progreso basado en la salida
            progress += 10;
            if (progress <= 100) {
              sendExtractionProgress(progress);
            }
          });

          process.stderr.on('data', (data) => {
            stderr += data.toString();
          });

          process.on('close', (code) => {
            if (code === 0) {
              console.log('[MAIN] Extracción con 7-Zip completada');
              sendExtractionProgress(100);
              sendExtractionDone({ destFolder: normalizedDestFolder });
              resolve();
            } else {
              console.error('[MAIN] Error en extracción con 7-Zip:', stderr);
              sendExtractionError(`Error extrayendo archivo: ${stderr}`);
              reject(new Error(`Error extrayendo archivo: ${stderr}`));
            }
          });

          process.on('error', (error) => {
            console.error('[MAIN] Error ejecutando 7-Zip:', error);
            sendExtractionError(error.message);
            reject(error);
          });
        });
      } else {
        // Fallback: usar PowerShell
        return new Promise((resolve, reject) => {
          const process = spawn('powershell', [
            '-Command', 
            `Expand-Archive -Path "${normalizedZipPath}" -DestinationPath "${normalizedDestFolder}" -Force`
          ], {
            stdio: 'pipe'
          });

          let stdout = '';
          let stderr = '';
          let progress = 0;

          process.stdout.on('data', (data) => {
            stdout += data.toString();
            // Simular progreso basado en la salida
            progress += 10;
            if (progress <= 100) {
              sendExtractionProgress(progress);
            }
          });

          process.stderr.on('data', (data) => {
            stderr += data.toString();
          });

          process.on('close', (code) => {
            if (code === 0) {
              console.log('[MAIN] Extracción con PowerShell completada');
              sendExtractionProgress(100);
              sendExtractionDone({ destFolder: normalizedDestFolder });
              resolve();
            } else {
              console.error('[MAIN] Error en extracción con PowerShell:', stderr);
              sendExtractionError(`Error extrayendo archivo: ${stderr}`);
              reject(new Error(`Error extrayendo archivo: ${stderr}`));
            }
          });

          process.on('error', (error) => {
            console.error('[MAIN] Error ejecutando PowerShell:', error);
            sendExtractionError(error.message);
            reject(error);
          });
        });
      }
    } catch (error) {
      console.error('[MAIN] Error en extracción:', error);
      throw error;
    }
  });

  // Manejador para obtener archivos de un directorio
  ipcMain.handle('get-directory-files', async (event, folderPath) => {
    try {
      console.log(`[MAIN] Obteniendo archivos del directorio: ${folderPath}`);
      const normalizedPath = path.resolve(folderPath);
      console.log(`[MAIN] Ruta normalizada: ${normalizedPath}`);
      
      // Verificar si el directorio existe
      if (!fs.existsSync(normalizedPath)) {
        console.error(`[MAIN] El directorio no existe: ${normalizedPath}`);
        return [];
      }
      
      const files = fs.readdirSync(normalizedPath);
      console.log(`[MAIN] Archivos encontrados:`, files);
      
      const fullPaths = files.map(file => path.join(normalizedPath, file));
      console.log(`[MAIN] Rutas completas:`, fullPaths);
      
      return fullPaths;
    } catch (error) {
      console.error('[MAIN] Error obteniendo archivos del directorio:', error);
      return [];
    }
  });

  // Manejador para obtener archivos recursivamente
  ipcMain.handle('get-directory-files-recursive', async (event, folderPath) => {
    try {
      const normalizedPath = path.resolve(folderPath);
      const files = [];
      
      const scanDirectory = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (stat.isFile()) {
            files.push(fullPath);
          }
        }
      };
      
      scanDirectory(normalizedPath);
      return files;
    } catch (error) {
      console.error('[MAIN] Error obteniendo archivos recursivamente:', error);
      return [];
    }
  });

  // Manejador para mover archivos
  ipcMain.handle('move-file', async (event, sourcePath, targetPath) => {
    try {
      // Normalizar rutas para evitar problemas con caracteres especiales
      const normalizedSourcePath = path.resolve(sourcePath);
      const normalizedTargetPath = path.resolve(targetPath);
      
      // Verificar que el archivo fuente existe
      if (!fs.existsSync(normalizedSourcePath)) {
        console.error(`[MAIN] Archivo fuente no existe: ${normalizedSourcePath}`);
        throw new Error(`Archivo fuente no existe: ${path.basename(normalizedSourcePath)}`);
      }
      
      // Si el archivo ya existe, hacer backup
      if (fs.existsSync(normalizedTargetPath)) {
        const backupPath = normalizedTargetPath + '.backup';
        fs.renameSync(normalizedTargetPath, backupPath);
      }
      
      // Crear directorio de destino si no existe
      const targetDir = path.dirname(normalizedTargetPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      
      // Verificar si el archivo fuente y destino son el mismo
      if (normalizedSourcePath === normalizedTargetPath) {
        console.log(`[MAIN] Archivo ya está en la ubicación correcta: ${path.basename(normalizedSourcePath)}`);
        return;
      }
      
      // Mover archivo a ubicación final
      fs.renameSync(normalizedSourcePath, normalizedTargetPath);
      
      console.log(`[MAIN] Archivo movido: ${path.basename(normalizedSourcePath)} -> ${path.basename(normalizedTargetPath)}`);
    } catch (error) {
      console.error('[MAIN] Error moviendo archivo:', error);
      throw error;
    }
  });

  // Manejador para copiar archivos
  ipcMain.handle('copy-file', async (event, sourcePath, targetPath) => {
    try {
      // Normalizar rutas para evitar problemas con caracteres especiales
      const normalizedSourcePath = path.resolve(sourcePath);
      const normalizedTargetPath = path.resolve(targetPath);
      
      // Verificar que el archivo fuente existe
      if (!fs.existsSync(normalizedSourcePath)) {
        console.error(`[MAIN] Archivo fuente no existe: ${normalizedSourcePath}`);
        throw new Error(`Archivo fuente no existe: ${path.basename(normalizedSourcePath)}`);
      }
      
      // Si el archivo ya existe, hacer backup
      if (fs.existsSync(normalizedTargetPath)) {
        const backupPath = normalizedTargetPath + '.backup';
        fs.renameSync(normalizedTargetPath, backupPath);
      }
      
      // Crear directorio de destino si no existe
      const targetDir = path.dirname(normalizedTargetPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      
      // Verificar si el archivo fuente y destino son el mismo
      if (normalizedSourcePath === normalizedTargetPath) {
        console.log(`[MAIN] Archivo ya está en la ubicación correcta: ${path.basename(normalizedSourcePath)}`);
        return;
      }
      
      // Copiar archivo a ubicación final
      fs.copyFileSync(normalizedSourcePath, normalizedTargetPath);
      
      console.log(`[MAIN] Archivo copiado: ${path.basename(normalizedSourcePath)} -> ${path.basename(normalizedTargetPath)}`);
    } catch (error) {
      console.error('[MAIN] Error copiando archivo:', error);
      throw error;
    }
  });

  // Manejador para leer archivos
  ipcMain.handle('read-file', async (event, filePath) => {
    try {
      const normalizedPath = path.resolve(filePath);
      
      if (!fs.existsSync(normalizedPath)) {
        console.log(`[MAIN] File does not exist: ${normalizedPath}`);
        return null;
      }
      
      const content = fs.readFileSync(normalizedPath, 'utf8');
      console.log(`[MAIN] File read successfully: ${path.basename(normalizedPath)}`);
      return content;
    } catch (error) {
      console.error('[MAIN] Error reading file:', error);
      return null;
    }
  });

  // Manejador para escribir archivos
  ipcMain.handle('write-file', async (event, filePath, content) => {
    try {
      const normalizedPath = path.resolve(filePath);
      
      // Crear directorio si no existe
      const dir = path.dirname(normalizedPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(normalizedPath, content, 'utf8');
      console.log(`[MAIN] File written successfully: ${path.basename(normalizedPath)}`);
      return true;
    } catch (error) {
      console.error('[MAIN] Error writing file:', error);
      throw error;
    }
  });

  // Manejador para obtener ruta de userData
  ipcMain.handle('get-user-data-path', async (event) => {
    try {
      const userDataPath = app.getPath('userData');
      console.log(`[MAIN] UserData path: ${userDataPath}`);
      return userDataPath;
    } catch (error) {
      console.error('[MAIN] Error getting userData path:', error);
      throw error;
    }
  });

  // Manejador para crear directorio
  ipcMain.handle('create-directory', async (event, dirPath) => {
    try {
      const normalizedPath = path.resolve(dirPath);
      
      if (!fs.existsSync(normalizedPath)) {
        fs.mkdirSync(normalizedPath, { recursive: true });
        console.log(`[MAIN] Directorio creado: ${normalizedPath}`);
      } else {
        console.log(`[MAIN] Directorio ya existe: ${normalizedPath}`);
      }
      
      return normalizedPath;
    } catch (error) {
      console.error('[MAIN] Error creando directorio:', error);
      throw error;
    }
  });

  // Manejador para eliminar directorio completo
  ipcMain.handle('remove-directory', async (event, dirPath) => {
    try {
      const normalizedPath = path.resolve(dirPath);
      
      // Función recursiva para eliminar directorio y contenido
      const removeDirectoryRecursive = (dir) => {
        if (fs.existsSync(dir)) {
          const items = fs.readdirSync(dir);
          
          for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
              removeDirectoryRecursive(fullPath);
            } else {
              fs.unlinkSync(fullPath);
            }
          }
          
          fs.rmdirSync(dir);
          console.log(`[MAIN] Eliminado directorio: ${dir}`);
        }
      };
      
      removeDirectoryRecursive(normalizedPath);
      
    } catch (error) {
      console.error('[MAIN] Error eliminando directorio:', error);
      throw error;
    }
  });

  // Manejador para limpiar archivos ZIP
  ipcMain.handle('cleanup-zip-files', async (event, folderPath) => {
    try {
      const files = fs.readdirSync(folderPath);
      const zipFiles = files.filter(file => file.endsWith('.zip'));
      
      console.log(`[MAIN] Eliminando ${zipFiles.length} archivos ZIP temporales`);

      for (const zipFile of zipFiles) {
        const zipPath = path.join(folderPath, zipFile);
        
        try {
          fs.unlinkSync(zipPath);
          console.log(`[MAIN] Eliminado: ${zipFile}`);
        } catch (error) {
          console.error(`[MAIN] Error eliminando ${zipFile}:`, error);
        }
      }

      // Limpiar directorios vacíos
      const cleanupEmptyDirectories = (dir) => {
        try {
          const items = fs.readdirSync(dir);
          
          for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
              cleanupEmptyDirectories(fullPath);
              
              // Verificar si el directorio está vacío después de limpiar
              const remainingItems = fs.readdirSync(fullPath);
              if (remainingItems.length === 0) {
                fs.rmdirSync(fullPath);
                console.log(`[MAIN] Eliminado directorio vacío: ${item}`);
              }
            }
          }
        } catch (error) {
          console.error('[MAIN] Error limpiando directorios:', error);
        }
      };

      cleanupEmptyDirectories(folderPath);
      
    } catch (error) {
      console.error('[MAIN] Error en limpieza:', error);
      throw error;
    }
  });

  ipcMain.on('open-folder-dialog', async (event) => {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openDirectory'],
    });

    event.reply('selected-folder', result.canceled ? null : result.filePaths[0]);
  });

  ipcMain.on('launch-game', (event, folderPath) => {
    const exePath = path.join(folderPath, 'system', 'L2.exe');
    console.log('Intentando ejecutar:', exePath);

    if (!fs.existsSync(exePath)) {
      // Usamos nuestra ventana personalizada
      showErrorWindow('No se encontró L2.exe en la carpeta seleccionada. Seleccione la carpeta raíz del cliente.');
      return;
    }

    const gameProcess = spawn(`"${exePath}"`, {
      shell: true,
      detached: true,
      stdio: 'ignore',
    });

    gameProcess.unref();
    console.log(`L2.exe lanzado con PID (no trackeado): ${gameProcess.pid}`);
  });

  ipcMain.handle('get-current-directory', () => {
    return process.cwd();
  });

  ipcMain.handle('get-local-files', async (event, folderPath) => {
    try {
      console.log('[MAIN] === Getting local files ===');
      console.log('[MAIN] Folder path:', folderPath);
      
      // Verificar si la carpeta existe
      if (!fs.existsSync(folderPath)) {
        console.log('[MAIN] Folder does not exist:', folderPath);
        return [];
      }
      
      const localFiles = [];
      const files = fs.readdirSync(folderPath);
      console.log('[MAIN] All files in folder:', files);
      
      for (const file of files) {
        console.log('[MAIN] Checking file:', file);
        
        // Buscar tanto archivos ZIP como archivos extraídos
        if (file.endsWith('.zip') || file === 'system' || file === 'bgc1' || file === 'documentosintitulo') {
          const filePath = path.join(folderPath, file);
          const stats = fs.statSync(filePath);
          
          // Si es un directorio (archivo extraído), obtener el tamaño total
          let size = stats.size;
          if (stats.isDirectory()) {
            try {
              const dirSize = getDirectorySize(filePath);
              size = dirSize;
            } catch (error) {
              console.log('[MAIN] Error calculating directory size:', error);
              size = 0;
            }
          }
          
          const fileInfo = {
            name: file,
            size: size,
            modified: Math.floor(stats.mtime.getTime() / 1000),
            modified_date: stats.mtime.toISOString(),
            isDirectory: stats.isDirectory()
          };
          
          console.log('[MAIN] File found (ZIP or extracted):', fileInfo);
          localFiles.push(fileInfo);
        }
      }
      
      console.log('[MAIN] Total ZIP files found:', localFiles.length);
      console.log('[MAIN] Archivos locales encontrados:', localFiles);
      return localFiles;
    } catch (error) {
      console.error('[MAIN] Error obteniendo archivos locales:', error);
      return [];
    }
  });

  ipcMain.on('download-file', (event, { url, destFolder, fileName }) => {
    console.log('[DOWNLOAD][MAIN] Iniciando descarga:', url, '->', path.join(destFolder, fileName));
    const sendProgress = (progress) => {
      console.log('[DOWNLOAD][MAIN] Progreso:', progress);
      mainWindow.webContents.send('download-progress', progress);
    };
    const sendError = (err) => {
      console.error('[DOWNLOAD][MAIN] Error:', err);
      mainWindow.webContents.send('download-error', err);
    };
    const sendDone = (info) => {
      console.log('[DOWNLOAD][MAIN] Finalizado:', info);
      mainWindow.webContents.send('download-done', info);
    };

    try {
      const proto = url.startsWith('https') ? https : http;
      const destPath = path.join(destFolder, fileName);
      const file = fs.createWriteStream(destPath);
      proto.get(url, (response) => {
        if (response.statusCode !== 200) {
          sendError(`Error HTTP: ${response.statusCode}`);
          file.close();
          fs.unlink(destPath, () => {});
          return;
        }
        const total = parseInt(response.headers['content-length'] || '0', 10);
        let downloaded = 0;
        response.on('data', (chunk) => {
          file.write(chunk);
          downloaded += chunk.length;
          if (total) {
            sendProgress({ percent: Math.round((downloaded / total) * 100), downloaded, total });
          }
        });
        response.on('end', () => {
          file.end();
          sendDone({ destPath });
        });
        response.on('error', (err) => {
          sendError(err.message);
          file.close();
          fs.unlink(destPath, () => {});
        });
      }).on('error', (err) => {
        sendError(err.message);
        file.close();
        fs.unlink(destPath, () => {});
      });
    } catch (err) {
      sendError(err.message);
    }
  });

   mainWindow.webContents.openDevTools(); // Comentado para no abrir la consola automáticamente
}

app.whenReady().then(createWindow);

// 💀 Matamos todos los L2.exe al cerrar
app.on('before-quit', () => {
  console.log('Cerrando todos los procesos L2.exe...');
  exec('taskkill /IM L2.exe /F', (error, stdout, stderr) => {
    if (error) {
      console.error('Error al cerrar L2.exe:', error.message);
    } else {
      console.log('Procesos L2.exe cerrados correctamente.');
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
