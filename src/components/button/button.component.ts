import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, HostBinding, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: '[vcl-button]',
  host: {
    '[class.vclButton]': 'true',
  },
  templateUrl: 'button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {

  pressed: boolean = false; // `true` if a pointer device is conducting a `down` gesture on the button
  focused: boolean = false; // `true` if the element is focused  (CSS' :focus)

  @HostBinding('class.vclHovered')
  hovered: boolean = false; // `true` if a pointer device is hovering the button (CSS' :hover)

  @Input()
  @HostBinding('class.vclSelected')
  selected: boolean = false;

  @HostBinding('attr.aria-label')
  @Input()
  title: string;

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
  autoBlur: boolean = true;

  @Input()
  appIcon: string;

  @Input()
  appIconBusy: string;

  private _press = new EventEmitter<any>();
  @Output()
  get press(): Observable<any> {
    return this._press.asObservable();
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.press.subscribe(() => {
      if (this.autoBlur) {
        if (this.elementRef.nativeElement && this.elementRef.nativeElement.blur) {
          this.elementRef.nativeElement.blur();
        }
      }
    });
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(e) { this.hovered = true; }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e) { this.hovered = false; }

  @HostListener('mouseup', ['$event'])
  onMouseUp(e) { this.pressed = false; }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e) { this.pressed = true; }

  @HostListener('onfocus', ['$event'])
  onFocus(e) { this.focused = true; }

  @HostListener('onblur', ['$event'])
  onBlur(e) { this.focused = false; }

  @HostListener('tap', ['$event'])
  onTap(e) { this._press.emit(e); }

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
