const path = require('path');
const merge = require('webpack-merge');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const wcc = require('./webpack.config.common');

const root = (__path = '.') => path.join(__dirname, __path);

let config = wcc({
  target: process.env.TARGET,
  appFolder: root('demo'),
  srcFolders: [root('src')],
  outputFolder: root('docs')
});

module.exports = merge(config, {
  resolve: {
    plugins: [
      new TsConfigPathsPlugin()
    ]
  }
});

if (process.env.WEBPACK_SERVE) {
  module.exports.serve = {
    port: 3000,
    add: (app, middleware, options) => app.use(convert(history()))
  };
}
