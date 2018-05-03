const path = require('path');
const webpack = require('webpack');
const { ProgressPlugin, ContextReplacementPlugin } = require('webpack');

const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { PurifyPlugin } = require('@angular-devkit/build-optimizer');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const postcssImport = require('postcss-import');
const postcssNesting = require('postcss-nesting');
const postcssCssVariables = require('postcss-css-variables');
const postcssColorFunction = require('postcss-color-function');
const postcssNext = require('postcss-cssnext');
const rucksackCss = require('rucksack-css');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const POST_CSS_PLUGINS_COMMON = [
  postcssImport(),
  postcssNesting(),
  postcssCssVariables(),
  postcssColorFunction(),
  postcssNext(),
  rucksackCss(),
];

const POST_CSS_PLUGINS_CSSNANO = [
  ...POST_CSS_PLUGINS_COMMON,
  cssnano({
    autoprefixer: false,
    safe: true,
    mergeLonghand: false,
    discardComments: {
      remove: (comment) => !(/@preserve|@license|[@#]\s*source(?:Mapping)?URL|^!/i.test(comment))
    }
  })
];

const CSS_LOADER_ALIAS = {
  '../fonts': '../assets/fonts',
  '../imgs': '../assets/imgs'
};

module.exports = function wcc(config) {
  const tsLoader = config.tsLoader || 'ngtools';

  const POSTCSS_PLUGINS = config.minify ? POST_CSS_PLUGINS_CSSNANO : POST_CSS_PLUGINS_COMMON;

  const RULES = [];
  const PLUGINS = [];

  if (tsLoader === 'ngtools') {
    RULES.push({
      test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
      use: [
        {
          loader: '@angular-devkit/build-optimizer/webpack-loader',
          options: {
            sourceMap: false
          }
        },
        {
          loader: '@ngtools/webpack'
        }
      ]
    });

    PLUGINS.push(
      new AngularCompilerPlugin({
        tsConfigPath: 'tsconfig.json',
        entryModule: config.appFolder + '/src/app.module#AppModule',
        skipCodeGeneration: false,
        hostReplacementPaths: config.replaceEnvFile ? {
          [config.appFolder + '/environment/environment.ts']: `${config.appFolder}/environment/environment.${config.replaceEnvFile}.ts`
        } : {},
      }),
      new PurifyPlugin()
    );
  }

  if (tsLoader === 'atl') {
    RULES.push({
      test: /\.ts?$/,
      use: [
        'awesome-typescript-loader',
        'angular2-template-loader'
      ]
    });
    PLUGINS.push(
      new CheckerPlugin(),
      new ContextReplacementPlugin(/(.+)?angular(\\|\/)core(.+)?/, config.appFolder, {})
    );
  }

  return {
    resolve: {
      extensions: ['.ts', '.js']
    },
    entry: {
      main: config.appFolder + '/main.ts',
      polyfills: config.appFolder + '/polyfills.ts',
      styles: config.appFolder + '/styles/index.styl'
    },
    output: {
      path: config.outputFolder,
      publicPath: '/',
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js',
    },
    module: {
      rules: [
        ...RULES,
        // The component styl files are stringified to work with the ngc loader
        {
          test: /\.styl$/,
          exclude: [config.appFolder + '/styles'],
          use: [
            'to-string-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                parser: 'sugarss',
                plugins: POSTCSS_PLUGINS,
                sourceMap: false
              }
            }
          ]
        },
        {
          test: /\.css$/,
          exclude: [config.appFolder + '/styles'],
          use: [
            'to-string-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                importLoaders: 1,
              }
            }
          ]
        },
        {
          exclude: [config.appFolder + '/index.html'],
          test: /\.(html)$/,
          use: ['raw-loader'],
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        },
        {
          test: /\.styl$/,
          include: [config.appFolder + '/styles'],
          use: [
            config.extractCSS ? MiniCssExtractPlugin.loader : 'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  alias: CSS_LOADER_ALIAS,
                  minimize: config.minify
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  parser: 'sugarss',
                  plugins: POSTCSS_PLUGINS,
                  sourceMap: false
                }
              }
            ]
        },
      ]
    },
    plugins: [
      ...PLUGINS,
      new MiniCssExtractPlugin(),
      new CopyWebpackPlugin([{
        from: config.appFolder + '/assets/public',
        to: ''
      }]),
      new ProgressPlugin(),
      new CircularDependencyPlugin({
        exclude: /(\\|\/)node_modules(\\|\/)/,
        failOnError: false
      }),
      new HtmlWebpackPlugin({
        template: config.appFolder + '/index.html',
        minify: config.minify ? {
          caseSensitive: true,
          collapseWhitespace: true,
          keepClosingSlash: true
        } : false,
        chunksSortMode: (left, right) => {
          const entryPoints = ['polyfills', 'styles', 'main'];
          const leftIndex = entryPoints.indexOf(left.names[0]);
          const rightindex = entryPoints.indexOf(right.names[0]);
          if (leftIndex > rightindex) {
            return 1;
          } else if (leftIndex < rightindex) {
            return -1;
          } else {
            return 0;
          }
        },
      }),
    ]
  };
}
