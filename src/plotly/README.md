### 21.03.2017.

Be aware of this [Plotly bug](https://github.com/plotly/plotly.js/issues/1492).

# API

## Properties:

Name            | Type    | Default   | Description
--------------- | ------- | --------- | --------------------------------------------------
`plotId`        | string  | undefined | plot div id
`plotClass`     | string  | undefined | plot div classes
`data`          | any[]   | undefined | [plot data](https://plot.ly/javascript/reference)
`layout`        | any     | undefined | [plot layout](https://plot.ly/javascript/reference/#layout)
`configuration` | any     | undefined | [plot configuration](https://plot.ly/javascript/configuration-options/)
`events`        | any     | undefined | [plot events](https://plot.ly/javascript/plotlyjs-events/), *see "Attaching events" below*
`plot`          | any     | undefined | [plot div (HTMLElement)](https://plot.ly/javascript/plotlyjs-function-reference/#retrieving-data-layout)
`debug` _(1)_   | boolean | false     | whether to output event information in the console

_(1) Suggested use is in conjunction with browsing the vcl-plotly code_

## Methods:

Name           | Arguments                                    | Description
-------------- | -------------------------------------------- | -----------------------------------
`restyle`      | update: any, traces?: number[]       | [Plotly.restyle](https://plot.ly/javascript/plotlyjs-function-reference/#plotly-restyle) wrapper
`relayout`     | layout: any = this.layout            | [Plotly.relayout](https://plot.ly/javascript/plotlyjs-function-reference/#plotly-relayout) wrapper
`update`       |                                      | [Plotly.update](https://plot.ly/javascript/plotlyjs-function-reference/#plotly-update) wrapper
`redraw`       |                                      | Plotly.redraw wrapper (force a full recalculation and redraw of the plot)
`recreate`     |                                      | [Plotly.newPlot](https://plot.ly/javascript/plotlyjs-function-reference/plotly-newplot) wrapper
`addTraces`    | traces: any OR any[], index?: number | [Plotly.addTraces](https://plot.ly/javascript/plotlyjs-function-reference/#plotly-addtraces) wrapper
`deleteTraces` | traces: number OR number[]           | [Plotly.deleteTraces](https://plot.ly/javascript/plotlyjs-function-reference/#plotly-deletetraces) wrapper

# Usage

## Importing plotly (polyfills.ts or some other file)

if you want to use plotly in combination with zone.js,
you must include plotly *before* zone.js in your project!

```ts
import '@ng-vcl/plotly';

import 'zone.js/dist/zone';
```

See also: https://github.com/plotly/plotly.js/issues/955.

## app.module.ts
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

## myAwesomePlotly.component.ts

```html
<vcl-plotly *ngIf="data"
  [debug]="debug"
  [plotId]="plotId"
  [data]="data"
  [layout]="layout"
  [configuration]="configuration"
  [events]="events">
</vcl-plotly>
```

## Attaching events

The `events` field is an object just like `layout` and `configuration`.
To attach your custom events to the plotly plot, see the possible
[events](https://plot.ly/javascript/plotlyjs-events/)
and create them like so:

```ts
const events = {
  plotly_click: (data: any, event: any, plotId: string, plot: any, Plotly: any) => {
    ...
  }
}
```

Note: if you want to add a `plotly_afterplot` event handler,
you'll have to manually set `afterPlot` to true.

```ts
vclPlotlyComponent.afterPlot = true
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


