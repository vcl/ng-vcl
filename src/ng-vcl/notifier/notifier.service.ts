import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, ComponentRef } from '@angular/core';

import { NotifierOptions, NotifierType, NotifierPosition, NOTIFIER_DEFAULTS, POSITION_MAP } from './types';
import { Notifier } from './notifier';
import { LayerService, LayerRef } from "../layer/index";
import { NotifierComponent } from "./notifier.component";

export class NotifierLayerRef extends LayerRef {
  notifiers: Notifier[];
}

@Injectable()
export class NotifierService {

  constructor(private ls: LayerService) { }

  layers = new Map<NotifierPosition, NotifierLayerRef>();

  show(text: string, opts: NotifierOptions = {}) {
    return this.queue({ text }, opts);
  }

  info(text: string, opts: NotifierOptions = {}) {
    return this.queue({ text, type: NotifierType.Info }, opts);
  }

  success(text: string, opts: NotifierOptions = {}) {
    return this.queue({ text, type: NotifierType.Success }, opts);
  }

  warning(text: string, opts: NotifierOptions = {}) {
    return this.queue({ text, type: NotifierType.Warning }, opts);
  }

  error(text: string, opts: NotifierOptions = {}) {
    return this.queue({ text, type: NotifierType.Error }, opts);
  }

  private queue(...opts: NotifierOptions[]) {
    const notifierOpts: NotifierOptions = Object.assign({}, NOTIFIER_DEFAULTS, ...opts);
    const notifier = new Notifier(notifierOpts);

    const pos = notifierOpts.position || NotifierPosition.TopRight;
    const reverse = POSITION_MAP[pos].reverse;

    if (!this.layers.has(pos)) {
      const layerRef = this.ls.create(NotifierComponent, {
        transparent: true,
        customClass: POSITION_MAP[pos].class
      }) as NotifierLayerRef;
      layerRef.notifiers = [];
      this.layers.set(pos, layerRef);
    }

    const layer = this.layers.get(pos);

    if (layer) {
      notifier.subscribe(() => {
        layer.notifiers = layer.notifiers.filter(g => g !== notifier);
        if (layer.notifiers.length === 0) {
          layer.close();
        } else {
          layer.open({ notifiers: layer.notifiers });
        }
      });
      layer.notifiers = reverse ?  [notifier, ...layer.notifiers] : [...layer.notifiers, notifier];
      layer.open({ notifiers: layer.notifiers });
    }
  }
}
