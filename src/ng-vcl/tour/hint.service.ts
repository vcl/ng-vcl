import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TourComponent } from './tour.component';
import { IHintOptions, HintOptions, HintConfig, Step } from './types';

@Injectable()
export class HintService {
  private static readonly Tag: string = 'HintService';
  private readonly tag: string = HintService.Tag;
  private debug: boolean;

  currentStep: Step | undefined;
  steps: Step[];
  options: HintOptions;
  anchors: { [selectorOrderCombination: string]: TourComponent } = {};
  overlay$: Subject<boolean> = new Subject();
  registration$: Subject<boolean> = new Subject();
  finish$: Subject<boolean> = new Subject();
  showingStep$: Subject<Step> = new Subject();

  /**
   * Initialize hint service
   * @method initialize
   * @param  options init options
   * @return void
   */
  public initialize(options: IHintOptions = new HintOptions()): void {
    const tag: string = `${this.tag}.initialize()`;
    const debug: boolean = this.debug || false;
    this.options = Object.assign(new HintOptions(), options);
    if (debug) console.log(tag, 'this.options:', this.options);
    this.debug = this.options.debug || false;

    if (debug) console.log(tag, 'this.options.stepTag:', this.options.stepTag);
    const nodes: NodeListOf<Element> = document.getElementsByTagName(this.options.stepTag);
    if (debug) console.log(tag, 'nodes:', nodes);
    this.steps = this.initSteps(nodes);
    if (debug) console.log(tag, 'this.steps:', this.steps);
  }
  /**
   * Show step
   * @method show
   * @param  step [description]
   */
  public show(step: Step): void {
    const tag: string = `${this.tag}.show()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'step:', step);
    if (!step) return;

    const anchor: TourComponent = this.anchors[`${step.target}_${step.order}`];
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
    const tag: string = `${this.tag}.showNext()`;
    const debug: boolean = this.debug || false;
    this.currentStep = this.currentStep != undefined ? this.steps[this.steps.indexOf(this.currentStep) + 1] : undefined;
    if (debug) console.log(tag, 'this.currentStep:', this.currentStep);

    const anchor = this.currentStep != undefined ? this.anchors[`${this.currentStep.target}_${this.currentStep.order}`] : null;
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
    const tag: string = `${this.tag}.overlayNext()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'this.currentStep:', this.currentStep);

    if (this.hasNext() && this.currentStep != undefined) {
      this.anchors[`${this.currentStep.target}_${this.currentStep.order}`].hideStep();
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
    const tag: string = `${this.tag}.showPrevious()`;
    const debug: boolean = this.debug || false;
    this.currentStep = this.currentStep != undefined ? this.steps[this.steps.indexOf(this.currentStep) - 1] : undefined;
    if (debug) console.log(tag, 'this.currentStep:', this.currentStep);

    const anchor = this.currentStep != undefined ? this.anchors[`${this.currentStep.target}_${this.currentStep.order}`] : null;
    if (!anchor) {
      return;
    }
    anchor.showStep();
  }
  /**
   * Register hint component
   * @method register
   * @param  target  bonded to
   * @param  component itself
   */
  public register(target: string, component: TourComponent): void {
    if (this.anchors[target]) {
      throw 'target ' + target + ' already registered!';
    }
    this.anchors[target] = component;
    this.registration$.next(true);
  }
  /**
   * Is {Step} this.currentStep has next
   * @method hasNext
   * @return
   */
  public hasNext(): boolean {
    return this.currentStep != undefined ? this.steps.indexOf(this.currentStep) < this.steps.length - 1 : false;
  }

  /**
   * Is {Step} this.currentStep has previous
   * @method hasPrevious
   * @return
   */
  public hasPrevious(): boolean {
    return this.currentStep != undefined ? this.steps.indexOf(this.currentStep) > 0 : false;
  }
  /**
   * Finalize our hint tour.
   * @method end
   */
  public end(): void {
    const tag: string = `${this.tag}.end()`;
    const debug: boolean = this.debug || false;
    this.overlay$.next(false);
    if (debug) console.log(tag, 'this.currentStep:', this.currentStep);

    const anchor = this.currentStep != undefined ? this.anchors[`${this.currentStep.target}_${this.currentStep.order}`] : null;
    if (!anchor) {
      return;
    }
    this.currentStep = undefined;
    anchor.hideStep();
    this.finish$.next(true);
  }
  /**
   * Start hint tour at some position
   * @method start
   * @param  stepId position in this.steps
   */
  public start(stepId: number = 0): void {
    const tag: string = `${this.tag}.start()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'stepId:', stepId);
    if (debug) console.log(tag, 'this.steps:', this.steps);
    if (!this.steps) this.initialize();

    this.currentStep = this.steps[stepId];
    if (debug) console.log(tag, 'this.currentStep:', this.currentStep);
    if (!this.currentStep) return;

    this.show(this.currentStep);
    this.overlay$.next(true);
  }
  /**
   * Convert Element[] to Step[]
   * @method initSteps
   * @param   nodes
   * @return
   */
  private initSteps(nodes: NodeListOf<Element>): Step[] {
    const steps: Array<Step> = [];
    for (let i = 0; i < nodes.length; i++) {
      steps.push({
        target: nodes[i].getAttribute('target'),
        order: Number(nodes[i].getAttribute('order')) || this.options.defaultOrder,
      } as Step);
    }

    return steps.sort((el1, el2) => el1.order - el2.order);
  }

  private putOverlay(): void {
    document.getElementsByTagName('body');
  }
}
