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


  @Input('type') type: 'error' | 'warning' | 'success' = null;
  @Input('label') label: string;


  /*  @Input('message')
    message: Observable<{
      type: 'error' | 'warning' | 'success', value: string
    }>;
    type$; value$; classname$; classes$;
    sub;
  */

  constructor(private elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit() {


    // TODO(dmeyer) this is commented out because i will switch from passing streams to the default 2-way-binding
    /*
        if (!this.message) return;

        this.type$ = this.message.map(msg => msg.type || null);
        this.value$ = this.message.map(msg => msg.value || null);
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
            if (newClassname != '') el.classList.add(newClassname);
          });
        });
    */

  }

  ngOnDestroy() {
    // if (this.sub) this.sub.unsubscribe();
  }

  ucfirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
