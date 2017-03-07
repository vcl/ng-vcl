import { Component, Input, SimpleChange } from '@angular/core';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'vcl-plotly',
  templateUrl: './plotly.component.html'
})
export class PlotlyComponent {
  private static readonly Tag = 'PlotlyComponent';
  private static readonly PlotlyFields: string[] = ['data', 'layout', 'configuration', 'events'];
  private static readonly RecreateFields: string[] = ['elementId', 'plotClass', 'configuration', 'events'];

  private tag: string;
  private initialized = false;

  private plot: any;
  @Input() private debug = false;
  @Input() private elementId: string;
  @Input() private plotClass: string;
  @Input() private data: any[];
  @Input() private layout: any;
  @Input() private configuration: any;
  @Input() private events: any;

  private ngOnInit(): void {
    this.tag = `${PlotlyComponent.Tag}.${this.elementId}`;
  }

  private ngAfterViewInit(): void {
    const tag = `${this.tag}.ngAfterViewInit()`;
    if (this.debug) console.log(tag, `initializting`);
    setTimeout(() => {
      Plotly.newPlot(this.elementId, this.data, this.layout, this.configuration);
      this.plot = document.getElementById(this.elementId);
      this.attachEventListeners(this.events);
      this.initialized = true;
      if (this.debug) console.log(tag, `initialized, this:`, this);
    }, 0);
  }

  private attachEventListeners(events: any): void {
    const tag = `${this.tag}.attachEventListeners()`;
    if (this.debug) console.log(tag, `events:`, events);
    Object.keys(events || {}).forEach(k => {
      this.plot.on(k, (data, event) => {
        if (this.debug) console.log(tag, `called event '${k}'`);
        events[k](data, event, this.elementId, this.plot, Plotly);
      });
    });
    if (this.debug) console.log(tag, `this:`, this);
  }

  public addTraces(traces: any | any[], index: number = this.data.length): void {
    const tag = `${this.tag}.addTraces()`;
    if (this.debug) console.log(tag, `traces (`, traces, `) index (${index})`);
    Plotly.addTraces(this.plot, traces, index);
  }

  public deleteTraces(traces: number | number[]): void {
    const tag = `${this.tag}.deleteTraces()`;
    if (this.debug) console.log(tag, `traces:`, traces);
    Plotly.deleteTraces(this.plot, traces);
  }

  private ngOnChanges(changes: any): void {
    const tag = `${this.tag}.ngOnChanges()`;
    if (this.debug) console.log(tag, `changes:`, changes);
    if (!this.initialized || !this.plot) {
      if (this.debug) console.log(tag, `ignored changes (initialized - ${this.initialized}, plot - ${this.plot})`);
      return;
    }

    // Apply changes.
    const changedKeys: string[] = Object.keys(changes);
    changedKeys.forEach(k => {
      const change: SimpleChange = changes[k];
      if (change.previousValue !== change.currentValue) {
        if (this.debug) console.log(tag, `${k} changed from`, change.previousValue, 'to', change.currentValue);
        this[k] = change.currentValue;

        const plotlyField: boolean = includes(PlotlyComponent.PlotlyFields, k);
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

    if (includesArr(changedKeys, PlotlyComponent.RecreateFields)) {
      // Recreate the plot on RecreateFields.
      if (this.debug) console.log(tag, `re-creating, this:`, this);
      this.ngAfterViewInit();
    } else if (changedKeys.length === 1 && includes(changedKeys, 'layout')) {
      // If only the layout was changed, relayout.
      if (this.debug) console.log(tag, `re-layouting, this:`, this);
      Plotly.relayout(this.plot, this.layout);
    } else {
      // Redraw the plot (data or shapes changed).
      if (this.debug) console.log(tag, `re-drawing, this:`, this);
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
