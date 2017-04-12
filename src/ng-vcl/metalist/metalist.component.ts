import { Directive, Component, Input, Output, ChangeDetectionStrategy,
  EventEmitter, forwardRef, OnInit, ElementRef, ViewChild, ContentChildren, QueryList, HostListener, TemplateRef, SimpleChanges, Query
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MetalistItem } from "./metalist-item.component";

export enum SelectionMode {
  Multiple, Single
}

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

  // If `Single`, a single item can be selected
  // If `Multiple` multiple items can be selected
  @Input()
  selectionMode: SelectionMode = SelectionMode.Single;

  // String alias for selectionMode
  @Input()
  set mode(value: 'multiple' | 'single') {
    this.selectionMode = value === 'multiple' ? SelectionMode.Multiple : SelectionMode.Single;
  }
  get mode(): 'multiple' | 'single' {
    return this.selectionMode === SelectionMode.Multiple ? 'multiple' : 'single';
  }

  @Input()
  maxSelectableItems: number | undefined;

  @Output()
  change = new EventEmitter<any>();

  @ContentChildren(MetalistItem)
  items: QueryList<MetalistItem>;

  value: any | any[];

  get selectedItem(): MetalistItem | undefined {
    return this.selectedItems[0] || undefined;
  }

  get selectedItems(): MetalistItem[] {
    return (this.items || []).filter(i => i.selected);
  }

  private syncItems() {
    const value = this.value;
    if (this.selectionMode === SelectionMode.Multiple  && Array.isArray(value)) {
      (this.items || []).forEach(item => {
        item.selected = value.includes(item.value);
      });
    } else {
      (this.items || []).forEach(item => {
        item.selected = item.value === value;
      });
    }
  }

  private syncValue() {
    const values = this.selectedItems.map(i => i.value);
    this.value = this.selectionMode === SelectionMode.Single ? values[0] : values;
  }

  private triggerChange() {
    this.change.emit(this.value);
    this.onChange(this.value);
  }

  ngAfterViewInit() {
    // Late changes of metalist-items take the selected state of the current value;
    this.items.changes.subscribe(() => setTimeout(() => this.syncItems()));
  }

  select(item: MetalistItem | number) {
    if (typeof item === 'number') {
      item = this.items.toArray()[item];
    }
    if (item instanceof MetalistItem) {
      if (item.disabled) {
        return;
      }
      if (this.selectionMode === SelectionMode.Multiple) {
        const selectedItems = (this.items || []).filter(i => i.selected);

        // prevent overflow
        const overflow = typeof this.maxSelectableItems === 'number' && (item.selected || selectedItems.length >= this.maxSelectableItems);
        if (!overflow) {
          item.selected = !item.selected;
        }
      } else {
        this.items.forEach(citem => citem.selected = citem === item);
      }
      this.syncValue();
      this.triggerChange();
    }
  }

  deselect(item: MetalistItem | number) {
    if (typeof item === 'number') {
      item = this.items.toArray()[item];
    }

    if (item instanceof MetalistItem) {
      item.selected = false;
      this.syncValue();
      this.triggerChange();
    }
  }

  private determineMarkedIndex() {
    let idx = this.items.toArray().findIndex(item => item.marked);
    return idx >= 0 ? idx : this.items.toArray().findIndex(metaItem => metaItem.selected);
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

  setValue(value: any) {
    this.value = value;
    this.syncItems();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(value: any): void {
    this.setValue(value);
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
