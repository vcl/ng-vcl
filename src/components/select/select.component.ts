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
  forwardRef,
  ElementRef,
  HostListener,
  OnInit
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



/**
 * see
 * @link http://www.w3schools.com/tags/tag_option.asp
 */
@Directive({
  selector: 'vcl-select-option'
})
export class SelectOptionComponent implements OnInit {

  @Input('value') value: string;
  @Input('sublabel') sublabel: string;
  @Input('label') label: string;
  @Input('class') class: string = '';

  @Input('disabled') disabled: boolean = false;
  @Input('selected') selected: boolean = false;


  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    if (!this.label || this.label == '') {
      this.label = this.elementRef.nativeElement.innerText;
      if (!this.label || this.label == '') {
        this.label = this.value;
      }
    }
  }

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
      class: this.class,
      disabled: this.disabled,
      selected: this.selected
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  host: {
    'off-click': 'alert(1)'
  }
})
export class SelectComponent implements ControlValueAccessor {

  @ViewChild('dropdown') dropdown;
  @ViewChild('select') select;

  @Input('value') value: string | string[];
  @Input('expanded') expanded: boolean = false;

  // options
  @Input('items') items: any[] = [];
  @ContentChildren(SelectOptionComponent) templateItems: QueryList<SelectOptionComponent>;

  // multi-select
  @Input() minSelectableItems: number = 1;
  @Input() maxSelectableItems: number = 1;

  // styling
  @Input() expandedIcon: string = 'fa:chevron-up';
  @Input() collapsedIcon: string = 'fa:chevron-down';
  @Input('displayValue') displayValue: string = 'Select value';

  @Output('change') changeEE = new EventEmitter<string | string[]>(); // string[] if multi-select


  me: ElementRef;
  constructor(me: ElementRef) {
    this.me = me;
  }

  expand = () => this.expanded = !this.expanded;

  @HostListener('window:click', ['$event'])
  onOffClick(event) {
    if (!this.expanded) return;
    if (!this.me.nativeElement.contains(event.target))
      this.expanded = false;
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

  public selectItem(item: any) {
    this.dropdown.selectItem(item);
  }

  onSelect(newValue: any[]) {
    this.value = newValue;

    if (this.maxSelectableItems == 1) this.expanded = false;

    this.changeEE.emit(this.value);
  }

  /**
   * Things needed for ControlValueAccessor-Interface.
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
