import { DemoComponent } from './../demo/demo.component';
import { LayerComponent, LayerDemoCanDeactivateGuard } from './layer.component';

export default {
  name: 'Layer',
  // route: 'layer',
  route: {
    path: 'layer',
    component: DemoComponent,
    data: {
      name: 'Layer',
      tabs: {
        Demo: LayerComponent,
        'README.md': require("!raw-loader!../../../src/components/layer/README.md"),
        'demo.component.html': require("!raw-loader!./layer.component.html"),
        'demo.component.ts': require("!raw-loader!./layer.component.ts")
      }
    }
  },
  tabs: {
    Demo: LayerComponent
  },
  // route: {
  //   path: 'layer',
  //   component: LayerComponent,
  //   canDeactivate: [LayerDemoCanDeactivateGuard]
  // },
  category: 'Layer',

};
