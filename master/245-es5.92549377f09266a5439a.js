!function(){"use strict";function o(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[245],{47245:function(t,n,i){i.r(n),i.d(n,{ToolTipDemoModule:function(){return g},demo:function(){return s}});var l=i(95454),e=i(16274),p=i(36196),r=i(62518),c=i(84271),a=i(6e3),T=i(62718);function h(o,t){1&o&&(c.TgZ(0,"div",12),c._UZ(1,"img",13),c.TgZ(2,"span",14),c.TgZ(3,"b"),c._uU(4,"Tooltip"),c.qZA(),c._uU(5," with "),c.TgZ(6,"i"),c._uU(7,"rich"),c.qZA(),c._uU(8," content "),c.qZA(),c.qZA())}var d,v=((d=function t(){o(this,t)}).\u0275fac=function(o){return new(o||d)},d.\u0275cmp=c.Xpm({type:d,selectors:[["ng-component"]],decls:28,vars:4,consts:[[2,"display","flex","height","100px"],["vclTooltip","Tooltip on the top",2,"background-color","#E6E6E6","flex","1"],["vclTooltip","Tooltip on the right","vclTooltipPosition","right",2,"background-color","#D8D8D8","flex","1"],["vclTooltip","Tooltip on the left","vclTooltipPosition","left",2,"background-color","#BDBDBD","flex","1"],["vclTooltip","Tooltip on the bottom","vclTooltipPosition","bottom",2,"background-color","#A4A4A4","flex","1"],[2,"display","flex","height","100px","padding-top","2em"],["vclTooltip","Tooltip with no pointer arrow",2,"background-color","#E6E6E6","flex","1",3,"vclTooltipArrowPointer"],["vclTooltip","Tooltip with delay before showing",2,"background-color","#D8D8D8","flex","1",3,"vclTooltipShowDelay"],["vclTooltip","Tooltip with delay before hiding",2,"background-color","#BDBDBD","flex","1",3,"vclTooltipHideDelay"],["cdkPortal",""],["richTT","cdkPortal"],[2,"background-color","#A4A4A4","flex","1",3,"vclTooltip"],[1,"row","center"],["src","http://lorempixel.com/50/50/cats/"],[1,"gutter-margin-l-r"]],template:function(o,t){if(1&o&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"p"),c._uU(3,"Tooltip on the top"),c.qZA(),c.qZA(),c.TgZ(4,"div",2),c.TgZ(5,"p"),c._uU(6,"Tooltip on the right"),c.qZA(),c.qZA(),c.TgZ(7,"div",3),c.TgZ(8,"p"),c._uU(9,"Tooltip on the left"),c.qZA(),c.qZA(),c.TgZ(10,"div",4),c.TgZ(11,"p"),c._uU(12,"Tooltip on the bottom"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(13,"div",5),c.TgZ(14,"div",6),c.TgZ(15,"p"),c._uU(16,"Tooltip with no pointer arrow"),c.qZA(),c.qZA(),c.TgZ(17,"div",7),c.TgZ(18,"p"),c._uU(19,"Tooltip with delay before showing"),c.qZA(),c.qZA(),c.TgZ(20,"div",8),c.TgZ(21,"p"),c._uU(22,"Tooltip with delay before hiding"),c.qZA(),c.qZA(),c.YNc(23,h,9,0,"ng-template",9,10,c.W1O),c.TgZ(25,"div",11),c.TgZ(26,"p"),c._uU(27,"Tooltip with rich content"),c.qZA(),c.qZA(),c.qZA()),2&o){var n=c.MAs(24);c.xp6(14),c.Q6J("vclTooltipArrowPointer",!1),c.xp6(3),c.Q6J("vclTooltipShowDelay",500),c.xp6(3),c.Q6J("vclTooltipHideDelay",500),c.xp6(5),c.Q6J("vclTooltip",n)}},directives:[a.i,T.ig],styles:["p[_ngcontent-%COMP%]{text-align:center;padding-top:30px}"]}),d);function s(){return{label:"Tooltip",tabs:{Demo:v,"README.md":{type:"md",content:'# vcl-tooltip\n\nThe tooltip directive provides a message or rich content that is displayed when the user hovers an element.\n\n## Usage\n\n```html\n<div vclTooltip="Tooltip message">\n  ...\n</div>\n```\n\nDefault tooltip placement is at the `top` of target element. To change tooltip placement set `vclTooltipPosition` value to either `right`, `left` or `bottom`.\n\n```html\n<div vclTooltip="Tooltip message" vclTooltipPosition="right">\n  ...\n</div>\n```\n\nYou can also use rich content.\n\n```html\n<div [vclTooltip]="tt">\n  <vcl-tooltip #tt="vclTooltip">\n    <p>My content</p>\n  </vcl-tooltip>\n</div>\n```\n\n### API\n\n#### [vclTooltip] Attributes\n\n| Name                      | Type                  | Default                             | Description\n| ------------              | --------------        | -------------                       |--------------\n| `vclTooltip`              | string \\| TemplateRef |                                     | Content displayed within the tooltip \n| `vclTooltipPosition`      | string \\| string[]    | [\'top\', \'right\', \'left\', \'bottom\']; | Placement of the tooltip\n| `vclTooltipArrowPointer`  | boolean               | true                                | Whether to show the tooltip\'s arrow pointer\n| `vclTooltipShowDelay`     | number                | 0                                   | Delay before showing the tooltip after hovering the element\n| `vclTooltipHideDelay`     | number                | 0                                   | Delay before hiding the tooltip after the element loses hover\n| `vclTooltipCursor`        | string                | help                                | Cursor type when hovering\n'},"demo.component.html":{type:"html",content:i(42079)},"demo.component.ts":{type:"ts",content:i(61013)}}}}var g=function(){var t=function t(){o(this,t)};return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[e.ez,r.l,p.Bnf,l.Bz.forChild([{path:"",component:r.z,data:{demo:s}}])]]}),t}()},42079:function(o,t,n){n.r(t),t.default='<div style="display: flex; height:100px">\n  <div vclTooltip="Tooltip on the top" style="background-color:#E6E6E6;flex:1">\n    <p>Tooltip on the top</p>\n  </div>\n  <div vclTooltip="Tooltip on the right" vclTooltipPosition="right" style="background-color:#D8D8D8;flex:1">\n    <p>Tooltip on the right</p>\n  </div>\n  <div vclTooltip="Tooltip on the left" vclTooltipPosition="left" style="background-color:#BDBDBD;flex:1">\n    <p>Tooltip on the left</p>\n  </div>\n  <div vclTooltip="Tooltip on the bottom" vclTooltipPosition="bottom" style="background-color:#A4A4A4;flex:1">\n    <p>Tooltip on the bottom</p>\n  </div>\n</div>\n<div style="display: flex; height:100px; padding-top: 2em">\n  <div vclTooltip="Tooltip with no pointer arrow" [vclTooltipArrowPointer]="false" style="background-color:#E6E6E6;flex:1">\n    <p>Tooltip with no pointer arrow</p>\n  </div>\n  <div vclTooltip="Tooltip with delay before showing" [vclTooltipShowDelay]="500" style="background-color:#D8D8D8;flex:1">\n    <p>Tooltip with delay before showing</p>\n  </div>\n  <div vclTooltip="Tooltip with delay before hiding" [vclTooltipHideDelay]="500" style="background-color:#BDBDBD;flex:1">\n    <p>Tooltip with delay before hiding</p>\n  </div>\n\n  <ng-template cdkPortal #richTT="cdkPortal">\n    <div class="row center">\n      <img src="http://lorempixel.com/50/50/cats/" />\n      <span class="gutter-margin-l-r"><b>Tooltip</b> with <i>rich</i> content </span>\n    </div>  \n  </ng-template>\n  \n  <div [vclTooltip]="richTT" style="background-color:#A4A4A4;flex:1">\n    <p>Tooltip with rich content</p>\n  </div>\n</div>\n'},61013:function(o,t,n){n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n    templateUrl: './demo.component.html',\n    styles: [`p{ text-align:center;padding-top:30px}`]\n})\nexport class ToolTipDemoComponent  {\n\n}\n"}}])}();