# vcl-date-picker

Lets users pick dates and time comfortably.

## Usage

```js
import { VCLDatePickerModule } from '@vcl/ng-vcl';;

@Component({
  imports: [ VCLDatePickerModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-form-control-group>
  <vcl-label>Date picker</vcl-label>
  <vcl-date-picker
    [value]="value"
    (valueChange)="onValueChange($event)"
  ></vcl-date-picker>
</vcl-form-control-group>
```

```html
<vcl-form-control-group>
  <vcl-label>Month picker</vcl-label>
  <vcl-date-picker
    [value]="value"
    (valueChange)="onValueChange($event)"
    pick="month"
  ></vcl-date-picker>
</vcl-form-control-group>
```

```html
<vcl-form-control-group>
  <vcl-label>Time picker</vcl-label>
  <vcl-date-picker
    [value]="value"
    (valueChange)="onValueChange($event)"
    pick="time"
  ></vcl-date-picker>
</vcl-form-control-group>
```

### Date representation

The date picker uses the `DateAdapterBase` for date representation.
Check the [`DateAdapterBase` docs](#/dateadapter) for further information.

### API

#### vcl-date-picker attributes

| Name                | Type                                | Default | Description                              |
| ------------------- | ----------------------------------- | ------- | ---------------------------------------- |
| `value`             | VCLDate                             |         | Current value                            |
| `viewDate`          | VCLDate                             | today   | The currently shown date in the calendar |
| `disabled`          | boolean                             | false   | Disables the date picker when true       |
| `pick`              | 'date' \| 'month' \| 'time'         | 'date'  | Parse format for date inputs             |
| `displayFormat`     | See `DateAdapterBaseDisplayFormats` | 'date'  | Display format of dates                  |
| `dateModifier`      | VCLCalendarDateModifier[]           |         | See vcl-calendar                         |
| `showWeekOfTheYear` | boolean                             | false   | See vcl-calendar                         |

#### vcl-date-picker events

| Name          | Type    | Description                           |
| ------------- | ------- | ------------------------------------- |
| `valueChange` | VCLDate | Triggered when a new date is selected |
