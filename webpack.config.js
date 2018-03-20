const path = require('path');

const {
  ContextReplacementPlugin,
  HotModuleReplacementPlugin,
  DefinePlugin,
  NoEmitOnErrorsPlugin, 
  ProgressPlugin,
  NamedModulesPlugin,
  optimize: {
    CommonsChunkPlugin,
    UglifyJsPlugin,
    ModuleConcatenationPlugin
  }
} = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReloadPlugin = require('reload-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin')
const rxPaths = require('rxjs/_esm5/path-mapping');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { PurifyPlugin } = require('@angular-devkit/build-optimizer');
const merge = require('webpack-merge');

const postcssEasyImport = require('postcss-easy-import');
const postcssCssVariables = require('postcss-css-variables');
const postcssNesting = require('postcss-nesting');
const postcssColorFunction = require('postcss-color-function');
const postcssNext = require('postcss-cssnext');

const rucksackCss = require('rucksack-css');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const webpackCustomConfig = require('./webpack.config.custom.js');

const root = (__path = '.') => path.join(__dirname, __path);

const POST_CSS_SHARED_PLUGINS = [
  postcssEasyImport(),
  postcssNesting(),
  postcssCssVariables(),
  postcssColorFunction(),
  postcssNext(),
  rucksackCss(),
];

const POST_CSS_PROD_PLUGINS = [
  ...POST_CSS_SHARED_PLUGINS,
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
  "../fonts": '../public/fonts',
  "../imgs": '../public/imgs'
};

const TARGET_ENV_MAP = {
  'development': {
    name: 'development',
    sourceMaps: true,
    aot: false,
    extractCSS: false,
    noEmitError: false,
    commonChunks: false,
    minify: false,
    replaceEnvFile: false,
    moduleConcatenation: false,
    postCSSplugins: POST_CSS_SHARED_PLUGINS,
  },
  'production': {
    name: 'production',    
    sourceMaps: false,
    aot: true,
    extractCSS: true,
    noEmitError: true,
    commonChunks: true,
    minify: true,
    replaceEnvFile: 'prod',
    moduleConcatenation: true,
    postCSSplugins: POST_CSS_PROD_PLUGINS,
  },
};

function webpackConfig(env) {

  const APP_FOLDER = webpackCustomConfig.appFolder || 'app';
  const OUTPUT_FOLDER = webpackCustomConfig.outputFolder || 'dist';
  const ASSETS_FOLDER = webpackCustomConfig.resourcesFolder || APP_FOLDER + '/public';
  
  const PORT = env.port || 3000;
  const TARGET = env.target || 'development';
  const HMR = !!env.hmr;
  
  const ENV = TARGET_ENV_MAP[TARGET];
  
  if (!ENV) {
    throw 'Unknown target: ' + TARGET;
  }

  let wpc = {
    cache: true,
    devtool: ENV.sourceMaps ? 'source-map' : false,
    entry: {
      main: root(APP_FOLDER + '/main.ts'),
      polyfills: root(APP_FOLDER + '/polyfills.ts'),
      styles: root(APP_FOLDER + '/styles/index.styl')
    },
    output: {
      path: root(OUTPUT_FOLDER),
      publicPath: '',
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },
    module: {
      rules: [
        ENV.aot ? {
          test: /\.js$/,
          use: [
            {
              loader: "@angular-devkit/build-optimizer/webpack-loader",
              options: {
                sourceMap: false
              }
            }
          ]
        } : null,
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        },
        {
          test: /\.styl$/,
          include: [root(APP_FOLDER + '/styles')],
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  alias: CSS_LOADER_ALIAS,
                  minimize: ENV.minify
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  parser: "sugarss",
                  plugins: ENV.postCSSplugins,
                  sourceMap: ENV.sourceMaps
                }
              }
            ]
          })
        },
        // The component css files are stringified to work with the ngc loader
        {
          test: /\.css$/,
          exclude: [root(APP_FOLDER + '/styles')],
          use: [
            'to-string-loader',
            {
              loader: "css-loader",
              options: {
                sourceMap: false,
                importLoaders: 1,
              }
            }
          ]
        },
        // The component styl files are stringified to work with the ngc loader
        {
          test: /\.styl$/,
          exclude: [root(APP_FOLDER + '/styles')],
          use: [
            'to-string-loader',
            {
              loader: "css-loader",
              options: {
                sourceMap: false,
                importLoaders: 1,
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                parser: "sugarss",
                plugins: ENV.postCSSplugins,
                sourceMap: false
              }
            }            
          ]
        },
        {
          test: /\.(html)$/, 
          use: ['raw-loader'],
        },
        ENV.aot ? {
          test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
          use: [
            {
              loader: "@angular-devkit/build-optimizer/webpack-loader",
              options: {
                sourceMap: false
              }
            },
            "@ngtools/webpack"
          ]
        } : {
          test: /\.ts?$/,
          use: [
            {
              loader: '@ngtools/webpack',
            }
          ]
        }
      ].filter( rule => rule !== null)
    },
    plugins: [
      ENV.noEmitError ? new NoEmitOnErrorsPlugin() : null,
      new CopyWebpackPlugin([{
        from: ASSETS_FOLDER,
        to: ''
      }]),      
      new ProgressPlugin(),
      new CircularDependencyPlugin({
        "exclude": /(\\|\/)node_modules(\\|\/)/,
        "failOnError": false
      }),
      new HtmlWebpackPlugin({
        template: APP_FOLDER + '/index.html',
        chunksSortMode: (left, right) => {
          const entryPoints = ["inline","polyfills","sw-register","styles","vendor","main"];
          let leftIndex = entryPoints.indexOf(left.names[0]);
          let rightindex = entryPoints.indexOf(right.names[0]);
          if (leftIndex > rightindex) {
            return 1;
          } else if (leftIndex < rightindex) {
            return -1;
          } else {
            return 0;
          }
        },
        minify: ENV.minify ? {
          "caseSensitive": true,
          "collapseWhitespace": true,
          "keepClosingSlash": true
        } : false
      }),      
      ...(ENV.commonChunks ? [
        new CommonsChunkPlugin({
          "name": [
            "inline"
          ],
          "minChunks": null
        }),
        new CommonsChunkPlugin({
          "name": [
            "main"
          ],
          "minChunks": 2,
          "async": "common"
        }),
      ] : []),
      new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks: true,
        disable: !ENV.extractCSS || HMR // ExtractTextPlugin does not work in HMR mode
      }),
      new DefinePlugin({
        'NODE_ENV': JSON.stringify(ENV.name),
        'process.env.NODE_ENV': JSON.stringify(ENV.name)
      }),
      ENV.minify ? new UglifyJsPlugin({
        "test": /\.js$/i,
        "extractComments": false,
        "sourceMap": false,
        "cache": false,
        "parallel": false,
        "uglifyOptions": {
          "output": {
            "ascii_only": true,
            "comments": false
          },
          "ecma": 5,
          "warnings": false,
          "ie8": false,
          "mangle": true,
          "compress": {
            "pure_getters": true,
            "passes": 3
          }
        }
      }) : null,
      ENV.moduleConcatenation ? new ModuleConcatenationPlugin(): null,
      ENV.aot ? new PurifyPlugin() : null,
      new AngularCompilerPlugin({
        tsConfigPath: root('tsconfig.json'),
        entryModule: root(APP_FOLDER + '/src/app.module#AppModule'),
        skipCodeGeneration: !ENV.aot,
        hostReplacementPaths: ENV.replaceEnvFile ? {
          [APP_FOLDER + "/environment/environment.ts"]: `${APP_FOLDER}/environment/environment.${ENV.replaceEnvFile}.ts`
        } : {},
      }),
      // Some hmr specific plugins
      ...(HMR ? [
        new ReloadPlugin(),
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin()
      ] : [])
    ].filter( rule => rule !== null),
    resolve: {
     extensions: [
        ".ts",
        ".js"
      ],
      symlinks: true,
      alias: rxPaths(),
      mainFields: [
        "browser",
        "module",
        "main"
      ]
    },
    resolveLoader: {
      alias: rxPaths()
    },
    devServer: {
      contentBase: ASSETS_FOLDER,
      host: '0.0.0.0',
      port: PORT,
      hot: HMR,
      inline: true,
      historyApiFallback: true
    },
    node: {
      global: true,
      process: true,
      Buffer: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false,
      clearTimeout: true,
      setTimeout: true
    }
  };

  if (typeof webpackCustomConfig.merge === 'function') {
    wpc = webpackCustomConfig.merge(wpc, ENV);
  } else if(typeof webpackCustomConfig.merge === 'object' && webpackCustomConfig.merge) {
    wpc = merge(wpc, webpackCustomConfig.merge);
  }

  // console.log(wpc);

  return wpc;
}

// Export
module.exports = webpackConfig;
