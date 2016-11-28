import {
  OnInit, Component, Input,
  ViewChildren,
  EventEmitter, Output, HostListener, ElementRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'vcl-input-control-group',
  host: {
    '[class.vclInputControlGroup]': 'true',
  },
  templateUrl: 'input-control-group.component.html'
})
export class InputControlGroup implements OnInit {


  @Input('message')
  message: Observable<{
    type: 'error' | 'warning' | 'success', value: string
  }>;

  type$; value$; classname$; classes$;
  sub;

  constructor(private elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit() {
    this.type$ = this.message.map(msg => msg.type);
    this.value$ = this.message.map(msg => msg.value);
    this.classname$ = this.type$.map(t => {
      if (!t) return '';
      return 'vcl' + this.ucfirst(t);
    });
    this.classes$ = this.classname$.map(name => 'vclFormControlHint ' + name);

    this.sub = this.classname$.subscribe(newClassname => {
      let els: any[] = Array.from(this.elRef.nativeElement.children)
        .slice(0, -1); // remove last el because it is the message-box
      els = els.filter(el => el.classList.contains('vclInput')); // TODO add more
      els.forEach(el => {
        el.classList.remove('vclError');
        el.classList.remove('vclWarning');
        el.classList.remove('vclSuccess');
        console.log('new classname: ' + newClassname);
        if (newClassname != '') el.classList.add(newClassname);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ucfirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
