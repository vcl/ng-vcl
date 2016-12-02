import { StoreComponent } from './store.component';

export default {
  name: 'Store',
  route: 'store',
  category: 'Other',
  tabs: {
    Demo: StoreComponent,
    'README.md': require("!raw-loader!../../../src/store/README.md"),
    'demo.component.html': require("!raw-loader!./store.component.html"),
    'demo.component.ts': require("!raw-loader!./store.component.ts"),
    'books.service.ts': require("!raw-loader!./books.service.ts"),
    'books.reducers.ts': require("!raw-loader!./books.reducers.ts")
  }
};
