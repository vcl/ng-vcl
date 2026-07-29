import {
  Component,
  ChangeDetectorRef,
  ViewChild,
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  VCLFormFieldSchemaRating,
  VCLFormFieldSchemaRatingParams,
} from '../schemas';
import { VCLRatingComponent } from '../../rating/index';
import { FormFieldControl } from './field';
import { NgIf, NgFor } from '@angular/common';
import { FormControlGroupComponent } from '../../form-control-group/form-control-group.component';
import { EmbeddedInputFieldLabelDirective } from '../../input/embedded-label.directive';
import { VCLLabelDirective } from '../../core/label';
import { JssFormInputWrapperComponent } from '../jss-form-input-wrapper.component';
import { VCLRatingComponent as VCLRatingComponent_1 } from '../../rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VCLRatingItemComponent } from '../../rating/rating-item.component';
import { JssFormHintsComponent } from '../jss-form-hints.component';

export class FormFieldRating extends FormFieldControl<
  VCLFormFieldSchemaRating,
  VCLFormFieldSchemaRatingParams
> {
  get ratingItemCount(): number | undefined {
    return this.params.ratingItemCount || 5;
  }
  get ratingEmptyIcon(): string | undefined {
    return this.params.ratingEmptyIcon || 'vcl:star-empty';
  }
  get ratingHalfIcon(): string | undefined {
    return this.params.ratingHalfIcon || 'vcl:star-half';
  }
  get ratingFullIcon(): string | undefined {
    return this.params.ratingFullIcon || 'vcl:star';
  }
  get items() {
    return this.params.items || [];
  }
  get valueLabel() {
    return this.params.valueLabel;
  }
  protected createDefaultValue() {
    return null;
  }
}

@Component({
  selector: 'vcl-jss-form-rating',
  template: `
    <vcl-form-control-group
      *ngIf="field.visible"
      [errorStateAgent]="field.errorStateAgent">
      <vcl-label *ngIf="!!label">{{ label }}</vcl-label>
      <vcl-jss-form-input-wrapper>
        <vcl-rating
          #rating="vclRating"
          [ratingEmptyIcon]="field.ratingEmptyIcon"
          [ratingFullIcon]="field.ratingFullIcon"
          [ratingHalfIcon]="field.ratingHalfIcon"
          [ratingItemCount]="field.ratingItemCount"
          [formControl]="field.control">
          <vcl-rating-item *ngFor="let item of field.items">{{
            item
          }}</vcl-rating-item>
        </vcl-rating>
      </vcl-jss-form-input-wrapper>
      <vcl-jss-form-hints vclHint></vcl-jss-form-hints>
    </vcl-form-control-group>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgIf,
    FormControlGroupComponent,
    EmbeddedInputFieldLabelDirective,
    VCLLabelDirective,
    JssFormInputWrapperComponent,
    VCLRatingComponent_1,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    VCLRatingItemComponent,
    JssFormHintsComponent,
  ],
})
export class FormFieldRatingComponent implements AfterViewInit {
  constructor(
    public field: FormFieldRating,
    private cdRef: ChangeDetectorRef
  ) {
    field.stateChanged.subscribe(() => {
      cdRef.markForCheck();
    });
  }

  @ViewChild(VCLRatingComponent)
  rating: VCLRatingComponent;

  _valueLabel: string;

  ngAfterViewInit() {
    this.rating.labelChange.subscribe(label => {
      this.updateValueLabel(label);
    });
    this.updateValueLabel(this.rating.label);
  }

  updateValueLabel(label?: string) {
    if (this.field.valueLabel) {
      this._valueLabel = this.field.valueLabel(label);
    } else {
      this._valueLabel = undefined;
    }
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }

  get label() {
    return this._valueLabel || this.field.label;
  }
}
