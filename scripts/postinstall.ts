import { readFile, writeFile, root } from './helpers';

// Provides json-editors svg and css as a component style for the ng2 json-editor component
const svgFile = root('node_modules/jsoneditor/dist/img/jsoneditor-icons.svg');
const cssFile = root('node_modules/jsoneditor/dist/jsoneditor.css');

Promise.all([readFile(svgFile, 'utf8'), readFile(cssFile, 'utf8')]).then(([svg, css]) => {
  const svgB64 = new Buffer(svg).toString('base64');
  css = css.replace(/img\/jsoneditor-icons\.svg/g, 'data:image/svg+xml;base64,' + svgB64);
  return writeFile(root('src/json-editor/json-editor.component.css'), css);
}).then(() => {
  console.log('jsoneditor css created');
}, err => {
  console.error('error creating jsoneditor css', err);
});
