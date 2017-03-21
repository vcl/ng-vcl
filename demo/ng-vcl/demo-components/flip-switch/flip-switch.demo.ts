import { FlipSwitchComponent } from './flip-switch.component';

export default {
  name: 'Flip-Switch',
  route: 'flip-switch',
  category: 'Form Controls',
  tabs: {
    Demo: FlipSwitchComponent,
    'README.md': require("!raw-loader!../../../../src/ng-vcl/flip-switch/README.md"),
    'demo.component.html': require("!raw-loader!./flip-switch.component.html"),
    'demo.component.ts': require("!raw-loader!./flip-switch.component.ts")
  }
};
