import { Component } from '@angular/core';

@Component({
  templateUrl: 'token.component.html'
})
export class TokenComponent {

  toggleSelect: boolean = true;
  doToggleSelect() {
    this.toggleSelect = !this.toggleSelect;
  }

  removeAlert() {
    window.alert('removed');
  }

  tokenList = [
    {
      label: 'alice',
      selected: false
    },
    {
      label: 'bob',
      selected: false
    },
    {
      label: 'carol',
      selected: false
    },
    {
      label: 'dave',
      selected: false
    }
  ];

  tokenList2 = [
    {
      label: 'alice',
      selected: false
    },
    {
      label: 'bob',
      selected: false
    },
    {
      label: 'carol',
      selected: false
    },
    {
      label: 'dave',
      selected: false
    }
  ];

  changed(e) {
    console.log('changed');
    console.dir(e);
  }

}
