import {
  OnInit, Component, Input,
  ViewChildren,
  EventEmitter, Output, HostListener, ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'vcl-input-control-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.vclInputControlGroup]': 'true',
  },
  templateUrl: 'input-control-group.component.html'
})
export class InputControlGroup {

  @Input('type')
  type: 'error' | 'warning' | 'success' | undefined;

  @Input('label')
  label: string;

  constructor(private elRef: ElementRef) {
    this.elRef = elRef;
  }

  ucfirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
