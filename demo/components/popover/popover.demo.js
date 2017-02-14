"use strict";
var popover_component_1 = require("./popover.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Popover',
    route: 'popover',
    category: 'Layer',
    tabs: {
        Demo: popover_component_1.PopoverComponent,
        'README.md': require("!raw-loader!../../../src/ng-vcl/popover/README.md"),
        'demo.component.html': require("!raw-loader!./popover.component.html"),
        'demo.component.ts': require("!raw-loader!./popover.component.ts")
    }
};
