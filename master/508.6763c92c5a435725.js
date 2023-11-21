"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[508],{6508:(u,r,n)=>{n.r(r),n.d(r,{TourDemoModule:()=>y,demo:()=>d});var s=n(6814),v=n(2911),a=n(6062),p=n(2860),t=n(9212),g=n(9910),h=n(569);let f=(()=>{class e{constructor(i){this.tour=i}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(h.Q))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["vcl-tour-overlay"]],decls:1,vars:2,consts:[[1,"tour-overlay",3,"click"]],template:function(o,l){1&o&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return l.tour.onOverlayClick()}),t.qZA()),2&o&&t.ekj("hide",!l.tour.showOverlay)},styles:[".tour-overlay[_ngcontent-%COMP%]{position:fixed!important;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:20;top:0;left:0}"]})}return e})(),b=(()=>{class e{constructor(i){this.tour=i}startTour(){this.tour.initialize(),this.tour.start()}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(a.QLM))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:38,vars:18,consts:[[1,"vlcContentArea"],[1,"col"],["type","button",1,"button",3,"click"],[1,"icogram"],[1,"text"],[1,"grid-span-25p"],[1,"container"],["heading1",""],["heading2",""],["heading3",""],["heading4",""],["title","Step Title",3,"target"],[3,"target","offsetY"],[3,"target","originX","originY","overlayX","overlayY"],[3,"target","originX","overlayX","originY","overlayY"]],template:function(o,l){if(1&o&&(t.TgZ(0,"section",0),t._UZ(1,"vcl-tour-overlay"),t.TgZ(2,"div",1)(3,"div")(4,"button",2),t.NdJ("click",function(){return l.startTour()}),t.TgZ(5,"div",3)(6,"span",4),t._uU(7,"Start tour"),t.qZA()()()(),t.TgZ(8,"div")(9,"div",5)(10,"h1",6,7),t._uU(12,"Heading"),t.qZA()(),t.TgZ(13,"div",5),t._UZ(14,"br"),t.TgZ(15,"p",6,8),t._uU(17,"Heading"),t.qZA()(),t.TgZ(18,"div",5),t._UZ(19,"br"),t.TgZ(20,"p",6,9),t._uU(22,"Heading"),t.qZA()(),t.TgZ(23,"div",5),t._UZ(24,"br"),t.TgZ(25,"p",6,10),t._uU(27,"Heading"),t.qZA()()()(),t.TgZ(28,"vcl-tour-step",11),t._uU(29," Demo tour first step with title "),t.qZA(),t.TgZ(30,"vcl-tour-step",12),t._uU(31," Demo tour second step no title with Y offset "),t.qZA(),t.TgZ(32,"vcl-tour-step",13),t._uU(33," Demo tour third step top position "),t.qZA(),t.TgZ(34,"vcl-tour-step",14),t._uU(35," Demo tour fourth step left position "),t.qZA(),t.TgZ(36,"vcl-tour-step",14),t._uU(37," Demo tour fifth step right position "),t.qZA()()),2&o){const c=t.MAs(11),m=t.MAs(16),A=t.MAs(21),Y=t.MAs(26);t.xp6(28),t.Q6J("target",c),t.xp6(2),t.Q6J("target",m)("offsetY",50),t.xp6(2),t.Q6J("target",A)("originX","center")("originY","top")("overlayX","center")("overlayY","bottom"),t.xp6(2),t.Q6J("target",Y)("originX","start")("overlayX","end")("originY","center")("overlayY","center"),t.xp6(2),t.Q6J("target",m)("originX","end")("overlayX","start")("originY","center")("overlayY","center")}},dependencies:[g.B,f],encapsulation:2})}return e})();const T="# vcl-tour-step and vcl-tour-overlay\n\nSimple and customizable application tour component with overlay.\n\nNote: For the highlight to work, the target element has to have a background-color.\n\n## Usage\n\n```js\nimport { VCLTourModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLTourModule ],\n  ...\n})\nexport class AppComponent {}\n\nclass AppComponent {\n\n  constructor(public tour: TourService){ }\n\n  startTour() {\n    this.tour.start();\n  }\n}\n```\n\n```html\n\x3c!-- Overlay element inserted on top of the page--\x3e\n<vcl-tour-overlay></vcl-tour-overlay>\n\n\x3c!-- Start tour --\x3e\n<button name=\"button\" (click)=\"startTour()\">Begin tour</button>\n\n\x3c!-- Some application element --\x3e\n<div id=\"foo\">Some element</div>\n\n<vcl-tour-step target=\"#foo\" title=\"some title\">\n  \x3c!-- ANY HTML HERE --\x3e\n</vcl-tour-step>\n```\n\n### API\n\n#### vcl-tour-step attributes\n\n| Name                     | Type                          | Default            | Description\n| ------------------------ | ----------------------------- | ------------------ | --------------\n| `debug`                  | boolean                       | false              | Output debug information\n| `debugPopover`           | boolean                       | false              | Output `vcl-tour-step`'s `vcl-popover` debug information\n| `title`                  | string                        |                    | Tour step title\n| `target`                 | string  ElementRef  Element   |                    | The target can be a selector, element or ElementRef instance\n| `order`                  | number                        |                    | The order number in which tour step should be shown, necessary if same element used multiple times\n| `targetX`                | AttachmentX                   | AttachmentX.Center | Position of the target-side\n| `attachmentX`            | AttachmentX                   | AttachmentX.Center | Position of the popover-side\n| `offsetAttachmentX`      | number                        |                    | `vcl-popover`'s AttachmentX offset\n| `targetY`                | AttachmentY                   | AttachmentY.Bottom | Position of the target-vertical\n| `attachmentY`            | AttachmentY                   | AttachmentY.Top    | Position of the popover-vertical\n| `offsetAttachmentY`      | number                        |                    | `vcl-popover`'s AttachmentY offset\n\n\n#### TourService events\n\n| Name                     | Type          | Description\n| ------------------------ | ------------- | --------------\n| `end$`                   | true          | Event is emitted when the tour is finished or ended\n| `tourComponent$`         | TourComponent | Current `TourComponent` is emitted on each `vcl-tour-step`\n\n### TourService default options\n\n| Name                     | Type        | Default  | Description\n| ------------------------ | ----------- | -------- |--------------\n| `debug`                  | boolean     | false    | Output debug information\n| `debugTour`              | boolean     | false    | Output every `vcl-tour-step` debug information\n| `debugPopover`           | boolean     | false    | Output every `vcl-tour-step`'s `vcl-popover` debug information\n| `useOrder`               | boolean     | false    | `vcl-tour-step`'s `@Input() order` is not used and instead the service relies on the DOM element creation order\n| `elementsDisabled`       | boolean     | true     | Disabling highlightedElement (click) wont work\n| `applyRelative`          | boolean     | true     | Applying position:relative to highlightedElement (disable in case you want to highlight absolute positioned elements)\n| `dismissOnOverlay`       | boolean     | false    | Go to next step when clicking on overlay (close tour if this is last step)\n| `zIndex`                 | number      | 20       | Used `z-index` for `vcl-tour-step` components\n| `dismissOnOverlay`       | boolean     | false    | Go to next step when clicking on overlay (close tour if this is last step)\n| `offsetAttachmentX`      | number      | 0        | Used AttachmentX offset for `vcl-tour-step` components\n| `offsetAttachmentY`      | number      | 0        | Used AttachmentY offset for `vcl-tour-step` components\n\n\n#### Custom options usage\n\n```js\n startTour() {\n    this.tour.initialize({elementsDisabled: false}); // TourOptions\n    this.tour.start();\n  }\n```\n\n\n\nexport class TourOptions {\n  debug: boolean = false;\n  debugTour: boolean = false;\n  debugPopover: boolean = false;\n\n  useOrder: boolean = false;\n  elementsDisabled: boolean = true;\n  applyRelative: boolean = true;\n  dismissOnOverlay: boolean = false;\n\n  zIndex: number = 20;\n\n  previousLabel: string = 'Previous';\n  nextLabel: string = 'Next';\n  exitLabel: string = 'Exit';\n\n  previousIcon: string = 'fas fa-chevron-left';\n  nextIcon: string = 'fas fa-chevron-right';\n  exitIcon: string = 'fas fa-close';\n\n  buttonClass: string = '';\n}\n";function d(){return{label:"Tour",tabs:{Demo:b,"README.md":{type:"md",content:T},"demo.component.html":{type:"html",content:n(8169)},"demo.component.ts":{type:"ts",content:n(8819)}}}}let y=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[s.ez,p.l,a.pey,a.V4c,a.k2k,a.WdB,v.Bz.forChild([{path:"",component:p.z,data:{demo:d}}])]})}return e})()},8169:(u,r,n)=>{n.r(r),n.d(r,{default:()=>s});const s='<section class="vlcContentArea">\n    <vcl-tour-overlay></vcl-tour-overlay>\n    \n    <div class="col">\n        <div>\n            <button type="button" class="button" (click)="startTour()">\n                <div class="icogram">\n                    <span class="text">Start tour</span>\n                </div>\n            </button>\n        </div>   \n        <div>\n            <div class="grid-span-25p">\n                <h1 class="container" #heading1>Heading</h1>\n            </div>\n            <div class="grid-span-25p">\n                <br>\n                <p class="container" #heading2>Heading</p>\n            </div>\n            <div class="grid-span-25p">\n                <br>\n                <p class="container" #heading3>Heading</p>\n            </div>\n            <div class="grid-span-25p">\n                <br>\n                <p class="container" #heading4>Heading</p>\n            </div>\n        </div>\n    </div>\n\n    <vcl-tour-step\n        [target]="heading1"\n        title="Step Title">\n            Demo tour first step with title\n    </vcl-tour-step>\n\n    <vcl-tour-step \n        [target]="heading2"\n        [offsetY]="50">\n            Demo tour second step no title with Y offset\n    </vcl-tour-step>\n    \n    <vcl-tour-step\n        [target]="heading3"\n        [originX]="\'center\'"\n        [originY]="\'top\'"\n        [overlayX]="\'center\'"\n        [overlayY]="\'bottom\'">\n            Demo tour third step top position\n    </vcl-tour-step>\n\n    <vcl-tour-step\n        [target]="heading4"\n        [originX]="\'start\'"\n        [overlayX]="\'end\'"\n        [originY]="\'center\'"\n        [overlayY]="\'center\'">\n            Demo tour fourth step left position\n    </vcl-tour-step>\n\n    <vcl-tour-step\n        [target]="heading2"\n        [originX]="\'end\'"\n        [overlayX]="\'start\'"\n        [originY]="\'center\'"\n        [overlayY]="\'center\'">\n            Demo tour fifth step right position\n    </vcl-tour-step>\n    \n</section>\n'},8819:(u,r,n)=>{n.r(r),n.d(r,{default:()=>s});const s="import { Component } from '@angular/core';\nimport { TourService, TourOptions } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class TourDemoComponent {\n  constructor(public tour: TourService) {}\n\n  public startTour() {\n    this.tour.initialize();\n    this.tour.start();\n  }\n}\n"}}]);