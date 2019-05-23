import { Component, Injector, Injectable, Inject, forwardRef, HostBinding } from '@angular/core';
import { LayerRef, LayerConfig } from '@ng-vcl/ng-vcl';
import { Overlay } from '@angular/cdk/overlay';

export interface NagLayerData {
  allowDecline: boolean;
}

export interface NagLayerResult {
  accept: boolean;
}

@Component({
  templateUrl: 'nag.component.html',
  styles: [`:host { width: 100%; }`]
})
export class NagComponent {
  // Utilize forwardRef to avoid using NagLayer before it was declared
  constructor(@Inject(forwardRef(() => NagLayer)) public layer: NagLayer) { }

  @HostBinding('class.vclNag')
  @HostBinding('class.vclContainer')
  @HostBinding('class.vclLayoutHorizontal')
  @HostBinding('class.vclLayoutCenterJustified')
  _hostClasses = true;

  accept() {
    this.layer.close({
      accept: true
    });
  }

  decline() {
    this.layer.close({
      accept: false
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class NagLayer extends LayerRef<NagLayerData, NagLayerResult> {

  constructor(injector: Injector, private overlay: Overlay) {
    super(injector);
  }

  templateOrComponent = NagComponent;

  getLayerConfig(): LayerConfig {
    return new LayerConfig({
      closeOnEscape: false,
      hasBackdrop: false,
      width: '100%',
      positionStrategy: this.overlay.position()
        .global()
        .bottom()
        .centerHorizontally()
    });
  }


}
