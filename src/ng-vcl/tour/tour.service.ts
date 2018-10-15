import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TourComponent } from './tour.component';

export class TourOptions {
  debug: boolean = false;
  debugTour: boolean = false;
  debugPopover: boolean = false;

  useOrder: boolean = false;
  elementsDisabled: boolean = true;
  applyRelative: boolean = true;
  dismissOnOverlay: boolean = false;

  zIndex: number = 21;

  previousLabel: string = 'Previous';
  nextLabel: string = 'Next';
  exitLabel: string = 'Exit';

  previousIcon: string = 'fa fa-chevron-left';
  nextIcon: string = 'fa fa-chevron-right';
  exitIcon: string = 'fa fa-close';

  buttonClass: string = '';

  offsetAttachmentX: number = 0;
  offsetAttachmentY: number = 0;
}

@Injectable()
export class TourService {
  private static readonly Tag: string = 'TourService';
  private readonly tag: string = TourService.Tag;
  private debug: boolean;

  public options: TourOptions;

  private _tourComponents: TourComponent[] = [];
  private tourComponents: TourComponent[] = [];
  private tourComponent: TourComponent | null;
  private index: number = 0;

  public end$: Subject<boolean> = new Subject();
  public tourComponent$: Subject<TourComponent> = new Subject();

  private _showOverlay: boolean = false;
  public set showOverlay(showOverlay: boolean) {
    this._showOverlay = showOverlay;
  }

  public get showOverlay(): boolean {
    return this._showOverlay;
  }

  public get hasPrevious(): boolean {
    const tag: string = `${this.tag}.hasPrevious()`;
    const debug: boolean = this.debug || false;
    const hasPrevious: boolean = this.index > 0;
    if (debug) console.log(tag, 'hasPrevious:', hasPrevious);
    return hasPrevious;
  }

  public get hasNext(): boolean {
    const tag: string = `${this.tag}.hasNext()`;
    const debug: boolean = this.debug || false;
    const hasNext: boolean = this.index < this.tourComponents.length - 1;
    if (debug) console.log(tag, 'hasNext:', hasNext);
    return hasNext;
  }

  public register(tourComponent: TourComponent): void {
    const tag: string = `${this.tag}.register()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'tourComponent:', tourComponent);
    this._tourComponents = this._tourComponents.includes(tourComponent) ?
      this._tourComponents : [...this._tourComponents, tourComponent];
    if (debug) console.log(tag, 'this._tourComponents:', this._tourComponents);
  }

  public initialize(options: TourOptions = new TourOptions()): void {
    const tag: string = `${this.tag}.initialize()`;
    this.options = Object.assign(new TourOptions(), options);
    this.debug = this.options.debug || false;

    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'options:', options);
    if (debug) console.log(tag, 'this.options:', this.options);
  }

  public start(index: number = 0): void {
    const tag: string = `${this.tag}.start()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'index:', index);
    if (!this.options) this.initialize();

    this.tourComponents = this.options.useOrder ?
      this._tourComponents.slice().sort((s1, s2) => s1.order - s2.order) :
      this._tourComponents;
    if (debug) console.log(tag, 'this.tourComponents:', this.tourComponents);

    this.tourComponents.forEach(tourComponent => {
      tourComponent.debug = tourComponent.debug || this.options.debugTour;
      tourComponent.debugPopover = tourComponent.debugPopover || this.options.debugPopover;
      tourComponent.offsetAttachmentX = isNumber(tourComponent.offsetAttachmentX) ?
        tourComponent.offsetAttachmentX : this.options.offsetAttachmentX;
      tourComponent.offsetAttachmentY = isNumber(tourComponent.offsetAttachmentY) ?
        tourComponent.offsetAttachmentY : this.options.offsetAttachmentY;
    });

    this.show(index);
  }

  public show(index: number): void {
    const tag: string = `${this.tag}.show()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'index:', index);

    this.tourComponent && this.tourComponent.hide();

    const tourComponent: TourComponent = this.tourComponents[index];
    if (debug) console.log(tag, 'tourComponent:', tourComponent);
    if (!tourComponent) {
      this.tourComponent = null;
      this.index = 0;
      return;
    }

    this.tourComponent = tourComponent;
    this.index = index;

    this.showOverlay = true;
    tourComponent.show();

    this.tourComponent$.next(this.tourComponent);
  }

  public showPrevious(): void {
    const tag: string = `${this.tag}.showPrevious()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'hasPrevious:', this.hasPrevious);
    if (!this.hasPrevious) return this.end();

    this.show(this.index - 1);
  }

  public showNext(): void {
    const tag: string = `${this.tag}.showNext()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'hasNext:', this.hasNext);
    if (!this.hasNext) return this.end();

    this.show(this.index + 1);
  }

  public end(): void {
    const tag: string = `${this.tag}.end()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag);
    this.tourComponent && this.tourComponent.hide();
    this.showOverlay = false;
    this.index = 0;
    this.end$.next(true);
  }

  public onOverlayClick(): void {
    const tag: string = `${this.tag}.onOverlayClick()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'this.options.dismissOnOverlay:', this.options.dismissOnOverlay);
    if (this.options.dismissOnOverlay) this.showNext();
  }
}

const isNumber = (v: any): boolean => !isNaN(Number(v)) && isFinite(v);