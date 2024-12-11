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
import { LayerConfig } from './types';
import { TemplateLayerRef } from './layer-ref';

@Directive({
    selector: '[vclLayer]',
    exportAs: 'vclLayer',
    standalone: false
})
export class LayerDirective extends TemplateLayerRef implements OnDestroy {
  constructor(
    injector: Injector,
    public templateRef: TemplateRef<any>,
    public viewContainerRef: ViewContainerRef
  ) {
    super(injector);
  }

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

  // tslint:disable-next-line:no-output-rename
  @Output('afterDetached')
  afterDetachedOutput = new EventEmitter<any>();

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

  ngOnDestroy(): void {
    this.destroy();
  }
}
