import { LinkComponent } from './link.component';

export default {
  name: 'Link',
  path: 'link',
  tabs: {
    Demo: LinkComponent,
    'demo.component.html': require("!raw!./link.component.html"),
    'demo.component.ts': require("!raw!./link.component.ts")
  }
};
