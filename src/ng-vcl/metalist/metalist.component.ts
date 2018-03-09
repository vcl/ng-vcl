import { Directive, Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef,
  EventEmitter, forwardRef, OnInit, ElementRef, ViewChild, ContentChildren, QueryList, HostListener, TemplateRef, SimpleChanges, Query, AfterContentInit, OnDestroy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { MetalistItem } from './metalist-item.component';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MetalistComponent),
  multi: true
};

@Component({
  selector: 'vcl-metalist, [vcl-metalist]',
  templateUrl: 'metalist.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetalistComponent implements ControlValueAccessor, AfterContentInit, OnDestroy {
  // If `single`, a single item can be selected
  // If `multiple` multiple items can be selected
  @Input()
  mode: 'multiple' | 'single' = 'single';


  @Input()
  maxSelectableItems?: number;

  @Output()
  change = new EventEmitter<any>();

  @ContentChildren(MetalistItem)
  items: QueryList<MetalistItem>;

  value: any | any[];

  itemsSub?: Subscription;

  get selectedItem(): MetalistItem | undefined {
    return this.selectedItems[0] || undefined;
  }

  get selectedItems(): MetalistItem[] {
    return (this.items || []).filter(i => i.selected);
  }

  constructor(private cdRef: ChangeDetectorRef) { }

  private syncItems() {
    const value = this.value;
    if (this.mode === 'multiple'  && Array.isArray(value)) {
      (this.items || []).forEach(item => {
        item.selected = value.includes(item.value);
      });
    } else {
      (this.items || []).forEach(item => {
        item.selected = item.value === value;
      });
    }
    this.cdRef.markForCheck();
  }

  private syncValue() {
    const values = this.selectedItems.map(i => i.value);
    this.value = this.mode === 'single' ? values[0] : values;
  }

  private triggerChange() {
    this.change.emit(this.value);
    this.onChange(this.value);
  }

  ngAfterContentInit() {
    // Changes of metalist-items take the selected state of the current value;
    this.itemsSub = this.items.changes.startWith(null).subscribe(() => {
      Promise.resolve(null).then(() => {
        this.syncItems();
      });
    });
  }

  ngOnDestroy(): void {
    this.itemsSub && this.itemsSub.unsubscribe();
  }

  select(item: MetalistItem | number) {
    if (typeof item === 'number') {
      item = this.items.toArray()[item];
    }
    if (item instanceof MetalistItem) {
      if (item.disabled) {
        return;
      }
      if (this.mode === 'multiple' ) {
        const selectedItems = (this.items || []).filter(i => i.selected);

        // prevent overflow
        const maxSelectableItems = typeof this.maxSelectableItems === 'number' ? this.maxSelectableItems : Infinity;
        const overflow = !item.selected && selectedItems.length >= maxSelectableItems;
        if (!overflow) {
          item.selected = !item.selected;
        }
      } else {
        this.items.forEach(citem => citem.selected = citem === item);
      }
      this.syncValue();
      this.triggerChange();
      this.cdRef.markForCheck();
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
      this.cdRef.markForCheck();
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
    this.cdRef.markForCheck();
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
    this.cdRef.markForCheck();
  }

  selectMarked() {
    const item = this.items.toArray().find(i => i.marked === true && !i.disabled);
    if (item) {
      this.select(item);
      this.cdRef.markForCheck();
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
