import { ToolTipComponent } from './tooltip.component';

export default {
  name: 'Tooltip',
  route: 'tooltip',
  category: 'Overlays',
  tabs: {
    Demo: ToolTipComponent,
    'demo.component.html': require("!raw-loader!./tooltip.component.html"),
    'demo.component.ts': require("!raw-loader!./tooltip.component.ts")
  }
};
