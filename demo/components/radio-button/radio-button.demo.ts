import { RadioButtonComponent } from './radio-button.component';

export default {
  name: 'Radio Button',
  path: 'radio-button',
  category: 'Form Controls',
  tabs: {
    Demo: RadioButtonComponent,
    'README.md': require("!raw!../../../src/components/radio-button/README.md"),
    'demo.component.html': require("!raw!./radio-button.component.html"),
    'demo.component.ts': require("!raw!./radio-button.component.ts")
  }
};
