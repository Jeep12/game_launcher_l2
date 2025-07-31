const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const fs = require('fs');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/scripts/renderer.js',
  output: {
    path: path.resolve(__dirname, 'build'),
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
        { from: 'src/assets', to: 'assets' },
        { from: 'src/views', to: 'views' },
        { from: 'src/preload.js', to: 'preload.js' },
        { from: 'index.html', to: 'index.html' },
        { from: 'splash.html', to: 'splash.html' },
        { from: 'src/assets/images/icons/terra_icon.ico', to: 'assets/images/icons/terra_icon.ico' }
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
          const buildPath = path.resolve(__dirname, 'build', 'main.js');
          
          if (fs.existsSync(mainJsPath)) {
            fs.copyFileSync(mainJsPath, buildPath);
            console.log('✅ main.js copiado sin procesar');
          }
        });
      }
    },
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('CreateDistPackageJson', (compilation) => {
          const buildPackageJson = {
            name: "Launcher-L2-Terra",
            version: "1.0.0",
            main: "main.js",
            description: "Game launcher for Lineage 2 Terra",
            author: "L2 Terra Team",
            build: {
              appId: "L2Terra",
              productName: "Launcher Terra",
              icon: "assets/images/icons/terra_icon.ico",
              files: ["**/*"],
              directories: {
                output: "dist"
              },
              win: {
                target: "nsis",
                requestedExecutionLevel: "requireAdministrator"
              }
            }
          };
          const buildPath = path.resolve(__dirname, 'build', 'package.json');
          fs.writeFileSync(buildPath, JSON.stringify(buildPackageJson, null, 2));
          console.log('✅ package.json creado en build');
          
          // Copiar electron a build/node_modules
          const electronPath = path.resolve(__dirname, 'node_modules', 'electron');
          const buildElectronPath = path.resolve(__dirname, 'build', 'node_modules', 'electron');
          if (fs.existsSync(electronPath)) {
            const buildNodeModulesPath = path.resolve(__dirname, 'build', 'node_modules');
            if (!fs.existsSync(buildNodeModulesPath)) {
              fs.mkdirSync(buildNodeModulesPath, { recursive: true });
            }
            fs.cpSync(electronPath, buildElectronPath, { recursive: true });
            console.log('✅ electron copiado a build/node_modules');
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
