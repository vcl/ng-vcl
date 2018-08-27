import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html',
})
export class InputControlGroupDemoComponent implements OnInit {

  public type: string | undefined;
  public label: string;

  public email: string = '';
  public password1: string = '';
  public password2: string = '';

  ngOnInit() {
    this.update();
  }

  update() {
    if (this.email.length < 1) {
      this.type = 'error';
      this.label = 'Pleas enter a valid email.';
      return;
    }

    if (this.password1.length == 0 && this.password2.length == 0 ) {
      this.type = 'error';
      this.label = 'Pleas enter a password.';
      return;
    }

    if (this.password1 != this.password2) {
      this.type = 'error';
      this.label = 'Password is not matching.';
      return;
    }

    if (this.password1.length < 8) {
      this.type = 'warning';
      this.label = 'We are recommending to use passwords with at least 8 symbols.';
      return;
    }

    this.type = 'success';
    this.label = 'Everything is perfect!';
  }

}
