"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[61],{2061:(v,n,o)=>{o.r(n),o.d(n,{PopoverDemoModule:()=>x,demo:()=>g});var r=o(6814),u=o(2911),m=o(2916),d=o(2320),t=o(9212),h=o(4770),f=o(5296);function P(e,D){if(1&e){const p=t.EpF();t.TgZ(0,"div",8),t._uU(1," Popover is connected to the target "),t._UZ(2,"br"),t.TgZ(3,"button",9),t.NdJ("click",function(){t.CHM(p),t.oxw();const c=t.MAs(9);return t.KtG(c.open())}),t._uU(4,"Show additional Popover"),t.qZA(),t._uU(5," \xa0 "),t.TgZ(6,"button",9),t.NdJ("click",function(){t.CHM(p),t.oxw();const c=t.MAs(7);return t.KtG(c.close())}),t._uU(7,"Close Popovers"),t.qZA()()}}function b(e,D){1&e&&(t.TgZ(0,"div",10),t._uU(1," Popover is connected to the target"),t._UZ(2,"br"),t.qZA())}const C=()=>({originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}),y=e=>[e];let T=(()=>{class e{static#t=this.\u0275fac=function(l){return new(l||e)};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:10,vars:9,consts:[[2,"min-height","500px","width","100%"],["vcl-button","",3,"selectable","selected","click"],[2,"position","absolute","top","300px","left","200px","padding","10px","border","3px double green"],["target",""],["vclPopover","",3,"target","afterClose"],["popover1","vclPopover"],["vclPopover","",3,"closeOnOffClick","target","positions"],["popover2","vclPopover"],[2,"width","400px"],["vcl-button","",3,"click"],[2,"width","300px","height","50px"]],template:function(l,c){if(1&l){const i=t.EpF();t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){t.CHM(i);const a=t.MAs(7);return t.KtG(a.toggle())}),t._uU(2,"Toggle Popover"),t.qZA(),t.TgZ(3,"div",2,3),t._uU(5," The target "),t.qZA()(),t.YNc(6,P,8,0,"ng-template",4,5,t.W1O),t.NdJ("afterClose",function(){t.CHM(i);const a=t.MAs(9);return t.KtG(a.close())}),t.YNc(8,b,3,0,"ng-template",6,7,t.W1O)}if(2&l){const i=t.MAs(4),s=t.MAs(7);t.xp6(1),t.Q6J("selectable",!0)("selected",s.visible),t.xp6(5),t.Q6J("target",i),t.xp6(2),t.Q6J("closeOnOffClick",!0)("target",i)("positions",t.VKq(7,y,t.DdM(6,C)))}},dependencies:[h.k,f.r],encapsulation:2})}return e})();const A='# vcl-popover\n\nA popover is an overlay floating at the position of the target element.\n\n## Usage\n\n```html\n<div #myTarget>any dom element can be the target</div>\n<button (click)="popover.toggle()"> \n\n<vcl-popover #popover="vclPopover" [target]="myTarget" [positions]="myPositions">\n  Popover-Content\n</vcl-popover>\n```\n\n### API\n\n#### Attributes\n\nName                | Type                          | Default             | Description\n------------------- | ---------------------------   | ------------------- | ------------------- \n`target`            | ElementRef \\| HTMLElement     |                     | the target must be an ElementRef instance\n`positions`         | [ConnectedPosition](https://material.angular.io/cdk/overlay/api#ConnectedPosition) | | @angular/cdk OverlayPosition array\n`scrollStrategy`    | [ScrollStrategy](https://material.angular.io/cdk/overlay/api#ScrollStrategy) | | @angular/cdk ScrollStrategy\n`closeOnOffClick`   | boolean                       | false               | Close popover when on a click outside of the popover\n`visible` _(1)_     | boolean                       | false               | the popover is hidden if false\n  \n#### Methods  \n\nName             | Attributes | Description\n------------     | ---------- | --------------------------------------------------------------------------\n`open`           |            | will show the popover\n`close`          |            | will hide the popover\n`toggle`         |            | will show when hidden and hide when visible\n\n_(1) Supports Two-way binding_\n';function g(){return{label:"Popover",tabs:{Demo:T,"README.md":{type:"md",content:A},"demo.component.html":{type:"html",content:o(7693)},"demo.component.ts":{type:"ts",content:o(4894)}}}}let x=(()=>{class e{static#t=this.\u0275fac=function(l){return new(l||e)};static#o=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[r.ez,d.l,m.NGg,m.V4c,u.Bz.forChild([{path:"",component:d.z,data:{demo:g}}])]})}return e})()},7693:(v,n,o)=>{o.r(n),o.d(n,{default:()=>r});const r='<div style="min-height:500px; width: 100%;">\n  <button vcl-button [selectable]="true" [selected]="popover1.visible" (click)="popover1.toggle()">Toggle Popover</button>\n  <div #target style="position: absolute; top: 300px; left: 200px; padding: 10px; border: 3px double green">\n    The target\n  </div>\n</div>\n\n<ng-template\n  vclPopover\n  #popover1="vclPopover"\n  [target]="target"\n  (afterClose)="popover2.close()">\n  <div style="width: 400px">\n    Popover is connected to the target <br>\n    <button vcl-button (click)="popover2.open()">Show additional Popover</button>\n    &nbsp;\n    <button vcl-button (click)="popover1.close();">Close Popovers</button>\n  </div>\n</ng-template>\n\n<ng-template\n  vclPopover\n  #popover2="vclPopover"\n  [closeOnOffClick]="true"\n  [target]="target"\n  [positions]="[{\n    originX: \'start\',\n    originY: \'top\',\n    overlayX: \'start\',\n    overlayY: \'bottom\'\n  }]">\n  <div style="width: 300px; height: 50px;">\n      Popover is connected to the target<br>\n  </div>\n</ng-template>\n'},4894:(v,n,o)=>{o.r(n),o.d(n,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class PopoverDemoComponent {}\n"}}]);