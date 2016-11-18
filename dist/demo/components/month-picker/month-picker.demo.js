"use strict";
var month_picker_component_1 = require("./month-picker.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Month Picker',
    path: 'month-picker',
    category: 'Form Controls',
    tabs: {
        Demo: month_picker_component_1.MonthPickerComponent,
        'demo.component.html': require("!raw!./month-picker.component.html"),
        'demo.component.ts': require("!raw!./month-picker.component.ts")
    }
};
