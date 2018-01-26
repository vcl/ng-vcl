import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  HostBinding
} from '@angular/core';

import { LabelComponent } from '../label/label.component';

@Component({
  selector: '[vcl-badge], vcl-badge',
  templateUrl: 'badge.component.html',
  host: {
    '[class.vclBadge]': 'true'
  }
})
export class BadgeComponent extends LabelComponent {

}
