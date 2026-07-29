import {
  Component,
  ChangeDetectionStrategy,
  Optional,
  Inject,
} from '@angular/core';
import { FormFieldControl } from './fields/field';
import { JSS_FORM_TOKEN, JssForm } from './types';
import { LayerDirective } from '../layer/layer.directive';
import { VCLPanelComponent } from '../panel/panel.component';
import {
  VCLPanelDialogDirective,
  VCLPanelTitleDirective,
  VCLPanelFooterButtonDirective,
} from '../panel/panel.directive';
import { NgIf } from '@angular/common';
import { VCLButtonComponent } from '../button/button.component';
import { VCLIconComponent } from '../icon/icon.component';

@Component({
  selector: 'vcl-jss-form-input-wrapper',
  templateUrl: 'jss-form-input-wrapper.component.html',
  styleUrls: ['jss-form-input-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LayerDirective,
    VCLPanelComponent,
    VCLPanelDialogDirective,
    NgIf,
    VCLPanelTitleDirective,
    VCLButtonComponent,
    VCLPanelFooterButtonDirective,
    VCLIconComponent,
  ],
})
export class JssFormInputWrapperComponent {
  constructor(
    @Inject(JSS_FORM_TOKEN)
    private jssForm: JssForm,
    @Optional()
    private field?: FormFieldControl<any>
  ) {}

  get help() {
    return this.field?.help;
  }

  get icon() {
    return this.help?.icon ?? this.jssForm.help?.icon ?? 'vcl:info';
  }

  get text() {
    return this.help?.text;
  }

  get title() {
    return this.help?.title;
  }

  get confirmButtonLabel() {
    return (
      this.help?.confirmButtonLabel ??
      this.jssForm.help?.confirmButtonLabel ??
      'OK'
    );
  }

  get layerWidth() {
    return this.help?.layerWidth ?? this.jssForm.help?.layerWidth ?? '25em';
  }
}
