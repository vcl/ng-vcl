const path = require('path');
const fs = require('fs');
const vcl = require('@vcl/preprocessor');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Returns a partial webpack config with VCL support
 * @param {object} [opts]
 * @param {boolean} [opts.extractCSS=false] - extract css into seperate file
 * @param {boolean} [opts.sourceMap=false] - generate a source map
 * @param {string} [opts.root=process.cwd()] - base directory
 * @param {string} [opts.globalStyle='src/styles.sss'] - path to global style
 * @param {string} [opts.theme="@vcl/theme"] - theme to use
 * @param {boolean} [opts.fa=false - font-awesome path fix
 * @param {boolean} [opts.mdi=false - material design icons path fix
 * @return partial webpack config
 */
module.exports = function(opts = {}) {
  const root = opts.root || process.cwd();

  let globalStyle;

  if (typeof opts.globalStyle === 'string') {
    globalStyle = [opts.globalStyle];
  } else if (Array.isArray(opts.globalStyle)) {
    globalStyle = opts.globalStyle;
  } else {
    globalStyle = ['src/styles.sss']
  }

  globalStyle =  globalStyle.map(gs => path.resolve(root, gs));

  const plugins = vcl.createPostCSSPlugins({
    optimize: false,
    root,
  });

  // VCL support
  let cfg = {
    module: {
      // Global rule
      rules: [
        {
          test: /\.sss$/,
          include: globalStyle,
          use: [
            opts.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                url: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                parser: 'sugarss',
                plugins: plugins,
                sourceMap: opts.sourceMap ? (!opts.extractCSS ? 'inline' : opts.sourceMap) : false // Inline source maps if css not extracted
              }
            }
          ]
        },
        // Component rule
        {
          test: /\.sss$/,
          exclude: globalStyle,
          use: [
            'raw-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                url: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                parser: 'sugarss',
                plugins,
                sourceMap: opts.sourceMap ? (!opts.extractCSS ? 'inline' : opts.sourceMap) : false // Inline source maps if css not extracted
              }
            }
          ]
        }
      ]
    }
  };

  // VCL font-awesome support
  if (opts.fa) {
    // Relative font path in the css
    const faRelativePath = '../webfonts';
    // Actual font path
    const faFontPath = path.join(root, './node_modules/@fortawesome/fontawesome-free/webfonts');

    // Read list of fonts
    const fonts = fs.readdirSync(faFontPath).filter(file => /^\.(eot|ttf|woff|woff2|svg)$/.test(path.extname(file)));

    // Create an alias map for fonts
    const faAlias = fonts.reduce((alias, filename) => ({
        ...alias,
        [faRelativePath + '/' + filename]: path.resolve(root, faFontPath, filename)
    }), {});

    cfg = merge(cfg, {
      resolve: {
        alias: {
          ...faAlias,
        }
      }
    });
  }

  // VCL mdi support
  if (opts.mdi) {
    // Relative font path in the css
    const mdiRelativePath = '../fonts';
    // Actual font path
    const mdiFontPath = path.join(process.cwd(), './node_modules/@mdi/font/fonts');

    // Read list of fonts
    const fonts = fs.readdirSync(mdiFontPath).filter(file => /^\.(eot|ttf|woff|woff2|svg)$/.test(path.extname(file)));

    // Create an alias map for fonts
    const mdiAlias = fonts.reduce((alias, filename) => ({
        ...alias,
        [mdiRelativePath + '/' + filename]: path.resolve(process.cwd(), mdiFontPath, filename)
    }), {});

    cfg = merge(cfg, {
      resolve: {
        alias: {
          ...mdiAlias,
        }
      }
    });
  }

  return cfg;
}

