const {merge} = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');

module.exports = async envVars => {
  const {env} = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(webpackCommon, envConfig);
  return config;
};
