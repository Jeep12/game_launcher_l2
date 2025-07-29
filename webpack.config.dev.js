const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const fs = require('fs');

module.exports = {
  mode: 'development',
  entry: './src/scripts/renderer.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'renderer.bundle.js',
    clean: false
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
        { from: 'src/assets', to: 'assets' },
        { from: 'src/views', to: 'views' },
        { from: 'src/preload.js', to: 'preload.js' },
        { from: 'index.html', to: 'index.html' },
        { from: 'splash.html', to: 'splash.html' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: {
    extensions: ['.js', '.json'],
    fallback: {
      fs: false,
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