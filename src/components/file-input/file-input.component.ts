import {
  OnInit, Component, Input,
  EventEmitter, Output, HostListener, ElementRef,
  ViewChild, OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'vcl-file-input',
  templateUrl: 'file-input.component.html',
  host: {
    '[class.vclFileInput]': 'true',
    '[class.vclDisabled]': 'disabled',
    '[class.vclDragndrop]': 'isDragging',
    role: 'button',
    tabindex: '0'
  },
})
export class FileInputComponent implements OnInit, OnDestroy {

  @Input('state') state: 'dragndrop' | 'busy' | 'error' | 'warning' | 'success' | 'focused' | 'disabled';
  @Input('layout') layout: 'horizontal' | 'vertical' = 'vertical';
  @Input('placeholder') placeholder: string = 'Choose a file or drag it here';
  @Input('accept') accept: string = '*';
  @Input('name') name: string;
  @Input('disabled') disabled: boolean = false;
  @Input('multiple') multiple: boolean = false;
  @Input('value') value: string = '';
  @Output('files') files: Observable<FileList>;

  @ViewChild('input') input: any;

  subs = [];
  isDragging: boolean = false;

  constructor(private elRef: ElementRef) {
    const hostEl = elRef.nativeElement;
    // file drop
    hostEl.addEventListener("dragover", () => {
      if (!this.disabled) { this.isDragging = true; }
    }, false);
    hostEl.addEventListener("dragleave", () => this.isDragging = false, false);
    hostEl.addEventListener("drop", e => {
      console.log('aaaaaaaaa');
      this.onDrop(e);
    }, false);
  }

  ngOnInit() {
    this.subs.push(
      Observable.fromEvent(this.input.nativeElement, 'change')
        .subscribe(event => {
          this.value = event['target'].value;
          this.files['next'](this.files);
        })
    );


  }


  @HostListener('click', ['$event.target.value'])
  onClick(value) {
    if (this.disabled) return;
    // opens file-choser
    this.input.nativeElement.click();
  }


  onDrop(event) {
    console.log('onDrop');
    console.dir(event);
  }

  ngOnDestroy() {
    this.subs.map(sub => sub.unsubscribe());
  }

}
