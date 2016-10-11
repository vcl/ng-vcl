import { ToolbarComponent } from './toolbar.component';

export default {
  name: 'Toolbar',
  path: 'toolbar',
  tabs: {
    Demo: ToolbarComponent,
    'demo.component.html': require("!raw!./toolbar.component.html"),
    'demo.component.ts': require("!raw!./toolbar.component.ts")
  }
};
