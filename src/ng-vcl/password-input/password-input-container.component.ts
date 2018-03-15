import { Directive, Input, Output, ElementRef, HostListener, EventEmitter, Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, OnChanges, SimpleChanges, OnInit, SkipSelf, HostBinding, Optional } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputDirective } from './../input/index';


@Component({
  templateUrl: 'password-input-container.component.html',
  selector: 'vcl-password-input-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.vclInputGroup]': 'true',
    '[attr.tabindex]': '-1'
  }
})
export class PasswordInputContainerComponent {
  @ContentChild(InputDirective, { read: InputDirective })
  input?: InputDirective;

  @Input()
  visibleIcon = 'fa:eye-slash';

  @Input()
  invisibleIcon = 'fa:eye';

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
