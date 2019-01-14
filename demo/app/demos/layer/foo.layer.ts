import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Layer, LayerRef, WormholeEvent } from '@ng-vcl/ng-vcl';

@Component({
  templateUrl: 'foo.layer.html'
})
export class FooComponent {

  @Input()
  title: string;

  @Output()
  close = new EventEmitter();

  @Output()
  send = new EventEmitter<string>();

  onClose() {
    this.close.emit();
  }

  onSend() {
    this.send.emit('send');
  }
}

@Layer(FooComponent, {
  modal: true,
  events: ['close', 'send']
})
export class FooLayer extends LayerRef {

  event(event: WormholeEvent) {
    switch (event.type) {
      case 'close':
        this.close();
        break;
      case 'send':
        this.send('send');
        break;
    }
  }
}
