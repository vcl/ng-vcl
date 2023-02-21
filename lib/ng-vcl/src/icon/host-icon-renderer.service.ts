import { ElementRef, Renderer2, Injectable } from '@angular/core';
import { IconService } from './icon.service';

@Injectable()
export class HostIconRendererService {
  constructor(private renderer: Renderer2, private iconService: IconService) {}

  private _currentFontIconClasses: string[] = [];

  // Remove old and set new icon classes on host
  setIcon(elementRef: ElementRef, icon: string) {
    const fontIconClass = (icon ? this.iconService.resolve(icon) : '') || '';

    this._currentFontIconClasses.forEach(cls => {
      this.renderer.removeClass(elementRef.nativeElement, cls);
    });

    this._currentFontIconClasses = fontIconClass
      .replace(/\s\s+/g, ' ')
      .split(' ')
      .filter(cls => !!cls);

    this._currentFontIconClasses.forEach(cls => {
      this.renderer.addClass(elementRef.nativeElement, cls);
    });
  }
}
