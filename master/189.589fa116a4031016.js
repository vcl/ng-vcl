"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[189],{8189:(v,l,a)=>{a.r(l),a.d(l,{RatingDemoModule:()=>T,demo:()=>s});var r=a(6814),h=a(95),p=a(2911),d=a(2916),m=a(2320),n=a(5879),f=a(9514),Z=a(8711),A=a(5605);let C=(()=>{var t;class g{constructor(){this.horizontalValue=2.5,this.verticalValue=2.5,this.customValue=7.5}}return(t=g).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-component"]],decls:50,vars:14,consts:[[3,"value","valueChange"],["type","vertical",3,"value","valueChange"],[3,"ratingItemCount","value","valueChange"],["for","vInputEx1",1,"form-control-label"],[3,"value"],["rating1","vclRating"],[2,"color","red"],[2,"color","orange"],[2,"color","green"],[3,"target"],["rating2","vclRating"],["ratingFullIcon","fas fa-battery-full","ratingHalfIcon","fas fa-battery-half","ratingEmptyIcon","fas fa-battery-empty",3,"value"]],template:function(i,e){if(1&i&&(n.TgZ(0,"h2"),n._uU(1,"Horizontal"),n.qZA(),n.TgZ(2,"vcl-rating",0),n.NdJ("valueChange",function(o){return e.horizontalValue=o}),n.qZA(),n.TgZ(3,"div"),n._uU(4),n.qZA(),n.TgZ(5,"h2"),n._uU(6,"Vertical"),n.qZA(),n.TgZ(7,"vcl-rating",1),n.NdJ("valueChange",function(o){return e.verticalValue=o}),n.qZA(),n.TgZ(8,"div"),n._uU(9),n.qZA(),n.TgZ(10,"h2"),n._uU(11,"Custom Star Count"),n.qZA(),n.TgZ(12,"vcl-rating",2),n.NdJ("valueChange",function(o){return e.customValue=o}),n.qZA(),n.TgZ(13,"div"),n._uU(14),n.qZA(),n.TgZ(15,"h2"),n._uU(16,"With label"),n.qZA(),n.TgZ(17,"label",3),n._uU(18),n.ALo(19,"async"),n.qZA(),n.TgZ(20,"vcl-rating",4,5)(22,"vcl-rating-item")(23,"span",6),n._uU(24,"Bad"),n.qZA()(),n.TgZ(25,"vcl-rating-item")(26,"span",7),n._uU(27,"Average"),n.qZA()(),n.TgZ(28,"vcl-rating-item")(29,"span",8),n._uU(30,"Good"),n.qZA()()(),n.TgZ(31,"h2"),n._uU(32,"With rich label"),n.qZA(),n.TgZ(33,"label",3),n._uU(34," Rating: "),n._UZ(35,"vcl-rating-item-label",9),n.qZA(),n.TgZ(36,"vcl-rating",4,10)(38,"vcl-rating-item")(39,"span",6),n._uU(40,"Bad"),n.qZA()(),n.TgZ(41,"vcl-rating-item")(42,"span",7),n._uU(43,"Average"),n.qZA()(),n.TgZ(44,"vcl-rating-item")(45,"span",8),n._uU(46,"Good"),n.qZA()()(),n.TgZ(47,"h2"),n._uU(48,"Custom Icons"),n.qZA(),n._UZ(49,"vcl-rating",11)),2&i){const u=n.MAs(21),o=n.MAs(37);n.xp6(2),n.Q6J("value",e.horizontalValue),n.xp6(2),n.hij("Value: ",e.horizontalValue,""),n.xp6(3),n.Q6J("value",e.verticalValue),n.xp6(2),n.hij("Value: ",e.verticalValue,""),n.xp6(3),n.Q6J("ratingItemCount",10)("value",e.customValue),n.xp6(2),n.hij("Value: ",e.customValue,""),n.xp6(4),n.hij(" Rating: ",n.lcZ(19,12,u.labelChange),"\n"),n.xp6(2),n.Q6J("value",2),n.xp6(15),n.Q6J("target",o),n.xp6(1),n.Q6J("value",2),n.xp6(13),n.Q6J("value",2.5)}},dependencies:[f.A,Z.a,A.I,r.Ov],encapsulation:2}),g})();const y="# vcl-rating\n\n## Usage\n\n```html\n<vcl-rating [(value)]=\"value\"></vcl-rating>\n```\n\n### API\n\n#### Attributes\n\n| Name          | Type                              | Default          | Description                      |\n| ------------- | --------------------------------- | ---------------- | -------------------------------- |\n| `value` _(1)_ | number                            | 0                | set the value                    |\n| `type`        | 'horizontal', 'vertical', 'small' | 'horizontal'     | Rating type.                     |\n| `fullStar`    | string                            | 'vcl:star'       | Full star icon                   |\n| `halfStar`    | string                            | 'vcl:star-half'  | Half star icon                   |\n| `emptyStar`   | string                            | 'vcl:star-empty' | Empty star icon                  |\n| `starCount`   | number                            | 5                | Max rating                       |\n| `readonly`    | boolean                           | false            | Whether the stars can be clicked |\n\n#### Events\n\n| Name          | Type   | Description                  |\n| ------------- | ------ | ---------------------------- |\n| `valueChange` | number | emits when the value changes |\n";function s(){return{label:"Rating",tabs:{Demo:C,"README.md":{type:"md",content:y},"demo.component.html":{type:"html",content:a(5497)},"demo.component.ts":{type:"ts",content:a(2026)}}}}let T=(()=>{var t;class g{}return(t=g).\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.ez,h.u5,m.l,d.D6p,p.Bz.forChild([{path:"",component:m.z,data:{demo:s}}])]}),g})()},5497:(v,l,a)=>{a.r(l),a.d(l,{default:()=>r});const r='<h2>Horizontal</h2>\n<vcl-rating [(value)]="horizontalValue"></vcl-rating>\n<div>Value: {{ horizontalValue }}</div>\n\n<h2>Vertical</h2>\n<vcl-rating type="vertical" [(value)]="verticalValue"></vcl-rating>\n<div>Value: {{ verticalValue }}</div>\n\n<h2>Custom Star Count</h2>\n<vcl-rating [ratingItemCount]="10" [(value)]="customValue"></vcl-rating>\n<div>Value: {{ customValue }}</div>\n\n<h2>With label</h2>\n\n<label class="form-control-label" for="vInputEx1">\n  Rating: {{ rating1.labelChange | async }}\n</label>\n<vcl-rating [value]="2" #rating1="vclRating">\n  <vcl-rating-item><span style="color: red">Bad</span></vcl-rating-item>\n  <vcl-rating-item><span style="color: orange">Average</span></vcl-rating-item>\n  <vcl-rating-item><span style="color: green">Good</span></vcl-rating-item>\n</vcl-rating>\n\n<h2>With rich label</h2>\n\n<label class="form-control-label" for="vInputEx1">\n  Rating: <vcl-rating-item-label [target]="rating2"></vcl-rating-item-label>\n</label>\n<vcl-rating [value]="2" #rating2="vclRating">\n  <vcl-rating-item><span style="color: red">Bad</span></vcl-rating-item>\n  <vcl-rating-item><span style="color: orange">Average</span></vcl-rating-item>\n  <vcl-rating-item><span style="color: green">Good</span></vcl-rating-item>\n</vcl-rating>\n\n<h2>Custom Icons</h2>\n<vcl-rating\n  ratingFullIcon="fas fa-battery-full"\n  ratingHalfIcon="fas fa-battery-half"\n  ratingEmptyIcon="fas fa-battery-empty"\n  [value]="2.5"></vcl-rating>\n'},2026:(v,l,a)=>{a.r(l),a.d(l,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class RatingDemoComponent {\n  horizontalValue = 2.5;\n  verticalValue = 2.5;\n  customValue = 7.5;\n}\n"}}]);