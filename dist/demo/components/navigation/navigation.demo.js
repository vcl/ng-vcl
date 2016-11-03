"use strict";
var navigation_component_1 = require("./navigation.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Navigation',
    path: 'navigation',
    category: 'Navigation',
    tabs: {
        Demo: navigation_component_1.NavigationComponent,
        'README.md': require("!raw!../../../src/components/navigation/README.md"),
        'demo.component.html': require("!raw!./navigation.component.html"),
        'demo.component.ts': require("!raw!./navigation.component.ts")
    }
};
