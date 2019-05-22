import { PositionStrategy } from '@angular/cdk/overlay';
import { TemplateRef, ViewContainerRef, Component, ViewChild, OnDestroy, EventEmitter, Output, Input, Injector, ChangeDetectionStrategy } from '@angular/core';
import { LayerConfig } from './config';
import { LayerRef } from './layer-ref';

@Component({
  selector: 'vcl-layer',
  templateUrl: 'layer.component.html',
  exportAs: 'vclLayer',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerComponent extends LayerRef implements OnDestroy {
  constructor(
    private viewContainerRef: ViewContainerRef,
    injector: Injector
  ) {
    super(injector);
  }

  @Input()
  positionStrategy?: PositionStrategy;

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

  open(config?: LayerConfig) {
    const inputConfig: LayerConfig = {};

    if (this.positionStrategy !== undefined) {
      inputConfig.positionStrategy = this.positionStrategy;
    }
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
