import { TemplateRef, Component, ViewChild, OnDestroy, EventEmitter, Output, Input, Injector, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';
import { LayerConfig } from './types';
import { TemplateLayerRef } from './layer-ref';

@Component({
  selector: 'vcl-layer',
  templateUrl: 'layer.component.html',
  exportAs: 'vclLayer',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerComponent extends TemplateLayerRef implements OnDestroy {
  constructor(
    injector: Injector,
    public viewContainerRef: ViewContainerRef
  ) {
    super(injector);
  }

  @Input()
  config?: LayerConfig;

  @Input()
  closeOnBackdropClick?: boolean;

  @Input()
  closeOnEscape?: boolean;

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
    return this.config || super.getLayerConfig();
  }

  open(config?: LayerConfig) {
    const inputConfig: LayerConfig = {};

    if (this.closeOnBackdropClick !== undefined) {
      inputConfig.closeOnBackdropClick = this.closeOnBackdropClick;
    }
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
