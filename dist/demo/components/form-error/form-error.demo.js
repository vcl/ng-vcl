"use strict";
var form_error_component_1 = require("./form-error.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Form Error',
    path: 'form-error',
    category: 'Forms',
    tabs: {
        Demo: form_error_component_1.FormErrorComponent,
        'demo.component.html': require("!raw!./form-error.component.html"),
        'demo.component.ts': require("!raw!./form-error.component.ts")
    }
};
