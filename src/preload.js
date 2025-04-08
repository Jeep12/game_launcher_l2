const { contextBridge, ipcRenderer } = require('electron');

// Exponer funciones específicas al renderer
contextBridge.exposeInMainWorld('electron', {
  openFolderDialog: () => ipcRenderer.send('open-folder-dialog'),  // Solicitar la apertura del diálogo de selección de carpeta
  onFolderSelected: (callback) => ipcRenderer.on('selected-folder', (_, folderPath) => callback(folderPath)),
});
window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll("link[rel=stylesheet]");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href) {
      link.setAttribute("href", `${href}?v=${new Date().getTime()}`);
    }
  });
});
