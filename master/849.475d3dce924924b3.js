"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[849],{4849:(d,i,e)=>{e.r(i),e.d(i,{OffClickDemoModule:()=>g,demo:()=>m});var c=e(9808),r=e(5852),C=e(6272),s=e(9155),n=e(4893),k=e(6590);function u(o,l){if(1&o&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.hij("offClicks triggered: ",t.clicks,"")}}function a(o,l){1&o&&(n.TgZ(0,"div"),n._uU(1,"Click anywhere to trigger an offClick"),n.qZA())}let p=(()=>{class o{constructor(){this.clicks=0}offClick(){this.clicks++}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["ng-component"]],decls:11,vars:2,consts:[[2,"border","2px solid","background-color","red","width","300px","height","300px",3,"vclOffClick"],[2,"border","1px solid","background-color","green","width","50%","margin","auto","height","100px"],[4,"ngIf"]],template:function(t,f){1&t&&(n.TgZ(0,"div",0),n.NdJ("vclOffClick",function(){return f.offClick()}),n._uU(1," DIV 1 "),n._UZ(2,"br"),n._uU(3," Click somewhere outside to trigger an offClick "),n.TgZ(4,"div",1),n._uU(5," DIV 2 "),n._UZ(6,"br"),n._uU(7," This is a subelement of DIV 1 "),n.qZA(),n.qZA(),n._UZ(8,"br"),n.YNc(9,u,2,1,"div",2),n.YNc(10,a,2,0,"div",2)),2&t&&(n.xp6(9),n.Q6J("ngIf",f.clicks>0),n.xp6(1),n.Q6J("ngIf",0===f.clicks))},directives:[k.T,c.O5],encapsulation:2}),o})();function m(){return{label:"Off Click",tabs:{Demo:p,"README.md":{type:"md",content:"# offClick directive\n\nThe offClick event fires when a click event is handled and its source is not(!) the element or any of its subelements.  \n\n## Usage\n\n```js\nimport { VCLOffClickModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLOffClickModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\noffClick() is called when the click`s source is not DIV1 or DIV2  \n\n```html\n<div (offClick)=\"offClick()\">\n  DIV1\n  <div>\n    DIV2\n  </div>\n</div>\n```\n"},"demo.component.html":{type:"html",content:e(9144)},"demo.component.ts":{type:"ts",content:e(6258)}}}}let g=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[c.ez,s.l,C.tI5,r.Bz.forChild([{path:"",component:s.z,data:{demo:m}}])]]}),o})()},9144:(d,i,e)=>{e.r(i),e.d(i,{default:()=>c});const c='<div (vclOffClick)="offClick()" style="border: 2px solid;background-color:red;width:300px;height:300px">\n  DIV 1\n  <br>\n  Click somewhere outside to trigger an offClick\n  <div style="border: 1px solid;background-color:green;width:50%;margin:auto; height:100px">\n    DIV 2 \n    <br>\n    This is a subelement of DIV 1 \n  </div>\n</div>\n<br>\n<div *ngIf="clicks > 0">offClicks triggered: {{clicks}}</div>\n<div *ngIf="clicks === 0">Click anywhere to trigger an offClick</div>\n  \n'},6258:(d,i,e)=>{e.r(i),e.d(i,{default:()=>c});const c="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class OffClickDemoComponent  {\n\n  clicks = 0;\n\n  offClick() {\n    this.clicks++;\n  }\n}\n"}}]);