"use strict";
var select_component_1 = require("./select.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Select',
    path: 'select',
    category: 'Form Controls',
    tabs: {
        Demo: select_component_1.SelectComponent,
        'demo.component.html': require("!raw!./select.component.html"),
        'demo.component.ts': require("!raw!./select.component.ts")
    }
};
