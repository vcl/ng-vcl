import { PositionStrategy } from '@angular/cdk/overlay';
import { TemplateRef, ViewContainerRef, Component, ViewChild, OnDestroy, EventEmitter, Output, Input, Injector, ChangeDetectionStrategy } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { LayerOptions } from './interfaces';
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
  position?: PositionStrategy;

  @Input()
  modal = false;

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

  open(opts: LayerOptions = {}) {
    return super.open({
      modal: this.modal,
      position: this.position,
      ...opts
    });
  }

  createPortal() {
    return new TemplatePortal(this.templateRef, this.viewContainerRef);
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
