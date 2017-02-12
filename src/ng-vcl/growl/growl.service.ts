import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, ComponentRef } from '@angular/core';

import { GrowlOptions, GrowlType, GrowlPosition, GROWL_DEFAULTS } from './types';
import { Growl } from './growl';
import { GrowlLayerTopRight, GrowlLayerBottomRight, GrowlLayerBottom, GrowlLayerBottomLeft, GrowlLayerTopLeft, GrowlLayerTop } from './growl.layer';

@Injectable()
export class GrowlService {

  constructor(
    private growlLayerTopRightRef: GrowlLayerTopRight,
    private growlLayerBottomRightRef: GrowlLayerBottomRight,
    private growlLayerBottomRef: GrowlLayerBottom,
    private growlLayerBottomLeftRef: GrowlLayerBottomLeft,
    private growlLayerTopLeftRef: GrowlLayerTopLeft,
    private growlLayerTopRef: GrowlLayerTop,
  ) { }

  growl(text: string, opts: GrowlOptions = {}) {
    return this.queue({ text }, opts);
  }

  info(text: string, opts: GrowlOptions = {}) {
    return this.queue({ text, type: GrowlType.Info }, opts);
  }

  success(text: string, opts: GrowlOptions = {}) {
    return this.queue({ text, type: GrowlType.Success }, opts);
  }

  warning(text: string, opts: GrowlOptions = {}) {
    return this.queue({ text, type: GrowlType.Warning }, opts);
  }

  error(text: string, opts: GrowlOptions = {}) {
    return this.queue({ text, type: GrowlType.Error }, opts);
  }

  private queue(...opts: GrowlOptions[]) {
    const growlOpts: GrowlOptions = Object.assign({}, GROWL_DEFAULTS, ...opts);
    const growl = new Growl(growlOpts);

    if (growlOpts.position === GrowlPosition.TopRight) {
      this.growlLayerTopRightRef.add(growl);
    } else if (growlOpts.position === GrowlPosition.BottomRight) {
      this.growlLayerBottomRightRef.add(growl);
    } else if (growlOpts.position === GrowlPosition.Bottom) {
      this.growlLayerBottomRef.add(growl);
    } else if (growlOpts.position === GrowlPosition.BottomLeft) {
      this.growlLayerBottomLeftRef.add(growl);
    } else if (growlOpts.position === GrowlPosition.TopLeft) {
      this.growlLayerTopLeftRef.add(growl);
    } else if (growlOpts.position === GrowlPosition.Top) {
      this.growlLayerTopRef.add(growl);
    } else {
      this.growlLayerTopRightRef.add(growl);
    }
    return growl;
  }
}
