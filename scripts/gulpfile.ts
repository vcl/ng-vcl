import * as runSequence from 'run-sequence';

import { task, src, dest} from 'gulp';
import { exec, execNode, root } from './helpers';
import PACKAGES from './packages';

const SOURCE_FOLDER = root('src');
const pkgNames = Object.keys(PACKAGES);

// Compile typescript files
task(`build:tsc`, () => {
  return execNode('typescript', 'tsc', ['-p', `${SOURCE_FOLDER}/tsconfig.json`]);
});

// Generate ng metadata files
task(`build:ngc`, () => {
  return execNode('@angular/compiler-cli', 'ngc', ['-p', `${SOURCE_FOLDER}/tsconfig.json`]);
});

pkgNames.forEach(pkg => {
  // Create  package tasks
  const pkgTasks = PACKAGES[pkg].tasks.map(createTask => createTask(pkg));

  // Build package tasks
  task(`build:${pkg}`, (cb) => {
    runSequence(...pkgTasks, cb);
  });

  const dist =  root(`dist/@ng-vcl/${pkg}/`);

  task(`publish:${pkg}`, () => {
    const params = ['publish', '--access=public'];

    return exec('npm', params, {
      cwd: dist
    });
  });

  task(`publish:next:${pkg}`, () => {
    const params = ['publish', '--access=public', '--tag=next'];

    return exec('npm', params, {
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

// Publishes all packages
task(`publish:next`, (cb) => {
  runSequence(...pkgNames.map(pkg => `publish:next:${pkg}`), cb);
});
