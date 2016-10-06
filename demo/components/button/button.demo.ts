import { ButtonComponent } from './button.component';

export default {
  name: 'Button',
  component: ButtonComponent,
  path: 'button',
  tabs: {
    'README.md': require("!raw!../../../src/components/button/README.md"),
    'button.component.html': require("!raw!./button.component.html"),
    'button.component.ts': require("!raw!./button.component.ts")
  }
};
