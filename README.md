# 🎮 Launcher L2 Terra

Un launcher moderno y elegante para Lineage 2 Terra con funcionalidades avanzadas de descarga y actualización automática.

## 📋 Tabla de Contenidos

- [🚀 Características](#-características)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🛠️ Instalación y Configuración](#️-instalación-y-configuración)
- [⚡ Comandos de Desarrollo](#-comandos-de-desarrollo)
- [🔧 Configuración del Entorno](#-configuración-del-entorno)
- [📦 Proceso de Build](#-proceso-de-build)
- [🎯 Flujo de Descarga e Instalación](#-flujo-de-descarga-e-instalación)
- [🐛 Solución de Problemas](#-solución-de-problemas)
- [📊 Monitoreo y Logs](#-monitoreo-y-logs)

## 🚀 Características

### ✨ Funcionalidades Principales
- **Descarga automática de parches**: Descarga archivos ZIP desde el servidor
- **Extracción automática**: Descomprime automáticamente en la carpeta de destino
- **Gestión inteligente de archivos**: Mueve ZIPs a carpeta temporal durante el proceso
- **Limpieza automática**: Elimina archivos temporales al finalizar
- **Interfaz moderna**: Diseño elegante con animaciones y efectos visuales

### 📊 Sistema de Progreso
- **Barra de progreso de descarga**: Muestra progreso de descarga por archivo
- **Barra de progreso de extracción**: Muestra progreso de extracción por archivo
- **Progreso total**: Barra principal con progreso general del proceso
- **Información detallada**: Nombre del archivo, porcentaje y estado actual

### 🔄 Proceso Optimizado
1. **Verificación**: Compara archivos locales con servidor
2. **Descarga**: Descarga solo archivos que necesitan actualización
3. **Extracción**: Extrae cada archivo inmediatamente después de descargarlo
4. **Gestión**: Mueve ZIPs a carpeta temporal durante el proceso
5. **Limpieza**: Elimina archivos temporales al finalizar

## 📁 Estructura del Proyecto

```
game_launcher_l2/
├── 📁 src/
│   ├── 📁 environments/
│   │   └── enviroment.js          # Configuración de entorno (dev/prod)
│   ├── 📁 js/
│   │   ├── patchDownloader.js     # Descargador de parches mejorado
│   │   ├── gameLauncher.js        # Lógica principal del launcher
│   │   ├── installer.js           # Instalador de archivos
│   │   ├── folderSelector.js      # Selector de carpetas
│   │   ├── externalLinks.js       # Manejo de enlaces externos
│   │   └── renderer.js            # Lógica del renderer process
│   ├── 📁 static/
│   │   ├── 📁 assets/
│   │   │   ├── 📁 images/         # Imágenes y recursos visuales
│   │   │   └── terraico1.ico      # Icono de la aplicación
│   │   ├── 📁 css/
│   │   │   ├── style.css          # Estilos principales
│   │   │   └── fonts.css          # Configuración de fuentes
│   │   ├── 📁 fonts/              # Fuentes personalizadas
│   │   ├── 📁 views/
│   │   │   └── error.html         # Página de error personalizada
│   │   └── Tlogo-terra.webp       # Logo de Terra
│   └── preload.js                 # APIs de Electron (preload)
├── 📁 dist/                       # Archivos compilados (generado)
├── 📁 node_modules/               # Dependencias (generado)
├── main.js                        # Proceso principal de Electron
├── index.html                     # Interfaz principal
├── splash.html                    # Pantalla de carga
├── webpack.config.js              # Configuración de Webpack
├── package.json                   # Configuración del proyecto
├── package-lock.json              # Lock de dependencias
├── clean.bat                      # Script de limpieza para Windows
├── .gitignore                     # Archivos ignorados por Git
├── LICENSE                        # Licencia del proyecto
└── README.md                      # Este archivo
```

## 🛠️ Instalación y Configuración

### Requisitos Previos
- **Node.js**: Versión 16 o superior
- **npm**: Gestor de paquetes de Node.js
- **Windows**: 10/11 (para extracción con 7-Zip o PowerShell)
- **Git**: Para clonar el repositorio

### Instalación Paso a Paso

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd game_launcher_l2

# 2. Instalar dependencias
npm install

# 3. Verificar instalación
npm start
```

### Configuración del Entorno

El proyecto utiliza variables de entorno para diferenciar entre desarrollo y producción:

- **Desarrollo**: `NODE_ENV=development`
- **Producción**: `NODE_ENV=production`

## ⚡ Comandos de Desarrollo

### 🚀 Comandos Principales

```bash
# Ejecutar en modo desarrollo
npm start

# Compilar para desarrollo
npm run build

# Compilar para producción
npm run build:prod

# Compilar y crear instalador
npm run dist

# Limpiar carpeta dist
npm run clean

# Modo watch (desarrollo)
npm run watch
```

### 🔧 Comandos de Build

```bash
# Build completo para producción
npm run build:prod

# Crear instalador Windows
npm run dist

# Limpiar y rebuild
npm run clean && npm run dist
```

### 🧹 Comandos de Limpieza

```bash
# Limpiar carpeta dist
npm run clean

# Usar script de limpieza (Windows)
.\clean.bat
```

## 🔧 Configuración del Entorno

### Archivo `src/environments/enviroment.js`

```javascript
// Configuración automática basada en NODE_ENV
const isProduction = process.env.NODE_ENV === 'production';

export const environment = {
  production: isProduction,
  apiUrl: isProduction ? 'https://patch.l2terra.online' : 'http://localhost:8080',
  secretKey: isProduction ? 'prod_secret_key' : 'dev_secret_key'
};
```

### Configuración de Webpack (`webpack.config.js`)

- **Modo**: Automático basado en `NODE_ENV`
- **Output**: Carpeta `dist/`
- **Plugins personalizados**: Copia `main.js` sin procesar
- **Assets**: Copia archivos estáticos automáticamente

## 📦 Proceso de Build

### Flujo de Build Completo

1. **Webpack Compilation**:
   ```bash
   npm run build:prod
   ```
   - Compila JavaScript y CSS
   - Copia archivos estáticos a `dist/`
   - Copia `main.js` sin procesar
   - Crea `package.json` simplificado en `dist/`
   - Copia módulo `electron` a `dist/node_modules/`

2. **Electron Builder**:
   ```bash
   npm run dist
   ```
   - Ejecuta `electron-builder` desde `dist/`
   - Crea instalador NSIS para Windows
   - Genera `app.asar` con todos los archivos

### Estructura del Build Final

```
dist/
├── main.js                    # Proceso principal (sin procesar)
├── package.json               # Configuración para electron-builder
├── node_modules/electron/     # Módulo electron copiado
├── index.html                 # Interfaz principal
├── splash.html                # Pantalla de carga
├── preload.js                 # Script de preload
├── renderer.bundle.js         # JavaScript compilado
├── styles.css                 # CSS compilado
└── static/                    # Archivos estáticos
    ├── assets/
    ├── css/
    ├── fonts/
    └── views/
```

## 🎯 Flujo de Descarga e Instalación

### Proceso de Actualización

```mermaid
graph TD
    A[Iniciar Actualización] --> B[Verificar Archivos Locales]
    B --> C[Comparar con Servidor]
    C --> D{¿Necesita Actualización?}
    D -->|Sí| E[Descargar Archivo ZIP]
    D -->|No| F[Archivo Actualizado]
    E --> G[Mover ZIP a Temp]
    G --> H[Extraer con 7-Zip/PowerShell]
    H --> I[Verificar Extracción]
    I --> J[Limpiar ZIP Temporal]
    J --> K{¿Más Archivos?}
    K -->|Sí| E
    K -->|No| L[Limpieza Final]
    L --> M[Actualización Completada]
    F --> K
```

### Detalles del Proceso

1. **Verificación Inicial**:
   - Compara tamaños de archivos locales
   - Verifica fechas de modificación
   - Identifica archivos que necesitan actualización

2. **Descarga Inteligente**:
   - Descarga archivos ZIP uno por uno
   - Muestra progreso de descarga en tiempo real
   - Maneja errores con reintentos automáticos

3. **Extracción Optimizada**:
   - Usa 7-Zip si está disponible
   - Fallback a PowerShell si es necesario
   - Extrae cada archivo inmediatamente después de descargarlo

4. **Gestión de Archivos**:
   - Mueve ZIPs a carpeta `temp_download`
   - Mantiene archivos organizados durante el proceso
   - Limpia archivos temporales al finalizar

## 🐛 Solución de Problemas

### Errores Comunes y Soluciones

#### ❌ Error: `ERR_FILE_NOT_FOUND`
**Causa**: Archivos no encontrados en desarrollo
**Solución**:
```bash
npm run clean
npm run build
npm start
```

#### ❌ Error: `EBUSY: resource busy or locked`
**Causa**: Proceso de Electron aún ejecutándose
**Solución**:
```bash
# Usar script de limpieza
.\clean.bat

# O manualmente
taskkill /f /im "Launcher-Terra.exe"
taskkill /f /im "electron.exe"
rmdir /s /q "dist"
```

#### ❌ Error: `Unable to load preload script`
**Causa**: `main.js` no encuentra archivos en producción
**Solución**:
```bash
npm run clean
npm run dist
```

#### ❌ Error: `Cannot compute electron version`
**Causa**: Módulo electron no encontrado
**Solución**:
```bash
npm install
npm run dist
```

### Verificación de Instalación

```bash
# Verificar que la aplicación se instala correctamente
npm run dist
# Instalar el .exe generado
# Verificar que abre sin errores
```

## 📊 Monitoreo y Logs

### Logs de Desarrollo

```bash
# Ver logs en tiempo real
npm start
# Abrir DevTools (F12) para ver logs detallados
```

### Logs de Producción

Los logs de producción se pueden encontrar en:
- **Windows**: `%APPDATA%\Launcher-L2-Terra\logs\`
- **Consola**: Abrir DevTools en la aplicación instalada

### Información de Debug

```javascript
// En la consola de desarrollador
console.log('Estado de descarga:', downloadStatus);
console.log('Progreso:', progress);
console.log('Errores:', errors);
```

## 🔒 Seguridad

### Autenticación
- **JWT Tokens**: Autenticación temporal con el servidor
- **Verificación de archivos**: Compara hashes y tamaños
- **Manejo seguro de errores**: No expone información sensible

### Validaciones
- **Verificación de permisos**: Comprueba permisos de escritura
- **Validación de rutas**: Previene path traversal
- **Sanitización de inputs**: Limpia entradas del usuario

## 🚀 Despliegue

### Crear Instalador

```bash
# Build completo y crear instalador
npm run dist

# El instalador se genera en:
# dist/Launcher-L2-Terra Setup 1.0.0.exe
```

### Distribución

1. **Build para producción**:
   ```bash
   npm run dist
   ```

2. **Instalador generado**:
   - Ubicación: `dist/Launcher-L2-Terra Setup 1.0.0.exe`
   - Tamaño: ~200MB (incluye Electron runtime)
   - Compatibilidad: Windows 10/11

3. **Instalación**:
   - Ejecutar como administrador
   - Instalación automática en `Program Files`
   - Acceso directo en escritorio

## 📝 Notas de Desarrollo

### Estructura de Archivos Clave

- **`main.js`**: Proceso principal de Electron
- **`webpack.config.js`**: Configuración de build
- **`package.json`**: Scripts y dependencias
- **`src/environments/enviroment.js`**: Configuración de entorno

### Variables de Entorno

- **`NODE_ENV`**: Controla modo dev/prod
- **`process.env.NODE_ENV`**: Disponible en código cliente

### Plugins de Webpack

- **`CopyMainJs`**: Copia `main.js` sin procesar
- **`CreateDistPackageJson`**: Crea `package.json` en `dist`
- **`CopyWebpackPlugin`**: Copia archivos estáticos

## 🤝 Contribución

### Flujo de Desarrollo

1. **Fork del proyecto**
2. **Crear rama feature**: `git checkout -b feature/nueva-funcionalidad`
3. **Desarrollar**: Hacer cambios y commits
4. **Probar**: `npm start` y `npm run dist`
5. **Pull Request**: Enviar cambios para revisión

### Estándares de Código

- **JavaScript**: ES6+ con módulos
- **CSS**: Estilos modulares
- **HTML**: Semántico y accesible
- **Commits**: Mensajes descriptivos en español

---

**Desarrollado con ❤️ para la comunidad de Lineage 2 Terra**
