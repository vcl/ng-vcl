import { Component, Input, Output, ChangeDetectionStrategy,
  EventEmitter, forwardRef, ElementRef, ViewChild, ContentChildren, QueryList, ChangeDetectorRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownOption } from "./dropdown-option.component";
import { MetalistComponent, MetalistItem, SelectionMode } from "../metalist/index";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true
};

@Component({
  selector: 'vcl-dropdown',
  templateUrl: 'dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  host: {
    '[attr.tabindex]': '-1',
  }
})
export class DropdownComponent implements ControlValueAccessor {

  @ViewChild('metalist')
  metalist: MetalistComponent;

  @ViewChild('metalist', { read: ElementRef })
  listbox: ElementRef;

  @ContentChildren(DropdownOption)
  items: QueryList<DropdownOption>;

  @Input()
  tabindex: number = 0;

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

  @Input()
  disabled = false;

  @Input()
  listenKeys: boolean = true;

  @Output('change')
  change = new EventEmitter<any>();

  focused = false;

  constructor(public elementRef: ElementRef, private cdRef: ChangeDetectorRef) { }

  async scrollToMarked() {
    await new Promise(res => setTimeout(res, 0));
    if (this.listbox.nativeElement) {
      const itemEl = this.listbox.nativeElement.querySelectorAll('.vclHighlighted')[0];
      if (!itemEl) {
        return;
      }

      const scrollPos = this.listbox.nativeElement.scrollTop;
      const boxHeight = this.listbox.nativeElement.offsetHeight;
      const itemHeight = itemEl.offsetHeight;

      // TODO
      // itemOffset value is not relative to <ul> element
      const itemOffset = itemEl.offsetTop;

      const scrollToItem =
        ((itemOffset + itemHeight) > (scrollPos + boxHeight)) // item below scroll bounds
        || (itemOffset < scrollPos); // item above scroll bounds

      if (scrollToItem) {
        // TODO enable
        // this.listbox.nativeElement.scrollTop = itemOffset;
      }
    }
  }

  onMetalistItemTap(metaItem: MetalistItem) {
    this.metalist.select(metaItem);
    this.onTouched();
  }

  onMetalistKeydown(ev) {
    if (this.listenKeys) {
      let prevent = true;
      switch (ev.code) {
        case 'ArrowDown':
          this.metalist.markNext();
          this.scrollToMarked();
          break;
        case 'ArrowUp':
          this.metalist.markPrev();
          this.scrollToMarked();
          break;
        case 'Enter':
          this.metalist.selectMarked();
          break;
        default:
          prevent = false;
      }
      this.onTouched();
      prevent && ev.preventDefault();
    }
  }
  ngAfterViewInit() {
    this.items.changes.subscribe(() => {
      this.cdRef.markForCheck();
    });
  }
  onMetalistFocus() {
    this.focused = true;
  }
  onMetalistBlur() {
    this.focused = false;
    this.onTouched();
  }

  onMetalistChange(value: any) {
    this.change.emit(value);
    this.onChange(value);
  }

  setValue(value: any) {
    this.metalist.setValue(value);
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
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.cdRef.markForCheck();
  }
}
