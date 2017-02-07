import { Component, ViewChild, Input, ViewContainerRef } from '@angular/core';
import { Wormhole, createWormhole } from '@ng-vcl/ng-vcl';

@Component({
  template: '<p>I am a component. And this is my <b>{{value}}</b></p>'
})
export class MyComponent {
  @Input()
  value: string;
}

@Component({
  templateUrl: 'wormhole.component.html'
})
export class WormholeComponent {


  // Template wormhole
  @ViewChild('myFirstWormhole')
  myFirstTemplateWormhole: any;


  // Component wormhole

  // The reference to when connection to a ViewContainerRef
  componentWormhole: Wormhole;

  // This is the target where the component will be rendered
  @ViewChild('target', { read: ViewContainerRef }) target;

  ngAfterViewInit() {
    // Create a wormhole
    this.componentWormhole = createWormhole(this.target, MyComponent);
    // and connect it
    this.componentWormhole.connect({
      attrs: {
        value: 'value'
      }
    });
  }

  ngOnDestroy() {
    if (this.componentWormhole) {
      this.componentWormhole.disconnect();
    }
  }
}
