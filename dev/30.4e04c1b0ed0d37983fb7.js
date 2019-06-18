(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"8QN/":function(s,n){s.exports='<h1 id="vcl-progress-bar">vcl-progress-bar</h1>\n<p>The progress is reflected as horizontal bar which is shown within a container.<br>There are two overlaying bars to represent a primary and an optional secondary progress.<br>In indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-progress-bar [value]=&quot;0&quot;&gt;&lt;/vcl-progress-bar&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>number</td>\n<td></td>\n<td>the current primary progress value</td>\n</tr>\n<tr>\n<td><code>secondaryValue</code></td>\n<td>number</td>\n<td></td>\n<td>the current secondary progress value. hidden unless this value is specified</td>\n</tr>\n<tr>\n<td><code>minValue</code></td>\n<td>number</td>\n<td></td>\n<td>the minimum value of the progress</td>\n</tr>\n<tr>\n<td><code>maxValue</code></td>\n<td>number</td>\n<td></td>\n<td>the maximum value of the progress</td>\n</tr>\n<tr>\n<td><code>indeterminate</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>show an animiation if the value is not set or invalid</td>\n</tr>\n<tr>\n<td><code>speed</code></td>\n<td>number</td>\n<td>1</td>\n<td>set custom animation duration/speed in seconds</td>\n</tr>\n</tbody></table>\n'},"8XpO":function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"80"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"15"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"30"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">secondaryValue</span>]=<span class="hljs-string">"60"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">speed</span>]=<span class="hljs-string">"5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"110"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"value$ | async"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"1000"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n'},HoVZ:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { zip, range, interval, animationFrameScheduler } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { map } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ProgressBarDemoComponent {\n  value$ = zip(range(<span class="hljs-number">0</span>, <span class="hljs-number">1000</span>), interval(<span class="hljs-number">50</span>, animationFrameScheduler)).pipe(map(<span class="hljs-function">(<span class="hljs-params">[x]</span>) =&gt;</span> x));\n}\n'},UMmg:function(s,n,l){"use strict";l.r(n);var a=l("8Y7J"),t=l("yCtX"),e=l("DH7j"),r=l("7o/Q"),u=l("l7GE"),o=l("ZUHj"),p=l("Lhse");class i{constructor(s){this.resultSelector=s}call(s,n){return n.subscribe(new c(s,this.resultSelector))}}class c extends r.a{constructor(s,n,l=Object.create(null)){super(s),this.iterators=[],this.active=0,this.resultSelector="function"==typeof n?n:null,this.values=l}_next(s){const n=this.iterators;Object(e.a)(s)?n.push(new d(s)):n.push("function"==typeof s[p.a]?new h(s[p.a]()):new b(this.destination,this,s))}_complete(){const s=this.iterators,n=s.length;if(this.unsubscribe(),0!==n){this.active=n;for(let l=0;l<n;l++){let n=s[l];n.stillUnsubscribed?this.destination.add(n.subscribe(n,l)):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const s=this.iterators,n=s.length,l=this.destination;for(let e=0;e<n;e++){let n=s[e];if("function"==typeof n.hasValue&&!n.hasValue())return}let a=!1;const t=[];for(let e=0;e<n;e++){let n=s[e],r=n.next();if(n.hasCompleted()&&(a=!0),r.done)return void l.complete();t.push(r.value)}this.resultSelector?this._tryresultSelector(t):l.next(t),a&&l.complete()}_tryresultSelector(s){let n;try{n=this.resultSelector.apply(this,s)}catch(l){return void this.destination.error(l)}this.destination.next(n)}}class h{constructor(s){this.iterator=s,this.nextResult=s.next()}hasValue(){return!0}next(){const s=this.nextResult;return this.nextResult=this.iterator.next(),s}hasCompleted(){const s=this.nextResult;return s&&s.done}}class d{constructor(s){this.array=s,this.index=0,this.length=0,this.length=s.length}[p.a](){return this}next(s){const n=this.index++;return n<this.length?{value:this.array[n],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class b extends u.a{constructor(s,n,l){super(s),this.parent=n,this.observable=l,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[p.a](){return this}next(){const s=this.buffer;return 0===s.length&&this.isComplete?{value:null,done:!0}:{value:s.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(s,n,l,a,t){this.buffer.push(n),this.parent.checkIterators()}subscribe(s,n){return Object(o.a)(this,this.observable,this,n)}}var m=l("HDdC"),g=l("l5mm"),v=l("eNwd"),j=l("lJxs");class f{constructor(){this.value$=function(...s){const n=s[s.length-1];return"function"==typeof n&&s.pop(),Object(t.a)(s,void 0).lift(new i(n))}(function(s=0,n,l){return new m.a(l=>{void 0===n&&(n=s,s=0);let a=0,t=s;for(;;){if(a++>=n){l.complete();break}if(l.next(t++),l.closed)break}})}(0,1e3),Object(g.a)(50,v.a)).pipe(Object(j.a)(([s])=>s))}}const x={demo:function(){return{label:"Progress-Bar",tabs:{Demo:f,"README.md":{type:"md",content:l("8QN/")},"demo.component.html":{type:"pre",content:l("8XpO")},"demo.component.ts":{type:"pre",content:l("HoVZ")}}}}};class V{}var y=l("pMnS"),w=l("8Ip6"),I=l("SVse");class S{constructor(){this._hostAttrRole="progressbar",this.minValue=0,this.maxValue=100,this.indeterminate=!1,this.speed=1}get showIndeterminate(){return this.indeterminate&&!this.validateValue(this.value)}get showValue(){return!this.indeterminate||this.validateValue(this.value)}get showSecondaryValue(){return this.validateValue(this.secondaryValue)}get transformValue(){return`scaleX(${this.validateValue(this.value)?this.scaleValue(this.value):0})`}get transformSecondaryValue(){return`scaleX(${this.validateValue(this.secondaryValue)?this.scaleValue(this.secondaryValue):0})`}get animationDurationValue(){return`${this.isNumber(this.speed)?this.speed:1}s`}get range(){return this.maxValue-this.minValue}scaleValue(s){return(s-this.minValue)/this.range}validateValue(s){return this.isNumber(s)&&s>=this.minValue&&s<=this.maxValue}isNumber(s){return"number"==typeof s&&isFinite(s)}}var C=a.nb({encapsulation:2,styles:[],data:{}});function R(s){return a.Ib(0,[(s()(),a.pb(0,0,null,null,0,"div",[["class","vclProgress vclPrimary vclLayoutFit"]],[[4,"transform",null]],null,null,null,null))],null,function(s,n){s(n,0,0,n.component.transformValue)})}function k(s){return a.Ib(0,[(s()(),a.pb(0,0,null,null,0,"div",[["class","vclProgress vclSecondary vclLayoutFit"]],[[4,"transform",null]],null,null,null,null))],null,function(s,n){s(n,0,0,n.component.transformSecondaryValue)})}function z(s){return a.Ib(0,[(s()(),a.pb(0,0,null,null,0,"div",[["class","vclProgress vclPrimary vclLayoutFit"]],[[4,"animation-duration",null]],null,null,null,null))],null,function(s,n){s(n,0,0,n.component.animationDurationValue)})}function A(s){return a.Ib(2,[(s()(),a.pb(0,0,null,null,6,"div",[["class","vclProgressBar"]],[[1,"aria-valuenow",0],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuetext",0],[2,"vclIndeterminate",null]],null,null,null,null)),(s()(),a.eb(16777216,null,null,1,null,R)),a.ob(2,16384,null,0,I.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(s()(),a.eb(16777216,null,null,1,null,k)),a.ob(4,16384,null,0,I.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(s()(),a.eb(16777216,null,null,1,null,z)),a.ob(6,16384,null,0,I.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],function(s,n){var l=n.component;s(n,2,0,l.showValue),s(n,4,0,l.showSecondaryValue),s(n,6,0,l.showIndeterminate)},function(s,n){var l=n.component;s(n,0,0,l.value,l.minValue,l.maxValue,l.label,l.showIndeterminate)})}var N=a.nb({encapsulation:2,styles:[],data:{}});function _(s){return a.Ib(0,[(s()(),a.pb(0,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,A,C)),a.ob(1,49152,null,0,S,[],{value:[0,"value"]},null),(s()(),a.pb(2,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.pb(3,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,A,C)),a.ob(4,49152,null,0,S,[],{value:[0,"value"],minValue:[1,"minValue"],maxValue:[2,"maxValue"]},null),(s()(),a.pb(5,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.pb(6,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,A,C)),a.ob(7,49152,null,0,S,[],{value:[0,"value"],minValue:[1,"minValue"],maxValue:[2,"maxValue"]},null),(s()(),a.pb(8,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.pb(9,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,A,C)),a.ob(10,49152,null,0,S,[],{value:[0,"value"],secondaryValue:[1,"secondaryValue"]},null),(s()(),a.pb(11,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.pb(12,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,A,C)),a.ob(13,49152,null,0,S,[],{indeterminate:[0,"indeterminate"]},null),(s()(),a.pb(14,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.pb(15,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,A,C)),a.ob(16,49152,null,0,S,[],{indeterminate:[0,"indeterminate"],speed:[1,"speed"]},null),(s()(),a.pb(17,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.pb(18,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,A,C)),a.ob(19,49152,null,0,S,[],{value:[0,"value"],indeterminate:[1,"indeterminate"]},null),(s()(),a.pb(20,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.pb(21,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,A,C)),a.ob(22,49152,null,0,S,[],{value:[0,"value"],indeterminate:[1,"indeterminate"]},null),(s()(),a.pb(23,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.pb(24,0,null,null,2,"vcl-progress-bar",[],[[1,"role",0]],null,null,A,C)),a.ob(25,49152,null,0,S,[],{value:[0,"value"],maxValue:[1,"maxValue"]},null),a.Bb(131072,I.b,[a.h])],function(s,n){var l=n.component;s(n,1,0,80),s(n,4,0,15,10,20),s(n,7,0,30,10,20),s(n,10,0,40,60),s(n,13,0,!0),s(n,16,0,!0,5),s(n,19,0,40,!0),s(n,22,0,110,!0),s(n,25,0,a.Hb(n,25,0,a.zb(n,26).transform(l.value$)),1e3)},function(s,n){s(n,0,0,a.zb(n,1)._hostAttrRole),s(n,3,0,a.zb(n,4)._hostAttrRole),s(n,6,0,a.zb(n,7)._hostAttrRole),s(n,9,0,a.zb(n,10)._hostAttrRole),s(n,12,0,a.zb(n,13)._hostAttrRole),s(n,15,0,a.zb(n,16)._hostAttrRole),s(n,18,0,a.zb(n,19)._hostAttrRole),s(n,21,0,a.zb(n,22)._hostAttrRole),s(n,24,0,a.zb(n,25)._hostAttrRole)})}function D(s){return a.Ib(0,[(s()(),a.pb(0,0,null,null,1,"ng-component",[],null,null,null,_,N)),a.ob(1,49152,null,0,f,[],null,null)],null,null)}var P=a.lb("ng-component",f,D,{},{},[]),O=l("POq0"),F=l("zMNK"),H=l("p/eS"),U=l("2FIb"),$=l("s2it"),M=l("iInd"),X=l("PNUx");l.d(n,"ProgressBarDemoModuleNgFactory",function(){return q});var q=a.mb(V,[],function(s){return a.wb([a.xb(512,a.j,a.Z,[[8,[y.a,w.a,P]],[3,a.j],a.w]),a.xb(4608,I.n,I.m,[a.t,[2,I.A]]),a.xb(4608,O.a,O.a,[]),a.xb(1073742336,I.c,I.c,[]),a.xb(1073742336,F.e,F.e,[]),a.xb(1073742336,O.b,O.b,[]),a.xb(1073742336,H.a,H.a,[]),a.xb(1073742336,U.a,U.a,[]),a.xb(1073742336,$.a,$.a,[]),a.xb(1073742336,M.q,M.q,[[2,M.v],[2,M.m]]),a.xb(1073742336,V,V,[]),a.xb(1024,M.i,function(){return[[{path:"",component:X.a,data:x}]]},[])])})},l5mm:function(s,n,l){"use strict";l.d(n,"a",function(){return r});var a=l("HDdC"),t=l("D0XW"),e=l("Y7HM");function r(s=0,n=t.a){return(!Object(e.a)(s)||s<0)&&(s=0),n&&"function"==typeof n.schedule||(n=t.a),new a.a(l=>(l.add(n.schedule(u,s,{subscriber:l,counter:0,period:s})),l))}function u(s){const{subscriber:n,counter:l,period:a}=s;n.next(l),this.schedule({subscriber:n,counter:l+1,period:a},a)}},s2it:function(s,n,l){"use strict";l.d(n,"a",function(){return a});class a{}}}]);