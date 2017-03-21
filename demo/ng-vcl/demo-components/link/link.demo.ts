import { LinkComponent } from './link.component';

export default {
  name: 'Link',
  route: 'link',
  category: 'Links',
  tabs: {
    Demo: LinkComponent,
    'README.md': require("!raw-loader!../../../../src/ng-vcl/link/README.md"),
    'demo.component.html': require("!raw-loader!./link.component.html"),
    'demo.component.ts': require("!raw-loader!./link.component.ts")
  }
};
