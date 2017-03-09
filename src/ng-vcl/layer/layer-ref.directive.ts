import { Input, TemplateRef, ChangeDetectorRef, Directive, ViewContainerRef } from '@angular/core';
import { LayerService } from './layer.service';
import { LayerRef } from './layer-ref';

@Directive({
  selector: '[vcl-layer]',
  exportAs: 'layer',
})
export class LayerRefDirective extends LayerRef {

  @Input()
  base: string = 'default';

  @Input()
  modal: boolean;

  @Input()
  transparent: boolean;

  @Input()
  fill: boolean;

  @Input()
  stickToBottom: boolean;

  @Input()
  gutterPadding: boolean;

  @Input()
  customClass: string;

  constructor(public templateRef: TemplateRef<any>, private layerService: LayerService) {
    super();
  }

  ngOnInit() {
    this.layerService.register(this);
  }

  ngOnDestroy() {
    this.layerService.unregister(this);
  }
}

