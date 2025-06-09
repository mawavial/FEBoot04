const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // Nome do arquivo de saída
    chunkFilename: '[name].chunk.js', // Nome dos arquivos de chunks
    publicPath: '/',
    clean: true, //limpa o build
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader', //compila TypeScript
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    ...(isProd ? [new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[name].chunk.css' })] : []),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true, // Para SPA funcionar com React Router
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  mode: isProd ? 'production' : 'development',
};