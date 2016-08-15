import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { OverlayManagerService, OverlayManagedComponent } from '../../services/overlayManager.service';
@Component({
  selector: 'vcl-layer',
  templateUrl: 'layer.component.html',
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class LayerComponent implements OverlayManagedComponent {

  @Input()
  public open: boolean = false;

  @Output()
  openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  public modal: boolean = true;

  public zIndex: number = -1;
  private coverZIndex: number = -1;

  constructor(private overlayManger: OverlayManagerService, private myElement: ElementRef) {}

  close() {
    this.open = false;
    this.openChange.emit(this.open);
  }

  onClick(event) {

    //layer covers 100% screen width & height. first element in layer represents 'outside'
    if (!this.modal && event.target.parentNode === this.myElement.nativeElement) {
      this.close();
    }
  }

  ngOnChanges(changes) {
    try {
      if (changes.open.currentValue === true) {
        this.zIndex = this.overlayManger.register(this);
        this.coverZIndex = this.zIndex -1;
      } else if (changes.open.currentValue === false) {
        this.zIndex = this.overlayManger.unregister(this);
        this.coverZIndex = -1;
      }
    } catch (ex) {}
  }
}

