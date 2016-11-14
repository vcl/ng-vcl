import { JsonEditorComponent } from './json-editor.component';

export default {
  name: 'JSON-Editor',
  path: 'json-editor',
  category: 'Inputs',
  tabs: {
    Demo: JsonEditorComponent,
    'demo.component.html': require("!raw!./json-editor.component.html"),
    'demo.component.ts': require("!raw!./json-editor.component.ts")
  }
};
