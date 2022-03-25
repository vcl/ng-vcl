(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"9C2Y":function(n,a,t){"use strict";t.r(a),a.default="import {Component} from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class RatingDemoComponent {\n\n  horizontalValue = 2.5;\n  verticalValue = 2.5;\n  customValue = 7.5;\n\n}\n"},NWSe:function(n,a,t){"use strict";t.r(a),a.default='<h2>Horizontal</h2>\n<vcl-rating [(value)]="horizontalValue"></vcl-rating>\n<div>Value: {{ horizontalValue }}</div>\n\n<h2>Vertical</h2>\n<vcl-rating type="vertical" [(value)]="verticalValue"></vcl-rating>\n<div>Value: {{ verticalValue }}</div>\n\n<h2>Custom Star Count</h2>\n<vcl-rating [ratingItemCount]="10" [(value)]="customValue"></vcl-rating>\n<div>Value: {{ customValue }}</div>\n\n<h2>With label</h2>\n\n<label class="form-control-label" for="vInputEx1">\n  Rating: {{rating1.labelChange | async}}\n</label>\n<vcl-rating [value]="2" #rating1="vclRating">\n  <vcl-rating-item><span style="color: red">Bad</span></vcl-rating-item> \n  <vcl-rating-item><span style="color: orange">Average</span></vcl-rating-item>\n  <vcl-rating-item><span style="color: green">Good</span></vcl-rating-item>\n</vcl-rating>\n\n<h2>With rich label</h2>\n\n<label class="form-control-label" for="vInputEx1">\n  Rating: <vcl-rating-item-label [target]="rating2"></vcl-rating-item-label>\n</label>\n<vcl-rating [value]="2" #rating2="vclRating">\n  <vcl-rating-item><span style="color: red">Bad</span></vcl-rating-item> \n  <vcl-rating-item><span style="color: orange">Average</span></vcl-rating-item>\n  <vcl-rating-item><span style="color: green">Good</span></vcl-rating-item>\n</vcl-rating>\n\n<h2>Custom Icons</h2>\n<vcl-rating ratingFullIcon="fas fa-battery-full" ratingHalfIcon="fas fa-battery-half" ratingEmptyIcon="fas fa-battery-empty" [value]="2.5"></vcl-rating>\n'},j3VI:function(n,a,t){"use strict";t.r(a),t.d(a,"demo",function(){return s}),t.d(a,"RatingDemoModule",function(){return m});var e=t("ofXK"),l=t("3Pt+"),r=t("tyNb"),c=t("2FIb"),i=t("fXoL"),o=t("ySGC"),u=t("SQVY"),b=t("R+ME");let v=(()=>{class n{constructor(){this.horizontalValue=2.5,this.verticalValue=2.5,this.customValue=7.5}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=i.Eb({type:n,selectors:[["ng-component"]],decls:50,vars:14,consts:[[3,"value","valueChange"],["type","vertical",3,"value","valueChange"],[3,"ratingItemCount","value","valueChange"],["for","vInputEx1",1,"form-control-label"],[3,"value"],["rating1","vclRating"],[2,"color","red"],[2,"color","orange"],[2,"color","green"],[3,"target"],["rating2","vclRating"],["ratingFullIcon","fas fa-battery-full","ratingHalfIcon","fas fa-battery-half","ratingEmptyIcon","fas fa-battery-empty",3,"value"]],template:function(n,a){if(1&n&&(i.Qb(0,"h2"),i.xc(1,"Horizontal"),i.Pb(),i.Qb(2,"vcl-rating",0),i.Xb("valueChange",function(n){return a.horizontalValue=n}),i.Pb(),i.Qb(3,"div"),i.xc(4),i.Pb(),i.Qb(5,"h2"),i.xc(6,"Vertical"),i.Pb(),i.Qb(7,"vcl-rating",1),i.Xb("valueChange",function(n){return a.verticalValue=n}),i.Pb(),i.Qb(8,"div"),i.xc(9),i.Pb(),i.Qb(10,"h2"),i.xc(11,"Custom Star Count"),i.Pb(),i.Qb(12,"vcl-rating",2),i.Xb("valueChange",function(n){return a.customValue=n}),i.Pb(),i.Qb(13,"div"),i.xc(14),i.Pb(),i.Qb(15,"h2"),i.xc(16,"With label"),i.Pb(),i.Qb(17,"label",3),i.xc(18),i.bc(19,"async"),i.Pb(),i.Qb(20,"vcl-rating",4,5),i.Qb(22,"vcl-rating-item"),i.Qb(23,"span",6),i.xc(24,"Bad"),i.Pb(),i.Pb(),i.Qb(25,"vcl-rating-item"),i.Qb(26,"span",7),i.xc(27,"Average"),i.Pb(),i.Pb(),i.Qb(28,"vcl-rating-item"),i.Qb(29,"span",8),i.xc(30,"Good"),i.Pb(),i.Pb(),i.Pb(),i.Qb(31,"h2"),i.xc(32,"With rich label"),i.Pb(),i.Qb(33,"label",3),i.xc(34," Rating: "),i.Lb(35,"vcl-rating-item-label",9),i.Pb(),i.Qb(36,"vcl-rating",4,10),i.Qb(38,"vcl-rating-item"),i.Qb(39,"span",6),i.xc(40,"Bad"),i.Pb(),i.Pb(),i.Qb(41,"vcl-rating-item"),i.Qb(42,"span",7),i.xc(43,"Average"),i.Pb(),i.Pb(),i.Qb(44,"vcl-rating-item"),i.Qb(45,"span",8),i.xc(46,"Good"),i.Pb(),i.Pb(),i.Pb(),i.Qb(47,"h2"),i.xc(48,"Custom Icons"),i.Pb(),i.Lb(49,"vcl-rating",11)),2&n){const n=i.lc(21),t=i.lc(37);i.zb(2),i.gc("value",a.horizontalValue),i.zb(2),i.zc("Value: ",a.horizontalValue,""),i.zb(3),i.gc("value",a.verticalValue),i.zb(2),i.zc("Value: ",a.verticalValue,""),i.zb(3),i.gc("ratingItemCount",10)("value",a.customValue),i.zb(2),i.zc("Value: ",a.customValue,""),i.zb(4),i.zc(" Rating: ",i.cc(19,12,n.labelChange),"\n"),i.zb(2),i.gc("value",2),i.zb(15),i.gc("target",t),i.zb(1),i.gc("value",2),i.zb(13),i.gc("value",2.5)}},directives:[o.a,u.b,b.a],pipes:[e.b],encapsulation:2}),n})();var g=t("19H1");function s(){return{label:"Rating",tabs:{Demo:v,"README.md":{type:"md",content:"# vcl-rating\n\n## Usage\n\n```html\n<vcl-rating [(value)]=\"value\"></vcl-rating>\n```\n\n### API\n\n#### Attributes\n\nName          | Type                              | Default                | Description\n------------- | --------------------------------- | ---------------------- | -----------------------------------------\n`value` _(1)_ | number                            | 0                      | set the value\n`type`        | 'horizontal', 'vertical', 'small' | 'horizontal'           | Rating type.\n`fullStar`    | string                            | 'vcl:star'             | Full star icon\n`halfStar`    | string                            | 'vcl:star-half'        | Half star icon\n`emptyStar`   | string                            | 'vcl:star-empty'       | Empty star icon\n`starCount`   | number                            | 5                      | Max rating\n`readonly`    | boolean                           | false                  | Whether the stars can be clicked\n\n#### Events\n\nName                  | Type             | Description\n--------------------- | ---------------  | -\n`valueChange`         | number           | emits when the value changes\n"},"demo.component.html":{type:"html",content:t("NWSe")},"demo.component.ts":{type:"ts",content:t("9C2Y")}}}}let m=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=i.Ib({type:n}),n.\u0275inj=i.Hb({imports:[[e.c,l.i,c.b,g.ab,r.g.forChild([{path:"",component:c.a,data:{demo:s}}])]]}),n})()}}]);