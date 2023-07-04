import {
  EventEmitter,
  forwardRef,
  QueryList,
  Input,
  Output,
  ContentChildren,
  HostBinding,
  AfterContentInit,
  OnDestroy,
  Optional,
  Component,
  Directive,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { SubSink } from 'subsink';

import { DataListItemDirective } from './data-list-item.directive';
import { DATA_LIST_TOKEN, DataList, DataListItem, DataListMode } from './types';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'vcl-data-list-header',
})
export class DataListHeaderDirective {
  @HostBinding('class.data-list-header')
  hostClasses = true;
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'vcl-data-list-footer',
})
export class DataListFooterDirective {
  @HostBinding('class.data-list-footer')
  hostClasses = true;
}

@Component({
  selector: 'vcl-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'vclDataList',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DATA_LIST_TOKEN,
      useExisting: forwardRef(() => DataListComponent),
    },
  ],
})
export class DataListComponent
  implements DataList, AfterContentInit, OnDestroy, ControlValueAccessor
{
  stateChange = new Subject<void>();

  private _cvaDisabled = false;

  @HostBinding('class.data-list')
  _hostClasses = true;

  private _itemsChangeEmitter: Subject<void> = new Subject();

  readonly itemsChange = this._itemsChangeEmitter.asObservable();

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('mode')
  selectionMode: DataListMode = 'single';

  @Input()
  value: any | any[];

  @Input()
  disabled = false;

  @Input()
  @HostBinding('class.divider')
  dividier = false;

  @Input()
  @HostBinding('class.no-border')
  noBorder = false;

  @Output()
  valueChange = new EventEmitter<any | any[]>();

  @ContentChildren(DataListItemDirective)
  private _items?: QueryList<DataListItem>;

  get isDisabled() {
    return this._cvaDisabled || this.disabled;
  }

  private subscriptions = new SubSink();

  constructor(
    @Optional()
    public readonly ngControl?: NgControl
  ) {
    // Set valueAccessor instead of providing it to avoid circular dependency of NgControl
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterContentInit() {
    this.subscriptions.sink = this._items.changes.subscribe(
      this._itemsChangeEmitter
    );
  }

  ngOnDestroy() {
    this.stateChange.complete();
    this.subscriptions.unsubscribe();
  }

  isItemSelected(item: DataListItem): boolean {
    if (this.selectionMode === 'single') {
      return item.value === this.value;
    } else if (this.selectionMode === 'multiple') {
      return Array.isArray(this.value) && this.value.includes(item.value);
    } else {
      return false;
    }
  }

  selectItem(item: DataListItem): void {
    if (this.selectionMode === 'none') {
      return;
    } else if (this.selectionMode === 'single') {
      this.value = item.value;
    } else {
      const values = Array.isArray(this.value) ? this.value : [this.value];
      if (values.includes(item.value)) {
        this.value = values.filter(_value => _value !== item.value);
      } else {
        this.value = [...values, item.value];
      }
    }

    this.valueChange.emit(this.value);
    this.onTouched();
    this.onChange(this.value);
    this.stateChange.next();
  }

  onItemFocus(_: DataListItem) {}

  onItemBlur(item: DataListItem) {
    if (this._items.last === item) {
      this.onTouched();
    }
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.valueChange.emit(value);
    this.stateChange.next();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._cvaDisabled = isDisabled;
  }
}
