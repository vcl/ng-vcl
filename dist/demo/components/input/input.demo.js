"use strict";
var input_component_1 = require("./input.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Input',
    path: 'input',
    category: 'Form Controls',
    tabs: {
        Demo: input_component_1.InputComponent,
        'README.md': require("!raw!../../../src/components/input/README.md"),
        'demo.component.html': require("!raw!./input.component.html"),
        'demo.component.ts': require("!raw!./input.component.ts")
    }
};
