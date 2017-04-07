import { TokenDemoComponent } from './demo.component';

export default {
  name: 'Token',
  route: 'token',
  category: 'Form Controls',
  tabs: {
    Demo: TokenDemoComponent,
    'README.md': {
      type: 'md',
      content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../src/ng-vcl/token/README.md")
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
