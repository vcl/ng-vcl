import {
  Component, Input, Output, ChangeDetectionStrategy, EventEmitter,
  forwardRef, ElementRef, ViewChild, ContentChildren, QueryList,
  ChangeDetectorRef, OpaqueToken, Optional, Inject, OnInit,
} from '@angular/core';
import {
  AnimationMetadata, AnimationFactory,
  AnimationBuilder, AnimationPlayer
} from "@angular/animations";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownOption } from "./dropdown-option.component";
import { MetalistComponent, MetalistItem, SelectionMode } from "../metalist/index";

export enum DropdownState {
  Expanded,
  Closed,
  Expanding,
  Closing
}

export const DROPDOWN_ANIMATIONS = new OpaqueToken('@ng-vcl/ng-vcl#dropdown_animations');

export interface DropdownAnimationConfig {
  enter?: AnimationMetadata | AnimationMetadata[];
  leave?: AnimationMetadata | AnimationMetadata[];
}

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
export class DropdownComponent implements ControlValueAccessor, OnInit {

  @ViewChild('metalist')
  metalist: MetalistComponent;

  @ViewChild('metalist', { read: ElementRef })
  listbox: ElementRef;

  @ContentChildren(DropdownOption)
  items: QueryList<DropdownOption>;

  @Input()
  tabindex: number = 0;

  state: DropdownState = DropdownState.Expanded;

  get expanded() {
    return (this.state === DropdownState.Expanding || this.state === DropdownState.Expanded);
  }

  @Input()
  set expanded(value) {
    if (value) {
      this.expand();
    } else {
      this.close();
    }
  }

  @Output()
  willClose = new EventEmitter<any>();

  @Output()
  willExpand = new EventEmitter<any>();
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
  maxSelectableItems?: number;

  @Input()
  disabled = false;

  @Input()
  listenKeys: boolean = true;

  @Output('change')
  change = new EventEmitter<any>();

  focused = false;

  enterAnimationFactory: AnimationFactory | undefined;
  leaveAnimationFactory: AnimationFactory | undefined;

  constructor(
    public readonly elementRef: ElementRef,
    private readonly cdRef: ChangeDetectorRef,
    private readonly builder: AnimationBuilder,
    @Optional() @Inject(DROPDOWN_ANIMATIONS) private animations: DropdownAnimationConfig) { }

  ngOnInit() {
    this.scrollToSelected();
  }

  public async expand(): Promise<void> {
    if (this.state === DropdownState.Expanded || this.state === DropdownState.Expanding) {
      return;
    }

    this.state = DropdownState.Expanding;
    this.willExpand.emit();

    if (this.enterAnimationFactory && this.elementRef) {
      const player = this.enterAnimationFactory.create(this.elementRef.nativeElement);
      player.onDone(() => {
        player.destroy();
        this.state = DropdownState.Expanded;
      });
      player.play();
    } else {
      this.state = DropdownState.Expanded;
    }
  }

  public close(): void {
    if (this.state === DropdownState.Closed || this.state === DropdownState.Closing) {
      return;
    }

    this.state = DropdownState.Closing;
    this.willClose.emit();

    if (this.leaveAnimationFactory && this.elementRef) {
      const player = this.leaveAnimationFactory.create(this.elementRef.nativeElement);
      player.onDone(() => {
        player.destroy();
        this.state = DropdownState.Closed;
        this.cdRef.markForCheck();
      });
      player.play();
    } else {
      this.state = DropdownState.Closed;
    }
  }

  async scrollToSelected() {
    await new Promise(res => setTimeout(res, 0));
    if (this.listbox.nativeElement) {
      const selectedItem = this.listbox.nativeElement.querySelectorAll('.vclSelected')[0];
      if (!selectedItem) {
        return;
      }

      const allItems = this.listbox.nativeElement.querySelectorAll('.vclDropdownItem');
      let scrollTop = 0;

      const items = this.items.toArray();

      for (let itemIndex = 0; itemIndex < items.length; ++itemIndex) {
        if (items[itemIndex].selected) {
          this.listbox.nativeElement.scrollTop = scrollTop;
          break;
        }
        scrollTop += allItems[itemIndex].clientHeight;
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
          this.scrollToSelected();
          break;
        case 'ArrowUp':
          this.metalist.markPrev();
          this.scrollToSelected();
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

    if (this.animations) {
      if (this.animations.enter) {
        this.enterAnimationFactory = this.builder.build(this.animations.enter);
      }
      if (this.animations.leave) {
        this.leaveAnimationFactory = this.builder.build(this.animations.leave);
      }
    }
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
  private onChange: (_: any) => void = () => { };
  private onTouched: () => any = () => { };

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

  readonly DropdownState = DropdownState;
}
