import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/never';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/skipWhile';
import { Subject } from 'rxjs/Subject';
import { NotificationOptions, NOTIFICATION_DEFAULTS, NotificationType, TYPE_CLASS_MAP } from './types';


export class Notification extends Observable<any> {

  closeSubject = new Subject();

  constructor(private opts: NotificationOptions) {
    super();

    const timeout = this.calculatedTimeout;
    const timeout$ = typeof timeout === 'number' ?
                       Observable.interval(timeout).skipWhile(() => this.state === 'hovered') :
                       Observable.never();

    this.source = Observable.merge(this.closeSubject, timeout$).first();
  }

  state = 'visible';

  close() {
    this.closeSubject.next();
  }

  mouseEnter() {
    this.state = 'hovered';
  }

  mouseLeave() {
    this.state = 'active';
  }

  get text() {
    return this.opts.text;
  }

  get html() {
    return this.opts.html;
  }

  get showCloseButton() {
    return this.opts.showCloseButton;
  }

  get backgroundColor() {
    return this.opts.backgroundColor;
  }

  get textColor() {
    return this.opts.textColor;
  }

  get layerClass() {
    return TYPE_CLASS_MAP[this.opts.type || NotificationType.None].notificationClass;
  }

  get iconClass() {
    return TYPE_CLASS_MAP[this.opts.type || NotificationType.None].iconClass;
  }

  get calculatedTimeout() {
    if (typeof this.opts.timeout === 'number') {
      return this.opts.timeout;
    } else if (typeof this.opts.timeout === 'boolean' && !this.opts.timeout) {
      return null;
    } else if (!this.opts.html && typeof this.opts.text === 'string') {
      // avg reading speed per min (WPM): 19
      // min 4 secs
      const wordCnt = this.opts.text.split(/\s+/).length;
      return Math.min((wordCnt / 19) * 60 * 1000, 4000);
    } else if (this.opts.html) {
      return 5000;
    } else {
      return 4000;
    }
  }
}
