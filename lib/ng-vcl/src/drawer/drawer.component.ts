import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  ElementRef,
  Inject,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  AfterViewChecked,
} from '@angular/core';
import { DRAWER_CONTAINER_HOST, DrawerContainer, Drawer } from './types';

@Component({
    selector: 'vcl-drawer',
    exportAs: 'vclDrawer',
    templateUrl: 'drawer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class DrawerComponent implements OnChanges, AfterViewChecked, Drawer {
  @HostBinding('class.drawer')
  hostClasses = true;

  @HostBinding('class.drawer-right')
  get classRight() {
    return this.position === 'right';
  }

  @HostBinding('class.drawer-open')
  get classOpen() {
    return this.opened;
  }

  @Input()
  position: 'left' | 'right' = 'left';

  @Input()
  mode: 'over' | 'side' = 'side';

  private _opened?: boolean;

  @Input()
  set opened(value: boolean) {
    this._opened = !!value;
  }
  get opened() {
    if (typeof this._opened === 'boolean') {
      return this._opened;
    }
    return this.mode === 'over' ? false : true;
  }

  @Output()
  openedChange = new EventEmitter<boolean>();

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    @Inject(DRAWER_CONTAINER_HOST)
    private container: DrawerContainer
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes.mode && !changes.mode.firstChange) ||
      (changes.position && !changes.position.firstChange)
    ) {
      this.container.updateContentMargins();
    } else if (changes.opened && !changes.opened.firstChange) {
      this.container.notifyDrawerStateChange(this, 'toggle');
    }
  }

  ngAfterViewInit() {
    this.container.updateContentMargins();
  }

  open() {
    return this.toggle(true);
  }

  close() {
    return this.toggle(false);
  }

  get hasBackdrop() {
    return this.mode !== 'side';
  }

  toggle(isOpen: boolean = !this.opened) {
    this.opened = isOpen;
    this.container.notifyDrawerStateChange(this, 'toggle');
    this.openedChange.emit(this.opened);
  }

  get width(): number {
    return this.elementRef.nativeElement
      ? this.elementRef.nativeElement.offsetWidth || 0
      : 0;
  }

  ngAfterViewChecked(): void {
    this.container.notifyDrawerStateChange(this, 'check');
  }
}
