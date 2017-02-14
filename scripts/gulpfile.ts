import * as child_process from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import {task, src, dest} from 'gulp';
import * as jsonModify from 'gulp-json-modify';
import * as runSequence from 'run-sequence';
import { execNode, exec, inlineResources, root } from './helpers';
import { rollup } from './rollup';

const VERSION = require('../package.json').version;
const SOURCE_FOLDER = root('src');
const DIST_FOLDER = root(`dist/@ng-vcl/`);
const PACKAGES = fs.readdirSync(SOURCE_FOLDER)
                   .filter(file => fs.statSync(path.join(SOURCE_FOLDER, file)).isDirectory())

// Runs angular compiler-cli to compile the typescripts and generate metadata
task(`build:ngc`, () => {
  return execNode('@angular/compiler-cli', 'ngc', ['-p', `${SOURCE_FOLDER}/tsconfig.json`]);
});

// Copies html, css and md files from source to dist
task(`build:res`, () => {
  return src(`${SOURCE_FOLDER}/**/*.{html,css,md}`)
    .pipe(dest(DIST_FOLDER));
});

// Reads component templates/styles and replaces the templateUrl/styleUrls with the file content
task('build:inline', () => inlineResources(DIST_FOLDER));

PACKAGES.forEach(pkg => {

  const PACKAGE_SOURCE_FOLDER = root(`src/${pkg}`);
  const PACKAGE_DIST_FOLDER = root(`dist/@ng-vcl/${pkg}/`);

  // Generates an umd version for the package
  task(`build:${pkg}:rollup`, function(){
    return src(`${PACKAGE_DIST_FOLDER}/index.js`)
           .pipe(rollup(pkg))
           .pipe(dest(PACKAGE_DIST_FOLDER));
  });

  // Copies and modifies the package.json so it matches the repositories version
  task(`build:${pkg}:package`, function(){
    return src(`${PACKAGE_SOURCE_FOLDER}/package.json`)
           .pipe(jsonModify({
              key: 'version',
              value: VERSION
            }))
           .pipe(dest(PACKAGE_DIST_FOLDER));
  });

  // Combined build task for the package
  task(`build:${pkg}`, (cb) => {
    runSequence(`build:${pkg}:rollup`, `build:${pkg}:package`, cb);
  });

  // Publishes for the package
  task(`publish:${pkg}`, () => {
    return exec('npm', ['publish', '--access=public'], {
      cwd: PACKAGE_DIST_FOLDER
    });
  });
});

// Builds all packages
task(`build`, (cb) => {
  runSequence(`build:ngc`, `build:res`, 'build:inline', PACKAGES.map(pkg => `build:${pkg}`), cb);
});

// Publishes all packages
task(`publish`, (cb) => {
  runSequence(...PACKAGES.map(pkg => `publish:${pkg}`), cb);
});
