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

// Shameless copy from the angular material guys
// https://github.com/angular/material2/blob/master/scripts/release/inline-resources.js
export function inlineResources(globs) {
  if (typeof globs == 'string') {
    globs = [globs];
  }

  /**
   * For every argument, inline the templates and styles under it and write the new file.
   */
  return Promise.all(globs.map(pattern => {
    if (pattern.indexOf('*') < 0) {
      // Argument is a directory target, add glob patterns to include every files.
      pattern = path.join(pattern, '**', '*');
    }

    const files = glob.sync(pattern, {})
      .filter(name => /\.js$/.test(name));  // Matches only JavaScript files.

    // Generate all files content with inlined templates.
    return Promise.all(files.map(filePath => {
      return readFile(filePath, 'utf-8')
        .then(content => inlineResourcesFromString(content, url => {
          return path.join(path.dirname(filePath), url);
        }))
        .then(content => writeFile(filePath, content))
        .catch(err => {
          console.error('An error occurred: ', err);
        });
    }));
  }));
}

/**
 * Inline resources from a string content.
 * @param content {string} The source file's content.
 * @param urlResolver {Function} A resolver that takes a URL and return a path.
 * @returns {string} The content with resources inlined.
 */
function inlineResourcesFromString(content, urlResolver) {
  // Curry through the inlining functions.
  return [
    inlineTemplate,
    inlineStyle,
    removeModuleId
  ].reduce((content, fn) => fn(content, urlResolver), content);
}

if (require.main === module) {
  inlineResources(process.argv.slice(2));
}


/**
 * Inline the templates for a source file. Simply search for instances of `templateUrl: ...` and
 * replace with `template: ...` (with the content of the file included).
 * @param content {string} The source file's content.
 * @param urlResolver {Function} A resolver that takes a URL and return a path.
 * @return {string} The content with all templates inlined.
 */
function inlineTemplate(content, urlResolver) {
  return content.replace(/templateUrl:\s*'([^']+?\.html)'/g, function(m, templateUrl) {
    const templateFile = urlResolver(templateUrl);
    const templateContent = fs.readFileSync(templateFile, 'utf-8');
    const shortenedTemplate = templateContent
      .replace(/([\n\r]\s*)+/gm, ' ')
      .replace(/"/g, '\\"');
    return `template: "${shortenedTemplate}"`;
  });
}


/**
 * Inline the styles for a source file. Simply search for instances of `styleUrls: [...]` and
 * replace with `styles: [...]` (with the content of the file included).
 * @param urlResolver {Function} A resolver that takes a URL and return a path.
 * @param content {string} The source file's content.
 * @return {string} The content with all styles inlined.
 */
function inlineStyle(content, urlResolver) {
  return content.replace(/styleUrls:\s*(\[[\s\S]*?\])/gm, function(m, styleUrls) {
    const urls = eval(styleUrls);
    return 'styles: ['
      + urls.map(styleUrl => {
          const styleFile = urlResolver(styleUrl);
          const styleContent = fs.readFileSync(styleFile, 'utf-8');
          const shortenedStyle = styleContent
            .replace(/([\n\r]\s*)+/gm, ' ')
            .replace(/"/g, '\\"');
          return `"${shortenedStyle}"`;
        })
        .join(',\n')
      + ']';
  });
}

/**
 * Remove every mention of `moduleId: module.id`.
 * @param content {string} The source file's content.
 * @returns {string} The content with all moduleId: mentions removed.
 */
function removeModuleId(content) {
  return content.replace(/\s*moduleId:\s*module\.id\s*,?\s*/gm, '');
}

