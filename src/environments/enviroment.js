// Configuración de entorno
const isProduction = process.env.NODE_ENV === 'production';

export const environment = {
  production: isProduction,
  apiUrl: 'https://patch.l2terra.online', // Siempre usar la URL correcta
  secretKey: isProduction ? 'prod_secret_key' : 'dev_secret_key'
};
