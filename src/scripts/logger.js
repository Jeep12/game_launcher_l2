// logger.js - Sistema de logging robusto
import { environment } from '../environments/enviroment.js';

class Logger {
  constructor() {
    this.logs = [];
    this.maxLogs = 1000;
    this.isInitialized = false;
  }

  // Inicializar logger
  async initialize() {
    if (this.isInitialized) return;
    
    try {
      if (window.electron) {
        this.userDataPath = await window.electron.getUserDataPath();
        this.logFilePath = window.electron.path.join(this.userDataPath, 'launcher.log');
        this.isInitialized = true;
        this.log('info', 'Logger initialized successfully');
      }
    } catch (error) {
      console.error('Failed to initialize logger:', error);
    }
  }

  // Función principal de logging
  log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level: level.toUpperCase(),
      message,
      data,
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Agregar a logs en memoria
    this.logs.push(logEntry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // Console output
    const consoleMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    switch (level) {
      case 'error':
        console.error(consoleMessage, data);
        break;
      case 'warn':
        console.warn(consoleMessage, data);
        break;
      case 'info':
        console.info(consoleMessage, data);
        break;
      default:
        console.log(consoleMessage, data);
    }

    // Guardar en archivo si está disponible
    this.saveToFile(logEntry);
  }

  // Guardar log en archivo
  async saveToFile(logEntry) {
    if (!this.isInitialized || !window.electron) return;

    try {
      const logLine = JSON.stringify(logEntry) + '\n';
      await window.electron.writeFile(this.logFilePath, logLine, { flag: 'a' });
    } catch (error) {
      console.error('Failed to write log to file:', error);
    }
  }

  // Métodos de conveniencia
  error(message, data = null) {
    this.log('error', message, data);
  }

  warn(message, data = null) {
    this.log('warn', message, data);
  }

  info(message, data = null) {
    this.log('info', message, data);
  }

  debug(message, data = null) {
    if (!environment.production) {
      this.log('debug', message, data);
    }
  }

  // Obtener logs recientes
  getRecentLogs(limit = 50) {
    return this.logs.slice(-limit);
  }

  // Limpiar logs antiguos
  clearOldLogs() {
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }
  }

  // Exportar logs para debugging
  exportLogs() {
    return {
      logs: this.logs,
      summary: {
        total: this.logs.length,
        errors: this.logs.filter(log => log.level === 'ERROR').length,
        warnings: this.logs.filter(log => log.level === 'WARN').length,
        info: this.logs.filter(log => log.level === 'INFO').length
      }
    };
  }
}

// Instancia global del logger
export const logger = new Logger(); 