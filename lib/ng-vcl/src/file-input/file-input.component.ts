import {
  Component, forwardRef, ChangeDetectionStrategy, Input,
  Output, ViewChild, HostBinding, ElementRef, EventEmitter,
  HostListener, ChangeDetectorRef, Optional, Self, Inject
} from '@angular/core';
import {
  ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR
} from '@angular/forms';
import { accept } from './accept';
import { FormControlInput, FORM_CONTROL_INPUT, FORM_CONTROL_HOST, FormControlHost, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent } from '../form-control-group/index';
import { Subject } from 'rxjs';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-file-input',
  templateUrl: 'file-input.component.html',
  exportAs: 'vclFileInput',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: FORM_CONTROL_INPUT,
    useExisting: forwardRef(() => FileInputComponent)
  }]
})
export class FileInputComponent implements ControlValueAccessor, FormControlInput {

  constructor(
    private cdRef: ChangeDetectorRef,
    @Optional()
    @Self()
    public ngControl?: NgControl,
    @Optional()
    @Inject(FORM_CONTROL_HOST)
    private formControlHost?: FormControlHost,
    @Optional()
    @Inject(FORM_CONTROL_ERROR_STATE_AGENT)
    private _errorStateAgent?: FormControlErrorStateAgent,
  ) {
    // Set valueAccessor instead of providing it to avoid circular dependency of NgControl
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @HostBinding('class.vclInput')
  classVclInput = true;

  @HostBinding('class.vclFileInput')
  classVclFileInput = true;

  @HostBinding('attr.role')
  attrRole = 'button';

  private stateChangeEmitter = new Subject<void>();

  stateChange = this.stateChangeEmitter.asObservable();

  controlType = 'file-input_';

  private _disabled = false;

  private generatedId = 'vcl_file-input_' + UNIQUE_ID++;

  @Input()
  id?: string;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  @Output()
  valueChange = new EventEmitter<any>();

  @Input()
  disabled = false;

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  @HostBinding('class.vclError')
  get hasError() {
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
  }

  @Input()
  accept?: string;

  @Input()
  multiple = false;

  @Input()
  value: FileList | undefined;

  @Output()
  files = new EventEmitter<FileList>();

  @Input()
  @HostBinding('attr.tabindex')
  tabindex = 0;

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.disabled || this._disabled;
  }

  @HostBinding('class.vclError')
  invalidFiles = false;

  @HostBinding('class.vclDragndrop')
  isDragging = false;

  @HostBinding('class.isFocused')
  isFocused = false;

  @ViewChild('input')
  input: ElementRef;

  filename: string | undefined;

  get fileInput(): HTMLInputElement | undefined {
    return this.input && this.input.nativeElement;
  }

  @HostListener('focus')
  onFocus() {
    this.isFocused = true;
  }

  @HostListener('blur')
  onBlur() {
    this.isFocused = false;
    this.onTouched();
  }

  onLabelClick(event: Event): void {
    if (this.disabled) {
      return;
    }
    this.fileInput && this.fileInput.click();
    this.onTouched();
  }

  onInputChange() {
    if (this.fileInput && this.fileInput.files) {
      this.updateFiles(this.fileInput.files);
    }
  }

  checkFiles(files: FileList) {
    if (accept) {
      this.invalidFiles = Array.from(files).some((file: File) => !accept(file, this.accept));
    } else {
      this.invalidFiles = false;
    }
  }

  @HostListener('keydown', ['$event'])
  keydown(ev) {
    switch (ev.code) {
      case 'Enter':
      case 'Space':
        ev.preventDefault();
        if (this.disabled) {
          return;
        }
        this.fileInput && this.fileInput.click();
        this.onTouched();
        break;
    }
  }

  @HostListener('click', ['$event.target.value'])
  onClick(value) {
    if (this.disabled) {
      return;
    }
    this.fileInput && this.fileInput.click();
    this.onTouched();
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
    if (this.disabled) { return; }
    this.isDragging = false;

    // fetch FileList object
    const files = e.target.files || e.dataTransfer.files;
    this.updateFiles(files);
    this.onTouched();
  }

  updateFiles(files: FileList) {
    if (files instanceof FileList) {
      let name = files[0].name;
      if (this.multiple) {
        name += ' (' + files.length + ')';
      }
      this.filename = name;
      this.value = files;
      this.checkFiles(files);
      this.files.emit(files);
      this.valueChange.emit(files);
      this.onChange(files);
    }
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => { };
  private onTouched: () => any = () => { };

  writeValue(files: FileList): void {
    this.value = files;
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this._disabled = isDisabled;
    this.cdRef.markForCheck();
  }
}
