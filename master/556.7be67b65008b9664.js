"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[556],{556:(u,e,o)=>{o.r(e),o.d(e,{BusyDemoModule:()=>C,demo:()=>d});var s=o(9808),y=o(5852),r=o(6272),l=o(9155),n=o(4893),m=o(2331);const v=["vcl-busy-indicator-cover",""];function b(t,c){1&t&&(n.TgZ(0,"div",1)(1,"div",2),n.Hsn(2,1),n.qZA()())}const h=["*",[["vcl-busy-indicator"]]],g=["*","vcl-busy-indicator"];let f=(()=>{class t{constructor(){this.busy=!1}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["","vcl-busy-indicator-cover",""]],hostVars:2,hostBindings:function(i,a){2&i&&n.ekj("loading-layer-container",a.busy)},inputs:{busy:["vcl-busy-indicator-cover","busy"]},attrs:v,ngContentSelectors:g,decls:2,vars:1,consts:[["tabindex","-1","class","loading-layer",4,"ngIf"],["tabindex","-1",1,"loading-layer"],[1,"loading-layer-content"]],template:function(i,a){1&i&&(n.F$t(h),n.Hsn(0),n.YNc(1,b,3,0,"div",0)),2&i&&(n.xp6(1),n.Q6J("ngIf",a.busy))},directives:[s.O5],encapsulation:2,changeDetection:0}),t})();var p=o(6994);let B=(()=>{class t{constructor(){this.isBusy=!1}makeBusy(){this.isBusy=!0,setTimeout(()=>this.isBusy=!1,3e3)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-component"]],decls:35,vars:2,consts:[[1,"huge",3,"layout"],["icon","fas fa-circle-notch fa-spin fa-3x fa-fw"],["imageSrc","http://www.polidoor.com/assets/img/loading.gif"],[1,"container","row","justify-center",2,"height","15em",3,"vcl-busy-indicator-cover"],["vcl-button","",3,"click"]],template:function(i,a){1&i&&(n.TgZ(0,"h3"),n._uU(1,"Simple busy indicator"),n.qZA(),n.TgZ(2,"vcl-busy-indicator"),n._uU(3,"Loading..."),n.qZA(),n._UZ(4,"br")(5,"br"),n.TgZ(6,"h3"),n._uU(7,"Horizontal busy indicator"),n.qZA(),n.TgZ(8,"vcl-busy-indicator",0),n._uU(9,"Loading..."),n.qZA(),n._UZ(10,"br")(11,"br"),n.TgZ(12,"h3"),n._uU(13,"Busy indicator with text"),n.qZA(),n.TgZ(14,"vcl-busy-indicator"),n._uU(15," Loading... "),n.qZA(),n._UZ(16,"br")(17,"br"),n.TgZ(18,"h3"),n._uU(19,"Indicator using icon font"),n.qZA(),n._UZ(20,"vcl-busy-indicator",1)(21,"br")(22,"br"),n.TgZ(23,"h3"),n._uU(24,"Indicator using custom image"),n.qZA(),n.TgZ(25,"vcl-busy-indicator",2),n._uU(26," Loading...\n"),n.qZA(),n._UZ(27,"br")(28,"br"),n.TgZ(29,"h3"),n._uU(30,"Busy container"),n.qZA(),n.TgZ(31,"div",3),n._UZ(32,"vcl-busy-indicator"),n.TgZ(33,"button",4),n.NdJ("click",function(){return a.makeBusy()}),n._uU(34,"Make container busy for 3 secs"),n.qZA()()),2&i&&(n.xp6(8),n.Q6J("layout","horizontal"),n.xp6(23),n.Q6J("vcl-busy-indicator-cover",a.isBusy))},directives:[m.B,f,p.r],styles:[".huge img{width:5em;height:5em}\n"],encapsulation:2}),t})();function d(){return{label:"Busy Indicator",tabs:{Demo:B,"README.md":{type:"md",content:'# Busy Indicator\n\n## vcl-busy-indicator\n\nAn indicator to show that a lasting operation is currently in progress.\n\n### Usage\n\n```html\n<vcl-busy-indicator>\n  <span>Loading\u2026</span>\n</vcl-busy-indicator>\n\n<vcl-busy-indicator icon="fas fa-circle-notch fa-spin fa-3x fa-fw"></vcl-busy-indicator>\n```\n\n### API\n\n#### vcl-busy-indicator Attributes\n\n| Name                | Type                       | Default    | Description\n| ------------------- | -------------------------- | ---------- |--------------\n| `icon`              | string                     | "Loading"  | Alternative icon\n| `label`             | string                     | "Loading"  | icon aria label\n| `imageHeight`       | string                     | "3em"      | icon height\n| `imageWidth`        | string                     | "3em"      | icon width\n| `layout`            | "vertical" or "horizontal" | "vertical" | The indicator direction\n\n## [vcl-busy-indicator-cover]\n\nCovers an element with a layer showing the vcl-busy-indicator to indicate a busy state and prevent user interaction.\n\n### Usage\n\n```html\n<div [vcl-busy-indicator-cover]="true">\n  <vcl-busy-indicator></vcl-busy-indicator>\n  This content will be covered by the layer\n</div>\n```\n\n### API\n\n#### vcl-busy-indicator-cover Attributes\n\n| Name                       | Type                       | Default    | Description\n| ------------------------   | -------------------------- | ---------- |--------------\n| `vcl-busy-indicator-cover` | boolean                    | false      | Shows the layer when `true`\n'},"demo.component.html":{type:"html",content:o(3060)},"demo.component.ts":{type:"ts",content:o(597)}}}}let C=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.ez,l.l,r.V4c,r.NhM,r.OD1,y.Bz.forChild([{path:"",component:l.z,data:{demo:d}}])]]}),t})()},3060:(u,e,o)=>{o.r(e),o.d(e,{default:()=>s});const s='<h3>Simple busy indicator</h3>\n<vcl-busy-indicator>Loading...</vcl-busy-indicator>\n<br><br>\n\n<h3>Horizontal busy indicator</h3>\n<vcl-busy-indicator [layout]="\'horizontal\'" class="huge">Loading...</vcl-busy-indicator>\n<br><br>\n\n<h3>Busy indicator with text</h3>\n<vcl-busy-indicator>\n    Loading...\n  </vcl-busy-indicator>\n<br><br>\n\n<h3>Indicator using icon font</h3>\n<vcl-busy-indicator  icon="fas fa-circle-notch fa-spin fa-3x fa-fw"></vcl-busy-indicator>\n  <br><br>\n\n<h3>Indicator using custom image</h3>\n<vcl-busy-indicator imageSrc="http://www.polidoor.com/assets/img/loading.gif">\n  Loading...\n</vcl-busy-indicator>\n<br><br>\n\n<h3>Busy container</h3>\n<div [vcl-busy-indicator-cover]="isBusy" class="container row justify-center" style="height:15em">\n  <vcl-busy-indicator></vcl-busy-indicator>\n  <button vcl-button (click)="makeBusy()">Make container busy for 3 secs</button>\n</div>\n'},597:(u,e,o)=>{o.r(e),o.d(e,{default:()=>s});const s="import { Component, ViewEncapsulation } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n  encapsulation: ViewEncapsulation.None,\n  styles: [`\n    .huge img {\n      width: 5em;\n      height: 5em;\n    }\n  `]\n})\nexport class BusyDemoComponent {\n  isBusy = false;\n\n  makeBusy() {\n    this.isBusy = true;\n    setTimeout(() => this.isBusy = false, 3000);\n  }\n}\n"}}]);