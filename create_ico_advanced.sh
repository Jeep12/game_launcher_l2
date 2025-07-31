#!/bin/bash

# Script para crear ICO con múltiples tamaños usando herramientas avanzadas

echo "🎨 Creando ICO con múltiples tamaños..."
echo ""

# Directorio de íconos
ICON_DIR="src/assets/images/icons"

# Verificar archivos PNG
PNG_FILES=(
    "terra_icon_16x16.png"
    "terra_icon_32x32.png"
    "terra_icon_48x48.png"
    "terra_icon_64x64.png"
    "terra_icon_128x128.png"
    "terra_icon_256x256.png"
)

echo "📁 Verificando archivos PNG..."

AVAILABLE_FILES=()
for file in "${PNG_FILES[@]}"; do
    if [ -f "$ICON_DIR/$file" ]; then
        size=$(stat -c%s "$ICON_DIR/$file" 2>/dev/null || stat -f%z "$ICON_DIR/$file" 2>/dev/null)
        echo "   ✅ $file (${size} bytes)"
        AVAILABLE_FILES+=("$ICON_DIR/$file")
    else
        echo "   ❌ $file (faltante)"
    fi
done

echo ""
echo "🔧 Opciones para crear ICO con múltiples tamaños:"
echo ""

echo "1. 🖼️  IcoFX (Recomendado - Permite todos los tamaños):"
echo "   - Descarga: https://icofx.ro/"
echo "   - Crea nuevo archivo ICO"
echo "   - Agrega todos los PNG disponibles"
echo "   - Guarda como terra_icon.ico"
echo ""

echo "2. 🎨 GIMP (Gratuito - Permite múltiples tamaños):"
echo "   - Abre terra_icon_256x256.png"
echo "   - Exporta como ICO"
echo "   - Selecciona múltiples tamaños"
echo ""

echo "3. 🌐 Herramientas online que permiten más de 3 tamaños:"
echo "   - https://www.icoconverter.com/ (permite múltiples tamaños)"
echo "   - https://www.icoconvert.com/ (permite múltiples tamaños)"
echo ""

echo "4. 🛠️  Herramientas de línea de comandos:"
echo "   - ImageMagick: convert *.png terra_icon.ico"
echo "   - FFmpeg: ffmpeg -i terra_icon_256x256.png -vf scale=16:16,scale=32:32,scale=48:48 terra_icon.ico"
echo ""

echo "5. 📱 Aplicaciones de escritorio:"
echo "   - IconWorkshop (de pago)"
echo "   - Greenfish Icon Editor Pro (gratuito)"
echo ""

echo "🎯 Recomendación:"
echo "   Usa IcoFX o GIMP para crear el ICO con todos los tamaños"
echo "   Luego ejecuta: npm run dist"
echo ""

echo "💡 Si las webs solo permiten 3 tamaños, usa:"
echo "   - 16x16 (barra de tareas pequeña)"
echo "   - 32x32 (barra de tareas normal)"
echo "   - 256x256 (.exe y vista grande)" 