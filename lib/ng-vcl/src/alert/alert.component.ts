import { Component, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, ElementRef, OnDestroy, Provider, Inject, Injectable } from '@angular/core';
import { Subscription ,  from } from 'rxjs';
import { LayerBase, LAYER_TOKEN } from './../layer';
import { AlertOptions, AlertResult, AlertType, TYPE_CLASS_MAP } from './types';

@Injectable()
export class AlertLayer extends LayerBase<AlertOptions, AlertResult, AlertComponent> {
  protected getComponent() {
    return AlertComponent;
  }
}

@Component({
  templateUrl: 'alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[tabindex]': '0',
    '[style.outline]': '"none"'
  },
  providers: [{
    provide: AlertLayer,
    useExisting: LAYER_TOKEN
  }]
})
export class AlertComponent implements AfterViewInit, OnDestroy {

  confirmActionSub?: Subscription;

  constructor(
    private elementRef: ElementRef,
    private alertLayer: AlertLayer,
    private cdRef: ChangeDetectorRef
  ) {
  }

  value: any;
  validationError: string;
  loader = false;

  get alert() {
    return this.alertLayer.data;
  }

  get alertClass() {
    return TYPE_CLASS_MAP[this.alert.type || AlertType.None].alertClass + ' ' + (this.alert.customClass || '');
  }

  get iconClass() {
    return TYPE_CLASS_MAP[this.alert.type || AlertType.None].iconClass;
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }

  confirm() {
    if (this.loader) { return; }

    const result: AlertResult = {
      action: 'confirm',
    };

    if (this.alert.input) {
      if (this.alert.inputValidator) {
        try {
          const valid = this.alert.inputValidator(this.value);
          if (!valid) {
            this.validationError = 'Invalid value';
            return;
          }
          result.value = this.value;
        } catch (ex) {
          this.validationError = String(ex);
          return;
        }
      }
    }

    if (this.alert.confirmAction) {
      this.loader = true;
      this.cdRef.markForCheck();
      const $ = from(typeof this.alert.confirmAction === 'function' ? this.alert.confirmAction(result) : this.alert.confirmAction);
      this.confirmActionSub = $.subscribe(value => {
        const asyncResult: AlertResult = {
          action: 'confirm',
          value
        };
        this.alertLayer.close(asyncResult);
      }, err => {
        const errorResult: AlertResult = {
          action: 'error',
          value: err
        };
        this.alertLayer.close(errorResult);
      });
    } else {
      this.alertLayer.close(result);
    }
  }

  cancel() {
    if (this.confirmActionSub) {
      this.confirmActionSub.unsubscribe();
    }

    const result: AlertResult = {
      action: 'cancel'
    };
    this.alertLayer.close(result);
  }

  close() {
    const result: AlertResult = {
      action: 'close'
    };
    this.alertLayer.close(result);
  }

  valueChange(value: any) {
    this.value = value;
  }

  ngOnDestroy() {
    this.confirmActionSub && this.confirmActionSub.unsubscribe();
  }
}
