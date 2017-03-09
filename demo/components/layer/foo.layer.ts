import { Layer, LayerRef } from '@ng-vcl/ng-vcl';
import { Component, Input, Injectable } from '@angular/core';

@Component({
  templateUrl: 'foo.layer.html',
})
export class FooComponent {

  @Input()
  title: string;

  constructor(private layerRef: LayerRef) { }

  close() {
    this.layerRef.close('close');
  }

  send() {
    this.layerRef.send('send');
  }
}

@Layer(FooComponent)
export class FooLayer extends LayerRef { 
  modal = true;
}
