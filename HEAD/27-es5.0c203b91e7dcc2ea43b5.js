function _defineProperties(l,n){for(var s=0;s<n.length;s++){var a=n[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,a.key,a)}}function _createClass(l,n,s){return n&&_defineProperties(l.prototype,n),s&&_defineProperties(l,s),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"1JED":function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">true</span>&gt;</span>Disabled button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"emphasized"</span>&gt;</span>Emphasized label button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>Button (a-tag)<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span>  <span class="hljs-attr">title</span>=<span class="hljs-string">"Square Button"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:bolt"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span> &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclAppend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:bolt"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n     Appended icon\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:bolt"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    Prepended icon\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:bolt"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n      Prepended and appended icon\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclAppend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:bolt"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event.selected)"</span>&gt;</span>Selectable button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n'},"2FIb":function(l,n,s){"use strict";s.d(n,"a",(function(){return a})),s("PNUx");var a=function l(){_classCallCheck(this,l)}},"8Ip6":function(l,n,s){"use strict";s.d(n,"a",(function(){return y}));var a=s("8Y7J"),t=s("zMNK"),e=s("b9ux"),u=s("ZMf7"),c=s("IXq8"),o=s("SVse"),b=s("TINK"),r=s("tKhL"),p=s("PNUx"),i=s("iInd"),h=s("cUpR"),d=a.ob({encapsulation:2,styles:[],data:{}});function g(l){return a.Kb(0,[(l()(),a.gb(0,null,null,0))],null,null)}function m(l){return a.Kb(0,[(l()(),a.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),a.gb(16777216,null,null,1,null,g)),a.pb(2,212992,null,0,t.a,[a.j,a.N],{portal:[0,"portal"]},null)],(function(l,n){l(n,2,0,n.parent.context.$implicit.content)}),null)}function f(l){return a.Kb(0,[(l()(),a.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),a.qb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),a.Ib(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.parent.context.$implicit.content)}))}function v(l){return a.Kb(0,[(l()(),a.qb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.content)}))}function j(l){return a.Kb(0,[(l()(),a.qb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.content)}))}function B(l){return a.Kb(0,[(l()(),a.qb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.content)}))}function k(l){return a.Kb(0,[(l()(),a.qb(0,16777216,null,null,14,"vcl-tab",[],[[2,"tab",null],[1,"role",0],[2,"disabled",null],[2,"selected",null],[1,"aria-selected",0]],[[null,"click"]],(function(l,n,s){var t=!0;return"click"===n&&(t=!1!==a.Bb(l,1).onClick()&&t),t}),e.c,e.a)),a.pb(1,4243456,[[1,4]],0,u.a,[c.a,a.N],null,null),(l()(),a.qb(2,0,null,0,2,"vcl-tab-label",[],[[2,"tab-label",null]],null,null,e.d,e.b)),a.pb(3,49152,null,0,u.b,[],null,null),(l()(),a.Ib(4,0,["",""])),(l()(),a.gb(16777216,null,1,1,null,m)),a.pb(6,16384,null,0,o.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,1,1,null,f)),a.pb(8,16384,null,0,o.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,1,1,null,v)),a.pb(10,16384,null,0,o.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,1,1,null,j)),a.pb(12,16384,null,0,o.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,1,1,null,B)),a.pb(14,16384,null,0,o.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(0,null,null,0))],(function(l,n){l(n,6,0,"component"===n.context.$implicit.type),l(n,8,0,"text"===n.context.$implicit.type),l(n,10,0,"html"===n.context.$implicit.type),l(n,12,0,"md"===n.context.$implicit.type),l(n,14,0,"pre"===n.context.$implicit.type)}),(function(l,n){l(n,0,0,a.Bb(n,1).classVclTab,a.Bb(n,1).attrRole,a.Bb(n,1).disabled,a.Bb(n,1).selected,a.Bb(n,1).selected),l(n,2,0,a.Bb(n,3).classCclTabLabel),l(n,4,0,n.context.$implicit.name)}))}function q(l){return a.Kb(0,[(l()(),a.qb(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),a.qb(1,0,null,null,5,"vcl-tab-nav",[["borders","true"]],[[2,"tabbable",null],[2,"tabs-left",null],[2,"tabs-right",null]],null,null,b.b,b.a)),a.Fb(6144,null,c.a,null,[r.a]),a.pb(3,4898816,null,1,r.a,[a.h],{borders:[0,"borders"]},null),a.Gb(603979776,1,{tabs:1}),(l()(),a.gb(16777216,null,0,1,null,k)),a.pb(6,278528,null,0,o.k,[a.N,a.K,a.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var s=n.component;l(n,3,0,"true"),l(n,6,0,s.tabs)}),(function(l,n){l(n,1,0,a.Bb(n,3).classVclTabbable,a.Bb(n,3).classVclTabsLeft,a.Bb(n,3).classVclTabsRight)}))}function C(l){return a.Kb(0,[(l()(),a.qb(0,0,null,null,1,"h2",[["class","article-header"]],null,null,null,null,null)),(l()(),a.Ib(1,null,[" ",""])),(l()(),a.gb(16777216,null,null,1,null,q)),a.pb(3,16384,null,0,o.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.component.tabs.length>0)}),(function(l,n){l(n,1,0,n.component.title)}))}var y=a.mb("ng-component",p.a,(function(l){return a.Kb(0,[(l()(),a.qb(0,0,null,null,1,"ng-component",[],null,null,null,C,d)),a.pb(1,114688,null,0,p.a,[i.a,h.b],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[])},IXq8:function(l,n,s){"use strict";s.d(n,"a",(function(){return a}));var a=new(s("8Y7J").p)("vcl_tab_nav")},PNUx:function(l,n,s){"use strict";s.d(n,"a",(function(){return t}));var a=s("zMNK"),t=function(){function l(n,s){_classCallCheck(this,l),this.activatedRoute=n,this.sanitizer=s,this.tabs=[]}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this,n=this.activatedRoute.snapshot.data.demo();n?(this.title=n.label,this.tabs=n.tabs?Object.keys(n.tabs).map((function(s){var t,e;return"object"==typeof n.tabs[s]&&n.tabs[s]?e="pre"===(t=n.tabs[s].type)||"html"===t||"md"===t?l.sanitizer.bypassSecurityTrustHtml(n.tabs[s].content):n.tabs[s].content:"function"==typeof n.tabs[s]&&(t="component",e=new a.b(n.tabs[s])),{name:s,content:e,type:t}})):[]):(this.title="ng-vcl",this.tabs=[])}}]),l}()},POq0:function(l,n,s){"use strict";s.d(n,"a",(function(){return t})),s.d(n,"b",(function(){return e})),s("KCVW");var a=s("8Y7J");s("HDdC"),s("XNiG"),s("Kj3r");var t=function(){var l=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"create",value:function(l){return"undefined"==typeof MutationObserver?null:new MutationObserver(l)}}]),l}();return l.ngInjectableDef=Object(a.Ob)({factory:function(){return new l},token:l,providedIn:"root"}),l}(),e=function l(){_classCallCheck(this,l)}},S5Wt:function(l,n,s){"use strict";s.r(n);var a=s("8Y7J"),t=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"someAction",value:function(l){console.log("Action handler, param:",l)}}]),l}(),e={demo:function(){return{label:"Button",tabs:{Demo:t,"README.md":{type:"md",content:'<h1 id="vcl-button">vcl-button</h1>\n<p><code>vcl-button</code> and <code>vcl-square-button</code> enhance the HTML <code>&lt;button&gt;</code> with styling and features.<br>It is the main control for triggering actions.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLButtonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLButtonModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{ ... }</pre>\n<h3 id="basic-button">Basic button</h3>\n<pre class="hljs"><code>&lt;button vcl-button (click)=&quot;someAction($event)&quot;&gt;Action&lt;/button&gt;</code></pre>\n<pre class="hljs"><code>&lt;button vcl-button [selectable]=&quot;true&quot; (select)=&quot;someAction($event)&quot;&gt;Select&lt;/button&gt;</code></pre>\n<h3 id="icogram-button">Icogram button</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">&quot;fas:bolt&quot;</span>&gt;</span>Action<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></pre>\n<h3 id="square-button">Square button</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:bolt&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-buttonvcl-square-button-attributes">vcl-button/vcl-square-button attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>State to indicate that the button is disabled</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Button selected state toggles if clicked when true</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Whether the button is selected</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-buttonvcl-square-button-events">vcl-button/vcl-square-button events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>selectedChange</code></td>\n<td>Triggered when the button is selected state changes</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:s("1JED")},"demo.component.ts":{type:"pre",content:s("tWdA")}}}}},u=function l(){_classCallCheck(this,l)},c=s("pMnS"),o=s("8Ip6"),b=s("slit"),r=s("6B8K"),p=s("b1Eb"),i=s("X5GH"),h=s("dy60"),d=s("9Rb9"),g=s("E2lf"),m=s("Vp9f"),f=a.ob({encapsulation:2,styles:[],data:{}});function v(l){return a.Kb(0,[(l()(),a.qb(0,0,null,null,2,"button",[["vcl-button",""]],[[2,"square",null],[1,"type",0],[2,"disabled",null],[1,"disabled",0],[2,"button",null],[2,"hovered",null],[1,"aria-pressed",0],[2,"selected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],(function(l,n,s){var t=!0,e=l.component;return"mouseenter"===n&&(t=!1!==a.Bb(l,1).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==a.Bb(l,1).onMouseLeave()&&t),"click"===n&&(t=!1!==a.Bb(l,1).onClick()&&t),"focus"===n&&(t=!1!==a.Bb(l,1).onFocus()&&t),"blur"===n&&(t=!1!==a.Bb(l,1).onBlur()&&t),"click"===n&&(t=!1!==e.someAction(s)&&t),t}),b.b,b.a)),a.pb(1,49152,null,0,r.b,[a.h,a.k,[3,r.a]],null,null),(l()(),a.Ib(-1,0,["Button"])),(l()(),a.qb(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(5,0,null,null,2,"button",[["disabled","true"],["vcl-button",""]],[[2,"square",null],[1,"type",0],[2,"disabled",null],[1,"disabled",0],[2,"button",null],[2,"hovered",null],[1,"aria-pressed",0],[2,"selected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],(function(l,n,s){var t=!0,e=l.component;return"mouseenter"===n&&(t=!1!==a.Bb(l,6).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==a.Bb(l,6).onMouseLeave()&&t),"click"===n&&(t=!1!==a.Bb(l,6).onClick()&&t),"focus"===n&&(t=!1!==a.Bb(l,6).onFocus()&&t),"blur"===n&&(t=!1!==a.Bb(l,6).onBlur()&&t),"click"===n&&(t=!1!==e.someAction(s)&&t),t}),b.b,b.a)),a.pb(6,49152,null,0,r.b,[a.h,a.k,[3,r.a]],{disabled:[0,"disabled"]},null),(l()(),a.Ib(-1,0,["Disabled button"])),(l()(),a.qb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(10,0,null,null,2,"button",[["class","emphasized"],["vcl-button",""]],[[2,"square",null],[1,"type",0],[2,"disabled",null],[1,"disabled",0],[2,"button",null],[2,"hovered",null],[1,"aria-pressed",0],[2,"selected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],(function(l,n,s){var t=!0,e=l.component;return"mouseenter"===n&&(t=!1!==a.Bb(l,11).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==a.Bb(l,11).onMouseLeave()&&t),"click"===n&&(t=!1!==a.Bb(l,11).onClick()&&t),"focus"===n&&(t=!1!==a.Bb(l,11).onFocus()&&t),"blur"===n&&(t=!1!==a.Bb(l,11).onBlur()&&t),"click"===n&&(t=!1!==e.someAction(s)&&t),t}),b.b,b.a)),a.pb(11,49152,null,0,r.b,[a.h,a.k,[3,r.a]],null,null),(l()(),a.Ib(-1,0,["Emphasized label button"])),(l()(),a.qb(13,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(15,0,null,null,2,"a",[["vcl-button",""]],[[2,"square",null],[1,"type",0],[2,"disabled",null],[1,"disabled",0],[2,"button",null],[2,"hovered",null],[1,"aria-pressed",0],[2,"selected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],(function(l,n,s){var t=!0,e=l.component;return"mouseenter"===n&&(t=!1!==a.Bb(l,16).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==a.Bb(l,16).onMouseLeave()&&t),"click"===n&&(t=!1!==a.Bb(l,16).onClick()&&t),"focus"===n&&(t=!1!==a.Bb(l,16).onFocus()&&t),"blur"===n&&(t=!1!==a.Bb(l,16).onBlur()&&t),"click"===n&&(t=!1!==e.someAction(s)&&t),t}),b.b,b.a)),a.pb(16,49152,null,0,r.b,[a.h,a.k,[3,r.a]],null,null),(l()(),a.Ib(-1,0,["Button (a-tag)"])),(l()(),a.qb(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(20,0,null,null,4,"button",[["title","Square Button"],["vcl-square-button",""]],[[2,"square",null],[1,"type",0],[2,"disabled",null],[1,"disabled",0],[2,"button",null],[2,"hovered",null],[1,"aria-pressed",0],[2,"selected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],(function(l,n,s){var t=!0,e=l.component;return"mouseenter"===n&&(t=!1!==a.Bb(l,21).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==a.Bb(l,21).onMouseLeave()&&t),"click"===n&&(t=!1!==a.Bb(l,21).onClick()&&t),"focus"===n&&(t=!1!==a.Bb(l,21).onFocus()&&t),"blur"===n&&(t=!1!==a.Bb(l,21).onBlur()&&t),"click"===n&&(t=!1!==e.someAction(s)&&t),t}),b.b,b.a)),a.pb(21,49152,null,0,r.b,[a.h,a.k,[3,r.a]],null,null),(l()(),a.qb(22,0,null,0,2,"vcl-icon",[["icon","fas:bolt"]],[[2,"icon",null],[1,"role",0]],null,null,p.b,p.a)),a.Fb(512,null,i.a,i.a,[a.C,h.a]),a.pb(24,4767744,null,0,d.a,[i.a,a.k],{icon:[0,"icon"]},null),(l()(),a.qb(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(26,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(27,0,null,null,7,"button",[["vcl-button",""]],[[2,"square",null],[1,"type",0],[2,"disabled",null],[1,"disabled",0],[2,"button",null],[2,"hovered",null],[1,"aria-pressed",0],[2,"selected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],(function(l,n,s){var t=!0,e=l.component;return"mouseenter"===n&&(t=!1!==a.Bb(l,28).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==a.Bb(l,28).onMouseLeave()&&t),"click"===n&&(t=!1!==a.Bb(l,28).onClick()&&t),"focus"===n&&(t=!1!==a.Bb(l,28).onFocus()&&t),"blur"===n&&(t=!1!==a.Bb(l,28).onBlur()&&t),"click"===n&&(t=!1!==e.someAction(s)&&t),t}),b.b,b.a)),a.pb(28,49152,null,0,r.b,[a.h,a.k,[3,r.a]],null,null),(l()(),a.qb(29,0,null,0,5,"vcl-icogram",[],[[2,"icogram",null]],null,null,g.c,g.a)),a.pb(30,49152,null,0,m.a,[],null,null),(l()(),a.qb(31,0,null,2,2,"vcl-icon",[["icon","fas:bolt"],["vclAppend",""]],[[2,"icon",null],[1,"role",0]],null,null,p.b,p.a)),a.Fb(512,null,i.a,i.a,[a.C,h.a]),a.pb(33,4767744,null,0,d.a,[i.a,a.k],{icon:[0,"icon"]},null),(l()(),a.Ib(-1,1,[" Appended icon "])),(l()(),a.qb(35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(36,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(37,0,null,null,7,"button",[["vcl-button",""]],[[2,"square",null],[1,"type",0],[2,"disabled",null],[1,"disabled",0],[2,"button",null],[2,"hovered",null],[1,"aria-pressed",0],[2,"selected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],(function(l,n,s){var t=!0,e=l.component;return"mouseenter"===n&&(t=!1!==a.Bb(l,38).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==a.Bb(l,38).onMouseLeave()&&t),"click"===n&&(t=!1!==a.Bb(l,38).onClick()&&t),"focus"===n&&(t=!1!==a.Bb(l,38).onFocus()&&t),"blur"===n&&(t=!1!==a.Bb(l,38).onBlur()&&t),"click"===n&&(t=!1!==e.someAction(s)&&t),t}),b.b,b.a)),a.pb(38,49152,null,0,r.b,[a.h,a.k,[3,r.a]],null,null),(l()(),a.qb(39,0,null,0,5,"vcl-icogram",[],[[2,"icogram",null]],null,null,g.c,g.a)),a.pb(40,49152,null,0,m.a,[],null,null),(l()(),a.qb(41,0,null,0,2,"vcl-icon",[["icon","fas:bolt"],["vclPrepend",""]],[[2,"icon",null],[1,"role",0]],null,null,p.b,p.a)),a.Fb(512,null,i.a,i.a,[a.C,h.a]),a.pb(43,4767744,null,0,d.a,[i.a,a.k],{icon:[0,"icon"]},null),(l()(),a.Ib(-1,1,[" Prepended icon "])),(l()(),a.qb(45,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(46,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(47,0,null,null,10,"button",[["vcl-button",""]],[[2,"square",null],[1,"type",0],[2,"disabled",null],[1,"disabled",0],[2,"button",null],[2,"hovered",null],[1,"aria-pressed",0],[2,"selected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],(function(l,n,s){var t=!0,e=l.component;return"mouseenter"===n&&(t=!1!==a.Bb(l,48).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==a.Bb(l,48).onMouseLeave()&&t),"click"===n&&(t=!1!==a.Bb(l,48).onClick()&&t),"focus"===n&&(t=!1!==a.Bb(l,48).onFocus()&&t),"blur"===n&&(t=!1!==a.Bb(l,48).onBlur()&&t),"click"===n&&(t=!1!==e.someAction(s)&&t),t}),b.b,b.a)),a.pb(48,49152,null,0,r.b,[a.h,a.k,[3,r.a]],null,null),(l()(),a.qb(49,0,null,0,8,"vcl-icogram",[],[[2,"icogram",null]],null,null,g.c,g.a)),a.pb(50,49152,null,0,m.a,[],null,null),(l()(),a.qb(51,0,null,0,2,"vcl-icon",[["icon","fas:bolt"],["vclPrepend",""]],[[2,"icon",null],[1,"role",0]],null,null,p.b,p.a)),a.Fb(512,null,i.a,i.a,[a.C,h.a]),a.pb(53,4767744,null,0,d.a,[i.a,a.k],{icon:[0,"icon"]},null),(l()(),a.Ib(-1,1,[" Prepended and appended icon "])),(l()(),a.qb(55,0,null,2,2,"vcl-icon",[["icon","fas:bolt"],["vclAppend",""]],[[2,"icon",null],[1,"role",0]],null,null,p.b,p.a)),a.Fb(512,null,i.a,i.a,[a.C,h.a]),a.pb(57,4767744,null,0,d.a,[i.a,a.k],{icon:[0,"icon"]},null),(l()(),a.qb(58,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(59,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(60,0,null,null,2,"button",[["vcl-button",""]],[[2,"square",null],[1,"type",0],[2,"disabled",null],[1,"disabled",0],[2,"button",null],[2,"hovered",null],[1,"aria-pressed",0],[2,"selected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],(function(l,n,s){var t=!0,e=l.component;return"mouseenter"===n&&(t=!1!==a.Bb(l,61).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==a.Bb(l,61).onMouseLeave()&&t),"click"===n&&(t=!1!==a.Bb(l,61).onClick()&&t),"focus"===n&&(t=!1!==a.Bb(l,61).onFocus()&&t),"blur"===n&&(t=!1!==a.Bb(l,61).onBlur()&&t),"click"===n&&(t=!1!==e.someAction(s.selected)&&t),t}),b.b,b.a)),a.pb(61,49152,null,0,r.b,[a.h,a.k,[3,r.a]],{selectable:[0,"selectable"]},null),(l()(),a.Ib(-1,0,["Selectable button"]))],(function(l,n){l(n,6,0,"true"),l(n,24,0,"fas:bolt"),l(n,33,0,"fas:bolt"),l(n,43,0,"fas:bolt"),l(n,53,0,"fas:bolt"),l(n,57,0,"fas:bolt"),l(n,61,0,!0)}),(function(l,n){l(n,0,0,a.Bb(n,1).classVCLSquare,a.Bb(n,1).attrType,a.Bb(n,1).isDisabled,a.Bb(n,1).isDisabled,a.Bb(n,1)._hostClasses,a.Bb(n,1).hovered,a.Bb(n,1).selectable,a.Bb(n,1).selected),l(n,5,0,a.Bb(n,6).classVCLSquare,a.Bb(n,6).attrType,a.Bb(n,6).isDisabled,a.Bb(n,6).isDisabled,a.Bb(n,6)._hostClasses,a.Bb(n,6).hovered,a.Bb(n,6).selectable,a.Bb(n,6).selected),l(n,10,0,a.Bb(n,11).classVCLSquare,a.Bb(n,11).attrType,a.Bb(n,11).isDisabled,a.Bb(n,11).isDisabled,a.Bb(n,11)._hostClasses,a.Bb(n,11).hovered,a.Bb(n,11).selectable,a.Bb(n,11).selected),l(n,15,0,a.Bb(n,16).classVCLSquare,a.Bb(n,16).attrType,a.Bb(n,16).isDisabled,a.Bb(n,16).isDisabled,a.Bb(n,16)._hostClasses,a.Bb(n,16).hovered,a.Bb(n,16).selectable,a.Bb(n,16).selected),l(n,20,0,a.Bb(n,21).classVCLSquare,a.Bb(n,21).attrType,a.Bb(n,21).isDisabled,a.Bb(n,21).isDisabled,a.Bb(n,21)._hostClasses,a.Bb(n,21).hovered,a.Bb(n,21).selectable,a.Bb(n,21).selected),l(n,22,0,a.Bb(n,24).vclIcon,a.Bb(n,24).attrRole),l(n,27,0,a.Bb(n,28).classVCLSquare,a.Bb(n,28).attrType,a.Bb(n,28).isDisabled,a.Bb(n,28).isDisabled,a.Bb(n,28)._hostClasses,a.Bb(n,28).hovered,a.Bb(n,28).selectable,a.Bb(n,28).selected),l(n,29,0,a.Bb(n,30).clsIcogram),l(n,31,0,a.Bb(n,33).vclIcon,a.Bb(n,33).attrRole),l(n,37,0,a.Bb(n,38).classVCLSquare,a.Bb(n,38).attrType,a.Bb(n,38).isDisabled,a.Bb(n,38).isDisabled,a.Bb(n,38)._hostClasses,a.Bb(n,38).hovered,a.Bb(n,38).selectable,a.Bb(n,38).selected),l(n,39,0,a.Bb(n,40).clsIcogram),l(n,41,0,a.Bb(n,43).vclIcon,a.Bb(n,43).attrRole),l(n,47,0,a.Bb(n,48).classVCLSquare,a.Bb(n,48).attrType,a.Bb(n,48).isDisabled,a.Bb(n,48).isDisabled,a.Bb(n,48)._hostClasses,a.Bb(n,48).hovered,a.Bb(n,48).selectable,a.Bb(n,48).selected),l(n,49,0,a.Bb(n,50).clsIcogram),l(n,51,0,a.Bb(n,53).vclIcon,a.Bb(n,53).attrRole),l(n,55,0,a.Bb(n,57).vclIcon,a.Bb(n,57).attrRole),l(n,60,0,a.Bb(n,61).classVCLSquare,a.Bb(n,61).attrType,a.Bb(n,61).isDisabled,a.Bb(n,61).isDisabled,a.Bb(n,61)._hostClasses,a.Bb(n,61).hovered,a.Bb(n,61).selectable,a.Bb(n,61).selected)}))}var j=a.mb("ng-component",t,(function(l){return a.Kb(0,[(l()(),a.qb(0,0,null,null,1,"ng-component",[],null,null,null,v,f)),a.pb(1,49152,null,0,t,[],null,null)],null,null)}),{},{},[]),B=s("SVse"),k=s("POq0"),q=s("tfYh"),C=s("zMNK"),y=s("p/eS"),I=s("2FIb"),T=s("61Fc"),A=s("g2Nb"),K=s("hyVG"),x=s("iInd"),M=s("PNUx");s.d(n,"ButtonDemoModuleNgFactory",(function(){return _}));var _=a.nb(u,[],(function(l){return a.yb([a.zb(512,a.j,a.Z,[[8,[c.a,o.a,j]],[3,a.j],a.w]),a.zb(4608,B.n,B.m,[a.t,[2,B.A]]),a.zb(4608,k.a,k.a,[]),a.zb(4608,h.a,h.a,[[2,q.a]]),a.zb(1073742336,B.c,B.c,[]),a.zb(1073742336,C.e,C.e,[]),a.zb(1073742336,k.b,k.b,[]),a.zb(1073742336,y.a,y.a,[]),a.zb(1073742336,I.a,I.a,[]),a.zb(1073742336,T.c,T.c,[]),a.zb(1073742336,A.a,A.a,[]),a.zb(1073742336,K.a,K.a,[]),a.zb(1073742336,x.q,x.q,[[2,x.v],[2,x.m]]),a.zb(1073742336,u,u,[]),a.zb(1024,x.i,(function(){return[[{path:"",component:M.a,data:e}]]}),[])])}))},TINK:function(l,n,s){"use strict";s.d(n,"a",(function(){return u})),s.d(n,"b",(function(){return b}));var a=s("8Y7J"),t=s("zMNK"),e=s("SVse"),u=(s("IXq8"),s("tKhL"),a.ob({encapsulation:2,styles:[],data:{}}));function c(l){return a.Kb(0,[(l()(),a.gb(0,null,null,0))],null,null)}function o(l){return a.Kb(0,[(l()(),a.gb(16777216,null,null,1,null,c)),a.pb(1,212992,null,0,t.a,[a.j,a.N],{portal:[0,"portal"]},null),(l()(),a.gb(0,null,null,0))],(function(l,n){l(n,1,0,n.component.currentTab.portal)}),null)}function b(l){return a.Kb(2,[a.Gb(671088640,1,{panel:0}),(l()(),a.qb(1,0,null,null,1,"div",[["class","tabs"],["role","tablist"]],[[2,"tab-style-uni",null]],null,null,null,null)),a.Ab(null,0),(l()(),a.qb(3,0,null,null,4,"div",[["class","tab-content"]],[[4,"display",null],[2,"no-border",null]],null,null,null,null)),(l()(),a.qb(4,0,[[1,0],["panel",1]],null,3,"div",[["class","tab-panel"],["role","tabpanel"]],null,null,null,null,null)),(l()(),a.gb(16777216,null,null,1,null,o)),a.pb(6,16384,null,0,e.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),a.Ab(null,1)],(function(l,n){var s=n.component;l(n,6,0,s.currentTab&&s.currentTab.portal)}),(function(l,n){var s=n.component;l(n,1,0,!!s.borders),l(n,3,0,!1===s.hasContent?"none":null,!s.borders)}))}},ZMf7:function(l,n,s){"use strict";s.d(n,"b",(function(){return e})),s.d(n,"a",(function(){return u})),s("IXq8");var a=s("zMNK"),t=s("Kj3r"),e=function l(){_classCallCheck(this,l),this.classCclTabLabel=!0},u=function(){function l(n,s){var a=this;_classCallCheck(this,l),this.tabNav=n,this.viewContainerRef=s,this.classVclTab=!0,this.attrRole="tab",this.disabled=!1,this.selected=!1,n.currentTabChanged.pipe(Object(t.a)(0)).subscribe((function(){a.selected=n.currentTab===a}))}return _createClass(l,[{key:"onClick",value:function(){this.disabled||(this.selected=!0,this.tabNav.selectTab(this))}},{key:"ngAfterViewInit",value:function(){this.portal=this.contentTemplate?new a.f(this.contentTemplate,this.viewContainerRef):void 0}}]),l}()},b9ux:function(l,n,s){"use strict";s.d(n,"b",(function(){return t})),s.d(n,"d",(function(){return e})),s.d(n,"a",(function(){return u})),s.d(n,"c",(function(){return o}));var a=s("8Y7J"),t=(s("ZMf7"),s("IXq8"),a.ob({encapsulation:2,styles:[],data:{}}));function e(l){return a.Kb(2,[a.Ab(null,0)],null,null)}var u=a.ob({encapsulation:2,styles:[],data:{}});function c(l){return a.Kb(0,[a.Ab(null,1),(l()(),a.gb(0,null,null,0))],null,null)}function o(l){return a.Kb(2,[a.Gb(671088640,1,{contentTemplate:0}),a.Ab(null,0),(l()(),a.gb(0,[[1,2],["contentTemplate",2]],null,0,null,c))],null,null)}},tKhL:function(l,n,s){"use strict";s.d(n,"a",(function(){return u}));var a=s("8Y7J"),t=(s("IXq8"),s("6hoW")),e=s("XNiG"),u=function(){function l(n){_classCallCheck(this,l),this.cdRef=n,this._currentTabChangedEmitter=new e.a,this.currentTabChanged=this._currentTabChangedEmitter.asObservable(),this.classVclTabbable=!0,this.selectedTabIndex=0,this.borders=!1,this.selectedTabIndexChange=new a.m}return _createClass(l,[{key:"selectTab",value:function(l){if(this.tabs){var n=this.tabs.toArray().findIndex((function(n){return n===l}));this.selectedTabIndex=n,this.currentTab=l,this.selectedTabIndexChange.next(this.selectedTabIndex),this._currentTabChangedEmitter.next(),this.cdRef.markForCheck(),this.cdRef.detectChanges()}}},{key:"selectTabIndex",value:function(l){if(this.selectedTabIndex=l,this.tabs){var n,s=this.tabs.toArray();"number"==typeof l&&s[l]&&(n=s[l]),this.currentTab=n,this._currentTabChangedEmitter.next(),this.cdRef.markForCheck(),this.cdRef.detectChanges()}}},{key:"ngAfterViewInit",value:function(){this.selectTabIndex(this.selectedTabIndex)}},{key:"ngOnChanges",value:function(l){l.selectedTabIndex&&this.selectTabIndex(l.selectedTabIndex.currentValue)}},{key:"ngOnDestroy",value:function(){this._currentTabChangedEmitter.complete()}},{key:"classVclTabsLeft",get:function(){return"left"===this.layout}},{key:"classVclTabsRight",get:function(){return"right"===this.layout}},{key:"hasContent",get:function(){return!!this.panel&&Object(t.a)(this.panel)}}]),l}()},tWdA:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ButtonDemoComponent {\n  someAction(param) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'Action handler, param:\'</span>, param);\n  }\n}\n'}}]);