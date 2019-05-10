import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlGroupComponent, FORM_CONTROL_INPUT, FormControlInput } from '../form-control-group/index';
import { FormModel } from './models/index';

@Component({
  selector: 'vcl-jss-form-control',
  templateUrl: 'jss-form-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclJssFormControl'
})
export class JssFormControlComponent {

  @Input()
  model?: FormModel;

  @Input()
  formGroup?: FormGroup;

  // FormModel[] template parser does not support Type Assertion
  // Workaround is to cast models to any[]
  get fm() {
    return this.model as any;
  }

  @Output()
  action = new EventEmitter<string>();

  @ViewChild(FORM_CONTROL_INPUT as any)
  input?: FormControlInput;

  onAction(action?: string) {
    if (action) {
      this.action.emit(action);
    }
  }
}
