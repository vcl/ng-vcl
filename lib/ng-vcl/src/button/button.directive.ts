import { Directive, HostBinding, Input, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: 'button[vcl-button]',
  host: {
    '[class.vclButton]': 'true',
  },
})
export class ButtonDirective {

  constructor(private elementRef: ElementRef) { }

  @Input()
  disabled: boolean = false;

  @HostBinding('class.vclDisabled')
  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return this.disabled ? true : null;
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(e) { this.hovered = true; }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e) { this.hovered = false; }

  @HostBinding('class.vclHovered')
  hovered: boolean = false; // `true` if a pointer device is hovering the button (CSS' :hover)

  focus(): void {
    this.elementRef.nativeElement.focus();
  }
}
