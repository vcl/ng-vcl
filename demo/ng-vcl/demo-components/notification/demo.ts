import { NotificationDemoComponent } from './demo.component';

export default {
  name: 'Notifications',
  route: 'notifications',
  category: 'Layer',
  tabs: {
    Demo: NotificationDemoComponent,
    'README.md': {
      type: 'md',
      content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../src/ng-vcl/notification/README.md")
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
