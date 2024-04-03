"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[237],{237:(g,o,a)=>{a.r(o),a.d(o,{RatingDemoModule:()=>y,demo:()=>v});var r=a(177),h=a(4341),p=a(3339),m=a(9042),n=a(4438),d=a(7300),f=a(1900),F=a(9611);let V=(()=>{class e{constructor(){this.horizontalValue=2.5,this.verticalValue=2.5,this.customValue=7.5}static#n=this.\u0275fac=function(i){return new(i||e)};static#a=this.\u0275cmp=n.VBU({type:e,selectors:[["ng-component"]],decls:50,vars:14,consts:[["rating1","vclRating"],["rating2","vclRating"],[3,"valueChange","value"],["type","vertical",3,"valueChange","value"],[3,"valueChange","ratingItemCount","value"],["for","vInputEx1",1,"form-control-label"],[3,"value"],[2,"color","red"],[2,"color","orange"],[2,"color","green"],[3,"target"],["ratingFullIcon","fas fa-battery-full","ratingHalfIcon","fas fa-battery-half","ratingEmptyIcon","fas fa-battery-empty",3,"value"]],template:function(i,t){if(1&i){const s=n.RV6();n.j41(0,"h2"),n.EFF(1,"Horizontal"),n.k0s(),n.j41(2,"vcl-rating",2),n.mxI("valueChange",function(l){return n.eBV(s),n.DH7(t.horizontalValue,l)||(t.horizontalValue=l),n.Njj(l)}),n.k0s(),n.j41(3,"div"),n.EFF(4),n.k0s(),n.j41(5,"h2"),n.EFF(6,"Vertical"),n.k0s(),n.j41(7,"vcl-rating",3),n.mxI("valueChange",function(l){return n.eBV(s),n.DH7(t.verticalValue,l)||(t.verticalValue=l),n.Njj(l)}),n.k0s(),n.j41(8,"div"),n.EFF(9),n.k0s(),n.j41(10,"h2"),n.EFF(11,"Custom Star Count"),n.k0s(),n.j41(12,"vcl-rating",4),n.mxI("valueChange",function(l){return n.eBV(s),n.DH7(t.customValue,l)||(t.customValue=l),n.Njj(l)}),n.k0s(),n.j41(13,"div"),n.EFF(14),n.k0s(),n.j41(15,"h2"),n.EFF(16,"With label"),n.k0s(),n.j41(17,"label",5),n.EFF(18),n.nI1(19,"async"),n.k0s(),n.j41(20,"vcl-rating",6,0)(22,"vcl-rating-item")(23,"span",7),n.EFF(24,"Bad"),n.k0s()(),n.j41(25,"vcl-rating-item")(26,"span",8),n.EFF(27,"Average"),n.k0s()(),n.j41(28,"vcl-rating-item")(29,"span",9),n.EFF(30,"Good"),n.k0s()()(),n.j41(31,"h2"),n.EFF(32,"With rich label"),n.k0s(),n.j41(33,"label",5),n.EFF(34," Rating: "),n.nrm(35,"vcl-rating-item-label",10),n.k0s(),n.j41(36,"vcl-rating",6,1)(38,"vcl-rating-item")(39,"span",7),n.EFF(40,"Bad"),n.k0s()(),n.j41(41,"vcl-rating-item")(42,"span",8),n.EFF(43,"Average"),n.k0s()(),n.j41(44,"vcl-rating-item")(45,"span",9),n.EFF(46,"Good"),n.k0s()()(),n.j41(47,"h2"),n.EFF(48,"Custom Icons"),n.k0s(),n.nrm(49,"vcl-rating",11)}if(2&i){const s=n.sdS(21),c=n.sdS(37);n.R7$(2),n.R50("value",t.horizontalValue),n.R7$(2),n.SpI("Value: ",t.horizontalValue,""),n.R7$(3),n.R50("value",t.verticalValue),n.R7$(2),n.SpI("Value: ",t.verticalValue,""),n.R7$(3),n.Y8G("ratingItemCount",10),n.R50("value",t.customValue),n.R7$(2),n.SpI("Value: ",t.customValue,""),n.R7$(4),n.SpI(" Rating: ",n.bMT(19,12,s.labelChange),"\n"),n.R7$(2),n.Y8G("value",2),n.R7$(15),n.Y8G("target",c),n.R7$(),n.Y8G("value",2),n.R7$(13),n.Y8G("value",2.5)}},dependencies:[d.X,f.m,F.M,r.Jj],encapsulation:2})}return e})();var R=a(3323);const C="# vcl-rating\n\n## Usage\n\n```html\n<vcl-rating [(value)]=\"value\"></vcl-rating>\n```\n\n### API\n\n#### Attributes\n\nName          | Type                              | Default                | Description\n------------- | --------------------------------- | ---------------------- | -----------------------------------------\n`value` _(1)_ | number                            | 0                      | set the value\n`type`        | 'horizontal', 'vertical', 'small' | 'horizontal'           | Rating type.\n`fullStar`    | string                            | 'vcl:star'             | Full star icon\n`halfStar`    | string                            | 'vcl:star-half'        | Half star icon\n`emptyStar`   | string                            | 'vcl:star-empty'       | Empty star icon\n`starCount`   | number                            | 5                      | Max rating\n`readonly`    | boolean                           | false                  | Whether the stars can be clicked\n\n#### Events\n\nName                  | Type             | Description\n--------------------- | ---------------  | -\n`valueChange`         | number           | emits when the value changes\n";function v(){return{label:"Rating",tabs:{Demo:V,"README.md":{type:"md",content:C},"demo.component.html":{type:"html",content:a(3924)},"demo.component.ts":{type:"ts",content:a(2644)}}}}let y=(()=>{class e{static#n=this.\u0275fac=function(i){return new(i||e)};static#a=this.\u0275mod=n.$C({type:e});static#t=this.\u0275inj=n.G2t({imports:[r.MD,h.YN,m.q,R.VNE,p.iI.forChild([{path:"",component:m.D,data:{demo:v}}])]})}return e})()},3924:(g,o,a)=>{a.r(o),a.d(o,{default:()=>r});const r='<h2>Horizontal</h2>\n<vcl-rating [(value)]="horizontalValue"></vcl-rating>\n<div>Value: {{ horizontalValue }}</div>\n\n<h2>Vertical</h2>\n<vcl-rating type="vertical" [(value)]="verticalValue"></vcl-rating>\n<div>Value: {{ verticalValue }}</div>\n\n<h2>Custom Star Count</h2>\n<vcl-rating [ratingItemCount]="10" [(value)]="customValue"></vcl-rating>\n<div>Value: {{ customValue }}</div>\n\n<h2>With label</h2>\n\n<label class="form-control-label" for="vInputEx1">\n  Rating: {{rating1.labelChange | async}}\n</label>\n<vcl-rating [value]="2" #rating1="vclRating">\n  <vcl-rating-item><span style="color: red">Bad</span></vcl-rating-item> \n  <vcl-rating-item><span style="color: orange">Average</span></vcl-rating-item>\n  <vcl-rating-item><span style="color: green">Good</span></vcl-rating-item>\n</vcl-rating>\n\n<h2>With rich label</h2>\n\n<label class="form-control-label" for="vInputEx1">\n  Rating: <vcl-rating-item-label [target]="rating2"></vcl-rating-item-label>\n</label>\n<vcl-rating [value]="2" #rating2="vclRating">\n  <vcl-rating-item><span style="color: red">Bad</span></vcl-rating-item> \n  <vcl-rating-item><span style="color: orange">Average</span></vcl-rating-item>\n  <vcl-rating-item><span style="color: green">Good</span></vcl-rating-item>\n</vcl-rating>\n\n<h2>Custom Icons</h2>\n<vcl-rating ratingFullIcon="fas fa-battery-full" ratingHalfIcon="fas fa-battery-half" ratingEmptyIcon="fas fa-battery-empty" [value]="2.5"></vcl-rating>\n'},2644:(g,o,a)=>{a.r(o),a.d(o,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class RatingDemoComponent {\n  horizontalValue = 2.5;\n  verticalValue = 2.5;\n  customValue = 7.5;\n}\n"}}]);