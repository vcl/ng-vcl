import { Component } from '@angular/core';
import { ComponentLayerRef } from '@vcl/ng-vcl';

@Component({
    selector: 'app-create-country',
    template: `
    <vcl-panel-dialog [showCloseButton]="true" (close)="close()">
      <vcl-panel-title>Add Kitten</vcl-panel-title>

      <vcl-form-control-group>
        <vcl-label>Name</vcl-label>
        <vcl-input-field>
          <input vclInput [(ngModel)]="name" />
        </vcl-input-field>
      </vcl-form-control-group>

      <vcl-form-control-group>
        <vcl-label>Description</vcl-label>
        <vcl-input-field>
          <input vclInput [(ngModel)]="description" />
        </vcl-input-field>
      </vcl-form-control-group>

      <button (click)="save()" vcl-button vclPanelFooterButton>Save</button>

      <button (click)="close()" vcl-button vclPanelFooterButton class="transparent outline">
        Cancel
      </button>
    </vcl-panel-dialog>
  `,
    standalone: false
})
export class CreateCountryComponent {
  name = '';
  description = '';

  constructor(private layer: ComponentLayerRef) {}

  save() {
    this.layer.close({
      value: {
        name: this.name,
        description: this.description,
      },
    });
  }

  close() {
    this.layer.close();
  }
}
