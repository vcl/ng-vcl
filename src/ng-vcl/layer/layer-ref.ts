import { Injectable, ReflectiveInjector, Injector, ViewContainerRef, Directive, Input, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Wormhole, ComponentWormhole } from './../wormhole/wormhole.module';
import { ComponentType } from './../core/index';
import { LayerService } from './layer.service';

export interface LayerData {
  [key: string]: any;
}

export abstract class LayerRef {

  private results: Subject<any>;
  private stateChange = new Subject<LayerData>();
  private data: LayerData | undefined;

  visible: boolean;

  state$: Observable<LayerData> = this.stateChange.asObservable();

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
}
