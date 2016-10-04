const {
  ContextReplacementPlugin,
  HotModuleReplacementPlugin,
  DefinePlugin,
  ProgressPlugin,
  optimize: {
    CommonsChunkPlugin,
    DedupePlugin,
    UglifyJsPlugin
  }
} = require('webpack');

const {ForkCheckerPlugin} = require('awesome-typescript-loader');

const path = require('path');

function root(__path = '.') {
  return path.join(__dirname, __path);
}

function webpackConfig(options) {
  options = options || {
    ENV: 'development'
  };

  const CONSTANTS = {
    ENV: JSON.stringify(options.ENV),
    HMR: options.HMR,
    PORT: 3000,
    HOST: 'localhost'
  };

  return {
    cache: true,
    devtool: 'source-map',
    entry: {
      vendor:    './demo/vendor',
      main:      './demo/main'
    },
    output: {
      path: root('demo'),
      publicPath: '/',
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },
    module: {
      loaders: [
        {
          test: /\.ts?$/,
          loaders: ['awesome-typescript-loader?tsconfig=tsconfig.json&useWebpackText=true', 'angular2-template-loader'],
          // query: {
          //   tsconfig: 'tsconfig.esm.json'
          // }
        },
        {
          test: /\.html?$/,
          loaders: ['raw-loader'],
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
          loader: 'file?name=assets/[name].[hash].[ext]'
        },
      ]
    },
    plugins: [
      new HotModuleReplacementPlugin(),
      new ForkCheckerPlugin(),
      new CommonsChunkPlugin({ name: ['main', 'vendor'], minChunks: Infinity }),
      new DefinePlugin(CONSTANTS),
      new ProgressPlugin({}),
      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        __dirname
      ),
    ],

    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },

    devServer: {
      contentBase: './demo', // not working - bug in devserver 2.1 beta 3
      port: CONSTANTS.PORT,
      hot: CONSTANTS.HMR,
      inline: CONSTANTS.HMR,
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


