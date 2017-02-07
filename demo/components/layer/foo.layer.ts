import { Layer, LayerRef } from './../../../src/index';
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

@Layer({
  component: FooComponent,
  modal: true
})
export class FooLayer extends LayerRef { }
