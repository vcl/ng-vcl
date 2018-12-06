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
  onButtonTap(button) {
    switch (button) {
      case 'cancel':
        console.log('cancel button was pressed');
        this.closeDeleteModal();
        break;
      case 'delete':
        console.log('delete button was pressed');
        this.closeDeleteModal();
        break;
      case 'close':
        console.log('close button was pressed');
        this.closeDialogModal();
        break;
    }
  }

  @ViewChild('modalDialog')
  modalDialog: any;

  openDialogModal() {
    this.modalDialog.open();
  }

  closeDialogModal() {
    this.modalDialog.close();
  }

  onDialogButtonTap(button) {
    switch (button) {
      case 'close':
        console.log('close button was pressed');
        this.closeDialogModal();
        break;
      case 'send':
        console.log('send button was pressed');
        this.closeDialogModal();
        break;
    }
  }

}
