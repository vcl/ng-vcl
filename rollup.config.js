import typescript from 'rollup-plugin-typescript';
import angular from 'rollup-plugin-angular';
const ts = require('typescript')

export default {
  entry: 'src/index.ts',
  plugins: [
    angular(),
    typescript({
      target: "es2015",
      module: "es2015",
      typescript: ts
    })  
  ],
  dest: 'dist/ng-vcl.esm.js'
};