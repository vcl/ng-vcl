import { Component, ViewChild, Input } from '@angular/core';
import { TemplateWormhole, ComponentWormhole } from './../../../src/directives/wormhole/wormhole.module';

@Component({
  template: '<p>I am a component with the value {{value}}</p>'
})
export class MyComponent {
  @Input()
  value: string;
}

@Component({
  templateUrl: 'wormhole.component.html'
})
export class WormholeComponent {

  @ViewChild('myFirstWormhole')
  myFirstTemplateWormhole: TemplateWormhole;

  // Create a component wormhole
  myFirstComponentWormhole: ComponentWormhole<MyComponent> = new ComponentWormhole(MyComponent, {
    data: {
      value: 'foo'
    }
  });
}
