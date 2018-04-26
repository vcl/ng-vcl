import { Directive, HostBinding, Input, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: 'button[vcl-button][selectable]',
})
export class ButtonSelectDirective  {

  @Input()
  set selectable(value: boolean | undefined) {
    this.selected = !!value;
  }

  @Input()
  @HostBinding('class.vclSelected')
  selected: boolean = false;

  @Output()
  select = new EventEmitter<boolean>();

  @HostListener('click')
  onClick() {
    this.selected = !this.selected;
    this.select.emit(this.selected);
  }
}
