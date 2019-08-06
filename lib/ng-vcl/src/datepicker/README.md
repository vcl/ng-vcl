# vcl-datepicker

Lets users pick dates and time comfortably.

## Usage

```js
import { VCLDatePickerModule } from '@ng-vcl/ng-vcl';;

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
<vcl-datepicker [value]="value" (valueChange)="onValueChange($event)" pick="date"></vcl-datepicker>
```

### Date representation

The datepicker uses the `VCLDateAdapter` for date representation.
Check the [`VCLDateAdapter` docs](#/dateadapter) for further information.

### API

#### vcl-datepicker attributes

Name         | Type                              | Default | Description
------------ | -------                           | ------- | -----------------------------------------------
`value`      | VCLDate                           |         | Selected datein the calendar
`disabled`   | boolean                           | false   | Disables the datepicker when true
`pick`       | 'date' \| 'month' \| 'time'       | 'date'  | Datepicker mode

#### vcl-datepicker events
Name                | Type                                              | Description
---------------     | -------                                           | -----------------------------------------------
`valueChange`       | VCLDate \| VCLDate[] \| VCLDateRange<VCLDate>     | Triggered when a new date is selected

