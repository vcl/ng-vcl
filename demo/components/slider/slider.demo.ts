import { SliderComponent } from './slider.component';

export default {
  name: 'Slider',
  route: 'slider',
  category: 'Form Controls',
  tabs: {
    Demo: SliderComponent,
    'demo.component.html': require("!raw-loader!./slider.component.html"),
    'demo.component.ts': require("!raw-loader!./slider.component.ts")
  }
};
