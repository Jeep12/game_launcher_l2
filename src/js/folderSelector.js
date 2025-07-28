export function initFolderSelector() {
    console.log('=== Initializing FolderSelector ===');
    const selectFolderButton = document.getElementById('btnSelectFolder');
    const folderPathElement = document.getElementById('folderPath');

    if (!selectFolderButton || !folderPathElement) {
        console.error('DOM elements not found in folderSelector:', {
            selectFolderButton: !!selectFolderButton,
            folderPathElement: !!folderPathElement
        });
        return;
    }

    console.log('DOM elements found correctly');

    function updateUI() {
        const savedFolderPath = localStorage.getItem('selectedFolder');
        console.log('Folder saved in localStorage:', savedFolderPath);
        if (savedFolderPath) {
            selectFolderButton.textContent = 'Change Folder';
            folderPathElement.innerText = `Selected folder: ${savedFolderPath}`;
        } else {
            selectFolderButton.textContent = 'Select Folder';
            folderPathElement.innerText = 'Selected folder: No folder selected';
        }
    }

    updateUI();

    // Función para inicializar cuando window.electron esté disponible
    function initWhenElectronReady() {
        if (window.electron) {
            // Elimina listeners previos
            const newBtn = selectFolderButton.cloneNode(true);
            selectFolderButton.parentNode.replaceChild(newBtn, selectFolderButton);
            newBtn.addEventListener('click', () => {
                console.log('=== Select Folder button clicked ===');
                console.log('window.electron exists:', !!window.electron);
                console.log('window.electron.openFolderDialog exists:', !!window.electron.openFolderDialog);
                window.electron.openFolderDialog();
            });

            window.electron.onFolderSelected((folderPath) => {
                console.log('=== Folder selected ===');
                console.log('folderPath:', folderPath);
                if (folderPath) {
                    localStorage.setItem('selectedFolder', folderPath);
                    console.log('Folder saved in localStorage');
                    
                    // Limpiar estado de la carpeta anterior si existe
                    const previousFolder = localStorage.getItem('previousSelectedFolder');
                    if (previousFolder && previousFolder !== folderPath && window.gameLauncher) {
                        console.log('Clearing state for previous folder:', previousFolder);
                        window.gameLauncher.patchDownloader.clearStateForFolder(previousFolder);
                    }
                    
                    // Guardar la carpeta actual como anterior para la próxima vez
                    localStorage.setItem('previousSelectedFolder', folderPath);
                } else {
                    localStorage.removeItem('selectedFolder');
                    console.log('Folder removed from localStorage');
                }
                updateUI();
                
                // Check client status after selecting folder
                if (window.gameLauncher) {
                    console.log('Checking client status...');
                    window.gameLauncher.checkClientStatus();
                } else {
                    console.log('window.gameLauncher not available');
                }
            });
        } else {
            // Si window.electron no está disponible, reintentar en 100ms
            setTimeout(initWhenElectronReady, 100);
        }
    }

    // Iniciar cuando esté listo
    initWhenElectronReady();
}
