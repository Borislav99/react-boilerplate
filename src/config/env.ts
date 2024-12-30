export default {
  environment: process.env['NODE_ENV'],
  isProduction: process.env['NODE_ENV'] === 'production',
  isTest: process.env['NODE_ENV'] === 'test',
  isDevelopment: process.env['NODE_ENV'] === 'development',
};
