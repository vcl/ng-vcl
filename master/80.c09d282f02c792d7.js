"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[80],{5080:(v,n,o)=>{o.r(n),o.d(n,{PopoverDemoModule:()=>T,demo:()=>g});var r=o(177),u=o(164),d=o(3323),m=o(9042),t=o(4438),h=o(3762),f=o(8070);const P=()=>({originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}),b=e=>[e];function C(e,k){if(1&e){const p=t.RV6();t.j41(0,"div",8),t.EFF(1," Popover is connected to the target "),t.j41(2,"div",9)(3,"button",10),t.bIt("click",function(){t.eBV(p),t.XpG();const i=t.sdS(7);return t.Njj(i.close())}),t.EFF(4,"Close Popovers"),t.k0s(),t.j41(5,"button",10),t.bIt("click",function(){t.eBV(p),t.XpG();const i=t.sdS(9);return t.Njj(i.open())}),t.EFF(6,"Show additional Popover"),t.k0s()()()}}function y(e,k){1&e&&(t.j41(0,"div",11),t.EFF(1," Popover is connected to the target"),t.nrm(2,"br"),t.k0s())}let D=(()=>{class e{static{this.\u0275fac=function(l){return new(l||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["ng-component"]],standalone:!1,decls:10,vars:9,consts:[["target",""],["popover1","vclPopover"],["popover2","vclPopover"],[2,"min-height","500px","width","100%"],["vcl-button","",3,"click","selectable","selected"],[2,"position","absolute","top","300px","left","200px","padding","10px","border","3px double green"],["vclPopover","",3,"afterClose","target"],["vclPopover","",3,"closeOnOffClick","target","positions"],[1,"p-2",2,"width","400px"],[1,"loose-button-group","row","justify-content-end","mt-2"],["vcl-button","",3,"click"],[2,"width","300px","height","50px"]],template:function(l,i){if(1&l){const s=t.RV6();t.j41(0,"div",3)(1,"button",4),t.bIt("click",function(){t.eBV(s);const a=t.sdS(7);return t.Njj(a.toggle())}),t.EFF(2,"Toggle Popover"),t.k0s(),t.j41(3,"div",5,0),t.EFF(5," The target "),t.k0s()(),t.DNE(6,C,7,0,"ng-template",6,1,t.C5r),t.bIt("afterClose",function(){t.eBV(s);const a=t.sdS(9);return t.Njj(a.close())}),t.DNE(8,y,3,0,"ng-template",7,2,t.C5r)}if(2&l){const s=t.sdS(4),c=t.sdS(7);t.R7$(),t.Y8G("selectable",!0)("selected",c.visible),t.R7$(5),t.Y8G("target",s),t.R7$(2),t.Y8G("closeOnOffClick",!0)("target",s)("positions",t.eq3(7,b,t.lJ4(6,P)))}},dependencies:[h.H,f.Q],encapsulation:2})}}return e})();const E='# vcl-popover\n\nA popover is an overlay floating at the position of the target element.\n\n## Usage\n\n```html\n<div #myTarget>any dom element can be the target</div>\n<button (click)="popover.toggle()"> \n\n<vcl-popover #popover="vclPopover" [target]="myTarget" [positions]="myPositions">\n  Popover-Content\n</vcl-popover>\n```\n\n### API\n\n#### Attributes\n\nName                | Type                          | Default             | Description\n------------------- | ---------------------------   | ------------------- | ------------------- \n`target`            | ElementRef \\| HTMLElement     |                     | the target must be an ElementRef instance\n`positions`         | [ConnectedPosition](https://material.angular.io/cdk/overlay/api#ConnectedPosition) | | @angular/cdk OverlayPosition array\n`scrollStrategy`    | [ScrollStrategy](https://material.angular.io/cdk/overlay/api#ScrollStrategy) | | @angular/cdk ScrollStrategy\n`closeOnOffClick`   | boolean                       | false               | Close popover when on a click outside of the popover\n`visible` _(1)_     | boolean                       | false               | the popover is hidden if false\n  \n#### Methods  \n\nName             | Attributes | Description\n------------     | ---------- | --------------------------------------------------------------------------\n`open`           |            | will show the popover\n`close`          |            | will hide the popover\n`toggle`         |            | will show when hidden and hide when visible\n\n_(1) Supports Two-way binding_\n';function g(){return{label:"Popover",tabs:{Demo:D,"README.md":{type:"md",content:E},"demo.component.html":{type:"html",content:o(6822)},"demo.component.ts":{type:"ts",content:o(9058)}}}}let T=(()=>{class e{static{this.\u0275fac=function(l){return new(l||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[r.MD,m.q,d.PKk,d.e7Q,u.iI.forChild([{path:"",component:m.D,data:{demo:g}}])]})}}return e})()},6822:(v,n,o)=>{o.r(n),o.d(n,{default:()=>r});const r='<div style="min-height:500px; width: 100%;">\n  <button vcl-button [selectable]="true" [selected]="popover1.visible" (click)="popover1.toggle()">Toggle Popover</button>\n  <div #target style="position: absolute; top: 300px; left: 200px; padding: 10px; border: 3px double green">\n    The target\n  </div>\n</div>\n\n<ng-template\n  vclPopover\n  #popover1="vclPopover"\n  [target]="target"\n  (afterClose)="popover2.close()">\n  <div class="p-2" style="width: 400px;">\n    Popover is connected to the target\n    <div class="loose-button-group row justify-content-end mt-2">\n      <button vcl-button (click)="popover1.close();">Close Popovers</button>\n      <button vcl-button (click)="popover2.open()">Show additional Popover</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template\n  vclPopover\n  #popover2="vclPopover"\n  [closeOnOffClick]="true"\n  [target]="target"\n  [positions]="[{\n    originX: \'start\',\n    originY: \'top\',\n    overlayX: \'start\',\n    overlayY: \'bottom\'\n  }]">\n  <div style="width: 300px; height: 50px;">\n      Popover is connected to the target<br>\n  </div>\n</ng-template>\n'},9058:(v,n,o)=>{o.r(n),o.d(n,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n    templateUrl: 'demo.component.html',\n    standalone: false\n})\nexport class PopoverDemoComponent {}\n"}}]);