# VCLDateAdapter

The `VCLDateAdapter` is a service that provides utils for date operations.

```js
import { VCLDateadapterModule } from '@ng-vcl/ng-vcl';;

@NgModule({
  imports: [ VCLDateadapterModule ],
  ...
})
export class AppComponent {}

```
```ts
import { VCLDateAdapter } from '@ng-vcl/ng-vcl';;

@Component({ ... })
export class MyComponent {

  constructor(private dateAdapter: VCLDateAdapter<Date>) {
    const today = new Date();
    const s = dateAdapter.format(today, 'date');
  }
```

Check the `VCLDateAdapter` [abstract class](https://github.com/ng-vcl/ng-vcl/tree/dev/lib/ng-vcl/src/dateadapter/dateadapter.ts) for an overview of methods and properties.

### Date representation

The DateAdapter and components use the `VCLDate` generic type. The exact type is defined by the `VCLDateAdapter`.
The default implementation is using the native javascript date object.

#### Date range

A date range is defined by a start and an end date.

```ts
export interface VCLDateRange<VCLDate> {
  start: VCLDate;
  end: VCLDate;
}
```

### Localization

The default date adapter uses the javascript `Intl` interfaces for localization.
The angular `LOCALE_ID` token is used to determine the application locale.

Example:
```ts
import { LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [{provide: LOCALE_ID, useValue: 'de' }]
});
```

Check the [official docs](https://angular.io/guide/i18n) for further information.

#### Parsing and formatting input controls

One shortcomings of the native Date object is the lack of parsing support for specific locales.
The default data adapter expresses date and time for inputs in `ISO 8601`. e.g. `2019-08-08` or `18:11`

ng-vcl provides support for the following locales: `en`, `en-us`, `en-gb`, `de`, `de-AT`, `de-CH`, `de-DE`, `de-LI` and `de-LU`
Add one or more of the following providers to active support for a locale.

```ts
import { VCL_NATIVE_DATE_ADAPTER_PARSER, NativeDateAdapterParserEN, NativeDateAdapterParserENGB, NativeDateAdapterParserDE } from '@ng-vcl/ng-vcl';

@NgModule({
  providers: [
    {
      // `en`, `en-us`
      provide: VCL_NATIVE_DATE_ADAPTER_PARSER,
      useClass: NativeDateAdapterParserEN,
      multi: true
    },
    {
      // `en-gb
      provide: VCL_NATIVE_DATE_ADAPTER_PARSER,
      useClass: NativeDateAdapterParserENGB,
      multi: true
    }  ,
    {
      // `de`, `de-AT`, `de-CH`, `de-DE`, `de-LI`, `de-LU`
      provide: VCL_NATIVE_DATE_ADAPTER_PARSER,
      useClass: NativeDateAdapterParserDE,
      multi: true
    }  
  ],
})
export class MyApp {}
```

Other locales can be added by providing `VCL_NATIVE_DATE_ADAPTER_PARSER` with a class implementing the `VCLNativeDateAdapterParser`
Check one of the existing [providers](https://github.com/ng-vcl/ng-vcl/tree/dev/lib/ng-vcl/src/dateadapter/parsers) for an example.

### Weekday offset

The default first day of the week is Sunday.
Add the following provider for a weekday offset.

```ts
import { VCL_DATE_ADAPTER_WEEKDAY_OFFSET } from '@ng-vcl/ng-vcl';

@NgModule({
  providers: [
    // Calendar starts on Monday
    { provide: VCL_DATE_ADAPTER_WEEKDAY_OFFSET, useValue: 1 }
  ],
})
export class MyApp {}
```

### Custom date adapter

A custom adapter must extend from `VCLDateAdapter` and implement the abstract methods.

```ts
export class MyDateAdapter extends VCLDateAdapter<MyDate> {

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
import { VCLDateAdapter } from '@ng-vcl/ng-vcl';

@NgModule({
  providers: [
    { provide: VCLDateAdapter, useClass: MyDateAdapter }
  ],
})
export class MyApp {}
```
