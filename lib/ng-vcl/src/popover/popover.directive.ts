import { TemplateRef, OnDestroy, EventEmitter, Output, Input, Injector, ElementRef, ViewContainerRef, Inject, Directive } from '@angular/core';
import { Overlay, ConnectedPosition, ScrollStrategy } from '@angular/cdk/overlay';
import { LayerConfig, TemplateLayerRef } from '../layer/index';
import { createOffClickStream } from '../off-click/index';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[vclPopover]',
  exportAs: 'vclPopover'
})
export class PopoverDirective extends TemplateLayerRef implements OnDestroy {
  constructor(
    injector: Injector,
    public templateRef: TemplateRef<any>,
    public viewContainerRef: ViewContainerRef,
    private overlay: Overlay,
    @Inject(DOCUMENT) private document
  ) {
    super(injector);
  }

  private _popoverAttachedSub?: Subscription;

  @Input()
  closeOnEscape?: boolean;

  @Input()
  closeOnOffClick?: boolean;

  @Input()
  scrollStrategy?: ScrollStrategy;

  @Input()
  target?: ElementRef | HTMLElement;

  @Input()
  panelClass = 'pop-over';

  @Input()
  positions?: ConnectedPosition[];

  @Input()
  set visible(visible: boolean) {
    if (visible) {
      this.open();
    } else {
      this.close();
    }
  }

  get visible() {
    return this.isAttached;
  }

  // tslint:disable-next-line:no-output-rename
  @Output('afterClose')
  afterCloseOutput = this.afterClose;

  @Output()
  visibleChange = new EventEmitter<boolean>();

  createLayerConfig(...configs: LayerConfig[]): LayerConfig {
    if (!this.target) {
      throw new Error('Popover has no target');
    }

    return super.createLayerConfig({
      hasBackdrop: false,
      scrollStrategy: this.scrollStrategy || this.overlay.scrollStrategies.reposition({
        autoClose: false,
      }),
      closeOnBackdropClick: false,
      closeOnEscape: this.closeOnEscape || false,
      panelClass: this.panelClass,
      positionStrategy: this.overlay.position()
      .flexibleConnectedTo(this.target)
      .withPositions(this.positions || [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
      }])
    }, ...configs)
  }

  open(config?: LayerConfig) {
    const inputConfig: LayerConfig = {};

    if (this.closeOnEscape !== undefined) {
      inputConfig.closeOnEscape = this.closeOnEscape;
    }

    return super.open({
      ...inputConfig,
      ...(config || {})
    });
  }

  protected afterAttached(): void {
    this.visibleChange.emit(this.visible);
    if (this.closeOnOffClick) {
      this._popoverAttachedSub = createOffClickStream([this.overlayRef.overlayElement], {
        document: this.document
      }).subscribe(() => {
        this.close();
      });
    }
  }

  protected afterDetached(result: any): void {
    this.visibleChange.emit(this.visible);
    this._popoverAttachedSub && this._popoverAttachedSub.unsubscribe();
  }

  ngOnDestroy(): void {
    this.destroy();
    this._popoverAttachedSub && this._popoverAttachedSub.unsubscribe();
  }
}
