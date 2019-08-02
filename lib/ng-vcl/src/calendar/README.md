# vcl-calendar

A calendar to display and select dates

## Usage

```js
import { VCLCalendarModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ VCLCalendarModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-calendar [date]="date"></vcl-calendar>
```

### Date representation

The calendar uses the `VCLDate` generic type. The exact type is defined by the `VCLDateAdapter`.
The default implementation is using the native javascript date object.


#### Date range representation

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


### Weekday offset

Add the following provider for an offset

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
    // Calendar starts on Monday
    { provide: VCLDateAdapter, useClass: MyDateAdapter }
  ],
})
export class MyApp {}
```



### API

#### vcl-calendar attributes

Name            | Type                                            | Default | Description
--------------- | -------                                         | ------- | -----------------------------------------------
`date`          | VCLDate \| VCLDateRange<VCLDate>                |         | Selected dates in the calendar
`viewDate`      | VCLDate                                         |         | The currently shown date in the calendar 
`minDate`       | VCLDate                                         |         | Minimum selectable date
`maxDate`       | VCLDate                                         |         | Maximum selectable date
`available`     | VCLDate \| VCLDate[] \| VCLDateRange<VCLDate>   |         | Marks dates as available
`unavailable`   | VCLDate \| VCLDate[] \| VCLDateRange<VCLDate>   |         | Marks dates as unavailable

#### vcl-calendar events
Name                | Type                                  | Description
---------------     | -------                               | -----------------------------------------------
`dateChange`        | VCLDate \| VCLDateRange<VCLDate>      | Triggered when a new date is selected
`viewDateChange`    | VCLDate                               | Triggered when the viewDate changes


