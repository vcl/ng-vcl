"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wormhole_1 = require('./../../directives/wormhole');
var core_1 = require('@angular/core');
var layerManager_service_1 = require('../../services/layerManager.service');
/**

layer

## Usage

```html
<vcl-layer-base></vcl-layer-base>
```

```html

<button vcl-button (click)="myLayer.open()" label="open modal layer"></button>

<template vcl-layer #myLayer="layer" [modal]="false">
  <div class="vclPanel vclNoMargin">
    <div class="vclPanelHeader">
      <h3 class="vclPanelTitle">Title</h3>
    </div>
    <div class="vclPanelBody">
      <p class="vclPanelContent">
        Content
        <button vcl-button (click)="myLayer.close()" label="close Layer"></button>
      </p>
    </div>
  </div>
</template>
```
*/
var LayerBaseComponent = (function () {
    function LayerBaseComponent(layerManger) {
        this.layerManger = layerManger;
        this.visibleLayers = [];
    }
    LayerBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.layerManger.visibleLayersChanged.subscribe(function (visibleLayers) {
            _this.visibleLayers = visibleLayers;
        });
    };
    LayerBaseComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LayerBaseComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-layer-base',
                    templateUrl: 'layer-base.component.html'
                },] },
    ];
    /** @nocollapse */
    LayerBaseComponent.ctorParameters = [
        { type: layerManager_service_1.LayerManagerService, },
    ];
    return LayerBaseComponent;
}());
exports.LayerBaseComponent = LayerBaseComponent;
var LayerDirective = (function (_super) {
    __extends(LayerDirective, _super);
    function LayerDirective(templateRef, elementRef, layerManger) {
        _super.call(this, templateRef);
        this.templateRef = templateRef;
        this.elementRef = elementRef;
        this.layerManger = layerManger;
        this.visibilityChange$ = new core_1.EventEmitter();
        this.modal = true;
        this.name = 'default';
        this.visible = false;
        this.coverzIndex = 10;
        this.zIndex = 11;
    }
    Object.defineProperty(LayerDirective.prototype, "visibilityChange", {
        get: function () {
            return this.visibilityChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LayerDirective.prototype.ngOnInit = function () {
        this.layerManger.register(this);
    };
    LayerDirective.prototype.ngOnDestroy = function () {
        this.layerManger.unregister(this);
    };
    LayerDirective.prototype.onClick = function (event) {
        // layer covers 100% screen width & height. first element in layer represents 'outside'
        if (!this.modal && event.target.parentNode === this.elementRef.nativeElement) {
            this.close();
        }
    };
    LayerDirective.prototype.setZIndex = function (zIndex) {
        if (zIndex === void 0) { zIndex = 10; }
        this.coverzIndex = zIndex;
        this.zIndex = zIndex + 1;
    };
    LayerDirective.prototype.toggle = function () {
        this.visible = !this.visible;
        this.visibilityChange$.emit(this.visible);
    };
    LayerDirective.prototype.open = function () {
        this.setZIndex(this.layerManger.currentZIndex + 10);
        this.visible = true;
        this.visibilityChange$.emit(this.visible);
    };
    LayerDirective.prototype.close = function () {
        this.setZIndex();
        this.visible = false;
        this.visibilityChange$.emit(this.visible);
    };
    LayerDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vcl-layer]',
                    exportAs: 'layer',
                    host: {
                        '(document:click)': 'onClick($event)',
                    },
                },] },
    ];
    /** @nocollapse */
    LayerDirective.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ElementRef, },
        { type: layerManager_service_1.LayerManagerService, },
    ];
    LayerDirective.propDecorators = {
        'visibilityChange': [{ type: core_1.Output },],
        'modal': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
    };
    return LayerDirective;
}(wormhole_1.Wormhole));
exports.LayerDirective = LayerDirective;
