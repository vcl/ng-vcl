import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'vcl-panel-dialog',
    standalone: false
})
export class PanelDialogDirective {
  @HostBinding('class.panel-dialog')
  hostClasses = true;
}

@Directive({
    selector: 'vcl-panel-title',
    standalone: false
})
export class PanelTitleDirective {
  @HostBinding('class.panel-title')
  @HostBinding('class.flex')
  @HostBinding('class.mx-3')
  hostClasses = true;
}

@Directive({
    selector: 'button[vclPanelFooterButton]',
    standalone: false
})
export class PanelFooterButtonDirective {
  hostClasses = true;
}

@Directive({
    selector: 'vcl-panel-header',
    standalone: false
})
export class PanelHeaderDirective {
  @HostBinding('class.panel-header')
  hostClasses = true;
}

@Directive({
    selector: 'vcl-panel-footer',
    standalone: false
})
export class PanelFooterDirective {
  @HostBinding('class.panel-footer')
  hostClasses = true;
}
