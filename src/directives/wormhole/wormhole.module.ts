import { NgModule } from '@angular/core';
import { WormholeGenerator, Wormhole } from './wormhole.directive';

export { Wormhole, WormholeGenerator };

@NgModule({
  exports: [Wormhole, WormholeGenerator],
  declarations: [Wormhole, WormholeGenerator]
})
export class VCLWormholeModule { }
