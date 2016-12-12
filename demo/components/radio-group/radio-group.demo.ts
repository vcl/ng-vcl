import { RadioGroupComponent } from './radio-group.component';

export default {
  name: 'Radio Group',
  route: 'radio-group',
  category: 'Form Controls',
  tabs: {
    Demo: RadioGroupComponent,
    'README.md': require("!raw-loader!../../../src/components/radio-group/README.md"),
    'demo.component.html': require("!raw-loader!./radio-group.component.html"),
    'demo.component.ts': require("!raw-loader!./radio-group.component.ts")
  }
};
