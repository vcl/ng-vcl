import { Directive, Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef,
  EventEmitter, forwardRef, OnInit, ElementRef, ViewChild, ContentChildren, QueryList, HostListener, TemplateRef, SimpleChanges, Query, AfterContentInit, OnDestroy, OnChanges, Inject
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: '[vcl-metalist-item]',
  template: '<ng-content></ng-content>',
  exportAs: 'meta'
})
export class MetalistItem implements MetalistItem {
  constructor(@Inject(forwardRef(() => MetalistComponent)) private metalist) { }

  @Input()
  value: any;

  @Input()
  metadata: any;

  @Input()
  disabled: boolean = false;

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

  @ContentChildren(MetalistItem)
  items: QueryList<MetalistItem>;

  @Input()
  value: any | any[];

  markedItem?: MetalistItem;
  itemsSub?: Subscription;

  constructor(private cdRef: ChangeDetectorRef) { }

  isMarked(item: MetalistItem) {
    return this.markedItem === item;
  }

  isSelected(item: MetalistItem) {
    const value = this.value;
    if (this.mode === 'multiple'  && Array.isArray(value)) {
      return value.includes(item.value);
    } else {
      return item.value === value;
    }
  }

  get selectedItem(): MetalistItem | undefined {
    return this.selectedItems[0] || undefined;
  }

  get selectedItems(): MetalistItem[] {
    return (this.items || []).filter(i => i.selected);
  }


  ngAfterContentInit() {
    this.itemsSub = this.items.changes.subscribe(() => {
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

  select(item?: MetalistItem | number) {
    if (item === undefined) {
      return this.selectMarked();
    }

    if (typeof item === 'number') {
      item = this.items.toArray()[item];
    }
    if (item instanceof MetalistItem) {
      if (item.disabled) {
        return;
      }
      if (this.mode === 'multiple' ) {
        const selectedItems = (this.items || []).filter(i => i.selected);
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

  deselect(item: MetalistItem | number) {
    if (typeof item === 'number') {
      item = this.items.toArray()[item];
    }

    if (item instanceof MetalistItem) {
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
    let idx = this.items.toArray().findIndex(item => item.marked);
    return idx >= 0 ? idx : this.items.toArray().findIndex(metaItem => metaItem.selected);
  }

  mark(item: MetalistItem | number) {
    if (typeof item === 'number') {
      item = this.items.toArray()[item];
    }
    if (item instanceof MetalistItem) {
      this.markedItem = item;
      this.itemsChange.emit();
      this.cdRef.markForCheck();
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
    const items = this.items.toArray().reverse();
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
