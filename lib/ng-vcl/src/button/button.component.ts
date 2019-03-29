import { Directive, HostBinding, Input, HostListener, ElementRef, Component} from '@angular/core';

@Component({
  selector: 'button[vcl-button]',
  exportAs: 'vclButton',
  templateUrl: 'button.component.html'
})
export class ButtonComponent {

  constructor(private elementRef: ElementRef) { }

  @Input()
  disabled = false;

  @HostBinding('class.vclDisabled')
  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return this.disabled ? true : null;
  }

  @HostBinding('class.vclButton')
  vclButton = true;

  @HostBinding('class.vclHovered')
  hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered = false;
  }

  focus(): void {
    this.elementRef.nativeElement.focus();
  }
}
