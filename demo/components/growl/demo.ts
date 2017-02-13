import { GrowlDemoComponent } from './demo.component';

export default {
  name: 'Growl',
  route: 'growl',
  category: 'Layer',
  tabs: {
    Demo: GrowlDemoComponent,
    'README.md': {
      type: 'md',
      content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../src/ng-vcl/growl/README.md")
    },
    'demo.component.html': {
      type: 'pre',
      content: require("!highlight-loader?raw=true&lang=html!./demo.component.html")
    },
    'demo.component.ts': {
      type: 'pre',
      content: require("!highlight-loader?raw=true&lang=ts!./demo.component.ts")
    }
  }
};
