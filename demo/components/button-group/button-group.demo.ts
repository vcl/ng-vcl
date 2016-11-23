import { ButtonGroupComponent } from './button-group.component';

export default {
  name: 'Button Group',
  path: 'button-group',
  category: 'Buttons',
  tabs: {
    Demo: ButtonGroupComponent,
    'README.md': require("!raw-loader!../../../src/components/button-group/README.md"),
    'demo.component.html': require("!raw-loader!./button-group.component.html"),
    'demo.component.ts': require("!raw-loader!./button-group.component.ts")
  }
};
