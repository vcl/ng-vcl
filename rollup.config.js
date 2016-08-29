import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import ts from 'typescript';

export default {
  entry: 'src/index.ts',
  format: "es",
  plugins: [
    angular(),
    typescript({
      target: "es5",
      module: "es2015",
      typescript: ts
    })  
  ],
  dest: 'dist/ng-vcl.esm.js'
};