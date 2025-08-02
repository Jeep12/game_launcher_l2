export function initFolderSelector() {
    console.log('=== Initializing FolderSelector ===');
    const selectFolderButton = document.getElementById('btnSelectFolder');
    const folderPathElement = document.getElementById('folderPath');

    console.log('Elements found:', {
        selectFolderButton: selectFolderButton,
        folderPathElement: folderPathElement
    });

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
        
        // Verificar que los elementos existen
        if (!selectFolderButton || !folderPathElement) {
            console.error('UI elements not found for update');
            return;
        }
        
        if (savedFolderPath && savedFolderPath.trim() !== '') {
            selectFolderButton.textContent = 'Change Folder';
            folderPathElement.innerText = `Selected folder: ${savedFolderPath}`;
            console.log('UI updated: Change Folder mode');
        } else {
            selectFolderButton.textContent = 'Select Folder';
            folderPathElement.innerText = 'Selected folder: No folder selected';
            console.log('UI updated: Select Folder mode');
        }
    }

    // Actualizar UI inmediatamente al cargar
    updateUI();

    // Función para inicializar cuando window.electron esté disponible
    function initWhenElectronReady() {
        console.log('Checking if window.electron is available...');
        console.log('window.electron:', window.electron);
        
        if (window.electron) {
            console.log('window.electron is available, setting up event listeners');
            
            // Elimina listeners previos
            const newBtn = selectFolderButton.cloneNode(true);
            selectFolderButton.parentNode.replaceChild(newBtn, selectFolderButton);
            
            console.log('Adding click listener to button');
            newBtn.addEventListener('click', () => {
                console.log('=== Select Folder button clicked ===');
                console.log('window.electron exists:', !!window.electron);
                console.log('window.electron.openFolderDialog exists:', !!window.electron.openFolderDialog);
                
                try {
                    window.electron.openFolderDialog();
                    console.log('openFolderDialog called successfully');
                } catch (error) {
                    console.error('Error calling openFolderDialog:', error);
                }
            });

            console.log('Setting up onFolderSelected listener');
            window.electron.onFolderSelected((folderPath) => {
                console.log('=== Folder selected ===');
                console.log('folderPath:', folderPath);
                if (folderPath) {
                    localStorage.setItem('selectedFolder', folderPath);
                    console.log('Folder saved in localStorage');
                    
                    // Actualizar UI inmediatamente
                    selectFolderButton.textContent = 'Change Folder';
                    folderPathElement.innerText = `Selected folder: ${folderPath}`;
                    console.log('UI updated immediately: Change Folder mode');
                    
                    // Limpiar estado de la carpeta anterior si existe
                    const previousFolder = localStorage.getItem('previousSelectedFolder');
                    if (previousFolder && previousFolder !== folderPath && window.gameLauncher) {
                        console.log('Clearing state for previous folder:', previousFolder);
                        window.gameLauncher.patchDownloader.clearStateForFolder(previousFolder);
                    }
                    
                    // Guardar la carpeta actual como anterior para la próxima vez
                    localStorage.setItem('previousSelectedFolder', folderPath);
                    
                    // Resetear barra de progreso al cambiar carpeta
                    const progressFill = document.getElementById('progressFill');
                    const progressPercent = document.getElementById('progressPercent');
                    const progressStatus = document.getElementById('progressStatus');
                    const progressDetails = document.getElementById('progressDetails');
                    
                    if (progressFill && progressPercent && progressStatus) {
                        progressFill.style.width = '0%';
                        progressPercent.textContent = '0%';
                        progressStatus.textContent = 'Checking new folder...';
                        if (progressDetails) progressDetails.style.display = 'none';
                    }
                } else {
                    localStorage.removeItem('selectedFolder');
                    console.log('Folder removed from localStorage');
                    
                    // Actualizar UI inmediatamente
                    selectFolderButton.textContent = 'Select Folder';
                    folderPathElement.innerText = 'Selected folder: No folder selected';
                    console.log('UI updated immediately: Select Folder mode');
                }
                
                // Check client status after selecting folder
                if (window.gameLauncher) {
                    console.log('Checking client status...');
                    window.gameLauncher.checkClientStatus();
                } else {
                    console.log('window.gameLauncher not available');
                }
            });
            
            console.log('FolderSelector initialization completed');
        } else {
            console.log('window.electron not available, retrying in 100ms...');
            // Si window.electron no está disponible, reintentar en 100ms
            setTimeout(initWhenElectronReady, 100);
        }
    }

    // Iniciar cuando esté listo
    initWhenElectronReady();
}
