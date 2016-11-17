"use strict";
var label_component_1 = require("./label.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Label',
    path: 'label',
    category: 'Buttons',
    tabs: {
        Demo: label_component_1.LabelComponent,
        'README.md': require("!raw!../../../src/components/label/README.md"),
        'demo.component.html': require("!raw!./label.component.html"),
        'demo.component.ts': require("!raw!./label.component.ts")
    }
};
