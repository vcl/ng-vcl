import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { AlertService, AlertType, AlertError, AlertAlignment, AlertInput } from './../../../src/components/alert/alert.module';
import { Component } from '@angular/core';

function async(data: any, error: boolean | Function): Observable<any> {
  return Observable.create(observer => {
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

  constructor(private alert: AlertService, private http: Http) {}


  message() {
    this.alert.show('A message');
  }

  messageWithTitle() {
    this.alert.show('A message', 'A title');
  }

  success() {
    this.alert.success('You are successful', 'Success');
  }

  warning() {
    this.alert.warning('This is a warning', 'Warning');
  }

  htmlMessage() {
    this.alert.show({
      html: `Use <i>as much<i> <a href="//www.w3schools.com/html/">HTML</a> as you <b>like</b>`
    });
  }

  info() {
    this.alert.show({
      title: 'Information',
      text: 'This is a bit customized...',
      type: AlertType.Info,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonClass: 'vclSuggestive',
      confirmButtonPrepIcon: 'fa:bolt',
      cancelButtonColor: 'orange',
      customClass: 'vclScale130p',
      titleAlignment: AlertAlignment.Center,
      contentAlignment: AlertAlignment.Center,
      buttonAlignment: AlertAlignment.Center,
    });
  }

  question() {
    this.alert.show({
      title: 'Delete file',
      text: 'Do you really want to delete the file?',
      type: AlertType.Question,
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonLabel: 'No',
      confirmButtonLabel: 'Yes'
    }).subscribe((result) => {
      this.alert.success('File deleted');
    }, err => {
      this.alert.error('Reason: ' + err.reason , 'File not deleted');
    });
  }

  loader() {
    this.alert.show({
      title: 'Loading',
      text: 'Hit esc to close loader',
      loader: true,
      showConfirmButton: false
    });
  }

  async() {
    this.alert
        .show({
          text: 'Determine your user agent?',
          loaderOnConfirm: true,
          showCancelButton: true
        })
        .switchMap(result => {
          return async(window.navigator.userAgent, false);
        }).subscribe(ip => {
          this.alert.info(ip, 'Your user agent');
        }, err => {
          this.alert.error('Could not determine user agent');
        });
  }

  inputText() {
    this.alert.show({
      text: 'What is your name?',
      input: AlertInput.Text,
      confirmButtonLabel: 'Next',
      inputValidator: (value) => {
        if (typeof value !== 'string' || value.length < 2) {
          throw 'This is not your name!';
        }
        return true;
      }
    }).subscribe(result => {
      this.alert.info('Hello ' + result.value);
    }, this.alert.noop);
  }

  retry() {
    // Fail 2 times
    let fails = 0;
    const fakeAsync = async(new Date().toLocaleTimeString(), () => {
      fails++;
      return fails <= 2;
    });

    this.alert
        .show({
          text: 'Show current time? (Fails twice)',
          loaderOnConfirm: true,
          showCancelButton: true
        })
        .switchMap(result => {
          return fakeAsync.retryWhen(errors => {
            return errors.switchMap(err => {
              return this.alert.show({
                text: 'Retry?',
                type: AlertType.Warning,
                showCancelButton: true,
                loaderOnConfirm: true,
              });
            });
          });
        })
        .subscribe(time => {
          this.alert.info(time, 'Time');
        }, err => {
          this.alert.error(String(err ? err.reason : err), 'Error');
        });
  }

}
