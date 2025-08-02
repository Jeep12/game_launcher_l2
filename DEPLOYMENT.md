# 🚀 Guía de Deployment - Launcher L2 Terra

## 📋 Checklist de Producción

### ✅ Configuración de Entorno
- [x] URLs de API configuradas correctamente
- [x] Sistema de logging implementado
- [x] Validación de archivos activada
- [x] Manejo de errores robusto
- [x] Sistema de reintentos configurado
- [x] Temporizador con estimaciones implementado

### 🔧 Configuración del Servidor

#### 1. **API de Rankings** (`environment.apiUrl`)
```php
// Ejemplo de endpoint para rankings
GET https://l2terra.online/api/rankings
Response: {
  "success": true,
  "pvp": [
    {"name": "Player1", "score": 1500},
    {"name": "Player2", "score": 1200}
  ],
  "pk": [
    {"name": "Player1", "score": 850},
    {"name": "Player2", "score": 780}
  ]
}
```

#### 2. **API de Descargas** (`environment.downloadUrl`)
```php
// Endpoint para obtener token
GET https://patch.l2terra.online
Response: {
  "success": true,
  "token": "jwt_token_here",
  "expires_in": 3600
}

// Endpoint para listar archivos
GET https://patch.l2terra.online?action=list
Response: {
  "success": true,
  "files": [
    {
      "name": "patch_v1.0.zip",
      "size": 1048576,
      "size_mb": 1.0,
      "modified": 1640995200,
      "modified_date": "2022-01-01 12:00:00"
    }
  ]
}

// Endpoint para descargar archivo
GET https://patch.l2terra.online?action=download&token=YOUR_TOKEN&file=patch_v1.0.zip
Response: Binary file download
```

### 📦 Proceso de Build

#### 1. **Desarrollo**
```bash
npm install
npm run build:dev
npm start
```

#### 2. **Producción**
```bash
npm install
npm run build:prod
npm run dist
```

### 🔍 Monitoreo y Logs

#### Ubicación de Logs
- **Windows**: `%APPDATA%/Launcher-L2-Terra/launcher.log`
- **Desarrollo**: Console del DevTools

#### Niveles de Log
- `ERROR`: Errores críticos
- `WARN`: Advertencias
- `INFO`: Información general
- `DEBUG`: Información detallada (solo desarrollo)

### 🛠️ Configuración de Validación

#### Archivo de Configuración
```javascript
// src/environments/enviroment.js
export const environment = {
  production: true,
  apiUrl: 'https://l2terra.online',
  downloadUrl: 'https://patch.l2terra.online',
  validation: {
    enableChecksums: true,
    enableFilePermissions: true,
    enableDiskSpace: true,
    minDiskSpace: 1024 * 1024 * 1024 // 1GB
  },
  retry: {
    maxAttempts: 3,
    baseDelay: 1000,
    maxDelay: 10000
  }
};
```

### 📊 Métricas y Estadísticas

#### Estadísticas Disponibles
```javascript
// Obtener estadísticas del sistema
const stats = gameLauncher.getSystemStats();
console.log(stats);
```

#### Información Incluida
- Estado de descarga/reparación
- Estadísticas de temporizador
- Estadísticas de validación
- Estadísticas de reintentos
- Historial de operaciones

### 🔧 Troubleshooting

#### Problemas Comunes

1. **Error de Conexión**
   - Verificar conectividad a internet
   - Verificar URLs de API
   - Revisar logs para detalles

2. **Error de Permisos**
   - Ejecutar como administrador
   - Verificar permisos de carpeta
   - Verificar antivirus

3. **Error de Espacio en Disco**
   - Liberar espacio en disco
   - Verificar ruta de instalación
   - Usar función de reparación

#### Logs de Debug
```bash
# Ver logs en tiempo real
tail -f "%APPDATA%/Launcher-L2-Terra/launcher.log"
```

### 🚀 Deployment Checklist Final

- [ ] **Configuración de Entorno**
  - [ ] URLs de producción configuradas
  - [ ] Variables de entorno establecidas
  - [ ] Configuración de logging activada

- [ ] **Build de Producción**
  - [ ] `npm run build:prod` ejecutado
  - [ ] Archivos compilados verificados
  - [ ] Instalador generado

- [ ] **Testing**
  - [ ] Funcionalidad de descarga probada
  - [ ] Funcionalidad de reparación probada
  - [ ] Rankings funcionando
  - [ ] Manejo de errores verificado

- [ ] **Monitoreo**
  - [ ] Logs configurados
  - [ ] Métricas habilitadas
  - [ ] Alertas configuradas

### 📈 Métricas de Rendimiento

#### Tiempos Esperados
- **Descarga**: 1-5 MB/s (dependiendo de conexión)
- **Extracción**: 5-10 MB/s
- **Validación**: 10-20 MB/s

#### Recursos del Sistema
- **RAM**: Mínimo 512MB, Recomendado 1GB
- **CPU**: Cualquier procesador moderno
- **Disco**: Mínimo 1GB libre
- **Red**: Conexión estable a internet

### 🔄 Actualizaciones

#### Proceso de Actualización
1. Desarrollar cambios en rama de desarrollo
2. Probar en entorno de staging
3. Merge a rama principal
4. Build de producción
5. Distribuir instalador actualizado

#### Versionado
- Seguir semver (MAJOR.MINOR.PATCH)
- Documentar cambios en CHANGELOG.md
- Mantener compatibilidad hacia atrás

---

**Estado Actual**: ✅ **LISTO PARA PRODUCCIÓN**

El launcher ha sido completamente restructurado con:
- ✅ Sistema de logging robusto
- ✅ Validación de archivos
- ✅ Manejo de errores mejorado
- ✅ Reintentos inteligentes
- ✅ Temporizador con estimaciones
- ✅ Sistema de reparación
- ✅ Configuración de entorno optimizada 