import {
  TemplateRef,
  OnDestroy,
  EventEmitter,
  Output,
  Input,
  Injector,
  ViewContainerRef,
  Directive,
} from '@angular/core';

import { TemplateLayerRef } from './layer-ref';
import { LayerConfig } from './types';

@Directive({
  selector: '[vclLayer]',
  exportAs: 'vclLayer',
})
export class LayerDirective extends TemplateLayerRef implements OnDestroy {
  @Input('vclLayer')
  config?: LayerConfig;

  @Input()
  set visible(visible: boolean) {
    if (visible) {
      this.open();
    } else {
      this.close();
    }
  }

  createLayerConfig(config: LayerConfig) {
    return super.createLayerConfig(this.config, config);
  }

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('afterDetached')
  afterDetachedOutput = new EventEmitter<any>();

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('afterAttached')
  afterAttachedOutput = new EventEmitter();

  @Output()
  visibleChange = new EventEmitter<boolean>();

  protected afterDetached(result: any): void {
    super.afterDetached(result);
    this.visibleChange.emit(this.visible);
    this.afterDetachedOutput.emit(result);
  }

  protected afterAttached(): void {
    super.afterAttached();
    this.visibleChange.emit(this.visible);
    this.afterAttachedOutput.emit();
  }

  constructor(
    injector: Injector,
    public templateRef: TemplateRef<any>,
    public viewContainerRef: ViewContainerRef
  ) {
    super(injector);
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
