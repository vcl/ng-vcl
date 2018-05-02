import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ObservableComponent } from '../core/index';

@Component({
  selector: 'vcl-embedded-input-group',
  templateUrl: 'embedded-input-group.component.html',
  host: {
    '[class.vclInputGroupEmb]': 'true',
    '[style.display]': '"block"'
  }
})
export class EmbeddedInputGroupComponent extends ObservableComponent {

  @Input()
  disabled: boolean = false;

  @Input()
  prepIcon?: string;

  @Input()
  prepButtonIcon?: string;

  @Input()
  appendIcon?: string;

  @Input()
  appButtonIcon?: string;

  @Output()
  prepButtonTap: EventEmitter<Event> = new EventEmitter();

  @Output()
  appButtonTap: EventEmitter<Event> = new EventEmitter();
}
