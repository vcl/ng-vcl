import { Component, Injector, Injectable, Inject, forwardRef, HostBinding } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentLayerRef, LayerConfig } from '@ng-vcl/ng-vcl';

export interface NagLayerData {
  allowDecline: boolean;
}

export interface NagLayerResult {
  accept: boolean;
}

export interface INagLayer extends ComponentLayerRef<NagLayerData, NagLayerResult, NagComponent> {
  nag(): void;
}

@Component({
  templateUrl: 'nag.component.html',
  styles: [`:host { width: 100%; }`]
})
export class NagComponent {
  // Inject the ComponentLayerRef and use an interface for typings
  // Injecting with forwardRef(() => NagLayer) would result in an `Cannot access 'NagLayer' before initialization` at runtime when targeting es2015
  // See https://github.com/angular/angular/issues/30106
  constructor(@Inject(ComponentLayerRef) public layer: INagLayer) { }

  @HostBinding('class.nag')
  @HostBinding('class.container')
  @HostBinding('class.row')
  @HostBinding('class.justify-center')
  _hostClasses = true;

  accept() {
    this.layer.nag();
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
export class NagLayer extends ComponentLayerRef<NagLayerData, NagLayerResult, NagComponent> implements INagLayer {


  constructor(injector: Injector, private overlay: Overlay) {
    super(injector);
  }

  component = NagComponent;

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

  nag(): void {
    console.log('Nag...');
  }
}
