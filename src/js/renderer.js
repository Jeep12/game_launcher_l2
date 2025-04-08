import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../static/css/style.css'; 

import { loadView } from './viewLoader'; 
import { initFolderSelector } from './folderSelector'; 
import { changeFolderSelector } from './changeFolderSelector';

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

  // Botón del dropdown para cambiar carpeta
  const btnChangeFolder = document.getElementById('changeFolder');
  btnChangeFolder?.addEventListener('click', () => {
    
  });
}

if (module.hot) {
  module.hot.accept();
}
