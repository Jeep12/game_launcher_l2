#!/bin/bash

# Script para crear ICO con múltiples tamaños
# Requiere: ImageMagick instalado

echo "🎨 Creando ícono ICO con múltiples tamaños..."

# Verificar si ImageMagick está instalado
if ! command -v convert &> /dev/null; then
    echo "❌ Error: ImageMagick no está instalado"
    echo "📥 Instala ImageMagick desde: https://imagemagick.org/script/download.php"
    echo "   O usa: choco install imagemagick (en Windows)"
    exit 1
fi

# Directorio de íconos
ICON_DIR="src/assets/images/icons"
OUTPUT_ICO="$ICON_DIR/terra_icon_new.ico"

# Verificar que el directorio existe
if [ ! -d "$ICON_DIR" ]; then
    echo "❌ Error: Directorio $ICON_DIR no existe"
    exit 1
fi

# Lista de archivos PNG disponibles
PNG_FILES=(
    "$ICON_DIR/terra_icon_16x16.png"
    "$ICON_DIR/terra_icon_32x32.png"
    "$ICON_DIR/terra_icon_48x48.png"
    "$ICON_DIR/terra_icon_64x64.png"
    "$ICON_DIR/terra_icon_128x128.png"
    "$ICON_DIR/terra_icon_256x256.png"
)

echo "📁 Verificando archivos PNG..."

# Verificar que todos los archivos existen
MISSING_FILES=()
for file in "${PNG_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        MISSING_FILES+=("$file")
    else
        size=$(stat -c%s "$file" 2>/dev/null || stat -f%z "$file" 2>/dev/null)
        echo "   ✅ $(basename "$file") (${size} bytes)"
    fi
done

if [ ${#MISSING_FILES[@]} -gt 0 ]; then
    echo "❌ Archivos faltantes:"
    for file in "${MISSING_FILES[@]}"; do
        echo "   - $(basename "$file")"
    done
    exit 1
fi

echo ""
echo "🔧 Creando ICO con ImageMagick..."

# Crear ICO con todos los tamaños
convert "${PNG_FILES[@]}" "$OUTPUT_ICO"

if [ $? -eq 0 ]; then
    echo "✅ ICO creado exitosamente: $OUTPUT_ICO"
    
    # Mostrar información del archivo creado
    if [ -f "$OUTPUT_ICO" ]; then
        size=$(stat -c%s "$OUTPUT_ICO" 2>/dev/null || stat -f%z "$OUTPUT_ICO" 2>/dev/null)
        echo "📄 Tamaño del archivo: ${size} bytes"
        
        # Verificar que el archivo es válido
        if file "$OUTPUT_ICO" | grep -q "ICO"; then
            echo "✅ Archivo ICO válido"
        else
            echo "⚠️  El archivo puede no ser un ICO válido"
        fi
    fi
    
    echo ""
    echo "🎯 Próximos pasos:"
    echo "1. Reemplaza el archivo actual:"
    echo "   mv $OUTPUT_ICO $ICON_DIR/terra_icon.ico"
    echo ""
    echo "2. Compila la aplicación:"
    echo "   npm run dist"
    echo ""
    echo "3. Prueba el ícono en la barra de tareas"
    
else
    echo "❌ Error creando el ICO"
    exit 1
fi 