import { enableProdMode, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'prismjs';
import 'prismjs/plugins/custom-class/prism-custom-class';
// import any languages you need:
import 'prismjs/components/prism-typescript.min';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    // providers: [{provide: LOCALE_ID, useValue: 'en-gb' }]
  })
  .catch(err => console.error(err));

Prism.plugins.customClass.prefix('prism-');
