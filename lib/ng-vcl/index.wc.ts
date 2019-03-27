import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Injector} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {createCustomElement} from '@angular/elements';
import {VCLFlipSwitchModule, FlipSwitchComponent, BusyIndicatorComponent, VCLBusyIndicatorModule} from './index';

@NgModule({
  imports: [BrowserModule, VCLFlipSwitchModule, VCLBusyIndicatorModule],
  entryComponents: [FlipSwitchComponent, BusyIndicatorComponent]
})
export class WSModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    let elm = createCustomElement(FlipSwitchComponent, {injector: this.injector});
    customElements.define('vcl-flip-switch', elm);

    elm = createCustomElement(BusyIndicatorComponent, {injector: this.injector});
    customElements.define('vcl-busy-indicator', elm);
  }
}

platformBrowserDynamic().bootstrapModule(WSModule)
  .catch(err => console.error(err));
