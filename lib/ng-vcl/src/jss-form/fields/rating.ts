import {
  Component,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { RatingComponent } from '../../rating/index';
import {
  VCLFormFieldSchemaRating,
  VCLFormFieldSchemaRatingParams,
} from '../schemas';

import { FormFieldControl } from './field';

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
})
export class FormFieldRatingComponent implements AfterViewInit {
  @ViewChild(RatingComponent)
  rating: RatingComponent;

  get label() {
    return this._valueLabel || this.field.label;
  }

  _valueLabel: string;

  constructor(public field: FormFieldRating, private cdRef: ChangeDetectorRef) {
    field.stateChanged.subscribe(() => {
      cdRef.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.rating.labelChange.subscribe(label => {
      this.updateValueLabel(label);
    });
    this.updateValueLabel(this.rating.label);
  }

  updateValueLabel(label?: string) {
    this._valueLabel = this.field.valueLabel
      ? this.field.valueLabel(label)
      : undefined;
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }
}
