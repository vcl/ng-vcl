import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterViewInit,
  ElementRef,
  OnDestroy,
  HostBinding,
} from '@angular/core';
import { from } from 'rxjs';
import { SubSink } from 'subsink';

import { LayerRef } from '../layer/index';

import { AlertResult, AlertType, TYPE_CLASS_MAP, AlertOptions } from './types';

@Component({
  templateUrl: 'alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        outline: none;
      }
    `,
  ],
})
export class AlertComponent implements AfterViewInit, OnDestroy {
  value: any;
  validationError: string;
  loader = false;

  @HostBinding('attr.tabindex')
  tabindex = 0;

  get alert() {
    return this.alertLayer.data;
  }

  get alertClass() {
    return (
      TYPE_CLASS_MAP[this.alert.type || AlertType.None].alertClass +
      ' ' +
      (this.alert.customClass || '')
    );
  }

  get iconClass() {
    return TYPE_CLASS_MAP[this.alert.type || AlertType.None].iconClass;
  }

  private subscriptions = new SubSink();

  constructor(
    private readonly elementRef: ElementRef,
    private readonly alertLayer: LayerRef<AlertOptions, AlertResult>,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (this.alert && this.alert.inputValue) {
      this.value = this.alert.inputValue;
    }

    this.elementRef.nativeElement.focus();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  confirm() {
    if (this.loader) {
      return;
    }

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
      const $ = from(
        typeof this.alert.confirmAction === 'function'
          ? this.alert.confirmAction(result)
          : this.alert.confirmAction
      );
      this.subscriptions.sink = $.subscribe(
        value => {
          const asyncResult: AlertResult = {
            action: 'confirm',
            value,
          };
          this.alertLayer.close(asyncResult);
        },
        err => {
          const errorResult: AlertResult = {
            action: 'error',
            value: err,
          };
          this.alertLayer.close(errorResult);
        }
      );
    } else {
      this.alertLayer.close(result);
    }
  }

  cancel() {
    this.subscriptions.sink?.unsubscribe();

    const result: AlertResult = {
      action: 'cancel',
    };
    this.alertLayer.close(result);
  }

  close() {
    const result: AlertResult = {
      action: 'close',
    };
    this.alertLayer.close(result);
  }

  valueChange(value: any) {
    this.value = value;
  }
}
