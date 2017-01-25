import { Component, ViewChild, Input, ViewContainerRef } from '@angular/core';
import { TemplateWormhole, ComponentWormhole, WormholeRef } from './../../../src/directives/wormhole/wormhole.module';

@Component({
  template: '<p>I am a component rendered {{value}}</p>'
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
  myFirstTemplateWormhole: TemplateWormhole;


  // Component wormhole 1
  componentWormhole = new ComponentWormhole(MyComponent);                 // Create a component wormhole
  componentWormholeData = { value: 'via the connectWormhole directive' }; // and the initial data


  // Component wormhole 2

  // The reference to when connection to a ViewContainerRef
  compWormholeRef: WormholeRef;

  // This is the target where the component will be rendered
  @ViewChild('target', {read: ViewContainerRef}) target;

  ngAfterViewInit() {
    // Create a wormhole 
    const componentWormhole = new ComponentWormhole(MyComponent);
    // and connect it
    this.compWormholeRef = componentWormhole.connect(this.target, {
      value: 'by connecting to a ViewContainerRef'
    });
  }

  ngOnDestroy() {
    if (this.compWormholeRef) {
      this.compWormholeRef.disconnect();
    }
  }
}
