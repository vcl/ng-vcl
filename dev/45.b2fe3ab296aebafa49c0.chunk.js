(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{207:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var s=t(1),a=function(n){function l(l){return n.call(this,l)||this}return Object(s.c)(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var t=n.target.currentValue;t&&(this.wormhole=this.connectWormhole(t,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(t(93).b)},408:function(n,l,t){"use strict";t.r(l);var s=t(0),a=function(){return function(){}}();var u={demo:function(){return{label:"Icon",tabs:{Demo:a,"README.md":{type:"md",content:t(652)},"demo.component.html":{type:"pre",content:t(653)},"demo.component.ts":{type:"pre",content:t(654)}}}}},e=function(){return function(){}}(),c=t(159),o=t(434),i=t(16),r=t(3),p=t(22),b=s.Cb({encapsulation:2,styles:[],data:{}});function h(n){return s.Xb(0,[(n()(),s.Vb(-1,null,["Custom icon (from the "])),(n()(),s.Eb(1,0,null,null,1,"i",[],null,null,null,null,null)),(n()(),s.Vb(-1,null,["Font Awesome"])),(n()(),s.Vb(-1,null,[" icon font):\n"])),(n()(),s.Eb(4,0,null,null,3,"vcl-icon",[["alt","cog"],["icon","fa fa-cog fa-2x"]],[[2,"vclIcon",null],[1,"role",0],[1,"aria-label",0],[1,"aria-hidden",0]],null,null,null,null)),s.Db(5,16384,null,0,i.a,[],{alt:[0,"alt"]},null),s.Sb(512,null,r.j,r.j,[s.z,s.A,s.o,s.Q]),s.Db(7,540672,null,0,i.b,[[4,r.j],p.b],{icon:[0,"icon"]},null),(n()(),s.Eb(8,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Eb(9,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Vb(-1,null,[" Icon provider based (from the "])),(n()(),s.Eb(11,0,null,null,1,"i",[],null,null,null,null,null)),(n()(),s.Vb(-1,null,["Font Awesome"])),(n()(),s.Vb(-1,null,[" icon font):\n"])),(n()(),s.Eb(14,0,null,null,3,"vcl-icon",[["alt","cog"],["icon","fa:cog:2x"]],[[2,"vclIcon",null],[1,"role",0],[1,"aria-label",0],[1,"aria-hidden",0]],null,null,null,null)),s.Db(15,16384,null,0,i.a,[],{alt:[0,"alt"]},null),s.Sb(512,null,r.j,r.j,[s.z,s.A,s.o,s.Q]),s.Db(17,540672,null,0,i.b,[[4,r.j],p.b],{icon:[0,"icon"]},null),(n()(),s.Eb(18,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Eb(19,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Vb(-1,null,[" PNG image resource based:\n"])),(n()(),s.Eb(21,0,null,null,3,"vcl-icon",[["alt","cog"]],[[2,"vclIcon",null],[1,"role",0],[1,"aria-label",0],[1,"aria-hidden",0]],null,null,null,null)),s.Sb(4608,null,r.j,r.j,[s.z,s.A,s.o,s.Q]),s.Db(23,16384,null,0,i.a,[],{alt:[0,"alt"]},null),(n()(),s.Eb(24,0,null,null,0,"img",[["src","http://materialdesignicons.com/api/download/icon/png/E4A14909-3821-4DB1-A739-4DA464ABEEB7/36"]],null,null,null,null,null)),(n()(),s.Eb(25,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Eb(26,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Vb(-1,null,[" SVG based:\n"])),(n()(),s.Eb(28,0,null,null,4,"vcl-icon",[],[[8,"className",0],[2,"vclIcon",null],[1,"role",0],[1,"aria-label",0],[1,"aria-hidden",0]],null,null,null,null)),s.Sb(4608,null,r.j,r.j,[s.z,s.A,s.o,s.Q]),s.Db(30,16384,null,0,i.a,[],null,null),(n()(),s.Eb(31,0,null,null,1,":svg:svg",[["height","25"],["viewBox","0 0 1792 1792"],["width","25"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),s.Eb(32,0,null,null,0,":svg:path",[["d","M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-384v384h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-384h-384v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h384v-384h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45t-19 45-45 19h-128v384h384v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"],["id","mysvg"]],null,null,null,null,null))],function(n,l){n(l,5,0,"cog");n(l,7,0,"fa fa-cog fa-2x");n(l,15,0,"cog");n(l,17,0,"fa:cog:2x");n(l,23,0,"cog")},function(n,l){n(l,4,0,!0,s.Ob(l,5).attrRole,s.Ob(l,5).attrAriaLabel,s.Ob(l,5).isAriaHidden);n(l,14,0,!0,s.Ob(l,15).attrRole,s.Ob(l,15).attrAriaLabel,s.Ob(l,15).isAriaHidden);n(l,21,0,!0,s.Ob(l,23).attrRole,s.Ob(l,23).attrAriaLabel,s.Ob(l,23).isAriaHidden);n(l,28,0,"vclIconSize1",!0,s.Ob(l,30).attrRole,s.Ob(l,30).attrAriaLabel,s.Ob(l,30).isAriaHidden)})}function d(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,1,"ng-component",[],null,null,null,h,b)),s.Db(1,49152,null,0,a,[],null,null)],null,null)}var g=s.Ab("ng-component",a,d,{},{},[]),f=t(83),m=t(436),v=t(435),j=t(128),y=t(4),w=t(431);t.d(l,"IconDemoModuleNgFactory",function(){return E});var E=s.Bb(e,[],function(n){return s.Lb([s.Mb(512,s.l,s.qb,[[8,[c.a,o.a,g]],[3,s.l],s.F]),s.Mb(4608,r.n,r.m,[s.B,[2,r.y]]),s.Mb(5120,p.b,function(){return[new p.a]},[]),s.Mb(1073742336,r.c,r.c,[]),s.Mb(1073742336,f.a,f.a,[]),s.Mb(1073742336,m.a,m.a,[]),s.Mb(1073742336,v.a,v.a,[]),s.Mb(1073742336,j.a,j.a,[]),s.Mb(1073742336,y.m,y.m,[[2,y.s],[2,y.l]]),s.Mb(1073742336,e,e,[]),s.Mb(1024,y.j,function(){return[[{path:"",component:w.a,data:u}]]},[])])})},431:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var s,a;return"object"==typeof l.tabs[t]&&l.tabs[t]?a="pre"===(s=l.tabs[t].type)||"html"===s||"md"===s?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(s="component",a=l.tabs[t]),{name:t,content:a,type:s}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},432:function(n,l,t){"use strict";t.d(l,"b",function(){return s}),t.d(l,"a",function(){return a});var s=function(){return function(){}}(),a=function(){return function(){this.disabled=!1,this.tabClass=""}}()},433:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var s=t(93),a=t(0),u=t(432),e=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new a.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new s.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,t,s=this.tabs.toArray();n instanceof u.a?(l=s.indexOf(n),t=n):"number"==typeof n&&s[n]?t=s[l=n]:(l=-1,t=null),l>=0&&t instanceof u.a&&!t.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(t.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},434:function(n,l,t){"use strict";t.d(l,"a",function(){return q});var s=t(0),a=t(207),u=t(437),e=t(432),c=t(3),o=t(438),i=t(433),r=t(431),p=t(4),b=t(6),h=s.Cb({encapsulation:2,styles:[],data:{}});function d(n){return s.Xb(0,[(n()(),s.Vb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function g(n){return s.Xb(0,[(n()(),s.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Db(1,671744,null,0,a.a,[s.db],{target:[0,"target"]},null),(n()(),s.vb(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function f(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),s.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),s.Vb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function m(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function v(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function j(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,u.b,u.a)),s.Db(1,49152,[[1,4]],1,e.a,[],null,null),s.Tb(335544320,2,{label:0}),(n()(),s.vb(0,[[2,2]],0,1,null,d)),s.Db(4,16384,null,0,e.b,[],null,null),(n()(),s.vb(16777216,null,0,1,null,g)),s.Db(6,16384,null,0,c.l,[s.db,s.Z],{ngIf:[0,"ngIf"]},null),(n()(),s.vb(16777216,null,0,1,null,f)),s.Db(8,16384,null,0,c.l,[s.db,s.Z],{ngIf:[0,"ngIf"]},null),(n()(),s.vb(16777216,null,0,1,null,m)),s.Db(10,16384,null,0,c.l,[s.db,s.Z],{ngIf:[0,"ngIf"]},null),(n()(),s.vb(16777216,null,0,1,null,v)),s.Db(12,16384,null,0,c.l,[s.db,s.Z],{ngIf:[0,"ngIf"]},null),(n()(),s.vb(16777216,null,0,1,null,j)),s.Db(14,16384,null,0,c.l,[s.db,s.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function w(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),s.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,o.b,o.a)),s.Db(2,1228800,null,1,i.a,[],{borders:[0,"borders"]},null),s.Tb(603979776,1,{tabs:1}),(n()(),s.vb(16777216,null,0,1,null,y)),s.Db(5,278528,null,0,c.k,[s.db,s.Z,s.z],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,"true"),n(l,5,0,t.tabs)},null)}function E(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),s.Vb(1,null,[" ",""])),(n()(),s.vb(16777216,null,null,1,null,w)),s.Db(3,16384,null,0,c.l,[s.db,s.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function x(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,1,"ng-component",[],null,null,null,E,h)),s.Db(1,114688,null,0,r.a,[p.a,b.c],null,null)],function(n,l){n(l,1,0)},null)}var q=s.Ab("ng-component",r.a,x,{},{},[])},435:function(n,l,t){"use strict";t.d(l,"a",function(){return s});t(431);var s=function(){return function(){}}()},436:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){return function(){}}()},437:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return c});var s=t(0),a=t(432),u=s.Cb({encapsulation:2,styles:[],data:{}});function e(n){return s.Xb(0,[s.Nb(null,0),(n()(),s.vb(0,null,null,0))],null,null)}function c(n){return s.Xb(0,[s.Tb(402653184,1,{content:0}),(n()(),s.vb(0,[[1,2]],null,0,null,e))],null,null)}function o(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,2,"vcl-tab",[],null,null,null,c,u)),s.Db(1,49152,null,1,a.a,[],null,null),s.Tb(335544320,1,{label:0})],null,null)}a.a},438:function(n,l,t){"use strict";t.d(l,"a",function(){return c}),t.d(l,"b",function(){return i});var s=t(0),a=t(207),u=t(3),e=t(433),c=s.Cb({encapsulation:2,styles:[],data:{}});function o(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,l,t){var s=!0,a=n.component;"click"===l&&(s=!1!==a.onTabClick(n.context.$implicit)&&s);return s},null,null)),(n()(),s.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),s.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Db(3,671744,null,0,a.a,[s.db],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,s.Gb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function i(n){return s.Xb(0,[s.Tb(402653184,1,{tabContent:0}),(n()(),s.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),s.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),s.vb(16777216,null,null,1,null,o)),s.Db(4,278528,null,0,u.k,[s.db,s.Z,s.z],{ngForOf:[0,"ngForOf"]},null),(n()(),s.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),s.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),s.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),s.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),s.Nb(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,s.Gb(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,2,0,s.Gb(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,5,0,!0===t.hideContent?"none":null,s.Gb(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}function r(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,2,"vcl-tab-nav",[],null,null,null,i,c)),s.Db(1,1228800,null,1,e.a,[],null,null),s.Tb(603979776,1,{tabs:1})],null,null)}e.a},652:function(n,l){n.exports='<h1 id="vcl-icon">vcl-icon</h1>\n<p>Icon which can be based on glyphs from icon fonts, inline svg and bitmaps.</p>\n<p>The <code>label</code> is never displayed, it is only for accessibility with screen<br>readers.<br>The <code>hidden</code> attribute is only reflected in the <code>aria-hidden</code> property which<br>allows to hide the icon to screen readers, if it is only of presentational character.<br>See <a href="http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html">http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html</a> for details.</p>\n<h2 id="usage">Usage</h2>\n<p>As a component</p>\n<pre class="hljs"><code>&lt;vcl-icon icon=&quot;fa:chevron-right&quot; label=&quot;chevron right&quot;&gt;&lt;/vcl-icon&gt;</code></pre>\n<p>or via an attribute</p>\n<pre class="hljs"><code>&lt;span vcl-icon icon=&quot;...&quot;&gt;&lt;/span&gt;</code></pre>\n<p>With image resource</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;cog&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://materialdesignicons.com/api/download/icon/png/E4A14909-3821-4DB1-A739-4DA464ABEEB7/36&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span></pre>\n<p>With SVG</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span>  [<span class="hljs-attr">class</span>]=<span class="hljs-string">&quot;&apos;vclIconSize1&apos;&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">svg</span>  <span class="hljs-attr">...</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>icon</code></td>\n<td>string</td>\n<td></td>\n<td>Icon generator lookup via icon class provider</td>\n</tr>\n<tr>\n<td><code>src</code></td>\n<td>string</td>\n<td></td>\n<td>URL of a graphics resource</td>\n</tr>\n<tr>\n<td><code>svguse</code></td>\n<td>string</td>\n<td></td>\n<td>Generates an SVG <code>use</code> tag referencing the value</td>\n</tr>\n</tbody></table>\n'},653:function(n,l){n.exports='Custom icon (from the <span class="hljs-tag">&lt;<span class="hljs-name">i</span>&gt;</span>Font Awesome<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> icon font):\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fa fa-cog fa-2x"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"cog"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\nIcon provider based (from the <span class="hljs-tag">&lt;<span class="hljs-name">i</span>&gt;</span>Font Awesome<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> icon font):\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fa:cog:2x"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"cog"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\nPNG image resource based:\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"cog"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://materialdesignicons.com/api/download/icon/png/E4A14909-3821-4DB1-A739-4DA464ABEEB7/36"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\nSVG based:\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span>  [<span class="hljs-attr">class</span>]=<span class="hljs-string">"\'vclIconSize1\'"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"25"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"25"</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">"0 0 1792 1792"</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">"http://www.w3.org/2000/svg"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"mysvg"</span> <span class="hljs-attr">d</span>=<span class="hljs-string">"M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-384v384h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-384h-384v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h384v-384h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45t-19 45-45 19h-128v384h384v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"</span>/&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n'},654:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> IconDemoComponent {\n\n}\n'}}]);