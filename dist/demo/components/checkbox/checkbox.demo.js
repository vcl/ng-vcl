"use strict";
var checkbox_component_1 = require("./checkbox.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Checkbox',
    path: 'checkbox',
    category: 'Form Controls',
    tabs: {
        Demo: checkbox_component_1.CheckboxComponent,
        'README.md': require("!raw!../../../src/components/checkbox/README.md"),
        'demo.component.html': require("!raw!./checkbox.component.html"),
        'demo.component.ts': require("!raw!./checkbox.component.ts")
    }
};
