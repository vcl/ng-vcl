import { Component, ViewChild } from '@angular/core';
import { TemplateWormhole, ComponentWormhole } from './../../../src/directives/wormhole/wormhole.module';

@Component({
  template: '<p>I am a component</p>'
})
export class MyComponent { }

@Component({
  templateUrl: 'wormhole.component.html'
})
export class WormholeComponent {

  @ViewChild('myFirstWormhole')
  myFirstTemplateWormhole: TemplateWormhole;

  // Create a component wormhole
  myFirstComponentWormhole: ComponentWormhole<MyComponent> = new ComponentWormhole(MyComponent);
}
