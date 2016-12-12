import { ToolbarComponent } from './toolbar.component';

export default {
  name: 'Toolbar',
  route: 'toolbar',
  category: 'Navigation',
  tabs: {
    Demo: ToolbarComponent,
    'demo.component.html': require("!raw-loader!./toolbar.component.html"),
    'demo.component.ts': require("!raw-loader!./toolbar.component.ts")
  }
};
