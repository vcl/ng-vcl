import { InputControlGroupComponent } from './input-control-group.component';

export default {
  name: 'Input Control Group',
  path: 'input-control-group',
  category: 'Form Controls',
  tabs: {
    Demo: InputControlGroupComponent,
    'README.md': require("!raw-loader!../../../src/components/input-control-group/README.md"),
    'demo.component.html': require("!raw-loader!./input-control-group.component.html"),
    'demo.component.ts': require("!raw-loader!./input-control-group.component.ts")
  }
};
