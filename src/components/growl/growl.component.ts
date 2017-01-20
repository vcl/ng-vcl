import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ComponentWormhole } from './../../directives/wormhole/wormhole';
import { Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Injectable, HostListener, Input, Output, EventEmitter, ViewEncapsulation, trigger, state, transition, animate, style } from '@angular/core';
import { GrowlOptions, GROWL_DEFAULTS, GrowlType, TYPE_CLASS_MAP } from './types';
import { Growl } from './growl';
import { LayerRef, LayerService } from './../layer/layer.module';

@Component({
  templateUrl: 'growl.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
     .vclLayerGrowlTopRight { left: auto; bottom: auto; top: 1em; right: 1em; }
     .vclLayerGrowlTop { left: 0; bottom: auto; top: 1em; right: 0; }
     .vclLayerGrowlTopLeft { left: 1em; bottom: auto; top: 1em; right: auto; }
     .vclLayerGrowlBottomRight { left: auto; bottom: 1em; top: auto; right: 1em; }
     .vclLayerGrowlBottom { left: 0; bottom: 1em; top: auto; right: 0; }
     .vclLayerGrowlBottomLeft { left: 1em; bottom: 1em; top: auto; right: auto; }
    `
  ],
  animations: [
    trigger('growlState', [
      state('visible' , style({ opacity: 0.91 })),
      state('hovered' , style({ opacity: 1.0 })),
      state('void' , style({ opacity: 0 })),

      // TODO: leave animation not working
      // layer needs some changes so it destroys the wormhole comp instead of removing it

      // transition('void => *', [
      //   animate('200ms ease-in')
      // ]),
      // transition('* => void', [
      //   animate('200ms ease-out', style({ opacity: 0 }))
      // ]),
      transition('visible <=> hovered', animate('300ms'))
    ])
    // trigger('enter', [
      // state('*', style({opacity: 1})),
      // transition(':enter', [
      //   style({opacity: 0}),
      //   animate('0.2s 0.5s ease-out')
      // ]),
      // transition(':leave', [
      //   animate(5000, style({opacity: 0}))
      // ])
  // ])
  ]
  // host: {
  //   '[@enter]': 'true'
  // },
})
export class GrowlComponent  {
  @Input()
  growls = [];

  constructor(private cdRef: ChangeDetectorRef) { }

  markForCheck() {
    this.cdRef.markForCheck();
  }

}
