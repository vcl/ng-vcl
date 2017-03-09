import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, ComponentRef } from '@angular/core';

import { AlertOptions, AlertType, AlertResult, ALERT_DEFAULTS } from './types';
import { AlertLayer } from './alert.component';

@Injectable()
export class AlertService {

  constructor(private alertLayerRef: AlertLayer) { }

  alert(text: string, opts: AlertOptions = {}): Observable<AlertResult> {
    return this.open({ text }, opts);
  }

  info(text: string, opts: AlertOptions = {}): Observable<AlertResult> {
    return this.open({ text, type: AlertType.Info }, opts);
  }

  success(text: string, opts: AlertOptions = {}): Observable<AlertResult> {
    return this.open({ text, type: AlertType.Success }, opts);
  }

  warning(text: string, opts: AlertOptions = {}): Observable<AlertResult> {
    return this.open({ text, type: AlertType.Warning }, opts);
  }

  error(text: string, opts: AlertOptions = {}): Observable<AlertResult> {
    return this.open({ text, type: AlertType.Error }, opts);
  }

  question(text: string, opts: AlertOptions = {}): Observable<AlertResult> {
    return this.open({ text, type: AlertType.Question, showCancelButton: true }, opts);
  }

  open(...opts: AlertOptions[]): Observable<AlertResult> {
    const alert: AlertOptions = Object.assign({}, ALERT_DEFAULTS, ...opts);
    return this.alertLayerRef.open({alert});
  }

  close() {
    this.alertLayerRef.close();
  }

  noop = () => {};
}
