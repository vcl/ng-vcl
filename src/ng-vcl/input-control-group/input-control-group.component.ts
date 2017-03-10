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
export class InputControlGroup implements OnInit {


  @Input('type')
  type: 'error' | 'warning' | 'success' | null = null;

  @Input('label')
  label: string;

  constructor(private elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit() { }
  ngOnChanges(changes: any) { }

  ngOnDestroy() { }

  ucfirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
