import { Component, ViewChild } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class ModalDemoComponent {
  @ViewChild('modalDelete')
  modalDelete: any;

  @ViewChild('modalDialog')
  modalDialog: any;

  openDeleteModal() {
    this.modalDelete.open();
  }

  closeDeleteModal() {
    this.modalDelete.close();
  }

  openDialogModal() {
    this.modalDialog.open();
  }

  closeDialogModal() {
    this.modalDialog.close();
  }
}
