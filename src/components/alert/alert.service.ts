import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, ComponentRef } from '@angular/core';
import { LayerService, LayerRef } from './../layer/layer.module';

import { AlertOptions, AlertType, AlertResult } from './types';
import { AlertLayer } from './alert.component';

@Injectable()
export class AlertService {

  constructor(
    private layerService: LayerService,
    private alertLayerRef: AlertLayer,
  ) { }

  info(text: string, title?: string, opts?: AlertOptions): Observable<AlertResult> {
    return this.open(text, title, { type: AlertType.Info }, opts);
  }

  success(text: string, title?: string, opts?: AlertOptions): Observable<AlertResult> {
    return this.open(text, title, { type: AlertType.Success }, opts);
  }

  warning(text: string, title?: string, opts?: AlertOptions): Observable<AlertResult> {
    return this.open(text, title, { type: AlertType.Warning }, opts);
  }

  error(text: string, title?: string, opts?: AlertOptions): Observable<AlertResult> {
    return this.open(text, title, { type: AlertType.Error }, opts);
  }

  question(text: string, title?: string, opts?: AlertOptions): Observable<AlertResult> {
    return this.open(text, title, { type: AlertType.Question, showCancelButton: true }, opts);
  }

  open(opts: AlertOptions): Observable<AlertResult>;
  open(text: string, title?: string, ...opts: AlertOptions[]): Observable<AlertResult>;
  open(text: string | AlertOptions, title?: string, ...opts: AlertOptions[]): Observable<AlertResult> {
    let alertOpts: AlertOptions = {};
    if (typeof text === 'string') {
      Object.assign(alertOpts, { text, title }, ...opts);
    } else if (typeof text === 'object' && text) {
      Object.assign(alertOpts, text, ...opts);
    } else {
      throw 'Invalid parameters';
    }

    return this.alertLayerRef.open({alertOpts});
  }

  close() {
    this.alertLayerRef.close();
  }

  noop = () => {};
}
