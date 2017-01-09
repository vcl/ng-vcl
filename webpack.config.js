const {
  ContextReplacementPlugin,
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

function ngExternal(ns) {
  var ng2Ns = `@angular/${ns}`;
  return {root: ['ng', ns], commonjs: ng2Ns, commonjs2: ng2Ns, amd: ng2Ns};
}

function rxjsExternal(context, request, cb) {
  if (/^rxjs\/add\/observable\//.test(request)) {
    return cb(null, {root: ['Rx', 'Observable'], commonjs: request, commonjs2: request, amd: request});
  } else if (/^rxjs\/add\/operator\//.test(request)) {
    return cb(null, {root: ['Rx', 'Observable', 'prototype'], commonjs: request, commonjs2: request, amd: request});
  } else if (/^rxjs\//.test(request)) {
    return cb(null, {root: ['Rx'], commonjs: request, commonjs2: request, amd: request});
  }
  cb();
}

function webpackConfig(options) {
  return {
    devtool: 'source-map',
    entry: "./src/index.ts",
    externals: [
      {
        '@angular/core': ngExternal('core'),
        '@angular/common': ngExternal('common'),
        '@angular/forms': ngExternal('forms'),
        '@angular/http': ngExternal('http'),
        '@angular/router': ngExternal('router'),
        '@angular/plattform-browser': ngExternal('plattform-browser'),
        'hammerjs': {root: 'Hammer', commonjs: 'hammerjs', commonjs2: 'hammerjs', amd: 'hammerjs'},
        'tether': {root: 'Tether', commonjs: 'tether', commonjs2: 'tether', amd: 'tether'},
        'jsoneditor': {root: 'JSONEditor', commonjs: 'jsoneditor', commonjs2: 'jsoneditor', amd: 'jsoneditor'},
        'jsonschema': { commonjs: 'jsonschema', commonjs2: 'jsonschema', amd: 'jsonschema'},
      },
      rxjsExternal
    ],
    output: {
      path: root('dist'),
      filename: 'ng-vcl.js',
      library: 'NgVCL', 
      libraryTarget: 'umd'
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
        }
      ]
    },
    plugins: [
      new ProgressPlugin({}),
      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        __dirname
      ),
    ],
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    }
  };
}

// Export
module.exports = webpackConfig;
