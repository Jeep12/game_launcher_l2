const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn, exec } = require('child_process');

// 🧠 Hot reload para desarrollo
try {
  require('electron-reloader')(module);
} catch (_) {}

let mainWindow;
let splash;

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


  errorWin.loadFile(path.join(__dirname, 'src/static/views/error.html'));

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
  });

  splash.loadFile(path.join(__dirname, 'splash.html'));

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    resizable: false,
    show: false,
    backgroundColor: '#212121',
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.once('ready-to-show', () => {
    setTimeout(() => {
      splash.destroy();
      mainWindow.show();
    }, 500);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
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

  mainWindow.webContents.openDevTools();
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
