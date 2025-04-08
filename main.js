const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron');
const path = require('path');

// 🧠 Hot reload para desarrollo
try {
  require('electron-reloader')(module);
} catch (_) {}

let mainWindow;
let splash;

function createWindow() {
  // Splash Screen
  splash = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    backgroundColor: '#212121',
  });

  splash.loadFile(path.join(__dirname, 'splash.html'));

  // Ventana principal
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
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

  //Menu.setApplicationMenu(null); // Oculta el menú
  mainWindow.webContents.openDevTools(); // DevTools
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
