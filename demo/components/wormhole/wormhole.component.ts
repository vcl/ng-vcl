import { Component, ViewChild } from '@angular/core';
import { WormholeGenerator } from './../../../src/directives/wormhole/wormhole.module';

@Component({
  templateUrl: 'wormhole.component.html'
})
export class WormholeComponent {

  @ViewChild('myFirstWormhole')
  myFirstWormhole: WormholeGenerator;

  ngAfterViewInit() {
    console.log('myFirstWormhole', this.myFirstWormhole);
  }
}
