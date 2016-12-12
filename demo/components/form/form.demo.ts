import { FormComponent } from './form.component';


export default {
  name: 'Form',
  route: 'form',
  category: 'Forms',
  tabs: {
    Demo: FormComponent,
    'README.md': require("!raw-loader!../../../src/components/form/README.md"),
    'demo.component.html': require("!raw-loader!./form.component.html"),
    'demo.component.ts': require("!raw-loader!./form.component.ts")
  }
};
