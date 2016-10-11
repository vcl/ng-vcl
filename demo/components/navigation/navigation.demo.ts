import { NavigationComponent } from './navigation.component';

export default {
  name: 'Navigation',
  path: 'navigation',
  tabs: {
    Demo: NavigationComponent,
    'demo.component.html': require("!raw!./navigation.component.html"),
    'demo.component.ts': require("!raw!./navigation.component.ts")
  }
};
