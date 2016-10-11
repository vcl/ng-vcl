import { ButtonComponent } from './button.component';

export default {
  name: 'Button',
  path: 'button',
  tabs: {
    Demo: ButtonComponent,
    'README.md': require("!raw!../../../src/components/button/README.md"),
    'demo.component.html': require("!raw!./button.component.html"),
    'demo.component.ts': require("!raw!./button.component.ts")
  }
};
