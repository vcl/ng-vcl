"use strict";
var date_picker_component_1 = require("./date-picker.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Date Picker',
    path: 'date-picker',
    category: 'Inputs',
    tabs: {
        Demo: date_picker_component_1.DatePickerComponent,
        'README.md': require("!raw!../../../src/components/date-picker/README.md"),
        'demo.component.html': require("!raw!./date-picker.component.html"),
        'demo.component.ts': require("!raw!./date-picker.component.ts")
    }
};
