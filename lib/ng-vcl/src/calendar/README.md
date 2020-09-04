# vcl-calendar

A calendar to display and select dates

## Usage

```js
import { VCLCalendarModule } from '@vcl/ng-vcl';

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

The calendar uses the `DateAdapterBase` for date representation.
Check the [`DateAdapterBase` docs](#/dateadapter) for further information.

### selectionMode

The calendar supports a variety of selection modes. The default `selectionMode` is `date`

- `date` Can select a single date
- `range` Can select a date range with a starting and ending date (see `VCLDateRange` interface)
- `multiple` Can select multiple dates
- `month` Can a single month
- `month-multiple` Can select multiple months 
- `month-range` Can select a month range with a starting and ending month (see `VCLDateRange` interface)

### dateModifier

A date modifier allows to customize specific days in the month calendar.
An array of object implementing the `VCLCalendarDateModifier` can be passed to the calendar.

```html
<vcl-calendar [dateModifiers]="dateModifiers"></vcl-calendar>
```

```ts
dateModifiers = [{
  match: new Date(2019, 0, 1), // Matches January, 1
  class: 'holiday', // Adds holiday css class
  disabled: true, // Disabled date
  view: 'month' // Limits  modifier to month view
}]
```

#### vcl-calendar attributes

Name                | Type                                            | Default | Description
---------------     | -------                                         | ------- | -----------------------------------------------
`value`             | VCLDate \| VCLDate[] \| VCLDateRange<VCLDate>   |         | Selected date(s)/date range in the calendar
`viewDate`          | VCLDate                                         | today   | The currently shown date in the calendar 
`selectionMode`     | VCLCalendarSelectionMode                        |         | See selectionMode description
`disabled`          | boolean                                         | false   | Disables the calendar when true
`dateModifiers`     | VCLCalendarDateModifier[]                       |         | only `month` view: See dateModifier description
`showWeekOfTheYear` | boolean                                         | false   | only `month` view: Show of the year when true
`maxSelectableDates`| boolean                                         |         | only for selectionMode `multiple` and `month-range`: Maximum number of selectable dates

#### vcl-calendar events
Name                | Type                                              | Description
---------------     | -------                                           | -----------------------------------------------
`valueChange`       | VCLDate \| VCLDate[] \| VCLDateRange<VCLDate>     | Triggered when a new date is selected
`viewDateChange`    | VCLDate                                           | Triggered when the viewDate changes

#### vcl-calendar interfaces

```ts
export type VCLCalendarSelectionMode = 'date' | 'multiple' | 'range' | 'month' | 'month-multiple' | 'month-range';
export type VCLCalendarView = 'month' | 'year' | 'years' | 'hours' | 'minutes';

export interface VCLCalendarDateModifier<VCLDate> {
  match: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;
  class?: string;
  disabled?: boolean;
  view:? VCLCalendarView;
}
```
