import { ButtonGroupComponent } from './button-group.component';

export default {
  name: 'Button Group',
  path: 'button-group',
  tabs: {
    Demo: ButtonGroupComponent,
    'README.md': require("!raw!../../../src/components/button-group/README.md"),
    'demo.component.html': require("!raw!./button-group.component.html"),
    'demo.component.ts': require("!raw!./button-group.component.ts")
  }
};
