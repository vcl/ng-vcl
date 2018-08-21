import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'vcl-input-control-group, [vcl-input-control-group]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'input-control-group.component.html'
})
export class InputControlGroup {

  @Input()
  type: 'error' | 'warning' | 'success' | undefined;

  @Input()
  label: string;

  @HostBinding('class.vclInputInlineControlGroup')
  @Input()
  inline = false;

  @HostBinding('class.vclInputControlGroup')
  get notInline() {
    return !this.inline;
  }
}
