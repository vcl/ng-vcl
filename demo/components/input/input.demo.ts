import { InputComponent } from './input.component';

export default {
  name: 'Input',
  path: 'input',
  tabs: {
    Demo: InputComponent,
    'demo.component.html': require("!raw!./input.component.html"),
    'demo.component.ts': require("!raw!./input.component.ts")
  }
};
