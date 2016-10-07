import { LayerComponent } from './layer.component';

export default {
  name: 'Layer',
  component: LayerComponent,
  path: 'layer',
  tabs: {
    'README.md': require("!raw!../../../src/components/layer/README.md"),
    'demo.component.html': require("!raw!./layer.component.html"),
    'demo.component.ts': require("!raw!./layer.component.ts")
  }
};
