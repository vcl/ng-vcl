import { StoreModule } from './../../../src/index';
import { StoreComponent } from './store.component';
import { BooksEffects, BooksService } from './books.service';
import { BOOKS_REDUCERS } from './books.reducers';

export default {
  name: 'Store',
  route: 'store',
  category: 'Other',
  providers: [ BooksService ],
  imports: [StoreModule.forChild({
    reducers: [ BOOKS_REDUCERS ],
    effects: [ BooksEffects ]
  })],
  tabs: {
    Demo: StoreComponent,
    'README.md': require("!raw-loader!../../../src/store/README.md"),
    'demo.component.html': require("!raw-loader!./store.component.html"),
    'demo.component.ts': require("!raw-loader!./store.component.ts"),
    'books.service.ts': require("!raw-loader!./books.service.ts"),
    'books.reducers.ts': require("!raw-loader!./books.reducers.ts")
  }
};
