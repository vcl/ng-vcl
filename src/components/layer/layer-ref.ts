import { Injectable, ReflectiveInjector, Injector, ViewContainerRef, Directive, Input, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Wormhole, ComponentWormhole } from './../../directives/wormhole/wormhole.module';
import { ComponentType } from './../../core/index';
import { LayerService } from './layer.service';

export interface LayerData {
  [key: string]: any;
}

export interface LayerOptions {
  base?: string;
  modal?: boolean;
  offClickClose?: boolean;
  transparent?: boolean;
  fill?: boolean;
  stickToBottom?: boolean;
  gutterPadding?: boolean;
  customClass?: string;
}

const LAYER_OPTIONS_DEFAULTS: LayerOptions = {
  base: 'default',
  modal: false,
  transparent: false,
  fill: false,
  stickToBottom: false,
  gutterPadding: false,
};

export abstract class LayerRef {

  private results: Subject<any>;
  private stateChange = new Subject<LayerData>();
  private data: LayerData;
  _offClick = new Subject<any>();

  visible: boolean;

  state$ = this.stateChange.asObservable();
  offClick$ = this._offClick.asObservable();

  opts: LayerOptions = {};

  _setOptions(opts: LayerOptions) {
    this.opts = Object.assign({}, LAYER_OPTIONS_DEFAULTS, opts);
  }

  private update(value: boolean, data?: LayerData) {
    if (this.visible !== value || this.data !== data) {
      this.data = data;
      this.visible = value;
      this.stateChange.next(data);
    }
  }

  open(data?: LayerData): Observable<any> {
    this.update(true, data);
    this.results = new Subject<any>();
    return this.results.asObservable();
  }

  close(data?: any) {
    this.update(false);
    if (this.results) {
      if (data !== undefined) {
        this.results.next(data);
      }
      this.results.complete();
    }
  }

  closeWithError(data?: any) {
    this.update(false);
    if (this.results) {
      this.results.error(data);
    }
  }

  send(data: any) {
    if (data !== undefined && this.results) {
      this.results.next(data);
    }
  }

  onOffClick() {
    const offClickClose = typeof this.opts.offClickClose === 'boolean' ? this.opts.offClickClose : !this.opts.modal;
    if (offClickClose) {
      this.close();
    }
  }

  abstract _createWormhole(viewContainerRef: ViewContainerRef): Wormhole;
}
