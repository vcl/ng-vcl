const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const webpackHelper = require('@ng-vcl/webpack-helper');

module.exports.default = {
  opts: null,
  sourceRoot: null,

  pre(builderConfig) {
    this.opts = {
      sourceMap: builderConfig.sourceMap, // Use settings from builder
      extractCSS: !!builderConfig.extractCss, // Use settings from builder
    };
  },

  config(cfg) {
    cfg = merge(cfg, webpackHelper({
      ...this.opts,
      globalStyle: path.resolve(__dirname, 'demo/styles.sss'),
      fa: true,
    }));

    const currentBranch = process.env.GIT_BRANCH || 'unknown';
    
    if (cfg.output.path.endsWith('docs') || cfg.output.path.endsWith('docs/')) {
      cfg = merge(cfg, {
        output: {
          path: path.resolve(cfg.output.path, currentBranch)
        }
      });
    }

    return merge(cfg, {
      plugins: [
        new webpack.DefinePlugin({
          gitBranch: JSON.stringify(currentBranch)
        }),
      ]
    });
  }
};

