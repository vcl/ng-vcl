import { ButtonGroupDemoComponent } from './demo.component';

export default {
  name: 'Button Group',
  route: 'button-group',
  category: 'Buttons',
  tabs: {
    Demo: ButtonGroupDemoComponent,
    'README.md': {
      type: 'md',
      content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../src/ng-vcl/button-group/README.md")
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
