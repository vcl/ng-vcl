import {task, src, dest} from 'gulp';
import { execNode, exec, inlineResources, root } from './helpers';
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
      // Copies html, css and md files from source to dist
      src(`${folder.src}/**/*.{html,css,md}`,  {follow: true} as any)
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
export function prepareDist(pkg: string) {

  const folder = pkgFolder(pkg);

  // Reads component templates/styles and replaces the templateUrl/styleUrls with the file content
  task(`build:${pkg}:dist:inline-resources`, () => inlineResources(folder.dist));

  // Generates an umd and es version for the package
  task(`build:${pkg}:dist:rollup`, () => {
    const pkgData =  require(`${folder.dist}/package.json`);

    return src(`${folder.dist}/index.js`)
          .pipe(gulpRollup({
            context: 'this',
            external: Object.keys(ROLLUP_EXTERNALS)
          }, [{
            moduleName: ROLLUP_EXTERNALS['@ng-vcl/' + pkg] || pkg,
            format: 'umd',
            globals: ROLLUP_EXTERNALS,
            dest: pkgData.main
          }, {
            format: 'es',
            globals: ROLLUP_EXTERNALS,
            dest: pkgData.module
          }]))
          .pipe(dest(folder.dist));
  });

  // Combined build task
  task(`build:${pkg}:dist`, (cb) => {
    runSequence(`build:${pkg}:dist:inline-resources`, `build:${pkg}:dist:rollup`, cb);
  });

  return `build:${pkg}:dist`;
}

// Create ng-vcl-compatibility out of ng-vcl
export function ngVCLCompatibility(pkg: string) {

  const folderNgVCLD = pkgFolder('ng-vcl-compatibility');
  const folder = pkgFolder(pkg);

  const replacedFiles: string[] = [];

  // Rename ng-vcl-compatibility specific files
  const renameFiles = function (path) {
    if (path.basename.indexOf('.compatibility') >= 0) {
      path.basename = path.basename.replace('.compatibility', '');
      replacedFiles.push(path.dirname + path.basename + path.extname);
    } else if (replacedFiles.indexOf(path.dirname + path.basename + path.extname) >= 0) {
      path.basename = path.basename + '-replaced';
    }
  };

  task(`build:${pkg}:prepare:ng-vcl-compatibility`, () => {
    return (merge as any)(
      // Copies/renames templates and replaces any "(tap)" with "(click)" in html files
      src(`${folder.dist}/**/*.html`)
        .pipe(replace('(tap)', '(click)'))
        .pipe(rename(renameFiles))
        .pipe(dest(`${folderNgVCLD.dist}`)),
      // Copies/renames scripts and replaces any "@HostListener('tap" with "@HostListener('click" in html files
      src([`${folder.dist}/**/*.json`, `!${folder.dist}/package.json`])
        .pipe(replace('"name":"HostListener"},"arguments":["tap"', '"name":"HostListener"},"arguments":["click"'))
        .pipe(rename(renameFiles))
        .pipe(dest(`${folderNgVCLD.dist}`)),
      src(`${folder.dist}/**/*.js`)
        .pipe(replace('HostListener(\'tap\'', 'HostListener(\'click\''))
        .pipe(rename(renameFiles))
        .pipe(dest(`${folderNgVCLD.dist}`)),
      // Copies/renames remaining files
      src(`${folder.dist}/**/!(*.html|*.js|*.json)`)
        .pipe(rename(renameFiles))
        .pipe(dest(folderNgVCLD.dist)),
      src(`${folder.src}/package.compatibility.json`)
        .pipe(jsonModify({
            key: 'version',
            value: VERSION
          }))
        .pipe(rename("package.json"))
        .pipe(dest(folderNgVCLD.dist))
    );
  });

  return `build:${pkg}:prepare:ng-vcl-compatibility`;
}

export function prepareDistCompatibility(pkg: string) {
  return prepareDist('ng-vcl-compatibility');
}
