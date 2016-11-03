import { NavigationComponent } from './navigation.component';

export default {
  name: 'Navigation',
  path: 'navigation',
  category: 'Navigation',
  tabs: {
    Demo: NavigationComponent,
    'README.md': require("!raw!../../../src/components/navigation/README.md"),
    'demo.component.html': require("!raw!./navigation.component.html"),
    'demo.component.ts': require("!raw!./navigation.component.ts")
  }
};
