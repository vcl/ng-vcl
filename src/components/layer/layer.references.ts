import { Injectable, ReflectiveInjector, Injector } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Wormhole, ComponentWormhole } from './../../directives/wormhole/wormhole.module';
import { ComponentType } from './../../core/index';
import { LayerDirective } from './layer.directive';
import { LayerService } from './layer.service';

export interface LayerOptions {
  modal?: boolean;
  offClickClose?: boolean;
  base?: string;
}

export interface LayerData {
  [key: string]: any;
}

@Injectable()
export abstract class LayerRef {

  private results: Subject<any>;
  private visibilityChange = new Subject<boolean>();

  private _visible: boolean;
  get visible(): boolean {
    return this._visible;
  };

  visible$ = this.visibilityChange.asObservable();

  readonly modal: boolean;
  readonly offClickClose: boolean;
  readonly base: string;

  wormhole: Wormhole;

  constructor(private opts: LayerOptions = {})  {
    this.base = opts.base || 'default';
    this.modal = !!opts.modal;
    this.offClickClose = !!opts.offClickClose;
  }

  open(data?: LayerData): Observable<any> {
    if (!this.wormhole) {
      this.wormhole = this.createWormhole();
    }
    if (!this.visible) {
      this._visible = true;
      this.visibilityChange.next(true);
    }
    this.setData(data);

    if (!this.results) {
      this.results = new Subject<any>();
    }

    return this.results.asObservable();
  }

  close(data?: any) {
    if (this.visible) {
      this._visible = false;
      this.visibilityChange.next(false);
    }
    if (typeof data !== 'undefined') {
      this.results.next(data);
      this.results.complete();
      this.results = null;
    }
  }

  send(data: any) {
    if (data !== undefined && this.results) {
      this.results.next(data);
    }
  }

  protected abstract setData(data: LayerData);
  protected abstract createWormhole(): Wormhole;
}

export class LayerComponentRef<T> extends LayerRef {

  injector: ReflectiveInjector;

  constructor(private LayerClass: ComponentType<T>, opts: LayerOptions, private defaultInjector: Injector, )  {
    super(opts);
    this.injector = ReflectiveInjector.resolveAndCreate([{
      provide: LayerRef,
      useValue: this
    }], this.defaultInjector);
  }

  setData(data?: LayerData) {
    if (this.wormhole instanceof ComponentWormhole) {
      // Update wormhole data
      // Change detection is triggered within setData()
      this.wormhole.setData(data);
    }
  }

  createWormhole() {
    return new ComponentWormhole(this.LayerClass, { injector: this.injector });
  }
}
