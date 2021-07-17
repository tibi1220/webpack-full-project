const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        /* parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        }, */
        /**
         * asset/resource keeps files
         * asset/inline puts it into JS
         * asset decides it for you
         */
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
