"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[652],{3652:(d,i,a)=>{a.r(i),a.d(i,{ProgressBarDemoModule:()=>O,demo:()=>f});var u=a(9808),V=a(5852),y=a(6272),v=a(9155),g=a(8306),b=a(8421);const{isArray:x}=Array;var h=a(515),B=a(5403),P=a(3269);var D=a(7445),A=a(6406),E=a(4004),e=a(4893);function I(n,s){if(1&n&&e._UZ(0,"div",3),2&n){const r=e.oxw();e.Udp("transform",r.transformValue)}}function J(n,s){if(1&n&&e._UZ(0,"div",4),2&n){const r=e.oxw();e.Udp("transform",r.transformSecondaryValue)}}function Q(n,s){if(1&n&&e._UZ(0,"div",3),2&n){const r=e.oxw();e.Udp("animation-duration",r.animationDurationValue)}}let T=(()=>{class n{constructor(){this._hostAttrRole="progressbar",this.hostClasses=!0,this.minValue=0,this.maxValue=100,this.indeterminate=!1,this.speed=1}get showIndeterminate(){return this.indeterminate&&!this.validateValue(this.value)}get showValue(){return!this.indeterminate||this.validateValue(this.value)}get showSecondaryValue(){return this.validateValue(this.secondaryValue)}get transformValue(){return`scaleX(${this.validateValue(this.value)?this.scaleValue(this.value):0})`}get transformSecondaryValue(){return`scaleX(${this.validateValue(this.secondaryValue)?this.scaleValue(this.secondaryValue):0})`}get animationDurationValue(){return`${this.isNumber(this.speed)?this.speed:1}s`}get range(){return this.maxValue-this.minValue}scaleValue(r){return(r-this.minValue)/this.range}validateValue(r){return this.isNumber(r)&&r>=this.minValue&&r<=this.maxValue}isNumber(r){return"number"==typeof r&&isFinite(r)}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["vcl-progress-bar"]],hostVars:9,hostBindings:function(r,t){2&r&&(e.uIk("role",t._hostAttrRole)("valuenow",t.value)("valuemin",t.minValue)("valuemax",t.maxValue)("aria-valuetext",t.label),e.ekj("progress-bar",t.hostClasses)("indeterminate",t.showIndeterminate))},inputs:{value:"value",secondaryValue:"secondaryValue",minValue:"minValue",maxValue:"maxValue",indeterminate:"indeterminate",label:"label",speed:"speed"},exportAs:["vclProgressBar"],decls:3,vars:3,consts:[["class","progress primary layout-fit",3,"transform",4,"ngIf"],["class","progress secondary layout-fit",3,"transform",4,"ngIf"],["class","progress primary layout-fit",3,"animation-duration",4,"ngIf"],[1,"progress","primary","layout-fit"],[1,"progress","secondary","layout-fit"]],template:function(r,t){1&r&&(e.YNc(0,I,1,2,"div",0),e.YNc(1,J,1,2,"div",1),e.YNc(2,Q,1,2,"div",2)),2&r&&(e.Q6J("ngIf",t.showValue),e.xp6(1),e.Q6J("ngIf",t.showSecondaryValue),e.xp6(1),e.Q6J("ngIf",t.showIndeterminate))},directives:[u.O5],styles:["vcl-progress-bar{display:block}\n"],encapsulation:2,changeDetection:0}),n})(),F=(()=>{class n{constructor(){this.value$=function C(...n){const s=(0,P.jO)(n),r=function U(n){return 1===n.length&&x(n[0])?n[0]:n}(n);return r.length?new g.y(t=>{let o=r.map(()=>[]),l=r.map(()=>!1);t.add(()=>{o=l=null});for(let m=0;!t.closed&&m<r.length;m++)(0,b.Xf)(r[m]).subscribe(new B.Q(t,S=>{if(o[m].push(S),o.every(p=>p.length)){const p=o.map(c=>c.shift());t.next(s?s(...p):p),o.some((c,z)=>!c.length&&l[z])&&t.complete()}},()=>{l[m]=!0,!o[m].length&&t.complete()}));return()=>{o=l=null}}):h.E}(function Z(n,s,r){if(null==s&&(s=n,n=0),s<=0)return h.E;const t=s+n;return new g.y(r?o=>{let l=n;return r.schedule(function(){l<t?(o.next(l++),this.schedule()):o.complete()})}:o=>{let l=n;for(;l<t&&!o.closed;)o.next(l++);o.complete()})}(0,1e3),(0,D.F)(50,A.Z)).pipe((0,E.U)(([r])=>r))}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:18,vars:20,consts:[[3,"value"],[3,"minValue","maxValue","value"],[3,"value","secondaryValue"],[3,"indeterminate"],[3,"indeterminate","speed"],[3,"value","indeterminate"],[3,"value","maxValue"]],template:function(r,t){1&r&&(e._UZ(0,"vcl-progress-bar",0),e._UZ(1,"br"),e._UZ(2,"vcl-progress-bar",1),e._UZ(3,"br"),e._UZ(4,"vcl-progress-bar",1),e._UZ(5,"br"),e._UZ(6,"vcl-progress-bar",2),e._UZ(7,"br"),e._UZ(8,"vcl-progress-bar",3),e._UZ(9,"br"),e._UZ(10,"vcl-progress-bar",4),e._UZ(11,"br"),e._UZ(12,"vcl-progress-bar",5),e._UZ(13,"br"),e._UZ(14,"vcl-progress-bar",5),e._UZ(15,"br"),e._UZ(16,"vcl-progress-bar",6),e.ALo(17,"async")),2&r&&(e.Q6J("value",80),e.xp6(2),e.Q6J("minValue",10)("maxValue",20)("value",15),e.xp6(2),e.Q6J("minValue",10)("maxValue",20)("value",30),e.xp6(2),e.Q6J("value",40)("secondaryValue",60),e.xp6(2),e.Q6J("indeterminate",!0),e.xp6(2),e.Q6J("indeterminate",!0)("speed",5),e.xp6(2),e.Q6J("value",40)("indeterminate",!0),e.xp6(2),e.Q6J("value",110)("indeterminate",!0),e.xp6(2),e.Q6J("value",e.lcZ(17,18,t.value$))("maxValue",1e3))},directives:[T],pipes:[u.Ov],encapsulation:2}),n})();function f(){return{label:"Progress-Bar",tabs:{Demo:F,"README.md":{type:"md",content:'# vcl-progress-bar\n\nThe progress is reflected as horizontal bar which is shown within a container.\nThere are two overlaying bars to represent a primary and an optional secondary progress.\nIn indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.\n\n## Usage\n\n```html\n<vcl-progress-bar [value]="0"></vcl-progress-bar>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type        | Default            | Description\n| ------------        | ----------- | ------------------ |--------------\n| `value`             | number      |                    | the current primary progress value\n| `secondaryValue`    | number      |                    | the current secondary progress value. hidden unless this value is specified\n| `minValue`          | number      |                    | the minimum value of the progress\n| `maxValue`          | number      |                    | the maximum value of the progress\n| `indeterminate`     | boolean     | false              | show an animiation if the value is not set or invalid\n| `speed`             | number      | 1                  | set custom animation duration/speed in seconds\n'},"demo.component.html":{type:"html",content:a(4270)},"demo.component.ts":{type:"ts",content:a(7668)}}}}let O=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.ez,v.l,y.EdO,V.Bz.forChild([{path:"",component:v.z,data:{demo:f}}])]]}),n})()},4270:(d,i,a)=>{a.r(i),a.d(i,{default:()=>u});const u='<vcl-progress-bar [value]="80"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [minValue]="10" [maxValue]="20" [value]="15"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [minValue]="10" [maxValue]="20" [value]="30"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="40" [secondaryValue]="60"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [indeterminate]="true"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [indeterminate]="true" [speed]="5"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="40" [indeterminate]="true"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="110" [indeterminate]="true"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="value$ | async" [maxValue]="1000"></vcl-progress-bar>\n'},7668:(d,i,a)=>{a.r(i),a.d(i,{default:()=>u});const u="import { Component } from '@angular/core';\nimport { zip, range, interval, animationFrameScheduler } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class ProgressBarDemoComponent {\n  value$ = zip(range(0, 1000), interval(50, animationFrameScheduler)).pipe(map(([x]) => x));\n}\n"}}]);