export function initFolderSelector() {
  const selectFolderButton = document.getElementById('btnSelectFolder');
  const folderPathElement = document.getElementById('folderPath');

  // Verifica si ya hay una ruta guardada en localStorage al cargar la página
  const savedFolderPath = localStorage.getItem('selectedFolder');
  if (savedFolderPath) {
      console.log('Carpeta guardada previamente:', savedFolderPath);
      folderPathElement.innerText = `${savedFolderPath}`;
  }

  if (selectFolderButton) {
      console.log('Botón encontrado, añadiendo evento');
      selectFolderButton.addEventListener('click', () => {
          console.log('Botón clickeado, enviando evento...');
          window.electron.openFolderDialog(); // Llamar la función expuesta desde preload.js
      });
  } else {
      console.error('Botón no encontrado!');
  }

  window.electron.onFolderSelected((folderPath) => {
      if (folderPath) {
          localStorage.setItem('selectedFolder', folderPath); // Guardar la ruta de la carpeta en localStorage
          folderPathElement.innerText = `${folderPath}`; // Mostrar la ruta seleccionada
      } else {
          console.error('No se pudo obtener la ruta de la carpeta seleccionada.');
      }
  });
}
