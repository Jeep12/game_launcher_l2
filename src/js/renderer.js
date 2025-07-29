import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../static/css/style.css';
import './externalLinks.js';

import { initFolderSelector } from './folderSelector';
import { setupDownloadButton, gameLauncher } from './gameLauncher.js';
import RankingService from './rankingService.js';

// Funcionalidad para la barra de título personalizada
function initTitleBarControls() {
  // Función para inicializar cuando window.electron esté disponible
  function initWhenElectronReady() {
    if (window.electron) {
      // Botón minimizar
      const minimizeBtn = document.getElementById('minimizeBtn');
      if (minimizeBtn) {
        minimizeBtn.addEventListener('click', () => {
          window.electron.minimizeWindow();
        });
      }
      
      // Botón cerrar
      const closeBtn = document.getElementById('closeBtn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          window.electron.closeWindow();
        });
      }
    } else {
      // Si window.electron no está disponible, reintentar en 100ms
      setTimeout(initWhenElectronReady, 100);
    }
  }

  // Iniciar cuando esté listo
  initWhenElectronReady();
}

document.addEventListener('DOMContentLoaded', () => {
  initFolderSelector();
  setupDownloadButton(); // <-- conectamos el botón acá
  
  // Inicializar controles de la barra de título
  initTitleBarControls();
  
  // Exponer gameLauncher globalmente para que folderSelector pueda acceder
  window.gameLauncher = gameLauncher;
  
  // Inicializar y cargar rankings
  const rankingService = new RankingService();
  rankingService.updateRankings();
  
  // Actualizar rankings cada 5 minutos
  setInterval(() => {
    rankingService.updateRankings();
  }, 5 * 60 * 1000);
});
