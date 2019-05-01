import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';

export interface IconResolver {
  resolve(icon: string): string | undefined;
}

export interface IconAliases {
  'close': string;
  'busy': string;
  'box':  string;
  'box-checked':  string;
  'circle':  string;
  'circle-checked':  string;
  'question': string;
  'info': string;
  'success': string;
  'warning': string;
  'error': string;
  'arrow-left': string;
  'arrow-right': string;
  'upload': string;
  'eye': string;
  'eye-off': string;
  'star': string;
  'star-half': string;
  'star-empty': string;
}

export abstract class IconResolverService implements IconResolver {
  abstract priority: number;
  abstract resolve(icon: string): string;
}

// The default icon resolver replaces icons prefixed with `vcl`. Usually you should provide only one default icon resolver in your app
export abstract class VCLIconResolverServiceBase implements IconResolverService {
  abstract priority;

  private VCL_REGEX = /^vcl:([a-z0-9-_]+)$/;

  resolve(icon: string) {
    const result =  this.VCL_REGEX.exec(icon);
    if (result) {
      const [s, alias] = result;
      return this.lookup(alias) || undefined;
    }
    return undefined;
  }

  abstract lookup(alias: string): string | undefined;
}
