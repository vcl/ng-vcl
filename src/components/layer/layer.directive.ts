import { Input, Directive, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { TemplateWormhole } from './../../directives/wormhole/wormhole.module';
import { LayerService } from './layer.service';
import { LayerRef, LayerData } from './layer.references';

export interface LayerData { [key: string]: any; }

@Directive({
  selector: '[vcl-layer]',
  exportAs: 'layer',
})
export class DirectiveLayerRef extends LayerRef {

  @Input()
  public modal: boolean = true;

  @Input()
  public offClickClose: boolean = true;

  @Input()
  public base: string = 'default';

  constructor(public templateRef: TemplateRef<any>, private layerService: LayerService, private cdRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.layerService.register(this);
  }

  ngOnDestroy() {
    this.layerService.unregister(this);
  }

  createWormhole() {
    return new TemplateWormhole(this.templateRef);
  }

  setData(data?: LayerData) {
    if (data && typeof data === 'object') {
      Object.assign(this, data);
      this.cdRef.detectChanges();
    }
  }
}
