(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"8XpO":function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"80"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"15"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"30"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">secondaryValue</span>]=<span class="hljs-string">"60"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">speed</span>]=<span class="hljs-string">"5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"110"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"value$ | async"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"1000"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n'},HoVZ:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { zip, range, interval, animationFrameScheduler } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { map } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ProgressBarDemoComponent {\n  value$ = zip(range(<span class="hljs-number">0</span>, <span class="hljs-number">1000</span>), interval(<span class="hljs-number">50</span>, animationFrameScheduler)).pipe(map(<span class="hljs-function">(<span class="hljs-params">[x]</span>) =&gt;</span> x));\n}\n'},skhp:function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return C})),n.d(a,"ProgressBarDemoModule",(function(){return A}));var t=n("ofXK"),e=n("tyNb"),l=n("19H1"),r=n("2FIb"),p=n("yCtX"),c=n("DH7j"),i=n("7o/Q"),o=n("l7GE"),h=n("ZUHj"),u=n("Lhse");class d{constructor(s){this.resultSelector=s}call(s,a){return a.subscribe(new g(s,this.resultSelector))}}class g extends i.a{constructor(s,a,n=Object.create(null)){super(s),this.iterators=[],this.active=0,this.resultSelector="function"==typeof a?a:null,this.values=n}_next(s){const a=this.iterators;Object(c.a)(s)?a.push(new m(s)):a.push("function"==typeof s[u.a]?new b(s[u.a]()):new j(this.destination,this,s))}_complete(){const s=this.iterators,a=s.length;if(this.unsubscribe(),0!==a){this.active=a;for(let n=0;n<a;n++){let a=s[n];a.stillUnsubscribed?this.destination.add(a.subscribe(a,n)):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const s=this.iterators,a=s.length,n=this.destination;for(let l=0;l<a;l++){let a=s[l];if("function"==typeof a.hasValue&&!a.hasValue())return}let t=!1;const e=[];for(let l=0;l<a;l++){let a=s[l],r=a.next();if(a.hasCompleted()&&(t=!0),r.done)return void n.complete();e.push(r.value)}this.resultSelector?this._tryresultSelector(e):n.next(e),t&&n.complete()}_tryresultSelector(s){let a;try{a=this.resultSelector.apply(this,s)}catch(n){return void this.destination.error(n)}this.destination.next(a)}}class b{constructor(s){this.iterator=s,this.nextResult=s.next()}hasValue(){return!0}next(){const s=this.nextResult;return this.nextResult=this.iterator.next(),s}hasCompleted(){const s=this.nextResult;return s&&s.done}}class m{constructor(s){this.array=s,this.index=0,this.length=0,this.length=s.length}[u.a](){return this}next(s){const a=this.index++;return a<this.length?{value:this.array[a],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class j extends o.a{constructor(s,a,n){super(s),this.parent=a,this.observable=n,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[u.a](){return this}next(){const s=this.buffer;return 0===s.length&&this.isComplete?{value:null,done:!0}:{value:s.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(s,a,n,t,e){this.buffer.push(a),this.parent.checkIterators()}subscribe(s,a){return Object(h.a)(this,this.observable,this,a)}}var v=n("HDdC");function f(s){const{start:a,index:n,count:t,subscriber:e}=s;n>=t?e.complete():(e.next(a),e.closed||(s.index=n+1,s.start=a+1,this.schedule(s)))}var y=n("l5mm"),x=n("eNwd"),w=n("lJxs"),V=n("fXoL"),N=n("pt6R");let k=(()=>{class s{constructor(){this.value$=function(...s){const a=s[s.length-1];return"function"==typeof a&&s.pop(),Object(p.a)(s,void 0).lift(new d(a))}(function(s=0,a,n){return new v.a(t=>{void 0===a&&(a=s,s=0);let e=0,l=s;if(n)return n.schedule(f,0,{index:e,count:a,start:s,subscriber:t});for(;;){if(e++>=a){t.complete();break}if(t.next(l++),t.closed)break}})}(0,1e3),Object(y.a)(50,x.a)).pipe(Object(w.a)(([s])=>s))}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=V.Gb({type:s,selectors:[["ng-component"]],decls:18,vars:20,consts:[[3,"value"],[3,"minValue","maxValue","value"],[3,"value","secondaryValue"],[3,"indeterminate"],[3,"indeterminate","speed"],[3,"value","indeterminate"],[3,"value","maxValue"]],template:function(s,a){1&s&&(V.Nb(0,"vcl-progress-bar",0),V.Nb(1,"br"),V.Nb(2,"vcl-progress-bar",1),V.Nb(3,"br"),V.Nb(4,"vcl-progress-bar",1),V.Nb(5,"br"),V.Nb(6,"vcl-progress-bar",2),V.Nb(7,"br"),V.Nb(8,"vcl-progress-bar",3),V.Nb(9,"br"),V.Nb(10,"vcl-progress-bar",4),V.Nb(11,"br"),V.Nb(12,"vcl-progress-bar",5),V.Nb(13,"br"),V.Nb(14,"vcl-progress-bar",5),V.Nb(15,"br"),V.Nb(16,"vcl-progress-bar",6),V.ec(17,"async")),2&s&&(V.ic("value",80),V.Ab(2),V.ic("minValue",10)("maxValue",20)("value",15),V.Ab(2),V.ic("minValue",10)("maxValue",20)("value",30),V.Ab(2),V.ic("value",40)("secondaryValue",60),V.Ab(2),V.ic("indeterminate",!0),V.Ab(2),V.ic("indeterminate",!0)("speed",5),V.Ab(2),V.ic("value",40)("indeterminate",!0),V.Ab(2),V.ic("value",110)("indeterminate",!0),V.Ab(2),V.ic("value",V.fc(17,18,a.value$))("maxValue",1e3))},directives:[N.a],pipes:[t.b],encapsulation:2}),s})();function C(){return{label:"Progress-Bar",tabs:{Demo:k,"README.md":{type:"md",content:'<h1 id="vcl-progress-bar">vcl-progress-bar</h1>\n<p>The progress is reflected as horizontal bar which is shown within a container.<br>There are two overlaying bars to represent a primary and an optional secondary progress.<br>In indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-progress-bar [value]=&quot;0&quot;&gt;&lt;/vcl-progress-bar&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>number</td>\n<td></td>\n<td>the current primary progress value</td>\n</tr>\n<tr>\n<td><code>secondaryValue</code></td>\n<td>number</td>\n<td></td>\n<td>the current secondary progress value. hidden unless this value is specified</td>\n</tr>\n<tr>\n<td><code>minValue</code></td>\n<td>number</td>\n<td></td>\n<td>the minimum value of the progress</td>\n</tr>\n<tr>\n<td><code>maxValue</code></td>\n<td>number</td>\n<td></td>\n<td>the maximum value of the progress</td>\n</tr>\n<tr>\n<td><code>indeterminate</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>show an animiation if the value is not set or invalid</td>\n</tr>\n<tr>\n<td><code>speed</code></td>\n<td>number</td>\n<td>1</td>\n<td>set custom animation duration/speed in seconds</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("8XpO")},"demo.component.ts":{type:"pre",content:n("HoVZ")}}}}let A=(()=>{class s{}return s.\u0275mod=V.Kb({type:s}),s.\u0275inj=V.Jb({factory:function(a){return new(a||s)},imports:[[t.c,r.b,l.Z,e.g.forChild([{path:"",component:r.a,data:{demo:C}}])]]}),s})()}}]);