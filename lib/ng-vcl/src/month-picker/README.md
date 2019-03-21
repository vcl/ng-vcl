# vcl-month-picker

Lets users pick months comfortably.

## Usage

```js
import { VCLMonthPickerModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ VCLMonthPickerModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-month-picker [prevYearAvailable]="true" [nextYearAvailable]="true"></vcl-month-picker>
```

### API

#### vcl-month-picker attributes

| Name                  | Type                       | Default                      | Description                                                             |
| ------------          | -----------                | ------------------           |--------------                                                           |
| `debug`               | boolean                    | false                        |                                                                         |
| `expanded`            | boolean                    | true                         |                                                                         |
| `currentYear`         | number                     | `(new Date()).getFullYear()` |                                                                         |
| `tabindex`            | number                     | 0                            |                                                                         |
| `monthsPerRow`        | number                     | 3                            |                                                                         |
| `colors`              | string[]                   |                              | use to override month selection color \['#00ff00', '#000ff', ...\]      |
| `locales`             | string &#124; string[]     | 'en-US'                      |                                                                         |
| `dateOptions`         | Intl.DateTimeFormatOptions | { month: 'short' }           |                                                                         |
| `expandable`          | boolean                    | false                        |                                                                         |
| `prevYearAvailable`   | boolean                    | false                        |                                                                         |
| `nextYearAvailable`   | boolean                    | false                        |                                                                         |
| `useAvailableMonths`  | boolean                    | false                        |                                                                         |
| `closeBtnIcon`        | string                     | 'fas:times'                   |                                                                         |
| `prevYearBtnIcon`     | string                     | 'fas:chevron-left'            |                                                                         |
| `nextYearBtnIcon`     | string                     | 'fas:chevron-right'           |                                                                         |
| `maxSelectableMonths` | number                     |                              |                                                                         |
| `minSelectableMonths` | number                     | 0                            |                                                                         |
| `minYear`             | number                     | `Number.MIN_SAFE_INTEGER`    |                                                                         |
| `maxYear`             | number                     | `Number.MAX_SAFE_INTEGER`    |                                                                         |
| `min`                 | Date                       |                              |                                                                         |
| `max`                 | Date                       |                              | &nbsp;                                                                  |

#### vcl-month-picker events

| Name                  | Type                                             | Description  |
|------------           | -------------                                    | ------------ |
| `expandedChange`      | boolean                                          |              |
| `currentYearChange`   | number                                           |              |
| `prevYearBtnTap`      |                                                  |              |
| `nextYearBtnTap`      |                                                  |              |
| `select`              | string                                           |              |
| `deselect`            | string                                           |              |
| `change`              | Date &#124; Array&#x3C;Date&#124;undefined&#x3E; | &nbsp;       |
