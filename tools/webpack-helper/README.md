# webpack-helper

Extends the Angular CLI webpack config with vcl support.

## Installation

```sh
$ npm install @ng-vcl/webpack-helper webpack-merge --save-dev
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
- globalStyle ['src/styles.sss'] - Path to global style
- root [process.cwd()] - Base directory
- theme ["@vcl/theme"] - Theme to use
- fa [false] - Enable @vcl/font-awesome path fix
- mdi [false] - Enable @vcl/mdi path fix
