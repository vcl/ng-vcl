import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';
import { LayerService, Layer, LayerRef } from './../layer/index';
import { GrowlComponent } from './growl.component';
import { GrowlOptions, GrowlPosition } from './types';
import { Growl } from './growl';

export abstract class GrowlLayer<T> extends LayerRef {
  transparent = true;
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

  offClick() {

  }
}

@Layer(GrowlComponent)
export class GrowlLayerTopRight extends GrowlLayer<GrowlComponent> {
  customClass = 'vclLayerGrowlTopRight';
  reverse = true;
};
@Layer(GrowlComponent)
export class GrowlLayerTop extends GrowlLayer<GrowlComponent> {
  customClass: 'vclLayerGrowlTop';
  reverse = true;
};
@Layer(GrowlComponent)
export class GrowlLayerTopLeft extends GrowlLayer<GrowlComponent> {
  customClass = 'vclLayerGrowlTopLeft';
  reverse = true;
};
@Layer(GrowlComponent)
export class GrowlLayerBottomRight extends GrowlLayer<GrowlComponent> {
  customClass = 'vclLayerGrowlBottomRight';
  reverse = false;
};
@Layer(GrowlComponent)
export class GrowlLayerBottom extends GrowlLayer<GrowlComponent> {
  customClass = 'vclLayerGrowlBottom';
  reverse = false;
};
@Layer(GrowlComponent)
export class GrowlLayerBottomLeft extends GrowlLayer<GrowlComponent> {
  customClass = 'vclLayerGrowlBottomLeft';
  reverse = false;
};
