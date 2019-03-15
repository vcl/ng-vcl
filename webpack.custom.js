const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const branch = require('git-branch');
const webpackHelper = require('@ng-vcl/webpack-helper');

module.exports.default = {
  opts: null,

  pre(builderConfig) {
    this.opts = {
      sourceMap: builderConfig.options.sourceMap, // Use settings from builder
      extractCSS: builderConfig.options.extractCss, // Use settings from builder
    };
  },

  config(cfg) {
    cfg = merge(cfg, webpackHelper({
      ...this.opts,
      globalStyle: 'demo/styles.sss',
      fa: true,
    }));

    const currentBranch = process.env.GIT_BRANCH || branch.sync() || 'unknown';
    
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

