"use strict";
var json_editor_component_1 = require("./json-editor.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'JSON-Editor',
    path: 'json-editor',
    category: 'Inputs',
    tabs: {
        Demo: json_editor_component_1.JsonEditorComponent,
        'README.md': require("!raw!../../../src/components/json-editor/README.md"),
        'demo.component.html': require("!raw!./json-editor.component.html"),
        'demo.component.ts': require("!raw!./json-editor.component.ts")
    }
};
