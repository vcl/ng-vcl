import { TextareaComponent } from './textarea.component';

export default {
  name: 'Textarea',
  route: 'textarea',
  category: 'Form Controls',
  tabs: {
    Demo: TextareaComponent,
    'README.md': require("!raw-loader!../../../src/ng-vcl/textarea/README.md"),
    'demo.component.html': require("!raw-loader!./textarea.component.html"),
    'demo.component.ts': require("!raw-loader!./textarea.component.ts")
  }
};
