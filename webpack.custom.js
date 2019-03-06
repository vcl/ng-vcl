const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const vcl = require('@vcl/preprocessor');
const merge = require('webpack-merge');
const branch = require('git-branch');

module.exports.default = {
  extractCss: false,
  sourceMap: false,

  pre(builderConfig) {
    this.extractCss = builderConfig.options.extractCss;
    this.sourceMap = builderConfig.options.sourceMap;
  },

  config(cfg) {

    const currentBranch = process.env.GIT_BRANCH || branch.sync() || 'unknown';
    
    if (cfg.output.path.endsWith('docs') || cfg.output.path.endsWith('docs/')) {
      cfg = merge(cfg, {
        output: {
          path: path.resolve(cfg.output.path, currentBranch)
        }
      });
    }

    // Relative font path in the css
    const faRelativePath = '../webfonts';
    // Actual font path
    const faFontPath = path.join(process.cwd(), './node_modules/@fortawesome/fontawesome-free/webfonts');

    // Read list of fonts
    const fonts = fs.readdirSync(faFontPath).filter(file => /^\.(eot|ttf|woff|woff2|svg)$/.test(path.extname(file)));

    // Create an alias map for fonts
    const faAlias = fonts.reduce((alias, filename) => ({
        ...alias,
        [faRelativePath + '/' + filename]: path.resolve(process.cwd(), faFontPath, filename)
    }), {});

    return merge(cfg, {
      resolve: {
        alias: {
          ...faAlias,
        }
      },
      module: {
        rules: [
          // Rule for global styles
          vcl.createWebpackRule({
            include: path.resolve(__dirname, 'demo/styles.sss'),
            sourceMap: this.sourceMap,
            extractCSS: this.extractCss
          }),
          // Rule for component styles
          vcl.createWebpackRule({
            exclude: path.resolve(__dirname, 'demo/styles.sss'),
            sourceMap: this.sourceMap,
            extractCSS: false,
            loader: 'raw-loader'
          })
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          gitBranch: JSON.stringify(currentBranch)
        }),
      ]
    });
  }
};



