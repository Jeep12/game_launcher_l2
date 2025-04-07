# Launcher-L2-Terra

<p><strong>Descripción:</strong><br>

Aplicación PWA (Progressive Web App) desarrollada en Electron. El objetivo de esta aplicación es servir como un lanzador de juegos, en este caso para el servidor L2, para así mantener actualizado al cliente de L2 de los jugadores.</p>

<h2>Requisitos Previos</h2>
<p>Antes de comenzar, asegúrate de tener instalados los siguientes programas:</p>
<ul>
  <li><strong>Node.js</strong> (versión recomendada: 16 o superior)</li>
  <li><strong>npm</strong> (generalmente se instala junto con Node.js)</li>
  <li><strong>Git</strong> (para clonar el repositorio)</li>
</ul>

<h2>Instalación</h2>

<ol>
  <li>Clona el repositorio:
    <pre><code>git clone https://github.com/tu-usuario/Launcher-L2-Terra.git</code></pre>
  </li>
  <li>Ingresa al directorio del proyecto:
    <pre><code>cd Launcher-L2-Terra</code></pre>
  </li>
  <li>Instala las dependencias del proyecto:
    <pre><code>npm install</code></pre>
  </li>
</ol>

<h2>Comandos</h2>

<h3><code>npm run build</code></h3>
<p>Este comando usa <strong>Webpack</strong> para compilar los archivos del proyecto en una forma optimizada para producción. Se encarga de generar los archivos estáticos necesarios para el lanzamiento.</p>
<p><strong>¿Qué hace?</strong> Compila y transpila los archivos de tu proyecto, incluyendo JavaScript, CSS y HTML. Genera los archivos optimizados para el entorno de producción.</p>

<p>Para ejecutar este comando, solo tienes que usar:</p>
<pre><code>npm run build</code></pre>

<h3><code>npm run dist</code></h3>
<p>Este comando usa <strong>electron-builder</strong> para crear un paquete distribuible de la aplicación. Este paquete es lo que se utilizará para crear un instalador para Windows, Mac o Linux.</p>
<p><strong>¿Qué hace?</strong> Este comando empaqueta la aplicación en un archivo instalador para la plataforma correspondiente: <code>.exe</code> (Windows), <code>.dmg</code> (Mac) o un instalador para Linux.</p>

<p>Para ejecutar este comando, solo tienes que usar:</p>
<pre><code>npm run dist</code></pre>

<h2>Nota:</h2>
<p>El proceso de compilación (<code>npm run build</code>) es necesario antes de crear el instalador (<code>npm run dist</code>) para que el paquete se construya correctamente y se empaqueten los archivos estáticos.</p>

<h2>Estructura del Proyecto</h2>
<p>El proyecto sigue la estructura común de aplicaciones Electron y Webpack. Aquí tienes un vistazo a los archivos más importantes:</p>
<ul>
  <li><code>main.js</code>: Es el archivo principal donde se inicializa y configura la ventana de Electron.</li>
  <li><code>webpack.config.js</code>: Configuración de Webpack, encargada de empaquetar y optimizar los archivos.</li>
  <li><code>src/</code>: Carpeta con los archivos fuente del proyecto (JavaScript, vistas, etc.).</li>
  <li><code>dist/</code>: Carpeta donde se almacenan los archivos generados para producción (incluye el instalador).</li>
  <li><code>index.html</code>: El archivo HTML principal cargado por Electron.</li>
</ul>

<h2>SPA (Single Page Application)</h2>
<p>La aplicación está diseñada como una <strong>SPA (Single Page Application)</strong>. Para manejar las vistas dinámicamente, se utiliza una función que determina si el entorno es de desarrollo o producción para cargar las vistas correspondientes de manera eficiente.</p>

<h2>Empaquetado para Producción</h2>
<p>Para empaquetar la aplicación para producción, sigue estos pasos:</p>
<ol>
  <li>Ejecuta <code>npm run build</code> para generar los archivos optimizados para producción.</li>
  <li>Ejecuta <code>npm run dist</code> para crear un instalador utilizando <strong>electron-builder</strong>. Esto generará los archivos en la carpeta <code>dist/</code>.</li>
</ol>

<h2>Próximas Funcionalidades</h2>
<p>En futuras actualizaciones, la aplicación permitirá la creación de cuentas directamente desde la interfaz del lanzador. Para esto, se utilizará una API desarrollada en Spring Boot, la cual gestionará las peticiones de registro y autenticación de usuarios.</p>

<p>Además de la creación de cuentas, la API se integrará con un sistema de rankings que permitirá a los jugadores ver su posición en el servidor y comparar su rendimiento con otros usuarios.</p>

<p>Estas funcionalidades permitirán una experiencia más interactiva y dinámica para los jugadores, manteniendo siempre actualizado el cliente del juego y proporcionando una plataforma centralizada para gestionar las cuentas y estadísticas.</p>

<h2>Descargas y Autenticación</h2>
<p>Para descargar las actualizaciones del cliente del juego, los jugadores deben estar autenticados a través de la aplicación. El servidor Apache proporcionará las actualizaciones, pero solo aquellos jugadores que hayan iniciado sesión correctamente podrán acceder a las descargas.</p>

<p>El proceso de autenticación se realizará mediante un token generado por la API. Este token se validará para garantizar que solo los usuarios registrados y autenticados tengan acceso a las actualizaciones del cliente. Las actualizaciones se servirán a través de un servidor Apache configurado para manejar las solicitudes de descarga de manera segura.</p>
