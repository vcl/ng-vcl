function _defineProperties(n,l){for(var t=0;t<l.length;t++){var s=l[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"2FIb":function(n,l,t){"use strict";t.d(l,"a",function(){return s}),t("PNUx");var s=function(){}},"5fBO":function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { TourService, TourOptions } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TourDemoComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">public</span> tour: TourService</span>) { }\n\n  <span class="hljs-keyword">public</span> startTour() {\n    <span class="hljs-keyword">this</span>.tour.initialize();\n    <span class="hljs-keyword">this</span>.tour.start();\n  }\n}\n'},"8Ip6":function(n,l,t){"use strict";t.d(l,"a",function(){return q});var s=t("8Y7J"),a=t("zMNK"),e=t("b9ux"),o=t("ZMf7"),u=t("IXq8"),c=t("SVse"),r=t("TINK"),p=t("tKhL"),i=t("PNUx"),d=t("iInd"),b=t("cUpR"),h=s.ob({encapsulation:2,styles:[],data:{}});function g(n){return s.Lb(0,[(n()(),s.gb(0,null,null,0))],null,null)}function v(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),s.gb(16777216,null,null,1,null,g)),s.pb(2,212992,null,0,a.a,[s.j,s.N],{portal:[0,"portal"]},null)],function(n,l){n(l,2,0,l.parent.context.$implicit.content)},null)}function f(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),s.qb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),s.Jb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function m(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function j(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function C(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return s.Lb(0,[(n()(),s.qb(0,16777216,null,null,14,"vcl-tab",[],[[2,"vclTab",null],[1,"role",0],[2,"vclDisabled",null],[2,"vclSelected",null],[1,"aria-selected",0]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==s.Cb(n,1).onClick()&&a),a},e.c,e.a)),s.pb(1,4243456,[[1,4]],0,o.a,[u.a,s.N],null,null),(n()(),s.qb(2,0,null,0,2,"vcl-tab-label",[],[[2,"vclTabLabel",null]],null,null,e.d,e.b)),s.pb(3,49152,null,0,o.b,[],null,null),(n()(),s.Jb(4,0,["",""])),(n()(),s.gb(16777216,null,1,1,null,v)),s.pb(6,16384,null,0,c.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.gb(16777216,null,1,1,null,f)),s.pb(8,16384,null,0,c.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.gb(16777216,null,1,1,null,m)),s.pb(10,16384,null,0,c.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.gb(16777216,null,1,1,null,j)),s.pb(12,16384,null,0,c.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.gb(16777216,null,1,1,null,C)),s.pb(14,16384,null,0,c.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.gb(0,null,null,0))],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},function(n,l){n(l,0,0,s.Cb(l,1).classVclTab,s.Cb(l,1).attrRole,s.Cb(l,1).disabled,s.Cb(l,1).selected,s.Cb(l,1).selected),n(l,2,0,s.Cb(l,3).classCclTabLabel),n(l,4,0,l.context.$implicit.name)})}function T(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),s.qb(1,0,null,null,5,"vcl-tab-nav",[["borders","true"]],[[2,"vclTabbable",null],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,r.b,r.a)),s.Gb(6144,null,u.a,null,[p.a]),s.pb(3,4898816,null,1,p.a,[s.h],{borders:[0,"borders"]},null),s.Hb(603979776,1,{tabs:1}),(n()(),s.gb(16777216,null,0,1,null,y)),s.pb(6,278528,null,0,c.k,[s.N,s.K,s.r],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,3,0,"true"),n(l,6,0,t.tabs)},function(n,l){n(l,1,0,s.Cb(l,3).classVclTabbable,s.Cb(l,3).classVclTabsLeft,s.Cb(l,3).classVclTabsRight)})}function I(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),s.Jb(1,null,[" ",""])),(n()(),s.gb(16777216,null,null,1,null,T)),s.pb(3,16384,null,0,c.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}var q=s.mb("ng-component",i.a,function(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,1,"ng-component",[],null,null,null,I,h)),s.pb(1,114688,null,0,i.a,[d.a,b.b],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},IXq8:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=new(t("8Y7J").p)("vcl_tab_nav")},PNUx:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var s=t("zMNK"),a=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,this.tabs=l.tabs?Object.keys(l.tabs).map(function(t){var a,e;return"object"==typeof l.tabs[t]&&l.tabs[t]?e="pre"===(a=l.tabs[t].type)||"html"===a||"md"===a?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(a="component",e=new s.b(l.tabs[t])),{name:t,content:e,type:a}}):[]):(this.title="ng-vcl",this.tabs=[])},n}()},POq0:function(n,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return e}),t("KCVW");var s=t("8Y7J");t("HDdC"),t("XNiG"),t("Kj3r");var a=function(){var n=function(){function n(){}return n.prototype.create=function(n){return"undefined"==typeof MutationObserver?null:new MutationObserver(n)},n}();return n.ngInjectableDef=Object(s.Pb)({factory:function(){return new n},token:n,providedIn:"root"}),n}(),e=function(){}},Q3WO:function(n,l,t){"use strict";t.r(l);var s=t("8Y7J");t("19H1");var a=function(){function n(n){this.tour=n}return n.prototype.startTour=function(){this.tour.initialize(),this.tour.start()},n}(),e={demo:function(){return{label:"Tour",tabs:{Demo:a,"README.md":{type:"md",content:'<h1 id="vcl-tour-step-and-vcl-tour-overlay">vcl-tour-step and vcl-tour-overlay</h1>\n<p>Simple and customizable application tour component with overlay.</p>\n<p>Note: For the highlight to work, the target element has to have a background-color.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLTourModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLTourModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n\n  <span class="hljs-keyword">constructor</span>(public tour: TourService){ }\n\n  startTour() {\n    <span class="hljs-keyword">this</span>.tour.start();\n  }\n}</pre>\n<pre class="hljs"><span class="hljs-comment">&lt;!-- Overlay element inserted on top of the page--&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-overlay</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-overlay</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Start tour --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;startTour()&quot;</span>&gt;</span>Begin tour<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Some application element --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;foo&quot;</span>&gt;</span>Some element<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;#foo&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;some title&quot;</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- ANY HTML HERE --&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-tour-step-attributes">vcl-tour-step attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>debug</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output debug information</td>\n</tr>\n<tr>\n<td><code>debugPopover</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output <code>vcl-tour-step</code>&apos;s <code>vcl-popover</code> debug information</td>\n</tr>\n<tr>\n<td><code>title</code></td>\n<td>string</td>\n<td></td>\n<td>Tour step title</td>\n</tr>\n<tr>\n<td><code>target</code></td>\n<td>string  ElementRef  Element</td>\n<td></td>\n<td>The target can be a selector, element or ElementRef instance</td>\n</tr>\n<tr>\n<td><code>order</code></td>\n<td>number</td>\n<td></td>\n<td>The order number in which tour step should be shown, necessary if same element used multiple times</td>\n</tr>\n<tr>\n<td><code>targetX</code></td>\n<td>AttachmentX</td>\n<td>AttachmentX.Center</td>\n<td>Position of the target-side</td>\n</tr>\n<tr>\n<td><code>attachmentX</code></td>\n<td>AttachmentX</td>\n<td>AttachmentX.Center</td>\n<td>Position of the popover-side</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentX</code></td>\n<td>number</td>\n<td></td>\n<td><code>vcl-popover</code>&apos;s AttachmentX offset</td>\n</tr>\n<tr>\n<td><code>targetY</code></td>\n<td>AttachmentY</td>\n<td>AttachmentY.Bottom</td>\n<td>Position of the target-vertical</td>\n</tr>\n<tr>\n<td><code>attachmentY</code></td>\n<td>AttachmentY</td>\n<td>AttachmentY.Top</td>\n<td>Position of the popover-vertical</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentY</code></td>\n<td>number</td>\n<td></td>\n<td><code>vcl-popover</code>&apos;s AttachmentY offset</td>\n</tr>\n</tbody></table>\n<h4 id="tourservice-events">TourService events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>end$</code></td>\n<td>true</td>\n<td>Event is emitted when the tour is finished or ended</td>\n</tr>\n<tr>\n<td><code>tourComponent$</code></td>\n<td>TourComponent</td>\n<td>Current <code>TourComponent</code> is emitted on each <code>vcl-tour-step</code></td>\n</tr>\n</tbody></table>\n<h3 id="tourservice-default-options">TourService default options</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>debug</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output debug information</td>\n</tr>\n<tr>\n<td><code>debugTour</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output every <code>vcl-tour-step</code> debug information</td>\n</tr>\n<tr>\n<td><code>debugPopover</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output every <code>vcl-tour-step</code>&apos;s <code>vcl-popover</code> debug information</td>\n</tr>\n<tr>\n<td><code>useOrder</code></td>\n<td>boolean</td>\n<td>false</td>\n<td><code>vcl-tour-step</code>&apos;s <code>@Input() order</code> is not used and instead the service relies on the DOM element creation order</td>\n</tr>\n<tr>\n<td><code>elementsDisabled</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Disabling highlightedElement (click) wont work</td>\n</tr>\n<tr>\n<td><code>applyRelative</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Applying position:relative to highlightedElement (disable in case you want to highlight absolute positioned elements)</td>\n</tr>\n<tr>\n<td><code>dismissOnOverlay</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Go to next step when clicking on overlay (close tour if this is last step)</td>\n</tr>\n<tr>\n<td><code>zIndex</code></td>\n<td>number</td>\n<td>20</td>\n<td>Used <code>z-index</code> for <code>vcl-tour-step</code> components</td>\n</tr>\n<tr>\n<td><code>dismissOnOverlay</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Go to next step when clicking on overlay (close tour if this is last step)</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentX</code></td>\n<td>number</td>\n<td>0</td>\n<td>Used AttachmentX offset for <code>vcl-tour-step</code> components</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentY</code></td>\n<td>number</td>\n<td>0</td>\n<td>Used AttachmentY offset for <code>vcl-tour-step</code> components</td>\n</tr>\n</tbody></table>\n<h4 id="custom-options-usage">Custom options usage</h4>\n<pre class="hljs"> startTour() {\n    <span class="hljs-keyword">this</span>.tour.initialize({<span class="hljs-attr">elementsDisabled</span>: <span class="hljs-literal">false</span>}); <span class="hljs-comment">// TourOptions</span>\n    <span class="hljs-keyword">this</span>.tour.start();\n  }</pre>\n<p>export class TourOptions {<br>  debug: boolean = false;<br>  debugTour: boolean = false;<br>  debugPopover: boolean = false;</p>\n<p>  useOrder: boolean = false;<br>  elementsDisabled: boolean = true;<br>  applyRelative: boolean = true;<br>  dismissOnOverlay: boolean = false;</p>\n<p>  zIndex: number = 20;</p>\n<p>  previousLabel: string = &apos;Previous&apos;;<br>  nextLabel: string = &apos;Next&apos;;<br>  exitLabel: string = &apos;Exit&apos;;</p>\n<p>  previousIcon: string = &apos;fas fa-chevron-left&apos;;<br>  nextIcon: string = &apos;fas fa-chevron-right&apos;;<br>  exitIcon: string = &apos;fas fa-close&apos;;</p>\n<p>  buttonClass: string = &apos;&apos;;<br>}</p>\n'},"demo.component.html":{type:"pre",content:t("UtIC")},"demo.component.ts":{type:"pre",content:t("5fBO")}}}}},o=function(){},u=t("pMnS"),c=t("8Ip6"),r=t("oPiz"),p=function(n){this.tour=n},i=s.ob({encapsulation:0,styles:[[".vclTourOverlay[_ngcontent-%COMP%]{position:fixed!important;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:20;top:0;left:0}"]],data:{}});function d(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,0,"div",[["class","vclTourOverlay"]],[[2,"vclHide",null]],[[null,"click"]],function(n,l,t){var s=!0;return"click"===l&&(s=!1!==n.component.tour.onOverlayClick()&&s),s},null,null))],null,function(n,l){n(l,0,0,!l.component.tour.showOverlay)})}var b=t("b1Eb"),h=t("X5GH"),g=t("dy60"),v=t("9Rb9"),f=t("slit"),m=t("SVse"),j=t("6B8K"),C=t("E2lf"),y=t("Vp9f"),T=t("r3hC"),I=t("Urql"),q=t("QQfA"),k=t("yDKU"),x=s.ob({encapsulation:0,styles:[[".vclTourContainer[_ngcontent-%COMP%]{background-color:#fff;text-align:center;font-size:14px;color:#000;border-radius:5px;box-shadow:inset 0 0 30px 0 rgba(0,0,0,.5)}.vclTourContainer[_ngcontent-%COMP%]   .vclTourContainerHeader[_ngcontent-%COMP%]{padding:10px;border-bottom:1px solid #ccc;background-color:#ddd;border-radius:5px;box-shadow:inset 0 0 30px 0 rgba(0,0,0,.5)}.vclTourContainer[_ngcontent-%COMP%]   .vclTourContainerContent[_ngcontent-%COMP%], .vclTourContainer[_ngcontent-%COMP%]   .vclTourContainerFooter[_ngcontent-%COMP%]{padding:10px}.vclTourContainer[_ngcontent-%COMP%]   .vclButton[_ngcontent-%COMP%]:first{margin-left:0}"]],data:{}});function A(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,1,"div",[["class","vclTourContainerHeader"]],null,null,null,null,null)),(n()(),s.Jb(1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.component.title)})}function w(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,2,"vcl-icon",[["vclPrepend",""]],[[2,"vclIcon",null],[1,"role",0]],null,null,b.b,b.a)),s.Gb(512,null,h.a,h.a,[s.C,g.a]),s.pb(2,4767744,null,0,v.a,[h.a,s.k],{icon:[0,"icon"]},null)],function(n,l){var t=l.component;n(l,2,0,null==t.tour.options?null:t.tour.options.previousIcon)},function(n,l){n(l,0,0,s.Cb(l,2).vclIcon,s.Cb(l,2).attrRole)})}function L(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,8,"button",[["type","button"],["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(n,l,t){var a=!0,e=n.component;return"mouseenter"===l&&(a=!1!==s.Cb(n,3).onMouseEnter()&&a),"mouseleave"===l&&(a=!1!==s.Cb(n,3).onMouseLeave()&&a),"click"===l&&(a=!1!==s.Cb(n,3).onClick()&&a),"focus"===l&&(a=!1!==s.Cb(n,3).onFocus()&&a),"blur"===l&&(a=!1!==s.Cb(n,3).onBlur()&&a),"click"===l&&(a=!1!==e.previous()&&a),a},f.b,f.a)),s.Gb(512,null,m.v,m.w,[s.r,s.s,s.k,s.C]),s.pb(2,278528,null,0,m.j,[m.v],{ngClass:[0,"ngClass"]},null),s.pb(3,49152,null,0,j.b,[s.h,s.k,[3,j.a]],{type:[0,"type"]},null),(n()(),s.qb(4,0,null,0,4,"vcl-icogram",[],[[2,"vclIcogram",null]],null,null,C.c,C.a)),s.pb(5,49152,null,0,y.a,[],null,null),(n()(),s.Jb(6,1,[" "," "])),(n()(),s.gb(16777216,null,0,1,null,w)),s.pb(8,16384,null,0,m.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,null==t.tour.options?null:t.tour.options.buttonClass),n(l,3,0,"button"),n(l,8,0,null==t.tour.options?null:t.tour.options.previousIcon)},function(n,l){var t=l.component;n(l,0,0,s.Cb(l,3).classVCLSquare,s.Cb(l,3).attrType,s.Cb(l,3).isDisabled,s.Cb(l,3).isDisabled,s.Cb(l,3)._hostClasses,s.Cb(l,3).hovered,s.Cb(l,3).selectable,s.Cb(l,3).selected),n(l,4,0,s.Cb(l,5).clsIcogram),n(l,6,0,null==t.tour.options?null:t.tour.options.previousLabel)})}function O(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,2,"vcl-icon",[["vclAppend",""]],[[2,"vclIcon",null],[1,"role",0]],null,null,b.b,b.a)),s.Gb(512,null,h.a,h.a,[s.C,g.a]),s.pb(2,4767744,null,0,v.a,[h.a,s.k],{icon:[0,"icon"]},null)],function(n,l){var t=l.component;n(l,2,0,null==t.tour.options?null:t.tour.options.nextIcon)},function(n,l){n(l,0,0,s.Cb(l,2).vclIcon,s.Cb(l,2).attrRole)})}function N(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,8,"button",[["type","button"],["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(n,l,t){var a=!0,e=n.component;return"mouseenter"===l&&(a=!1!==s.Cb(n,3).onMouseEnter()&&a),"mouseleave"===l&&(a=!1!==s.Cb(n,3).onMouseLeave()&&a),"click"===l&&(a=!1!==s.Cb(n,3).onClick()&&a),"focus"===l&&(a=!1!==s.Cb(n,3).onFocus()&&a),"blur"===l&&(a=!1!==s.Cb(n,3).onBlur()&&a),"click"===l&&(a=!1!==e.next()&&a),a},f.b,f.a)),s.Gb(512,null,m.v,m.w,[s.r,s.s,s.k,s.C]),s.pb(2,278528,null,0,m.j,[m.v],{ngClass:[0,"ngClass"]},null),s.pb(3,49152,null,0,j.b,[s.h,s.k,[3,j.a]],{type:[0,"type"]},null),(n()(),s.qb(4,0,null,0,4,"vcl-icogram",[],[[2,"vclIcogram",null]],null,null,C.c,C.a)),s.pb(5,49152,null,0,y.a,[],null,null),(n()(),s.Jb(6,1,[" "," "])),(n()(),s.gb(16777216,null,2,1,null,O)),s.pb(8,16384,null,0,m.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,null==t.tour.options?null:t.tour.options.buttonClass),n(l,3,0,"button"),n(l,8,0,null==t.tour.options?null:t.tour.options.nextIcon)},function(n,l){var t=l.component;n(l,0,0,s.Cb(l,3).classVCLSquare,s.Cb(l,3).attrType,s.Cb(l,3).isDisabled,s.Cb(l,3).isDisabled,s.Cb(l,3)._hostClasses,s.Cb(l,3).hovered,s.Cb(l,3).selectable,s.Cb(l,3).selected),n(l,4,0,s.Cb(l,5).clsIcogram),n(l,6,0,null==t.tour.options?null:t.tour.options.nextLabel)})}function Y(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,2,"vcl-icon",[["vclPrepend",""]],[[2,"vclIcon",null],[1,"role",0]],null,null,b.b,b.a)),s.Gb(512,null,h.a,h.a,[s.C,g.a]),s.pb(2,4767744,null,0,v.a,[h.a,s.k],{icon:[0,"icon"]},null)],function(n,l){var t=l.component;n(l,2,0,null==t.tour.options?null:t.tour.options.exitIcon)},function(n,l){n(l,0,0,s.Cb(l,2).vclIcon,s.Cb(l,2).attrRole)})}function D(n){return s.Lb(0,[s.Hb(671088640,1,{popover:0}),(n()(),s.qb(1,16777216,null,null,20,"vcl-popover",[],null,null,null,T.b,T.a)),s.pb(2,180224,[[1,4],["popover",4]],0,I.a,[s.q,s.N,q.a,m.d],{target:[0,"target"],positions:[1,"positions"],visible:[2,"visible"]},null),(n()(),s.qb(3,0,null,0,18,"div",[["class","vclTourContainer"]],null,null,null,null,null)),(n()(),s.gb(16777216,null,null,1,null,A)),s.pb(5,16384,null,0,m.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.qb(6,0,null,null,1,"div",[["class","vclTourContainerContent"]],null,null,null,null,null)),s.Bb(null,0),(n()(),s.qb(8,0,null,null,13,"div",[["class","vclTourContainerFooter"]],null,null,null,null,null)),(n()(),s.gb(16777216,null,null,1,null,L)),s.pb(10,16384,null,0,m.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.gb(16777216,null,null,1,null,N)),s.pb(12,16384,null,0,m.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.qb(13,0,null,null,8,"button",[["type","button"],["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(n,l,t){var a=!0,e=n.component;return"mouseenter"===l&&(a=!1!==s.Cb(n,16).onMouseEnter()&&a),"mouseleave"===l&&(a=!1!==s.Cb(n,16).onMouseLeave()&&a),"click"===l&&(a=!1!==s.Cb(n,16).onClick()&&a),"focus"===l&&(a=!1!==s.Cb(n,16).onFocus()&&a),"blur"===l&&(a=!1!==s.Cb(n,16).onBlur()&&a),"click"===l&&(a=!1!==e.exit()&&a),a},f.b,f.a)),s.Gb(512,null,m.v,m.w,[s.r,s.s,s.k,s.C]),s.pb(15,278528,null,0,m.j,[m.v],{ngClass:[0,"ngClass"]},null),s.pb(16,49152,null,0,j.b,[s.h,s.k,[3,j.a]],{type:[0,"type"]},null),(n()(),s.qb(17,0,null,0,4,"vcl-icogram",[],[[2,"vclIcogram",null]],null,null,C.c,C.a)),s.pb(18,49152,null,0,y.a,[],null,null),(n()(),s.gb(16777216,null,0,1,null,Y)),s.pb(20,16384,null,0,m.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.Jb(21,1,[" "," "]))],function(n,l){var t=l.component;n(l,2,0,t.target,t.positions,t.visible),n(l,5,0,t.title),n(l,10,0,t.hasPrevious),n(l,12,0,t.hasNext),n(l,15,0,null==t.tour.options?null:t.tour.options.buttonClass),n(l,16,0,"button"),n(l,20,0,null==t.tour.options?null:t.tour.options.exitIcon)},function(n,l){var t=l.component;n(l,13,0,s.Cb(l,16).classVCLSquare,s.Cb(l,16).attrType,s.Cb(l,16).isDisabled,s.Cb(l,16).isDisabled,s.Cb(l,16)._hostClasses,s.Cb(l,16).hovered,s.Cb(l,16).selectable,s.Cb(l,16).selected),n(l,17,0,s.Cb(l,18).clsIcogram),n(l,21,0,null==t.tour.options?null:t.tour.options.exitLabel)})}var S=s.ob({encapsulation:2,styles:[],data:{}});function X(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,39,"section",[["class","vlcContentArea"]],null,null,null,null,null)),(n()(),s.qb(1,0,null,null,1,"vcl-tour-overlay",[],null,null,null,d,i)),s.pb(2,49152,null,0,p,[r.a],null,null),(n()(),s.qb(3,0,null,null,21,"div",[["class","vclVer"]],null,null,null,null,null)),(n()(),s.qb(4,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),s.qb(5,0,null,null,3,"button",[["class","vclButton"],["type","button"]],null,[[null,"click"]],function(n,l,t){var s=!0;return"click"===l&&(s=!1!==n.component.startTour()&&s),s},null,null)),(n()(),s.qb(6,0,null,null,2,"div",[["class","vclIcogram"]],null,null,null,null,null)),(n()(),s.qb(7,0,null,null,1,"span",[["class","vclText"]],null,null,null,null,null)),(n()(),s.Jb(-1,null,["Start tour"])),(n()(),s.qb(9,0,null,null,15,"div",[],null,null,null,null,null)),(n()(),s.qb(10,0,null,null,2,"div",[["class","vclGridSpan-25p"]],null,null,null,null,null)),(n()(),s.qb(11,0,[["heading1",1]],null,1,"h1",[["class","vclContainer"]],null,null,null,null,null)),(n()(),s.Jb(-1,null,["Heading"])),(n()(),s.qb(13,0,null,null,3,"div",[["class","vclGridSpan-25p"]],null,null,null,null,null)),(n()(),s.qb(14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.qb(15,0,[["heading2",1]],null,1,"p",[["class","vclContainer"]],null,null,null,null,null)),(n()(),s.Jb(-1,null,["Heading"])),(n()(),s.qb(17,0,null,null,3,"div",[["class","vclGridSpan-25p"]],null,null,null,null,null)),(n()(),s.qb(18,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.qb(19,0,[["heading3",1]],null,1,"p",[["class","vclContainer"]],null,null,null,null,null)),(n()(),s.Jb(-1,null,["Heading"])),(n()(),s.qb(21,0,null,null,3,"div",[["class","vclGridSpan-25p"]],null,null,null,null,null)),(n()(),s.qb(22,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.qb(23,0,[["heading4",1]],null,1,"p",[["class","vclContainer"]],null,null,null,null,null)),(n()(),s.Jb(-1,null,["Heading"])),(n()(),s.qb(25,0,null,null,2,"vcl-tour-step",[["title","Step Title"]],null,null,null,D,x)),s.pb(26,638976,null,0,k.a,[r.a],{title:[0,"title"],target:[1,"target"]},null),(n()(),s.Jb(-1,0,[" Demo tour first step with title "])),(n()(),s.qb(28,0,null,null,2,"vcl-tour-step",[],null,null,null,D,x)),s.pb(29,638976,null,0,k.a,[r.a],{target:[0,"target"],offsetY:[1,"offsetY"]},null),(n()(),s.Jb(-1,0,[" Demo tour second step no title with Y offset "])),(n()(),s.qb(31,0,null,null,2,"vcl-tour-step",[],null,null,null,D,x)),s.pb(32,638976,null,0,k.a,[r.a],{target:[0,"target"],originX:[1,"originX"],originY:[2,"originY"],overlayX:[3,"overlayX"],overlayY:[4,"overlayY"]},null),(n()(),s.Jb(-1,0,[" Demo tour third step top position "])),(n()(),s.qb(34,0,null,null,2,"vcl-tour-step",[],null,null,null,D,x)),s.pb(35,638976,null,0,k.a,[r.a],{target:[0,"target"],originX:[1,"originX"],originY:[2,"originY"],overlayX:[3,"overlayX"],overlayY:[4,"overlayY"]},null),(n()(),s.Jb(-1,0,[" Demo tour fourth step left position "])),(n()(),s.qb(37,0,null,null,2,"vcl-tour-step",[],null,null,null,D,x)),s.pb(38,638976,null,0,k.a,[r.a],{target:[0,"target"],originX:[1,"originX"],originY:[2,"originY"],overlayX:[3,"overlayX"],overlayY:[4,"overlayY"]},null),(n()(),s.Jb(-1,0,[" Demo tour fifth step right position "]))],function(n,l){n(l,26,0,"Step Title",s.Cb(l,11)),n(l,29,0,s.Cb(l,15),50),n(l,32,0,s.Cb(l,19),"center","top","center","bottom"),n(l,35,0,s.Cb(l,23),"start","center","end","center"),n(l,38,0,s.Cb(l,15),"end","center","start","center")},null)}var M=s.mb("ng-component",a,function(n){return s.Lb(0,[(n()(),s.qb(0,0,null,null,1,"ng-component",[],null,null,null,X,S)),s.pb(1,49152,null,0,a,[r.a],null,null)],null,null)},{},{},[]),P=t("POq0"),H=t("IP0z"),K=t("UOCE"),J=t("tfYh"),R=t("zMNK"),V=t("p/eS"),_=t("2FIb"),E=t("yTgr"),B=t("/HVE"),G=t("hOhj"),z=t("7qb7"),U=t("+3TW"),F=t("61Fc"),$=t("g2Nb"),W=t("hyVG"),Z=t("i+gm"),Q=t("qFr4"),nn=t("mbT9"),ln=t("hUuX"),tn=t("iInd"),sn=t("2JrD"),an=t("PNUx");t.d(l,"TourDemoModuleNgFactory",function(){return en});var en=s.nb(o,[],function(n){return s.zb([s.Ab(512,s.j,s.Z,[[8,[u.a,c.a,M]],[3,s.j],s.w]),s.Ab(4608,m.n,m.m,[s.t,[2,m.A]]),s.Ab(4608,P.a,P.a,[]),s.Ab(4608,q.a,q.a,[q.h,q.c,s.j,q.f,q.d,s.q,s.y,m.d,H.b,[2,m.h]]),s.Ab(5120,q.i,q.j,[q.a]),s.Ab(4608,K.a,K.a,[s.q]),s.Ab(4608,g.a,g.a,[[2,J.a]]),s.Ab(4608,r.a,r.a,[]),s.Ab(1073742336,m.c,m.c,[]),s.Ab(1073742336,R.e,R.e,[]),s.Ab(1073742336,P.b,P.b,[]),s.Ab(1073742336,V.a,V.a,[]),s.Ab(1073742336,_.a,_.a,[]),s.Ab(1073742336,E.a,E.a,[]),s.Ab(1073742336,H.a,H.a,[]),s.Ab(1073742336,B.b,B.b,[]),s.Ab(1073742336,G.c,G.c,[]),s.Ab(1073742336,q.e,q.e,[]),s.Ab(1073742336,z.e,z.e,[]),s.Ab(1073742336,U.a,U.a,[]),s.Ab(1073742336,F.c,F.c,[]),s.Ab(1073742336,$.a,$.a,[]),s.Ab(1073742336,W.a,W.a,[]),s.Ab(1073742336,Z.a,Z.a,[]),s.Ab(1073742336,Q.a,Q.a,[]),s.Ab(1073742336,nn.a,nn.a,[]),s.Ab(1073742336,ln.b,ln.b,[]),s.Ab(1073742336,tn.q,tn.q,[[2,tn.v],[2,tn.m]]),s.Ab(1073742336,o,o,[]),s.Ab(256,sn.a,nn.b,[]),s.Ab(1024,tn.i,function(){return[[{path:"",component:an.a,data:e}]]},[])])})},TINK:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t.d(l,"b",function(){return r});var s=t("8Y7J"),a=t("zMNK"),e=t("SVse"),o=(t("IXq8"),t("tKhL"),s.ob({encapsulation:2,styles:[],data:{}}));function u(n){return s.Lb(0,[(n()(),s.gb(0,null,null,0))],null,null)}function c(n){return s.Lb(0,[(n()(),s.gb(16777216,null,null,1,null,u)),s.pb(1,212992,null,0,a.a,[s.j,s.N],{portal:[0,"portal"]},null),(n()(),s.gb(0,null,null,0))],function(n,l){n(l,1,0,l.component.currentTab.portal)},null)}function r(n){return s.Lb(2,[s.Hb(671088640,1,{panel:0}),(n()(),s.qb(1,0,null,null,1,"div",[["class","vclTabs"],["role","tablist"]],[[2,"vclTabStyleUni",null]],null,null,null,null)),s.Bb(null,0),(n()(),s.qb(3,0,null,null,4,"div",[["class","vclTabContent"]],[[4,"display",null],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),s.qb(4,0,[[1,0],["panel",1]],null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),s.gb(16777216,null,null,1,null,c)),s.pb(6,16384,null,0,e.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),s.Bb(null,1)],function(n,l){var t=l.component;n(l,6,0,t.currentTab&&t.currentTab.portal)},function(n,l){var t=l.component;n(l,1,0,!!t.borders),n(l,3,0,!1===t.hasContent?"none":null,!t.borders)})}},UtIC:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vlcContentArea"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-overlay</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-overlay</span>&gt;</span>\n    \n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclVer"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclButton"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"startTour()"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclIcogram"</span>&gt;</span>\n                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclText"</span>&gt;</span>Start tour<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>   \n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-25p"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer"</span> #<span class="hljs-attr">heading1</span>&gt;</span>Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-25p"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer"</span> #<span class="hljs-attr">heading2</span>&gt;</span>Heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-25p"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer"</span> #<span class="hljs-attr">heading3</span>&gt;</span>Heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-25p"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer"</span> #<span class="hljs-attr">heading4</span>&gt;</span>Heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span>\n        [<span class="hljs-attr">target</span>]=<span class="hljs-string">"heading1"</span>\n        <span class="hljs-attr">title</span>=<span class="hljs-string">"Step Title"</span>&gt;</span>\n            Demo tour first step with title\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span> \n        [<span class="hljs-attr">target</span>]=<span class="hljs-string">"heading2"</span>\n        [<span class="hljs-attr">offsetY</span>]=<span class="hljs-string">"50"</span>&gt;</span>\n            Demo tour second step no title with Y offset\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n    \n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span>\n        [<span class="hljs-attr">target</span>]=<span class="hljs-string">"heading3"</span>\n        [<span class="hljs-attr">originX</span>]=<span class="hljs-string">"\'center\'"</span>\n        [<span class="hljs-attr">originY</span>]=<span class="hljs-string">"\'top\'"</span>\n        [<span class="hljs-attr">overlayX</span>]=<span class="hljs-string">"\'center\'"</span>\n        [<span class="hljs-attr">overlayY</span>]=<span class="hljs-string">"\'bottom\'"</span>&gt;</span>\n            Demo tour third step top position\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span>\n        [<span class="hljs-attr">target</span>]=<span class="hljs-string">"heading4"</span>\n        [<span class="hljs-attr">originX</span>]=<span class="hljs-string">"\'start\'"</span>\n        [<span class="hljs-attr">overlayX</span>]=<span class="hljs-string">"\'end\'"</span>\n        [<span class="hljs-attr">originY</span>]=<span class="hljs-string">"\'center\'"</span>\n        [<span class="hljs-attr">overlayY</span>]=<span class="hljs-string">"\'center\'"</span>&gt;</span>\n            Demo tour fourth step left position\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span>\n        [<span class="hljs-attr">target</span>]=<span class="hljs-string">"heading2"</span>\n        [<span class="hljs-attr">originX</span>]=<span class="hljs-string">"\'end\'"</span>\n        [<span class="hljs-attr">overlayX</span>]=<span class="hljs-string">"\'start\'"</span>\n        [<span class="hljs-attr">originY</span>]=<span class="hljs-string">"\'center\'"</span>\n        [<span class="hljs-attr">overlayY</span>]=<span class="hljs-string">"\'center\'"</span>&gt;</span>\n            Demo tour fifth step right position\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n    \n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n'},ZMf7:function(n,l,t){"use strict";t.d(l,"b",function(){return e}),t.d(l,"a",function(){return o}),t("IXq8");var s=t("zMNK"),a=t("Kj3r"),e=function(){this.classCclTabLabel=!0},o=function(){function n(n,l){var t=this;this.tabNav=n,this.viewContainerRef=l,this.classVclTab=!0,this.attrRole="tab",this.disabled=!1,this.selected=!1,n.currentTabChanged.pipe(Object(a.a)(0)).subscribe(function(){t.selected=n.currentTab===t})}var l=n.prototype;return l.onClick=function(){this.disabled||(this.selected=!0,this.tabNav.selectTab(this))},l.ngAfterViewInit=function(){this.portal=this.contentTemplate?new s.f(this.contentTemplate,this.viewContainerRef):void 0},n}()},b9ux:function(n,l,t){"use strict";t.d(l,"b",function(){return a}),t.d(l,"d",function(){return e}),t.d(l,"a",function(){return o}),t.d(l,"c",function(){return c});var s=t("8Y7J"),a=(t("ZMf7"),t("IXq8"),s.ob({encapsulation:2,styles:[],data:{}}));function e(n){return s.Lb(2,[s.Bb(null,0)],null,null)}var o=s.ob({encapsulation:2,styles:[],data:{}});function u(n){return s.Lb(0,[s.Bb(null,1),(n()(),s.gb(0,null,null,0))],null,null)}function c(n){return s.Lb(2,[s.Hb(671088640,1,{contentTemplate:0}),s.Bb(null,0),(n()(),s.gb(0,[[1,2],["contentTemplate",2]],null,0,null,u))],null,null)}},tKhL:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var s=t("8Y7J"),a=(t("IXq8"),t("6hoW")),e=t("XNiG"),o=function(){function n(n){this.cdRef=n,this._currentTabChangedEmitter=new e.a,this.currentTabChanged=this._currentTabChangedEmitter.asObservable(),this.classVclTabbable=!0,this.selectedTabIndex=0,this.borders=!1,this.selectedTabIndexChange=new s.m}var l=n.prototype;return l.selectTab=function(n){if(this.tabs){var l=this.tabs.toArray().findIndex(function(l){return l===n});this.selectedTabIndex=l,this.currentTab=n,this.selectedTabIndexChange.next(this.selectedTabIndex),this._currentTabChangedEmitter.next(),this.cdRef.markForCheck(),this.cdRef.detectChanges()}},l.selectTabIndex=function(n){if(this.selectedTabIndex=n,this.tabs){var l,t=this.tabs.toArray();"number"==typeof n&&t[n]&&(l=t[n]),this.currentTab=l,this._currentTabChangedEmitter.next(),this.cdRef.markForCheck(),this.cdRef.detectChanges()}},l.ngAfterViewInit=function(){this.selectTabIndex(this.selectedTabIndex)},l.ngOnChanges=function(n){n.selectedTabIndex&&this.selectTabIndex(n.selectedTabIndex.currentValue)},l.ngOnDestroy=function(){this._currentTabChangedEmitter.complete()},_createClass(n,[{key:"classVclTabsLeft",get:function(){return"left"===this.layout}},{key:"classVclTabsRight",get:function(){return"right"===this.layout}},{key:"hasContent",get:function(){return!!this.panel&&Object(a.a)(this.panel)}}]),n}()}}]);