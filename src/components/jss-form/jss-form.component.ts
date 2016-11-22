import {
  Component,
  Input,
  ViewChild,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


// TODO include this css-file without breaking everything else
// require('style!jsoneditor/dist/jsoneditor.css');

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => JssFormComponent),
  multi: true
};


@Component({
  selector: 'vcl-jss-form',
  templateUrl: 'jss-form.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class JssFormComponent implements ControlValueAccessor {

  @ViewChild('el') el;


  @Input('mode') mode: 'tree' | 'form' | 'text' | 'view' = 'tree';
  @Input('value') value: Object = {};


  editor: any;

  constructor() {

  }


  ngAfterViewInit() {

  }

  /**
   * get the current state of the edited json
   */
  getValue(): Object {
    return this.editor.get();
  }


  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(value: any): void {
    this.value = value;
    this.editor.set(this.value);
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
