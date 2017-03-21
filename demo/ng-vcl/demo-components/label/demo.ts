import { LabelDemoComponent } from './demo.component';

export default {
  name: 'Label',
  route: 'label',
  category: 'Buttons',
  tabs: {
    Demo: LabelDemoComponent,
    'README.md': {
      type: 'md',
      content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../src/ng-vcl/label/README.md")
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
