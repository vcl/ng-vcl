import { Injectable } from '@angular/core';

export interface OverlayManagedComponent {
  zIndex: number;
}

@Injectable()
export class OverlayManagerService {

  private components: any[] = [];

  constructor() {}

  register(component: OverlayManagedComponent) {

    let zIndex = 100;
    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i].zIndex >= zIndex) {
        zIndex = this.components[i].zIndex;
      }
    }
    this.components.push(component);
    return zIndex + 10;
  }

  unregister(component: OverlayManagedComponent) {
    let index = this.components.indexOf(component);
    this.components.splice(index, 1);
    return -1;
  }
}

