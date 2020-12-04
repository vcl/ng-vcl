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
  ViewEncapsulation} from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ESCAPE, UP_ARROW, DOWN_ARROW, TAB } from '@angular/cdk/keycodes';
import { Overlay } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { TemplatePortal } from '@angular/cdk/portal';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TemplateLayerRef, LayerConfig } from '../layer/index';
import { SelectListItem, SelectListComponent } from '../select-list/index';
import { EmbeddedInputFieldLabelInput, FORM_CONTROL_EMBEDDED_LABEL_INPUT } from '../input/index';

@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'vclSelect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // FormControlState,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
    {
      provide: FORM_CONTROL_EMBEDDED_LABEL_INPUT,
      useExisting: forwardRef(() => SelectComponent)
    },
  ]
})
export class SelectComponent extends TemplateLayerRef<any, SelectListItem> implements AfterContentInit, OnDestroy, EmbeddedInputFieldLabelInput {

  constructor(
    injector: Injector,
    private _dir: Directionality,
    private overlay: Overlay,
    protected viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef<HTMLElement>,
    private cdRef: ChangeDetectorRef,
  ) {
    super(injector);
  }

  private stateChangedEmitter = new Subject<void>();
  private _valueChangeSub?: Subscription;
  private _focused = false;

  @ContentChild(SelectListComponent)
  selectList: SelectListComponent;

  @ViewChild('input', { read: ElementRef, static: true })
  input: ElementRef<HTMLInputElement>;

  @ViewChild('btn', { read: ElementRef, static: true })
  button: ElementRef<HTMLInputElement>;

  @ViewChild(TemplateRef, { static: true })
  templateRef: TemplateRef<any>;

  @HostBinding('attr.role')
  attrRole = 'listbox';

  @HostBinding('class.select')
  @HostBinding('class.input-field')
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

  @Output()
  afterClose = new EventEmitter<any | any[]>();

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
    if (!this.isAttached) {
      this.open();
    }
    this.stateChangedEmitter.next();
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.selectList.onTouched();
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

    if (this.selectList.selectionMode === 'single') {
      const items = this.selectList.getItems();
      const item = items.find(_item => this.selectList.value === _item.value);
      return item ? item.label : (this.placeholder || '');
    } else {
      const value = Array.isArray(this.selectList.value) ? this.selectList.value : [];
      const items = this.selectList.getItems();
      const labels = items.filter(item => value.includes(item.value)).map(item => item.label);
      return labels.length === 0 ? '' : labels.join(', ');
    }
  }

  createPortal() {
    return new TemplatePortal(this.templateRef, this.viewContainerRef);
  }

  @HostListener('click')
  onClick() {
    if (this.isDisabled) {
      return;
    }
    if (!this.isAttached) {
      this.open();
    } else {
      this.close();
    }
  }

  createLayerConfig(...configs: LayerConfig[]): LayerConfig {
    return super.createLayerConfig({
      closeOnEscape: true,
      hasBackdrop: true,
      closeOnBackdropClick: true,
      scrollStrategy: this.overlay.scrollStrategies.reposition({
        autoClose: true
      }),
      direction: this._dir,
      width: this.width !== undefined ? this.width : this.elementRef.nativeElement.getBoundingClientRect().width,
      height: this.height,
      maxHeight: this.maxHeight || '20em',
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: ['vcl-select-overlay', 'pop-over'],
      positionStrategy: this.overlay.position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }]).withPush(false)
    }, ...configs)
  }

  onLabelClick(): void {
    if (this.isAttached) {
      return;
    }
    this.open();
  }

  ngAfterContentInit(): void {
    this._valueChangeSub = this.selectList.valueChange.subscribe(() => {
      this.cdRef.markForCheck();
      this.stateChangedEmitter.next();
    });
  }

  protected afterAttached(): void {
    this.selectList.valueChange.pipe(
      takeUntil(this.afterClose)
    ).subscribe((value) => {
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

  protected afterDetached(result) {
    // this.selectList.highlightSelected(); // TODO uncomment when highlightSelected is implemented
    this.afterClose.emit(this.selectList.value);
    if (!this.isDestroyed) {
      this.cdRef.markForCheck();
      this.cdRef.detectChanges();
    }
    this.stateChangedEmitter.next();
  }

  ngAfterViewInit() {
    this.selectList.stateChanged.subscribe(this.stateChangedEmitter);
  }

  ngOnDestroy() {
    this._valueChangeSub && this._valueChangeSub.unsubscribe();
    this.destroy();
  }
}
