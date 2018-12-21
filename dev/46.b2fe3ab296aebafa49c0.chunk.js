(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{207:function(l,n,t){"use strict";t.d(n,"a",function(){return s});var a=t(1),s=function(l){function n(n){return l.call(this,n)||this}return Object(a.c)(n,l),Object.defineProperty(n.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),n.prototype.ngOnChanges=function(l){var n="attrs"in l&&l.attrs.currentValue||void 0;if("target"in l){this.clearWormholes();var t=l.target.currentValue;t&&(this.wormhole=this.connectWormhole(t,n))}else n&&this.wormhole&&this.wormhole.setAttributes(n)},n.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},n}(t(93).b)},404:function(l,n,t){"use strict";t.r(n);var a=t(0),s=function(){function l(){}return l.prototype.someAction=function(l){console.log("Action handler, param:",l)},l}();var e={demo:function(){return{label:"Link",tabs:{Demo:s,"README.md":{type:"md",content:t(530)},"demo.component.html":{type:"pre",content:t(531)},"demo.component.ts":{type:"pre",content:t(532)}}}}},u=function(){return function(){}}(),c=t(159),o=t(434),i=t(136),r=t(91),b=a.Cb({encapsulation:2,styles:[],data:{}});function p(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Link with action"])),(l()(),a.Eb(2,0,null,null,1,"a",[["vcl-link",""]],[[1,"title",0],[1,"aria-label",0],[2,"vclDisabled",null],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],[[null,"tap"]],function(l,n,t){var a=!0,s=l.component;"tap"===n&&(a=!1!==s.someAction(t)&&a);return a},i.b,i.a)),a.Db(3,49152,null,0,r.a,[],{label:[0,"label"]},null),(l()(),a.Eb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["href attribute only (label is automatically created)"])),(l()(),a.Eb(8,0,null,null,1,"a",[["target","'_blank'"],["vcl-link",""]],[[1,"title",0],[1,"aria-label",0],[2,"vclDisabled",null],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],null,null,i.b,i.a)),a.Db(9,49152,null,0,r.a,[],{href:[0,"href"]},null),(l()(),a.Eb(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(12,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Label with an appended icon"])),(l()(),a.Eb(14,0,null,null,1,"a",[["href","'https://github.com/ng-vcl/ng-vcl'"],["target","'_blank'"],["vcl-link",""]],[[1,"title",0],[1,"aria-label",0],[2,"vclDisabled",null],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],null,null,i.b,i.a)),a.Db(15,49152,null,0,r.a,[],{href:[0,"href"],label:[1,"label"],appIcon:[2,"appIcon"]},null),(l()(),a.Eb(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(17,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(18,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Disabled link"])),(l()(),a.Eb(20,0,null,null,1,"a",[["vcl-link",""]],[[1,"title",0],[1,"aria-label",0],[2,"vclDisabled",null],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],null,null,i.b,i.a)),a.Db(21,49152,null,0,r.a,[],{disabled:[0,"disabled"],href:[1,"href"],label:[2,"label"]},null),(l()(),a.Eb(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(23,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){l(n,3,0,"Trigger test action");l(n,9,0,"http://www.example.com");l(n,15,0,"'https://github.com/ng-vcl/ng-vcl'","Example external Link","fa:external-link-alt");l(n,21,0,!0,"this is not considered when the link is disabled","Disabled link")},function(l,n){l(n,2,0,a.Ob(n,3).title,a.Ob(n,3).title,a.Ob(n,3).disabled,a.Ob(n,3).styleCursor,a.Ob(n,3).attrHref,a.Ob(n,3).useIcogram),l(n,8,0,a.Ob(n,9).title,a.Ob(n,9).title,a.Ob(n,9).disabled,a.Ob(n,9).styleCursor,a.Ob(n,9).attrHref,a.Ob(n,9).useIcogram),l(n,14,0,a.Ob(n,15).title,a.Ob(n,15).title,a.Ob(n,15).disabled,a.Ob(n,15).styleCursor,a.Ob(n,15).attrHref,a.Ob(n,15).useIcogram),l(n,20,0,a.Ob(n,21).title,a.Ob(n,21).title,a.Ob(n,21).disabled,a.Ob(n,21).styleCursor,a.Ob(n,21).attrHref,a.Ob(n,21).useIcogram)})}function h(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"ng-component",[],null,null,null,p,b)),a.Db(1,49152,null,0,s,[],null,null)],null,null)}var d=a.Ab("ng-component",s,h,{},{},[]),f=t(3),m=t(22),g=t(83),v=t(436),j=t(435),y=t(128),k=t(23),x=t(129),w=t(132),E=t(4),C=t(431);t.d(n,"LinkDemoModuleNgFactory",function(){return O});var O=a.Bb(u,[],function(l){return a.Lb([a.Mb(512,a.l,a.qb,[[8,[c.a,o.a,d]],[3,a.l],a.F]),a.Mb(4608,f.n,f.m,[a.B,[2,f.y]]),a.Mb(5120,m.b,function(){return[new m.a]},[]),a.Mb(1073742336,f.c,f.c,[]),a.Mb(1073742336,g.a,g.a,[]),a.Mb(1073742336,v.a,v.a,[]),a.Mb(1073742336,j.a,j.a,[]),a.Mb(1073742336,y.a,y.a,[]),a.Mb(1073742336,k.c,k.c,[]),a.Mb(1073742336,x.a,x.a,[]),a.Mb(1073742336,w.a,w.a,[]),a.Mb(1073742336,E.m,E.m,[[2,E.s],[2,E.l]]),a.Mb(1073742336,u,u,[]),a.Mb(1024,E.j,function(){return[[{path:"",component:C.a,data:e}]]},[])])})},431:function(l,n,t){"use strict";t.d(n,"a",function(){return a});var a=function(){function l(l,n){this.activatedRoute=l,this.sanitizer=n,this.tabs=[]}return l.prototype.ngOnInit=function(){var l=this,n=this.activatedRoute.snapshot.data.demo();n?(this.title=n.label,n.tabs?this.tabs=Object.keys(n.tabs).map(function(t){var a,s;return"object"==typeof n.tabs[t]&&n.tabs[t]?s="pre"===(a=n.tabs[t].type)||"html"===a||"md"===a?l.sanitizer.bypassSecurityTrustHtml(n.tabs[t].content):n.tabs[t].content:"function"==typeof n.tabs[t]&&(a="component",s=n.tabs[t]),{name:t,content:s,type:a}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},l}()},432:function(l,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"a",function(){return s});var a=function(){return function(){}}(),s=function(){return function(){this.disabled=!1,this.tabClass=""}}()},433:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var a=t(93),s=t(0),e=t(432),u=function(){function l(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new s.q}return Object.defineProperty(l.prototype,"tabContent",{set:function(l){l&&(this.wormholeHost=new a.b(l))},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),l.prototype.selectTab=function(l){if(this.tabs){var n,t,a=this.tabs.toArray();l instanceof e.a?(n=a.indexOf(l),t=l):"number"==typeof l&&a[l]?t=a[n=l]:(n=-1,t=null),n>=0&&t instanceof e.a&&!t.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(t.content)),this.selectedTabIndex=n)}},l.prototype.onTabClick=function(l){this.selectTab(l),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},l.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},l.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},l}()},434:function(l,n,t){"use strict";t.d(n,"a",function(){return E});var a=t(0),s=t(207),e=t(437),u=t(432),c=t(3),o=t(438),i=t(433),r=t(431),b=t(4),p=t(6),h=a.Cb({encapsulation:2,styles:[],data:{}});function d(l){return a.Xb(0,[(l()(),a.Vb(0,null,["",""]))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.name)})}function f(l){return a.Xb(0,[(l()(),a.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a.Db(1,671744,null,0,s.a,[a.db],{target:[0,"target"]},null),(l()(),a.vb(0,null,null,0))],function(l,n){l(n,1,0,n.parent.context.$implicit.content)},null)}function m(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),a.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),a.Vb(2,null,["",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.content)})}function g(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function v(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function j(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function y(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,e.b,e.a)),a.Db(1,49152,[[1,4]],1,u.a,[],null,null),a.Tb(335544320,2,{label:0}),(l()(),a.vb(0,[[2,2]],0,1,null,d)),a.Db(4,16384,null,0,u.b,[],null,null),(l()(),a.vb(16777216,null,0,1,null,f)),a.Db(6,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,m)),a.Db(8,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,g)),a.Db(10,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,v)),a.Db(12,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,j)),a.Db(14,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,6,0,"component"===n.context.$implicit.type),l(n,8,0,"text"===n.context.$implicit.type),l(n,10,0,"html"===n.context.$implicit.type),l(n,12,0,"md"===n.context.$implicit.type),l(n,14,0,"pre"===n.context.$implicit.type)},null)}function k(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),a.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,o.b,o.a)),a.Db(2,1228800,null,1,i.a,[],{borders:[0,"borders"]},null),a.Tb(603979776,1,{tabs:1}),(l()(),a.vb(16777216,null,0,1,null,y)),a.Db(5,278528,null,0,c.k,[a.db,a.Z,a.z],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,2,0,"true"),l(n,5,0,t.tabs)},null)}function x(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(l()(),a.Vb(1,null,[" ",""])),(l()(),a.vb(16777216,null,null,1,null,k)),a.Db(3,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,n.component.tabs.length>0)},function(l,n){l(n,1,0,n.component.title)})}function w(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"ng-component",[],null,null,null,x,h)),a.Db(1,114688,null,0,r.a,[b.a,p.c],null,null)],function(l,n){l(n,1,0)},null)}var E=a.Ab("ng-component",r.a,w,{},{},[])},435:function(l,n,t){"use strict";t.d(n,"a",function(){return a});t(431);var a=function(){return function(){}}()},436:function(l,n,t){"use strict";t.d(n,"a",function(){return a});var a=function(){return function(){}}()},437:function(l,n,t){"use strict";t.d(n,"a",function(){return e}),t.d(n,"b",function(){return c});var a=t(0),s=t(432),e=a.Cb({encapsulation:2,styles:[],data:{}});function u(l){return a.Xb(0,[a.Nb(null,0),(l()(),a.vb(0,null,null,0))],null,null)}function c(l){return a.Xb(0,[a.Tb(402653184,1,{content:0}),(l()(),a.vb(0,[[1,2]],null,0,null,u))],null,null)}function o(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,2,"vcl-tab",[],null,null,null,c,e)),a.Db(1,49152,null,1,s.a,[],null,null),a.Tb(335544320,1,{label:0})],null,null)}s.a},438:function(l,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return i});var a=t(0),s=t(207),e=t(3),u=t(433),c=a.Cb({encapsulation:2,styles:[],data:{}});function o(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(l,n,t){var a=!0,s=l.component;"click"===n&&(a=!1!==s.onTabClick(l.context.$implicit)&&a);return a},null,null)),(l()(),a.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(l()(),a.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a.Db(3,671744,null,0,s.a,[a.db],{target:[0,"target"]},null)],function(l,n){l(n,3,0,n.context.$implicit.label)},function(l,n){var t=n.component;l(n,0,0,a.Gb(1,"vclTab ",n.context.$implicit.tabClass,""),n.context.$implicit.disabled,t.selectedTabIndex===n.context.index,t.selectedTabIndex===n.context.index)})}function i(l){return a.Xb(0,[a.Tb(402653184,1,{tabContent:0}),(l()(),a.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(l()(),a.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(l()(),a.vb(16777216,null,null,1,null,o)),a.Db(4,278528,null,0,e.k,[a.db,a.Z,a.z],{ngForOf:[0,"ngForOf"]},null),(l()(),a.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(l()(),a.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(l()(),a.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(l()(),a.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),a.Nb(null,0)],function(l,n){l(n,4,0,n.component.tabs)},function(l,n){var t=n.component;l(n,1,0,a.Gb(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),l(n,2,0,a.Gb(1,"vclTabs ",t.tabsClass,""),!!t.borders),l(n,5,0,!0===t.hideContent?"none":null,a.Gb(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}function r(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,2,"vcl-tab-nav",[],null,null,null,i,c)),a.Db(1,1228800,null,1,u.a,[],null,null),a.Tb(603979776,1,{tabs:1})],null,null)}u.a},530:function(l,n){l.exports='<h1 id="vcl-link">vcl-link</h1>\n<p>The anchor tag with VCL and Angular awareness.<br>Uses vcl-icogram to display a combination of text and icons if <code>appIcon</code> or <code>appIcon</code> is provided.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;a vcl-link href=&quot;http://www.example.com&quot; label=&quot;Example Link&quot; prepIcon=&quot;fa:chevron-right&quot;&gt;&lt;/a&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>href</code></td>\n<td>string</td>\n<td></td>\n<td><code>href</code> attribute</td>\n</tr>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>textual label</td>\n</tr>\n<tr>\n<td><code>title</code></td>\n<td>string</td>\n<td></td>\n<td>textual title</td>\n</tr>\n<tr>\n<td><code>prepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be prepended to the label</td>\n</tr>\n<tr>\n<td><code>appIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be appended to the label</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>disabled if <code>true</code></td>\n</tr>\n</tbody></table>\n'},531:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Link with action<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"someAction($event)"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"\'Trigger test action\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>href attribute only (label is automatically created)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span> [<span class="hljs-attr">href</span>]=<span class="hljs-string">"\'http://www.example.com\'"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"\'_blank\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Label with an appended icon<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span>\n  <span class="hljs-attr">href</span>=<span class="hljs-string">"\'https://github.com/ng-vcl/ng-vcl\'"</span>\n  [<span class="hljs-attr">label</span>]=<span class="hljs-string">"\'Example external Link\'"</span>\n  [<span class="hljs-attr">appIcon</span>]=<span class="hljs-string">"\'fa:external-link-alt\'"</span>\n  <span class="hljs-attr">target</span>=<span class="hljs-string">"\'_blank\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Disabled link<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span>\n  [<span class="hljs-attr">label</span>]=<span class="hljs-string">"\'Disabled link\'"</span>\n  [<span class="hljs-attr">href</span>]=<span class="hljs-string">"\'this is not considered when the link is disabled\'"</span>\n  [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n'},532:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> LinkDemoComponent {\n  someAction(param) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'Action handler, param:\'</span>, param);\n  }\n}\n'}}]);