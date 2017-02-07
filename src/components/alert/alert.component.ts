import { forwardRef, Inject, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Injectable, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { LayerRef, LayerService, Layer } from './../layer/layer.module';
import { AlertOptions, AlertError, AlertResult, AlertType, AlertInput, AlertAlignment, TYPE_CLASS_MAP, ALERT_DEFAULTS, TEXT_ALIGNMENT_CLASS_MAP, BUTTON_ALIGNMENT_CLASS_MAP } from './types';

@Component({
  templateUrl: 'alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {

  constructor(@Inject(forwardRef(() => AlertLayer)) alertLayer: AlertLayer, private layerService: LayerService) {
    this.alertLayer = alertLayer;
   }

  alertLayer: AlertLayer;

  offClickSub: Subscription;

  alert: AlertOptions = {};

  value: any;
  validationError: string;

  @Input()
  set alertOpts(opts: AlertOptions) {
    this.updateAlertOpts(ALERT_DEFAULTS, opts);
  };

  updateAlertOpts(...opts: AlertOptions[]) {
    this.alert = Object.assign({}, this.alert, ...opts);
  }

  // Close the top layer when escape is pressed
  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    if (this.layerService.getVisibleLayers().pop() === this.alertLayer) {
      if (ev.key === 'Escape' && this.alert.escClose ) {
        this.dismiss('esc');
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
      this.updateAlertOpts({ loader: true });
      this.alertLayer.send(result);
    } else  {
      this.alertLayer.close(result);
    }
  }

  dismiss(reason: string) {
    this.alertLayer.closeWithError(new AlertError(reason));
  }

  cancel(reason: string ) {
    this.dismiss('cancel');
  }

  offClick() {
    this.dismiss('offClick');
  }

  close(reason: string ) {
    this.dismiss('close');
  }

  valueChange(value: any) {
    this.value = value;
  }

  ngOnInit() {
    this.offClickSub = this.alertLayer.onOffClick$.subscribe(() => this.offClick() );
  }

  ngOnDestroy() {
    if (this.offClickSub && !this.offClickSub.closed) this.offClickSub.unsubscribe();
  }
}

@Layer({
  component: AlertComponent,
  modal: true,
  transparent: true,
})
@Injectable()
export class AlertLayer extends LayerRef {
  onOffClick$ = new Subject();
  onOffClick() {
    this.onOffClick$.next();
  }
};


