const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const fs = require('fs');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/js/renderer.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'renderer.bundle.js',
    clean: true
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
        { from: 'src/static', to: 'static' },
        { from: 'src/preload.js', to: 'preload.js' },
        { from: 'index.html', to: 'index.html' },
        { from: 'splash.html', to: 'splash.html' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('CopyMainJs', (compilation) => {
          const mainJsPath = path.resolve(__dirname, 'main.js');
          const distPath = path.resolve(__dirname, 'dist', 'main.js');
          
          if (fs.existsSync(mainJsPath)) {
            fs.copyFileSync(mainJsPath, distPath);
            console.log('✅ main.js copiado sin procesar');
          }
        });
      }
    },
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('CreateDistPackageJson', (compilation) => {
          const distPackageJson = {
            name: "Launcher-L2-Terra",
            version: "1.0.0",
            main: "main.js",
            description: "Aplicación PWA en Electron",
            author: "L2 Terra Team",
            build: {
              appId: "L2Terra",
              productName: "Launcher Terra",
              files: ["**/*"],
              directories: {
                output: "./"
              },
              win: {
                target: "nsis",
                requestedExecutionLevel: "requireAdministrator"
              }
            }
          };
          const distPath = path.resolve(__dirname, 'dist', 'package.json');
          fs.writeFileSync(distPath, JSON.stringify(distPackageJson, null, 2));
          console.log('✅ package.json creado en dist');
          
          // Copiar electron a dist/node_modules
          const electronPath = path.resolve(__dirname, 'node_modules', 'electron');
          const distElectronPath = path.resolve(__dirname, 'dist', 'node_modules', 'electron');
          if (fs.existsSync(electronPath)) {
            const distNodeModulesPath = path.resolve(__dirname, 'dist', 'node_modules');
            if (!fs.existsSync(distNodeModulesPath)) {
              fs.mkdirSync(distNodeModulesPath, { recursive: true });
            }
            fs.cpSync(electronPath, distElectronPath, { recursive: true });
            console.log('✅ electron copiado a dist/node_modules');
          }
        });
      }
    }
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
  devtool: isProduction ? false : 'source-map'
};
