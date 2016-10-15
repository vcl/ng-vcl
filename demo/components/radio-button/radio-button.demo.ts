import { RadioButtonComponent } from './radio-button.component';

export default {
  name: 'Radio Button',
  path: 'radio-button',
  category: 'Inputs',
  tabs: {
    Demo: RadioButtonComponent,
    'demo.component.html': require("!raw!./radio-button.component.html"),
    'demo.component.ts': require("!raw!./radio-button.component.ts")
  }
};
