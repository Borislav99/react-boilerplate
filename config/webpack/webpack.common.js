const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelConfig = require('../babel.config.js');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const rootDir = path.resolve(__dirname, '../../');

module.exports = {
  entry: path.resolve(rootDir, './src/entry.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(rootDir, './build'),
    filename: 'bundle.js',
    clean: true,
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, './src/index.html'),
    }),
    new CopyPlugin({
      patterns: [{from: 'netlify.toml', to: 'netlify.toml'}],
    }),
  ],
};
