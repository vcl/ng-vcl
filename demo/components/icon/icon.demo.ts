import { IconComponent } from './icon.component';

export default {
  name: 'Icon',
  path: 'icon',
  category: 'Images',
  tabs: {
    Demo: IconComponent,
    'README.md': require("!raw-loader!../../../src/components/icon/README.md"),
    'demo.component.html': require("!raw-loader!./icon.component.html"),
    'demo.component.ts': require("!raw-loader!./icon.component.ts")
  }
};
