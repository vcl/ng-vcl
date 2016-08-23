# L10n

## Installation

...

## Usage

```js

import { NgModule } from '@angular/core';
import { L10nModule } from 'ng2-l10n';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    L10nModule.forRoot({
      loader: MyLoaderService,  // required - loader services class
      loaderConfig: { ... },    // optional - loader configuration
      parser: MyParserService,  // optional - parser service class
      config: {
        locale: "en-us"         // optional - default locale. Uses browsers default language if not provided
      }
    })
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

Use the `loc` pipe in a template to localize a text

```html

<p>{{'HELLO_WORLD' | loc}}</p>

```

## Loader services

### Static resource loader
```
L10nModule.forRoot({
  loader: L10nStaticLoaderService,
  loaderConfig: {
    "HELLO_WORLD": {
      "en-us": "Hello World!"
      "de-de": "Hallo Welt!"
    }
  }
});


```

### HTTP service TODO
```js
L10nModule.forRoot({
  loader: L10nHTTPLoaderService,
  loaderConfig: {
    endpoint: 'URL_TO_JSON'
  }
});
```



```js

class AnyInjectableClass {
  constructor(private l10n: L10nHTTPService) {
    // Refetches the json    
    this.l10n.refresh();
  }
}
```

## Custom loaders

```js
@Injectable()
export class L10nFancyLoaderService extends L10nLoaderService {
  constructor(
    @Inject(L10N_CONFIG) 
    private config: L10nConfig,
    // other injections
  ) { 
    super();
    this.config; // loader config
  }

  // required
  fetchTranslationPackage(locale:string) : Observable<TranslationPackage> {
    // return your translation package as an Observable
  }

  // optional
  getSupportedLocales() : Observable<string[]> {
    // return an array of supported locales as an Observable
  }
}
```

## Template parameters

```json
{
  "HELLO_USER": {
    "en-us": "Hello {0}!",
    "de-de": "Hallo {0}!"
  }
}
```
```json
<span>{{HELLO_USER | loc:username}}</span>
```
