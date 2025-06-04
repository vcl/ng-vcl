import { Injector } from '@angular/core';

export class PortalInjector implements Injector {
  constructor(
    private _parentInjector: Injector,
    private _customTokens: WeakMap<any, any>
  ) {}

  get(token: any, notFoundValue?: any): any {
    const value = this._customTokens.get(token);

    if (typeof value !== 'undefined') {
      return value;
    }

    return this._parentInjector.get<any>(token, notFoundValue);
  }
}
