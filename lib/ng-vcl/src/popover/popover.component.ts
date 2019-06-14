import { TemplateRef, Component, ViewChild, OnDestroy, EventEmitter, Output, Input, Injector, ChangeDetectionStrategy, ElementRef, ViewContainerRef, HostBinding } from '@angular/core';
import { Overlay, ConnectedPosition } from '@angular/cdk/overlay';
import { LayerConfig, TemplateLayerRef } from '../layer/index';

@Component({
  selector: 'vcl-popover',
  templateUrl: 'popover.component.html',
  exportAs: 'vclPopover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      display: none;
    }
  `]
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
  panelClass = 'vclPopOver';

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

  // tslint:disable-next-line:no-output-rename
  @Output('afterClose')
  afterCloseOutput = this.afterClose;

  @Output()
  visibleChange = new EventEmitter<boolean>();

  @ViewChild(TemplateRef)
  protected templateRef: TemplateRef<any>;

  getLayerConfig(): LayerConfig {
    if (!this.target) {
      throw new Error('Popover has no target');
    }

    return new LayerConfig({
      hasBackdrop: false,
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
    this.visibleChange.emit(this.visible);
  }

  protected afterAttached(): void {
    this.visibleChange.emit(this.visible);
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
