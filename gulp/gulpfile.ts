import * as child_process from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import {task, watch, src, dest} from 'gulp';
import * as resolveBin from 'resolve-bin';
import * as jsonModify from 'gulp-json-modify';
import * as runSequence from 'run-sequence';
import { execNodeTask } from './helpers';
import { rollup } from './rollup';

const version = require('../package.json').version;

function root(__path = '.', ...args) {
  return path.join(__dirname, '..', __path, ...args);
}

const SOURCE_FOLDER = root('src');
const DIST_FOLDER = root(`dist/@ng-vcl/`);

task(`build:ngc`, execNodeTask(
  '@angular/compiler-cli', 'ngc', ['-p', `${SOURCE_FOLDER}/tsconfig.json`]
));

task(`build:html`, function(){
  return src(`${SOURCE_FOLDER}/**/*.html`)
    .pipe(dest(DIST_FOLDER));
});


const modules = fs.readdirSync(SOURCE_FOLDER).filter(file => fs.statSync(path.join(SOURCE_FOLDER, file)).isDirectory())

modules.forEach(module => {

  const MODULE_SOURCE_FOLDER = root(`src/${module}`);
  const MODULE_DIST_FOLDER = root(`dist/@ng-vcl/${module}/`);

  task(`build:${module}:rollup`, function(){
    return src(`${MODULE_DIST_FOLDER}/index.js`)
           .pipe(rollup(module))
           .pipe(dest(MODULE_DIST_FOLDER));
  });

  task(`build:${module}:package`, function(){
    return src(`${MODULE_SOURCE_FOLDER}/package.json`)
           .pipe(jsonModify({
              key: 'version',
              value: version
            }))
           .pipe(dest(MODULE_DIST_FOLDER));
  });

  task(`build:${module}`, (cb) => {
    runSequence(`build:${module}:rollup`, `build:${module}:package`, cb);
  });
});

task(`build`, (cb) => {
  runSequence(`build:ngc`, `build:html`, modules.map(m => `build:${m}`), cb);
});
