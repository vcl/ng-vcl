(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"8QN/":function(s,n){s.exports='<h1 id="vcl-progress-bar">vcl-progress-bar</h1>\n<p>The progress is reflected as horizontal bar which is shown within a container.<br>There are two overlaying bars to represent a primary and an optional secondary progress.<br>In indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-progress-bar [value]=&quot;0&quot;&gt;&lt;/vcl-progress-bar&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>number</td>\n<td></td>\n<td>the current primary progress value</td>\n</tr>\n<tr>\n<td><code>secondaryValue</code></td>\n<td>number</td>\n<td></td>\n<td>the current secondary progress value. hidden unless this value is specified</td>\n</tr>\n<tr>\n<td><code>minValue</code></td>\n<td>number</td>\n<td></td>\n<td>the minimum value of the progress</td>\n</tr>\n<tr>\n<td><code>maxValue</code></td>\n<td>number</td>\n<td></td>\n<td>the maximum value of the progress</td>\n</tr>\n<tr>\n<td><code>indeterminate</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>show an animiation if the value is not set or invalid</td>\n</tr>\n<tr>\n<td><code>speed</code></td>\n<td>number</td>\n<td>1</td>\n<td>set custom animation duration/speed in seconds</td>\n</tr>\n</tbody></table>\n'},"8XpO":function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"80"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"15"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"30"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">secondaryValue</span>]=<span class="hljs-string">"60"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">speed</span>]=<span class="hljs-string">"5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"110"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"value$ | async"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"1000"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n'},HoVZ:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Observable ,  range ,  interval } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { zip } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ProgressBarDemoComponent {\n  value$ = range(<span class="hljs-number">0</span>, <span class="hljs-number">1000</span>).pipe(zip(interval(<span class="hljs-number">50</span>), <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x));\n}\n'},UMmg:function(s,n,l){"use strict";l.r(n);var a=l("CcnG"),t=l("6blF"),e=l("xXU7"),r=l("mrSG"),p=l("IUTb"),o=l("isby"),u=l("FFOo"),c=l("MGBS"),i=l("zotm"),h=l("En8+"),b=function(){function s(s){this.resultSelector=s}return s.prototype.call=function(s,n){return n.subscribe(new d(s,this.resultSelector))},s}(),d=function(s){function n(n,l,a){void 0===a&&(a=Object.create(null));var t=s.call(this,n)||this;return t.iterators=[],t.active=0,t.resultSelector="function"==typeof l?l:null,t.values=a,t}return r.d(n,s),n.prototype._next=function(s){var n=this.iterators;Object(o.a)(s)?n.push(new m(s)):n.push("function"==typeof s[h.a]?new g(s[h.a]()):new j(this.destination,this,s))},n.prototype._complete=function(){var s=this.iterators,n=s.length;if(this.unsubscribe(),0!==n){this.active=n;for(var l=0;l<n;l++){var a=s[l];a.stillUnsubscribed?this.destination.add(a.subscribe(a,l)):this.active--}}else this.destination.complete()},n.prototype.notifyInactive=function(){this.active--,0===this.active&&this.destination.complete()},n.prototype.checkIterators=function(){for(var s=this.iterators,n=s.length,l=this.destination,a=0;a<n;a++)if("function"==typeof(r=s[a]).hasValue&&!r.hasValue())return;var t=!1,e=[];for(a=0;a<n;a++){var r,p=(r=s[a]).next();if(r.hasCompleted()&&(t=!0),p.done)return void l.complete();e.push(p.value)}this.resultSelector?this._tryresultSelector(e):l.next(e),t&&l.complete()},n.prototype._tryresultSelector=function(s){var n;try{n=this.resultSelector.apply(this,s)}catch(l){return void this.destination.error(l)}this.destination.next(n)},n}(u.a),g=function(){function s(s){this.iterator=s,this.nextResult=s.next()}return s.prototype.hasValue=function(){return!0},s.prototype.next=function(){var s=this.nextResult;return this.nextResult=this.iterator.next(),s},s.prototype.hasCompleted=function(){var s=this.nextResult;return s&&s.done},s}(),m=function(){function s(s){this.array=s,this.index=0,this.length=0,this.length=s.length}return s.prototype[h.a]=function(){return this},s.prototype.next=function(s){var n=this.index++;return n<this.length?{value:this.array[n],done:!1}:{value:null,done:!0}},s.prototype.hasValue=function(){return this.array.length>this.index},s.prototype.hasCompleted=function(){return this.array.length===this.index},s}(),j=function(s){function n(n,l,a){var t=s.call(this,n)||this;return t.parent=l,t.observable=a,t.stillUnsubscribed=!0,t.buffer=[],t.isComplete=!1,t}return r.d(n,s),n.prototype[h.a]=function(){return this},n.prototype.next=function(){var s=this.buffer;return 0===s.length&&this.isComplete?{value:null,done:!0}:{value:s.shift(),done:!1}},n.prototype.hasValue=function(){return this.buffer.length>0},n.prototype.hasCompleted=function(){return 0===this.buffer.length&&this.isComplete},n.prototype.notifyComplete=function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()},n.prototype.notifyNext=function(s,n,l,a,t){this.buffer.push(n),this.parent.checkIterators()},n.prototype.subscribe=function(s,n){return Object(i.a)(this,this.observable,this,n)},n}(c.a),v=function(){return function(){var s,n;this.value$=(s=0,n=1e3,void 0===s&&(s=0),void 0===n&&(n=0),new t.a(function(l){for(var a=0,t=s;;){if(a++>=n){l.complete();break}if(l.next(t++),l.closed)break}})).pipe(function(){for(var s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];return function(n){return n.lift.call((function(){for(var s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];var l=s[s.length-1];return"function"==typeof l&&s.pop(),Object(p.a)(s,void 0).lift(new b(l))}).apply(void 0,[n].concat(s)))}}(Object(e.a)(50),function(s){return s}))}}(),f={demo:function(){return{label:"Progress-Bar",tabs:{Demo:v,"README.md":{type:"md",content:l("8QN/")},"demo.component.html":{type:"pre",content:l("8XpO")},"demo.component.ts":{type:"pre",content:l("HoVZ")}}}}},y=function(){return function(){}}(),x=l("pMnS"),V=l("8Ip6"),w=l("G6uX"),O=l("5cNt"),C=l("Ip0R"),k=a.qb({encapsulation:2,styles:[],data:{}});function A(s){return a.Lb(0,[(s()(),a.sb(0,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,w.Ob,w.J)),a.rb(1,49152,null,0,O.qc,[],{value:[0,"value"]},null),(s()(),a.sb(2,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(3,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,w.Ob,w.J)),a.rb(4,49152,null,0,O.qc,[],{value:[0,"value"],minValue:[1,"minValue"],maxValue:[2,"maxValue"]},null),(s()(),a.sb(5,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(6,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,w.Ob,w.J)),a.rb(7,49152,null,0,O.qc,[],{value:[0,"value"],minValue:[1,"minValue"],maxValue:[2,"maxValue"]},null),(s()(),a.sb(8,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(9,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,w.Ob,w.J)),a.rb(10,49152,null,0,O.qc,[],{value:[0,"value"],secondaryValue:[1,"secondaryValue"]},null),(s()(),a.sb(11,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(12,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,w.Ob,w.J)),a.rb(13,49152,null,0,O.qc,[],{indeterminate:[0,"indeterminate"]},null),(s()(),a.sb(14,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(15,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,w.Ob,w.J)),a.rb(16,49152,null,0,O.qc,[],{indeterminate:[0,"indeterminate"],speed:[1,"speed"]},null),(s()(),a.sb(17,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(18,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,w.Ob,w.J)),a.rb(19,49152,null,0,O.qc,[],{value:[0,"value"],indeterminate:[1,"indeterminate"]},null),(s()(),a.sb(20,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(21,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,w.Ob,w.J)),a.rb(22,49152,null,0,O.qc,[],{value:[0,"value"],indeterminate:[1,"indeterminate"]},null),(s()(),a.sb(23,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(24,0,null,null,2,"vcl-progress-bar",[],[[1,"role",0]],null,null,w.Ob,w.J)),a.rb(25,49152,null,0,O.qc,[],{value:[0,"value"],maxValue:[1,"maxValue"]},null),a.Eb(131072,C.b,[a.h])],function(s,n){var l=n.component;s(n,1,0,80),s(n,4,0,15,10,20),s(n,7,0,30,10,20),s(n,10,0,40,60),s(n,13,0,!0),s(n,16,0,!0,5),s(n,19,0,40,!0),s(n,22,0,110,!0),s(n,25,0,a.Kb(n,25,0,a.Cb(n,26).transform(l.value$)),1e3)},function(s,n){s(n,0,0,"progressbar"),s(n,3,0,"progressbar"),s(n,6,0,"progressbar"),s(n,9,0,"progressbar"),s(n,12,0,"progressbar"),s(n,15,0,"progressbar"),s(n,18,0,"progressbar"),s(n,21,0,"progressbar"),s(n,24,0,"progressbar")})}function q(s){return a.Lb(0,[(s()(),a.sb(0,0,null,null,1,"ng-component",[],null,null,null,A,k)),a.rb(1,49152,null,0,v,[],null,null)],null,null)}var J=a.ob("ng-component",v,q,{},{},[]),I=l("2FIb"),S=l("ZYCi"),U=l("PNUx");l.d(n,"ProgressBarDemoModuleNgFactory",function(){return N});var N=a.pb(y,[],function(s){return a.zb([a.Ab(512,a.j,a.eb,[[8,[x.a,V.a,J]],[3,a.j],a.y]),a.Ab(4608,C.n,C.m,[a.v,[2,C.y]]),a.Ab(1073742336,C.c,C.c,[]),a.Ab(1073742336,O.fc,O.fc,[]),a.Ab(1073742336,O.Yb,O.Yb,[]),a.Ab(1073742336,I.a,I.a,[]),a.Ab(1073742336,O.Tb,O.Tb,[]),a.Ab(1073742336,S.m,S.m,[[2,S.s],[2,S.l]]),a.Ab(1073742336,y,y,[]),a.Ab(1024,S.j,function(){return[[{path:"",component:U.a,data:f}]]},[])])})}}]);