import { Component } from '@angular/core';
import { VCLFormFieldSchemaRating } from '../../schemas';
import { registerControlField } from '../registry';
import { FormFieldControl } from './control';

export class FormFieldRating extends FormFieldControl<VCLFormFieldSchemaRating> {
  type: 'rating';
  get label() {
    return this.schema.label;
  }
  get ratingItemCount(): number | undefined  {
    return this.schema.ratingItemCount || 5;
  }
  get ratingEmptyIcon(): string | undefined  {
    return this.schema.ratingEmptyIcon || 'vcl:star-empty';
  }
  get ratingHalfIcon(): string | undefined  {
    return this.schema.ratingHalfIcon || 'vcl:star-half';
  }
  get ratingFullIcon(): string | undefined  {
    return this.schema.ratingFullIcon || 'vcl:star';
  }
  get items() {
    return this.schema.items || [];
  }
  createLabel(label: string) {
    if (typeof this.label === 'function') {
      return this.label(label);
    }
    return this.label;
  }
  protected createDefaultValue() {
    return undefined;
  }
}

@Component({
  template: `
    <vcl-form-control-group>

      <ng-container *ngIf="rating.labelChange | async as label">
      <label *ngIf="!!field.createLabel(label)" vclFormControlLabel>{{field.createLabel(label)}}</label>
      </ng-container>
      <vcl-rating #rating="vclRating" [ratingEmptyIcon]="field.ratingEmptyIcon"
                  [ratingFullIcon]="field.ratingFullIcon" [ratingHalfIcon]="field.ratingHalfIcon" [ratingItemCount]="field.ratingItemCount" [formControl]="field.control" [errorStateAgent]="field.errorStateAgent">
        <vcl-rating-item *ngFor="let item of field.items">{{item}}</vcl-rating-item>
      </vcl-rating>
      <vcl-jss-form-hints></vcl-jss-form-hints>
    </vcl-form-control-group>
  `
})
export class FormFieldRatingComponent {
  constructor(public field: FormFieldRating) { }

}

registerControlField('rating', FormFieldRatingComponent, FormFieldRating);
