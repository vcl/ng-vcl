import { Injectable } from '@angular/core';
import { ICoordinate } from "./ICoordinate";

@Injectable()
export class TooltipService {

  public positionElements(hostEl: HTMLElement, targetEl: HTMLElement, positionStr: string, appendToBody: boolean = false): ICoordinate {
    let positionStrParts = positionStr.split("-");
    let pos0 = positionStrParts[0];
    let pos1 = positionStrParts[1] || "center";
    let hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
    let targetElWidth = targetEl.offsetWidth;
    let targetElHeight = targetEl.offsetHeight;
    let shiftWidth: any = {
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

    let shiftHeight: any = {
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
    switch (pos0) {
      case "right":
        targetElPos = {
          Top: shiftHeight[pos1](),
          Left: shiftWidth[pos0]()
        };
        break;

      case "left":
        targetElPos = {
          Top: shiftHeight[pos1](),
          Left: hostElPos.left - targetElWidth
        };
        break;

      case "bottom":
        targetElPos = {
          Top: shiftHeight[pos0](),
          Left: shiftWidth[pos1]()
        };
        break;

      default:
        targetElPos = {
          Top: hostElPos.top - targetElHeight,
          Left: shiftWidth[pos1]()
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
    return {
      width: boundingClientRect.width || nativeEl.offsetWidth,
      height: boundingClientRect.height || nativeEl.offsetHeight,
      top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
      left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
    };
  }

  private getStyle(nativeEl: HTMLElement, cssProp: string): string {
    if ((nativeEl as any).currentStyle) // IE
      return (nativeEl as any).currentStyle[cssProp];

    if (window.getComputedStyle)
      return (window.getComputedStyle(nativeEl) as any)[cssProp];

    // finally try and get inline style
    return (nativeEl.style as any)[cssProp];
  }

  private isStaticPositioned(nativeEl: HTMLElement): boolean {
    return (this.getStyle(nativeEl, "position") || "static") === "static";
  }

  private parentOffsetEl(nativeEl: HTMLElement): any {
    let offsetParent: any = nativeEl.offsetParent || window.document;
    while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
      offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || window.document;
  }

}

export const tooltipService = new TooltipService();
