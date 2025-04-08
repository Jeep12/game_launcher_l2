const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  openFolderDialog: () => ipcRenderer.send('open-folder-dialog'),

  onFolderSelected: (callback) => {
    ipcRenderer.removeAllListeners('selected-folder'); // limpia anteriores
    ipcRenderer.once('selected-folder', (_, folderPath) => {
      callback(folderPath);
    });
  }
});
