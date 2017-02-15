import { Component, Input, SimpleChange } from '@angular/core';
import Plotly from 'plotly.js';

@Component({
  selector: 'vcl-plotly',
  templateUrl: './plotly.component.html'
})
export class PlotlyComponent {
  private TAG: string = 'PlotlyComponent';

  private static readonly plotlyFields: string[] = ['data', 'layout', 'configuration', 'events'];
  private static readonly recreateFields: string[] = ['elementId', 'plotClass', 'configuration', 'events'];

  private initialized: boolean = false;

  private plot: any;

  @Input() private elementId: string = 'elementId';
  @Input() private plotClass: string = 'plotlyPlot';
  @Input() private data: any[];
  @Input() private layout: any;
  @Input() private configuration: any;
  @Input() private events: any;

  @Input() private debug: boolean = false;

  ngOnInit() {
    this.TAG = `${this.TAG}.${this.elementId}`;
  }

  ngAfterViewInit() {
    if (this.debug) console.log(this.TAG, `ngAfterViewInit() initializting`);
    // Wait one run-loop
    setTimeout(() => {
      Plotly.newPlot(this.elementId, this.data, this.layout, this.configuration);
      this.plot = document.getElementById(this.elementId);
      this.attachEventListeners(this.elementId, this.plot, this.events);
      this.initialized = true;
    }, 0);
  }

  private attachEventListeners(elementId: string, plot: any, events: any) {
    Object.keys(events || {}).forEach(eventName => {
      plot.on(eventName, (event, data) => {
        events[eventName](data, event, elementId, plot, Plotly);
      });
    });
  }

  public addTraces(traces: any | any[], index: number = -1) {
    if (this.debug) console.log(this.TAG, `addTraces traces (`, traces, `) index (${index !== -1 ? index : this.data.length})`);
    if (index === -1) {
      Plotly.addTraces(this.plot, traces);
    } else {
      Plotly.addTraces(this.plot, traces, index);
    }
  }

  public deleteTraces(traces: number | number[]) {
    if (this.debug) console.log(this.TAG, `deleteTraces() traces:`, traces);
    Plotly.deleteTraces(this.plot, traces);
  }

  ngOnChanges(changes: any) {
    if (this.debug) console.log(this.TAG, 'ngOnChanges() changes:', changes);

    if (!this.initialized || !this.plot) {
      if (this.debug) console.log(this.TAG, `ngOnChanges() ignored changes (initialized - ${this.initialized}, plot - ${this.plot})`);
      return;
    }

    // Apply changes.
    const changedKeys: string[] = Object.keys(changes);
    changedKeys.forEach(k => {
      const change: SimpleChange = changes[k];
      if (change.previousValue !== change.currentValue) {
        if (this.debug) console.log(this.TAG, `ngOnChanges() ${k} changed from`, change.previousValue, 'to', change.currentValue);
        this[k] = change.currentValue;

        const plotlyField: boolean = includes(PlotlyComponent.plotlyFields, k);
        if (plotlyField) {
          this.plot[k] = this[k];
        }

        // It looks like either on purpose or due to a bug, the shapes in layout get
        // ignored (and removed) from the layout object on 'relayout' call.
        // This forces a redraw.
        if (k === 'layout' && change.currentValue.shapes) {
          changedKeys.push('shapes');
        }
      }
    });

    if (includesArr(changedKeys, PlotlyComponent.recreateFields)) {
      // Recreate the plot on recreateFields.
      if (this.debug) console.log(this.TAG, `ngOnChanges() re-creating, this:`, this);
      this.ngAfterViewInit();
    } else if (changedKeys.length === 1 && includes(changedKeys, 'layout')) {
      // If only the layout was changed, relayout.
      if (this.debug) console.log(this.TAG, `ngOnChanges() re-layouting, this:`, this);
      Plotly.relayout(this.plot, this.layout);
    } else {
      // Redraw the plot (data or shapes changed).
      if (this.debug) console.log(this.TAG, `ngOnChanges() re-drawing, this:`, this);
      Plotly.redraw(this.plot);
    }
  }
}

function includes(arr: any[], val: any): boolean {
  return arr.indexOf(val) !== -1;
}

function includesArr(arr: any[], vals: any[]): boolean {
  return vals.some(val => includes(arr, val));
}
