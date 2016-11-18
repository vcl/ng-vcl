"use strict";
var month_selector_component_1 = require("./month-selector.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Month Selector',
    path: 'month-selector',
    category: 'Form Controls',
    tabs: {
        Demo: month_selector_component_1.MonthSelectorComponent,
        'demo.component.html': require("!raw!./month-selector.component.html"),
        'demo.component.ts': require("!raw!./month-selector.component.ts")
    }
};
