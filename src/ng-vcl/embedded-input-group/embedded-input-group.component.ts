import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
import { ObservableComponent } from '../core/index';

@Component({
  selector: 'vcl-embedded-input-group, [vcl-embedded-input-group]',
  templateUrl: 'embedded-input-group.component.html',
  host: {
    '[class.vclInputGroupEmb]': 'true',
    '[style.display]': '"block"'
  }
})
export class EmbeddedInputGroupComponent extends ObservableComponent {

  change$ = this.observeChanges('prependIcon', 'prependButtonIcon', 'appendIcon').map(() => undefined);

  @Input()
  prependIcon?: string;

  @Input()
  prependButtonIcon?: string;

  @Input()
  appendIcon?: string;

  @Input()
  appendButtonIcon?: string;

  @Output()
  prependButtonTap: EventEmitter<Event> = new EventEmitter();

  @Output()
  appendButtonTap: EventEmitter<Event> = new EventEmitter();
}
