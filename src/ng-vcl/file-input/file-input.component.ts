import {
  Component, forwardRef, ChangeDetectionStrategy, Input,
  Output, ViewChild, HostBinding, ElementRef, EventEmitter,
  HostListener, ChangeDetectorRef
} from '@angular/core';
import {
  ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR
} from '@angular/forms';
import { accept } from './accept';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FileInputComponent),
  multi: true
};

@Component({
  selector: 'vcl-file-input',
  templateUrl: 'file-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  host: {
    '[class.vclInput]': 'true',
    '[class.vclFileInput]': 'true',
    role: 'button',
  }
})
export class FileInputComponent implements ControlValueAccessor {

  @Input()
  icon: string = 'fa fa-upload';

  @Input()
  accept: string = '*';

  @Input()
  multiple: boolean = false;

  @Output()
  files = new EventEmitter<FileList>();

  @Input()
  @HostBinding('attr.tabindex')
  tabindex: number = 0;

  @Input()
  @HostBinding('class.vclDisabled')
  disabled: boolean = false;

  @HostBinding('class.vclError')
  invalidFiles = false;

  @HostBinding('class.vclDragndrop')
  isDragging: boolean = false;

  @HostBinding('class.isFocused')
  isFocused: boolean = false;

  @ViewChild('input')
  input: ElementRef;

  value: FileList | undefined;
  filename: string | undefined;

  constructor(private cdRef: ChangeDetectorRef) { }

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

  onInputChange() {
    if (this.fileInput && this.fileInput.files) {
      this.updateFiles(this.fileInput.files);
    }
  }

  checkFiles(files: FileList) {
    const hasWrongFiles: boolean = Array.from(files).some((file: File) => !accept(file, this.accept));
    // TODO remove *-check after issue https://github.com/okonet/attr-accept/issues/8
    this.invalidFiles = hasWrongFiles && this.accept !== '*';
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
    if (this.disabled) return;
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
    this.disabled = isDisabled;
    this.cdRef.markForCheck();
  }
}
