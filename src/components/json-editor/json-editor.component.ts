import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  ViewChild,
  forwardRef
} from '@angular/core';
import { MetalistComponent } from '../metalist/metalist.component';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

const JSONEditor = require('jsoneditor/dist/jsoneditor.js');
//require('style!jsoneditor/dist/jsoneditor.css');

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => JsonEditorComponent),
  multi: true
};


@Component({
  selector: 'vcl-json-editor',
  templateUrl: 'json-editor.component.html',
//  styles: [require('style!jsoneditor/dist/jsoneditor.css')],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class JsonEditorComponent implements ControlValueAccessor {


  @ViewChild('el') el;

  options: Object = {};

  editor: any;

  constructor() {

  }


  ngAfterViewInit() {
    console.log('...');
    console.dir(this.el.nativeElement);
    console.dir(JSONEditor);
  //  console.dir(x);
    this.editor = new JSONEditor(this.el.nativeElement, this.options);
  }


  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(value: any): void {
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
