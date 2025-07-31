# Crear imágenes BMP válidas para Inno Setup

## Especificaciones requeridas:

### WizardImage.bmp
- **Tamaño**: 164x314 píxeles
- **Formato**: BMP 24-bit sin compresión
- **Uso**: Imagen lateral del wizard

### WizardSmallImage.bmp  
- **Tamaño**: 55x55 píxeles
- **Formato**: BMP 24-bit sin compresión
- **Uso**: Imagen pequeña en la esquina

## Métodos recomendados:

### 1. Paint (Windows)
1. Abrir Paint
2. Crear nueva imagen con dimensiones exactas
3. Guardar como "BMP" (no "BMP 256 colores")

### 2. GIMP (Gratuito)
1. Archivo → Nuevo → 164x314px
2. Exportar como BMP
3. Seleccionar "No comprimir"

### 3. Photoshop
1. Nuevo documento con dimensiones exactas
2. Guardar como BMP
3. Seleccionar "Windows" y "24-bit"

### 4. Herramientas online
- **Convertio.co**: Mejor conversor
- **Online-convert.com**: Con opciones BMP

## Verificación:
- Archivo debe ser BMP válido
- Sin compresión
- 24-bit color
- Tamaño correcto en bytes 