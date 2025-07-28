const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // Cambiar a 'production' al publicar

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
        { from: 'src/static', to: '../static' },
        { from: 'src/preload.js', to: '../src/preload.js' },
        { from: 'index.html', to: '../index.html' },
        { from: 'main.js', to: '../main.js' },
        { from: 'splash.html', to: '../splash.html' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '../styles.css'
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],

  resolve: {
    extensions: ['.js', '.json'],
    fallback: {
      fs: false, // no se usa en renderer
      path: require.resolve('path-browserify'),
      https: require.resolve('https-browserify'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      http: require.resolve('stream-http'),
      url: require.resolve('url/'),
      vm: require.resolve('vm-browserify'),
      'core-util-is': require.resolve('core-util-is'),
    },
  },

  devtool: 'source-map'
};
