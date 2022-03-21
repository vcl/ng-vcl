import { Input, ElementRef, ChangeDetectorRef, Output, EventEmitter, ViewContainerRef, TemplateRef, Injector, OnDestroy, Directive, Optional, Host, Self } from '@angular/core';
import { Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { SelectListComponent } from '../select-list/index';
import { TemplateLayerRef, LayerConfig } from '../layer/index';

export class AutocompleteConfig extends LayerConfig {
  value: string;
  target: ElementRef;
}

@Directive({
  selector: '[vclAutocomplete]',
  exportAs: 'vclAutocomplete',
})
export class AutocompleteDirective extends TemplateLayerRef implements OnDestroy {

  constructor(
    injector: Injector,
    private _dir: Directionality,
    private overlay: Overlay,
    public viewContainerRef: ViewContainerRef,
    public templateRef: TemplateRef<any>,
    private cdRef: ChangeDetectorRef,
  ) {
    super(injector);
  }

  private _dropdownOpenedSub?: Subscription;
  private _target?: ElementRef<HTMLElement>;
  private _value?: any;

  @Input()
  width?: number | string;

  @Input()
  height?: number | string;

  @Input()
  maxHeight?: number | string;

  @Output()
  afterClose = new EventEmitter<any | any[]>();

  selectList?: SelectListComponent;

  createPortal() {
    return new TemplatePortal(this.templateRef, this.viewContainerRef);
  }

  get isOpen() {
    return this.isAttached;
  }

  get inputElement() {
    return this._target.nativeElement;
  }

  get inputFieldElement() {
    return this.inputElement.parentNode as HTMLElement ?? this.inputElement;
  }

  createLayerConfig(config?: LayerConfig) {
    return super.createLayerConfig({
      closeOnEscape: true,
      closeOnBackdropClick: true,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      direction: this._dir,
      width: this.width !== undefined ? this.width : this.inputFieldElement.getBoundingClientRect().width,
      height: this.height,
      maxHeight: this.maxHeight ?? '20em',
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: ['pop-over', 'vcl-autocomplete-overlay'],
      positionStrategy: this.overlay.position()
      .flexibleConnectedTo(this.inputFieldElement)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom'
        }
      ])
    }, config);
  }

  open(config: AutocompleteConfig) {
    this._target = config.target;
    this._value = config.value;
    return super.open(config);
  }

  registerSelectList(selectList: SelectListComponent): void {
    this.selectList = selectList;
  }

  protected afterAttached() {
    if (this.selectList) {
      this.selectList.writeValue(this._value);
      this.selectList.valueChange.pipe(
        takeUntil(this.afterClose),
        take(1)
      ).subscribe((value) => {
        if (this.isAttached) {
          this.close(value);
        }
      });
    }
  }
  protected afterDetached(result?: any) {
    super.afterDetached(result);
    if (!this.isDestroyed) {
      // We need to trigger change detection manually, because
      // `fromEvent` doesn't seem to do it at the proper time.
      this.cdRef.detectChanges();
    }
    this._target = undefined;
    this._dropdownOpenedSub && this._dropdownOpenedSub.unsubscribe();
    if (this.selectList) {
      this.selectList.highlight(undefined);
    }
    this.afterClose.emit(result);
  }

  registerSelect(selectList: SelectListComponent) {
    this.selectList = selectList;
    this.selectList.valueChange.pipe(
      take(1)
    ).subscribe((value) => {
      this.close(value);
    });
  }

  ngOnDestroy() {
    this.destroy();
  }
}


@Directive({
  selector: 'vcl-select-list',
})
export class AutocompleteSelectListDirective {
  constructor(
    @Optional() @Host() autocomplete: AutocompleteDirective,
    @Optional() @Self() selectList: SelectListComponent
  ) {
    autocomplete.registerSelectList(selectList);
  }
}
