import { ButtonComponent } from './button.component';

export default {
  name: 'Button',
  route: 'button',
  category: 'Buttons',
  tabs: {
    Demo: ButtonComponent,
    'README.md': require("!raw-loader!../../../../src/ng-vcl/button/README.md"),
    'demo.component.html': require("!raw-loader!./button.component.html"),
    'demo.component.ts': require("!raw-loader!./button.component.ts")
  }
};
