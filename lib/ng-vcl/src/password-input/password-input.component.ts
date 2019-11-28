import { Input, Component, ChangeDetectionStrategy, ContentChild, AfterContentInit, HostBinding, Optional, Inject, Renderer2, forwardRef, ViewChild } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { InputDirective } from './../input/index';
import { FormControlMaterialHost, FORM_CONTROL_MATERIAL_HOST, FormControlMaterialInput, FORM_CONTROL_MATERIAL_INPUT } from '../material-design-inputs/index';
import { FORM_CONTROL_INPUT } from '../form-control-group/index';
import { ButtonComponent } from '../button/index';


@Component({
  templateUrl: 'password-input.component.html',
  selector: 'vcl-password-input',
  exportAs: 'vclPasswordInput',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: FORM_CONTROL_INPUT,
      useExisting: forwardRef(() => PasswordInputComponent)
    },
    {
      provide: FORM_CONTROL_MATERIAL_INPUT,
      useExisting: forwardRef(() => PasswordInputComponent)
    }
  ]
})
export class PasswordInputComponent implements AfterContentInit, FormControlMaterialInput {

  constructor(
    private renderer: Renderer2,
    @Optional()
    @Inject(FORM_CONTROL_MATERIAL_HOST)
     private fcmh?: FormControlMaterialHost,
  ) { }

  private stateChangedEmitter = new Subject<void>();

  controlType = 'password-input';
  materialModifierClass = undefined;

  @HostBinding('class.input-group-emb')
  classVclInputGroup = true;

  get btnTransparent() {
    return this.fcmh && this.fcmh.mode !== 'disabled';
  }
  get isDisabled() {
    return this.input.isDisabled;
  }
  get stateChanged() {
    return merge(this.input.stateChanged, this.stateChangedEmitter);
  }
  get isLabelFloating() {
    return this.input.isLabelFloating;
  }
  get isFocused() {
    return this.input.isFocused || this.button.isFocused;
  }
  get elementId() {
    return this.input.elementId;
  }
  get hasError() {
    return this.input.hasError;
  }
  get value() {
    return this.input.value;
  }
  get ngControl() {
    return this.input.ngControl;
  }

  @HostBinding('attr.tabindex')
  attrTabindex = -1;

  @ContentChild(InputDirective, { read: InputDirective, static: false })
  input?: InputDirective;

  @ViewChild(ButtonComponent, { read: ButtonComponent, static: false })
  button?: ButtonComponent;

  @Input()
  visible = false;

  toggle() {
    this.visible = !this.visible;
    this.updateType();
  }

  get disabled() {
    return this.input && this.input.isDisabled;
  }

  updateType() {
    this.input.elementRef.nativeElement.type = this.visible ? 'text' : 'password';
  }

  ngAfterContentInit() {
    this.updateType();
    this.renderer.addClass(this.input.elementRef.nativeElement, 'app-item');
  }

  onLabelClick(event: Event): void {
    this.input.onLabelClick(event);
  }
}
