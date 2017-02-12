import { InputControlGroupComponent } from './input-control-group.component';

export default {
  name: 'Input Control Group',
  route: 'input-control-group',
  category: 'Form Controls',
  tabs: {
    Demo: InputControlGroupComponent,
    'README.md': require("!raw-loader!../../../src/ng-vcl/input-control-group/README.md"),
    'demo.component.html': require("!raw-loader!./input-control-group.component.html"),
    'demo.component.ts': require("!raw-loader!./input-control-group.component.ts")
  }
};
