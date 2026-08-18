import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  VCLFormFieldSchemaSelect,
  VCLFormFieldSchemaSelectParams,
} from '../schemas';
import { FormFieldControl } from './field';

import { VCLFormControlGroupComponent } from '../../form-control-group/form-control-group.component';
import { EmbeddedInputFieldLabelDirective } from '../../input/embedded-label.directive';
import { VCLLabelDirective, VCLSubLabelDirective } from '../../core/label';
import { JssFormInputWrapperComponent } from '../jss-form-input-wrapper.component';
import { VCLSelectComponent } from '../../select/select.component';
import { VCLSelectListComponent } from '../../select-list/select-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VCLSelectListItemComponent } from '../../select-list/components/select-list-item.component';
import { JssFormHintsComponent } from '../jss-form-hints.component';

export class FormFieldSelect extends FormFieldControl<
  VCLFormFieldSchemaSelect,
  VCLFormFieldSchemaSelectParams
> {
  get selectionMode(): 'multiple' | 'single' {
    return this.params.selectionMode || 'single';
  }
  get placeholder() {
    return this.params.placeholder || '';
  }
  get search() {
    return this.params.search || false;
  }
  get searchValue() {
    return this.params.searchValue || false;
  }
  get maxHeight() {
    return this.params.maxHeight || undefined;
  }
  get emptyComponent() {
    return this.params.emptyComponent || undefined;
  }
  get options() {
    return this.params.options || [];
  }
  get clearable() {
    return this.params.clearable || false;
  }
  protected createDefaultValue() {
    return this.selectionMode === 'single' ? null : [];
  }
}

@Directive({ selector: '[vclEmptyHost]' })
export class EmptyDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

@Component({
  selector: 'vcl-jss-form-select',
  template: `
    @if (field.visible) {
      <vcl-form-control-group [errorStateAgent]="field.errorStateAgent">
        @if (!!field.label) {
          <vcl-label>{{ field.label }}</vcl-label>
        }
        <vcl-jss-form-input-wrapper>
          <vcl-select
            [placeholder]="field.placeholder"
            [search]="field.search"
            [maxHeight]="field.maxHeight"
            [clearable]="field.clearable">
            <ng-container empty #empty>
              <ng-template vclEmptyHost></ng-template>
            </ng-container>
            <vcl-select-list
              [formControl]="field.control"
              [selectionMode]="field.selectionMode"
              [searchValue]="field.searchValue">
              @for (option of field.options; track option) {
                <vcl-select-list-item [value]="option.value">
                  <vcl-label>{{ option.label }}</vcl-label>
                  @if (option.sublabel) {
                    <vcl-sub-label>{{ option.sublabel }}</vcl-sub-label>
                  }
                </vcl-select-list-item>
              }
            </vcl-select-list>
          </vcl-select>
        </vcl-jss-form-input-wrapper>
        <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
      </vcl-form-control-group>
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    VCLFormControlGroupComponent,
    EmbeddedInputFieldLabelDirective,
    VCLLabelDirective,
    JssFormInputWrapperComponent,
    VCLSelectComponent,
    EmptyDirective,
    VCLSelectListComponent,
    FormsModule,
    ReactiveFormsModule,
    VCLSelectListItemComponent,
    VCLSubLabelDirective,
    JssFormHintsComponent,
  ],
})
export class FormFieldSelectComponent implements AfterViewInit {
  @ViewChild(EmptyDirective, { static: false })
  emptyHost!: EmptyDirective;

  constructor(public field: FormFieldSelect) {}

  ngAfterViewInit() {
    if (this.field.emptyComponent) {
      this.emptyHost.viewContainerRef.clear();
      if (typeof this.field.emptyComponent === 'object') {
        const ref = this.emptyHost.viewContainerRef.createComponent(
          this.field.emptyComponent.component
        );
        ref.instance.data = this.field.emptyComponent.data;
      } else {
        this.emptyHost.viewContainerRef.createComponent(
          this.field.emptyComponent
        );
      }
    }
  }
}
