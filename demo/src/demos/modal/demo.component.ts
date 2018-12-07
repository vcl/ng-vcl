import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class ModalDemoComponent {
  @ViewChild('modalDelete')
  modalDelete: any;

  openDeleteModal() {
    this.modalDelete.open();
  }

  closeDeleteModal() {
    this.modalDelete.close();
  }

  @ViewChild('modalDialog')
  modalDialog: any;

  openDialogModal() {
    this.modalDialog.open();
  }

  closeDialogModal() {
    this.modalDialog.close();
  }
}
