import { FlipSwitchComponent } from './flip-switch.component';

export default {
  name: 'Flip-Switch',
  route: 'flip-switch',
  category: 'Form Controls',
  tabs: {
    Demo: FlipSwitchComponent,
    'demo.component.html': require("!raw-loader!./flip-switch.component.html"),
    'demo.component.ts': require("!raw-loader!./flip-switch.component.ts")
  }
};
