const { contextBridge, ipcRenderer } = require('electron');

// Exponer funciones específicas al renderer
contextBridge.exposeInMainWorld('electron', {
  openFolderDialog: () => ipcRenderer.send('open-folder-dialog'),  // Solicitar la apertura del diálogo de selección de carpeta
  onFolderSelected: (callback) => ipcRenderer.on('selected-folder', (_, folderPath) => callback(folderPath)),
  launchGame: (folderPath) => ipcRenderer.send('launch-game', folderPath),

});

