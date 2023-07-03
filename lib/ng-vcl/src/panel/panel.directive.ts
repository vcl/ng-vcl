import { Directive, HostBinding } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'vcl-panel-dialog',
})
export class PanelDialogDirective {
  @HostBinding('class.panel-dialog')
  hostClasses = true;
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'vcl-panel-title',
})
export class PanelTitleDirective {
  @HostBinding('class.panel-title')
  @HostBinding('class.flex')
  @HostBinding('class.mx-3')
  hostClasses = true;
}

@Directive({
  selector: 'button[vclPanelFooterButton]',
})
export class PanelFooterButtonDirective {
  hostClasses = true;
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'vcl-panel-header',
})
export class PanelHeaderDirective {
  @HostBinding('class.panel-header')
  hostClasses = true;
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'vcl-panel-footer',
})
export class PanelFooterDirective {
  @HostBinding('class.panel-footer')
  hostClasses = true;
}
