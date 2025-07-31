#!/bin/bash

# Script automático para crear ICO con todos los tamaños
# Usa herramientas básicas de Windows

echo "🎨 Creando ICO automáticamente con todos los tamaños..."

# Directorio de íconos
ICON_DIR="src/assets/images/icons"
OUTPUT_ICO="$ICON_DIR/terra_icon_new.ico"
BACKUP_ICO="$ICON_DIR/terra_icon_backup.ico"

# Verificar que el directorio existe
if [ ! -d "$ICON_DIR" ]; then
    echo "❌ Error: Directorio $ICON_DIR no existe"
    exit 1
fi

# Lista de archivos PNG
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
echo "🔧 Intentando crear ICO automáticamente..."

# Intentar usar ImageMagick si está disponible
if command -v convert &> /dev/null; then
    echo "✅ ImageMagick encontrado, creando ICO..."
    convert "${PNG_FILES[@]}" "$OUTPUT_ICO"
    
    if [ $? -eq 0 ] && [ -f "$OUTPUT_ICO" ]; then
        size=$(stat -c%s "$OUTPUT_ICO" 2>/dev/null || stat -f%z "$OUTPUT_ICO" 2>/dev/null)
        echo "✅ ICO creado exitosamente: $OUTPUT_ICO (${size} bytes)"
        
        # Hacer backup del archivo actual
        if [ -f "$ICON_DIR/terra_icon.ico" ]; then
            cp "$ICON_DIR/terra_icon.ico" "$BACKUP_ICO"
            echo "✅ Backup creado: $BACKUP_ICO"
        fi
        
        # Reemplazar el archivo actual
        mv "$OUTPUT_ICO" "$ICON_DIR/terra_icon.ico"
        echo "✅ Archivo reemplazado: $ICON_DIR/terra_icon.ico"
        
        echo ""
        echo "🎯 Próximos pasos:"
        echo "   npm run dist"
        echo "   # Prueba el ícono en la barra de tareas"
        
    else
        echo "❌ Error creando el ICO con ImageMagick"
    fi
    
else
    echo "❌ ImageMagick no está instalado"
    echo ""
    echo "🔧 Instalando ImageMagick automáticamente..."
    
    # Intentar instalar con winget
    if command -v winget &> /dev/null; then
        echo "📥 Instalando ImageMagick con winget..."
        winget install ImageMagick.ImageMagick
    else
        echo "📥 Descargando ImageMagick manualmente..."
        echo "   Ve a: https://imagemagick.org/script/download.php"
        echo "   Descarga e instala ImageMagick"
        echo "   Luego ejecuta este script nuevamente"
    fi
    
    echo ""
    echo "💡 Alternativa manual:"
    echo "1. Ve a: https://convertio.co/png-ico/"
    echo "2. Sube: terra_icon_256x256.png"
    echo "3. Descarga el ICO"
    echo "4. Reemplaza: terra_icon.ico"
    echo "5. Ejecuta: npm run dist"
fi 