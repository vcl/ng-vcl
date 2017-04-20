import { forwardRef, Inject, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Injectable, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { LayerRef, LayerService, Layer } from './../layer/index';
import { AlertOptions, AlertError, AlertResult, AlertType, AlertInput, AlertAlignment, TYPE_CLASS_MAP, ALERT_DEFAULTS, TEXT_ALIGNMENT_CLASS_MAP, BUTTON_ALIGNMENT_CLASS_MAP } from './types';

@Component({
  templateUrl: 'alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {

  constructor(@Inject(forwardRef(() => AlertLayer)) alertLayer: AlertLayer, private layerService: LayerService, private cdRef: ChangeDetectorRef) {
    this.alertLayer = alertLayer;
   }

  alertLayer: AlertLayer;

  @Input()
  alert: AlertOptions = {};

  value: any;
  validationError: string;

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    // Check if the top layer is the alert layer
    if (this.layerService.getTopLayer() === this.alertLayer) {
      if (ev.key === 'Escape' && this.alert.escClose) {
        this.alertLayer.dismiss('esc');
      } else if (ev.key === 'Enter') {
        this.confirm();
      }
    }
  }

  get alertClass() {
    return TYPE_CLASS_MAP[this.alert.type || AlertType.None].alertClass + ' ' + this.alert.customClass || '';
  }

  get iconClass() {
    return TYPE_CLASS_MAP[this.alert.type || AlertType.None].iconClass;
  }

  get titleAlignmentClass() {
    return TEXT_ALIGNMENT_CLASS_MAP[this.alert.titleAlignment || AlertAlignment.Left];
  }

  get iconAlignmentClass() {
    return TEXT_ALIGNMENT_CLASS_MAP[this.alert.iconAlignment || AlertAlignment.Center];
  }

  get contentAlignmentClass() {
    return TEXT_ALIGNMENT_CLASS_MAP[this.alert.contentAlignment || AlertAlignment.Left];
  }

  get buttonAlignmentClass() {
    return BUTTON_ALIGNMENT_CLASS_MAP[this.alert.buttonAlignment || AlertAlignment.Right];
  }

  confirm() {
    if (this.alert.loader) return;

    let result: AlertResult = {};

    if (this.alert.input) {
      if (this.alert.inputValidator) {
        let validationError = 'Invalid value';
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

    if (this.alert.loaderOnConfirm) {
      this.alert.loader = true;
      this.cdRef.markForCheck();
      this.alertLayer.send(result);
    } else  {
      this.alertLayer.close(result);
    }
  }

  cancel(reason: string ) {
    this.alertLayer.dismiss('cancel');
  }

  offClick() {
  }

  close(reason: string ) {
    this.alertLayer.dismiss('close');
  }

  valueChange(value: any) {
    this.value = value;
  }
}

@Layer(AlertComponent)
export class AlertLayer extends LayerRef {
  modal = true;
  transparent = true;

  dismiss(reason: string) {
    this.closeWithError(new AlertError(reason));
  }

  get alert(): AlertOptions {
    return (this.attrs && this.attrs['alert']) || {};
  }

  offClick() {
    if (this.alert.offClickClose) {
      this.dismiss('offClick');
    }
  }
};
