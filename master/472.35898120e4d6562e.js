"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[472],{472:(a,l,t)=>{t.r(l),t.d(l,{ButtonDemoModule:()=>g,demo:()=>d});var b=t(9808),p=t(5852),m=t(6272),r=t(9155),n=t(4893),v=t(6994),A=t(6447);let f=(()=>{class e{someAction(u){console.log("Action handler, param:",u)}}return e.\u0275fac=function(u){return new(u||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["ng-component"]],decls:38,vars:1,consts:[["vcl-button","",3,"click"],["vcl-button","","disabled","true",3,"click"],["vcl-button","",1,"emphasized",3,"click"],["vcl-button","","square","","title","Square Button",3,"click"],["icon","fas:bolt"],["vclAppend","","icon","fas:bolt"],["vclPrepend","","icon","fas:bolt"],["vcl-button","",3,"selectable","click"]],template:function(u,c){1&u&&(n.TgZ(0,"button",0),n.NdJ("click",function(o){return c.someAction(o)}),n._uU(1,"Button"),n.qZA(),n._UZ(2,"br")(3,"br"),n.TgZ(4,"button",1),n.NdJ("click",function(o){return c.someAction(o)}),n._uU(5,"Disabled button"),n.qZA(),n._UZ(6,"br")(7,"br"),n.TgZ(8,"button",2),n.NdJ("click",function(o){return c.someAction(o)}),n._uU(9,"Emphasized label button"),n.qZA(),n._UZ(10,"br")(11,"br"),n.TgZ(12,"a",0),n.NdJ("click",function(o){return c.someAction(o)}),n._uU(13,"Button (a-tag)"),n.qZA(),n._UZ(14,"br")(15,"br"),n.TgZ(16,"button",3),n.NdJ("click",function(o){return c.someAction(o)}),n._UZ(17,"vcl-icon",4),n.qZA(),n._UZ(18,"br")(19,"br"),n.TgZ(20,"button",0),n.NdJ("click",function(o){return c.someAction(o)}),n._uU(21," Appended icon "),n._UZ(22,"vcl-icon",5),n.qZA(),n._UZ(23,"br")(24,"br"),n.TgZ(25,"button",0),n.NdJ("click",function(o){return c.someAction(o)}),n._UZ(26,"vcl-icon",6),n._uU(27," Prepended icon\n"),n.qZA(),n._UZ(28,"br")(29,"br"),n.TgZ(30,"button",0),n.NdJ("click",function(o){return c.someAction(o)}),n._UZ(31,"vcl-icon",6),n._uU(32," Prepended and appended icon "),n._UZ(33,"vcl-icon",5),n.qZA(),n._UZ(34,"br")(35,"br"),n.TgZ(36,"button",7),n.NdJ("click",function(o){return c.someAction(o.selected)}),n._uU(37,"Selectable button"),n.qZA()),2&u&&(n.xp6(36),n.Q6J("selectable",!0))},directives:[v.r,A.o],encapsulation:2}),e})();function d(){return{label:"Button",tabs:{Demo:f,"README.md":{type:"md",content:'# vcl-button\n\n`vcl-button` enhance the HTML `<button>` with styling, features and icogram support.\nIt is the main control for triggering actions.\n\n## Usage\n\n```js\nimport { VCLButtonModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLButtonModule ],\n  ...\n})\nexport class AppComponent { ... }\n```\n\n### Basic button\n\n```html\n<button vcl-button (click)="someAction($event)">Action</button>\n```\n\n```html\n<button vcl-button [selectable]="true" (select)="someAction($event)">Select</button>\n```\n\n### Icogram button\n\n```html\n<button vcl-button>\n  <vcl-icogram appIcon="fas:bolt">Action</vcl-icogram>\n</button>\n```\n\n### Square button\n\n```html\n<button vcl-button square>\n  <vcl-icon icon="fas:bolt"></vcl-icon>\n</button>\n```\n\n### API\n\n#### vcl-button/vcl-button square attributes\n\n| Name                | Type        | Default  | Description\n| ------------        | ----------- | -------- |--------------\n| `disabled`          | boolean     | false    | State to indicate that the button is disabled\n| `selectable`        | boolean     | false    | Button selected state toggles if clicked when true\n| `selected`          | boolean     | false    | Whether the button is selected\n| `square`            | boolean     | false    | Whether the button is square\n\n#### vcl-button/vcl-button  events\n\n| Name                | Description\n| ------------        | --------------\n| `selectedChange`    | Triggered when the button is selected state changes\n'},"demo.component.html":{type:"html",content:t(3491)},"demo.component.ts":{type:"ts",content:t(3259)}}}}let g=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[b.ez,r.l,m.V4c,m.NhM,m.o14,p.Bz.forChild([{path:"",component:r.z,data:{demo:d}}])]]}),e})()},3491:(a,l,t)=>{t.r(l),t.d(l,{default:()=>b});const b='<button vcl-button (click)="someAction($event)">Button</button>\n<br><br>\n<button vcl-button (click)="someAction($event)" disabled=true>Disabled button</button>\n<br><br>\n<button vcl-button (click)="someAction($event)" class="emphasized">Emphasized label button</button>\n<br><br>\n<a vcl-button (click)="someAction($event)">Button (a-tag)</a>\n<br><br>\n<button vcl-button square title="Square Button" (click)="someAction($event)">\n  <vcl-icon icon="fas:bolt"></vcl-icon>\n</button>\n<br><br>\n<button vcl-button (click)="someAction($event)" >\n  Appended icon\n  <vcl-icon vclAppend icon="fas:bolt"></vcl-icon>\n</button>\n<br><br>\n<button vcl-button (click)="someAction($event)">\n  <vcl-icon vclPrepend icon="fas:bolt"></vcl-icon>\n  Prepended icon\n</button>\n<br><br>\n<button vcl-button (click)="someAction($event)">\n  <vcl-icon vclPrepend icon="fas:bolt"></vcl-icon>\n  Prepended and appended icon\n  <vcl-icon vclAppend icon="fas:bolt"></vcl-icon>\n</button>\n<br><br>\n<button vcl-button [selectable]="true" (click)="someAction($event.selected)">Selectable button</button>\n'},3259:(a,l,t)=>{t.r(l),t.d(l,{default:()=>b});const b="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class ButtonDemoComponent {\n  someAction(param) {\n    console.log('Action handler, param:', param);\n  }\n}\n"}}]);