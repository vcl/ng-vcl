"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[461],{7461:(g,m,e)=>{e.r(m),e.d(m,{ProgressBarDemoModule:()=>p,demo:()=>y});var i=e(6895),x=e(4629),V=e(7074),h=e(9155),f=e(9751),A=e(8421);const{isArray:E}=Array;var b=e(515),J=e(5403),C=e(3269);var Q=e(7445),B=e(6406),O=e(4004),n=e(4650),T=e(2034);class c{constructor(){this.value$=function F(...t){const o=(0,C.jO)(t),r=function D(t){return 1===t.length&&E(t[0])?t[0]:t}(t);return r.length?new f.y(s=>{let a=r.map(()=>[]),l=r.map(()=>!1);s.add(()=>{a=l=null});for(let u=0;!s.closed&&u<r.length;u++)(0,A.Xf)(r[u]).subscribe((0,J.x)(s,U=>{if(a[u].push(U),a.every(v=>v.length)){const v=a.map(d=>d.shift());s.next(o?o(...v):v),a.some((d,R)=>!d.length&&l[R])&&s.complete()}},()=>{l[u]=!0,!a[u].length&&s.complete()}));return()=>{a=l=null}}):b.E}(function P(t,o,r){if(null==o&&(o=t,t=0),o<=0)return b.E;const s=o+t;return new f.y(r?a=>{let l=t;return r.schedule(function(){l<s?(a.next(l++),this.schedule()):a.complete()})}:a=>{let l=t;for(;l<s&&!a.closed;)a.next(l++);a.complete()})}(0,1e3),(0,Q.F)(50,B.Z)).pipe((0,O.U)(([o])=>o))}static#e=this.\u0275fac=function(r){return new(r||c)};static#n=this.\u0275cmp=n.Xpm({type:c,selectors:[["ng-component"]],decls:18,vars:20,consts:[[3,"value"],[3,"minValue","maxValue","value"],[3,"value","secondaryValue"],[3,"indeterminate"],[3,"indeterminate","speed"],[3,"value","indeterminate"],[3,"value","maxValue"]],template:function(r,s){1&r&&(n._UZ(0,"vcl-progress-bar",0)(1,"br")(2,"vcl-progress-bar",1)(3,"br")(4,"vcl-progress-bar",1)(5,"br")(6,"vcl-progress-bar",2)(7,"br")(8,"vcl-progress-bar",3)(9,"br")(10,"vcl-progress-bar",4)(11,"br")(12,"vcl-progress-bar",5)(13,"br")(14,"vcl-progress-bar",5)(15,"br")(16,"vcl-progress-bar",6),n.ALo(17,"async")),2&r&&(n.Q6J("value",80),n.xp6(2),n.Q6J("minValue",10)("maxValue",20)("value",15),n.xp6(2),n.Q6J("minValue",10)("maxValue",20)("value",30),n.xp6(2),n.Q6J("value",40)("secondaryValue",60),n.xp6(2),n.Q6J("indeterminate",!0),n.xp6(2),n.Q6J("indeterminate",!0)("speed",5),n.xp6(2),n.Q6J("value",40)("indeterminate",!0),n.xp6(2),n.Q6J("value",110)("indeterminate",!0),n.xp6(2),n.Q6J("value",n.lcZ(17,18,s.value$))("maxValue",1e3))},dependencies:[T.R,i.Ov],encapsulation:2})}function y(){return{label:"Progress-Bar",tabs:{Demo:c,"README.md":{type:"md",content:'# vcl-progress-bar\n\nThe progress is reflected as horizontal bar which is shown within a container.\nThere are two overlaying bars to represent a primary and an optional secondary progress.\nIn indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.\n\n## Usage\n\n```html\n<vcl-progress-bar [value]="0"></vcl-progress-bar>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type        | Default            | Description\n| ------------        | ----------- | ------------------ |--------------\n| `value`             | number      |                    | the current primary progress value\n| `secondaryValue`    | number      |                    | the current secondary progress value. hidden unless this value is specified\n| `minValue`          | number      |                    | the minimum value of the progress\n| `maxValue`          | number      |                    | the maximum value of the progress\n| `indeterminate`     | boolean     | false              | show an animiation if the value is not set or invalid\n| `speed`             | number      | 1                  | set custom animation duration/speed in seconds\n'},"demo.component.html":{type:"html",content:e(4270)},"demo.component.ts":{type:"ts",content:e(7668)}}}}class p{static#e=this.\u0275fac=function(r){return new(r||p)};static#n=this.\u0275mod=n.oAB({type:p});static#r=this.\u0275inj=n.cJS({imports:[i.ez,h.l,V.EdO,x.Bz.forChild([{path:"",component:h.z,data:{demo:y}}])]})}},4270:(g,m,e)=>{e.r(m),e.d(m,{default:()=>i});const i='<vcl-progress-bar [value]="80"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [minValue]="10" [maxValue]="20" [value]="15"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [minValue]="10" [maxValue]="20" [value]="30"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="40" [secondaryValue]="60"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [indeterminate]="true"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [indeterminate]="true" [speed]="5"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="40" [indeterminate]="true"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="110" [indeterminate]="true"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="value$ | async" [maxValue]="1000"></vcl-progress-bar>\n'},7668:(g,m,e)=>{e.r(m),e.d(m,{default:()=>i});const i="import { Component } from '@angular/core';\nimport { zip, range, interval, animationFrameScheduler } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class ProgressBarDemoComponent {\n  value$ = zip(range(0, 1000), interval(50, animationFrameScheduler)).pipe(\n    map(([x]) => x)\n  );\n}\n"}}]);