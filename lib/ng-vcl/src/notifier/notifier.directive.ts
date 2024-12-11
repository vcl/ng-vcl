import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { NotifierOptions } from './types';
import { NotifierService } from './notifier.service';
import { NotifierOverlayRef } from './notifier-overlay-ref';

export interface NotifierDirectiveContext {
  content?: string;
}

@Directive({
    selector: '[vclNotifier]',
    exportAs: 'vclNotifier',
    standalone: false
})
export class NotifierDirective implements NotifierOptions {
  constructor(
    private notifierService: NotifierService,
    private templateRef: TemplateRef<NotifierDirectiveContext>,
    private viewContainerRef: ViewContainerRef
  ) {}

  content: undefined;

  @Input('vclNotifier')
  opts: NotifierOptions = { content: undefined };

  private notificationOverlayRef?: NotifierOverlayRef;

  open() {
    this.notificationOverlayRef = this.notifierService.queue({
      ...this.opts,
      content: new TemplatePortal(this.templateRef, this.viewContainerRef, {
        content:
          typeof this.opts.content === 'string' ? this.opts.content : undefined,
      }),
    });
  }

  close() {
    this.notificationOverlayRef?.close();
  }
}
