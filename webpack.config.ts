import * as path from 'path';
import * as merge from 'webpack-merge';
import * as history from 'connect-history-api-fallback';
import * as convert from 'koa-connect';
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';
import wcc from './webpack.config.common';

const root = (__path = '.') => path.join(__dirname, __path);

const mode = process.env.MODE || 'development';
const APP_FOLDER = root('demo');
const OUTPUT_FOLDER = root('docs');

const config = wcc({
  mode,
  appFolder: APP_FOLDER,
  outputFolder: OUTPUT_FOLDER
});

module.exports = merge(config, {
  devtool: mode === 'development' ? 'cheap-eval-source-map' : undefined,
  resolve: {
    plugins: [
      new TsConfigPathsPlugin()
    ]
  }
});

if (process.env.WEBPACK_SERVE) {
  module.exports.serve = {
    port: 3000,
    add: (app, middleware, options) => app.use(convert(history({})))
  };
}
