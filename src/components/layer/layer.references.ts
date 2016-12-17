import { Injectable, ReflectiveInjector, Injector } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Wormhole, ComponentWormhole } from './../../directives/wormhole/wormhole.module';
import { ComponentType } from './../../core/index';
import { LayerDirective } from './layer.directive';
import { LayerService } from './layer.service';

export interface LayerOptions {
  modal?: boolean;
  closeOnOffClick?: boolean;
  base?: string;
}

export interface LayerData {
  [key: string]: any;
}

export abstract class LayerReference extends Observable<any> {

  private results: Subject<any>;
  private stateChange = new Subject();

  source: Observable<LayerReference> = this.stateChange.asObservable();

  visible: boolean;
  modal: boolean;
  closeOnOffClick: boolean;
  base: string;
  data: any;

  wormhole: Wormhole;

  constructor(opts: LayerOptions)  {
    super();
    this.visible = false;
    this.base = opts.base || 'default';
    this.modal = !!opts.modal;
    this.closeOnOffClick = !!opts.closeOnOffClick;
    this.data = {};
  }

  open(data?: LayerData): Observable<any> {
    this.visible = true;
    this.data = data || {};
    this.wormhole = this.createWormhole();

    if (!this.results) {
      this.results = new Subject<any>();
    }
    this.stateChange.next(this);

    return this.results.asObservable();
  }

  close(result?: any) {
    this.visible = false;
    this.data = {};
    this.wormhole = null;
    if (typeof result !== 'undefined') {
      this.results.next(result);
    }
    this.results.complete();
    this.results = null;

    this.stateChange.next(this);
  }

  send(result: any) {
    if (result !== undefined && this.results) {
      this.results.next(result);
    }
  }

  abstract createWormhole();
}

@Injectable()
export class LayerDirectiveReference extends LayerReference {

  constructor(opts: LayerOptions, private layer: LayerDirective)  {
    super(opts);
  }

  createWormhole() {
    return this.layer;
  }
}

@Injectable()
export class LayerComponentReference<T> extends LayerReference {

  injector: ReflectiveInjector;

  constructor(opts: LayerOptions, private defaultInjector: Injector, private LayerClass: ComponentType<T>)  {
    super(opts);
    this.injector = ReflectiveInjector.resolveAndCreate([{
      provide: LayerComponentReference,
      useValue: this
    }], this.defaultInjector);
  }

  createWormhole() {
    if (this.wormhole instanceof ComponentWormhole) {
      // Reuse existing wormhole and update data
      // Change detection is triggered within setData() 
      this.wormhole.setData(this.data);
      return this.wormhole;
    }
    return new ComponentWormhole(this.LayerClass, { data: this.data, injector: this.injector });
  }
}
