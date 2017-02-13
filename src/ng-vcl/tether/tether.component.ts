import { Observable } from 'rxjs/Observable';
import { Component, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import Tether from 'tether';

let tetherID = 10000;

@Component({
  selector: 'vcl-tether',
  templateUrl: 'tether.component.html'
})
export class TetherComponent {

  id: string;

  @Input() target: string;

  @Input() class: string;

  @Input() zIndex: number;

  @Input() targetAttachment: string;

  @Input() attachment: string;

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
      console.log(this.target);

      const t = document.querySelector(this.target);
      console.dir(t);

      this.tether = new Tether({
        element: '#' + this.id,
        target: this.target,
        attachment: this.attachment,
        targetAttachment: this.targetAttachment
      });
    } catch (ex) {
      console.dir(ex);
      this._error.emit(ex);
    }
  }

  ngOnDestroy() {
    try {
      if (this.tether) {
        this.tether.destroy();
        // Workaround for a special case when using position:relative
        // The target elements are removed from the DOM before tether.js is able to clean the tethered elements.
        // This workaround removes them manually
        const tether = (this.tether as any);
        const el: HTMLElement = tether.element;
        const target: HTMLElement = tether.target;
        if (el && target && el.parentNode && target.offsetParent === null) {
          el.parentNode.removeChild(el);
        }
      }
    } catch (ex) { }
  }
}
