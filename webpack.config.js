const webpack = require('webpack');
const path = require('path');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: './src/pages/index.js',
    account: './src/pages/user-account/user-account.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [{
      test: /\.js$/, // все js файлы
      use: { loader: 'babel-loader' }, // весь JS обрабатывается пакетом babel-loader
      exclude: /node_modules/, // исключает папку node_modules
    },
    {
      test: /\.css$/, // только к CSS-файлам
      use: [
        (isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 'css-loader', 'postcss-loader',
      ],
    },
    {
      test: /\.(png|jpg|gif|ico|svg)$/i,
      use: [
        'file-loader?name=src/images/[name].[ext]',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          },
        },
      ],
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader?name=./vendor/[name].[ext]',
    },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/index.html',
      filename: './index.html',
      chunks: ['main'],
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/user-account/user-account.html',
      filename: './user-account.html',
      chunks: ['account'],
      minify: {
        collapseWhitespace: true,
      },
    }),
    new WebpackMd5Hash(),
  ],
};
