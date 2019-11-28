# webpack-helper

Extends the Angular CLI webpack config with vcl support.

## Requirements / Installation

- @vcl/preprocessor: ^0.6.0
- css-loader: ^3.2.0
- webpack-merge: ^4.2.2

```sh
npm install @vcl/preprocessor webpack-merge css-loader --save-dev
```

```sh
$ npm install @vcl/preprocessor webpack-merge css-loader @ng-vcl/webpack-helper --save-dev
```

## Usage

For this example we use [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus) and webpack-merge to add vcl support to the angular cli webpack config.
Check the ngx-build-plus docs for information how to use a plugin.

```js
const webpackHelpers = require('@ng-vcl/webpack-helper');
const merge = require('webpack-merge');

module.exports.default = {
  opts: null,

  pre(builderConfig) {
    this.opts = {
      sourceMap: builderConfig.options.sourceMap, // Use settings from builder
      extractCSS: builderConfig.options.extractCss // Use settings from builder
    };
  },

  config(cfg) {
    return merge(cfg, webpackHelpers(this.opts));
  }
};
```

#### Options

- extractCSS [false] - Extract css into seperate file
- sourceMap [false] - Generate a source map
- globalStyle ['src/styles.sss'] - Path to global style(s). Can be array or string.
- root [process.cwd()] - Base directory
- fa [false] - Enable @vcl/font-awesome path fix
- mdi [false] - Enable @vcl/mdi path fix
