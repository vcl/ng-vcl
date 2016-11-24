import { TabNavComponent } from './tab-nav.component';

export default {
  name: 'Tab Navigation',
  path: 'tab-nav',
  category: 'Navigation',
  tabs: {
    Demo: TabNavComponent,
    'README.md': require("!raw-loader!../../../src/components/tab-nav/README.md"),
    'demo.component.html': require("!raw-loader!./tab-nav.component.html"),
    'demo.component.ts': require("!raw-loader!./tab-nav.component.ts")
  }
};
