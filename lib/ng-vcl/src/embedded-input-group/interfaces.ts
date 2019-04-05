import { InjectionToken } from '@angular/core';

export interface EmbeddedInputGroup {
  disabled: boolean;
  prepIcon?: string;
  appIcon?: string;
  hasAppendedItem: boolean;
}

export const EMBEDDED_INPUT_GROUP_TOKEN = new InjectionToken<EmbeddedInputGroup>('embedded-input-group');
