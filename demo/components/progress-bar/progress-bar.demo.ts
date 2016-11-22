import { ProgressBarComponent } from './progress-bar.component';

export default {
  name: 'Progress-Bar',
  path: 'progress-bar',
  category: 'Status Information',
  tabs: {
    Demo: ProgressBarComponent,
    'README.md': require("!raw!../../../src/components/progress-bar/README.md"),
    'demo.component.html': require("!raw!./progress-bar.component.html"),
    'demo.component.ts': require("!raw!./progress-bar.component.ts")
  }
};
