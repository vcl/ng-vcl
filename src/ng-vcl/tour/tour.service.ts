import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TourComponent } from './tour.component';
import { IHintOptions, HintOptions, HintConfig, Step } from './types';

@Injectable()
export class TourService {
  private static readonly Tag: string = 'TourService';
  private readonly tag: string = TourService.Tag;
  private debug: boolean;

  public options: HintOptions;

  private _tourComponents: TourComponent[] = [];
  private tourComponents: TourComponent[] = [];
  private tourComponent: TourComponent | null;
  private index: number = 0;

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

  public finish$: Subject<boolean> = new Subject();
  public showingStep$: Subject<Step> = new Subject();

  public register(tourComponent: TourComponent): void {
    const tag: string = `${this.tag}.register()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'tourComponent:', tourComponent);
    this._tourComponents = this._tourComponents.includes(tourComponent) ?
      this._tourComponents : [...this._tourComponents, tourComponent];
    if (debug) console.log(tag, 'this._tourComponents:', this._tourComponents);
  }

  public initialize(options: IHintOptions = new HintOptions()): void {
    const tag: string = `${this.tag}.initialize()`;
    this.options = Object.assign(new HintOptions(), options);
    this.debug = this.options.debug || false;

    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'options:', options);
    if (debug) console.log(tag, 'this.options:', this.options);
  }

  public start(index: number = 0): void {
    const tag: string = `${this.tag}.start()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'index:', index);

    this.tourComponents = this.options.useOrder ?
      this._tourComponents.sort((s1, s2) => s1.order - s2.order) :
      this._tourComponents;
    if (debug) console.log(tag, 'this.tourComponents:', this.tourComponents);

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

    this.showingStep$.next(this.tourComponent);
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
    this.finish$.next(true);
  }

  public onOverlayClick(): void {
    const tag: string = `${this.tag}.onOverlayClick()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'this.options.dismissOnOverlay:', this.options.dismissOnOverlay);
    if (this.options.dismissOnOverlay) this.showNext();
  }
}
