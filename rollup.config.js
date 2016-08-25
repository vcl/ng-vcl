import typescript from 'rollup-plugin-typescript';
import angular from 'rollup-plugin-angular';

export default {
  entry: 'src/index.ts',
  plugins: [
    angular(),
    typescript({
      // target: "es2015",
      // module: "es2015"
    })  
  ],
  targets: [
		{
			format: 'cjs',
      dest: 'dist/ng-vcl.cjs.js'
		},
		{
			format: 'es',
      dest: 'dist/ng-vcl.esm.js'
		}
	]
};