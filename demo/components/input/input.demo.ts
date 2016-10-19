import { InputComponent } from './input.component';

export default {
  name: 'Input',
  path: 'input',
  category: 'Inputs',
  tabs: {
    Demo: InputComponent,
    'README.md': require("!raw!../../../src/components/input/README.md"),
    'demo.component.html': require("!raw!./input.component.html"),
    'demo.component.ts': require("!raw!./input.component.ts")
  }
};
