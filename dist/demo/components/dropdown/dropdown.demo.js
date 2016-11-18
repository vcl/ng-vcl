"use strict";
var dropdown_component_1 = require("./dropdown.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Dropdown',
    path: 'dropdown',
    category: 'Form Controls',
    tabs: {
        Demo: dropdown_component_1.DropdownComponent,
        'demo.component.html': require("!raw!./dropdown.component.html"),
        'demo.component.ts': require("!raw!./dropdown.component.ts")
    }
};
