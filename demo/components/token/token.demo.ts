import { TokenComponent } from './token.component';

export default {
  name: 'Token',
  route: 'token',
  category: 'Form Controls',
  tabs: {
    Demo: TokenComponent,
    'README.md': require("!raw-loader!../../../src/ng-vcl/token/README.md"),
    'demo.component.html': require("!raw-loader!./token.component.html"),
    'demo.component.ts': require("!raw-loader!./token.component.ts")
  }
};
