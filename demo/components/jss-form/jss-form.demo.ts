import { JssFormComponent } from './jss-form.component';

export default {
  name: 'JSS-Form',
  path: 'jss-form',
  category: 'Forms',
  tabs: {
    Demo: JssFormComponent,
    'README.md': require("!raw!../../../src/components/jss-form/README.md"),
    'demo.component.html': require("!raw!./jss-form.component.html"),
    'demo.component.ts': require("!raw!./jss-form.component.ts")
  }
};
