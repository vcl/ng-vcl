import { Injectable, ReflectiveInjector, Injector, ViewContainerRef, Directive, Input, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { LayerService } from './layer.service';

export interface LayerAttributes {
  [key: string]: any;
}

export interface LayerOptions {
  base?: string;
  modal?: boolean;
  transparent?: boolean;
  fill?: boolean;
  stickToBottom?: boolean;
  gutterPadding?: boolean;
  customClass?: string;
}

export abstract class LayerRef implements LayerOptions {

  base: string = 'default';
  modal: boolean = false;
  transparent: boolean = false;
  fill: boolean = false;
  stickToBottom: boolean = false;
  gutterPadding: boolean = false;
  customClass?: string;

  visible: boolean;
  attrs: LayerAttributes | undefined;

  private results: Subject<any> | undefined;
  private stateChange = new Subject<{attrs?: LayerAttributes, visible: boolean}>();

  state$ = this.stateChange.asObservable();

  open(attrs?: LayerAttributes): Observable<any> {
    this.visible = true;
    this.attrs = attrs;
    this.stateChange.next({attrs, visible: true});
    if (!this.results) {
      this.results = new Subject<any>();
    }
    return this.results.asObservable();
  }

  close(data?: any) {
    this.visible = false;
    this.stateChange.next({visible: false});
    if (this.results) {
      if (data !== undefined) {
        this.results.next(data);
      }
      this.results.complete();
      this.results = undefined;
    }
  }

  closeWithError(data?: any) {
    this.visible = false;
    this.stateChange.next({visible: false});
    if (this.results) {
      this.results.error(data);
      this.results = undefined;
    }
  }

  send(data: any) {
    if (data !== undefined && this.results) {
      this.results.next(data);
    }
  }

  offClick() {
    if (!this.modal) {
      this.close();
    }
  }
}


