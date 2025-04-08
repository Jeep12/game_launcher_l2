export const loadView = (viewName) => {
  const viewContainer = document.getElementById('content');  // Contenedor donde se cargará el HTML
  
  // Determina si estás en desarrollo o producción
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Si estás en desarrollo, usa la ruta 'src/static/views', sino usa 'dist/static/views'
  const viewFile = isDevelopment
    ? `src/static/views/${viewName}.html`  // En desarrollo, usa la carpeta src
    : `static/views/${viewName}.html`;     // En producción, usa la carpeta dist

  console.log(viewFile); // Log de la ruta para depuración

  // Retornamos la promesa para poder encadenar con .then()
  return fetch(viewFile)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar la vista: ${viewFile}`);
      }
      return response.text();
    })
    .then(htmlContent => {
      viewContainer.innerHTML = htmlContent; // Cargar el contenido en el contenedor
      return htmlContent; // Retorna algo si se necesita
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};
