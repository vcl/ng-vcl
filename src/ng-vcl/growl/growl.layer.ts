import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';
import { LayerService, Layer, LayerRef } from './../layer/layer.module';
import { GrowlComponent } from './growl.component';
import { GrowlOptions, GrowlPosition } from './types';
import { Growl } from './growl';

export abstract class GrowlLayer<T> extends LayerRef {

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
      // this.open({ growls: this.growls });
    } else {
      this.open({ growls: this.growls });
    }
  }
}

@Injectable()
@Layer({
  component: GrowlComponent,
  transparent: true,
  offClickClose: false,
  customClass: 'vclLayerGrowlTopRight'
})
export class GrowlLayerTopRight extends GrowlLayer<GrowlComponent> {
  reverse = true;
};
@Injectable()
@Layer({
  component: GrowlComponent,
  transparent: true,
  offClickClose: false,
  customClass: 'vclLayerGrowlTop'
})
export class GrowlLayerTop extends GrowlLayer<GrowlComponent> {
  reverse = true;
};
@Injectable()
@Layer({
  component: GrowlComponent,
  transparent: true,
  offClickClose: false,
  customClass: 'vclLayerGrowlTopLeft'
})
export class GrowlLayerTopLeft extends GrowlLayer<GrowlComponent> {
  reverse = true;
};
@Injectable()
@Layer({
  component: GrowlComponent,
  transparent: true,
  offClickClose: false,
  customClass: 'vclLayerGrowlBottomRight'
})
export class GrowlLayerBottomRight extends GrowlLayer<GrowlComponent> {
  reverse = false;
};
@Injectable()
@Layer({
  component: GrowlComponent,
  transparent: true,
  offClickClose: false,
  customClass: 'vclLayerGrowlBottom'
})
export class GrowlLayerBottom extends GrowlLayer<GrowlComponent> {
  reverse = false;
};
@Injectable()
@Layer({
  component: GrowlComponent,
  transparent: true,
  offClickClose: false,
  customClass: 'vclLayerGrowlBottomLeft'
})
export class GrowlLayerBottomLeft extends GrowlLayer<GrowlComponent> {
  reverse = false;
};
