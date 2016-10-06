import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Component, Input, Output, EventEmitter, Directive, TemplateRef, ElementRef, trigger, state, style, transition, animate } from '@angular/core';
import { Wormhole } from './../../directives/wormhole';
import { LayerService } from './layer.service';

@Component({
  selector: 'vcl-layer-base',
  templateUrl: 'layer-base.component.html',
  animations: [
    trigger('boxState', []),
    trigger('layerState', [])
  ]
})
export class LayerBaseComponent {

  visibleLayers = [];
  sub: Subscription;

  constructor(private layerService: LayerService) { }

  ngOnInit() {
    this.sub = this.layerService.visibleLayersChanged.subscribe(visibleLayers => {
      this.visibleLayers = visibleLayers;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

@Directive({
  selector: '[vcl-layer]',
  exportAs: 'layer',
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class LayerDirective extends Wormhole {

  visibilityChange$: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  get visibilityChange(): Observable<boolean> {
    return this.visibilityChange$.asObservable();
  }

  @Input()
  public modal: boolean = true;

  @Input()
  public name: string;

  get state(){
    return this.visible ? 'open' : 'closed';
  }

  public visible = false;
  public coverzIndex = 10;
  public zIndex = 11;

  constructor(protected templateRef: TemplateRef<any>, private elementRef: ElementRef, private layerService: LayerService) {
    super(templateRef);
  }

  ngOnInit() {
    this.layerService.register(this);
  }

  ngOnDestroy() {
    this.layerService.unregister(this);
  }

  onClick(event) {
    // layer covers 100% screen width & height. first element in layer represents 'outside'
    if (!this.modal && event.target.parentNode === this.elementRef.nativeElement) {
      this.close();
    }
  }

  setZIndex(zIndex = 10) {
    this.coverzIndex = zIndex;
    this.zIndex = zIndex + 1;
  }

  toggle() {
    this.visible = !this.visible;
    this.visibilityChange$.emit(this.visible);
  }

  open() {
    this.setZIndex(this.layerService.currentZIndex + 10);
    this.visible = true;
    this.visibilityChange$.emit(this.visible);
  }

  close() {
    this.setZIndex();
    this.visible = false;
    this.visibilityChange$.emit(this.visible);
  }

}

