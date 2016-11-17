import { TokenComponent } from './token.component';

export default {
  name: 'Token',
  path: 'token',
  category: 'Buttons',
  tabs: {
    Demo: TokenComponent,
    'README.md': require("!raw!../../../src/components/token/README.md"),
    'demo.component.html': require("!raw!./token.component.html"),
    'demo.component.ts': require("!raw!./token.component.ts")
  }
};
