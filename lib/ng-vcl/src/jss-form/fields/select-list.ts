import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLFormFieldSchemaSelect,
  VCLFormFieldSchemaSelectParams,
} from '../schemas';
import { FormFieldControl } from './field';

import { FormControlGroupComponent } from '../../form-control-group/form-control-group.component';
import { EmbeddedInputFieldLabelDirective } from '../../input/embedded-label.directive';
import { VCLLabelDirective, VCLSubLabelDirective } from '../../core/label';
import { JssFormInputWrapperComponent } from '../jss-form-input-wrapper.component';
import { VCLSelectListComponent } from '../../select-list/select-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VCLSelectListItemComponent } from '../../select-list/components/select-list-item.component';
import { JssFormHintsComponent } from '../jss-form-hints.component';

export class FormFieldSelectList extends FormFieldControl<
  VCLFormFieldSchemaSelect,
  VCLFormFieldSchemaSelectParams
> {
  get selectionMode(): 'multiple' | 'single' {
    return this.params.selectionMode || 'single';
  }
  get options() {
    return this.params.options || [];
  }
  protected createDefaultValue() {
    return this.selectionMode === 'single' ? null : [];
  }
}

@Component({
  selector: 'vcl-jss-form-select-list',
  template: `
    @if (field.visible) {
      <vcl-form-control-group [errorStateAgent]="field.errorStateAgent">
        @if (!!field.label) {
          <vcl-label>{{ field.label }}</vcl-label>
        }
        <vcl-jss-form-input-wrapper>
          <vcl-select-list
            [formControl]="field.control"
            [selectionMode]="field.selectionMode">
            @for (option of field.options; track option) {
              <vcl-select-list-item
                [value]="option.value"
                [searchValue]="option.searchValue">
                <vcl-label>{{ option.label }}</vcl-label>
                @if (option.sublabel) {
                  <vcl-sub-label>{{ option.sublabel }}</vcl-sub-label>
                }
              </vcl-select-list-item>
            }
          </vcl-select-list>
        </vcl-jss-form-input-wrapper>
        <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
      </vcl-form-control-group>
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormControlGroupComponent,
    EmbeddedInputFieldLabelDirective,
    VCLLabelDirective,
    JssFormInputWrapperComponent,
    VCLSelectListComponent,
    FormsModule,
    ReactiveFormsModule,
    VCLSelectListItemComponent,
    VCLSubLabelDirective,
    JssFormHintsComponent,
  ],
})
export class FormFieldSelectListComponent {
  constructor(public field: FormFieldSelectList) {}
}
