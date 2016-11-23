import { MonthSelectorComponent } from './month-selector.component';

export default {
  name: 'Month Selector',
  path: 'month-selector',
  category: 'Form Controls',
  tabs: {
    Demo: MonthSelectorComponent,
    'demo.component.html': require("!raw-loader!./month-selector.component.html"),
    'demo.component.ts': require("!raw-loader!./month-selector.component.ts")
  }
};
