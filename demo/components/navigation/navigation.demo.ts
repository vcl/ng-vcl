import { NavigationComponent } from './navigation.component';

export default {
  name: 'Navigation',
  route: 'navigation',
  category: 'Navigation',
  tabs: {
    Demo: NavigationComponent,
    'README.md': require("!raw-loader!../../../src/components/navigation/README.md"),
    'demo.component.html': require("!raw-loader!./navigation.component.html"),
    'demo.component.ts': require("!raw-loader!./navigation.component.ts")
  }
};
