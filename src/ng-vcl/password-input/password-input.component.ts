import { Directive, Input, Output, ElementRef, HostListener, EventEmitter, Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputDirective } from './../input/index';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PasswordInputComponent),
  multi: true
};

@Component({
  templateUrl: 'password-input.component.html',
  selector: 'vcl-password-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.vclInputGroup]': 'true',
    '[attr.tabindex]': '-1'
  }
})
export class PasswordInputComponent implements OnInit, OnChanges  {
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

  ngOnInit(): void {
    this.updateInput();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.visible || changes.disabled) {
      this.updateInput();
    }
  }

  updateInput() {
    if (this.input) {
      this.input.setType(this.visible ? 'text' : 'password');
      this.input.setDisabled(this.disabled);
    }
  }

  toggle() {
    this.visible = !this.visible;
    this.updateInput();
  }
}
