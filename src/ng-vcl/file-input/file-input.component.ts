import {
  OnInit, Component, Input,
  EventEmitter, Output, HostListener, ElementRef,
  ViewChild, OnDestroy, forwardRef, ChangeDetectionStrategy
} from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/publishReplay';
import { accept } from './accept';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FileInputComponent),
  multi: true
};

@Component({
  selector: 'vcl-file-input',
  templateUrl: 'file-input.component.html',
  host: {
    '[class.vclFileInput]': 'true',
    '[class.vclDisabled]': 'disabled',
    '[class.vclDragndrop]': 'isDragging',
    '[class.vclFocused]': 'isFocused',
    '[class.vclError]': '(state=="error")',
    '[class.vclWarning]': '(state=="warning")',
    '[class.vclSuccess]': '(state=="success")',
    role: 'button',
    tabindex: '0'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class FileInputComponent implements ControlValueAccessor {

  @Input('state') state: 'busy' | 'error' | 'warning' | 'success';
  @Input('layout') layout: 'horizontal' | 'vertical' = 'horizontal';
  @Input('placeholder') placeholder: string = 'Choose a file or drag it here';
  @Input('accept') accept: string = '*';
  @Input('name') name: string;
  @Input('disabled') disabled: boolean = false;
  @Input('multiple') multiple: boolean = false;

  @Output('files') filesEE = new EventEmitter<FileList>();
  value$ = this.filesEE
               .map(fl => {
                 let name = fl[0].name;
                 if (this.multiple)
                   name += ' (' + fl.length + ')';
                 return name;
               })
               .publishReplay(1)
               .refCount();

  @ViewChild('input') inputElement: ElementRef;

  get fileInput(): HTMLInputElement {
    return this.inputElement && this.inputElement.nativeElement;
  }

  isDragging: boolean = false;
  isFocused: boolean = false;

  onFocus() {
    this.isFocused = true;
  }
  onBlur() {
    this.isFocused = false;
  }

  onChange() {
    if (this.fileInput) {
      const files = this.fileInput.files;
      if (files) {
        this.filesEE.next(files);
        !!this.onChangeCallback && this.onChangeCallback(files);

        this.checkFiles(files);
      }
    }
  }

  checkFiles(files: FileList) {
    const hasWrongFiles: boolean =  Array.from(files).some((file: File) => !accept(file, this.accept));
    // TODO remove *-check after issue https://github.com/okonet/attr-accept/issues/8
    this.state = hasWrongFiles && this.accept !== '*' ? 'error' : 'busy';
  }

  @HostListener('click', ['$event.target.value'])
  onClick(value) {
    if (this.disabled) return;
    // opens file-choser
    this.fileInput && this.fileInput.click();
  }

  @HostListener('dragover', ['$event'])
  onDragOver(e) {
    this.isDragging = true;
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e) {
    this.isDragging = false;
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('drop', ['$event'])
  onDrop(e) {
    // cancel event and hover styling
    e.preventDefault();
    e.stopPropagation();
    if (this.disabled) return;
    this.isDragging = false;

    // fetch FileList object
    const files = e.target.files || e.dataTransfer.files;
    this.filesEE.emit(files);
    this.checkFiles(files);
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(files: FileList): void {
    // TODO: should not write files on file input
    (this.fileInput as any).files = files;
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
