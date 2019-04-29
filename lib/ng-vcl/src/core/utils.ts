import { ElementRef } from '@angular/core';

export function hasProjectedContent(elementRef: ElementRef<HTMLElement>) {
  if (!elementRef) {
    return false;
  }

  const projectedContent = elementRef.nativeElement.childNodes;
  for (let i = 0; i < projectedContent.length; i++) {
    if (projectedContent.item(i).nodeType !== 8) {
      // nodeType: 8 == comment
      return true;
    }
  }
  return false;
}
