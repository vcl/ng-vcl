import { DemoComponent } from './../demo/demo.component';
import { LayerComponent, LayerDemoCanDeactivateGuard } from './layer.component';

export default {
  name: 'Layer',
  route: 'layer',
  tabs: {
    Demo: LayerComponent,
    'README.md': require("!raw-loader!../../../src/components/layer/README.md"),
    'demo.component.html': require("!raw-loader!./layer.component.html"),
    'demo.component.ts': require("!raw-loader!./layer.component.ts")
  },
  providers: [LayerDemoCanDeactivateGuard],
  canDeactivate: [LayerDemoCanDeactivateGuard],
  category: 'Layer',
};
