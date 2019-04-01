import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AlertOptions, AlertType, AlertResult, ALERT_DEFAULTS } from './types';
import { AlertComponent } from './alert.component';
import { LayerService, LayerRef, LayerResult } from './../layer/index';

@Injectable()
export class AlertService {

  constructor(private ls: LayerService) { }

  currentLayer: LayerRef | undefined;

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

  open(...opts: AlertOptions[]): LayerResult<AlertResult> {
    const alert: AlertOptions = Object.assign({}, ALERT_DEFAULTS, ...opts);
    return this.ls.create(AlertComponent, {
      offClick: (layer) => {
        if (alert.offClickClose) {
          if (alert.closeThrowsError) {
            layer.closeWithError({
              action: 'close'
            });
          } else {
            layer.close({
              action: 'close'
            });
          }
        }
      },
      modal: true,
      transparent: true,
      attrs: {alert}
    }).open();

  }

  noop = () => {};
}
