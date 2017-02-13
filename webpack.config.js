const {
  ContextReplacementPlugin,
  HotModuleReplacementPlugin,
  DefinePlugin,
  ProgressPlugin,
  optimize: {
    CommonsChunkPlugin,
    UglifyJsPlugin
  }
} = require('webpack');

const path = require('path');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function root(__path = '.') {
  return path.join(__dirname, __path);
}

function webpackConfig(options) {

  const ENV = options.ENV || 'development';
  const HMR = options.HMR === 'true' || options.HMR === true;
  const PORT = options.PORT || 3000;
  const isProd = options.ENV === 'production';

  return {
    cache: true,
    devtool: 'source-map',
    entry: {
      main:      './demo/main',
      lib:    './demo/vendor',
      polyfills:    './demo/polyfills'
    },
    output: {
      path: root('docs'),
      publicPath: '',
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                  module: 'es2015' 
              }
            },
            'angular2-template-loader'
          ],
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
          use: 'file?name=assets/[name].[hash].[ext]'
        },
        // *.component.css files should not be run by the css-loader...
        isProd ? {
          test: {
            test: /\.css$/,
            not: [/\.component\.css$/]
          },
          use: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            use: "css-loader?-url"
          })
        } : {
          test: {
            test: /\.css$/,
            not: [/\.component\.css$/]
          },
          use: [
            "style-loader",
            "css-loader?-url"
          ]         
        },
        // ...instead raw-load them to work with the angular2-template-loader
        {
          test: /\.component\.css$/,
          use: ['raw-loader']
        },
        {
          test: /\.(html)$/, 
          use: ['raw-loader'],
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles/app.css'),
      (HMR && !isProd) ? new HotModuleReplacementPlugin() : null,
      new CommonsChunkPlugin({
        name: ['app', 'lib', 'polyfills']
      }),
      new DefinePlugin({
        'ENV': JSON.stringify(ENV)
      }),
      new ProgressPlugin({}),
      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        __dirname
      ),
      new HtmlWebpackPlugin({
        template: 'demo/index.html',
        chunksSortMode: 'dependency'
      }),
      new CopyWebpackPlugin([{
        from: 'demo/public',
        to: ''
      }]),
      isProd ? new UglifyJsPlugin({
        mangle: {
          screw_ie8 : true,
        }, //prod
        compress: {  //prod
          screw_ie8: true,
          warnings: false
        },
        sourceMap: true,
        comments: false //prod
      }) : null
    ].filter(plugin=>plugin!==null),
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      plugins: [ new TsConfigPathsPlugin() ]
    },
    devServer: {
      contentBase: './app/public',
      host: '0.0.0.0',
      port: PORT,
      hot: HMR,
      inline: HMR,
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
}

// Export
module.exports = webpackConfig;
