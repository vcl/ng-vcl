import { DatePickerComponent } from './date-picker.component';

export default {
  name: 'Date Picker',
  path: 'date-picker',
  category: 'Form Controls',
  tabs: {
    Demo: DatePickerComponent,
    'README.md': require("!raw!../../../src/components/date-picker/README.md"),
    'demo.component.html': require("!raw!./date-picker.component.html"),
    'demo.component.ts': require("!raw!./date-picker.component.ts")
  }
};
