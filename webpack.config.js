
const path = require('path');
const merge = require('webpack-merge');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
const wcc = require('./webpack.config.common');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const root = (__path = '.') => path.join(__dirname, __path);

const MODE = process.env.MODE || 'development';
const WEBPACK_SERVE = process.env.WEBPACK_SERVE

const APP_FOLDER = root('demo');
const OUTPUT_FOLDER = root('docs');

let config = {};

if (MODE === 'production') {
  config = merge(config, wcc({ 
    appFolder: APP_FOLDER, 
    outputFolder: OUTPUT_FOLDER, 
    mode: 'production',
    extractCSS: true,
    minify: true,
    replaceEnvFile: 'prod'
  }));
  config = merge(config, {
    mode: 'production',
    devtool: undefined
  });  
} else if (MODE === 'development' || MODE === 'testing')  {
  config = merge(config, wcc({ 
    appFolder: APP_FOLDER, 
    outputFolder: OUTPUT_FOLDER, 
    mode: 'development',
    extractCSS: false,
    minify: false,
    replaceEnvFile: false
  }));
  config = merge(config, {
    mode: 'development',
    devtool: 'cheap-eval-source-map'
  });
} else {
  throw 'INVALID_MODE';
}

module.exports = merge(config, {
  resolve: {
    plugins: [
      new TsConfigPathsPlugin()
    ]
  }
});

if (WEBPACK_SERVE) {
  module.exports.serve = {
    port: 3000,
    add: (app, middleware, options) => app.use(convert(history()))
  };
}
