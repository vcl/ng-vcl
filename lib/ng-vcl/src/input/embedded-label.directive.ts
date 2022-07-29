
import { Directive, HostBinding, Optional, SkipSelf, ElementRef, Input, Renderer2, ChangeDetectorRef, InjectionToken, ContentChild, AfterContentInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export type EmbeddedInputFieldLabelMode = 'float' | 'static' | 'disabled';

export interface EmbeddedInputFieldLabelInput {
  readonly stateChanged: Observable<void>;
  readonly isLabelFloating: boolean;
  readonly isFocused: boolean;
  readonly prependedElements?: number;
}

export const FORM_CONTROL_EMBEDDED_LABEL_INPUT = new InjectionToken<EmbeddedInputFieldLabelInput>('vcl-form-control-embedded-input-field-label');

export class EmbeddedInputFieldLabelConfig {
  constructor(mode?: EmbeddedInputFieldLabelMode) {
    this._mode = mode || 'float';
  }

  private _mode: EmbeddedInputFieldLabelMode;
  private _modeChangeEmitter = new Subject<EmbeddedInputFieldLabelMode>();
  modeChange = this._modeChangeEmitter.asObservable();

  get mode() {
    return this._mode;
  }

  setMode(mode: EmbeddedInputFieldLabelMode) {
    this._mode = mode;
    this._modeChangeEmitter.next(mode);
  }
}

@Directive({
  selector: 'vcl-form-control-group',
  exportAs: 'vclEmbeddedInputFieldLabel'
})
export class EmbeddedInputFieldLabelDirective implements AfterContentInit {

  constructor(
    @Optional()
    @SkipSelf()
    config: EmbeddedInputFieldLabelConfig,
    private cdRef: ChangeDetectorRef
  ) {
    if (config) {
      this.globalMode = config.mode;
      config.modeChange.subscribe(m => {
        this.globalMode = m;
        this.cdRef.markForCheck();
      });
    }
  }

  globalMode: EmbeddedInputFieldLabelMode;

  // tslint:disable-next-line:no-input-rename
  @Input('vclEmbeddedInputFieldLabelMode')
  localMode: EmbeddedInputFieldLabelMode;

  // Always provide a mode
  // Default is `float`.
  get mode() {
    return this.localMode || this.globalMode || 'float';
  }

  get enabled() {
    // Do not if child input does not provide FORM_CONTROL_MATERIAL_INPUT
    // return (this.config || this.hasMaterialDirective) && this.input;
    return this.inputField && this.mode !== 'disabled';
  }

  @ContentChild(FORM_CONTROL_EMBEDDED_LABEL_INPUT as any)
  inputField: EmbeddedInputFieldLabelInput | undefined;

  @HostBinding('class.embedded-input-field-label')
  get classEmbeddedInputFieldLabel() {
    return this.enabled && this.mode !== 'disabled';
  }

  @HostBinding('class.floating')
  floating = false;

  @HostBinding('class.focused')
  focused = false;

  @HostBinding('class.disable-animations')
  disableAnimations = true;

  @HostBinding('style.--prepended-elements')
  prependedElements: number = 0;

  ngAfterViewInit() {
    // This workaround disables animations for initial rendering.
    // An initial value provided via ngModel triggers a floating state update shortly after the element is rendered into the DOM
    // and starts the animation.
    setTimeout(() => {
      this.disableAnimations = false;
    }, 5);
  }

  private updateState() {
    if (this.inputField && this.enabled) {
      this.floating = this.inputField?.isLabelFloating ?? false;
      this.focused = this.inputField?.isFocused ?? false;;
      this.prependedElements = this.inputField.prependedElements ?? 0;
      this.cdRef.markForCheck();
      this.cdRef.detectChanges();
    }
  }

  ngAfterContentInit() {
    this.updateState();
    if (this.enabled) {
      this.inputField?.stateChanged.subscribe(() => {
        this.updateState();
      });
    }
  }
}
