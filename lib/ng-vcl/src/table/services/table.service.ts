import { Injectable, Renderer2, ElementRef } from '@angular/core';

@Injectable()
export class TableService {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  public ClassToggle(className: string, add: boolean | '', targetEl: string): boolean {
    if (this.el.nativeElement.localName == targetEl || !targetEl) {
      if (add === '' || add) {
        // For table tag vclTable class is required to enable vcl table behavior
        if (targetEl == 'table' && className != 'vclTable') {
          this.addClass('vclTable');
        }
        return this.addClass(className);
      } else {
        return this.removeClass(className);
      }
    } else {
      console.error(`${className} can only be used on ${targetEl} tag!`);
      return false;
    }
  }

  private addClass(className: string): boolean {
    this.renderer.addClass(this.el.nativeElement, className);

    return true;
  }

  private removeClass(className: string): boolean {
    this.renderer.removeClass(this.el.nativeElement, className);
    return false;
  }
}
