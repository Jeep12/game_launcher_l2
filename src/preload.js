const { contextBridge, ipcRenderer } = require('electron');

// Exponer funciones específicas al renderer
contextBridge.exposeInMainWorld('electron', {
  sendMessage: (message) => ipcRenderer.send('message', message),
  onMessage: (callback) => ipcRenderer.on('message', callback)
});
