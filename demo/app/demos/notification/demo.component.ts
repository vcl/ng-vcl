import {
  NotifierPosition,
  NotifierService,
  NotifierOptions,
} from '@vcl/ng-vcl';
import {
  Component,
  Input,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

let cnt = 1;

@Component({
    templateUrl: 'demo.component.html',
    standalone: false
})
export class NotificationDemoComponent {}
