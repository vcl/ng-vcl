# vcl-date-picker

Lets users pick dates and points in time comfortably.

## Usage

```js
import { VCLDatePickerModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLDatePickerModule ],
  ...
})
export class AppComponent {}
```

 ```html
<vcl-date-picker></vcl-date-picker>
 ```

### API

#### Properties

| Name                             | Type        | Default   | Description
| -------------------------        | ----------- | --------- |--------------
| `highlightToday`                 | boolean     | true      | if true, the current day will be highlighted
| `highlightSelected`              | boolean     | true      | if true the selected days will be highlighted
| `displayWeekNumbers`             | boolean     | true      | if true the weeknumber will be displayed
| `displayWeekdays`                | boolean     | true      | if true the weekday-names will be displayed
| `displayJumpToday`               | boolean     | true      | if true the button "jump to today" will be shown
| `displayJumpSelected`            | boolean     | true      | if true the button "jump to selected" will be displayed
| `selectedDate`                   | Date        | today     | The inital selected time
| `selectRange`                    | boolean     | false     | if true, a range of days can be selected
| `selectedRangeEnd`               | Date        |           | if set, the initial selected range ends here
| `maxRangeLength`                 | number      | Infinity  | the max amount of days which can be in range
| `minDate`                        | Date        | 0.0.0     | min date which can be picked
| `maxDate`                        | Date        | 1.1.10000 | max date which can be picked
