webpackJsonp([9],{1004:function(n,l){n.exports='<h1 id="vcl-progress-bar">vcl-progress-bar</h1>\n<p>The progress is reflected as horizontal bar which is shown within a container.<br>There are two overlaying bars to represent a primary and an optional secondary progress.<br>In indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.</p>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;0&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="properties-">Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>value</code></td>\n<td>number</td>\n<td></td>\n<td>the current primary progress value </td>\n</tr>\n<tr>\n<td><code>secondaryValue</code></td>\n<td>number</td>\n<td></td>\n<td>the current secondary progress value. hidden unless this value is specified</td>\n</tr>\n<tr>\n<td><code>minValue</code></td>\n<td>number</td>\n<td></td>\n<td>the minimum value of the progress</td>\n</tr>\n<tr>\n<td><code>maxValue</code></td>\n<td>number</td>\n<td></td>\n<td>the maximum value of the progress</td>\n</tr>\n<tr>\n<td><code>indeterminate</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>show an animiation if the value is not set or invalid </td>\n</tr>\n<tr>\n<td><code>speed</code></td>\n<td>number</td>\n<td>1</td>\n<td>set custom animation duration/speed in seconds</td>\n</tr>\n</tbody>\n</table>\n'},1005:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"80"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"15"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"30"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">secondaryValue</span>]=<span class="hljs-string">"60"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">speed</span>]=<span class="hljs-string">"5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"110"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"value$ | async"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"1000"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n'},1006:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Observable } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/Observable\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'rxjs/add/observable/range\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'rxjs/add/observable/interval\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'rxjs/add/operator/zip\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ProgressBarDemoComponent {\n  value$ = Observable.range(<span class="hljs-number">0</span>, <span class="hljs-number">1000</span>).zip(Observable.interval(<span class="hljs-number">50</span>), <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x);\n}\n'},474:function(n,l,t){"use strict";function s(){return{label:"Progress-Bar",tabs:{Demo:d,"README.md":{type:"md",content:t(1004)},"demo.component.html":{type:"pre",content:t(1005)},"demo.component.ts":{type:"pre",content:t(1006)}}}}function e(n){return p._40(0,[(n()(),p._18(0,0,null,null,0,"div",[["class","vclProgress vclPrimary vclLayoutFit"]],[[4,"transform",null]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.transformValue)})}function a(n){return p._40(0,[(n()(),p._18(0,0,null,null,0,"div",[["class","vclProgress vclSecondary vclLayoutFit"]],[[4,"transform",null]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.transformSecondaryValue)})}function r(n){return p._40(0,[(n()(),p._18(0,0,null,null,0,"div",[["class","vclProgress vclPrimary vclLayoutFit"]],[[4,"animation-duration",null]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.animationDurationValue)})}function u(n){return p._40(2,[(n()(),p._18(0,0,null,null,10,"div",[["class","vclProgressBar"]],[[1,"aria-valuenow",0],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuetext",0],[2,"vclIndeterminate",null]],null,null,null,null)),(n()(),p._38(-1,null,["\n  "])),(n()(),p._12(16777216,null,null,1,null,e)),p._16(3,16384,null,0,v.l,[p._0,p.X],{ngIf:[0,"ngIf"]},null),(n()(),p._38(-1,null,["\n  "])),(n()(),p._12(16777216,null,null,1,null,a)),p._16(6,16384,null,0,v.l,[p._0,p.X],{ngIf:[0,"ngIf"]},null),(n()(),p._38(-1,null,["\n  "])),(n()(),p._12(16777216,null,null,1,null,r)),p._16(9,16384,null,0,v.l,[p._0,p.X],{ngIf:[0,"ngIf"]},null),(n()(),p._38(-1,null,["\n"])),(n()(),p._38(-1,null,["\n\n"]))],function(n,l){var t=l.component;n(l,3,0,t.showValue),n(l,6,0,t.showSecondaryValue),n(l,9,0,t.showIndeterminate)},function(n,l){var t=l.component;n(l,0,0,t.value,t.minValue,t.maxValue,t.label,t.showIndeterminate)})}function o(n){return p._40(0,[(n()(),p._18(0,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,u,g)),p._16(1,49152,null,0,m,[],null,null)],null,function(n,l){n(l,0,0,"progressbar")})}function i(n){return p._40(0,[(n()(),p._18(0,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,u,g)),p._16(1,49152,null,0,m,[],{value:[0,"value"]},null),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(5,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,u,g)),p._16(6,49152,null,0,m,[],{value:[0,"value"],minValue:[1,"minValue"],maxValue:[2,"maxValue"]},null),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(8,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(10,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,u,g)),p._16(11,49152,null,0,m,[],{value:[0,"value"],minValue:[1,"minValue"],maxValue:[2,"maxValue"]},null),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(15,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,u,g)),p._16(16,49152,null,0,m,[],{value:[0,"value"],secondaryValue:[1,"secondaryValue"]},null),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(18,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(20,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,u,g)),p._16(21,49152,null,0,m,[],{indeterminate:[0,"indeterminate"]},null),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(23,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(25,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,u,g)),p._16(26,49152,null,0,m,[],{indeterminate:[0,"indeterminate"],speed:[1,"speed"]},null),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(28,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(30,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,u,g)),p._16(31,49152,null,0,m,[],{value:[0,"value"],indeterminate:[1,"indeterminate"]},null),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(33,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(35,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,u,g)),p._16(36,49152,null,0,m,[],{value:[0,"value"],indeterminate:[1,"indeterminate"]},null),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(38,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._38(-1,null,["\n"])),(n()(),p._18(40,0,null,null,2,"vcl-progress-bar",[],[[1,"role",0]],null,null,u,g)),p._16(41,49152,null,0,m,[],{value:[0,"value"],maxValue:[1,"maxValue"]},null),p._34(131072,v.b,[p.i]),(n()(),p._38(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,1,0,80);n(l,6,0,15,10,20);n(l,11,0,30,10,20);n(l,16,0,40,60);n(l,21,0,!0);n(l,26,0,!0,5);n(l,31,0,40,!0);n(l,36,0,110,!0);n(l,41,0,p._39(l,41,0,p._32(l,42).transform(t.value$)),1e3)},function(n,l){n(l,0,0,"progressbar");n(l,5,0,"progressbar");n(l,10,0,"progressbar");n(l,15,0,"progressbar");n(l,20,0,"progressbar");n(l,25,0,"progressbar");n(l,30,0,"progressbar");n(l,35,0,"progressbar");n(l,40,0,"progressbar")})}function c(n){return p._40(0,[(n()(),p._18(0,0,null,null,1,"ng-component",[],null,null,null,i,j)),p._16(1,49152,null,0,d,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var p=t(2),h=t(1),d=(t(601),t(528),t(607),function(){function n(){this.value$=h.Observable.range(0,1e3).zip(h.Observable.interval(50),function(n){return n})}return n}()),b=function(){function n(){}return n}(),f=t(491),v=t(22),m=function(){function n(){this.minValue=0,this.maxValue=100,this.indeterminate=!1,this.speed=1}return Object.defineProperty(n.prototype,"showIndeterminate",{get:function(){return this.indeterminate&&!this.validateValue(this.value)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showValue",{get:function(){return!this.indeterminate||this.validateValue(this.value)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showSecondaryValue",{get:function(){return this.validateValue(this.secondaryValue)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"transformValue",{get:function(){return"scaleX("+(this.validateValue(this.value)?this.scaleValue(this.value):0)+")"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"transformSecondaryValue",{get:function(){return"scaleX("+(this.validateValue(this.secondaryValue)?this.scaleValue(this.secondaryValue):0)+")"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"animationDurationValue",{get:function(){return(this.isNumber(this.speed)?this.speed:1)+"s"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"range",{get:function(){return this.maxValue-this.minValue},enumerable:!0,configurable:!0}),n.prototype.scaleValue=function(n){return(n-this.minValue)/this.range},n.prototype.validateValue=function(n){return this.isNumber(n)&&n>=this.minValue&&n<=this.maxValue},n.prototype.isNumber=function(n){return"number"==typeof n&&NaN!==n},n}(),_=[],g=p._15({encapsulation:2,styles:_,data:{}}),y=(p._13("vcl-progress-bar",m,o,{value:"value",secondaryValue:"secondaryValue",minValue:"minValue",maxValue:"maxValue",indeterminate:"indeterminate",label:"label",speed:"speed"},{},[]),[]),j=p._15({encapsulation:2,styles:y,data:{}}),x=p._13("ng-component",d,c,{},{},[]),V=t(117),w=t(60),I=t(488),O=t(492),C=t(553),T=t(27),P=t(486);t.d(l,"ProgressBarDemoModuleNgFactory",function(){return $});var $=p._14(b,[],function(n){return p._29([p._30(512,p.k,p._10,[[8,[f.a,x]],[3,p.k],p.E]),p._30(4608,v.n,v.m,[p.A]),p._30(512,v.c,v.c,[]),p._30(512,V.a,V.a,[]),p._30(512,w.d,w.d,[]),p._30(512,I.a,I.a,[]),p._30(512,O.a,O.a,[]),p._30(512,C.a,C.a,[]),p._30(512,T.m,T.m,[[2,T.r],[2,T.l]]),p._30(512,b,b,[]),p._30(1024,T.j,function(){return[[{path:"",component:P.a,data:{demo:s}}]]},[])])})},485:function(n,l,t){"use strict";t.d(l,"b",function(){return s}),t.d(l,"a",function(){return e});var s=function(){function n(){}return n}(),e=function(){function n(){this.disabled=!1,this.tabClass=""}return n}()},486:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var s=t(27),e=t(28),a=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var s,e;return"object"==typeof l.tabs[t]&&l.tabs[t]?(s=l.tabs[t].type,e="pre"===s||"html"===s||"md"===s?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content):"function"==typeof l.tabs[t]&&(s="component",e=l.tabs[t]),{name:t,content:e,type:s}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n.ctorParameters=function(){return[{type:s.a},{type:e.c}]},n}()},487:function(n,l,t){"use strict";t.d(l,"a",function(){return r});var s=t(60),e=t(2),a=t(485),r=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new e.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){this.wormholeHost=new s.e(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){var l,t,s=this.tabs.toArray();n instanceof a.a?(l=s.indexOf(n),t=n):"number"==typeof n&&s[n]?(l=n,t=s[l]):(l=-1,t=null),l>=0&&t instanceof a.a&&!t.disabled&&(this.wormholeHost.clearWormholes(),this.selectedTabIndex=l,this.selectedTabIndexChange$.emit(l),this.wormholeHost.connectWormhole(t.content))},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost.clearWormholes()},n}()},488:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){}return n}()},489:function(n,l,t){"use strict";function s(n){return r._40(0,[r._31(null,0),(n()(),r._12(0,null,null,0))],null,null)}function e(n){return r._40(0,[r._36(402653184,1,{content:0}),(n()(),r._12(0,[[1,2]],null,0,null,s))],null,null)}function a(n){return r._40(0,[(n()(),r._18(0,0,null,null,2,"vcl-tab",[],null,null,null,e,i)),r._16(1,49152,null,1,u.a,[],null,null),r._36(335544320,1,{label:0})],null,null)}t.d(l,"a",function(){return i}),l.b=e;var r=t(2),u=t(485),o=[],i=r._15({encapsulation:2,styles:o,data:{}});r._13("vcl-tab",u.a,a,{disabled:"disabled",tabClass:"tabClass"},{},["*"])},490:function(n,l,t){"use strict";function s(n){return r._40(0,[(n()(),r._18(0,0,null,null,7,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,t){var s=!0,e=n.component;if("tap"===l){s=!1!==e.selectTab(n.context.$implicit)&&s}return s},null,null)),(n()(),r._38(-1,null,["\n        "])),(n()(),r._18(2,0,null,null,4,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),r._38(-1,null,[" \n          "])),(n()(),r._18(4,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),r._16(5,671744,null,0,u.a,[r._0],{target:[0,"target"]},null),(n()(),r._38(-1,null,["\n        "])),(n()(),r._38(-1,null,["\n    "]))],function(n,l){n(l,5,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,r._21(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function e(n){return r._40(0,[r._36(402653184,1,{tabContent:0}),(n()(),r._18(1,0,null,null,20,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),r._38(-1,null,["\n  "])),(n()(),r._18(3,0,null,null,4,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),r._38(-1,null,["\n    "])),(n()(),r._12(16777216,null,null,1,null,s)),r._16(6,802816,null,0,o.k,[r._0,r.X,r.y],{ngForOf:[0,"ngForOf"]},null),(n()(),r._38(-1,null,["\n  "])),(n()(),r._38(-1,null,["\n  "])),(n()(),r._18(9,0,null,null,11,"div",[],[[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),r._38(-1,null,["\n    "])),(n()(),r._18(11,0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),r._38(-1,null,["\n      "])),(n()(),r._18(13,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),r._38(-1,null,["\n    "])),(n()(),r._38(-1,null,["\n    "])),(n()(),r._18(16,0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),r._38(-1,null,["\n      "])),r._31(null,0),(n()(),r._38(-1,null,["\n    "])),(n()(),r._38(-1,null,["\n  "])),(n()(),r._38(-1,null,["\n"])),(n()(),r._38(-1,null,["\n"]))],function(n,l){n(l,6,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,r._21(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,3,0,r._21(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,9,0,r._21(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}function a(n){return r._40(0,[(n()(),r._18(0,0,null,null,2,"vcl-tab-nav",[],null,null,null,e,p)),r._16(1,1228800,null,1,i.a,[],null,null),r._36(603979776,1,{tabs:1})],null,null)}t.d(l,"a",function(){return p}),l.b=e;var r=t(2),u=t(194),o=t(22),i=t(487),c=[],p=r._15({encapsulation:2,styles:c,data:{}});r._13("vcl-tab-nav",i.a,a,{layout:"layout",tabbableClass:"tabbableClass",tabsClass:"tabsClass",tabContentClass:"tabContentClass",borders:"borders",selectedTabIndex:"selectedTabIndex"},{selectedTabIndexChange:"selectedTabIndexChange"},["*"])},491:function(n,l,t){"use strict";function s(n){return d._40(0,[(n()(),d._38(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function e(n){return d._40(0,[(n()(),d._18(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),d._16(1,671744,null,0,b.a,[d._0],{target:[0,"target"]},null),(n()(),d._12(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function a(n){return d._40(0,[(n()(),d._18(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),d._18(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),d._38(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function r(n){return d._40(0,[(n()(),d._18(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function u(n){return d._40(0,[(n()(),d._18(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function o(n){return d._40(0,[(n()(),d._18(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function i(n){return d._40(0,[(n()(),d._18(0,0,null,null,21,"vcl-tab",[],null,null,null,f.b,f.a)),d._16(1,49152,[[1,4]],1,v.a,[],null,null),d._36(335544320,2,{label:0}),(n()(),d._38(-1,0,["\n      "])),(n()(),d._12(0,[[2,2]],0,1,null,s)),d._16(5,16384,null,0,v.b,[],null,null),(n()(),d._38(-1,0,["\n      "])),(n()(),d._12(16777216,null,0,1,null,e)),d._16(8,16384,null,0,m.l,[d._0,d.X],{ngIf:[0,"ngIf"]},null),(n()(),d._38(-1,0,["\n      "])),(n()(),d._12(16777216,null,0,1,null,a)),d._16(11,16384,null,0,m.l,[d._0,d.X],{ngIf:[0,"ngIf"]},null),(n()(),d._38(-1,0,["\n      "])),(n()(),d._12(16777216,null,0,1,null,r)),d._16(14,16384,null,0,m.l,[d._0,d.X],{ngIf:[0,"ngIf"]},null),(n()(),d._38(-1,0,["\n      "])),(n()(),d._12(16777216,null,0,1,null,u)),d._16(17,16384,null,0,m.l,[d._0,d.X],{ngIf:[0,"ngIf"]},null),(n()(),d._38(-1,0,["\n      "])),(n()(),d._12(16777216,null,0,1,null,o)),d._16(20,16384,null,0,m.l,[d._0,d.X],{ngIf:[0,"ngIf"]},null),(n()(),d._38(-1,0,["\n    "]))],function(n,l){n(l,8,0,"component"===l.context.$implicit.type),n(l,11,0,"text"===l.context.$implicit.type),n(l,14,0,"html"===l.context.$implicit.type),n(l,17,0,"md"===l.context.$implicit.type),n(l,20,0,"pre"===l.context.$implicit.type)},null)}function c(n){return d._40(0,[(n()(),d._18(0,0,null,null,9,"div",[],null,null,null,null,null)),(n()(),d._38(-1,null,["\n  "])),(n()(),d._18(2,0,null,null,6,"vcl-tab-nav",[["borders","true"]],null,null,null,_.b,_.a)),d._16(3,1228800,null,1,g.a,[],{borders:[0,"borders"]},null),d._36(603979776,1,{tabs:1}),(n()(),d._38(-1,0,["\n    "])),(n()(),d._12(16777216,null,0,1,null,i)),d._16(7,802816,null,0,m.k,[d._0,d.X,d.y],{ngForOf:[0,"ngForOf"]},null),(n()(),d._38(-1,0,["\n  "])),(n()(),d._38(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,3,0,"true"),n(l,7,0,t.tabs)},null)}function p(n){return d._40(0,[(n()(),d._18(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),d._38(1,null,[" ",""])),(n()(),d._38(-1,null,["\n"])),(n()(),d._12(16777216,null,null,1,null,c)),d._16(4,16384,null,0,m.l,[d._0,d.X],{ngIf:[0,"ngIf"]},null),(n()(),d._38(-1,null,["\n"]))],function(n,l){n(l,4,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function h(n){return d._40(0,[(n()(),d._18(0,0,null,null,1,"ng-component",[],null,null,null,p,w)),d._16(1,114688,null,0,y.a,[j.a,x.c],null,null)],function(n,l){n(l,1,0)},null)}t.d(l,"a",function(){return I});var d=t(2),b=t(194),f=t(489),v=t(485),m=t(22),_=t(490),g=t(487),y=t(486),j=t(27),x=t(28),V=[],w=d._15({encapsulation:2,styles:V,data:{}}),I=d._13("ng-component",y.a,h,{},{},[])},492:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=(t(486),function(){function n(){}return n}())},493:function(n,l,t){"use strict";var s=t(202),e=t(203);l.async=new e.AsyncScheduler(s.AsyncAction)},498:function(n,l,t){"use strict";function s(n){return!e.isArray(n)&&n-parseFloat(n)+1>=0}var e=t(47);l.isNumeric=s},528:function(n,l,t){"use strict";var s=t(1),e=t(537);s.Observable.interval=e.interval},537:function(n,l,t){"use strict";var s=t(538);l.interval=s.IntervalObservable.create},538:function(n,l,t){"use strict";var s=this&&this.__extends||function(n,l){function t(){this.constructor=n}for(var s in l)l.hasOwnProperty(s)&&(n[s]=l[s]);n.prototype=null===l?Object.create(l):(t.prototype=l.prototype,new t)},e=t(498),a=t(1),r=t(493),u=function(n){function l(l,t){void 0===l&&(l=0),void 0===t&&(t=r.async),n.call(this),this.period=l,this.scheduler=t,(!e.isNumeric(l)||l<0)&&(this.period=0),t&&"function"==typeof t.schedule||(this.scheduler=r.async)}return s(l,n),l.create=function(n,t){return void 0===n&&(n=0),void 0===t&&(t=r.async),new l(n,t)},l.dispatch=function(n){var l=n.index,t=n.subscriber,s=n.period;t.next(l),t.closed||(n.index+=1,this.schedule(n,s))},l.prototype._subscribe=function(n){var t=this.period,s=this.scheduler;n.add(s.schedule(l.dispatch,t,{index:0,subscriber:n,period:t}))},l}(a.Observable);l.IntervalObservable=u},553:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){}return n}()},577:function(n,l,t){"use strict";function s(){for(var n=[],l=0;l<arguments.length;l++)n[l-0]=arguments[l];return function(l){return l.lift.call(e.apply(void 0,[l].concat(n)))}}function e(){for(var n=[],l=0;l<arguments.length;l++)n[l-0]=arguments[l];var t=n[n.length-1];return"function"==typeof t&&n.pop(),new r.ArrayObservable(n).lift(new h(t))}var a=this&&this.__extends||function(n,l){function t(){this.constructor=n}for(var s in l)l.hasOwnProperty(s)&&(n[s]=l[s]);n.prototype=null===l?Object.create(l):(t.prototype=l.prototype,new t)},r=t(48),u=t(47),o=t(10),i=t(38),c=t(37),p=t(86);l.zip=s,l.zipStatic=e;var h=function(){function n(n){this.project=n}return n.prototype.call=function(n,l){return l.subscribe(new d(n,this.project))},n}();l.ZipOperator=h;var d=function(n){function l(l,t,s){void 0===s&&(s=Object.create(null)),n.call(this,l),this.iterators=[],this.active=0,this.project="function"==typeof t?t:null,this.values=s}return a(l,n),l.prototype._next=function(n){var l=this.iterators;u.isArray(n)?l.push(new f(n)):"function"==typeof n[p.iterator]?l.push(new b(n[p.iterator]())):l.push(new v(this.destination,this,n))},l.prototype._complete=function(){var n=this.iterators,l=n.length;if(0===l)return void this.destination.complete();this.active=l;for(var t=0;t<l;t++){var s=n[t];s.stillUnsubscribed?this.add(s.subscribe(s,t)):this.active--}},l.prototype.notifyInactive=function(){0===--this.active&&this.destination.complete()},l.prototype.checkIterators=function(){for(var n=this.iterators,l=n.length,t=this.destination,s=0;s<l;s++){var e=n[s];if("function"==typeof e.hasValue&&!e.hasValue())return}for(var a=!1,r=[],s=0;s<l;s++){var e=n[s],u=e.next();if(e.hasCompleted()&&(a=!0),u.done)return void t.complete();r.push(u.value)}this.project?this._tryProject(r):t.next(r),a&&t.complete()},l.prototype._tryProject=function(n){var l;try{l=this.project.apply(this,n)}catch(n){return void this.destination.error(n)}this.destination.next(l)},l}(o.Subscriber);l.ZipSubscriber=d;var b=function(){function n(n){this.iterator=n,this.nextResult=n.next()}return n.prototype.hasValue=function(){return!0},n.prototype.next=function(){var n=this.nextResult;return this.nextResult=this.iterator.next(),n},n.prototype.hasCompleted=function(){var n=this.nextResult;return n&&n.done},n}(),f=function(){function n(n){this.array=n,this.index=0,this.length=0,this.length=n.length}return n.prototype[p.iterator]=function(){return this},n.prototype.next=function(n){var l=this.index++,t=this.array;return l<this.length?{value:t[l],done:!1}:{value:null,done:!0}},n.prototype.hasValue=function(){return this.array.length>this.index},n.prototype.hasCompleted=function(){return this.array.length===this.index},n}(),v=function(n){function l(l,t,s){n.call(this,l),this.parent=t,this.observable=s,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}return a(l,n),l.prototype[p.iterator]=function(){return this},l.prototype.next=function(){var n=this.buffer;return 0===n.length&&this.isComplete?{value:null,done:!0}:{value:n.shift(),done:!1}},l.prototype.hasValue=function(){return this.buffer.length>0},l.prototype.hasCompleted=function(){return 0===this.buffer.length&&this.isComplete},l.prototype.notifyComplete=function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()},l.prototype.notifyNext=function(n,l,t,s,e){this.buffer.push(l),this.parent.checkIterators()},l.prototype.subscribe=function(n,l){return c.subscribeToResult(this,this.observable,this,l)},l}(i.OuterSubscriber)},601:function(n,l,t){"use strict";var s=t(1),e=t(602);s.Observable.range=e.range},602:function(n,l,t){"use strict";var s=t(603);l.range=s.RangeObservable.create},603:function(n,l,t){"use strict";var s=this&&this.__extends||function(n,l){function t(){this.constructor=n}for(var s in l)l.hasOwnProperty(s)&&(n[s]=l[s]);n.prototype=null===l?Object.create(l):(t.prototype=l.prototype,new t)},e=t(1),a=function(n){function l(l,t,s){n.call(this),this.start=l,this._count=t,this.scheduler=s}return s(l,n),l.create=function(n,t,s){return void 0===n&&(n=0),void 0===t&&(t=0),new l(n,t,s)},l.dispatch=function(n){var l=n.start,t=n.index,s=n.count,e=n.subscriber;if(t>=s)return void e.complete();e.next(l),e.closed||(n.index=t+1,n.start=l+1,this.schedule(n))},l.prototype._subscribe=function(n){var t=0,s=this.start,e=this._count,a=this.scheduler;if(a)return a.schedule(l.dispatch,0,{index:t,count:e,start:s,subscriber:n});for(;;){if(t++>=e){n.complete();break}if(n.next(s++),n.closed)break}},l}(e.Observable);l.RangeObservable=a},607:function(n,l,t){"use strict";var s=t(1),e=t(608);s.Observable.prototype.zip=e.zipProto},608:function(n,l,t){"use strict";function s(){for(var n=[],l=0;l<arguments.length;l++)n[l-0]=arguments[l];return e.zip.apply(void 0,n)(this)}var e=t(577);l.zipProto=s}});