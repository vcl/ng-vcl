# Usage

```ts
import { VCLPlotlyModule } from '@ng-vcl/plotly';

@NgModule({
    ...
    imports: [
      VCLPlotlyModule
    ]
    ...
})
export class AppModule {}
```

```html
<vcl-plotly
  [elementId]="'myDiv1'"
  [data]="data"
  [layout]="layout"
  [configuration]="configuration"
  [events]="events"
  [plotClass]="'customClass'">
</vcl-plotly>
```

## Attaching custom events

The 'events' field is an object just like 'layout' and 'configuration'.
To attach your custom events to the plotly plot, see the possible
[event handlers](https://plot.ly/javascript/plotlyjs-events/)
and create them like so:

```
const events = {
  plotly_click: (data: any, event: any, plotId: string, plot: any, Plotly: any) => {
    ...
  }
}
```

## Debug
It's also possible to enable the debug flag to output information in the console.
```html
<vcl-plotly
  ...
  [debug]="true"
  ...>
</vcl-plotly>
```

# Importing plotly

if you want to use plotly in combination with zone.js,
you must include plotly *before* zone.js in your project!

```ts
import '@ng-vcl/plotly';

import 'zone.js/dist/zone';
```

See also: https://github.com/plotly/plotly.js/issues/955.
