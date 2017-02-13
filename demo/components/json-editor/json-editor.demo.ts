import { JsonEditorComponent } from './json-editor.component';

export default {
  name: 'JSON-Editor',
  route: 'json-editor',
  category: 'Form Controls',
  tabs: {
    Demo: JsonEditorComponent,
    'README.md': require("!raw-loader!../../../src/json-editor/README.md"),
    'demo.component.html': require("!raw-loader!./json-editor.component.html"),
    'demo.component.ts': require("!raw-loader!./json-editor.component.ts")
  }
};
