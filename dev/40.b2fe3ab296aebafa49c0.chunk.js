(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{207:function(n,l,s){"use strict";s.d(l,"a",function(){return t});var a=s(1),t=function(n){function l(l){return n.call(this,l)||this}return Object(a.c)(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var s=n.target.currentValue;s&&(this.wormhole=this.connectWormhole(s,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(s(93).b)},393:function(n,l,s){"use strict";s.r(l);var a=s(0),t=function(){return function(){}}();var u={demo:function(){return{label:"Badge",tabs:{Demo:t,"README.md":{type:"md",content:s(533)},"demo.component.html":{type:"pre",content:s(534)},"demo.component.ts":{type:"pre",content:s(535)}}}}},e=function(){return function(){}}(),c=s(159),r=s(434),o=function(){function n(){}return Object.defineProperty(n.prototype,"vclPrimary",{get:function(){return"primary"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"vclSuccess",{get:function(){return"success"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"vclInfo",{get:function(){return"info"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"vclWarning",{get:function(){return"warning"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"vclError",{get:function(){return"error"===this.type},enumerable:!0,configurable:!0}),n}(),p=a.Cb({encapsulation:2,styles:[],data:{}});function i(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Vb(-1,null,["Default badge"])),(n()(),a.Eb(2,0,null,null,2,"span",[["vcl-badge",""]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),a.Db(3,16384,null,0,o,[],{type:[0,"type"]},null),(n()(),a.Vb(-1,null,["default"])),(n()(),a.Eb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Vb(-1,null,["Primary badge"])),(n()(),a.Eb(7,0,null,null,2,"span",[["vcl-badge","primary"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),a.Db(8,16384,null,0,o,[],{type:[0,"type"]},null),(n()(),a.Vb(-1,null,["primary"])),(n()(),a.Eb(10,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Vb(-1,null,["Success badge"])),(n()(),a.Eb(12,0,null,null,2,"span",[["vcl-badge","success"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),a.Db(13,16384,null,0,o,[],{type:[0,"type"]},null),(n()(),a.Vb(-1,null,["success"])),(n()(),a.Eb(15,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Vb(-1,null,["Info badge"])),(n()(),a.Eb(17,0,null,null,2,"span",[["vcl-badge","info"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),a.Db(18,16384,null,0,o,[],{type:[0,"type"]},null),(n()(),a.Vb(-1,null,["info"])),(n()(),a.Eb(20,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Vb(-1,null,["Warning badge"])),(n()(),a.Eb(22,0,null,null,2,"span",[["vcl-badge","warning"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),a.Db(23,16384,null,0,o,[],{type:[0,"type"]},null),(n()(),a.Vb(-1,null,["warning"])),(n()(),a.Eb(25,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Vb(-1,null,["Error badge"])),(n()(),a.Eb(27,0,null,null,2,"span",[["vcl-badge","error"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),a.Db(28,16384,null,0,o,[],{type:[0,"type"]},null),(n()(),a.Vb(-1,null,["error"]))],function(n,l){n(l,3,0,"");n(l,8,0,"primary");n(l,13,0,"success");n(l,18,0,"info");n(l,23,0,"warning");n(l,28,0,"error")},function(n,l){n(l,2,0,!0,a.Ob(l,3).vclPrimary,a.Ob(l,3).vclSuccess,a.Ob(l,3).vclInfo,a.Ob(l,3).vclWarning,a.Ob(l,3).vclError);n(l,7,0,!0,a.Ob(l,8).vclPrimary,a.Ob(l,8).vclSuccess,a.Ob(l,8).vclInfo,a.Ob(l,8).vclWarning,a.Ob(l,8).vclError);n(l,12,0,!0,a.Ob(l,13).vclPrimary,a.Ob(l,13).vclSuccess,a.Ob(l,13).vclInfo,a.Ob(l,13).vclWarning,a.Ob(l,13).vclError);n(l,17,0,!0,a.Ob(l,18).vclPrimary,a.Ob(l,18).vclSuccess,a.Ob(l,18).vclInfo,a.Ob(l,18).vclWarning,a.Ob(l,18).vclError);n(l,22,0,!0,a.Ob(l,23).vclPrimary,a.Ob(l,23).vclSuccess,a.Ob(l,23).vclInfo,a.Ob(l,23).vclWarning,a.Ob(l,23).vclError);n(l,27,0,!0,a.Ob(l,28).vclPrimary,a.Ob(l,28).vclSuccess,a.Ob(l,28).vclInfo,a.Ob(l,28).vclWarning,a.Ob(l,28).vclError)})}function b(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,1,"ng-component",[],null,null,null,i,p)),a.Db(1,49152,null,0,t,[],null,null)],null,null)}var h=a.Ab("ng-component",t,b,{},{},[]),g=s(3),d=s(83),f=s(436),v=s(435),m=s(451),j=function(){return function(){}}(),y=s(4),E=s(431);s.d(l,"BadgeDemoModuleNgFactory",function(){return O});var O=a.Bb(e,[],function(n){return a.Lb([a.Mb(512,a.l,a.qb,[[8,[c.a,r.a,h]],[3,a.l],a.F]),a.Mb(4608,g.n,g.m,[a.B,[2,g.y]]),a.Mb(1073742336,g.c,g.c,[]),a.Mb(1073742336,d.a,d.a,[]),a.Mb(1073742336,f.a,f.a,[]),a.Mb(1073742336,v.a,v.a,[]),a.Mb(1073742336,m.a,m.a,[]),a.Mb(1073742336,j,j,[]),a.Mb(1073742336,y.m,y.m,[[2,y.s],[2,y.l]]),a.Mb(1073742336,e,e,[]),a.Mb(1024,y.j,function(){return[[{path:"",component:E.a,data:u}]]},[])])})},431:function(n,l,s){"use strict";s.d(l,"a",function(){return a});var a=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(s){var a,t;return"object"==typeof l.tabs[s]&&l.tabs[s]?t="pre"===(a=l.tabs[s].type)||"html"===a||"md"===a?n.sanitizer.bypassSecurityTrustHtml(l.tabs[s].content):l.tabs[s].content:"function"==typeof l.tabs[s]&&(a="component",t=l.tabs[s]),{name:s,content:t,type:a}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},432:function(n,l,s){"use strict";s.d(l,"b",function(){return a}),s.d(l,"a",function(){return t});var a=function(){return function(){}}(),t=function(){return function(){this.disabled=!1,this.tabClass=""}}()},433:function(n,l,s){"use strict";s.d(l,"a",function(){return e});var a=s(93),t=s(0),u=s(432),e=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new t.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new a.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,s,a=this.tabs.toArray();n instanceof u.a?(l=a.indexOf(n),s=n):"number"==typeof n&&a[n]?s=a[l=n]:(l=-1,s=null),l>=0&&s instanceof u.a&&!s.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(s.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},434:function(n,l,s){"use strict";s.d(l,"a",function(){return w});var a=s(0),t=s(207),u=s(437),e=s(432),c=s(3),r=s(438),o=s(433),p=s(431),i=s(4),b=s(6),h=a.Cb({encapsulation:2,styles:[],data:{}});function g(n){return a.Xb(0,[(n()(),a.Vb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function d(n){return a.Xb(0,[(n()(),a.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a.Db(1,671744,null,0,t.a,[a.db],{target:[0,"target"]},null),(n()(),a.vb(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function f(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),a.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),a.Vb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function v(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function m(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function j(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,u.b,u.a)),a.Db(1,49152,[[1,4]],1,e.a,[],null,null),a.Tb(335544320,2,{label:0}),(n()(),a.vb(0,[[2,2]],0,1,null,g)),a.Db(4,16384,null,0,e.b,[],null,null),(n()(),a.vb(16777216,null,0,1,null,d)),a.Db(6,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(n()(),a.vb(16777216,null,0,1,null,f)),a.Db(8,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(n()(),a.vb(16777216,null,0,1,null,v)),a.Db(10,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(n()(),a.vb(16777216,null,0,1,null,m)),a.Db(12,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(n()(),a.vb(16777216,null,0,1,null,j)),a.Db(14,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function E(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),a.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,r.b,r.a)),a.Db(2,1228800,null,1,o.a,[],{borders:[0,"borders"]},null),a.Tb(603979776,1,{tabs:1}),(n()(),a.vb(16777216,null,0,1,null,y)),a.Db(5,278528,null,0,c.k,[a.db,a.Z,a.z],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var s=l.component;n(l,2,0,"true"),n(l,5,0,s.tabs)},null)}function O(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),a.Vb(1,null,[" ",""])),(n()(),a.vb(16777216,null,null,1,null,E)),a.Db(3,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function I(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,1,"ng-component",[],null,null,null,O,h)),a.Db(1,114688,null,0,p.a,[i.a,b.c],null,null)],function(n,l){n(l,1,0)},null)}var w=a.Ab("ng-component",p.a,I,{},{},[])},435:function(n,l,s){"use strict";s.d(l,"a",function(){return a});s(431);var a=function(){return function(){}}()},436:function(n,l,s){"use strict";s.d(l,"a",function(){return a});var a=function(){return function(){}}()},437:function(n,l,s){"use strict";s.d(l,"a",function(){return u}),s.d(l,"b",function(){return c});var a=s(0),t=s(432),u=a.Cb({encapsulation:2,styles:[],data:{}});function e(n){return a.Xb(0,[a.Nb(null,0),(n()(),a.vb(0,null,null,0))],null,null)}function c(n){return a.Xb(0,[a.Tb(402653184,1,{content:0}),(n()(),a.vb(0,[[1,2]],null,0,null,e))],null,null)}function r(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,2,"vcl-tab",[],null,null,null,c,u)),a.Db(1,49152,null,1,t.a,[],null,null),a.Tb(335544320,1,{label:0})],null,null)}t.a},438:function(n,l,s){"use strict";s.d(l,"a",function(){return c}),s.d(l,"b",function(){return o});var a=s(0),t=s(207),u=s(3),e=s(433),c=a.Cb({encapsulation:2,styles:[],data:{}});function r(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,l,s){var a=!0,t=n.component;"click"===l&&(a=!1!==t.onTabClick(n.context.$implicit)&&a);return a},null,null)),(n()(),a.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),a.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a.Db(3,671744,null,0,t.a,[a.db],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var s=l.component;n(l,0,0,a.Gb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,s.selectedTabIndex===l.context.index,s.selectedTabIndex===l.context.index)})}function o(n){return a.Xb(0,[a.Tb(402653184,1,{tabContent:0}),(n()(),a.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),a.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),a.vb(16777216,null,null,1,null,r)),a.Db(4,278528,null,0,u.k,[a.db,a.Z,a.z],{ngForOf:[0,"ngForOf"]},null),(n()(),a.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),a.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),a.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),a.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),a.Nb(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var s=l.component;n(l,1,0,a.Gb(1,"vclTabbable ",s.tabbableClass,""),"left"===s.layout,"right"===s.layout),n(l,2,0,a.Gb(1,"vclTabs ",s.tabsClass,""),!!s.borders),n(l,5,0,!0===s.hideContent?"none":null,a.Gb(1,"vclTabContent ",s.tabContentClass,""),!s.borders)})}function p(n){return a.Xb(0,[(n()(),a.Eb(0,0,null,null,2,"vcl-tab-nav",[],null,null,null,o,c)),a.Db(1,1228800,null,1,e.a,[],null,null),a.Tb(603979776,1,{tabs:1})],null,null)}e.a},451:function(n,l,s){"use strict";s.d(l,"a",function(){return a});var a=function(){return function(){}}()},533:function(n,l){n.exports='<h1 id="vcl-badge">vcl-badge</h1>\n<p>A visually highlighted tag to attribute items.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLBadgeModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLBadgeModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-badge-attributes">vcl-badge attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vcl-badge</code></td>\n<td>string</td>\n<td></td>\n<td>the badge&apos;s type</td>\n</tr>\n</tbody></table>\n'},534:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Default badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Primary badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"primary"</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Success badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"success"</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Info badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"info"</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Warning badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"warning"</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Error badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"error"</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n'},535:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BadgeDemoComponent {\n}\n'}}]);