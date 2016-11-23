import { PopoverComponent } from './popover.component';

export default {
  name: 'Popover',
  path: 'popover',
  category: 'Layer',
  tabs: {
    Demo: PopoverComponent,
    'demo.component.html': require("!raw-loader!./popover.component.html"),
    'demo.component.ts': require("!raw-loader!./popover.component.ts")
  }
};
