import {
  OnInit, Component, Input,
  EventEmitter, Output, HostListener, ElementRef,
  ViewChild, OnDestroy, forwardRef, ChangeDetectionStrategy
} from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

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
    role: 'button',
    tabindex: '0'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class FileInputComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input('state') state: 'busy' | 'error' | 'warning' | 'success';
  @Input('layout') layout: 'horizontal' | 'vertical' = 'horizontal';
  @Input('placeholder') placeholder: string = 'Choose a file or drag it here';
  @Input('accept') accept: string = '*';
  @Input('name') name: string;
  @Input('disabled') disabled: boolean = false;
  @Input('multiple') multiple: boolean = false;
  @Input('value') value: string;

  @Output('files') files$: BehaviorSubject<FileList[]> = new BehaviorSubject([]);
  value$ = this.files$
    .filter(fs => fs.length > 0)
    .map(fs => {
      let name = fs[0]['name'];
      if (this.multiple)
        name += ' (' + fs.length + ')';
      return name;
    });

  @ViewChild('input') input: any;

  subs = [];
  isDragging: boolean = false;
  isFocused: boolean = false;

  constructor(private elRef: ElementRef) {
    const hostEl = elRef.nativeElement;
    // file drop
    hostEl.addEventListener("dragover", e => {
      if (!this.disabled) {
        e.stopPropagation();
        e.preventDefault();
        this.isDragging = true;
      }
    }, false);
    hostEl.addEventListener("dragleave", e => {
      e.stopPropagation();
      e.preventDefault();
      this.isDragging = false;
    }, false);
    hostEl.addEventListener("drop", e => {
      this.onDrop(e);
    }, false);
  }

  ngOnInit() {
    this.subs.push(
      Observable.fromEvent(this.input.nativeElement, 'change')
        .subscribe(event => {
          this.value = event['target'].value;
          this.files$.next(event['target'].files);
          !!this.onChangeCallback && this.onChangeCallback(event['target'].files);
        })
    );
    this.subs.push(
      Observable.fromEvent(this.input.nativeElement, 'focus')
        .subscribe(event => this.isFocused = true)
    );
    this.subs.push(
      Observable.fromEvent(this.input.nativeElement, 'focus')
        .subscribe(event => this.isFocused = false)
    );
  }

  @HostListener('click', ['$event.target.value'])
  onClick(value) {
    if (this.disabled) return;
    // opens file-choser
    this.input.nativeElement.click();
  }

  onDrop(e) {
    if (this.disabled) return;
    this.isDragging = false;

    // cancel event and hover styling
    e.stopPropagation();
    e.preventDefault();

    // fetch FileList object
    const files = e.target.files || e.dataTransfer.files;
    this.input.nativeElement.files = files;
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
