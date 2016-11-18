import { SliderComponent } from './slider.component';

export default {
  name: 'Slider',
  path: 'slider',
  category: 'Form Controls',
  tabs: {
    Demo: SliderComponent,
    'demo.component.html': require("!raw!./slider.component.html"),
    'demo.component.ts': require("!raw!./slider.component.ts")
  }
};
