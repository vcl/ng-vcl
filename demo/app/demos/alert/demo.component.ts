import { Observable } from 'rxjs';
import {
  AlertService,
  AlertType,
  AlertInput,
  VCLAlertModule,
  VCLButtonModule,
} from '@vcl/ng-vcl';
import { Component } from '@angular/core';
import { retryWhen, switchMap, tap } from 'rxjs/operators';

function createAsyncResult(
  data: any,
  error?: boolean | (() => any)
): Observable<any> {
  return new Observable(observer => {
    setTimeout(() => {
      const err = typeof error === 'function' ? error() : !!error;

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
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.scss'],
  imports: [VCLAlertModule, VCLButtonModule],
})
export class AlertDemoComponent {
  constructor(private alert: AlertService) {}

  message() {
    this.alert.alert('A message');
  }

  messageWithTitle() {
    this.alert.alert('A message', {
      title: 'A title',
    });
  }

  info() {
    this.alert.info('This is an information', {
      title: 'An information',
    });
  }

  success() {
    this.alert.success('You are successful', {
      title: 'A success',
    });
  }

  warning() {
    this.alert.warning('This is a warning', {
      title: 'A warning',
    });
  }

  error() {
    this.alert.error('This is an error', {
      title: 'An error',
    });
  }

  htmlMessage() {
    this.alert.alert(
      `Use <i>as much<i> <a href="//www.w3schools.com/html/">HTML</a> as you <b>like</b>`,
      {
        html: true,
      }
    );
  }

  custom() {
    this.alert.open({
      text: 'This is a bit customized...',
      title: 'Information',
      type: AlertType.Info,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonClass: 'suggestive',
      confirmButtonPrepIcon: 'vcl:bolt',
      cancelButtonColor: 'orange',
      customClass: 'scale130p',
    });
  }

  question() {
    this.alert
      .open({
        text: 'Do you really want to delete the file?',
        title: 'Delete file?',
        type: AlertType.Question,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonLabel: 'No',
        confirmButtonLabel: 'Yes',
      })
      .subscribe(result => {
        if (result.action === 'confirm') {
          this.alert.success('File deleted');
        } else {
          this.alert.error('Reason: ' + result.action, {
            title: 'File not deleted',
          });
        }
      });
  }

  async() {
    this.alert
      .open({
        text: 'Determine your user agent?',
        confirmAction: createAsyncResult(window.navigator.userAgent),
        showCancelButton: true,
      })
      .subscribe(result => {
        if (result.action === 'confirm') {
          this.alert.info(result.value, {
            title: 'Your user agent',
          });
        }
      });
  }

  inputText() {
    this.alert
      .open({
        text: 'What is your name?',
        input: AlertInput.Text,
        confirmButtonLabel: 'Next',
        inputValidator: value => {
          if (typeof value !== 'string' || value.length < 2) {
            throw new Error('Invalid name!');
          }
          return true;
        },
      })
      .subscribe(result => {
        if (result.action === 'confirm') {
          this.alert.info('Hello ' + result.value);
        }
      });
  }

  retry() {
    // This fake async request will fail the first time
    let fails = 0;
    const fakeAsync = createAsyncResult(
      new Date().toLocaleTimeString(),
      () => ++fails <= 1
    );

    // Add a retry routine using an alert
    const fakeAsyncWithRetries = fakeAsync.pipe(
      retryWhen(errors => {
        return errors.pipe(
          switchMap(err => {
            return this.alert
              .open({
                text: 'Retry?',
                type: AlertType.Warning,
                showCancelButton: true,
                closeOnBackdropClick: false,
                closeOnEscape: false,
              })
              .pipe(
                tap(result => {
                  if (result.action === 'cancel') {
                    throw new Error();
                  }
                })
              );
          })
        );
      })
    );

    this.alert
      .open({
        text: 'Show current time? (will fail the first time)',
        showCancelButton: true,
        confirmAction: fakeAsyncWithRetries,
      })
      .subscribe(result => {
        this.alert.info(result.value, { title: 'Time' });
      });
  }
}
