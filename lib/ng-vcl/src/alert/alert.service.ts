import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { LayerService } from '../layer/index';

import { AlertComponent } from './alert.component';
import { AlertOptions, AlertType, AlertResult, ALERT_DEFAULTS } from './types';

@Injectable()
export class AlertService {
  constructor(private layerService: LayerService) {}

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
    return this.open(
      { text, type: AlertType.Question, showCancelButton: true },
      opts
    );
  }

  open(...opts: AlertOptions[]): Observable<AlertResult> {
    const alert: AlertOptions = Object.assign({}, ALERT_DEFAULTS, ...opts);

    const layer = this.layerService.create(AlertComponent);

    layer.open({
      closeOnBackdropClick: alert.closeOnBackdropClick,
      closeOnEscape: alert.closeOnEscape,
      data: alert,
    });

    return layer.afterClose.pipe(
      map(result => {
        return (
          result ||
          ({
            action: 'close',
          } as AlertResult)
        );
      }),
      take(1)
    );
  }
}
