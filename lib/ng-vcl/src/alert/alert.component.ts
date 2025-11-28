import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterViewInit,
  ElementRef,
  OnDestroy,
  HostBinding,
} from '@angular/core';
import { Subscription, from } from 'rxjs';
import { LayerRef } from '../layer/index';
import { AlertResult, AlertType, TYPE_CLASS_MAP, AlertOptions } from './types';
import { NgClass } from '@angular/common';
import { VCLButtonComponent } from '../button';
import { VCLInputModule } from '../input';
import { VCLFormControlGroupModule } from '../form-control-group';
import { VCLAlertInputDirective } from './input-alert.directive';
import { VCLIconComponent } from '../icon';
import { VCLIcogramComponent } from '../icogram';

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
  imports: [
    NgClass,
    VCLAlertInputDirective,
    VCLButtonComponent,
    VCLInputModule,
    VCLIconComponent,
    VCLIcogramComponent,
    VCLFormControlGroupModule,
  ],
})
export class VCLAlertComponent implements AfterViewInit, OnDestroy {
  confirmActionSub?: Subscription;

  constructor(
    private elementRef: ElementRef,
    private alertLayer: LayerRef<AlertOptions, AlertResult>,
    private cdRef: ChangeDetectorRef
  ) {}

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

  ngAfterViewInit(): void {
    if (this.alert && this.alert.inputValue) {
      this.value = this.alert.inputValue;
    }

    this.elementRef.nativeElement.focus();
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
      this.confirmActionSub = $.subscribe(
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
    if (this.confirmActionSub) {
      this.confirmActionSub.unsubscribe();
    }

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

  ngOnDestroy() {
    this.confirmActionSub && this.confirmActionSub.unsubscribe();
  }
}
