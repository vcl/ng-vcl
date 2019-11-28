#!/usr/bin/env node

import { readdirSync, lstatSync, readFileSync, writeFileSync } from 'fs';
import { join, resolve, extname } from 'path';
import * as yargs from 'yargs';

const argv = yargs.options({
    m: { type: 'string', demandOption: true, alias: 'migrate', choices: ['0.5to0.6', '0.6to0.7'] },
    f: { type: 'string', demandOption: true, alias: 'folder' },
  }).argv;

const root =  (...folder: string[]) => resolve(process.cwd(), ...folder);

const IGNORE_DIRS = [
  'node_modules'
];

// Folders to migrate
let WORK_DIRS: string[] = Array.isArray(argv.f) ? argv.f : [argv.f];
WORK_DIRS = WORK_DIRS.map(folder => root(folder));

// File extensions to migrate
const WORK_EXT_REGEX = /\.(sss|html|ts)$/;

function work(folder: string, filter: RegExp, callback: (filepath: string, value: string, ext: string) => string) {
  const files = readdirSync(folder);

  for (let i = 0; i < files.length; i++) {
      const filename = files[i];
      const filepath = join(folder, filename);
      const stat = lstatSync(filepath);

      
      if (IGNORE_DIRS.some(ign => filename.includes(ign)) ) {
        continue;
      }

      if (stat.isDirectory()) {
        work(filepath, filter, callback); // recursive
      } else if (filter.test(filepath)) {
        const content = readFileSync(filepath, 'utf8');
        const ext = extname(filepath);

        const result = callback(filepath, content, ext);
        if (typeof result === 'string') {
          writeFileSync(filepath, result);
        }
      }
  }
}

function migrate05to06(content: string, ext: string) {
  return content.replace(/vclLabel/g, 'vclBadge')
                .replace(/vclBadge/g, 'vclBadge vclRounded') // Warning. Not repeatable
                .replace(/vclDisplayNone/g, 'vclHide')
                .replace(/vclNoPadding/g, 'vclP-0')
                .replace(/vclNoMargin/g, 'vclM-0')
                .replace(/vclLayoutHorizontal/g, 'vclHor')
                .replace(/vclLayoutVertical/g, 'vclVer')
                .replace(/vclLayoutFlex/g, 'vclFlex')
                .replace(/vclLayoutSelfStart/g, 'vclSelfStart')
                .replace(/vclLayoutSelfCenter/g, 'vclSelfCenter')
                .replace(/vclLayoutSelfEnd/g, 'vclSelfEnd')
                .replace(/vclLayoutSelfStretch/g, 'vclSelfStretch')
                .replace(/vclLayoutStartJustified/g, 'vclJustifyStart')
                .replace(/vclLayoutCenterJustified/g, 'vclJustifyCenter')
                .replace(/vclLayoutEndJustified/g, 'vclJustifyEnd')
                .replace(/vclLayoutAroundJustified/g, 'vclJustifyAround')
                .replace(/vclLayoutEvenlyJustified/g, 'vclJustifyEvenly')
                .replace(/vclLayoutJustified/g, 'vclJustifyBetween')
                .replace(/vclLayoutStart/g, 'vclStart')
                .replace(/vclLayoutCenterCenter/g, 'vclCenter')
                .replace(/vclLayoutCenter/g, 'vclCenter')
                .replace(/vclLayoutEnd/g, 'vclEnd')
                .replace(/vclLayoutHidden/g, 'vclHide')
                .replace(/vclSpan-([0-9]{1,3})p/g, (_, x) => `vclW-${x}p`)
                ;
}


const VCL_CAMEL_CASE_REG_EX_HTML_CLASSES = /class\=\"([a-zA-Z0-9 _-]+)\"/mg;
const VCL_CAMEL_CASE_REG_EX_TS_HB = /(?<=\@HostBinding\((?:\'|\")class\.)([a-zA-Z0-9 _-]+)(?=(?:\'|\")\))/mg;
function migrate06to07(content: string, ext: string) {
  let result = content.replace(/vclHor/g, 'vclRow')
                      .replace(/vclVer/g, 'vclCol')
                      .replace(/vcl(M|P)([A-Z]{0,1})\-/g, (match, type, pos) => `vcl${type}${pos ? pos.toLowerCase() : ''}-`)
                      .replace(/vclVUAnagram/g, 'vclVuAnagram') // preparation for camel-case
                      ;

  if (ext === '.html') {
    return result.replace(VCL_CAMEL_CASE_REG_EX_HTML_CLASSES, (match, htmlClasses) => {
      return `class="${transformVCLCamelCase(htmlClasses)}"`;;
    });
  } else  if (ext === '.ts') {
    return result.replace(VCL_CAMEL_CASE_REG_EX_TS_HB, (match, hbClass) => {
      return transformVCLCamelCase(hbClass);
    });
  } else if (ext === '.sss') {
    return transformVCLCamelCase(result);
  } else {
    throw new Error( '?' + ext);
  }
}


const VCL_CAMEL_CASE_REG_EX = /vcl([A-Z](?:[a-z]|\d|\-)*)([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?/g;
function transformVCLCamelCase(content: string) {
  return content.replace(VCL_CAMEL_CASE_REG_EX, (match, ...args) => {
    const matches: string[] = args.splice(0, 7).filter(s => !!s);
    const result = matches.map(s => s.toLowerCase()).join('-').trim();
    return result;
  });
}


WORK_DIRS.forEach(p => {
  work(p, WORK_EXT_REGEX, (filepath, content, ext) => {
    let s = content;
    if (argv.m === '0.5to0.6') {
      s = migrate05to06(s, ext);
    } else if (argv.m === '0.6to0.7') {
      s = migrate06to07(s, ext);
    }
    return s;
  });
});
