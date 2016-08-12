import { Component, Input } from '@angular/core';

@Component({
  selector: 'vcl-layer',
  templateUrl: 'layer.component.html'
})
export class LayerComponent {

  @Input()
  title: string = '';
}

