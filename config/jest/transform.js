const babelConfig = require('../babel.config');
const babelJest = require('babel-jest').default;

delete babelConfig.cacheDirectory;

global.CONFIG = {
  isDev: true,
  gateways: {},
};

module.exports = babelJest.createTransformer(babelConfig);
