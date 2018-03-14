### 21.03.2017.

Be aware of this [Plotly bug](https://github.com/plotly/plotly.js/issues/1492).

# API

## Properties:
### Input()

Name                 | Type                      | Default | Description
-------------------- | ------------------------- | ------- | --------------------------------------------------
`debug` _(1)_        | boolean                   | false   | whether to output debug information in the console
`plotId`             | string                    | ''      | plot div id
`plotHoverInfoId`    | string                    | ''      | hoverinfo div id, defaults to `${this.plotId}HoverInfo`
`plotClass`          | string                    | ''      | plot div classes
`plotHoverInfoClass` | string                    | ''      | hoverinfo div classes

`data`               | Plotly.Data[]             |         | [plot data](https://plot.ly/javascript/reference)
`layout`             | Plotly.Layout             |         | [plot layout](https://plot.ly/javascript/reference/#layout)
`configuration`      | Plotly.Configuration      |         | [plot configuration](https://plot.ly/javascript/configuration-options/)
`events`             | [event: string]: Function |         | [plot events](https://plot.ly/javascript/plotlyjs-events/), *see "Attaching events" below*
`frames`             | Plotly.Frame              |         | [plot frames](https://plot.ly/javascript/animations/)

`width`              | number                    |         | the width of the plot in percentage relative to the parent element 
`height`             | number                    |         | the height of the plot in percentage relative to the parent element 

### Public
`afterPlot`          | boolean                   |         | Whether the plot has been drawn for the first time
`plot`               | HTMLElement               |         | The plot's HTML element
`hoverInfo`          | HTMLElement               |         | An HTML element which can be used as a [custom hoverinfo](https://community.plot.ly/t/how-to-customize-plotly-tooltip/332/2)

_(1) Suggested use is in conjunction with browsing the vcl-plotly code_

  
## Methods:

Name           | Arguments                                    | Description
-------------- | -------------------------------------------- | -----------------------------------
`restyle`      | update: any, traces?: number[]       | [Plotly.restyle](https://plot.ly/javascript/plotlyjs-function-reference/#plotly-restyle) wrapper
`resize`       |                                      | Plotly.resize wrapper - resize the plot
`relayout`     | layout: any = this.layout            | [Plotly.relayout](https://plot.ly/javascript/plotlyjs-function-reference/#plotly-relayout) wrapper
`update`       |                                      | [Plotly.update](https://plot.ly/javascript/plotlyjs-function-reference/#plotly-update) wrapper
`redraw`       |                                      | Plotly.redraw wrapper - force a full recalculation and redraw of the plot
`recreate`     |                                      | [Plotly.newPlot](https://plot.ly/javascript/plotlyjs-function-reference/plotly-newplot) wrapper
`addTraces`    | traces: any OR any[], index?: number | [Plotly.addTraces](https://plot.ly/javascript/plotlyjs-function-reference/#plotly-addtraces) wrapper
`deleteTraces` | traces: number OR number[]           | [Plotly.deleteTraces](https://plot.ly/javascript/plotlyjs-function-reference/#plotly-deletetraces) wrapper

# Usage

## Using with webpack

The plotly package provides a special entry point for webpack.
Add "webpack" to resolve.mainFields in your webpack config file.

resolve: {
  mainFields: ["webpack", "module", "browser", "main"],
  ...
}

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


