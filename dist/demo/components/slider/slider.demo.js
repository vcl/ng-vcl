"use strict";
var slider_component_1 = require("./slider.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Slider',
    path: 'slider',
    category: 'Form Controls',
    tabs: {
        Demo: slider_component_1.SliderComponent,
        'demo.component.html': require("!raw!./slider.component.html"),
        'demo.component.ts': require("!raw!./slider.component.ts")
    }
};
