// renderer.js - Punto de entrada del renderer actualizado
import './externalLinks.js';
import { initFolderSelector } from './folderSelector.js';
import './gameLauncher.js';

// Importar sistemas de logging y validación
import { logger } from './logger.js';
import { fileValidator } from './fileValidator.js';
import { retryManager } from './retryManager.js';
import { repairService } from './repairService.js';
import { timerManager } from './timerManager.js';

// Inicializar sistemas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', async () => {
  try {
    logger.info('Renderer initialized');
    
    // Inicializar sistemas básicos
    await logger.initialize();
    
    // Inicializar folder selector
    initFolderSelector();
    
    // Configurar botones de la ventana
    setupWindowControls();
    
    // Configurar limpieza automática
    setInterval(() => {
      timerManager.cleanup();
      logger.clearOldLogs();
    }, 5 * 60 * 1000); // Cada 5 minutos
    
    logger.info('Renderer setup completed');
  } catch (error) {
    console.error('Failed to initialize renderer:', error);
  }
});

// Configurar controles de ventana
function setupWindowControls() {
  const minimizeBtn = document.getElementById('minimizeBtn');
  const closeBtn = document.getElementById('closeBtn');
  
  if (minimizeBtn) {
    minimizeBtn.addEventListener('click', () => {
      if (window.electron && window.electron.minimizeWindow) {
        window.electron.minimizeWindow();
      }
    });
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (window.electron && window.electron.closeWindow) {
        window.electron.closeWindow();
      }
    });
  }
}

// Exportar para uso global
window.gameLauncherSystems = {
  logger,
  fileValidator,
  retryManager,
  repairService,
  timerManager
};
