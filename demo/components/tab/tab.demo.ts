import { TabComponent } from './tab.component';

export default {
  name: 'Tab',
  path: 'tab',
  tabs: {
    Demo: TabComponent,
    'demo.component.html': require("!raw!./tab.component.html"),
    'demo.component.ts': require("!raw!./tab.component.ts")
  }
};
