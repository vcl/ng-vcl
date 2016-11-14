import { Observable } from 'rxjs/Observable';
import { Component, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import * as Tether from 'tether';

let tetherID = 10000;

@Component({
  selector: 'vcl-tether',
  templateUrl: 'tether.component.html'
})
export class TetherComponent {

  id: string;

  @Input()
  target: string;

  @Input()
  class: string;

  @Input()
  zIndex: number;

  @Input()
  targetAttachment: string;

  @Input()
  attachment: string;

  tether: Tether;

  _error = new EventEmitter<any>();
  @Output()
  get error(): Observable<any> {
    return this._error.asObservable();
  }

  constructor(private myElement: ElementRef) {
    this.id = 'vcl-tetherId' + tetherID++;
  }

  ngAfterViewInit() {
    try {
      this.tether = new Tether({
        element: '#' + this.id,
        target: this.target,
        attachment: this.attachment,
        targetAttachment: this.targetAttachment
      });
    } catch (ex) {
      this._error.emit(ex);
    }
  }

  ngOnDestroy() {
    try {
      this.tether && this.tether.destroy();
    } catch (ex) { }
  }
}

