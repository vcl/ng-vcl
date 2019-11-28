# vcl-alert

Better javascript alert()

## Usage

```ts
@Component({ ... })
export class MyComponent {

  constructor(private alert: AlertService) {}

  message() {
    this.alert.success('Done!');
  }

  deleteFile() {
    this.alert.open({
      text: 'Do you really want to delete the file?',
      title: 'Delete file',
      type: AlertType.Question,
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonLabel: 'No',
      confirmButtonLabel: 'Yes'
    }).subscribe((result) => {
      if (result.action === 'confirm') {
        this.alert.success('File deleted');
      } else {
        this.alert.error('File not deleted');
      }
    });
  }

}
```

### Examples

```ts
// Simple message
this.alert.success('A message');

// Message with a title
this.alert.info('A message', {
  title: 'A title'
});

// HTML Message
this.alert.open({
  text: `Use <i>as much<i> <a href="//www.w3schools.com/html/">HTML</a> as you <b>like</b>`.
  html: true
});

// Customized info message
this.alert.open({
  title: 'Information',
  text: 'This is a bit customized...',
  type: AlertType.Info,
  showCloseButton: true,
  showCancelButton: true,
  confirmButtonClass: 'vclSuggestive',
  confirmButtonPrepIcon: 'fas:bolt',
  cancelButtonColor: 'orange',
  customClass: 'vclScale130p',
});

// Confirmation
this.alert.open({
  title: 'Delete file',
  text: 'Do you really want to delete the file?',
  type: AlertType.Question,
  showCloseButton: true,
  showCancelButton: true,
  cancelButtonLabel: 'No',
  confirmButtonLabel: 'Yes'
}).subscribe((result) => {
  if (result.action === 'confirm') {
    this.alert.success('File deleted');
  } else {
    this.alert.error('File not deleted');
  }
});

// Handling async data
this.alert.open({
  text: 'Fetch data?',
  confirmAction: this.http.get('/foo/data'),
  showCancelButton: true
}).subscribe(result => {
  if (result.action === 'confirm') {
    this.alert.info(result.value, { title: 'Your foo data' });
  } else if (result.action === 'error') {
    this.alert.error(err, { title: 'Could not fetch data' });
  }
});

// With an input element
this.alert.open({
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
});
```

### Some helper methods

```ts
alert(text: string, opts?: AlertOptions); // Just the message
info(text: string, opts?: AlertOptions); // Message with AlertType.Info
success(text: string, opts?: AlertOptions); // Message with AlertType.Success
warning(text: string, opts?: AlertOptions); // Message with AlertType.Warning
error(text: string, opts?: AlertOptions); // Message with AlertType.Error
question(text: string, opts?: AlertOptions); // Message with AlertType.Question and showCancelButton=true
```

### API

#### Alert Attributes

All attributes are optional

| Name                    | Type           | Default         | Description
| ----------------------- | -------------- | --------------- | --------------
| `text`                    | string         |                 | The main message
| `title`                   | string         |                 | A title
| `html`                    | boolean        | false           | Treats the main message as html when `true`
| `type`                    | AlertType      | None            | The type. Defines color and icon.
| `modal`                   | boolean        | true            | Allow closing via ESC and offclick if true
| `customClass`             | string         |                 | A custom css class for the alert modal
| `showConfirmButton`       | boolean        | true            | Show the confirmation button
| `showCancelButton`        | boolean        | false           | Show the cancel button
| `showCloseButton`         | boolean        | false           | Show the close button
| `confirmButtonLabel`      | string         | 'OK'            | Changes the confirm button label
| `confirmButtonClass`      | string         | 'emphasized'    | Adds a class to the confirm button
| `confirmButtonPrepIcon`   | string         |                 | icon to be prepended to the confirm button label
| `confirmButtonAppIcon`    | string         |                 | same as `confirmButtonPrepIcon`, but appended
| `cancelButtonLabel`       | string         | 'Cancel'        | Changes the cancel button label
| `cancelButtonClass`       | string         | 'danger'        | Adds a class to the cancel button
| `cancelButtonPrepIcon`    | string         |                 | icon to be prepended to the cancel button label
| `cancelButtonAppIcon`     | string         |                 | same as `cancelButtonPrepIcon`, but appended
| `cancelButtonThrowsError` | boolean        |                 | Throw an error instead of passing a result on cancel
| `confirmAction`           | Observable     |                 | Enables loader and subscribes to observable. Closes alert when the observable completes or errors.
| `input`                   | AlertInput     | None            | Input element
| `inputValue`              | any            |                 | Default value for the input
| `inputPlaceholder`        | string         |                 | A placeholder. Shown in the input element when using AlertInput.Text
| `inputValidator`          | function       |                 | Input validator callback

#### Enums

```ts
export enum AlertType {
  None,
  Question,
  Info,
  Success,
  Warning,
  Error
}

export enum AlertInput {
  None,
  Text
}
```
