"use strict";
var form_component_1 = require("./form.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Form',
    path: 'form',
    category: 'Forms',
    tabs: {
        Demo: form_component_1.FormComponent,
        'README.md': require("!raw!../../../src/components/form/README.md"),
        'demo.component.html': require("!raw!./form.component.html"),
        'demo.component.ts': require("!raw!./form.component.ts")
    }
};
