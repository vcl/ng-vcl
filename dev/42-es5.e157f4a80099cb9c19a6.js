!function(){function o(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{PFVF:function(o,t,i){"use strict";i.r(t),t.default='<div style="display: flex; height:100px">\n  <div vclTooltip="Tooltip on the top" style="background-color:#E6E6E6;flex:1">\n    <p>Tooltip on the top</p>\n  </div>\n  <div vclTooltip="Tooltip on the right" vclTooltipPosition="right" style="background-color:#D8D8D8;flex:1">\n    <p>Tooltip on the right</p>\n  </div>\n  <div vclTooltip="Tooltip on the left" vclTooltipPosition="left" style="background-color:#BDBDBD;flex:1">\n    <p>Tooltip on the left</p>\n  </div>\n  <div vclTooltip="Tooltip on the bottom" vclTooltipPosition="bottom" style="background-color:#A4A4A4;flex:1">\n    <p>Tooltip on the bottom</p>\n  </div>\n</div>\n<div style="display: flex; height:100px; padding-top: 2em">\n  <div vclTooltip="Tooltip with no pointer arrow" [vclTooltipArrowPointer]="false" style="background-color:#E6E6E6;flex:1">\n    <p>Tooltip with no pointer arrow</p>\n  </div>\n  <div vclTooltip="Tooltip with delay before showing" [vclTooltipShowDelay]="500" style="background-color:#D8D8D8;flex:1">\n    <p>Tooltip with delay before showing</p>\n  </div>\n  <div vclTooltip="Tooltip with delay before hiding" [vclTooltipHideDelay]="500" style="background-color:#BDBDBD;flex:1">\n    <p>Tooltip with delay before hiding</p>\n  </div>\n\n  <ng-template cdkPortal #richTT="cdkPortal">\n    <div class="row center">\n      <img src="http://lorempixel.com/50/50/cats/" />\n      <span class="gutter-margin-l-r"><b>Tooltip</b> with <i>rich</i> content </span>\n    </div>  \n  </ng-template>\n  \n  <div [vclTooltip]="richTT" style="background-color:#A4A4A4;flex:1">\n    <p>Tooltip with rich content</p>\n  </div>\n</div>\n'},dxku:function(t,i,n){"use strict";n.r(i),n.d(i,"demo",(function(){return b})),n.d(i,"ToolTipDemoModule",(function(){return g}));var l=n("tyNb"),e=n("ofXK"),p=n("19H1"),c=n("2FIb"),r=n("fXoL"),a=n("Oou1"),d=n("+rOU");function h(o,t){1&o&&(r.Qb(0,"div",12),r.Lb(1,"img",13),r.Qb(2,"span",14),r.Qb(3,"b"),r.wc(4,"Tooltip"),r.Pb(),r.wc(5," with "),r.Qb(6,"i"),r.wc(7,"rich"),r.Pb(),r.wc(8," content "),r.Pb(),r.Pb())}var s,v=((s=function t(){o(this,t)}).\u0275fac=function(o){return new(o||s)},s.\u0275cmp=r.Eb({type:s,selectors:[["ng-component"]],decls:28,vars:4,consts:[[2,"display","flex","height","100px"],["vclTooltip","Tooltip on the top",2,"background-color","#E6E6E6","flex","1"],["vclTooltip","Tooltip on the right","vclTooltipPosition","right",2,"background-color","#D8D8D8","flex","1"],["vclTooltip","Tooltip on the left","vclTooltipPosition","left",2,"background-color","#BDBDBD","flex","1"],["vclTooltip","Tooltip on the bottom","vclTooltipPosition","bottom",2,"background-color","#A4A4A4","flex","1"],[2,"display","flex","height","100px","padding-top","2em"],["vclTooltip","Tooltip with no pointer arrow",2,"background-color","#E6E6E6","flex","1",3,"vclTooltipArrowPointer"],["vclTooltip","Tooltip with delay before showing",2,"background-color","#D8D8D8","flex","1",3,"vclTooltipShowDelay"],["vclTooltip","Tooltip with delay before hiding",2,"background-color","#BDBDBD","flex","1",3,"vclTooltipHideDelay"],["cdkPortal",""],["richTT","cdkPortal"],[2,"background-color","#A4A4A4","flex","1",3,"vclTooltip"],[1,"row","center"],["src","http://lorempixel.com/50/50/cats/"],[1,"gutter-margin-l-r"]],template:function(o,t){if(1&o&&(r.Qb(0,"div",0),r.Qb(1,"div",1),r.Qb(2,"p"),r.wc(3,"Tooltip on the top"),r.Pb(),r.Pb(),r.Qb(4,"div",2),r.Qb(5,"p"),r.wc(6,"Tooltip on the right"),r.Pb(),r.Pb(),r.Qb(7,"div",3),r.Qb(8,"p"),r.wc(9,"Tooltip on the left"),r.Pb(),r.Pb(),r.Qb(10,"div",4),r.Qb(11,"p"),r.wc(12,"Tooltip on the bottom"),r.Pb(),r.Pb(),r.Pb(),r.Qb(13,"div",5),r.Qb(14,"div",6),r.Qb(15,"p"),r.wc(16,"Tooltip with no pointer arrow"),r.Pb(),r.Pb(),r.Qb(17,"div",7),r.Qb(18,"p"),r.wc(19,"Tooltip with delay before showing"),r.Pb(),r.Pb(),r.Qb(20,"div",8),r.Qb(21,"p"),r.wc(22,"Tooltip with delay before hiding"),r.Pb(),r.Pb(),r.uc(23,h,9,0,"ng-template",9,10,r.vc),r.Qb(25,"div",11),r.Qb(26,"p"),r.wc(27,"Tooltip with rich content"),r.Pb(),r.Pb(),r.Pb()),2&o){var i=r.lc(24);r.yb(14),r.gc("vclTooltipArrowPointer",!1),r.yb(3),r.gc("vclTooltipShowDelay",500),r.yb(3),r.gc("vclTooltipHideDelay",500),r.yb(5),r.gc("vclTooltip",i)}},directives:[a.a,d.a],styles:["p[_ngcontent-%COMP%]{ text-align:center;padding-top:30px}"]}),s);function b(){return{label:"Tooltip",tabs:{Demo:v,"README.md":{type:"md",content:'# vcl-tooltip\n\nThe tooltip directive provides a message or rich content that is displayed when the user hovers an element.\n\n## Usage\n\n```html\n<div vclTooltip="Tooltip message">\n  ...\n</div>\n```\n\nDefault tooltip placement is at the `top` of target element. To change tooltip placement set `vclTooltipPosition` value to either `right`, `left` or `bottom`.\n\n```html\n<div vclTooltip="Tooltip message" vclTooltipPosition="right">\n  ...\n</div>\n```\n\nYou can also use rich content.\n\n```html\n<div [vclTooltip]="tt">\n  <vcl-tooltip #tt="vclTooltip">\n    <p>My content</p>\n  </vcl-tooltip>\n</div>\n```\n\n### API\n\n#### [vclTooltip] Attributes\n\n| Name                      | Type                  | Default                             | Description\n| ------------              | --------------        | -------------                       |--------------\n| `vclTooltip`              | string \\| TemplateRef |                                     | Content displayed within the tooltip \n| `vclTooltipPosition`      | string \\| string[]    | [\'top\', \'right\', \'left\', \'bottom\']; | Placement of the tooltip\n| `vclTooltipArrowPointer`  | boolean               | true                                | Whether to show the tooltip\'s arrow pointer\n| `vclTooltipShowDelay`     | number                | 0                                   | Delay before showing the tooltip after hovering the element\n| `vclTooltipHideDelay`     | number                | 0                                   | Delay before hiding the tooltip after the element loses hover\n| `vclTooltipCursor`        | string                | help                                | Cursor type when hovering\n'},"demo.component.html":{type:"html",content:n("PFVF")},"demo.component.ts":{type:"ts",content:n("uJ3I")}}}}var T,g=((T=function t(){o(this,t)}).\u0275mod=r.Ib({type:T}),T.\u0275inj=r.Hb({factory:function(o){return new(o||T)},imports:[[e.c,c.b,p.VCLTooltipModule,l.g.forChild([{path:"",component:c.a,data:{demo:b}}])]]}),T)},uJ3I:function(o,t,i){"use strict";i.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n    templateUrl: './demo.component.html',\n    styles: [`p{ text-align:center;padding-top:30px}`]\n})\nexport class ToolTipDemoComponent  {\n\n}\n"}}])}();