import { ProgressBarComponent } from './progress-bar.component';

export default {
  name: 'Progress-Bar',
  route: 'progress-bar',
  category: 'Status Information',
  tabs: {
    Demo: ProgressBarComponent,
    'README.md': require("!raw-loader!../../../../src/ng-vcl/progress-bar/README.md"),
    'demo.component.html': require("!raw-loader!./progress-bar.component.html"),
    'demo.component.ts': require("!raw-loader!./progress-bar.component.ts")
  }
};
