import { Component, ChangeDetectionStrategy, HostBinding, Input, HostListener } from '@angular/core';

@Component({
  selector: 'button[vcl-button][busy]',
  templateUrl: 'button.busy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonBusyComponent {

  @HostBinding('class.vclDisabled')
  @HostBinding('attr.disabled')
  @Input()
  busy: boolean = false;

  @Input()
  busyIcon: string = 'fa:refresh fa-spin';

  @Input()
  busyIconPosition: 'app' | 'prep' = 'prep';

  @Input()
  title?: string;

  @Input()
  flexLabel?: boolean = false;

  @Input()
  label?: string;

  @HostBinding('attr.aria-label')
  get ariaLabel() {
    return this.title || this.label;
  }

  get prepIcon() {
    return (this.busy && this.busyIconPosition === 'prep') ? this.busyIcon : undefined;
  }

  get appIcon() {
    return (this.busy && this.busyIconPosition === 'app') ? this.busyIcon : undefined;
  }
}
