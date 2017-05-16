import { Component, Input, SimpleChange, } from '@angular/core';
import * as Plotly from 'plotly.js';

const PlotlyParameters = {
  Data: 'data',
  Layout: 'layout',
  Configuration: 'configuration',
  Events: 'events',
};

const PlotlyEvents = {
  AfterPlot: 'plotly_afterplot',
};

enum ChangeAction {
  Restyle,
  Relayout,
  Update,
  Redraw,
  Recreate,
}

@Component({
  selector: 'vcl-plotly',
  templateUrl: './plotly.component.html',
})
export class PlotlyComponent {
  private static readonly Tag: string = 'PlotlyComponent';
  private static readonly RecreateFields: string[] = [
    'plotId',
    'plotClass',
    PlotlyParameters.Configuration,
    PlotlyParameters.Events
  ];

  private tag: string;
  private changeAction: ChangeAction | undefined;

  public plot/*: HTMLElement */;
  public afterPlot: boolean = false;

  @Input() private debug = false;
  @Input() plotId: string;
  @Input() plotClass: string;
  @Input() private data: any[];
  @Input() private layout: any;
  @Input() private configuration: any;
  @Input() private events: any;

  private ngOnInit(): void {
    this.tag = `${PlotlyComponent.Tag}.${this.plotId}`;
  }

  private ngAfterViewInit(): void {
    const tag: string = `${this.tag}.ngAfterViewInit()`;
    if (this.debug) console.log(tag);
    setTimeout(() => {
      Plotly.newPlot(this.plotId, this.data, this.layout, this.configuration);
      this.plot = document.getElementById(this.plotId);

      this.plot.on(PlotlyEvents.AfterPlot, () => {
        if (this.debug) console.log(`${this.tag}.${PlotlyEvents.AfterPlot}()`);
        this.afterPlot = true;
      });

      this.attachEventListeners(this.events);
    });
  }

  private attachEventListeners(events: any): void {
    const tag: string = `${this.tag}.attachEventListeners()`;
    if (this.debug) console.log(tag, 'events:', events);
    Object.keys(events || {}).forEach(k => {
      const tag: string = `${this.tag}.${k}()`;
      this.plot.on(k, (data, event) => {
        if (this.debug) console.log(tag);
        events[k](data, event, this.plotId, this.plot, Plotly);
      });
    });
  }

  private ngOnChanges(changes): void {
    const tag: string = `${this.tag}.ngOnChanges()`;
    if (!this.plot) {
      if (this.debug) console.log(tag, 'ignoring changes, plot not yet once initialized');
      return;
    }
    if (this.debug) console.log(tag, 'changes:', changes);
    const changedKeys: string[] = Object.keys(changes);

    if (includes(changedKeys, PlotlyParameters.Layout)) {
      this.changeAction = ChangeAction.Relayout;
    }

    if (includes(changedKeys, PlotlyParameters.Data)) {
      this.changeAction = ChangeAction.Redraw;
    }

    if (includesArr(changedKeys, PlotlyComponent.RecreateFields)) {
      this.changeAction = ChangeAction.Recreate;
    }

    setTimeout(() => this.applyChanges());
  }

  private applyChanges(): void {
    const tag: string = `${this.tag}.applyChanges()`;
    if (this.debug) console.log(tag, 'this:', this);
    switch (this.changeAction) {
      case ChangeAction.Relayout:
        this.relayout();
        return;
      case ChangeAction.Redraw:
        this.redraw();
        return;
      case ChangeAction.Recreate:
        this.recreate();
        return;
    }
    this.changeAction = undefined;
  }

  public restyle(update, traces?: number[]): void {
    const tag: string = `${this.tag}.restyle()`;
    if (this.debug) console.log(tag, 'update:', update);
    if (this.debug) console.log(tag, 'traces:', traces === undefined ? 'all' : traces);
    Plotly.restyle(this.plot, update, traces);
  }

  public relayout(layout: any = this.layout): void {
    const tag: string = `${this.tag}.relayout()`;
    if (this.debug) console.log(tag, 'this.plot.layout before:', clone(this.plot.layout));
    Plotly.relayout(this.plot, layout).then(() => {
      if (this.debug) console.log(tag, 'this.plot.layout after:', this.plot.layout);
    });
  }

  public update(dataUpdate, layoutUpdate): void {
    const tag: string = `${this.tag}.update()`;
    if (this.debug) console.log(tag, 'dataUpdate:', dataUpdate);
    if (this.debug) console.log(tag, 'layoutUpdate:', layoutUpdate);
    Plotly.update(this.plot, dataUpdate, layoutUpdate);
  }

  public redraw(): void {
    const tag: string = `${this.tag}.redraw()`;
    if (this.debug) console.log(tag);
    this.plot.data = this.data;
    this.plot.layout = this.layout;
    Plotly.redraw(this.plot);
  }

  public recreate(): void {
    const tag: string = `${this.tag}.recreate()`;
    if (this.debug) console.log(tag);
    this.ngAfterViewInit();
  }

  public addTraces(traces: any | any[], index?: number): void {
    const tag: string = `${this.tag}.addTraces()`;
    if (this.debug) console.log(tag, 'traces:', traces);
    if (this.debug) console.log(tag, 'index:', index);
    Plotly.addTraces(this.plot, traces, index);
    // Issue: https://github.com/plotly/plotly.js/issues/1492
    // this.data = [
    //   ...this.data.slice(0, index),
    //   ...(Array.isArray(traces) ? traces : [traces]),
    //   ...this.data.slice(index),
    // ];
    // this.dataChange.emit(this.data);
  }

  public deleteTraces(traces: number | number[]): void {
    const tag: string = `${this.tag}.deleteTraces()`;
    if (this.debug) console.log(tag, 'traces:', traces);
    Plotly.deleteTraces(this.plot, traces);
    // Issue: https://github.com/plotly/plotly.js/issues/1492
    // const traceArr: number[] = Array.isArray(traces) ? traces : [traces];
    // this.data = this.data.filter((v, i) => !traceArr.find(index => index === i));
    // this.dataChange.emit(this.data);
  }
}


function includes(arr: any[], val: any): boolean {
  return arr.indexOf(val) !== -1;
}

function includesArr(arr: any[], vals: any[]): boolean {
  return vals.some(val => includes(arr, val));
}

function clone(v: any): any {
  return !v ? v : JSON.parse(JSON.stringify((v)));
}
