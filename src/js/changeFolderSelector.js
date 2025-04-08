export function changeFolderPath(){
    window.electron.openFolderDialog(); // Llamar la función expuesta desde preload.js

    const folderPathElement = document.getElementById('folderPath');


    window.electron.onFolderSelected((folderPath) => {
        if (folderPath) {
            localStorage.setItem('selectedFolder', folderPath); // Guardar la ruta de la carpeta en localStorage
            folderPathElement.innerText = `${folderPath}`; // Mostrar la ruta seleccionada
        } else {
            console.error('No se pudo obtener la ruta de la carpeta seleccionada.');
        }
    });
}