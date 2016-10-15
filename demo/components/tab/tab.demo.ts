import { TabComponent } from './tab.component';

export default {
  name: 'Tab',
  path: 'tab',
  category: 'Navigation',
  tabs: {
    Demo: TabComponent,
    'README.md': require("!raw!../../../src/components/tab/README.md"),
    'demo.component.html': require("!raw!./tab.component.html"),
    'demo.component.ts': require("!raw!./tab.component.ts")
  }
};
