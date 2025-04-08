const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Modo de desarrollo o producción
  mode: 'development', // Cambia a 'production' cuando estés listo para optimizar

  // Punto de entrada de la aplicación
  entry: './src/js/renderer.js',

  // Salida del archivo procesado
  output: {
    path: path.resolve(__dirname, 'dist/renderer'), // Carpeta donde se colocará el archivo final
    filename: 'renderer.bundle.js'
  },

  // Configuración para que no incluya node_modules en el bundle
  externals: {
    electron: 'commonjs electron'  // Cambio aquí, ahora se usa 'commonjs electron'
  },

  // Configuración de los loaders para manejar los archivos
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usamos Babel para transpilar JS moderno
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/, // Procesar los archivos .css
        use: ['style-loader', 'css-loader'] // Usar estos loaders para aplicar el CSS
      }
    ]
  },

  // Configuración del plugin CopyWebpackPlugin
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/static', to: 'dist/static' } // Copiar la carpeta 'static' a 'dist/static'
      ]
    })
  ],

  // Opciones de desarrollo
  devtool: 'source-map', // Para tener mapas de fuentes, útil para el debugging

  // Configuración de resolución de archivos
  resolve: {
    extensions: ['.js', '.json'] // Archivos que Webpack debe reconocer por defecto
  }
};
