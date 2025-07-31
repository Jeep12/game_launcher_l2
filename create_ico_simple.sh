#!/bin/bash

# Script simple para crear ICO (versión alternativa)
# No requiere ImageMagick

echo "🎨 Script para crear ICO con múltiples tamaños"
echo ""

# Directorio de íconos
ICON_DIR="src/assets/images/icons"

echo "📁 Verificando archivos PNG en $ICON_DIR..."

# Verificar que el directorio existe
if [ ! -d "$ICON_DIR" ]; then
    echo "❌ Error: Directorio $ICON_DIR no existe"
    exit 1
fi

# Lista de archivos PNG esperados
PNG_FILES=(
    "terra_icon_16x16.png"
    "terra_icon_32x32.png"
    "terra_icon_48x48.png"
    "terra_icon_64x64.png"
    "terra_icon_128x128.png"
    "terra_icon_256x256.png"
)

# Verificar archivos disponibles
AVAILABLE_FILES=()
MISSING_FILES=()

for file in "${PNG_FILES[@]}"; do
    if [ -f "$ICON_DIR/$file" ]; then
        size=$(stat -c%s "$ICON_DIR/$file" 2>/dev/null || stat -f%z "$ICON_DIR/$file" 2>/dev/null)
        echo "   ✅ $file (${size} bytes)"
        AVAILABLE_FILES+=("$ICON_DIR/$file")
    else
        echo "   ❌ $file (faltante)"
        MISSING_FILES+=("$file")
    fi
done

echo ""
echo "📊 Resumen:"
echo "   ✅ Archivos disponibles: ${#AVAILABLE_FILES[@]}"
echo "   ❌ Archivos faltantes: ${#MISSING_FILES[@]}"

if [ ${#AVAILABLE_FILES[@]} -eq 0 ]; then
    echo ""
    echo "❌ No hay archivos PNG disponibles"
    exit 1
fi

echo ""
echo "🔧 Opciones para crear el ICO:"
echo ""
echo "1. 🌐 Herramienta online (Recomendado):"
echo "   - Ve a: https://convertio.co/png-ico/"
echo "   - Sube: terra_icon_256x256.png"
echo "   - Descarga el ICO"
echo "   - Reemplaza: terra_icon.ico"
echo ""
echo "2. 🖼️  IcoFX (Gratuito):"
echo "   - Descarga IcoFX"
echo "   - Crea nuevo archivo ICO"
echo "   - Agrega todos los PNG disponibles"
echo "   - Guarda como terra_icon.ico"
echo ""
echo "3. 🎨 GIMP (Gratuito):"
echo "   - Abre terra_icon_256x256.png"
echo "   - Exporta como ICO"
echo "   - Selecciona múltiples tamaños"
echo ""
echo "4. 📱 Herramienta online alternativa:"
echo "   - Ve a: https://image.online-convert.com/convert-to-ico"
echo "   - Sube terra_icon_256x256.png"
echo "   - Selecciona tamaños: 16x16, 32x32, 48x48, 256x256"
echo ""
echo "🎯 Después de crear el ICO:"
echo "   npm run dist"
echo "   # Prueba el ícono en la barra de tareas" 