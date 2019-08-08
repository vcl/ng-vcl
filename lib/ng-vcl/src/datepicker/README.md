# vcl-datepicker

Lets users pick dates and time comfortably.

## Usage

```js
import { VCLDatepickerModule } from '@ng-vcl/ng-vcl';;

@NgModule({
  imports: [ VCLDatePickerModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-datepicker [value]="value" (valueChange)="onValueChange($event)"></vcl-datepicker>
```

```html
<vcl-datepicker [value]="value" (valueChange)="onValueChange($event)" pick="month"></vcl-datepicker>
```

```html
<vcl-datepicker [value]="value" (valueChange)="onValueChange($event)" pick="time"></vcl-datepicker>
```

### Date representation

The datepicker uses the `VCLDateAdapter` for date representation.
Check the [`VCLDateAdapter` docs](#/dateadapter) for further information.

### API

#### vcl-datepicker attributes

Name                | Type                                            | Default | Description
------------        | -------                                         | ------- | -----------------------------------------------
`value`             | VCLDate                                         |         | Current value
`viewDate`          | VCLDate                                         | today   | The currently shown date in the calendar 
`disabled`          | boolean                                         | false   | Disables the datepicker when true
`pick`              | 'date' \| 'month' \| 'time'                     | 'date'  | Datepicker mode
`dateModifier`      | VCLCalendarDateModifier[]                       |         | See vcl-calendar
`showWeekOfTheYear` | boolean                                         | false   | See vcl-calendar

#### vcl-datepicker events
Name                | Type       | Description
---------------     | -------    | -----------------------------------------------
`valueChange`       | VCLDate    | Triggered when a new date is selected
