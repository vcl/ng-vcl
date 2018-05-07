import {task, src, dest} from 'gulp';
import { execNode, exec, root } from './helpers';
import ROLLUP_EXTERNALS from './rollup-externals';
import * as gulpRollup from 'gulp-better-rollup';
import * as jsonModify from 'gulp-json-modify';
import * as runSequence from 'run-sequence';
import * as replace from 'gulp-replace';
import * as rename from 'gulp-rename';
import * as merge from 'merge-stream';

const VERSION = require('../package.json').version;

function pkgFolder(pkg: string) {
  return {
    src: root(`src/${pkg}`),
    dist: root(`dist/@ng-vcl/${pkg}/`)
  };
}

// Copies additional resources from source to dist
export function copyResources(pkg: string) {

  const folder = pkgFolder(pkg);

  task(`build:${pkg}:prepare`, () => {
    return (merge as any)(
      // Copies md files from source to dist
      src(`${folder.src}/**/*.{md}`,  {follow: true} as any)
           .pipe(dest(folder.dist)),
      // Copies and modifies the package.json so it matches the repositories version
      src(`${folder.src}/package.json`)
          .pipe(jsonModify({
              key: 'version',
              value: VERSION
            }))
          .pipe(dest(folder.dist))
    );
  });

  return `build:${pkg}:prepare`;
}

// Some additional preparations within the dist folder
export function rollup(pkg: string) {

  const folder = pkgFolder(pkg);

  // Generates an umd and es version for the package
  task(`build:${pkg}:rollup`, () => {
    const pkgData =  require(`${folder.dist}/package.json`);

    return src(`${folder.dist}/index.js`)
          .pipe(gulpRollup({
            context: 'this',
            external: Object.keys(ROLLUP_EXTERNALS)
          }, [{
            name: ROLLUP_EXTERNALS['@ng-vcl/' + pkg] || pkg,
            format: 'umd',
            globals: ROLLUP_EXTERNALS,
            file: pkgData.main
          }, {
            format: 'es',
            globals: ROLLUP_EXTERNALS,
            file: pkgData.module
          }]))
          .pipe(dest(folder.dist));
  });

  return `build:${pkg}:rollup`;
}
