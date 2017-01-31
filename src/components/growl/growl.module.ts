import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from './../icogram/icogram.module';
import { VCLButtonModule } from './../button/button.module';
import { VCLLayerModule } from './../layer/layer.module';
import { VCLInputModule } from './../input/input.module';
import { GrowlComponent } from './growl.component';
import { GrowlLayerTopRight, GrowlLayerBottomRight, GrowlLayerBottom, GrowlLayerBottomLeft, GrowlLayerTopLeft, GrowlLayerTop } from './growl.layer';
import { GrowlService } from './growl.service';
import { Growl } from './growl';
import { GrowlOptions, GrowlType, GrowlPosition } from './types';

export { Growl, GrowlService, GrowlOptions, GrowlType, GrowlPosition };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    VCLButtonModule,
    VCLLayerModule.withConfig({
      layers: [ GrowlLayerTopRight, GrowlLayerBottomRight, GrowlLayerBottom, GrowlLayerBottomLeft, GrowlLayerTopLeft, GrowlLayerTop ]
    })
  ],
  exports: [],
  declarations: [ GrowlComponent ],
  entryComponents: [ GrowlComponent ],
  providers: [ GrowlService ],
})
export class VCLGrowlModule { }
