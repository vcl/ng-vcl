import { VCLPlotlyModule } from '@ng-vcl/plotly';
import { PlotlyDemoComponent } from './demo.component';

export default {
  name: 'Plotly',
  route: 'plotly',
  category: 'Other',
  imports: [VCLPlotlyModule],
  tabs: {
    Demo: PlotlyDemoComponent,
    'README.md': {
      type: 'md',
      content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../src/plotly/README.md")
    },
    'demo.component.html': {
      type: 'pre',
      content: require("!highlight-loader?raw=true&lang=html!./demo.component.html")
    },
    'demo.component.ts': {
      type: 'pre',
      content: require("!highlight-loader?raw=true&lang=ts!./demo.component.ts")
    },
  }
};
