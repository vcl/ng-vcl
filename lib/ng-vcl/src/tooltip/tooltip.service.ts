import { Injectable } from '@angular/core';
import { ICoordinate } from './ICoordinate';

@Injectable()
export class TooltipService {

  // padding between tooltip and target obj.
  offsetCorrection = 10;

  public positionElements(hostEl: HTMLElement, targetEl: HTMLElement, positionStr: string, appendToBody: boolean = false): ICoordinate {
    const tooltipAlignment = positionStr;
    // set tooltip at middle of host element for now
    const alignmentCorrection = 'center';
    const hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
    const targetElWidth = targetEl.offsetWidth;
    const targetElHeight = targetEl.offsetHeight;

    const shiftWidth: any = {
      center: (): number => {
        return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
      },
      left: (): number => {
        return hostElPos.left;
      },
      right: (): number => {
        return hostElPos.left + hostElPos.width;
      }
    };

    const shiftHeight: any = {
      center: (): number => {
        return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
      },
      top: (): number => {
        return hostElPos.top;
      },
      bottom: (): number => {
        return hostElPos.top + hostElPos.height;
      }
    };

    let targetElPos: ICoordinate;
    switch (tooltipAlignment) {
      case 'right':
        targetElPos = {
          Top: shiftHeight[alignmentCorrection](),
          Left: shiftWidth[tooltipAlignment]() + this.offsetCorrection
        };
        break;

      case 'left':
        targetElPos = {
          Top: shiftHeight[alignmentCorrection](),
          Left: hostElPos.left - targetElWidth - this.offsetCorrection
        };
        break;

      case 'bottom':
        targetElPos = {
          Top: shiftHeight[tooltipAlignment]() + this.offsetCorrection,
          Left: shiftWidth[alignmentCorrection]()
        };
        break;

      default:
        targetElPos = {
          Top: hostElPos.top - targetElHeight - this.offsetCorrection,
          Left: shiftWidth[alignmentCorrection]()
        };
        break;
    }
    return targetElPos;
  }

  private position(nativeEl: HTMLElement): { width: number, height: number, top: number, left: number } {
    let offsetParentBCR = { top: 0, left: 0 };
    const elBCR = this.offset(nativeEl);
    const offsetParentEl = this.parentOffsetEl(nativeEl);
    if (offsetParentEl !== window.document) {
      offsetParentBCR = this.offset(offsetParentEl);
      offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
      offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
    }

    const boundingClientRect = nativeEl.getBoundingClientRect();
    return {
      width: boundingClientRect.width || nativeEl.offsetWidth,
      height: boundingClientRect.height || nativeEl.offsetHeight,
      top: elBCR.top - offsetParentBCR.top,
      left: elBCR.left - offsetParentBCR.left
    };
  }

  private offset(nativeEl: any): { width: number, height: number, top: number, left: number } {
    const boundingClientRect = nativeEl.getBoundingClientRect();
    const scrollTop = window.document.documentElement ? window.document.documentElement.scrollTop : undefined;
    const scrollLeft =  window.document.documentElement ? window.document.documentElement.scrollLeft : undefined;
    return {
      width: boundingClientRect.width || nativeEl.offsetWidth,
      height: boundingClientRect.height || nativeEl.offsetHeight,
      top: boundingClientRect.top + (window.pageYOffset || scrollTop),
      left: boundingClientRect.left + (window.pageXOffset || scrollLeft)
    };
  }

  private getStyle(nativeEl: HTMLElement, cssProp: string): string {
    if ((nativeEl as any).currentStyle) { // IE
      return (nativeEl as any).currentStyle[cssProp];
    }

    if (window.getComputedStyle) {
      return (window.getComputedStyle(nativeEl) as any)[cssProp];
    }

    return (nativeEl.style as any)[cssProp];
  }

  private isStaticPositioned(nativeEl: HTMLElement): boolean {
    return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
  }

  private parentOffsetEl(nativeEl: HTMLElement): any {
    let offsetParent: any = nativeEl.offsetParent || window.document;
    while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
      offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || window.document;
  }
}

