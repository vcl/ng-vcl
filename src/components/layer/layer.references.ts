import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Wormhole } from './../../directives/wormhole/wormhole.module';

export interface LayerData {
  [key: string]: any;
}

export abstract class LayerRef {

  private results: Subject<any>;
  private visibilityChange = new Subject<boolean>();

  private _visible: boolean;
  get visible(): boolean {
    return this._visible;
  };

  visible$ = this.visibilityChange.asObservable();

  base: string = 'default';
  modal: boolean = false;
  offClickClose: boolean = true;

  transparent: boolean = false;
  fill: boolean = false;
  stickToBottom: boolean = false;
  gutterPadding: boolean = false;

  wormhole: Wormhole;

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
    if (data !== undefined && this.results) {
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
