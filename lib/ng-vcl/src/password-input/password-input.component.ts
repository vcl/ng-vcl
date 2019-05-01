import { Input, Component, ChangeDetectionStrategy, ContentChild, AfterContentInit } from '@angular/core';
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
export class PasswordInputComponent implements AfterContentInit {
  @ContentChild(InputDirective, { read: InputDirective })
  input?: InputDirective;

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
  }

}
