const webpack = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [new webpack.DefinePlugin({}), new ReactRefreshPlugin()],
  output: {
    publicPath: '/',
  },
  devServer: {hot: true, open: true, historyApiFallback: true},
};
