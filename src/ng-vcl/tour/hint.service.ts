import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TourComponent } from './tour.component';
import { IHintService, IHintOptions, HintOptions, HintConfig, Step } from './types';

@Injectable()
export class HintService implements IHintService {
  currentStep: Step | undefined;
  steps: Step[];
  hintOptions: HintOptions;
  anchors: { [selectorOrderCombination: string]: TourComponent } = {};
  overlay$: Subject<boolean> = new Subject();
  registration$: Subject<boolean> = new Subject();
  finish$: Subject<boolean> = new Subject();
  showingStep$: Subject<Step> = new Subject();

  /**
   * Initialize hint service
   * @method initialize
   * @param  {HintOptions} options init options
   * @return void
   */
  public initialize(options: IHintOptions = new HintOptions()): void {
    this.hintOptions = (<any> Object).assign(new HintOptions(), options);
    let nodes = document.getElementsByTagName(this.hintOptions.stepTag);
    this.steps = this.initSteps(nodes);
    this.startAt(0);
    this.overlay$.next(true);
  }
  /**
   * Show step
   * @method show
   * @param  {Step} step [description]
   */
  public show(step: Step): void {
    const anchor = this.anchors[`${step.selector}_${step.order}`];
    if (!anchor) {
      return;
    }
    anchor.showStep();
  }
  /**
   * Show step next to {Step} this.currentStep
   * @method showNext
   */
  public showNext(): void {
    this.currentStep = this.currentStep != undefined ? this.steps[this.steps.indexOf(this.currentStep) + 1] : undefined;
    const anchor = this.currentStep != undefined ? this.anchors[`${this.currentStep.selector}_${this.currentStep.order}`] : null;
    if (!anchor) {
      return;
    }
    anchor.showStep();
  }
  /**
   * On overlay click behavior
   * @method overlayNext
   */
  public overlayNext(): void {
    if (this.hasNext() && this.currentStep != undefined) {
      this.anchors[`${this.currentStep.selector}_${this.currentStep.order}`].hideStep();
      this.showNext();
    } else {
      this.end();
    }
  }
  /**
   * Show step previous to {Step} this.currentStep
   * @method showPrevious
   */
  public showPrevious(): void {
    this.currentStep = this.currentStep != undefined ? this.steps[this.steps.indexOf(this.currentStep) - 1] : undefined;
    const anchor = this.currentStep != undefined ? this.anchors[`${this.currentStep.selector}_${this.currentStep.order}`] : null;
    if (!anchor) {
      return;
    }
    anchor.showStep();
  }
  /**
   * Register hint component
   * @method register
   * @param  {string}            selector  bonded to
   * @param  {TourComponent} component itself
   */
  public register(selector: string, component: TourComponent): void {
    if (this.anchors[selector]) {
      throw 'selector ' + selector + ' already registered!';
    }
    this.anchors[selector] = component;
    this.registration$.next(true);
  }
  /**
   * Is {Step} this.currentStep has next
   * @method hasNext
   * @return {boolean}
   */
  public hasNext(): boolean {
    return this.currentStep != undefined ? this.steps.indexOf(this.currentStep) < this.steps.length - 1 : false;
  }

  /**
   * Is {Step} this.currentStep has previous
   * @method hasPrevious
   * @return {boolean}
   */
  public hasPrevious(): boolean {
    return this.currentStep != undefined ? this.steps.indexOf(this.currentStep) > 0 : false;
  }
  /**
   * Finalize our hint tour.
   * @method end
   */
  public end(): void {
    this.overlay$.next(false);
    const anchor = this.currentStep != undefined ? this.anchors[`${this.currentStep.selector}_${this.currentStep.order}`] : null;
    if (!anchor) {
      return;
    }
    this.currentStep = undefined;
    anchor.hideStep();
    this.finish$.next(true);
  }
  /**
   * Start hint tour at some position
   * @method startAt
   * @param  {number} stepId position in this.steps
   */
  public startAt(stepId: number): void {
    this.currentStep = this.steps[stepId];
    this.show(this.currentStep);
  }
  /**
   * Convert Element[] to Step[]
   * @method initSteps
   * @param  {NodeListOf<Element>} nodes
   * @return {Step[]}
   */
  private initSteps(nodes: NodeListOf<Element>): Step[] {
    let steps: Array<Step> = [];
    for (let i = 0; i < nodes.length; i++) {
        steps.push({
          selector: nodes[i].getAttribute('selector'),
          order: Number(nodes[i].getAttribute('order')) || this.hintOptions.defaultOrder,
        } as Step);
    }
    return steps = steps.sort((el1, el2) => {
      return el1.order - el2.order;
    });
  }

  private putOverlay(): void {
    document.getElementsByTagName('body');
  }
}