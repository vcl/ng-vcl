import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

/**
The main control for triggering actions

## Usage

```html
{{vcl-button label="My Button" action=(action "closureAction")}}
```

@demo example

@property     {String}    label    textual label
@property     {String}    title    textual title
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
  busy: boolean = false; // State to indicate that the button is disabled as a operation is in progress

  selected: boolean = false;

  constructor() { }

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
  
  domouseenter() {
    console.log('mouseenter');
  }
  domouseleave() {
    console.log('mouseleave');
  }

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