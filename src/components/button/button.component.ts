import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import 'hammerjs';
/**
The main control for triggering actions

## Usage

```html
<button vcl-button label="My Button" (click)=""doSomething()></button>
```

@demo example

@property     {String}    label    textual label
*/
@Component({
  selector: '[vcl-button]',
  host: {
    '(mouseenter)': 'hovered=true',
    '(mouseleave)': 'hovered=false',
    '(mousedown)': 'pressed=true',
    '(mouseup)': 'pressed=false',
    '(onfocus)': 'focused=true;',
    '(onblur)': 'focused=false',

    '(tap)': '_press.emit($event)',

    '[class.vclButton]': 'true',
    '[class.vclHovered]': 'hovered',
    '[class.vclDisabled]': 'disabled',
    '[class.vclSelected]': 'selected',
  },
  templateUrl: 'button.component.html',
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  hovered: boolean = false; // `true` if a pointer device is hovering the button (CSS' :hover)
  pressed: boolean = false; // `true` if a pointer device is conducting a `down` gesture on the button
  focused: boolean = false; // `true` if the element is focused  (CSS' :focus)
  selected: boolean = false;

  // TODO: Doc missing. Input attr?
  @Input()
  busy: boolean = false; // State to indicate that the button is disabled as a operation is in progress

  @Input()
  flexLabel: boolean = false;

  @Input()
  busyLabel: string;

  @Input()
  label: string;

  @Input()
  prepIcon: string;

  @Input()
  prepIconBusy: string;

  @Input()
  appIcon: string;

  @Input()
  appIconBusy: string;

  private _press = new EventEmitter<any>();
  @Output()
  get press(): Observable<any> {
    return this._press.asObservable();
  }
  constructor() { }

  ngOnInit() { }

  get calculatedLabel() {
    return (this.busy && this.busyLabel) ? this.busyLabel : this.label;
  }

  get calculatedPrepIcon() {
    return (this.busy && this.prepIconBusy) ? this.prepIconBusy : this.prepIcon;
  }

  get calculatedAppIcon() {
    return (this.busy && this.appIconBusy) ? this.appIconBusy : this.appIcon;
  }

}
