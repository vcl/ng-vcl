import { LinkComponent } from './link.component';

export default {
  name: 'Link',
  path: 'link',
  category: 'Links',
  tabs: {
    Demo: LinkComponent,
    'README.md': require("!raw!../../../src/components/link/README.md"),
    'demo.component.html': require("!raw!./link.component.html"),
    'demo.component.ts': require("!raw!./link.component.ts")
  }
};
