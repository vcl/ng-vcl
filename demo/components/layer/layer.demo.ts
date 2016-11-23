import { LayerComponent } from './layer.component';

export default {
  name: 'Layer',
  path: 'layer',
  category: 'Layer',
  declarations: [LayerComponent],
  tabs: {
    Demo: LayerComponent,
    'README.md': require("!raw-loader!../../../src/components/layer/README.md"),
    'demo.component.html': require("!raw-loader!./layer.component.html"),
    'demo.component.ts': require("!raw-loader!./layer.component.ts")
  }
};
