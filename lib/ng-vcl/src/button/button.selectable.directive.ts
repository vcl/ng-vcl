import { Directive, HostBinding, Input, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: 'button[vclSelectable]',
})
export class ButtonSelectableDirective  {

  @Input()
  set vclSelectable(value: boolean | undefined) {
    this.selected = !!value;
  }

  @Input()
  @HostBinding('class.vclSelected')
  selected = false;

  @Output()
  select = new EventEmitter<boolean>();

  @HostListener('click')
  onClick() {
    this.selected = !this.selected;
    this.select.emit(this.selected);
  }
}
