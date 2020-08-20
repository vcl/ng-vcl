(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Uma3:function(n,i,t){"use strict";t.r(i),i.default="import { Component, ViewEncapsulation } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n  encapsulation: ViewEncapsulation.None,\n  styles: [`\n    .huge img {\n      width: 5em;\n      height: 5em;\n    }\n  `]\n})\nexport class BusyDemoComponent {\n  isBusy = false;\n\n  makeBusy() {\n    this.isBusy = true;\n    setTimeout(() => this.isBusy = false, 3000);\n  }\n}\n"},oZCN:function(n,i,t){"use strict";t.r(i),i.default='<h3>Simple busy indicator</h3>\n<vcl-busy-indicator>Loading...</vcl-busy-indicator>\n<br><br>\n\n<h3>Horizontal busy indicator</h3>\n<vcl-busy-indicator [layout]="\'horizontal\'" class="huge">Loading...</vcl-busy-indicator>\n<br><br>\n\n<h3>Busy indicator with text</h3>\n<vcl-busy-indicator>\n    Loading...\n  </vcl-busy-indicator>\n<br><br>\n\n<h3>Indicator using icon font</h3>\n<vcl-busy-indicator  icon="fas fa-circle-notch fa-spin fa-3x fa-fw"></vcl-busy-indicator>\n  <br><br>\n\n<h3>Indicator using custom image</h3>\n<vcl-busy-indicator imageSrc="http://www.polidoor.com/assets/img/loading.gif">\n  Loading...\n</vcl-busy-indicator>\n<br><br>\n\n<h3>Busy container</h3>\n<div [vcl-busy-indicator-cover]="isBusy" class="container row justify-center" style="height:15em">\n  <vcl-busy-indicator></vcl-busy-indicator>\n  <button vcl-button (click)="makeBusy()">Make container busy for 3 secs</button>\n</div>\n'},uMWy:function(n,i,t){"use strict";t.r(i),t.d(i,"demo",(function(){return d})),t.d(i,"BusyDemoModule",(function(){return y}));var o=t("ofXK"),c=t("tyNb"),e=t("19H1"),a=t("2FIb"),r=t("fXoL"),s=t("dCgY"),u=t("F5Eo"),b=t("6B8K");let l=(()=>{class n{constructor(){this.isBusy=!1}makeBusy(){this.isBusy=!0,setTimeout(()=>this.isBusy=!1,3e3)}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=r.Eb({type:n,selectors:[["ng-component"]],decls:35,vars:2,consts:[[1,"huge",3,"layout"],["icon","fas fa-circle-notch fa-spin fa-3x fa-fw"],["imageSrc","http://www.polidoor.com/assets/img/loading.gif"],[1,"container","row","justify-center",2,"height","15em",3,"vcl-busy-indicator-cover"],["vcl-button","",3,"click"]],template:function(n,i){1&n&&(r.Qb(0,"h3"),r.wc(1,"Simple busy indicator"),r.Pb(),r.Qb(2,"vcl-busy-indicator"),r.wc(3,"Loading..."),r.Pb(),r.Lb(4,"br"),r.Lb(5,"br"),r.Qb(6,"h3"),r.wc(7,"Horizontal busy indicator"),r.Pb(),r.Qb(8,"vcl-busy-indicator",0),r.wc(9,"Loading..."),r.Pb(),r.Lb(10,"br"),r.Lb(11,"br"),r.Qb(12,"h3"),r.wc(13,"Busy indicator with text"),r.Pb(),r.Qb(14,"vcl-busy-indicator"),r.wc(15," Loading... "),r.Pb(),r.Lb(16,"br"),r.Lb(17,"br"),r.Qb(18,"h3"),r.wc(19,"Indicator using icon font"),r.Pb(),r.Lb(20,"vcl-busy-indicator",1),r.Lb(21,"br"),r.Lb(22,"br"),r.Qb(23,"h3"),r.wc(24,"Indicator using custom image"),r.Pb(),r.Qb(25,"vcl-busy-indicator",2),r.wc(26," Loading...\n"),r.Pb(),r.Lb(27,"br"),r.Lb(28,"br"),r.Qb(29,"h3"),r.wc(30,"Busy container"),r.Pb(),r.Qb(31,"div",3),r.Lb(32,"vcl-busy-indicator"),r.Qb(33,"button",4),r.Xb("click",(function(){return i.makeBusy()})),r.wc(34,"Make container busy for 3 secs"),r.Pb(),r.Pb()),2&n&&(r.yb(8),r.gc("layout","horizontal"),r.yb(23),r.gc("vcl-busy-indicator-cover",i.isBusy))},directives:[s.a,u.a,b.b],styles:["\n    .huge img {\n      width: 5em;\n      height: 5em;\n    }\n  "],encapsulation:2}),n})();function d(){return{label:"Busy Indicator",tabs:{Demo:l,"README.md":{type:"md",content:'# Busy Indicator\n\n## vcl-busy-indicator\n\nAn indicator to show that a lasting operation is currently in progress.\n\n### Usage\n\n```html\n<vcl-busy-indicator>\n  <span>Loading\u2026</span>\n</vcl-busy-indicator>\n\n<vcl-busy-indicator icon="fas fa-circle-notch fa-spin fa-3x fa-fw"></vcl-busy-indicator>\n```\n\n### API\n\n#### vcl-busy-indicator Attributes\n\n| Name                | Type                       | Default    | Description\n| ------------------- | -------------------------- | ---------- |--------------\n| `icon`              | string                     | "Loading"  | Alternative icon\n| `label`             | string                     | "Loading"  | icon aria label\n| `imageHeight`       | string                     | "3em"      | icon height\n| `imageWidth`        | string                     | "3em"      | icon width\n| `layout`            | "vertical" or "horizontal" | "vertical" | The indicator direction\n\n## [vcl-busy-indicator-cover]\n\nCovers an element with a layer showing the vcl-busy-indicator to indicate a busy state and prevent user interaction.\n\n### Usage\n\n```html\n<div [vcl-busy-indicator-cover]="true">\n  <vcl-busy-indicator></vcl-busy-indicator>\n  This content will be covered by the layer\n</div>\n```\n\n### API\n\n#### vcl-busy-indicator-cover Attributes\n\n| Name                       | Type                       | Default    | Description\n| ------------------------   | -------------------------- | ---------- |--------------\n| `vcl-busy-indicator-cover` | boolean                    | false      | Shows the layer when `true`\n'},"demo.component.html":{type:"html",content:t("oZCN")},"demo.component.ts":{type:"ts",content:t("Uma3")}}}}let y=(()=>{class n{}return n.\u0275mod=r.Ib({type:n}),n.\u0275inj=r.Hb({factory:function(i){return new(i||n)},imports:[[o.c,a.b,e.VCLButtonModule,e.VCLIconModule,e.VCLBusyIndicatorModule,c.g.forChild([{path:"",component:a.a,data:{demo:d}}])]]}),n})()}}]);