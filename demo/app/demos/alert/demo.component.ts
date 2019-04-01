import { Observable } from 'rxjs';
import { AlertService, AlertType, AlertAlignment, AlertInput } from '@ng-vcl/ng-vcl';
import { Component } from '@angular/core';
import { retryWhen, switchMap } from 'rxjs/operators';

function createAsyncResult(data: any, error?: boolean | Function): Observable<any> {
  return new Observable(observer => {
    setTimeout(() => {
      let err;
      if (typeof error === 'function') {
        err = error();
      } else {
        err = !!error;
      }

      if (err) {
        observer.error(data);
      } else {
        observer.next(data);
        observer.complete();
      }
    }, 1000);
  });
}

@Component({
  templateUrl: 'demo.component.html'
})
export class AlertDemoComponent {

  constructor(private alert: AlertService) {}

  message() {
    this.alert.alert('A message');
  }

  messageWithTitle() {
    this.alert.alert('A message', {
      title: 'A title'
    });
  }

  info() {
    this.alert.info('This is an information', {
      title: 'An information'
    });
  }

  success() {
    this.alert.success('You are successful', {
      title: 'A success'
    });
  }

  warning() {
    this.alert.warning('This is a warning', {
      title: 'A warning'
    });
  }

  error() {
    this.alert.error('This is an error', {
      title: 'An error'
    });
  }

  htmlMessage() {
    this.alert.alert(`Use <i>as much<i> <a href="//www.w3schools.com/html/">HTML</a> as you <b>like</b>`, {
      html: true
    });
  }

  custom() {
    this.alert.open({
      text: 'This is a bit customized...',
      title: 'Information',
      type: AlertType.Info,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonClass: 'vclSuggestive',
      confirmButtonPrepIcon: 'fas:bolt',
      cancelButtonColor: 'orange',
      customClass: 'vclScale130p',
      titleAlignment: AlertAlignment.Center,
      contentAlignment: AlertAlignment.Center,
      buttonAlignment: AlertAlignment.Center,
    });
  }

  question() {
    this.alert.open({
      text: 'Do you really want to delete the file?',
      title: 'Delete file?',
      type: AlertType.Question,
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonLabel: 'No',
      confirmButtonLabel: 'Yes'
    }).subscribe((result) => {
      if (result.action === 'confirm') {
        this.alert.success('File deleted');
      } else {
        this.alert.error('Reason: ' + result.action , { title: 'File not deleted' });
      }
    });
  }

  loader() {
    this.alert.open({
      title: 'Loading',
      text: 'Hit esc to close loader',
      loader: true,
      showConfirmButton: false
    });
  }

  async() {
    this.alert.open({
      text: 'Determine your user agent?',
      confirmAction: createAsyncResult(window.navigator.userAgent),
      showCancelButton: true
    }).subscribe(result => {
      console.log(result);
      if (result.action === 'confirm') {
        this.alert.info(result.value, {
          title: 'Your user agent'
        });
      }


    }, err => {
      // this.alert.error('Could not determine user agent');
    });
  }

  inputText() {
    this.alert.open({
      text: 'What is your name?',
      input: AlertInput.Text,
      confirmButtonLabel: 'Next',
      inputValidator: (value) => {
        if (typeof value !== 'string' || value.length < 2) {
          throw new Error('This is not your name!');
        }
        return true;
      }
    }).subscribe(result => {
      if (result.action === 'confirm') {
        this.alert.info('Hello ' + result.value);
      }
    }, this.alert.noop);
  }

  retry() {
    // This fake async request will fail the first time
    let fails = 0;
    const fakeAsync = createAsyncResult(new Date().toLocaleTimeString(), () => ++fails <= 1);

    // Add a retry routine using an alert
    const fakeAsyncWithRetries = fakeAsync.pipe(
      retryWhen(errors => {
        return errors.pipe(switchMap(err => {
          return this.alert.open({
            text: 'Retry?',
            type: AlertType.Warning,
            showCancelButton: true,
            cancelButtonThrowsError: true,
            offClickClose: false
          });
        }));
      }));

    this.alert.open({
      text: 'Show current time? (will fail the first time)',
      showCancelButton: true,
      confirmAction: fakeAsyncWithRetries,
      cancelButtonThrowsError: true,
      closeThrowsError: true
    }).subscribe(result => {
      this.alert.info(result.value, { title: 'Time' });
    }, err => { });
  }

}
