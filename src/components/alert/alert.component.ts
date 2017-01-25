import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ComponentWormhole } from './../../directives/wormhole/wormhole';
import { Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Injectable, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { ComponentLayerRef, LayerRef, LayerService, Layer } from './../layer/layer.module';
import { AlertOptions, AlertError, AlertResult, AlertType, AlertInput, AlertAlignment, TYPE_CLASS_MAP, ALERT_DEFAULTS, TEXT_ALIGNMENT_CLASS_MAP, BUTTON_ALIGNMENT_CLASS_MAP } from './types';

// TODO: support text, password, textarea, select, radio, checkbox file.
@Component({
  templateUrl: 'alert-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'alert-input'
})
export class AlertInputComponent {

  @ViewChild('input') input;

  @Input()
  alert: AlertOptions = {};

  @Output()
  valueChange = new EventEmitter<any>();

  ngOnInit() {
    if (this.control === 'input' && typeof this.alert.inputValue === 'string') {
      this.inputValue = this.alert.inputValue;
    }
  }

  ngAfterViewInit() {
    if (this.input && this.input.nativeElement && this.input.nativeElement.focus) {
      setTimeout(() => this.input.nativeElement.focus(), 1);
    };
  }

  get control(): string {
    switch (this.alert.input) {
      case AlertInput.Text: return 'input';
    }
    return null;
  }

  get placeholder() {
    return this.alert.inputPlaceholder || '';
  }

  inputValue: string = '';

  inputValueChange(value: string) {
    this.valueChange.emit(value);
  }

}

@Component({
  templateUrl: 'alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {

  constructor(layerRef: LayerRef, private layerService: LayerService, private cdRef: ChangeDetectorRef) {
    this.layerRef = layerRef as AlertLayer;
   }

  layerRef: AlertLayer;

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
    if (this.layerService.getVisibleLayers().pop() === this.layerRef) {
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
      this.layerRef.send(result);
    } else  {
      this.layerRef.close(result);
    }
  }

  dismiss(reason: string) {
    this.layerRef.closeWithError(new AlertError(reason));
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
    this.offClickSub = this.layerRef.offClick$.subscribe(() => this.offClick() );
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
export class AlertLayer extends ComponentLayerRef<AlertComponent> {
  offClick$ = new Subject();
  offClick() {
    this.offClick$.next();
  }
};


