import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, HostBinding, ContentChildren, forwardRef, QueryList, Self, SkipSelf, Directive } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ObservableComponent } from '../core/index';
import { InputDirective } from '../input/index';
import { ButtonDirective } from '../button/index';

@Component({
  selector: 'vcl-embedded-input-group',
  templateUrl: 'embedded-input-group.component.html',
  host: {
    '[class.vclInputGroupEmb]': 'true',
    '[style.display]': '"block"'
  }
})
export class EmbeddedInputGroupComponent extends ObservableComponent {

  @Input()
  disabled: boolean = false;

  @Input()
  prepIcon?: string;

  @Input()
  appIcon?: string;

  @ContentChildren(forwardRef(() => EmbeddedButtonDirective))
  buttons?: QueryList<EmbeddedButtonDirective>;

  get hasAppendedItem() {
    return !!this.appIcon || (this.buttons && this.buttons.length > 0);
  }
}

@Directive({
  selector: 'input[vcl-input][vcl-embedded-input-group]',
})
export class EmbeddedInputDirective {
  constructor(
    @Self() private input: InputDirective,
    @SkipSelf() private inputGroup: EmbeddedInputGroupComponent
  ) { }

  get isDisabled() {
    return this.input.disabled || this.inputGroup.disabled;
  }

  @HostBinding('class.vclDisabled')
  get classDisabled() {
    return this.isDisabled;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.isDisabled ? true : null;
  }

  @HostBinding('class.vclPrepItem')
  get prepItem() {
    return !!this.inputGroup.prepIcon;
  }

  @HostBinding('class.vclAppItem')
  get hasAppendedItem() {
    return this.inputGroup.hasAppendedItem;
  }
}

@Directive({
  selector: 'button[vcl-button][vcl-embedded-input-group][icon]',
  host: {
    '[class.vclTransparent]': 'true',
    '[class.vclAppended]': 'true'
  }
})
export class EmbeddedButtonDirective {

  constructor(
    @Self() private button: ButtonDirective,
    @SkipSelf() private inputGroup: EmbeddedInputGroupComponent
  ) { }

  @HostBinding('class.vclDisabled')
  @HostBinding('attr.disabled')
  get isDisabled() {
    return (this.button.disabled || this.inputGroup.disabled) ? true : null;
  }
}
