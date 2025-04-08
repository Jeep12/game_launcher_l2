// renderer.js 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../static/css/style.css'; 

import { loadView } from './viewLoader'; 
import { initFolderSelector } from './folderSelector'; 
import { initFormLoginHandler } from './formLoginHandler'; 
import { initFormRegisterHandler } from './formRegisterHandler'; 

document.addEventListener('DOMContentLoaded', () => {


  loadView('register').then(() => {
  //  initFolderSelector();
    initFormRegisterHandler();
  });

  // Obtener los enlaces por ID y agregar eventos de clic
  const homeLink = document.getElementById('homeLink');
  const loginLink = document.getElementById('loginLink');
  const registerLink = document.getElementById('registerLink');
  const informationLink = document.getElementById('informationLink');
  // Agregar el evento de clic para el enlace "Home"
  homeLink?.addEventListener('click', () => {
    loadView('home').then(() => {
      initFolderSelector(); 
    });
  });
  
  // Agregar el evento de clic para el enlace "Login"
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
if (module.hot) {
  module.hot.accept();
}
