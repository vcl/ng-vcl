import { Component, ViewChild, Input, ViewContainerRef, AfterViewInit, OnDestroy } from '@angular/core';
import { WormholeHost } from '@ng-vcl/ng-vcl';

@Component({
  template: '<p>I am a component. And this is my <b>{{value}}</b></p>'
})
export class MyComponent {
  @Input()
  value: string;
}

@Component({
  templateUrl: 'demo.component.html'
})
export class WormholeDemoComponent implements AfterViewInit, OnDestroy {

  // Template wormhole
  @ViewChild('myFirstWormhole')
  myFirstTemplateWormhole: any;


  // Component wormhole

  // This is the target where the component will be rendered
  @ViewChild('target', { read: ViewContainerRef })
  set target(vcRef: ViewContainerRef) {
    this.host =  new WormholeHost(vcRef);
  }

  host: WormholeHost;

  ngAfterViewInit() {
    // Create and connect wormhole
    this.host.connectWormhole(MyComponent, {
      value: 'value'
    });
  }

  ngOnDestroy() {
    if (this.host) {
      this.host.clearWormholes();
    }
  }
}
