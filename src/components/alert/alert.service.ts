import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { LayerDirective, LayerBaseComponent } from './layer.component';
import { Injectable, EmbeddedViewRef, Output, EventEmitter, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

interface VisibleLayers { [key: string]: LayerDirective[]; };

@Injectable()
export class AlertService {

}
