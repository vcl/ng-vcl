import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';
import { ComponentLayerRef, LayerRef, LayerService } from './../layer/layer.module';
import { GrowlComponent } from './growl.component';
import { GrowlOptions, GrowlPosition } from './types';
import { Growl } from './growl';

export abstract class GrowlLayer extends ComponentLayerRef<GrowlComponent> {
  component = GrowlComponent;
  transparent = true;
  offClickClose = false;

  abstract reverse: boolean;

  growls: Growl[] = [];

  add(growl: Growl) {
    growl.subscribe(() => {
      this.remove(growl);
    });

    this.growls = this.reverse ?  [growl, ...this.growls] : [...this.growls, growl];
    this.open({ growls: this.growls });

    return growl;
  }

  remove(growl: Growl) {
    this.growls = this.growls.filter(g => g !== growl);
    if (this.growls.length === 0) {
      this.close();
    } else {
      this.open({ growls: this.growls });
    }
  }
}

@Injectable()
export class GrowlLayerTopRight extends GrowlLayer {
  customClass = 'vclLayerGrowlTopRight';
  reverse = true;
};
@Injectable()
export class GrowlLayerTop extends GrowlLayer {
  customClass = 'vclLayerGrowlTop';
  reverse = true;
};
@Injectable()
export class GrowlLayerTopLeft extends GrowlLayer {
  customClass = 'vclLayerGrowlTopLeft';
  reverse = true;
};
@Injectable()
export class GrowlLayerBottomRight extends GrowlLayer {
  customClass = 'vclLayerGrowlBottomRight';
  reverse = false;
};
@Injectable()
export class GrowlLayerBottom extends GrowlLayer {
  customClass = 'vclLayerGrowlBottom';
  reverse = false;
};
@Injectable()
export class GrowlLayerBottomLeft extends GrowlLayer {
  customClass = 'vclLayerGrowlBottomLeft';
  reverse = false;
};
