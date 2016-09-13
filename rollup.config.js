import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import ts from 'typescript';

export default {
  entry: 'src/index.ts',
  plugins: [
    angular(),
    typescript({
      target: "es5",
      module: "es2015",
      typescript: ts
    })
  ],
  targets: [
    {
      format: 'es',
      dest: 'dist/ng-vcl.esm.js',
    },
    {
      moduleName: 'vcl',
      format: 'umd',
      dest: 'dist/ng-vcl.umd.js',
    }
  ]
};
