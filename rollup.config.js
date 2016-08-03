import typescript from 'rollup-plugin-typescript';
import angular from 'rollup-plugin-angular';

export default {
  entry: 'components/index.ts',
  format: 'es',
  plugins: [
    angular(),
    typescript({
      target: "es2015",
      module: "es2015"
    })
  ]
};