const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

// Función para crear la ventana principal
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js'),
      nodeIntegration: false, 
      contextIsolation: true, 
      sandbox: true, 
    },
  });

  // Eliminar el menú de la aplicación
  Menu.setApplicationMenu(null);

  // Cargar el archivo HTML principal
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Abre las DevTools solo si está en desarrollo
  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Evento cuando la aplicación está lista
app.whenReady().then(createWindow);

// Evento cuando todas las ventanas están cerradas
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Evento cuando la aplicación se activa en macOS
app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
