import { Directionality } from '@angular/cdk/bidi';
import { ESCAPE, UP_ARROW, DOWN_ARROW, TAB } from '@angular/cdk/keycodes';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  HostListener,
  ContentChild,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  OnDestroy,
  ChangeDetectionStrategy,
  ViewContainerRef,
  TemplateRef,
  Injector,
  forwardRef,
  AfterContentInit,
  ViewEncapsulation,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  EmbeddedInputFieldLabelInput,
  FORM_CONTROL_EMBEDDED_LABEL_INPUT,
} from '../input/index';
import { TemplateLayerRef, LayerConfig } from '../layer/index';
import { SelectListItem, SelectListComponent } from '../select-list/index';

@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'vclSelect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
    {
      provide: FORM_CONTROL_EMBEDDED_LABEL_INPUT,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent
  extends TemplateLayerRef<any, SelectListItem>
  implements
    AfterContentInit,
    OnDestroy,
    EmbeddedInputFieldLabelInput,
    AfterViewInit,
    OnInit
{
  private stateChangedEmitter = new Subject<void>();
  private _focused = false;
  prependedElements = 0;

  @ContentChild(SelectListComponent)
  selectList: SelectListComponent;

  @ViewChild('input', { read: ElementRef, static: true })
  input: ElementRef<HTMLInputElement>;

  @ViewChild('innerList', { static: true })
  templateRef: TemplateRef<any>;

  @HostBinding('attr.role')
  attrRole = 'listbox';

  @HostBinding('class.select')
  @HostBinding('class.input-field')
  @HostBinding('class.no-border')
  _hostClasses = true;

  @Input()
  tabindex = 0;

  @Input()
  width?: number | string;

  @Input()
  height?: number | string;

  @Input()
  maxHeight?: number | string;

  @Input()
  placeholder?: string;

  @Input()
  search = false;

  @Output()
  afterClose = new EventEmitter<any | any[]>();

  @Output()
  searchValue = new EventEmitter<string | undefined>(undefined);

  @Input()
  clearable = false;

  get stateChanged() {
    return this.stateChangedEmitter.asObservable();
  }

  @HostBinding('attr.tabindex')
  get attrTabindex() {
    return this.isDisabled ? undefined : this.tabindex;
  }

  @HostBinding('class.focused')
  get isFocused() {
    return this._focused || this.isAttached;
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.selectList.isDisabled;
  }

  get isLabelFloating() {
    return !this.isAttached && this.inputValue.length === 0;
  }

  controlType = 'select';
  materialModifierClass = undefined;

  get listEmpty(): boolean {
    if (this.selectList) {
      return this.selectList.allItemsHidden();
    }

    return false;
  }

  get elementId() {
    return this.selectList.elementId;
  }
  get value() {
    return this.selectList.value;
  }

  @HostBinding('class.error')
  get hasError() {
    return this.selectList.hasError;
  }

  @HostListener('focus')
  onFocus() {
    if (this.isDisabled) {
      return;
    }
    this._focused = true;
    this.selectList.search = undefined;
    if (!this.isAttached) {
      this.open();
      this.selectList.manageScroll();
    }
    this.stateChangedEmitter.next();
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.selectList.search = undefined;
    this.selectList.onTouched();
    this.selectList.selectHighlighted();
    this.stateChangedEmitter.next();
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    const code = event.keyCode;
    if (code === ESCAPE) {
      this.close();
      this.elementRef.nativeElement.blur();
    } else if (code === UP_ARROW) {
      this.selectList && this.selectList.highlightPrev();
      event.preventDefault();
      return false;
    } else if (code === DOWN_ARROW) {
      if (this.isAttached) {
        this.selectList && this.selectList.highlightNext();
      } else {
        if (!this.isAttached) {
          this.open();
          this.selectList.manageScroll();
        }
      }
      event.preventDefault();
      return false;
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const code = event.keyCode;
    if (code === TAB) {
      this.close();
    }
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const code = event.code || event.key;
    if (this.selectList && code === 'Enter') {
      event.preventDefault();
      this.selectList.selectHighlighted();
    }
  }

  get inputValue() {
    if (!this.selectList) {
      return '';
    }

    if (this.search && this.isFocused) {
      return this.selectList.search || '';
    }

    if (this.selectList.selectionMode === 'single') {
      const items = this.selectList.items;
      const item = items.find(_item => this.selectList.value === _item.value);
      return item ? item.label : this.placeholder || '';
    } else {
      const value = Array.isArray(this.selectList.value)
        ? this.selectList.value
        : [];
      const items = this.selectList.items;
      const labels = items
        .filter(item => value.includes(item.value))
        .map(item => item.label);
      return labels.length === 0 ? '' : labels.join(', ');
    }
  }

  @HostListener('click')
  onClick() {
    if (this.isDisabled) {
      return;
    }
    this.selectList.search = undefined;
    if (!this.isAttached) {
      this.open();
      this.selectList.manageScroll();
      this.input.nativeElement.focus();
    } else {
      this.close();
    }
  }

  constructor(
    injector: Injector,
    private readonly _dir: Directionality,
    private readonly overlay: Overlay,
    protected readonly viewContainerRef: ViewContainerRef,
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly cdRef: ChangeDetectorRef
  ) {
    super(injector);
  }

  createPortal() {
    return new TemplatePortal(this.templateRef, this.viewContainerRef);
  }

  createLayerConfig(...configs: LayerConfig[]): LayerConfig {
    return super.createLayerConfig(
      {
        closeOnEscape: true,
        hasBackdrop: false,
        closeOnBackdropClick: true,
        scrollStrategy: this.overlay.scrollStrategies.reposition({
          autoClose: true,
        }),
        direction: this._dir,
        width:
          this.width !== undefined
            ? this.width
            : this.elementRef.nativeElement.getBoundingClientRect().width,
        height: this.height,
        maxHeight: this.maxHeight || '20em',
        backdropClass: 'cdk-overlay-transparent-backdrop',
        panelClass: ['vcl-select-overlay', 'pop-over'],
        positionStrategy: this.overlay
          .position()
          .flexibleConnectedTo(this.elementRef)
          .withPositions([
            {
              originX: 'start',
              originY: 'bottom',
              overlayX: 'start',
              overlayY: 'top',
            },
            {
              originX: 'start',
              originY: 'top',
              overlayX: 'start',
              overlayY: 'bottom',
            },
          ])
          .withPush(false),
      },
      ...configs
    );
  }

  onLabelClick(): void {
    if (this.isAttached) {
      return;
    }
    this.open();
    this.selectList.manageScroll();
  }

  ngAfterContentInit(): void {
    this.subscriptions.sink = this.selectList.valueChange.subscribe(() => {
      this.cdRef.markForCheck();
      this.stateChangedEmitter.next();
    });
  }

  protected afterAttached(): void {
    this.selectList.valueChange
      .pipe(takeUntil(this.afterClose))
      .subscribe(value => {
        if (this.isAttached) {
          if (this.selectList.selectionMode === 'single') {
            this.close(value);
          } else {
            this.cdRef.markForCheck();
          }
          this.stateChangedEmitter.next();
        }
        this.cdRef.markForCheck();
      });
    this.stateChangedEmitter.next();
  }

  protected afterDetached() {
    // this.selectList.highlightSelected(); // TODO uncomment when highlightSelected is implemented
    this.afterClose.emit(this.selectList.value);
    if (!this.isDestroyed) {
      this.cdRef.markForCheck();
      this.cdRef.detectChanges();
    }
    this.stateChangedEmitter.next();
  }

  ngOnInit(): void {
    if (this.input) {
      let prependedElements = 0;
      let sibling: Element = this.input.nativeElement;
      while ((sibling = sibling.previousElementSibling)) {
        prependedElements++;
      }
      this.prependedElements = prependedElements;
    }
  }

  ngAfterViewInit() {
    this.selectList.stateChanged.subscribe(this.stateChangedEmitter);
  }

  ngOnDestroy() {
    this.destroy();
    this.subscriptions.unsubscribe();
  }

  inputChange(event: KeyboardEvent) {
    if (!this.search) {
      return;
    }

    if (event.code === 'Enter') {
      const firstNotHidden = this.selectList.items.find(
        i => !this.selectList.isItemHidden(i)
      );
      if (firstNotHidden) {
        this.selectList.selectItem(firstNotHidden);
        this.input.nativeElement.blur();
      }
    } else {
      this.selectList.search = this.input.nativeElement.value;
      this.searchValue.next(this.input.nativeElement.value);
    }
  }

  clearSelection(event: MouseEvent) {
    this.selectList.selectItem(undefined);
    this.close();
    event.preventDefault();
    event.stopPropagation();
    if ('blur' in document.activeElement) {
      // @ts-ignore
      document.activeElement.blur();
    }
  }
}
