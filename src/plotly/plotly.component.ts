import {
  Component, OnInit, AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef, Input, SimpleChange, ElementRef, HostBinding,
  OnDestroy,
} from '@angular/core';
import * as Plotly from 'plotly.js';

const d3 = Plotly.d3;

const PlotlyParameter = {
  Data: 'data',
  Layout: 'layout',
  Configuration: 'configuration',
  Events: 'events',
  Frames: 'frames',
};

enum ChangeAction {
  Restyle,
  Relayout,
  Update,
  Redraw,
  Recreate,
}

const PlotlyEvent = {
  AfterPlot: 'plotly_afterplot',
};

@Component({
  selector: 'vcl-plotly',
  templateUrl: './plotly.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .hoverInfo {
      position: absolute;
      z-index: 1000;
    }
  `],
  host: {
    '[style.width]': '"100%"',
  }
})
export class PlotlyComponent implements OnInit, AfterViewInit, OnDestroy {
  private static readonly Tag: string = 'PlotlyComponent';
  private static readonly RecreateFields: string[] = [
    'plotId',
    'plotClass',
    PlotlyParameter.Configuration,
    PlotlyParameter.Events,
    PlotlyParameter.Frames,
  ];

  private tag: string;

  public afterPlot: boolean = false;
  private changeAction: ChangeAction | undefined;

  public element;
  public plot/*: HTMLElement */;
  public hoverInfo: HTMLElement;

  @Input() private debug = false;

  @Input() plotId: string = '';
  @Input() plotHoverInfoId: string = '';

  @Input() plotClass: string = '';
  @Input() plotHoverInfoClass: string = '';

  @Input() private data: any[];
  @Input() private layout: any;
  @Input() private configuration: any;
  @Input() private events: any;
  @Input() private frames: any[];

  @Input() private width: number;
  @Input() private height: number;

  private boundOnResize = this.onResize.bind(this);

  @HostBinding('class.vclLayoutHidden')
  get notAfterPlot(): boolean {
    return !this.afterPlot;
  }

  constructor(
    private readonly cd: ChangeDetectorRef,
    private readonly ref: ElementRef
  ) {
    const tag: string = `${this.tag}.constructor()`;
  }

  public ngOnInit(): void {
    this.tag = `${PlotlyComponent.Tag}.${this.plotId}`;
    const tag: string = `${this.tag}.ngOnInit()`;
    if (this.debug) console.log(tag);
    if (!this.plotHoverInfoId) this.plotHoverInfoId = `${this.plotId}HoverInfo`;
  }

  public ngAfterViewInit(): void {
    const tag: string = `${this.tag}.ngAfterViewInit()`;
    if (this.debug) console.log(tag);
    this.hoverInfo = document.getElementById(this.plotHoverInfoId) as HTMLElement;
    setTimeout(() => this.recreate());
  }

  private attachEventListeners(events: any): void {
    const tag: string = `${this.tag}.attachEventListeners()`;
    if (this.debug) console.log(tag, 'events:', events);

    const afterPlot = (): void => { this.afterPlot = true; this.cd.detectChanges(); };
    let afterPlotAdded: boolean = false;
    Object.keys(events || {}).forEach(k => {
      const tag: string = `${this.tag}.${k}()`;
      this.plot.on(k, (data, event) => {
        if (k === PlotlyEvent.AfterPlot) afterPlot();
        if (this.debug) console.log(tag, 'data:', data);
        if (this.debug) console.log(tag, 'event:', event);
        events[k](data, event, this, Plotly);
      });
      if (k === PlotlyEvent.AfterPlot) afterPlotAdded = true;
    });

    if (this.debug) console.log(tag, 'afterPlotAdded:', afterPlotAdded);
    if (!afterPlotAdded) {
      const tag: string = `${this.tag}.${PlotlyEvent.AfterPlot}()`;
      this.plot.on(PlotlyEvent.AfterPlot, (data, event) => {
        if (this.debug) console.log(tag, 'this.plot', this.plot);
        afterPlot();
      });
    }

    window.addEventListener('resize', this.boundOnResize);
  }

  private onResize(event?: Event): void {
    const tag: string = `${this.tag}.onResize()`;
    // if (this.debug) console.log(tag, 'event:', event);
    if (this.debug) console.log(tag, 'this.plot:', this.plot);
    Plotly.Plots.resize(this.plot);
  }

  private ngOnChanges(changes: any): void {
    const tag: string = `${this.tag}.ngOnChanges()`;
    if (!this.plot) {
      if (this.debug) console.log(tag, 'ignoring changes, plot not yet once initialized');
      return;
    }
    if (this.debug) console.log(tag, 'changes:', changes);
    const changedKeys: string[] = Object.keys(changes);

    if (includes(changedKeys, PlotlyParameter.Layout)) {
      this.changeAction = ChangeAction.Relayout;
    }

    if (includes(changedKeys, PlotlyParameter.Data)) {
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
        break;
      case ChangeAction.Redraw:
        this.redraw();
        break;
      case ChangeAction.Recreate:
        this.recreate();
        break;
    }
    this.changeAction = undefined;
  }

  public async restyle(update, traces?: number[]): Promise<any> {
    const tag: string = `${this.tag}.restyle()`;
    if (this.debug) console.log(tag, 'update:', update);
    if (this.debug) console.log(tag, 'traces:', traces === undefined ? 'all' : traces);
    return Plotly.restyle(this.plot, update, traces);
  }

  public async relayout(layout: any = this.layout): Promise<any> {
    const tag: string = `${this.tag}.relayout()`;
    if (this.debug) console.log(tag, 'layout:', layout);
    return Plotly.relayout(this.plot, layout).then(result => {
      if (this.debug) console.log(tag, 'this.plot.layout after:', this.plot.layout);
      return result;
    });
  }

  public async update(dataUpdate: any, layoutUpdate: any): Promise<any> {
    const tag: string = `${this.tag}.update()`;
    if (this.debug) console.log(tag, 'dataUpdate:', dataUpdate);
    if (this.debug) console.log(tag, 'layoutUpdate:', layoutUpdate);
    return Plotly.update(this.plot, dataUpdate, layoutUpdate);
  }

  public async redraw(): Promise<any> {
    const tag: string = `${this.tag}.redraw()`;
    if (this.debug) console.log(tag);
    this.plot.data = this.data;
    this.plot.layout = this.layout;
    return Plotly.redraw(this.plot);
  }

  public async recreate(): Promise<any> {
    const tag: string = `${this.tag}.recreate()`;
    if (this.debug) console.log(tag);
    window.removeEventListener('resize', this.boundOnResize);

    const style = {};
    if (this.width) Object.assign(style, {
      width: this.width + '%',
      'margin-left': (100 - this.width) / 2 + '%',
    });

    if (this.height) Object.assign(style, {
      height: this.height + 'vh',
      'margin-top': (100 - this.height) / 2 + 'vh'
    });
    if (this.debug) console.log(tag, 'style:', style);

    const selector: HTMLElement | string = this.ref.nativeElement;
    if (this.debug) console.log(tag, 'selector:', selector);

    this.element = this.element || d3.select(selector)
      .append('div')
      .style(style)
      .attr('id', this.plotId)
      .classed(this.plotClass, true);
    if (this.debug) console.log(tag, 'this.element:', this.element);

    this.plot = this.element.node();
    if (this.debug) console.log(tag, 'this.plot:', this.plot);

    // if (this.debug) console.log(tag, 'this.data:', this.data);
    // if (this.debug) console.log(tag, 'this.layout:', this.layout);
    // if (this.debug) console.log(tag, 'this.configuration:', this.configuration);
    // if (this.debug) console.log(tag, 'this.frames:', this.frames);
    const afterPlot = Plotly.newPlot(this.plot, {
      data: this.data,
      layout: this.layout,
      config: this.configuration,
      frames: this.frames,
    }).then(() => {
      if (this.width || this.height) {
        // if (this.debug) console.log(tag, 'this.plot:', this.plot);
        this.onResize();
        this.afterPlot = true;
      }
    });
    this.attachEventListeners(this.events);
    return afterPlot;
  }

  public async addTraces(traces: any | any[], index?: number): Promise<any> {
    const tag: string = `${this.tag}.addTraces()`;
    if (this.debug) console.log(tag, 'traces:', traces);
    if (this.debug) console.log(tag, 'index:', index);
    return Plotly.addTraces(this.plot, traces, index);
    // Issue: https://github.com/plotly/plotly.js/issues/1492
    // this.data = [
    //   ...this.data.slice(0, index),
    //   ...(Array.isArray(traces) ? traces : [traces]),
    //   ...this.data.slice(index),
    // ];
    // this.dataChange.emit(this.data);
  }

  public async deleteTraces(traces: number | number[]): Promise<any> {
    const tag: string = `${this.tag}.deleteTraces()`;
    if (this.debug) console.log(tag, 'traces:', traces);
    Plotly.deleteTraces(this.plot, traces);
    // Issue: https://github.com/plotly/plotly.js/issues/1492
    // const traceArr: number[] = Array.isArray(traces) ? traces : [traces];
    // this.data = this.data.filter((v, i) => !traceArr.find(index => index === i));
    // this.dataChange.emit(this.data);
  }

  public async animate(update: any, animation: any): Promise<any> {
    const tag: string = `${this.tag}.animate()`;
    if (this.debug) console.log(tag, 'update:', update);
    if (this.debug) console.log(tag, 'animation:', animation);
    return Plotly.animate(this.plot, update, animation);
  }

  public async addFrames(frames: any[], indices?: number[]): Promise<any> {
    const tag: string = `${this.tag}.addFrames()`;
    if (this.debug) console.log(tag, 'frames:', frames);
    if (this.debug) console.log(tag, 'indices:', indices);
    return Plotly.addFrames(this.plot, frames, indices);
  }

  public async deleteFrames(indices: number[]): Promise<any> {
    const tag: string = `${this.tag}.deleteFrames()`;
    if (this.debug) console.log(tag, 'frames:', frames);
    return Plotly.deleteFrames(this.plot, indices);
  }

  public ngOnDestroy(): void {
    const tag: string = `${this.tag}.ngOnDestroy()`;
    if (this.debug) console.log(tag);
    window.removeEventListener('resize', this.boundOnResize);
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
