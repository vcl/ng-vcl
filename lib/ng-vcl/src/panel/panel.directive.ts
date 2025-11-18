import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'vcl-panel-dialog',
})
export class VCLPanelDialogDirective {
  @HostBinding('class.panel-dialog')
  hostClasses = true;
}

@Directive({
  selector: 'vcl-panel-title',
})
export class VCLPanelTitleDirective {
  @HostBinding('class.panel-title')
  @HostBinding('class.flex')
  @HostBinding('class.mx-3')
  hostClasses = true;
}

@Directive({
  selector: 'button[vclPanelFooterButton]',
})
export class VCLPanelFooterButtonDirective {
  hostClasses = true;
}

@Directive({
  selector: 'vcl-panel-header',
})
export class VCLPanelHeaderDirective {
  @HostBinding('class.panel-header')
  hostClasses = true;
}

@Directive({
  selector: 'vcl-panel-footer',
})
export class VCLPanelFooterDirective {
  @HostBinding('class.panel-footer')
  hostClasses = true;
}
