import { VCLJssFormModule } from '@ng-vcl/jss-form';
import { JssFormComponent } from './jss-form.component';

export default {
  name: 'JSS-Form',
  route: 'jss-form',
  category: 'Forms',
  imports: [VCLJssFormModule],
  tabs: {
    Demo: JssFormComponent,
    'README.md': require("!raw-loader!../../../src/jss-form/README.md"),
    'demo.component.html': require("!raw-loader!./jss-form.component.html"),
    'demo.component.ts': require("!raw-loader!./jss-form.component.ts")
  }
};
