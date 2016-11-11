import { DatePickerComponent } from './date-picker.component';

export default {
  name: 'Date Picker',
  path: 'date-picker',
  category: 'Inputs',
  tabs: {
    Demo: DatePickerComponent,
    'demo.component.html': require("!raw!./date-picker.component.html"),
    'demo.component.ts': require("!raw!./date-picker.component.ts")
  }
};
