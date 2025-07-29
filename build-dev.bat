@echo off
echo Compilando en modo desarrollo...
node_modules\.bin\webpack.cmd --config webpack.config.dev.js
echo Compilacion completada.
pause 