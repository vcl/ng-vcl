import { Component, ViewChild, TemplateRef, ViewContainerRef, ElementRef, Input, Optional, ChangeDetectorRef, OnDestroy, Output, EventEmitter, Injector } from '@angular/core';
import { OverlayConfig, Overlay, HorizontalConnectionPos, VerticalConnectionPos } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { TemplateOverlay } from '../overlay/index';

@Component({
  selector: 'vcl-popover',
  templateUrl: 'popover.component.html',
  exportAs: 'vclPopover',
})
export class PopoverComponent extends TemplateOverlay<any> implements OnDestroy {

  constructor(
    @Optional()
    injector: Injector,
    private _dir: Directionality,
    private overlay: Overlay,
    private cdRef: ChangeDetectorRef,
    protected viewContainerRef: ViewContainerRef,
  ) {
    super(injector);
  }

  @ViewChild(TemplateRef)
  private template: TemplateRef<any>;

  @Input()
  target: ElementRef<HTMLElement>;

  @Input()
  originX: HorizontalConnectionPos = 'start';

  @Input()
  originY: VerticalConnectionPos = 'bottom';

  @Input()
  overlayX: HorizontalConnectionPos  = 'start';

  @Input()
  overlayY: VerticalConnectionPos = 'top';

  @Input()
  offsetX = 0;

  @Input()
  offsetY = 0;

  @Input()
  width?: number;

  @Input()
  height?: number;

  @Input()
  set visible(visible: boolean) {
    if (visible) {
      this.open();
    } else {
      this.close();
    }
  }

  @Output()
  visibleChange = new EventEmitter<boolean>();

  @Output()
  afterClose = new EventEmitter<any>();

  get visible() {
    return this.isAttached;
  }

  protected getViewContainerRef(): ViewContainerRef {
    return this.viewContainerRef;
  }

  protected getTemplateRef(): TemplateRef<any> {
    return this.template;
  }

  reposition() {
    this.overlayRef && this.overlayRef.updatePosition();
  }

  open() {
    const config = new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      direction: this._dir,
      panelClass: 'vclPopOver',
      positionStrategy: this.overlay.position()
      .connectedTo(this.target, {
        originX: this.originX,
        originY: this.originY
      }, {
        overlayX: this.overlayX,
        overlayY: this.overlayY,
      })
      .withOffsetX(this.offsetX)
      .withOffsetY(this.offsetY),
    });

    this.attach(config);
    this.visibleChange.emit(this.isAttached);
  }

  close() {
    super.detach();
    this.visibleChange.emit(this.isAttached);
  }

  toggle() {
    if (this.visible) {
      this.close();
    } else {
      this.open();
    }
  }

  protected afterDetached(result) {
    if (!this.isDestroyed) {
      // We need to trigger change detection manually, because
      // `fromEvent` doesn't seem to do it at the proper time.
      this.cdRef.detectChanges();
    }
    this.afterClose.emit();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
