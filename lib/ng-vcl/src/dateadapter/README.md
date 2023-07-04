# DateAdapter

The `DateAdapter` is a service that provides utils for date operations.

```typescript
import { VCLDateAdapterModule } from '@vcl/ng-vcl';;

@NgModule({
  imports: [ VCLDateAdapterModule.forRoot() ],
  ...
})
export class AppComponent {}
```

```ts
import { DateAdapter } from '@vcl/ng-vcl';;

@Component({ ... })
export class MyComponent {

  constructor(private dateAdapter: DateAdapter) {
    const today = new Date();
    const s = dateAdapter.format(today, 'date');
  }
```

Check the `DateAdapterBase` [abstract class](https://github.com/ng-vcl/ng-vcl/tree/dev/lib/ng-vcl/src/dateadapter/dateadapter-base.ts) for an overview of methods and properties.

## Date Representation

The DateAdapter and components use the `VCLDate` generic type. The exact type is defined by the `DateAdapterBase`.
The default implementation is using the native javascript date object.

### Date range

A date range is defined by a start and an end date.

```ts
export interface VCLDateRange<VCLDate> {
  start: VCLDate;
  end: VCLDate;
}
```

## Localization

The default date adapter uses the javascript `Intl` interfaces for localization.
The angular `LOCALE_ID` token is used to determine the application locale.

Example:

```ts
import { LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
});
```

Check the [official docs](https://angular.io/guide/i18n) for further information.

### Parsing and formatting input controls

One shortcomings of the native Date object is the lack of parsing support for specific locales.
The default data adapter expresses date and time for inputs in `ISO 8601`. e.g. `2019-08-08` or `18:11`

ng-vcl provides parsing support for the following locales: `en`, `en-us`, `en-gb`, `de`, `de-AT`, `de-CH`, `de-DE`, `de-LI` and `de-LU`

Other locales can be added by providing `VCL_DATE_ADAPTER_PARSER` with a class implementing the `DateAdapterParser`
Check one of the existing [providers](https://github.com/ng-vcl/ng-vcl/tree/dev/lib/ng-vcl/src/dateadapter/parsers) for a full example.

```ts
import { DateAdapterParser, DateAdapterBaseParseFormats, DateAdapterBaseDisplayFormats } from '@vcl/ng-vcl';

@Injectable({
  providedIn: 'root'
})
export class DateAdapterParserFR implements DateAdapterParser {
  supportedLocales = ['fr', 'fr-FR'];
  ...
}

@NgModule({
  providers: [
    {
      provide: VCL_DATE_ADAPTER_PARSER,
      useClass: DateAdapterParserFR,
      multi: true
    },
  ],
})
export class MyApp {}
```

## Weekday offset

The default first day of the week is Sunday.
Add the following provider for a weekday offset.

```ts
import { VCL_DATE_ADAPTER_WEEKDAY_OFFSET } from '@vcl/ng-vcl';

@NgModule({
  providers: [
    // Calendar week starts on Monday
    { provide: VCL_DATE_ADAPTER_WEEKDAY_OFFSET, useValue: 1 },
  ],
})
export class MyApp {}
```

## Custom date adapter

A custom adapter must extend from `DateAdapterBase` and implement the abstract methods.

```ts
export class MyDateAdapter extends DateAdapterBase<MyDate> {

  constructor(
    @Inject(VCL_DATE_ADAPTER_WEEKDAY_OFFSET)
    private weekDayOffset: number,
    @Optional()
    @Inject(LOCALE_ID)
    private locale?: string,
  ) {
    super();
  }

  // Abstract class implementation
  isDate(date: any): date is Date {
    ...
  }
  ...
}
```

```ts
import { DateAdapterBase } from '@vcl/ng-vcl';

@NgModule({
  providers: [
    MyDateAdapter
    { provide: DateAdapterBase, useExisting: MyDateAdapter },
  ],
})
export class MyApp {}
```
