import * as runSequence from 'run-sequence';

import {task, src, dest} from 'gulp';
import { exec, execNode, root } from './helpers';
import PACKAGES from './packages';

const SOURCE_FOLDER = root('src');
const pkgNames = Object.keys(PACKAGES);

task(`build:tsc`, () => {
  pkgNames.forEach(pkg => mkdirp.sync(root('dist/@ng-vcl', pkg)));
  return execNode('typescript', 'tsc', ['-p', `${SOURCE_FOLDER}/tsconfig.json`]);
});

// Runs angular compiler-cli to compile the typescripts and generate metadata
task(`build:ngc`, () => {
  pkgNames.forEach(pkg => mkdirp.sync(root('dist/@ng-vcl', pkg)));
  return execNode('@angular/compiler-cli', 'ngc', ['-p', `${SOURCE_FOLDER}/tsconfig.json`]);
});

pkgNames.forEach(pkg => {
  // Create  package tasks
  const pkgTasks = PACKAGES[pkg].map(createTask => createTask(pkg));

  // Build package tasks
  task(`build:${pkg}`, [], (cb) => {
    runSequence(...pkgTasks, cb);
  });

  const dist =  root(`dist/@ng-vcl/${pkg}/`);

  task(`publish:${pkg}`, () => {
    return exec('npm', ['publish', '--access=public'], {
      cwd: dist
    });
  });
});

// Builds all packages
task(`build`, (cb) => {
  runSequence(`build:tsc`, `build:ngc`, ...pkgNames.map(pkg => `build:${pkg}`), cb);
});

// Publishes all packages
task(`publish`, (cb) => {
  runSequence(...pkgNames.map(pkg => `publish:${pkg}`), cb);
});
