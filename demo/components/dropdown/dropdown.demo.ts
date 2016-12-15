import { DropdownComponent } from './dropdown.component';

export default {
  name: 'Dropdown',
  route: 'dropdown',
  category: 'Form Controls',
  tabs: {
    Demo: DropdownComponent,
    'README.md': require("!raw-loader!../../../src/components/dropdown/README.md"),
    'demo.component.html': require("!raw-loader!./dropdown.component.html"),
    'demo.component.ts': require("!raw-loader!./dropdown.component.ts")
  }
};
