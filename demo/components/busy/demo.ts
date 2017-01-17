import { BusyDemoComponent } from './demo.component';

export default {
  name: 'Busy',
  route: 'busy',
  category: 'Status Information',
  tabs: {
    Demo: BusyDemoComponent,
    'README.md': {
      type: 'md',
      content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../src/components/busy/README.md")
    },
    'demo.component.html': {
      type: 'pre',
      content: require("!highlight-loader?raw=true&lang=html!./demo.component.html")
    },
    'demo.component.ts': {
      type: 'pre',
      content: require("!highlight-loader?raw=true&lang=ts!./demo.component.ts")
    },
  }
};
