import { DropdownComponent } from './dropdown.component';

export default {
  name: 'Dropdown',
  route: 'dropdown',
  category: 'Form Controls',
  tabs: {
    Demo: DropdownComponent,
    'demo.component.html': require("!raw-loader!./dropdown.component.html"),
    'demo.component.ts': require("!raw-loader!./dropdown.component.ts")
  }
};
