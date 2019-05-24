import { Component, ViewChild, TemplateRef, ViewContainerRef, ElementRef, Input, Optional, ChangeDetectorRef, OnDestroy, Output, EventEmitter, Injector, ChangeDetectionStrategy } from '@angular/core';
import { OverlayConfig, Overlay, HorizontalConnectionPos, VerticalConnectionPos } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { TemplatePortal } from '@angular/cdk/portal';
import { LayerBase } from '../layer/index';

@Component({
  selector: 'vcl-popover',
  templateUrl: 'popover.component.html',
  exportAs: 'vclPopover',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent extends LayerBase implements OnDestroy {

  constructor(
    @Optional()
    injector: Injector,
    private _dir: Directionality,
    private overlay: Overlay,
    protected viewContainerRef: ViewContainerRef,
  ) {
    super(injector);
  }

  @ViewChild(TemplateRef)
  private templateRef: TemplateRef<any>;

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

  get visible() {
    return this.isAttached;
  }

  @Output()
  visibleChange = new EventEmitter<boolean>();

  @Output()
  afterClose = new EventEmitter<any>();

  createPortal() {
    return new TemplatePortal(this.templateRef, this.viewContainerRef);
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
      .flexibleConnectedTo(this.target)
      .withPositions([{
        originX: this.originX,
        originY: this.originY,
        overlayX: this.overlayX,
        overlayY: this.overlayY,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
      }])
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
    this.afterClose.emit();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
