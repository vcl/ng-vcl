import { FileInputComponent } from './file-input.component';

export default {
  name: 'File Input',
  route: 'file-input',
  category: 'Form Controls',
  tabs: {
    Demo: FileInputComponent,
    'README.md': require("!raw-loader!../../../../src/ng-vcl/file-input/README.md"),
    'demo.component.html': require("!raw-loader!./file-input.component.html"),
    'demo.component.ts': require("!raw-loader!./file-input.component.ts")
  }
};
