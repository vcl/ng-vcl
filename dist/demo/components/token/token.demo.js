"use strict";
var token_component_1 = require("./token.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Token',
    path: 'token',
    category: 'Buttons',
    tabs: {
        Demo: token_component_1.TokenComponent,
        'README.md': require("!raw!../../../src/components/token/README.md"),
        'demo.component.html': require("!raw!./token.component.html"),
        'demo.component.ts': require("!raw!./token.component.ts")
    }
};
