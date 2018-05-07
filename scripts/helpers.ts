import * as path from 'path';
import * as fs from 'fs';
import * as glob from 'glob';
import * as resolveBinNode from 'resolve-bin';
import * as childProcess from 'child_process';
import { promisify } from 'util';

export const readFile = promisify(fs.readFile);
export const writeFile = promisify(fs.writeFile);
export const resolveBin = promisify<any, any, string>(resolveBinNode);

export function root(__path = '.', ...args) {
  return path.resolve(__dirname, '..', __path, ...args);
}

// Executes a command
export function exec(bin: string, args: string[], spawnOpts: childProcess.SpawnOptions = {}) {
  return new Promise((resolve, reject) => {
    const chP = childProcess.spawn(bin, args, spawnOpts);
    chP.stdout.on('data', (data: string) => {
      process.stdout.write(data);
    });
    chP.stderr.on('data', (data: string) => {
      process.stderr.write(data);
    });
    chP.on('close', (code: number) => {
      if (code === 0) {
        resolve();
      } else {
        reject('exec failed: ' + code);
      }
    });
  });
}

// Executes a node command in a package
export function execNode(pkg: string, executable: string | string[], args: string[], spawnOpts: childProcess.SpawnOptions = {}) {
  return resolveBin(pkg, { executable }).then(binPath => {
    return exec('node', [binPath].concat(args), spawnOpts);
  });
}


