import { OffClickComponent } from './off-click.component';

export default {
  name: 'Off Click',
  route: 'off-click',
  category: 'Other',
  tabs: {
    Demo: OffClickComponent,
    'README.md': require("!raw-loader!../../../src/directives/off-click/README.md"),
    'demo.component.html': require("!raw-loader!./off-click.component.html"),
    'demo.component.ts': require("!raw-loader!./off-click.component.ts")
  }
};
