import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AlertOptions, AlertType, AlertResult, ALERT_DEFAULTS } from './types';
import { AlertLayerRef, AlertComponent } from './alert.component';
import { map, take } from 'rxjs/operators';
import { LayerFactory } from '../layer';

@Injectable()
export class AlertService {

  constructor(private lf: LayerFactory) { }

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

    const layerRef = this.lf.create(AlertComponent, {
      modal: alert.modal,
      useClass: AlertLayerRef
    });

    layerRef.open(alert);
    return layerRef.afterClose.pipe(map(result => {
      return result || <AlertResult> {
        action: 'close'
      };
    }), take(1));
  }
}
