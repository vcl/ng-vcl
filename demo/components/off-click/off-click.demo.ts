import { OffClickComponent } from './off-click.component';

export default {
  name: 'Off Click',
  path: 'off-click',
  category: 'Other',
  tabs: {
    Demo: OffClickComponent,
    'README.md': require("!raw!../../../src/directives/off-click/README.md"),
    'demo.component.html': require("!raw!./off-click.component.html"),
    'demo.component.ts': require("!raw!./off-click.component.ts")
  }
};
