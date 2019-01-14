const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const vcl = require('@vcl/preprocessor');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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

    const plugins = vcl.createPostCSSPlugins();
    cfg.module.rules = cfg.module.rules.filter((rule) => String(rule.test) !== '/\\.styl$/');

    const faFontPath = 'node_modules/@fortawesome/fontawesome-free/webfonts';
    const faRelativePath = '../webfonts';

    const faAlias = fs.readdirSync(path.join(__dirname, faFontPath)).reduce((alias, filename) => {
      return {
        ...alias,
        [faRelativePath + '/' + filename]: path.join(__dirname, faFontPath, filename)
      }
    }, {});

    return merge(cfg, {
      resolve: {
        alias: {
          ...faAlias,
        }
      },
      module: {
        rules: [
          {
            test: /\.styl$/,
            include: path.resolve(__dirname, 'demo/styles.styl'),
            use: [
              this.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                }
              },
                {
                loader: 'postcss-loader',
                options: {
                  parser: 'sugarss',
                  ident: this.extractCss ? 'extracted' : 'embedded',
                  // sourceMap: this.sourceMap && !this.extractCss ? 'inline' : this.sourceMap,
                  sourceMap: false,
                  plugins,
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          gitBranch: JSON.stringify(currentBranch)
        }),
      ]
    })
  }
};



