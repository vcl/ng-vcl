"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[70],{9070:(g,r,d)=>{d.r(r),d.d(r,{BadgeDemoModule:()=>B,demo:()=>v});var l=d(6814),u=d(2911),i=d(2916),s=d(2320),e=d(5879);const p=["*"];let m=(()=>{var n;class c{constructor(){this.classVCLBadge=!0}get vclPrimary(){return"primary"===this.type}get vclSuccess(){return"success"===this.type}get vclInfo(){return"info"===this.type}get vclWarning(){return"warning"===this.type}get vclError(){return"error"===this.type}}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["vcl-badge"]],hostVars:12,hostBindings:function(t,o){2&t&&e.ekj("badge",o.classVCLBadge)("primary",o.vclPrimary)("success",o.vclSuccess)("info",o.vclInfo)("warning",o.vclWarning)("error",o.vclError)},inputs:{type:"type"},ngContentSelectors:p,decls:1,vars:0,template:function(t,o){1&t&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),c})(),y=(()=>{var n;class c{constructor(){this.rounded=!0}}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["vcl-badge","vclRounded",""]],hostVars:2,hostBindings:function(t,o){2&t&&e.ekj("rounded",o.rounded)}}),c})(),b=(()=>{var n;class c{}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:26,vars:0,consts:[[1,"gutter-2","pb-2"],["type","primary"],["type","success"],["type","info"],["type","warning"],["type","error"],[1,"gutter-2"],["vclRounded",""],["vclRounded","","type","primary"],["vclRounded","","type","success"],["vclRounded","","type","info"],["vclRounded","","type","warning"],["vclRounded","","type","error"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"vcl-badge"),e._uU(2,"default"),e.qZA(),e.TgZ(3,"vcl-badge",1),e._uU(4,"primary"),e.qZA(),e.TgZ(5,"vcl-badge",2),e._uU(6,"success"),e.qZA(),e.TgZ(7,"vcl-badge",3),e._uU(8,"info"),e.qZA(),e.TgZ(9,"vcl-badge",4),e._uU(10,"warning"),e.qZA(),e.TgZ(11,"vcl-badge",5),e._uU(12,"error"),e.qZA()(),e.TgZ(13,"div",6)(14,"vcl-badge",7),e._uU(15,"default"),e.qZA(),e.TgZ(16,"vcl-badge",8),e._uU(17,"primary"),e.qZA(),e.TgZ(18,"vcl-badge",9),e._uU(19,"success"),e.qZA(),e.TgZ(20,"vcl-badge",10),e._uU(21,"info"),e.qZA(),e.TgZ(22,"vcl-badge",11),e._uU(23,"warning"),e.qZA(),e.TgZ(24,"vcl-badge",12),e._uU(25,"error"),e.qZA()())},dependencies:[m,y],encapsulation:2}),c})();const f='# vcl-badge\n\nA visually highlighted tag to attribute items.\n\n## Usage\n\n```typescript\nimport { VCLBadgeModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLBadgeModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-badge>default</vcl-badge>\n\n<vcl-badge type="primary">primary</vcl-badge>\n\n<vcl-badge type="success">success</vcl-badge>\n\n<vcl-badge type="info">info</vcl-badge>\n\n<vcl-badge type="warning">warning</vcl-badge>\n\n<vcl-badge type="error">error</vcl-badge>\n\n<vcl-badge vclRounded>default</vcl-badge>\n\n<vcl-badge vclRounded type="primary">primary</vcl-badge>\n\n<vcl-badge vclRounded type="success">success</vcl-badge>\n\n<vcl-badge vclRounded type="info">info</vcl-badge>\n\n<vcl-badge vclRounded type="warning">warning</vcl-badge>\n\n<vcl-badge vclRounded type="error">error</vcl-badge>\n```\n\n### API\n\n#### vcl-badge attributes\n\n| Name   | Type   | Default | Description      |\n| ------ | ------ | ------- | ---------------- |\n| `type` | string |         | the badge\'s type |\n\n#### vclRounded directive\n\n| Name         | Description             |\n| ------------ | ----------------------- |\n| `vclRounded` | Enables rounded corners |\n';function v(){return{label:"Badge",tabs:{Demo:b,"README.md":{type:"md",content:f},"demo.component.html":{type:"html",content:d(9385)},"demo.component.ts":{type:"ts",content:d(3178)}}}}let B=(()=>{var n;class c{}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,s.l,i.$6y,u.Bz.forChild([{path:"",component:s.z,data:{demo:v}}])]}),c})()},9385:(g,r,d)=>{d.r(r),d.d(r,{default:()=>l});const l='<div class="gutter-2 pb-2">\n  <vcl-badge>default</vcl-badge>\n  <vcl-badge type="primary">primary</vcl-badge>\n  <vcl-badge type="success">success</vcl-badge>\n  <vcl-badge type="info">info</vcl-badge>\n  <vcl-badge type="warning">warning</vcl-badge>\n  <vcl-badge type="error">error</vcl-badge>\n</div>\n\n<div class="gutter-2">\n  <vcl-badge vclRounded>default</vcl-badge>\n  <vcl-badge vclRounded type="primary">primary</vcl-badge>\n  <vcl-badge vclRounded type="success">success</vcl-badge>\n  <vcl-badge vclRounded type="info">info</vcl-badge>\n  <vcl-badge vclRounded type="warning">warning</vcl-badge>\n  <vcl-badge vclRounded type="error">error</vcl-badge>\n</div>\n'},3178:(g,r,d)=>{d.r(r),d.d(r,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class BadgeDemoComponent {}\n"}}]);