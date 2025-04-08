const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // Cambiar a 'production' cuando esté listo

  entry: './src/js/renderer.js',

  output: {
    path: path.resolve(__dirname, 'dist/renderer'),
    filename: 'renderer.bundle.js'
  },

  externals: {
    electron: 'commonjs electron'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/static', to: 'dist/static' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css' // Archivo CSS generado
    })
  ],

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.json']
  }
};
