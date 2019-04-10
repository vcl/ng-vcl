import { forwardRef, Inject, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Injectable, HostListener, Input, Output, EventEmitter, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription ,  Subject ,  Observable ,  from } from 'rxjs';
import { LayerRef, LayerService, Layer } from './../layer-legacy/index';
import { AlertOptions, AlertError, AlertResult, AlertType, AlertInput, AlertAlignment, TYPE_CLASS_MAP, ALERT_DEFAULTS, TEXT_ALIGNMENT_CLASS_MAP, BUTTON_ALIGNMENT_CLASS_MAP } from './types';

@Component({
  templateUrl: 'alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[tabindex]': '0',
    '[style.outline]': '"none"'
  }
})
export class AlertComponent implements AfterViewInit, OnDestroy {

  confirmActionSub?: Subscription;

  constructor(private elementRef: ElementRef,  private alertLayer: LayerRef, private layerService: LayerService, private cdRef: ChangeDetectorRef) {
    this.alertLayer = alertLayer;
   }

  @Input()
  alert: AlertOptions = {};

  value: any;
  validationError: string;

  @HostListener('keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    // Check if the top layer is the alert layer
    if (this.layerService.getTopLayer() === this.alertLayer) {
      if (ev.key === 'Escape' && this.alert.escClose) {
        this.close();
      } else if (ev.key === 'Enter') {
        this.confirm();
      }
    }
  }

  get alertClass() {
    return TYPE_CLASS_MAP[this.alert.type || AlertType.None].alertClass + ' ' + (this.alert.customClass || '');
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

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }

  confirm() {
    if (this.alert.loader) { return; }

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
      this.alert.loader = true;
      this.cdRef.markForCheck();
      const $ = from(typeof this.alert.confirmAction === 'function' ? this.alert.confirmAction(result) : this.alert.confirmAction);
      this.confirmActionSub = $.subscribe(value => {
        const asyncResult: AlertResult = {
          action: 'confirm'
        };
        asyncResult.value = value;
        this.alertLayer.send(asyncResult);
      }, err => {
        this.alertLayer.closeWithError(err);
      }, () => {
        this.alertLayer.close();
      });
    } else {
      if (this.alert.loaderOnConfirm) {
        this.alert.loader = true;
        this.cdRef.markForCheck();
        result.close = () => this.alertLayer.close();
        this.alertLayer.send(result);
      } else  {
        this.alertLayer.close(result);
      }
    }
  }

  cancel() {
    const result: AlertResult = {
      action: 'cancel'
    };
    if (this.alert.cancelButtonThrowsError) {
      this.alertLayer.closeWithError(result);
    } else {
      this.alertLayer.close(result);
    }
  }

  close() {
    const result: AlertResult = {
      action: 'close'
    };
    if (this.alert.closeThrowsError) {
      this.alertLayer.closeWithError(result);
    } else {
      this.alertLayer.close(result);
    }
  }

  valueChange(value: any) {
    this.value = value;
  }

  ngOnDestroy() {
    this.confirmActionSub && this.confirmActionSub.unsubscribe();
  }
}
