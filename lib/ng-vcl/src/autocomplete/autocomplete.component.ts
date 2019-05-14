import { Component, Input, ViewChild,
  ElementRef, ContentChild, ChangeDetectorRef, Output, EventEmitter, ChangeDetectionStrategy, ViewContainerRef, TemplateRef, Injector, OnDestroy } from '@angular/core';
import { ESCAPE } from '@angular/cdk/keycodes';
import { NEVER, merge, Subscription } from 'rxjs';
import { SelectListComponent } from '../select-list/index';
import { TemplateOverlay } from '../overlay/index';
import { OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { startWith, switchMap, filter, take, takeUntil } from 'rxjs/operators';
import { createOffClickStream } from '../off-click/index';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'vcl-autocomplete',
  templateUrl: 'autocomplete.component.html',
  exportAs: 'vclAutocomplete',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent extends TemplateOverlay<any, any> implements OnDestroy {

  constructor(
    injector: Injector,
    private _dir: Directionality,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef,
  ) {
    super(injector);
  }

  private _dropdownOpenedSub?: Subscription;
  private _target?: ElementRef<HTMLElement>;

  @ContentChild(SelectListComponent)
  selectList: SelectListComponent;

  @ViewChild(TemplateRef)
  templateRef: TemplateRef<any>;

  @Input()
  width?: number | string;

  @Input()
  height?: number | string;

  @Input()
  maxHeight?: number | string;

  @Output()
  afterClose = new EventEmitter<any | any[]>();

  protected getTemplateRef(): TemplateRef<any> {
    return this.templateRef;
  }
  protected getViewContainerRef(): ViewContainerRef {
    return this.viewContainerRef;
  }

  get isOpen() {
    return this.isAttached;
  }

  open(target: ElementRef<HTMLElement>, value: string) {
    this.selectList.writeValue(value);
    this._target = target;

    const config = new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      direction: this._dir,
      width: this.width !== undefined ? this.width : target.nativeElement.getBoundingClientRect().width,
      height: this.height,
      maxHeight: this.maxHeight || '20em',
      panelClass: [],
      positionStrategy: this.overlay.position()
      .flexibleConnectedTo(target)
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
    });
    this.attach(config);
  }

  close() {
    this.detach();
  }

  protected afterAttached(): void {
    this.selectList.valueChange.pipe(
      takeUntil(this.afterClose),
      take(1)
    ).subscribe((value) => {
      if (this.isAttached) {
        this.detach(value);
      }
    });

    this._dropdownOpenedSub = this.selectList.itemsChange.pipe(
      // tslint:disable-next-line:deprecation
      startWith(undefined),
      switchMap(() => {
        if (!this.isAttached) {
          return NEVER;
        }
        return merge(
          this.overlayRef.keydownEvents().pipe(
            filter(event => {
              return event.keyCode === ESCAPE;
            })
          ),
          createOffClickStream([this.overlayRef.overlayElement, this._target.nativeElement], {
            document: this.injector.get(DOCUMENT)
          })
        );
      })
    ).subscribe(() => {
      this.detach();
    });
  }

  protected afterDetached(result?: any) {
    if (!this.isDestroyed) {
      // We need to trigger change detection manually, because
      // `fromEvent` doesn't seem to do it at the proper time.
      this.cdRef.detectChanges();
    }
    this._target = undefined;
    this._dropdownOpenedSub && this._dropdownOpenedSub.unsubscribe();
    this.selectList.highlight(undefined);
    this.afterClose.emit(result);
  }

  ngOnDestroy() {
    this.destroy();
  }
}
