import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Injector} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {createCustomElement} from '@angular/elements';
import {
  VCLFlipSwitchModule,
  FlipSwitchComponent,
  BusyIndicatorComponent,
  VCLBusyIndicatorModule,
  ButtonComponent,
  VCLButtonModule,
  ButtonIconComponent,
  VCLFontAwesomeModule,
  ButtonIcogramComponent,
} from './index';

@NgModule({
  imports: [BrowserModule, VCLFlipSwitchModule, VCLBusyIndicatorModule, VCLButtonModule, VCLFontAwesomeModule],
  entryComponents: [FlipSwitchComponent, BusyIndicatorComponent, ButtonComponent, ButtonIcogramComponent]
})
export class WSModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    let elm = createCustomElement(FlipSwitchComponent, {injector: this.injector});
    customElements.define('vcl-flip-switch', elm);

    elm = createCustomElement(BusyIndicatorComponent, {injector: this.injector});
    customElements.define('vcl-busy-indicator', elm);

    elm = createCustomElement(ButtonComponent, {injector: this.injector});
    customElements.define('vcl-button', elm, {
      extends: 'button'
    });

    elm = createCustomElement(ButtonIconComponent, {injector: this.injector});
    customElements.define('vcl-icon-button', elm, {
      extends: 'button'
    });

    elm = createCustomElement(ButtonIcogramComponent, {injector: this.injector});
    customElements.define('vcl-icogram-button', elm, {
      extends: 'button'
    });
  }
}

platformBrowserDynamic().bootstrapModule(WSModule)
  .catch(err => console.error(err));

