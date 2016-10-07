import { IconComponent } from './icon.component';

export default {
  name: 'Icon',
  component: IconComponent,
  path: 'icon',
  tabs: {
    'README.md': require("!raw!../../../src/components/icon/README.md"),
    'demo.component.html': require("!raw!./icon.component.html"),
    'demo.component.ts': require("!raw!./icon.component.ts")
  }
};
