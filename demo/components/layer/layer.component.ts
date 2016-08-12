import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'layer.component.html'
})
export class LayerComponent implements OnInit {

  layerOpen: boolean = false;

  constructor() { }

  ngOnInit() { }

  closeLayer() {
    this.layerOpen = false;
  }

  openLayer() {
    this.layerOpen = true;
  }
}