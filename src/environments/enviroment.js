// Configuración de entorno
const isProduction = process.env.NODE_ENV === 'production';

export const environment = {
  production: isProduction,
  
  // APIs principales
  apiUrl: isProduction ? 'https://l2terra.online' : 'https://l2terra.online',
  downloadUrl: 'https://patch.l2terra.online',
  
  // Configuración de logging
  logging: {
    enabled: true,
    level: isProduction ? 'info' : 'debug',
    maxFiles: 5,
    maxSize: '10m'
  },
  
  // Configuración de validación
  validation: {
    enableChecksums: true,
    enableFilePermissions: true,
    enableDiskSpace: true,
    minDiskSpace: 1024 * 1024 * 1024 // 1GB
  },
  
  // Configuración de reintentos
  retry: {
    maxAttempts: 3,
    baseDelay: 1000,
    maxDelay: 10000
  },
  
  // Configuración de timeouts
  timeouts: {
    download: 300000, // 5 minutos
    extraction: 600000, // 10 minutos
    api: 30000 // 30 segundos
  }
};
