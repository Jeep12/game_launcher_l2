# L2 Terra Launcher

Un launcher moderno y elegante para Lineage 2 Terra con funcionalidades avanzadas de descarga y actualización automática.

## 🚀 Características Principales

### ✨ Descarga y Extracción Automática
- **Descarga automática de archivos ZIP**: Descarga archivos de parches desde el servidor
- **Extracción automática**: Descomprime automáticamente los archivos en la carpeta de destino
- **Gestión de archivos temporales**: Los ZIPs se mueven a una carpeta `temp_download` durante el proceso
- **Limpieza automática**: Elimina la carpeta temporal al finalizar el proceso

### 📊 Barras de Progreso Separadas
- **Barra de progreso de descarga**: Muestra el progreso de descarga de cada archivo
- **Barra de progreso de extracción**: Muestra el progreso de extracción de cada archivo
- **Progreso total**: Barra principal que muestra el progreso general del proceso

### 🔄 Proceso Optimizado
1. **Verificación**: Compara archivos locales con los del servidor
2. **Descarga**: Descarga solo los archivos que necesitan actualización
3. **Extracción**: Extrae cada archivo inmediatamente después de descargarlo
4. **Gestión**: Mueve los ZIPs a carpeta temporal
5. **Limpieza**: Elimina archivos temporales al finalizar

## 🛠️ Instalación

### Requisitos
- Node.js 16 o superior
- npm o yarn
- Windows 10/11 (para la extracción con 7-Zip o PowerShell)

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd game_launcher_l2

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📁 Estructura del Proyecto

```
game_launcher_l2/
├── src/
│   ├── js/
│   │   ├── patchDownloader.js    # Descargador de parches mejorado
│   │   ├── gameLauncher.js       # Lógica principal del launcher
│   │   ├── installer.js          # Instalador de archivos
│   │   └── folderSelector.js     # Selector de carpetas
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css         # Estilos modernos
│   │   └── views/
│   └── preload.js               # APIs de Electron
├── main.js                      # Proceso principal de Electron
├── index.html                   # Interfaz principal
└── package.json
```

## 🔧 Configuración

### Servidor de Parches
El launcher se conecta a `https://patch.l2terra.online/` para obtener:
- Lista de archivos disponibles
- Tokens JWT para autenticación
- Descarga de archivos ZIP

### Configuración de Extracción
El sistema utiliza:
1. **7-Zip** (preferido): Si está instalado en `C:\Program Files\7-Zip\7z.exe`
2. **PowerShell**: Como fallback para extraer archivos ZIP

## 🎯 Uso

### Interfaz Principal
1. **Seleccionar Carpeta**: Elige la carpeta donde está instalado L2
2. **Actualizar**: Descarga e instala automáticamente los parches
3. **Jugar**: Lanza el juego directamente
4. **Reparar**: Reinstala archivos corruptos

### Proceso de Actualización
1. **Verificación**: Compara archivos locales con servidor
2. **Descarga**: Descarga archivos ZIP uno por uno
3. **Extracción**: Extrae cada archivo inmediatamente
4. **Gestión**: Mueve ZIPs a carpeta temporal
5. **Limpieza**: Elimina archivos temporales

## 📊 Monitoreo de Progreso

### Barras de Progreso
- **Descarga**: Muestra progreso de descarga del archivo actual
- **Extracción**: Muestra progreso de extracción del archivo actual
- **Total**: Muestra progreso general del proceso

### Información Detallada
- Nombre del archivo siendo procesado
- Porcentaje de progreso
- Estado del proceso (Descargando/Extrayendo/Completado)

## 🔒 Seguridad

- **Autenticación JWT**: Tokens temporales para acceso al servidor
- **Verificación de archivos**: Compara tamaños y fechas de modificación
- **Manejo de errores**: Reintentos automáticos con backoff exponencial

## 🐛 Solución de Problemas

### Error de Descarga
- Verificar conexión a internet
- Comprobar que el servidor esté disponible
- Revisar logs en la consola de desarrollador

### Error de Extracción
- Verificar que 7-Zip esté instalado
- Comprobar permisos de escritura en la carpeta de destino
- Revisar espacio disponible en disco

### Archivos Corruptos
- Usar función "Reparar" para reinstalar archivos
- Verificar integridad de archivos descargados
- Limpiar caché si es necesario

## 🚀 Desarrollo

### Ejecutar en Modo Desarrollo
```bash
npm run dev
```

### Construir para Producción
```bash
npm run build
```

### Ejecutar Pruebas
```bash
node test_patch_downloader.js
```

## 📝 Changelog

### v2.0.0 - Descarga y Extracción Automática
- ✅ Descarga automática de archivos ZIP
- ✅ Extracción automática en carpeta de destino
- ✅ Gestión de archivos temporales
- ✅ Barras de progreso separadas
- ✅ Limpieza automática de archivos temporales
- ✅ Proceso optimizado archivo por archivo

### v1.0.0 - Versión Inicial
- ✅ Interfaz moderna y elegante
- ✅ Selector de carpetas
- ✅ Descarga básica de archivos
- ✅ Lanzamiento del juego

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- Electron por el framework de aplicaciones de escritorio
- 7-Zip por la herramienta de compresión
- La comunidad de Lineage 2 Terra
