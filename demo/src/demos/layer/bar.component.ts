import { LayerRef } from '@ng-vcl/ng-vcl';
import { Component, Input } from '@angular/core';

@Component({
  templateUrl: 'bar.component.html'
})
export class BarComponent {

  @Input()
  title: string;

  constructor(private layerRef: LayerRef) { }

  onClose() {
    this.layerRef.close('close');
  }

  onSend() {
    this.layerRef.send('send');
  }
}
