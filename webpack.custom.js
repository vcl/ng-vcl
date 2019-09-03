const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackHelper = require('@ng-vcl/webpack-helper');

module.exports.default = {
  opts: null,

  pre(builderConfig) {
    this.opts = {
      sourceMap: builderConfig.sourceMap, // Use settings from builder
      extractCss: !!builderConfig.extractCss, // Use settings from builder
    };
  },

  config(cfg) {
    cfg = merge(cfg, webpackHelper({
      ...this.opts,
      globalStyle: ['demo/styles.sss', 'wc/styles.sss'],
      fa: true,
      mdi: true,
    }));

    const currentBranch = process.env.GIT_BRANCH || 'unknown';
    
    return merge(cfg, {
      module: {
        rules: [
          {
            test: /\.md$/i,
            use: ['raw-loader', 'highlight-loader', 'markdown-loader?breaks=true']
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          gitBranch: JSON.stringify(currentBranch)
        }),
      ]
    });
  }
};
