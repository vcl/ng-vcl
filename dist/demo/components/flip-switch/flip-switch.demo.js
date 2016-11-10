"use strict";
var flip_switch_component_1 = require("./flip-switch.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Flip-Switch',
    path: 'flip-switch',
    category: 'Inputs',
    tabs: {
        Demo: flip_switch_component_1.FlipSwitchComponent,
        'demo.component.html': require("!raw!./flip-switch.component.html"),
        'demo.component.ts': require("!raw!./flip-switch.component.ts")
    }
};
