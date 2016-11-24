import {
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  ContentChildren,
  QueryList,
  Optional,
  forwardRef
} from '@angular/core';


import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';










@Directive({
  selector: 'vcl-select-option'
})
export class SelectOptionComponent {

  @Input('label') label: string;
  @Input('sublabel') sublabel: string;
  @Input('class') class: string = '';

  constructor() { }

  /**
   * transforms this NavigationItemComponent into an object,
   * so it can be handled the same way as an inputList
   * @return {Object}
   */
  toObject(): Object {
    const ret = {
      label: this.label,
      sublabel: this.sublabel,
      class: this.class
    };
    return ret;
  }



}











/**
 * see
 * @link http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
 */
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true
};

@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SelectComponent implements ControlValueAccessor {
  @ViewChild('dropdown') dropdown;

  clickInside: boolean = false;
  popoverTarget: string = 'popoverTarget' + Math.random().toString().slice(2);

  @Output()
  select = new EventEmitter<any[]>();

  @Input()
  expanded: boolean = false;

  @ContentChildren(SelectOptionComponent)
  templateItems: QueryList<SelectOptionComponent>;

  @Input()
  items: any[];

  @Input()
  minSelectableItems: number = 1;

  @Input()
  maxSelectableItems: number = 1;

  @Input()
  expandedIcon: string = 'fa:chevron-up';

  @Input()
  collapsedIcon: string = 'fa:chevron-down';

  @Input()
  inputValue: string = 'label';

  @Input()
  emptyLabel: string = 'Select value';

  displayValue: string;

  selected: Object[];

  constructor() {
    this.select.subscribe(selectedItems => {
      this.selected = selectedItems;

      if (!this.onChangeCallback) return;
      const pubValue = this.maxSelectableItems == 1 ? selectedItems[0].label : selectedItems.map(i => i.label);
      this.onChangeCallback(pubValue);
    });
  }


  ngOnInit() {
    this.displayValue = this.emptyLabel;
  }


  ngAfterContentInit() {
    let templateItemsAr = this.templateItems.toArray();
    if (templateItemsAr.length > 0) {
      const items = [];
      templateItemsAr.map(i => items.push(i.toObject()));
      this.items = items;
    }

  }

  expand() {
    this.expanded = !this.expanded;
  }

  selectItem(item: any) {
    this.dropdown.selectItem(item);
  }


  /**
   * TODO refactor this
   */
  onSelect(items: any[]) {
    this.clickInside = true;
    this.select.emit(items);
    if (items && items[0] && this.maxSelectableItems === 1) {
      this.displayValue = items[0][this.inputValue];
    } else if (!items || items.length === 0) {
      this.displayValue = this.emptyLabel;
    } else {
      let result = '';
      for (let i = 0; i < items.length; i++) {
        result += items[i][this.inputValue];
        if (i !== items.length - 1) {
          result += ', ';
        }
      }
      this.displayValue = result;
    }
  }

  onOutsideClick(event) {
    this.expanded = false;
  }



  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;
  writeValue(value: any): void {
    if (value !== this.selected) {
      this.selected = value;
      // TODO preselect the valued items
    }
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
