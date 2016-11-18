import { JsonEditorComponent } from './json-editor.component';

export default {
  name: 'JSON-Editor',
  path: 'json-editor',
  category: 'Form Controls',
  tabs: {
    Demo: JsonEditorComponent,
    'README.md': require("!raw!../../../src/components/json-editor/README.md"),
    'demo.component.html': require("!raw!./json-editor.component.html"),
    'demo.component.ts': require("!raw!./json-editor.component.ts")
  }
};
