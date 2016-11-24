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
const {ForkCheckerPlugin} = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

function root(__path = '.') {
  return path.join(__dirname, __path);
}

function webpackConfig(options) {


  options = options || {
    ENV: 'development'
  };

  const ENV = options.ENV || 'development';
  const HMR = options.HMR || true;
  const PORT = options.PORT || 3000;
  const isProd = options.ENV === 'production';

  return {
    cache: true,
    devtool:  isProd ? false : 'source-map',
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
      loaders: [
        {
          test: /\.ts?$/,
          loaders: ['awesome-typescript-loader?tsconfig=tsconfig.json&useWebpackText=true', 'angular2-template-loader'],
        },
        {
          test: /\.(html)?$/,
          loaders: ['raw-loader'],
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
          loader: 'file?name=assets/[name].[hash].[ext]'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: "css-loader?-url"
          })
        },
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles/app.css'),
      (HMR && !isProd) ? new HotModuleReplacementPlugin() : null,
      new ForkCheckerPlugin(),
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
        comments: false //prod
      }) : null
    ].filter(plugin=>plugin!==null),
    resolve: {
      extensions: ['.ts', '.js', '.json'],
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
