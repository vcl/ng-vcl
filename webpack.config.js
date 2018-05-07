const path = require('path');
const merge = require('webpack-merge');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const wcc = require('./webpack.config.common');

const root = (__path = '.') => path.join(__dirname, __path);

const TARGET = process.env.TARGET;
const WEBPACK_SERVE = process.env.WEBPACK_SERVE
const APP_FOLDER = root('demo');
const OUTPUT_FOLDER = root('docs');
const PORT = 3000;

let config = wcc(TARGET, APP_FOLDER);

if (TARGET === 'production') {
  config = merge(config, {
    mode: 'production',
    devtool: undefined,
    entry: {
      main: APP_FOLDER + '/main.ts',
      polyfills: APP_FOLDER + '/polyfills.ts',
      styles: APP_FOLDER + '/styles/index.styl'
    },
    output: {
      path: OUTPUT_FOLDER,
      publicPath: '/',
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js',
    }
  });
} else if (TARGET === 'development')  {
  config = merge(config, { 
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    entry: {
      main: APP_FOLDER + '/main.ts',
      polyfills: APP_FOLDER + '/polyfills.ts',
      styles: APP_FOLDER + '/styles/index.styl'
    },
    output: {
      path: OUTPUT_FOLDER,
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name].[hash].chunk.js',
    }
  });
} else if (TARGET === 'testing')  {
  config = merge(config, { 
    mode: 'development',
    devtool: 'cheap-eval-source-map',
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
    port: PORT,
    add: (app, middleware, options) => app.use(convert(history()))
  };
}
