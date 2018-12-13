const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const wcc = require('./webpack.config.common');

const root = (__path = '.') => path.join(__dirname, __path);

let config = wcc({
  mode: process.env.MODE,
  appFolder: root('demo'),
  srcFolders: [root('src')],
  outputFolder: root('docs/' + process.env.GIT_BRANCH)
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
