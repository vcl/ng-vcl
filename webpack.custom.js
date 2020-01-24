const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports.default = {
  config(cfg) {
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
