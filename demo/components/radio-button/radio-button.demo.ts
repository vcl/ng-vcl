import { RadioButtonComponent } from './radio-button.component';

export default {
  name: 'Radio Button',
  route: 'radio-button',
  category: 'Form Controls',
  tabs: {
    Demo: RadioButtonComponent,
    'README.md': require("!raw-loader!../../../src/ng-vcl/radio-button/README.md"),
    'demo.component.html': require("!raw-loader!./radio-button.component.html"),
    'demo.component.ts': require("!raw-loader!./radio-button.component.ts")
  }
};
