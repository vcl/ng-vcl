import { Component, ViewChild } from '@angular/core';
import { Wormhole } from '../../../src/directives/wormhole';

@Component({
  templateUrl: 'wormhole.component.html'
})
export class WormholeComponent  {
  constructor() { }

  @ViewChild(Wormhole)
  source: Wormhole;
}
