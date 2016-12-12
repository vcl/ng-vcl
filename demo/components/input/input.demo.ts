import { InputComponent } from './input.component';

export default {
  name: 'Input',
  route: 'input',
  category: 'Form Controls',
  tabs: {
    Demo: InputComponent,
    'README.md': require("!raw-loader!../../../src/components/input/README.md"),
    'demo.component.html': require("!raw-loader!./input.component.html"),
    'demo.component.ts': require("!raw-loader!./input.component.ts")
  }
};
