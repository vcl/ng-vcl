import { Input, Component, ChangeDetectionStrategy, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputDirective } from './../input/index';


@Component({
  templateUrl: 'password-input.component.html',
  selector: 'vcl-password-input',
  exportAs: 'vclPasswordInput',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordInputComponent implements AfterContentInit {

  @HostBinding('class.vclInputGroup')
  classVclInputGroup = true;

  @HostBinding('attr.tabindex')
  attrTabindex = -1;

  @ContentChild(InputDirective, { read: InputDirective, static: false })
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
