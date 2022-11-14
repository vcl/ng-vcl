import { ViewportRuler } from '@angular/cdk/scrolling';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Optional,
  Output,
  QueryList,
  HostBinding,
  forwardRef,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { DrawerComponent } from './drawer.component';
import { DrawerContainer, DRAWER_CONTAINER_HOST, Drawer } from './types';

@Component({
  selector: 'vcl-drawer-container',
  exportAs: 'vclDrawerContainer',
  templateUrl: 'drawer-container.component.html',
  styleUrls: ['drawer-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DRAWER_CONTAINER_HOST,
      useExisting: forwardRef(() => DrawerContainerComponent),
    },
  ],
})
export class DrawerContainerComponent
  implements AfterContentInit, OnDestroy, DrawerContainer
{
  @HostBinding('class.drawer-container')
  _hostClasses = true;

  @ContentChildren(DrawerComponent)
  _drawers: QueryList<DrawerComponent>;

  // Backdrop click event
  @Output()
  backdropClick: EventEmitter<void> = new EventEmitter<void>();

  leftDrawer: DrawerComponent | undefined;
  rightDrawer: DrawerComponent | undefined;

  viewportRulerSub: Subscription;

  // Margins to be applied to the content.
  marginLeft = 0;
  marginRight = 0;

  // Backdrop enabled for push and over
  get hasBackdrop() {
    return (
      !this.leftDrawer ||
      this.leftDrawer.mode !== 'side' ||
      !this.rightDrawer ||
      this.rightDrawer.mode !== 'side'
    );
  }

  constructor(
    @Optional()
    private elementRef: ElementRef<HTMLElement>,
    private cdRef: ChangeDetectorRef,
    viewportRuler: ViewportRuler
  ) {
    // Recalc margin on viewport change
    this.viewportRulerSub = viewportRuler.change().subscribe(() => {
      this.updateContentMargins();
    });
  }
  ngAfterContentInit() {
    this._drawers.changes.pipe(startWith(undefined)).subscribe(() => {
      this.assignDrawers();
    });
  }
  ngOnDestroy() {
    this.viewportRulerSub.unsubscribe();
  }

  open(): void {
    this.leftDrawer && this.leftDrawer.open();
    this.rightDrawer && this.rightDrawer.open();
  }

  close(): void {
    this.leftDrawer && this.leftDrawer.close();
    this.rightDrawer && this.rightDrawer.close();
  }

  updateContentMargins() {
    const marginLeft = this.getContentMargin(this.leftDrawer);
    const marginRight = this.getContentMargin(this.rightDrawer);
    if (marginLeft !== this.marginLeft || this.marginRight !== marginRight) {
      this.marginLeft = marginLeft;
      this.marginRight = marginRight;
      this.cdRef.detectChanges();
    }
  }

  // 1. For drawers in `over` mode, they don't affect the content.
  // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
  //    left margin (for left drawer) or right margin (for right the drawer).
  private getContentMargin(drawer: DrawerComponent) {
    if (drawer && drawer.opened && drawer.mode === 'side') {
      return drawer.width;
    }
    return 0;
  }

  notifyDrawerStateChange(drawer: Drawer, action: 'check' | 'toggle') {
    this.updateContentMargins();
    if (action === 'toggle') {
      this.elementRef.nativeElement.classList.add('drawer-animations');
      this.cdRef.markForCheck();
    }
  }

  // Set drawers to props
  private assignDrawers() {
    this.leftDrawer = this._drawers.find(d => d.position === 'left');
    this.rightDrawer = this._drawers.find(d => d.position === 'right');
  }

  onBackdropClick() {
    this.backdropClick.emit();
    if (this.leftDrawer && this.leftDrawer.hasBackdrop) {
      this.leftDrawer.close();
    }
    if (this.rightDrawer && this.rightDrawer.hasBackdrop) {
      this.rightDrawer.close();
    }
  }

  get showBackdrop(): boolean {
    return (
      (!!this.leftDrawer &&
        this.leftDrawer.opened &&
        this.leftDrawer.hasBackdrop) ||
      (!!this.rightDrawer &&
        this.rightDrawer.opened &&
        this.rightDrawer.hasBackdrop)
    );
  }
}
