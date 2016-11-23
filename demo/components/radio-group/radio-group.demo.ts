import { RadioGroupComponent } from './radio-group.component';

export default {
  name: 'Radio Group',
  path: 'radio-group',
  category: 'Form Controls',
  tabs: {
    Demo: RadioGroupComponent,
    'README.md': require("!raw!../../../src/components/radio-group/README.md"),
    'demo.component.html': require("!raw!./radio-group.component.html"),
    'demo.component.ts': require("!raw!./radio-group.component.ts")
  }
};
