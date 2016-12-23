import { OnInit, OnDestroy, Component, Input, EventEmitter, Output, HostListener, ElementRef, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Invalid input type. Using one of these will throw an error
const INPUT_INVALID_TYPES = [
  'button',
  'checkbox',
  'color',
  'file',
  'hidden',
  'image',
  'radio',
  'range',
  'reset',
  'submit'
];

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'vcl-input',
  templateUrl: 'input.component.html'
})
export class InputComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input('state') state: 'error' | 'warning' | 'success';
  @Input('type') type: string = 'text';
  @Input('value') value: string = '';
  @Input('placeholder') placeholder: string = '';
  @Input('readonly') readonly: boolean = false;
  @Input('autofocus') autofocus: boolean = false;
  @Input('required') required: boolean = false;
  @Input('spellcheck') spellcheck: boolean = false;
  @Input('tabindex') tabindex = 0;
  @Input('maxLength') maxLength: number;
  @Input('minLength') minLength: number;
  @Input() selectOnFocus: boolean = false;

  _valueSubject = new Subject<any>();
  @Output('change') change = this._valueSubject.asObservable();

  @ViewChild('input') input: any;
  subs = [];

  constructor(private elRef: ElementRef) {
    if (INPUT_INVALID_TYPES.includes(this.type))
      throw new Error('type not allowed for vcl-input: ' + this.type);
  }

  ngOnInit() {
    this.subs.push(
      Observable.fromEvent(this.input.nativeElement, 'change')
        .subscribe(event => {
          this.value = event['target'].value;
          !!this.onChangeCallback && this.onChangeCallback(event['target'].value);
        })
    );
  }

  toType(value) {
    if (this.type === 'number') {
      let tValue = Number(value);
      return isNaN(tValue) ? 0 : tValue;
    } else return value;
  }


  onFocus() {
    if (this.selectOnFocus)
      this.input.nativeElement.select();
  }

  ngOnDestroy() {
    this.subs.map(sub => sub.unsubscribe());
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(files: FileList): void {
    this.input.nativeElement.files = files;
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
