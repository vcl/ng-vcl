"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[540],{8540:(c,n,t)=>{t.r(n),t.d(n,{ToolTipDemoModule:()=>f,demo:()=>T});var i=t(5852),d=t(9808),a=t(6272),r=t(9155),o=t(4893),h=t(4306),v=t(7429);function s(l,p){1&l&&(o.TgZ(0,"div",12),o._UZ(1,"img",13),o.TgZ(2,"span",14)(3,"b"),o._uU(4,"Tooltip"),o.qZA(),o._uU(5," with "),o.TgZ(6,"i"),o._uU(7,"rich"),o.qZA(),o._uU(8," content "),o.qZA()())}let m=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["ng-component"]],decls:28,vars:4,consts:[[2,"display","flex","height","100px"],["vclTooltip","Tooltip on the top",2,"background-color","#E6E6E6","flex","1"],["vclTooltip","Tooltip on the right","vclTooltipPosition","right",2,"background-color","#D8D8D8","flex","1"],["vclTooltip","Tooltip on the left","vclTooltipPosition","left",2,"background-color","#BDBDBD","flex","1"],["vclTooltip","Tooltip on the bottom","vclTooltipPosition","bottom",2,"background-color","#A4A4A4","flex","1"],[2,"display","flex","height","100px","padding-top","2em"],["vclTooltip","Tooltip with no pointer arrow",2,"background-color","#E6E6E6","flex","1",3,"vclTooltipArrowPointer"],["vclTooltip","Tooltip with delay before showing",2,"background-color","#D8D8D8","flex","1",3,"vclTooltipShowDelay"],["vclTooltip","Tooltip with delay before hiding",2,"background-color","#BDBDBD","flex","1",3,"vclTooltipHideDelay"],["cdkPortal",""],["richTT","cdkPortal"],[2,"background-color","#A4A4A4","flex","1",3,"vclTooltip"],[1,"row","center"],["src","http://lorempixel.com/50/50/cats/"],[1,"gutter-margin-l-r"]],template:function(e,D){if(1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"p"),o._uU(3,"Tooltip on the top"),o.qZA()(),o.TgZ(4,"div",2)(5,"p"),o._uU(6,"Tooltip on the right"),o.qZA()(),o.TgZ(7,"div",3)(8,"p"),o._uU(9,"Tooltip on the left"),o.qZA()(),o.TgZ(10,"div",4)(11,"p"),o._uU(12,"Tooltip on the bottom"),o.qZA()()(),o.TgZ(13,"div",5)(14,"div",6)(15,"p"),o._uU(16,"Tooltip with no pointer arrow"),o.qZA()(),o.TgZ(17,"div",7)(18,"p"),o._uU(19,"Tooltip with delay before showing"),o.qZA()(),o.TgZ(20,"div",8)(21,"p"),o._uU(22,"Tooltip with delay before hiding"),o.qZA()(),o.YNc(23,s,9,0,"ng-template",9,10,o.W1O),o.TgZ(25,"div",11)(26,"p"),o._uU(27,"Tooltip with rich content"),o.qZA()()()),2&e){const u=o.MAs(24);o.xp6(14),o.Q6J("vclTooltipArrowPointer",!1),o.xp6(3),o.Q6J("vclTooltipShowDelay",500),o.xp6(3),o.Q6J("vclTooltipHideDelay",500),o.xp6(5),o.Q6J("vclTooltip",u)}},directives:[h.i,v.ig],styles:["p[_ngcontent-%COMP%]{text-align:center;padding-top:30px}"]}),l})();function T(){return{label:"Tooltip",tabs:{Demo:m,"README.md":{type:"md",content:'# vcl-tooltip\n\nThe tooltip directive provides a message or rich content that is displayed when the user hovers an element.\n\n## Usage\n\n```html\n<div vclTooltip="Tooltip message">\n  ...\n</div>\n```\n\nDefault tooltip placement is at the `top` of target element. To change tooltip placement set `vclTooltipPosition` value to either `right`, `left` or `bottom`.\n\n```html\n<div vclTooltip="Tooltip message" vclTooltipPosition="right">\n  ...\n</div>\n```\n\nYou can also use rich content.\n\n```html\n<div [vclTooltip]="tt">\n  <vcl-tooltip #tt="vclTooltip">\n    <p>My content</p>\n  </vcl-tooltip>\n</div>\n```\n\n### API\n\n#### [vclTooltip] Attributes\n\n| Name                      | Type                  | Default                             | Description\n| ------------              | --------------        | -------------                       |--------------\n| `vclTooltip`              | string \\| TemplateRef |                                     | Content displayed within the tooltip \n| `vclTooltipPosition`      | string \\| string[]    | [\'top\', \'right\', \'left\', \'bottom\']; | Placement of the tooltip\n| `vclTooltipArrowPointer`  | boolean               | true                                | Whether to show the tooltip\'s arrow pointer\n| `vclTooltipShowDelay`     | number                | 0                                   | Delay before showing the tooltip after hovering the element\n| `vclTooltipHideDelay`     | number                | 0                                   | Delay before hiding the tooltip after the element loses hover\n| `vclTooltipCursor`        | string                | help                                | Cursor type when hovering\n'},"demo.component.html":{type:"html",content:t(2079)},"demo.component.ts":{type:"ts",content:t(1013)}}}}let f=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[[d.ez,r.l,a.Bnf,i.Bz.forChild([{path:"",component:r.z,data:{demo:T}}])]]}),l})()},2079:(c,n,t)=>{t.r(n),t.d(n,{default:()=>i});const i='<div style="display: flex; height:100px">\n  <div vclTooltip="Tooltip on the top" style="background-color:#E6E6E6;flex:1">\n    <p>Tooltip on the top</p>\n  </div>\n  <div vclTooltip="Tooltip on the right" vclTooltipPosition="right" style="background-color:#D8D8D8;flex:1">\n    <p>Tooltip on the right</p>\n  </div>\n  <div vclTooltip="Tooltip on the left" vclTooltipPosition="left" style="background-color:#BDBDBD;flex:1">\n    <p>Tooltip on the left</p>\n  </div>\n  <div vclTooltip="Tooltip on the bottom" vclTooltipPosition="bottom" style="background-color:#A4A4A4;flex:1">\n    <p>Tooltip on the bottom</p>\n  </div>\n</div>\n<div style="display: flex; height:100px; padding-top: 2em">\n  <div vclTooltip="Tooltip with no pointer arrow" [vclTooltipArrowPointer]="false" style="background-color:#E6E6E6;flex:1">\n    <p>Tooltip with no pointer arrow</p>\n  </div>\n  <div vclTooltip="Tooltip with delay before showing" [vclTooltipShowDelay]="500" style="background-color:#D8D8D8;flex:1">\n    <p>Tooltip with delay before showing</p>\n  </div>\n  <div vclTooltip="Tooltip with delay before hiding" [vclTooltipHideDelay]="500" style="background-color:#BDBDBD;flex:1">\n    <p>Tooltip with delay before hiding</p>\n  </div>\n\n  <ng-template cdkPortal #richTT="cdkPortal">\n    <div class="row center">\n      <img src="http://lorempixel.com/50/50/cats/" />\n      <span class="gutter-margin-l-r"><b>Tooltip</b> with <i>rich</i> content </span>\n    </div>  \n  </ng-template>\n  \n  <div [vclTooltip]="richTT" style="background-color:#A4A4A4;flex:1">\n    <p>Tooltip with rich content</p>\n  </div>\n</div>\n'},1013:(c,n,t)=>{t.r(n),t.d(n,{default:()=>i});const i="import { Component } from '@angular/core';\n\n@Component({\n    templateUrl: './demo.component.html',\n    styles: [`p{ text-align:center;padding-top:30px}`]\n})\nexport class ToolTipDemoComponent  {\n\n}\n"}}]);