import { PopoverComponent } from './popover.component';

export default {
  name: 'Popover',
  path: 'popover',
  category: 'Layer',
  tabs: {
    Demo: PopoverComponent,
    'demo.component.html': require("!raw!./popover.component.html"),
    'demo.component.ts': require("!raw!./popover.component.ts")
  }
};
