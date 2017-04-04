import { Directive, Component, Input, Output, ChangeDetectionStrategy,
  EventEmitter, forwardRef, OnInit, ElementRef, ViewChild, ContentChildren, QueryList, HostListener, TemplateRef, SimpleChanges, Query
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MetalistItemComponent, MetalistItem } from "./metalist-item.component";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MetalistComponent),
  multi: true
};

@Component({
  selector: 'vcl-metalist, [vcl-metalist]',
  templateUrl: 'metalist.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetalistComponent implements ControlValueAccessor {

  @Input()
  maxSelectableItems: number = 1;

  @Output()
  change = new EventEmitter<any>();

  @ContentChildren(MetalistItemComponent)
  items: QueryList<MetalistItemComponent>;

  value: any | any[];

  get multiSelect() {
    return this.maxSelectableItems > 1;
  }

  get selectedItems() {
    return (this.items || []).filter(i => i.selected);
  }

  private determineMarkedIndex() {
    let idx = this.items.toArray().findIndex(item => item.marked);
    return idx >= 0 ? idx : this.items.toArray().findIndex(metaItem => metaItem.selected);
  }

  private updateItems() {
    const value = this.value;
    if (this.multiSelect && Array.isArray(value)) {
      (this.items || []).forEach(item => {
        item.selected = value.includes(item.value);
      });
    } else if (!this.multiSelect) {
      (this.items || []).forEach(item => {
        item.selected = item.value === value;
      });
    }
  }

  private updateValue() {
    const items = this.items || [];
    const values = items.filter(i => i.selected).map(i => i.value);
    this.value = this.multiSelect ? values : values[0];
  }


  setValue(value: any) {
    this.value = value;
    this.updateItems();
  }

  select(item: MetalistItemComponent | number) {
    if (typeof item === 'number') {
      item = this.items.toArray()[item];
    }
    if (item instanceof MetalistItemComponent) {
      if (item.disabled) {
        return;
      }
      if (this.multiSelect) {
        const selectedItems = (this.items || []).filter(i => i.selected);

        // prevent overflow
        if (item.selected || selectedItems.length < this.maxSelectableItems) {
          item.selected = !item.selected;
        }
      } else {
        this.items.forEach(citem => citem.selected = citem === item);
      }
      this.onChange(item);
    }
  }

  deselect(item: MetalistItemComponent | number) {
    if (typeof item === 'number') {
      item = this.items.toArray()[item];
    }

    if (item instanceof MetalistItemComponent) {
      item.selected = false;
      this.onChange(item);
    }
  }

  markNext() {
    const items = this.items.toArray();
    let newIdx = this.determineMarkedIndex() + 1;
    if (newIdx >= (items.length)) {
      newIdx = items.length - 1;
    }
    items.every((item, cidx) => {
      const mark = cidx >= newIdx;
      item.marked = !item.disabled && mark;
      return !item.marked;
    });
  }

  markPrev() {
    const items = this.items.toArray().reverse();
    let newIdx = this.determineMarkedIndex() - 1;
    if (newIdx <= 0 && items.length > 0) {
      newIdx = 0;
    }
    newIdx = (items.length - 1) - newIdx;

    items.every((item, cidx) => {
      const mark = cidx >= newIdx;
      item.marked = !item.disabled && mark;
      return !item.marked;
    });
  }

  selectMarked() {
    const item = this.items.toArray().find(i => i.marked === true && !i.disabled);
    if (item) {
      this.select(item);
    }
  }

  onChange(source: MetalistItemComponent) {
    this.updateValue();
    this.change.emit(this.value);
    !!this.onChangeCallback && this.onChangeCallback(this.value);
  }

  ngAfterViewInit() {
    // Update the value to match the selected metalist-items when not using ngModel
    if (!this.onChangeCallback) {
      this.updateValue();
    }

    // Late changes of metalist-items take the selected state of the current value;
    this.items.changes.subscribe(() => setTimeout(() => this.updateItems()));
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(value: any): void {
    this.setValue(value);
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
