import typescript from 'rollup-plugin-typescript';
import angular from 'rollup-plugin-angular';

export default {
  entry: 'src/index.ts',
  format: 'es',
  dest: 'dist/ng-vcl.esm.js',
  plugins: [
    angular(),
    typescript({
      target: "es2015",
      module: "es2015"
    })
  ]
};