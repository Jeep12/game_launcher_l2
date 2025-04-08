// renderer.js 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../static/css/style.css'; // <-- IMPORTÁ TUS ESTILOS ACÁ ABAJO

import { loadView } from './viewLoader'; // Importa la función para cargar vistas
import { initFolderSelector } from './folderSelector'; // Importa el archivo de selección de carpeta
import { initFormHandler } from './formHandler'; // Importa el archivo de manejo de formularios
document.addEventListener('DOMContentLoaded', () => {
  // Cargar la vista "home" por defecto al cargar la página

  loadView('home').then(() => {
    initFolderSelector();
  });

  // Obtener los enlaces por ID y agregar eventos de clic
  const homeLink = document.getElementById('homeLink');
  const loginLink = document.getElementById('loginLink');
  const registerLink = document.getElementById('registerLink');
  const informationLink = document.getElementById('informationLink');
  // Agregar el evento de clic para el enlace "Home"
  homeLink?.addEventListener('click', () => {
    loadView('home').then(() => {
      initFolderSelector(); // Inicializa el selector de carpetas después de cargar la vista "home"
    });
  });
  
  // Agregar el evento de clic para el enlace "Login"
  loginLink?.addEventListener('click', () => {
    loadView('login').then(() => {
      initFormHandler();    // Asegúrate de llamar a initFormHandler cuando cargues la vista de login
    });
  });

  registerLink?.addEventListener('click', () => {
    loadView('register');
  });
  informationLink?.addEventListener('click', () => {
    loadView('information');
  });



});
