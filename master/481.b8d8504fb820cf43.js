"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[481],{1481:(d,i,a)=>{a.r(i),a.d(i,{ProgressBarDemoModule:()=>w,demo:()=>f});var u=a(6814),V=a(2911),y=a(2916),v=a(2320),g=a(5592),b=a(4829);const{isArray:x}=Array;var h=a(6232),P=a(8251),C=a(9940);var E=a(1687),I=a(927),J=a(7398),e=a(5879);function Q(r,s){if(1&r&&e._UZ(0,"div",3),2&r){const n=e.oxw();e.Udp("transform",n.transformValue)}}function T(r,s){if(1&r&&e._UZ(0,"div",4),2&r){const n=e.oxw();e.Udp("transform",n.transformSecondaryValue)}}function U(r,s){if(1&r&&e._UZ(0,"div",3),2&r){const n=e.oxw();e.Udp("animation-duration",n.animationDurationValue)}}let F=(()=>{class r{constructor(){this._hostAttrRole="progressbar",this.hostClasses=!0,this.minValue=0,this.maxValue=100,this.indeterminate=!1,this.speed=1}get showIndeterminate(){return this.indeterminate&&!this.validateValue(this.value)}get showValue(){return!this.indeterminate||this.validateValue(this.value)}get showSecondaryValue(){return this.validateValue(this.secondaryValue)}get transformValue(){return`scaleX(${this.validateValue(this.value)?this.scaleValue(this.value):0})`}get transformSecondaryValue(){return`scaleX(${this.validateValue(this.secondaryValue)?this.scaleValue(this.secondaryValue):0})`}get animationDurationValue(){return`${this.isNumber(this.speed)?this.speed:1}s`}get range(){return this.maxValue-this.minValue}scaleValue(n){return(n-this.minValue)/this.range}validateValue(n){return this.isNumber(n)&&n>=this.minValue&&n<=this.maxValue}isNumber(n){return"number"==typeof n&&isFinite(n)}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["vcl-progress-bar"]],hostVars:9,hostBindings:function(n,t){2&n&&(e.uIk("role",t._hostAttrRole)("valuenow",t.value)("valuemin",t.minValue)("valuemax",t.maxValue)("aria-valuetext",t.label),e.ekj("progress-bar",t.hostClasses)("indeterminate",t.showIndeterminate))},inputs:{value:"value",secondaryValue:"secondaryValue",minValue:"minValue",maxValue:"maxValue",indeterminate:"indeterminate",label:"label",speed:"speed"},exportAs:["vclProgressBar"],decls:3,vars:3,consts:[["class","progress primary layout-fit",3,"transform",4,"ngIf"],["class","progress secondary layout-fit",3,"transform",4,"ngIf"],["class","progress primary layout-fit",3,"animation-duration",4,"ngIf"],[1,"progress","primary","layout-fit"],[1,"progress","secondary","layout-fit"]],template:function(n,t){1&n&&(e.YNc(0,Q,1,2,"div",0),e.YNc(1,T,1,2,"div",1),e.YNc(2,U,1,2,"div",2)),2&n&&(e.Q6J("ngIf",t.showValue),e.xp6(1),e.Q6J("ngIf",t.showSecondaryValue),e.xp6(1),e.Q6J("ngIf",t.showIndeterminate))},dependencies:[u.O5],styles:["vcl-progress-bar{display:block}\n"],encapsulation:2,changeDetection:0}),r})(),O=(()=>{class r{constructor(){this.value$=function D(...r){const s=(0,C.jO)(r),n=function B(r){return 1===r.length&&x(r[0])?r[0]:r}(r);return n.length?new g.y(t=>{let o=n.map(()=>[]),l=n.map(()=>!1);t.add(()=>{o=l=null});for(let m=0;!t.closed&&m<n.length;m++)(0,b.Xf)(n[m]).subscribe((0,P.x)(t,z=>{if(o[m].push(z),o.every(p=>p.length)){const p=o.map(c=>c.shift());t.next(s?s(...p):p),o.some((c,N)=>!c.length&&l[N])&&t.complete()}},()=>{l[m]=!0,!o[m].length&&t.complete()}));return()=>{o=l=null}}):h.E}(function A(r,s,n){if(null==s&&(s=r,r=0),s<=0)return h.E;const t=s+r;return new g.y(n?o=>{let l=r;return n.schedule(function(){l<t?(o.next(l++),this.schedule()):o.complete()})}:o=>{let l=r;for(;l<t&&!o.closed;)o.next(l++);o.complete()})}(0,1e3),(0,E.F)(50,I.Z)).pipe((0,J.U)(([n])=>n))}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],decls:18,vars:20,consts:[[3,"value"],[3,"minValue","maxValue","value"],[3,"value","secondaryValue"],[3,"indeterminate"],[3,"indeterminate","speed"],[3,"value","indeterminate"],[3,"value","maxValue"]],template:function(n,t){1&n&&(e._UZ(0,"vcl-progress-bar",0)(1,"br")(2,"vcl-progress-bar",1)(3,"br")(4,"vcl-progress-bar",1)(5,"br")(6,"vcl-progress-bar",2)(7,"br")(8,"vcl-progress-bar",3)(9,"br")(10,"vcl-progress-bar",4)(11,"br")(12,"vcl-progress-bar",5)(13,"br")(14,"vcl-progress-bar",5)(15,"br")(16,"vcl-progress-bar",6),e.ALo(17,"async")),2&n&&(e.Q6J("value",80),e.xp6(2),e.Q6J("minValue",10)("maxValue",20)("value",15),e.xp6(2),e.Q6J("minValue",10)("maxValue",20)("value",30),e.xp6(2),e.Q6J("value",40)("secondaryValue",60),e.xp6(2),e.Q6J("indeterminate",!0),e.xp6(2),e.Q6J("indeterminate",!0)("speed",5),e.xp6(2),e.Q6J("value",40)("indeterminate",!0),e.xp6(2),e.Q6J("value",110)("indeterminate",!0),e.xp6(2),e.Q6J("value",e.lcZ(17,18,t.value$))("maxValue",1e3))},dependencies:[F,u.Ov],encapsulation:2}),r})();const S='# vcl-progress-bar\n\nThe progress is reflected as horizontal bar which is shown within a container.\nThere are two overlaying bars to represent a primary and an optional secondary progress.\nIn indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.\n\n## Usage\n\n```html\n<vcl-progress-bar [value]="0"></vcl-progress-bar>\n```\n\n### API\n\n#### Attributes\n\n| Name             | Type    | Default | Description                                                                 |\n| ---------------- | ------- | ------- | --------------------------------------------------------------------------- |\n| `value`          | number  |         | the current primary progress value                                          |\n| `secondaryValue` | number  |         | the current secondary progress value. hidden unless this value is specified |\n| `minValue`       | number  |         | the minimum value of the progress                                           |\n| `maxValue`       | number  |         | the maximum value of the progress                                           |\n| `indeterminate`  | boolean | false   | show an animiation if the value is not set or invalid                       |\n| `speed`          | number  | 1       | set custom animation duration/speed in seconds                              |\n';function f(){return{label:"Progress-Bar",tabs:{Demo:O,"README.md":{type:"md",content:S},"demo.component.html":{type:"html",content:a(4270)},"demo.component.ts":{type:"ts",content:a(7668)}}}}let w=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[u.ez,v.l,y.EdO,V.Bz.forChild([{path:"",component:v.z,data:{demo:f}}])]}),r})()},4270:(d,i,a)=>{a.r(i),a.d(i,{default:()=>u});const u='<vcl-progress-bar [value]="80"></vcl-progress-bar>\n<br />\n<vcl-progress-bar\n  [minValue]="10"\n  [maxValue]="20"\n  [value]="15"></vcl-progress-bar>\n<br />\n<vcl-progress-bar\n  [minValue]="10"\n  [maxValue]="20"\n  [value]="30"></vcl-progress-bar>\n<br />\n<vcl-progress-bar [value]="40" [secondaryValue]="60"></vcl-progress-bar>\n<br />\n<vcl-progress-bar [indeterminate]="true"></vcl-progress-bar>\n<br />\n<vcl-progress-bar [indeterminate]="true" [speed]="5"></vcl-progress-bar>\n<br />\n<vcl-progress-bar [value]="40" [indeterminate]="true"></vcl-progress-bar>\n<br />\n<vcl-progress-bar [value]="110" [indeterminate]="true"></vcl-progress-bar>\n<br />\n<vcl-progress-bar [value]="value$ | async" [maxValue]="1000"></vcl-progress-bar>\n'},7668:(d,i,a)=>{a.r(i),a.d(i,{default:()=>u});const u="import { Component } from '@angular/core';\nimport { zip, range, interval, animationFrameScheduler } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class ProgressBarDemoComponent {\n  value$ = zip(range(0, 1000), interval(50, animationFrameScheduler)).pipe(\n    map(([x]) => x)\n  );\n}\n"}}]);