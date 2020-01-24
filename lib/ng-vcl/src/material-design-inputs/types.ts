import { InjectionToken } from '@angular/core';
import { FormControlInput } from '../form-control-group/index';
import { Subject } from 'rxjs';

export type MaterialMode = 'float' | 'static' | 'disabled';

export interface FormControlMaterialInput extends FormControlInput {
  readonly isLabelFloating: boolean;
  readonly materialModifierClass?: string;
}

export interface FormControlMaterialHost {
  registerInput(input: FormControlMaterialInput);
  readonly input?: FormControlMaterialInput;
  readonly mode: MaterialMode;
}

export const FORM_CONTROL_MATERIAL_HOST = new InjectionToken<FormControlMaterialHost>('vcl-form-control-material-host');
export const FORM_CONTROL_MATERIAL_INPUT = new InjectionToken<FormControlMaterialInput>('vcl-form-control-material-input');

export class FormControlGroupMaterialConfig {
  constructor(mode?: MaterialMode) {
    this._mode = mode || 'float';
  }

  private _mode: MaterialMode;
  private _modeChangeEmitter = new Subject<MaterialMode>();
  modeChange = this._modeChangeEmitter.asObservable();


  get mode() {
    return this._mode;
  }

  setMode(mode: MaterialMode) {
    this._mode = mode;
    this._modeChangeEmitter.next(mode);
  }

}
