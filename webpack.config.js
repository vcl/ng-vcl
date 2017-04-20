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
const { AotPlugin } = require('@ngtools/webpack');

function root(__path = '.') {
  return path.join(__dirname, __path);
}

function webpackConfig(options) {

  const ENV = options.ENV || 'development';
  const HMR = options.HMR === 'true' || options.HMR === true;
  const PORT = options.PORT || 3000;
  const isProd = options.ENV === 'production';
  const aot = !!options.AOT || isProd;

  return {
    cache: true,
    devtool: 'source-map',
    entry: {
      main: root('demo/main.ts'),
      polyfills: root('/demo/polyfills.ts')
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
        },
        {
          test: /\.ts?$/,
          use: aot ? [
            {
              loader: '@ngtools/webpack',
            }
          ] : [
            {
              loader: 'awesome-typescript-loader',
              options: {
                  module: 'es2015' 
              }
            },
            'angular-router-loader',
            'angular2-template-loader'
          ]
        },        
      ]
    },
    plugins: [
      aot ? new AotPlugin({
          tsConfigPath: root('tsconfig.json'),
          entryModule: root('demo/app.module#AppModule')
        }): null,
      new ExtractTextPlugin('styles/app.css'),
      (HMR && !isProd) ? new HotModuleReplacementPlugin() : null,
      new CommonsChunkPlugin({
          name: 'polyfills',
          chunks: ['polyfills']
      }),
      new CommonsChunkPlugin({
          name: 'vendor',
          chunks: ['main'],
          minChunks: module => /node_modules/.test(module.resource)
      }),
      new CommonsChunkPlugin({
          name: ['polyfills', 'vendor'].reverse()
      }),

      new DefinePlugin({
        'ENV': JSON.stringify(ENV)
      }),
      new ProgressPlugin({}),
      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        root()
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
        },
        compress: {
          screw_ie8: true,
          warnings: false
        },
        sourceMap: true,
        comments: false
      }) : null
    ].filter(plugin=>plugin!==null),
    resolve: {
      mainFields: ["webpack", "module", "browser", "main"],
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
