import { Input, Component, Inject, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { Dropdown, DROPDOWN_TOKEN, DropdownItem } from '../types';
import { DropdownItemComponent } from './dropdown-item.component';

@Component({
  selector: 'vcl-dropdown-label-item',
  exportAs: 'vclDropdownLabelItem',
  styles: [],
  templateUrl: 'dropdown-label-item.component.html',
  providers: [{
    provide: DropdownItemComponent,
    useExisting: forwardRef(() => DropdownLabelItemComponent)
  }]
})
export class DropdownLabelItemComponent extends DropdownItemComponent implements DropdownItem {

  constructor(
    @Inject(DROPDOWN_TOKEN)
    dropdown: Dropdown
  ) {
    super(dropdown);
  }

  @ViewChild('content', { read: ElementRef })
  content: ElementRef<HTMLElement>;

  @Input()
  sublabel?: string;

  get label() {
    return this._label === undefined ? this.content.nativeElement.textContent : this._label;
  }
}
