import { IconComponent } from './icon.component';

export default {
  name: 'Icon',
  route: 'icon',
  category: 'Images',
  tabs: {
    Demo: IconComponent,
    'README.md': require("!raw-loader!../../../../src/ng-vcl/icon/README.md"),
    'demo.component.html': require("!raw-loader!./icon.component.html"),
    'demo.component.ts': require("!raw-loader!./icon.component.ts")
  }
};
