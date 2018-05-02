import * as path from 'path';
import * as webpack from 'webpack';
import { ProgressPlugin } from 'webpack';

import { AngularCompilerPlugin } from '@ngtools/webpack';
import { PurifyPlugin } from '@angular-devkit/build-optimizer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import * as CircularDependencyPlugin from 'circular-dependency-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

import * as postcssImport from 'postcss-import';
import * as postcssNesting from 'postcss-nesting';
import * as postcssCssVariables from 'postcss-css-variables';
import * as postcssColorFunction from 'postcss-color-function';
import * as postcssNext from 'postcss-cssnext';
import * as rucksackCss from 'rucksack-css';
import * as cssnano from 'cssnano';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

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

export interface Config {
  appFolder: string;
  outputFolder: string;
}

const MODE_CONFIG_MAP = {
  development: {
    aot: false,
    extractCSS: false,
    minify: false,
    replaceEnvFile: false
  },
  production: {
    aot: true,
    extractCSS: true,
    minify: true,
    replaceEnvFile: 'prod'
  }
};

export interface CommonConfig {
  mode: string;
  appFolder: string;
  outputFolder: string;
}

export default function(config: CommonConfig): webpack.Configuration {
  const mode = config.mode || 'development';

  if (mode !== 'production' && mode !== 'development') {
    throw 'INVALID_MODE: ' + mode;
  }

  const modeConfig = MODE_CONFIG_MAP[mode];

  const POSTCSS_PLUGINS = modeConfig.minify ? POST_CSS_PLUGINS_CSSNANO : POST_CSS_PLUGINS_COMMON;

  return {
    mode,
    entry: {
      main: config.appFolder + '/main.ts',
      polyfills: config.appFolder + '/polyfills.ts',
      styles: config.appFolder + '/styles/index.styl'
    },
    output: {
      path: config.outputFolder,
      publicPath: '',
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js',
    },
    module: {
      rules: [
        modeConfig.aot ? {
          test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
          use: [
            {
              loader: '@angular-devkit/build-optimizer/webpack-loader',
              options: {
                sourceMap: false
              }
            },
            '@ngtools/webpack'
          ]
        } : {
          test: /\.ts?$/,
          use: [
            {
              loader: '@ngtools/webpack',
            }
          ]
        },
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
            modeConfig.extractCSS ? MiniCssExtractPlugin.loader : 'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  alias: CSS_LOADER_ALIAS,
                  minimize: modeConfig.minify
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
      new MiniCssExtractPlugin(),
      new AngularCompilerPlugin({
        tsConfigPath: 'tsconfig.json',
        entryModule: config.appFolder + '/src/app.module#AppModule',
        skipCodeGeneration: !modeConfig.aot,
        hostReplacementPaths: modeConfig.replaceEnvFile ? {
          [config.appFolder + '/environment/environment.ts']: `${config.appFolder}/environment/environment.${modeConfig.replaceEnvFile}.ts`
        } : {},
      }),
      CopyWebpackPlugin([{
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
        minify: modeConfig.minify ? {
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
      ...(modeConfig.aot ? [new PurifyPlugin()] : []),
    ]
  };
}
