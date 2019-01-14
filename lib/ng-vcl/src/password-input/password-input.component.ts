import { Directive, Input, Output, ElementRef, HostListener, EventEmitter, Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, OnChanges, SimpleChanges, OnInit, SkipSelf, HostBinding, Optional } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputDirective } from './../input/index';


@Component({
  templateUrl: 'password-input.component.html',
  selector: 'vcl-password-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.vclInputGroup]': 'true',
    '[attr.tabindex]': '-1'
  }
})
export class PasswordInputComponent {
  @ContentChild(InputDirective, { read: InputDirective })
  input?: InputDirective;

  @Input()
  visibleIcon = 'fa:eye';

  @Input()
  invisibleIcon = 'fa:eye-slash';

  @Input()
  visible = false;

  @Input()
  disabled = false;

  get buttonIcon() {
    return this.visible ? this.visibleIcon : this.invisibleIcon;
  }

  toggle() {
    this.visible = !this.visible;
  }
}
