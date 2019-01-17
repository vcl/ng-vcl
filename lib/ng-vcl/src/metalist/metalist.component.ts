import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef,
  EventEmitter, forwardRef, ContentChildren, QueryList, AfterContentInit, OnDestroy, Inject
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: '[vcl-metalist-item]',
  template: '<ng-content></ng-content>',
  exportAs: 'meta'
})
export class MetalistItemComponent {
  constructor(@Inject(forwardRef(() => MetalistComponent)) private metalist) { }

  @Input()
  value: any;

  @Input()
  metadata: any;

  @Input()
  disabled = false;

  get marked(): boolean {
    return this.metalist.isMarked(this);
  }

  get selected(): boolean {
    return this.metalist.isSelected(this);
  }
}

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

  @Output()
  itemsChange = new EventEmitter<any>();

  @ContentChildren(MetalistItemComponent)
  items?: QueryList<MetalistItemComponent>;

  @Input()
  value: any | any[];

  markedItem?: MetalistItemComponent;
  itemsSub?: Subscription;

  constructor(private cdRef: ChangeDetectorRef) { }

  get itemsArray() {
    return this.items ? this.items.toArray() : [];
  }

  isMarked(item: MetalistItemComponent) {
    return this.markedItem === item;
  }

  isSelected(item: MetalistItemComponent) {
    const value = this.value;
    if (this.mode === 'multiple'  && Array.isArray(value)) {
      return value.includes(item.value);
    } else {
      return item.value === value;
    }
  }

  get selectedItem(): MetalistItemComponent | undefined {
    return this.selectedItems[0] || undefined;
  }

  get selectedItems(): MetalistItemComponent[] {
    return this.itemsArray.filter(i => i.selected);
  }


  ngAfterContentInit() {
    this.itemsSub = this.items && this.items.changes.subscribe(() => {
      this.itemsChange.emit();
    });
  }

  ngOnDestroy(): void {
    this.itemsSub && this.itemsSub.unsubscribe();
  }

  private triggerChange() {
    this.itemsChange.emit();
    this.change.emit(this.value);
    this.onChange(this.value);
  }

  select(item?: MetalistItemComponent | number) {
    if (item === undefined) {
      return this.selectMarked();
    }

    if (typeof item === 'number') {
      item = this.itemsArray[item];
    }
    if (item instanceof MetalistItemComponent) {
      if (item.disabled) {
        return;
      }
      if (this.mode === 'multiple' ) {
        const selectedItems = this.itemsArray.filter(i => i.selected);
        if (item.selected) {
          const value = item.value;
          if (!Array.isArray(this.value)) {
            this.value = [];
          }
          this.value = this.value.filter(v => v !== value);
        } else {
          // prevent overflow
          const maxSelectableItems = typeof this.maxSelectableItems === 'number' ? this.maxSelectableItems : Infinity;
          if (selectedItems.length < maxSelectableItems) {
            if (!Array.isArray(this.value)) {
              this.value = [];
            }
            this.value.push(item.value);
          }
        }
      } else {
        this.value = item.value;
      }
      this.triggerChange();
      this.cdRef.markForCheck();
    }
  }

  deselect(item: MetalistItemComponent | number) {
    if (typeof item === 'number') {
      item = this.itemsArray[item];
    }

    if (item instanceof MetalistItemComponent) {
      const value = item.value;

      if (this.mode === 'single' && this.value === value) {
        this.value = undefined;
        this.triggerChange();
      } else if (this.mode === 'multiple') {
        if (!Array.isArray(this.value)) {
          this.value = [];
        }
        this.value = this.value.filter(v => v !== value);
        this.triggerChange();
      }

      this.cdRef.markForCheck();
    }
  }

  private determineMarkedIndex() {
    const idx = this.itemsArray.findIndex(item => item.marked);
    return idx >= 0 ? idx : this.itemsArray.findIndex(metaItem => metaItem.selected);
  }

  mark(item: MetalistItemComponent | number) {
    if (typeof item === 'number') {
      item = this.itemsArray[item];
    }
    if (item instanceof MetalistItemComponent) {
      this.markedItem = item;
      this.itemsChange.emit();
      this.cdRef.markForCheck();
    }
  }

  markNext() {
    const items = this.itemsArray;
    let newIdx = this.determineMarkedIndex() + 1;
    if (newIdx >= (items.length)) {
      newIdx = items.length - 1;
    }
    items.every((item, cidx) => {
      const mark = cidx >= newIdx;
      if (!item.disabled && mark) {
        this.markedItem = item;
        return false;
      }
      return true;
    });
    this.itemsChange.emit();
    this.cdRef.markForCheck();
  }

  markPrev() {
    const items = this.itemsArray.reverse();
    let newIdx = this.determineMarkedIndex() - 1;
    if (newIdx <= 0 && items.length > 0) {
      newIdx = 0;
    }
    newIdx = (items.length - 1) - newIdx;

    items.every((item, cidx) => {
      const mark = cidx >= newIdx;
      if (!item.disabled && mark) {
        this.markedItem = item;
        return false;
      }
      return true;
    });
    this.itemsChange.emit();
    this.cdRef.markForCheck();
  }

  selectMarked() {
    if (this.markedItem) {
      this.select(this.markedItem);
      this.cdRef.markForCheck();
    }
  }

  setValue(value: any) {
    this.value = value;
    this.cdRef.markForCheck();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};

  writeValue(value: any): void {
    this.setValue(value);
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
  }
}
