import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'vcl-modal-body',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalBodyComponent { }
