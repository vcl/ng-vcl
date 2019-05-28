import { TemplateRef, Component, ViewChild, OnDestroy, EventEmitter, Output, Input, Injector, ChangeDetectionStrategy, ElementRef, ViewContainerRef } from '@angular/core';
import { Overlay, ConnectedPosition } from '@angular/cdk/overlay';
import { LayerConfig, TemplateLayerRef } from '../layer/index';

@Component({
  selector: 'vcl-popover',
  templateUrl: 'popover.component.html',
  exportAs: 'vclPopover',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverComponent extends TemplateLayerRef implements OnDestroy {
  constructor(
    injector: Injector,
    public viewContainerRef: ViewContainerRef,
    private overlay: Overlay
  ) {
    super(injector);
  }

  @Input()
  closeOnEscape?: boolean;

  @Input()
  target?: ElementRef | HTMLElement;

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

  get templateOrComponent() {
    return this.templateRef;
  }

  // tslint:disable-next-line:no-output-rename
  @Output('afterClose')
  afterCloseOutput = this.afterClose;

  @Output()
  visibleChange = new EventEmitter<boolean>();

  @ViewChild(TemplateRef)
  protected templateRef: TemplateRef<any>;

  getLayerConfig(): LayerConfig {
    return new LayerConfig({
      closeOnBackdropClick: false,
      closeOnEscape: false,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      panelClass: 'vclPopOver',
      positionStrategy: this.overlay.position()
      .flexibleConnectedTo(this.target)
      .withPositions(this.positions || [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
      }])
    });
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

  protected afterDetached(result: any): void {
    super.afterDetached(result);
    this.visibleChange.emit(this.visible);
  }

  protected afterAttached(): void {
    super.afterAttached();
    this.visibleChange.emit(this.visible);
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
