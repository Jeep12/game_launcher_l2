// fileValidator.js - Sistema de validación de archivos
import { environment } from '../environments/enviroment.js';
import { logger } from './logger.js';

class FileValidator {
  constructor() {
    this.validationCache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutos
  }

  // Validar archivo completo
  async validateFile(filePath, expectedSize = null, expectedChecksum = null) {
    try {
      logger.info('Starting file validation', { filePath, expectedSize, expectedChecksum });

      const validations = [];

      // Validar existencia
      const exists = await this.validateFileExists(filePath);
      validations.push({ type: 'existence', valid: exists });

      // Validar permisos
      const permissions = await this.validateFilePermissions(filePath);
      validations.push({ type: 'permissions', valid: permissions });

      // Validar tamaño si se proporciona
      if (expectedSize) {
        const size = await this.validateFileSize(filePath, expectedSize);
        validations.push({ type: 'size', valid: size });
      }

      // Validar checksum si se proporciona
      if (expectedChecksum) {
        const checksum = await this.validateFileChecksum(filePath, expectedChecksum);
        validations.push({ type: 'checksum', valid: checksum });
      }

      const isValid = validations.every(v => v.valid);
      
      logger.info('File validation completed', { 
        filePath, 
        isValid, 
        validations 
      });

      return {
        isValid,
        validations,
        filePath
      };
    } catch (error) {
      logger.error('File validation failed', { filePath, error: error.message });
      return {
        isValid: false,
        error: error.message,
        filePath
      };
    }
  }

  // Validar que el archivo existe
  async validateFileExists(filePath) {
    try {
      if (!window.electron) return false;
      
      const content = await window.electron.readFile(filePath);
      return content !== null;
    } catch (error) {
      logger.warn('File does not exist', { filePath, error: error.message });
      return false;
    }
  }

  // Validar permisos de archivo
  async validateFilePermissions(filePath) {
    try {
      // En Electron, los permisos se manejan a nivel del sistema
      // Esta es una validación básica
      if (!window.electron) return true;
      
      const content = await window.electron.readFile(filePath);
      return content !== null;
    } catch (error) {
      logger.warn('File permission validation failed', { filePath, error: error.message });
      return false;
    }
  }

  // Validar tamaño de archivo
  async validateFileSize(filePath, expectedSize) {
    try {
      if (!window.electron) return false;
      
      // Obtener información del archivo
      const stats = await this.getFileStats(filePath);
      const actualSize = stats.size;
      
      const isValid = Math.abs(actualSize - expectedSize) < 1024; // Tolerancia de 1KB
      
      logger.debug('File size validation', { 
        filePath, 
        expectedSize, 
        actualSize, 
        isValid 
      });
      
      return isValid;
    } catch (error) {
      logger.warn('File size validation failed', { filePath, error: error.message });
      return false;
    }
  }

  // Validar checksum del archivo
  async validateFileChecksum(filePath, expectedChecksum) {
    try {
      if (!window.electron) return false;
      
      const content = await window.electron.readFile(filePath);
      if (!content) return false;
      
      // Calcular checksum simple (MD5-like)
      const actualChecksum = this.calculateSimpleChecksum(content);
      
      const isValid = actualChecksum === expectedChecksum;
      
      logger.debug('File checksum validation', { 
        filePath, 
        expectedChecksum, 
        actualChecksum, 
        isValid 
      });
      
      return isValid;
    } catch (error) {
      logger.warn('File checksum validation failed', { filePath, error: error.message });
      return false;
    }
  }

  // Calcular checksum simple
  calculateSimpleChecksum(content) {
    let hash = 0;
    if (content.length === 0) return hash.toString();
    
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convertir a entero de 32 bits
    }
    
    return Math.abs(hash).toString(16);
  }

  // Obtener estadísticas del archivo
  async getFileStats(filePath) {
    // Esta función simula obtener estadísticas del archivo
    // En un entorno real, usarías fs.statSync o similar
    return {
      size: 0, // Se calcularía dinámicamente
      modified: Date.now()
    };
  }

  // Validar espacio en disco
  async validateDiskSpace(requiredBytes) {
    try {
      logger.info('Validating disk space', { requiredBytes });
      
      // En un entorno real, verificarías el espacio disponible
      // Por ahora, asumimos que hay suficiente espacio
      const hasSpace = true;
      
      if (!hasSpace) {
        logger.warn('Insufficient disk space', { requiredBytes });
        return false;
      }
      
      return true;
    } catch (error) {
      logger.error('Disk space validation failed', { error: error.message });
      return false;
    }
  }

  // Validar directorio completo
  async validateDirectory(dirPath) {
    try {
      logger.info('Validating directory', { dirPath });
      
      if (!window.electron) return { isValid: false, error: 'Electron not available' };
      
      // Verificar que el directorio existe
      const files = await window.electron.getDirectoryFiles(dirPath);
      const isValid = files.length > 0;
      
      return {
        isValid,
        fileCount: files.length,
        dirPath
      };
    } catch (error) {
      logger.error('Directory validation failed', { dirPath, error: error.message });
      return {
        isValid: false,
        error: error.message,
        dirPath
      };
    }
  }

  // Limpiar cache de validación
  clearCache() {
    this.validationCache.clear();
    logger.debug('Validation cache cleared');
  }

  // Obtener estadísticas de validación
  getValidationStats() {
    return {
      cacheSize: this.validationCache.size,
      cacheTimeout: this.cacheTimeout
    };
  }
}

export const fileValidator = new FileValidator(); 