"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[338],{8338:(p,n,t)=>{t.r(n),t.d(n,{ToolTipDemoModule:()=>f,demo:()=>r});var e=t(164),s=t(177),a=t(3323),c=t(9042),o=t(4438),h=t(2533),T=t(6939);function v(l,u){1&l&&(o.j41(0,"div",12),o.nrm(1,"img",13),o.j41(2,"span",14)(3,"b"),o.EFF(4,"Tooltip"),o.k0s(),o.EFF(5," with "),o.j41(6,"i"),o.EFF(7,"rich"),o.k0s(),o.EFF(8," content "),o.k0s()())}let m=(()=>{class l{static{this.\u0275fac=function(i){return new(i||l)}}static{this.\u0275cmp=o.VBU({type:l,selectors:[["ng-component"]],standalone:!1,decls:28,vars:4,consts:[["richTT","cdkPortal"],[2,"display","flex","height","100px"],["vclTooltip","Tooltip on the top",2,"background-color","#E6E6E6","flex","1"],["vclTooltip","Tooltip on the right","vclTooltipPosition","right",2,"background-color","#D8D8D8","flex","1"],["vclTooltip","Tooltip on the left","vclTooltipPosition","left",2,"background-color","#BDBDBD","flex","1"],["vclTooltip","Tooltip on the bottom","vclTooltipPosition","bottom",2,"background-color","#A4A4A4","flex","1"],[2,"display","flex","height","100px","padding-top","2em"],["vclTooltip","Tooltip with no pointer arrow",2,"background-color","#E6E6E6","flex","1",3,"vclTooltipArrowPointer"],["vclTooltip","Tooltip with delay before showing",2,"background-color","#D8D8D8","flex","1",3,"vclTooltipShowDelay"],["vclTooltip","Tooltip with delay before hiding",2,"background-color","#BDBDBD","flex","1",3,"vclTooltipHideDelay"],["cdkPortal",""],[2,"background-color","#A4A4A4","flex","1",3,"vclTooltip"],[1,"row","center"],["ngSrc","http://lorempixel.com/50/50/cats/"],[1,"gutter-margin-l-r"]],template:function(i,y){if(1&i&&(o.j41(0,"div",1)(1,"div",2)(2,"p"),o.EFF(3,"Tooltip on the top"),o.k0s()(),o.j41(4,"div",3)(5,"p"),o.EFF(6,"Tooltip on the right"),o.k0s()(),o.j41(7,"div",4)(8,"p"),o.EFF(9,"Tooltip on the left"),o.k0s()(),o.j41(10,"div",5)(11,"p"),o.EFF(12,"Tooltip on the bottom"),o.k0s()()(),o.j41(13,"div",6)(14,"div",7)(15,"p"),o.EFF(16,"Tooltip with no pointer arrow"),o.k0s()(),o.j41(17,"div",8)(18,"p"),o.EFF(19,"Tooltip with delay before showing"),o.k0s()(),o.j41(20,"div",9)(21,"p"),o.EFF(22,"Tooltip with delay before hiding"),o.k0s()(),o.DNE(23,v,9,0,"ng-template",10,0,o.C5r),o.j41(25,"div",11)(26,"p"),o.EFF(27,"Tooltip with rich content"),o.k0s()()()),2&i){const D=o.sdS(24);o.R7$(14),o.Y8G("vclTooltipArrowPointer",!1),o.R7$(3),o.Y8G("vclTooltipShowDelay",500),o.R7$(3),o.Y8G("vclTooltipHideDelay",500),o.R7$(5),o.Y8G("vclTooltip",D)}},dependencies:[h.d,T.bV],styles:["p[_ngcontent-%COMP%]{text-align:center;padding-top:30px}"]})}}return l})();const g='# vcl-tooltip\n\nThe tooltip directive provides a message or rich content that is displayed when the user hovers an element.\n\n## Usage\n\n```html\n<div vclTooltip="Tooltip message">\n  ...\n</div>\n```\n\nDefault tooltip placement is at the `top` of target element. To change tooltip placement set `vclTooltipPosition` value to either `right`, `left` or `bottom`.\n\n```html\n<div vclTooltip="Tooltip message" vclTooltipPosition="right">\n  ...\n</div>\n```\n\nYou can also use rich content.\n\n```html\n<div [vclTooltip]="tt">\n  <vcl-tooltip #tt="vclTooltip">\n    <p>My content</p>\n  </vcl-tooltip>\n</div>\n```\n\n### API\n\n#### [vclTooltip] Attributes\n\n| Name                      | Type                  | Default                             | Description\n| ------------              | --------------        | -------------                       |--------------\n| `vclTooltip`              | string \\| TemplateRef |                                     | Content displayed within the tooltip \n| `vclTooltipPosition`      | string \\| string[]    | [\'top\', \'right\', \'left\', \'bottom\']; | Placement of the tooltip\n| `vclTooltipArrowPointer`  | boolean               | true                                | Whether to show the tooltip\'s arrow pointer\n| `vclTooltipShowDelay`     | number                | 0                                   | Delay before showing the tooltip after hovering the element\n| `vclTooltipHideDelay`     | number                | 0                                   | Delay before hiding the tooltip after the element loses hover\n| `vclTooltipCursor`        | string                | help                                | Cursor type when hovering\n';function r(){return{label:"Tooltip",tabs:{Demo:m,"README.md":{type:"md",content:g},"demo.component.html":{type:"html",content:t(6636)},"demo.component.ts":{type:"ts",content:t(7596)}}}}let f=(()=>{class l{static{this.\u0275fac=function(i){return new(i||l)}}static{this.\u0275mod=o.$C({type:l})}static{this.\u0275inj=o.G2t({imports:[s.MD,c.q,a.$FV,e.iI.forChild([{path:"",component:c.D,data:{demo:r}}])]})}}return l})()},6636:(p,n,t)=>{t.r(n),t.d(n,{default:()=>e});const e='<div style="display: flex; height:100px">\n  <div vclTooltip="Tooltip on the top" style="background-color:#E6E6E6;flex:1">\n    <p>Tooltip on the top</p>\n  </div>\n  <div vclTooltip="Tooltip on the right" vclTooltipPosition="right" style="background-color:#D8D8D8;flex:1">\n    <p>Tooltip on the right</p>\n  </div>\n  <div vclTooltip="Tooltip on the left" vclTooltipPosition="left" style="background-color:#BDBDBD;flex:1">\n    <p>Tooltip on the left</p>\n  </div>\n  <div vclTooltip="Tooltip on the bottom" vclTooltipPosition="bottom" style="background-color:#A4A4A4;flex:1">\n    <p>Tooltip on the bottom</p>\n  </div>\n</div>\n<div style="display: flex; height:100px; padding-top: 2em">\n  <div vclTooltip="Tooltip with no pointer arrow" [vclTooltipArrowPointer]="false" style="background-color:#E6E6E6;flex:1">\n    <p>Tooltip with no pointer arrow</p>\n  </div>\n  <div vclTooltip="Tooltip with delay before showing" [vclTooltipShowDelay]="500" style="background-color:#D8D8D8;flex:1">\n    <p>Tooltip with delay before showing</p>\n  </div>\n  <div vclTooltip="Tooltip with delay before hiding" [vclTooltipHideDelay]="500" style="background-color:#BDBDBD;flex:1">\n    <p>Tooltip with delay before hiding</p>\n  </div>\n\n  <ng-template cdkPortal #richTT="cdkPortal">\n    <div class="row center">\n      <img ngSrc="http://lorempixel.com/50/50/cats/" />\n      <span class="gutter-margin-l-r"><b>Tooltip</b> with <i>rich</i> content </span>\n    </div>\n  </ng-template>\n\n  <div [vclTooltip]="richTT" style="background-color:#A4A4A4;flex:1">\n    <p>Tooltip with rich content</p>\n  </div>\n</div>\n'},7596:(p,n,t)=>{t.r(n),t.d(n,{default:()=>e});const e="import { Component } from '@angular/core';\n\n@Component({\n    templateUrl: './demo.component.html',\n    styles: [\n        `\n      p {\n        text-align: center;\n        padding-top: 30px;\n      }\n    `,\n    ],\n    standalone: false\n})\nexport class ToolTipDemoComponent {}\n"}}]);