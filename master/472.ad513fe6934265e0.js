"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[472],{472:(a,c,t)=>{t.r(c),t.d(c,{ButtonDemoModule:()=>g,demo:()=>r});var s=t(6895),p=t(4629),d=t(9787),b=t(9155),n=t(4650),v=t(6994),A=t(6447);let f=(()=>{class e{someAction(u){console.log("Action handler, param:",u)}}return e.\u0275fac=function(u){return new(u||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["ng-component"]],decls:23,vars:1,consts:[[1,"wrapper","gutter-2"],["vcl-button","",3,"click"],["vcl-button","","disabled","true",3,"click"],["vcl-button","",1,"emphasized",3,"click"],["vcl-button","","square","","title","Square Button",3,"click"],["icon","fas:bolt"],["vclAppend","","icon","fas:bolt"],["vclPrepend","","icon","fas:bolt"],["vcl-button","",3,"selectable","click"]],template:function(u,l){1&u&&(n.TgZ(0,"div",0)(1,"button",1),n.NdJ("click",function(o){return l.someAction(o)}),n._uU(2,"Button"),n.qZA(),n.TgZ(3,"button",2),n.NdJ("click",function(o){return l.someAction(o)}),n._uU(4," Disabled button "),n.qZA(),n.TgZ(5,"button",3),n.NdJ("click",function(o){return l.someAction(o)}),n._uU(6," Emphasized label button "),n.qZA(),n.TgZ(7,"a",1),n.NdJ("click",function(o){return l.someAction(o)}),n._uU(8,"Button (a-tag)"),n.qZA(),n.TgZ(9,"button",4),n.NdJ("click",function(o){return l.someAction(o)}),n._UZ(10,"vcl-icon",5),n.qZA(),n.TgZ(11,"button",1),n.NdJ("click",function(o){return l.someAction(o)}),n._uU(12," Appended icon "),n._UZ(13,"vcl-icon",6),n.qZA(),n.TgZ(14,"button",1),n.NdJ("click",function(o){return l.someAction(o)}),n._UZ(15,"vcl-icon",7),n._uU(16," Prepended icon "),n.qZA(),n.TgZ(17,"button",1),n.NdJ("click",function(o){return l.someAction(o)}),n._UZ(18,"vcl-icon",7),n._uU(19," Prepended and appended icon "),n._UZ(20,"vcl-icon",6),n.qZA(),n.TgZ(21,"button",8),n.NdJ("click",function(o){return l.someAction(o.selected)}),n._uU(22," Selectable button "),n.qZA()()),2&u&&(n.xp6(21),n.Q6J("selectable",!0))},dependencies:[v.r,A.o],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:-moz-fit-content;width:fit-content}"]}),e})();function r(){return{label:"Button",tabs:{Demo:f,"README.md":{type:"md",content:'# vcl-button\n\n`vcl-button` enhance the HTML `<button>` with styling, features and icogram support.\nIt is the main control for triggering actions.\n\n## Usage\n\n```js\nimport { VCLButtonModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLButtonModule ],\n  ...\n})\nexport class AppComponent { ... }\n```\n\n### Basic button\n\n```html\n<button vcl-button (click)="someAction($event)">Action</button>\n```\n\n```html\n<button vcl-button [selectable]="true" (select)="someAction($event)">Select</button>\n```\n\n### Icogram button\n\n```html\n<button vcl-button>\n  <vcl-icogram appIcon="fas:bolt">Action</vcl-icogram>\n</button>\n```\n\n### Square button\n\n```html\n<button vcl-button square>\n  <vcl-icon icon="fas:bolt"></vcl-icon>\n</button>\n```\n\n### API\n\n#### vcl-button/vcl-button square attributes\n\n| Name                | Type        | Default  | Description\n| ------------        | ----------- | -------- |--------------\n| `disabled`          | boolean     | false    | State to indicate that the button is disabled\n| `selectable`        | boolean     | false    | Button selected state toggles if clicked when true\n| `selected`          | boolean     | false    | Whether the button is selected\n| `square`            | boolean     | false    | Whether the button is square\n\n#### vcl-button/vcl-button  events\n\n| Name                | Description\n| ------------        | --------------\n| `selectedChange`    | Triggered when the button is selected state changes\n'},"demo.component.html":{type:"html",content:t(3491)},"demo.component.scss":{type:"scss",content:t(452)},"demo.component.ts":{type:"ts",content:t(3259)}}}}let g=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[s.ez,b.l,d.V4c,d.NhM,d.o14,p.Bz.forChild([{path:"",component:b.z,data:{demo:r}}])]}),e})()},3491:(a,c,t)=>{t.r(c),t.d(c,{default:()=>s});const s='<div class="wrapper gutter-2">\n  <button vcl-button (click)="someAction($event)">Button</button>\n  <button vcl-button (click)="someAction($event)" disabled="true">\n    Disabled button\n  </button>\n\n  <button vcl-button (click)="someAction($event)" class="emphasized">\n    Emphasized label button\n  </button>\n\n  <a vcl-button (click)="someAction($event)">Button (a-tag)</a>\n\n  <button vcl-button square title="Square Button" (click)="someAction($event)">\n    <vcl-icon icon="fas:bolt"></vcl-icon>\n  </button>\n\n  <button vcl-button (click)="someAction($event)">\n    Appended icon\n    <vcl-icon vclAppend icon="fas:bolt"></vcl-icon>\n  </button>\n\n  <button vcl-button (click)="someAction($event)">\n    <vcl-icon vclPrepend icon="fas:bolt"></vcl-icon>\n    Prepended icon\n  </button>\n\n  <button vcl-button (click)="someAction($event)">\n    <vcl-icon vclPrepend icon="fas:bolt"></vcl-icon>\n    Prepended and appended icon\n    <vcl-icon vclAppend icon="fas:bolt"></vcl-icon>\n  </button>\n\n  <button vcl-button [selectable]="true" (click)="someAction($event.selected)">\n    Selectable button\n  </button>\n</div>\n'},3259:(a,c,t)=>{t.r(c),t.d(c,{default:()=>s});const s="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n  styleUrls: ['demo.component.scss'],\n})\nexport class ButtonDemoComponent {\n  someAction(param) {\n    console.log('Action handler, param:', param);\n  }\n}\n"},452:(a,c,t)=>{t.r(c),t.d(c,{default:()=>s});const s=".wrapper {\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n}"}}]);