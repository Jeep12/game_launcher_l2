// Configuración de entorno
const isProduction = process.env.NODE_ENV === 'production';

export const environment = {
  production: isProduction,
  // API para rankings (PvP/PK)
  apiUrl: isProduction ? 'https://l2terra.online' : 'https://l2terra.online',
  // API para descargas de archivos
  downloadUrl: 'https://patch.l2terra.online'
};
