import { InjectionToken } from '@angular/core';

export interface EmbeddedInputGroupHost {
  disabled: boolean;
  prepIcon?: string;
  appIcon?: string;
  hasAppendedItem: boolean;
}

export const EMBEDDED_INPUT_GROUP_TOKEN = new InjectionToken<EmbeddedInputGroupHost>('embedded-input-group');
