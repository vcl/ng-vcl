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
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Directive({
  selector: 'vcl-select-option'
})
export class SelectOptionComponent {

  @Input('value') value: string;
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
      value: this.value,
      label: this.label,
      sublabel: this.sublabel,
      class: this.class
    };
    return ret;
  }
}


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true
};
@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  //  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SelectComponent implements ControlValueAccessor {

  popoverTarget: string = 'popoverTarget' + Math.random().toString().slice(2); // TODO cant this be solved via view/content-childs?

  @Input('value') value: string | string[];
  @Output('select') select = new EventEmitter<any[]>();
  @Input('expanded') expanded: boolean = false;

  // options
  @Input('items') items: any[] = [];
  @ContentChildren(SelectOptionComponent)
  templateItems: QueryList<SelectOptionComponent>;

  // multi-select
  @Input() minSelectableItems: number = 1;
  @Input() maxSelectableItems: number = 1;

  // styling
  @Input() expandedIcon: string = 'fa:chevron-up';
  @Input() collapsedIcon: string = 'fa:chevron-down';
  @Input('displayValue') displayValue: string = 'Select value';

  @Output('change') changeEE = new EventEmitter<string | string[]>(); // string[] if multi-select

  @ViewChild('dropdown') dropdown;
  selectedItems: any;


  constructor() {
  }

  ngOnInit() { }

  ngAfterContentInit() {
    // transform template-items if available
    let templateItemsAr = this.templateItems.toArray();
    if (templateItemsAr.length > 0) {
      this.items = templateItemsAr.map(i => i.toObject());
    }

    // make sure value and label exists on every option
    this.items.map(item => {
      if (!item.value) item.value = item.label;
      if (!item.label) item.label = item.value;
      return item;
    });

    this.reDisplayValue(this.value);

    this.changeEE.subscribe(newValue => {
      this.reDisplayValue(newValue);

      // propagate form-change
      !!this.onChangeCallback && this.onChangeCallback(newValue);
    });
  }

  reDisplayValue(newValue) {
    if (!newValue) return;

    // displayValue
    this.items
      .filter(i => i.value == newValue)
      .map(i => this.displayValue = i.label);

    // displayValue for multiselect
    if (newValue.length) {
      this.displayValue = this.items
        .filter(i => this.value.includes(i.value))
        .map(i => i.label)
        .join(', ');
    }
  }


  expand = () => this.expanded = !this.expanded;
  onOutsideClick = () => this.expanded = false;


  onSelect(newItems: any[]) {
    if (this.maxSelectableItems == 1) this.value = newItems[0].value; // single-select
    else this.value = newItems.map(i => i.value);  // multi-select

    this.changeEE.emit(this.value);
  }


  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;
  writeValue(value: any): void {
    if (this.value == value) return;
    this.value = value;
    this.changeEE.emit(this.value);
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
