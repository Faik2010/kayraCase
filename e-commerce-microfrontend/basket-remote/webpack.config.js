const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3002,
    open: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cross-Origin-Opener-Policy": "unsafe-none",
      "Cross-Origin-Embedder-Policy": "unsafe-none",
      "Cross-Origin-Resource-Policy": "cross-origin"
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'basket',
      filename: 'remoteEntry.js',
      exposes: {
        './Basket': './src/components/Basket.tsx',
      },
      shared: {
        react: { 
          singleton: true,
          eager: true,
          requiredVersion: deps.react
        },
        'react-dom': { 
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom']
        },
        antd: { 
          singleton: true,
          eager: true,
          requiredVersion: deps.antd
        },
        '@ant-design/icons': { 
          singleton: true,
          eager: true,
          requiredVersion: deps['@ant-design/icons']
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  output: {
    publicPath: 'http://localhost:3002/',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
}; 