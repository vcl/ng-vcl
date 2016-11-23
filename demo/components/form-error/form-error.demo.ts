 import { FormErrorComponent } from './form-error.component';

export default {
  name: 'Form Error',
  path: 'form-error',
  category: 'Forms',
  tabs: {
    Demo: FormErrorComponent,
//    'README.md': require("!raw-loader!../../../src/components/form-error/README.md"),
    'demo.component.html': require("!raw-loader!./form-error.component.html"),
    'demo.component.ts': require("!raw-loader!./form-error.component.ts")
  }
};
