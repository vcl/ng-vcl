import { MonthPickerComponent } from './month-picker.component';

export default {
  name: 'Month Picker',
  path: 'month-picker',
  category: 'Form Controls',
  tabs: {
    Demo: MonthPickerComponent,
    'demo.component.html': require("!raw!./month-picker.component.html"),
    'demo.component.ts': require("!raw!./month-picker.component.ts")
  }
};
