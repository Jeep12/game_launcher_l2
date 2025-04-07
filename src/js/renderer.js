// renderer.js (o donde tengas tu lógica)

import { loadView } from '../controllers/viewLoader';

document.addEventListener('DOMContentLoaded', () => {
  // Cargar la vista "home" por defecto al cargar la página
  loadView('home'); 

  // Obtener los enlaces por ID y agregar eventos de clic
  const homeLink = document.getElementById('homeLink');
  const loginLink = document.getElementById('loginLink');
  const registerLink = document.getElementById('registerLink');
  // Agregar el evento de clic para el enlace "Home"
  homeLink?.addEventListener('click', () => {
    loadView('home');
  });
  
  // Agregar el evento de clic para el enlace "Login"
  loginLink?.addEventListener('click', () => {
    loadView('login');
  });

  registerLink?.addEventListener('click', () => {
    loadView('register');
  });

});
