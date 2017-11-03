import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { WormholeHost } from '@ng-vcl/ng-vcl';

@Component({
  selector: 'vcl-notification-content-component',
  templateUrl: 'notification-content.component.html'
})
export class VCLNotificationContentComponent {

  @Input() wormholeComponentDetails: any;

  @ViewChild('wormholeHost', {read: ViewContainerRef})
  set target(vcRef: ViewContainerRef) {
    this.host = new WormholeHost(vcRef);
  }

  host: WormholeHost;

  ngAfterViewInit() {
    this.host.connectWormhole(this.wormholeComponentDetails.contentComponentClass, this.wormholeComponentDetails.attributes);
  }

}
