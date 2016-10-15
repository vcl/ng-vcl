import { LayerComponent } from './layer.component';

export default {
  name: 'Layer',
  path: 'layer',
  category: 'Layer',
  declarations: [LayerComponent],
  tabs: {
    Demo: LayerComponent,
    'README.md': require("!raw!../../../src/components/layer/README.md"),
    'demo.component.html': require("!raw!./layer.component.html"),
    'demo.component.ts': require("!raw!./layer.component.ts")
  }
};
