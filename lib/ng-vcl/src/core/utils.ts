import { ElementRef } from '@angular/core';

export function hasProjectedContent(element: ElementRef<HTMLElement> | HTMLElement) {
  if (!element) {
    return false;
  }

  element = element instanceof ElementRef ? element.nativeElement : element;

  const projectedContent = element.childNodes;
  for (let i = 0; i < projectedContent.length; i++) {
    if (projectedContent.item(i).nodeType !== 8) {
      // nodeType: 8 == comment
      return true;
    }
  }
  return false;
}
