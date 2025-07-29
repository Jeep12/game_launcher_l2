// Configuración de entorno
const isProduction = process.env.NODE_ENV === 'production';

export const environment = {
  production: isProduction,
  apiUrl: isProduction ? 'https://patch.l2terra.online' : 'http://localhost:8080',
  secretKey: isProduction ? 'prod_secret_key' : 'dev_secret_key'
};
