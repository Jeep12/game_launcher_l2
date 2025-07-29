@echo off
echo Limpiando proyecto...

REM Cerrar procesos de Electron
taskkill /f /im "Launcher-Terra.exe" 2>nul
taskkill /f /im "electron.exe" 2>nul

REM Limpiar dist
if exist "dist" rmdir /s /q "dist"

echo Limpieza completada.
echo.
echo Para desarrollo: npm run dev
echo Para produccion: npm run build:clean:prod && npm run dist
pause 