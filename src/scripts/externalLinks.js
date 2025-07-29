// Función para abrir enlaces externos
function openExternalLink(url) {
  console.log('=== DEBUG: Función openExternalLink llamada ===');
  console.log('URL:', url);
  console.log('window.electron existe:', !!window.electron);
  
  if (window.electron) {
    console.log('window.electron.openExternalLink existe:', !!window.electron.openExternalLink);
    console.log('Métodos disponibles en window.electron:', Object.keys(window.electron));
  }
  
  if (window.electron && window.electron.openExternalLink) {
    console.log('Usando Electron API');
    window.electron.openExternalLink(url).then(result => {
      console.log('Resultado de Electron:', result);
      if (result.success) {
        console.log('Enlace abierto exitosamente');
      } else {
        console.error('Error abriendo enlace:', result.error);
        // Fallback al navegador por defecto
        window.open(url, '_blank');
      }
    }).catch(error => {
      console.error('Error en Electron API:', error);
      // Fallback al navegador por defecto
      window.open(url, '_blank');
    });
  } else {
    console.log('Electron no disponible, usando fallback');
    // Fallback si electron no está disponible
    window.open(url, '_blank');
  }
}

// Event listeners para los enlaces
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== DOM cargado, configurando event listeners ===');
  
  // Encontrar todos los enlaces con data-url
  const externalLinks = document.querySelectorAll('.nav-link[data-url]');
  console.log('Enlaces externos encontrados:', externalLinks.length);
  
  externalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const url = this.getAttribute('data-url');
      console.log('Clic en enlace externo:', url);
      openExternalLink(url);
    });
  });
});

// Verificar que la función se carga
console.log('=== Script externalLinks.js cargado ===');
console.log('Función openExternalLink disponible:', typeof openExternalLink); 