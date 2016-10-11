import { OffClickComponent } from './off-click.component';

export default {
  name: 'Off Click',
  path: 'off-click',
  tabs: {
    Demo: OffClickComponent,
    'demo.component.html': require("!raw!./off-click.component.html"),
    'demo.component.ts': require("!raw!./off-click.component.ts")
  }
};
