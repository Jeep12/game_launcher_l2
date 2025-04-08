import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../static/css/style.css';

import { loadView } from './viewLoader';
import { initFolderSelector } from './folderSelector';
import { changeFolderPath } from './changeFolderSelector';

import { initFormLoginHandler } from './formLoginHandler';
import { initFormRegisterHandler } from './formRegisterHandler';

document.addEventListener('DOMContentLoaded', () => {

  // Cargamos la vista inicial
  loadView('home').then(() => {
    setupHomeView();
  });


  // Enlaces de navegación
  const homeLink = document.getElementById('homeLink');
  const loginLink = document.getElementById('loginLink');
  const registerLink = document.getElementById('registerLink');
  const informationLink = document.getElementById('informationLink');

  homeLink?.addEventListener('click', () => {
    loadView('home').then(() => {
      setupHomeView();
    });
  });

  loginLink?.addEventListener('click', () => {
    loadView('login').then(() => {
      initFormLoginHandler();
    });
  });

  registerLink?.addEventListener('click', () => {
    loadView('register').then(() => {
      initFormRegisterHandler();
    });
  });

  informationLink?.addEventListener('click', () => {
    loadView('information');
  });
});

function setupHomeView() {
  // Inicializamos el botón principal
  initFolderSelector();
  const pathFolder = localStorage.getItem("selectedFolder");

  const selectFolder = document.getElementById("btnSelectFolder");
  const playBtn = document.getElementById("btn-play");
  if (pathFolder) {
    selectFolder.style.display = "none";
    playBtn.style.display = "block";
  }
  playBtn?.addEventListener("click", ()=> {
    const folderPath = localStorage.getItem('selectedFolder');
  if (folderPath) {
    window.electron.launchGame(folderPath);
  } else {
    alert('Primero seleccioná la carpeta del cliente.');
  }
  })
  // Botón del dropdown para cambiar carpeta
  const btnChangeFolder = document.getElementById('changeFolder');
  btnChangeFolder?.addEventListener('click', () => {
    changeFolderPath();
  });



}

if (module.hot) {
  module.hot.accept();
}
