(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"9MUX":function(l,s,n){"use strict";n.d(s,"a",function(){return t}),n("U3RR");class t{constructor(l){this.tooltip=l}}},BlZ6:function(l,s){l.exports='<h1 id="vcl-tooltip">vcl-tooltip</h1>\n<p>The tooltip directive provides a message or rich content that is displayed when the user hovers an element.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">&quot;Tooltip message&quot;</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre>\n<p>Default tooltip placement is at the <code>top</code> of target element. To change tooltip placement set <code>vclTooltipPosition</code> value to either <code>right</code>, <code>left</code> or <code>bottom</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">&quot;Tooltip message&quot;</span> <span class="hljs-attr">vclTooltipPosition</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre>\n<p>You can also use rich content.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">vclTooltip</span>]=<span class="hljs-string">&quot;tt&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tooltip</span> #<span class="hljs-attr">tt</span>=<span class="hljs-string">&quot;vclTooltip&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>My content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tooltip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcltooltip-attributes">[vclTooltip] Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vclTooltip</code></td>\n<td>string</td>\n<td></td>\n<td>Content displayed within the tooltip</td>\n</tr>\n<tr>\n<td><code>vclTooltipPosition</code></td>\n<td>string</td>\n<td>top</td>\n<td>Placement of the tooltip</td>\n</tr>\n<tr>\n<td><code>vclTooltipArrowPointer</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Whether to show the tooltip&apos;s arrow pointer</td>\n</tr>\n<tr>\n<td><code>vclTooltipShowDelay</code></td>\n<td>number</td>\n<td>0</td>\n<td>Delay before showing the tooltip after hovering the element</td>\n</tr>\n<tr>\n<td><code>vclTooltipHideDelay</code></td>\n<td>number</td>\n<td>0</td>\n<td>Delay before hiding the tooltip after the element loses hover</td>\n</tr>\n</tbody></table>\n'},Ge1g:function(l,s,n){"use strict";n.d(s,"a",function(){return t});class t{}},ITDi:function(l,s){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display: flex; height:100px"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip on the top"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#E6E6E6;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip on the top<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip on the right"</span> <span class="hljs-attr">vclTooltipPosition</span>=<span class="hljs-string">"right"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#D8D8D8;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip on the right<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip on the left"</span> <span class="hljs-attr">vclTooltipPosition</span>=<span class="hljs-string">"left"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#BDBDBD;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip on the left<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip on the bottom"</span> <span class="hljs-attr">vclTooltipPosition</span>=<span class="hljs-string">"bottom"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#A4A4A4;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip on the bottom<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display: flex; height:100px; padding-top: 2em"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip with no pointer arrow"</span> [<span class="hljs-attr">vclTooltipArrowPointer</span>]=<span class="hljs-string">"false"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#E6E6E6;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip with no pointer arrow<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip with delay before showing"</span> [<span class="hljs-attr">vclTooltipShowDelay</span>]=<span class="hljs-string">"500"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#D8D8D8;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip with delay before showing<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip with delay before hiding"</span> [<span class="hljs-attr">vclTooltipHideDelay</span>]=<span class="hljs-string">"500"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#BDBDBD;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip with delay before hiding<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">vclTooltip</span>]=<span class="hljs-string">"tt"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#A4A4A4;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip with rich content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tooltip</span> #<span class="hljs-attr">tt</span>=<span class="hljs-string">"vclTooltip"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutHorizontal vclLayoutCenter"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://lorempixel.com/50/50/cats/"</span> /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGutterMarginLR"</span>&gt;</span>Tooltip with rich content <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},JAK9:function(l,s,n){"use strict";n.r(s);var t=n("8Y7J");class a{}const o={demo:function(){return{label:"Tooltip",tabs:{Demo:a,"README.md":{type:"md",content:n("BlZ6")},"demo.component.html":{type:"pre",content:n("ITDi")},"demo.component.ts":{type:"pre",content:n("bEnq")}}}}};class e{}var p=n("SVse"),i=n("9MUX"),r=n("U3RR"),u=t.pb({encapsulation:2,styles:[],data:{}});function c(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,0,"div",[["class","vclArrowPointer"]],null,null,null,null,null))],null,null)}function h(l){return t.Mb(2,[(l()(),t.rb(0,0,null,null,4,"div",[["class","vclTooltip"],["role","tooltip"]],[[2,"vclArrowPointerRight",null],[2,"vclArrowPointerLeft",null],[2,"vclArrowPointerTop",null],[2,"vclArrowPointerBottom",null]],null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"div",[["class","vclTooltipContent"]],null,null,null,null,null)),(l()(),t.Kb(2,null,[" "," "])),(l()(),t.gb(16777216,null,null,1,null,c)),t.qb(4,16384,null,0,p.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(l,s){l(s,4,0,s.component.tooltip.arrowPointer)},function(l,s){var n=s.component;l(s,0,0,"left"===n.tooltip.position,"right"===n.tooltip.position,"bottom"===n.tooltip.position,"top"===n.tooltip.position),l(s,2,0,n.tooltip.content)})}function g(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"vcl-tooltip-inline",[],null,null,null,h,u)),t.qb(1,49152,null,0,i.a,[[2,r.a]],null,null)],null,null)}var d=t.nb("vcl-tooltip-inline",i.a,g,{},{},[]),b=n("pMnS"),j=n("8Ip6"),v=n("Oou1"),m=n("QQfA"),f=n("Ge1g"),T=t.pb({encapsulation:2,styles:[],data:{}});function y(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,0,"div",[["class","vclArrowPointer"]],null,null,null,null,null))],null,null)}function w(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,4,"div",[["class","vclTooltip"],["role","tooltip"]],[[2,"vclArrowPointerRight",null],[2,"vclArrowPointerLeft",null],[2,"vclArrowPointerTop",null],[2,"vclArrowPointerBottom",null]],null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"div",[["class","vclTooltipContent"]],null,null,null,null,null)),t.Cb(null,0),(l()(),t.gb(16777216,[[1,2]],null,1,null,y)),t.qb(4,16384,null,0,p.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(l,s){l(s,4,0,s.context.tooltip.arrowPointer)},function(l,s){l(s,0,0,"left"===s.context.tooltip.position,"right"===s.context.tooltip.position,"bottom"===s.context.tooltip.position,"top"===s.context.tooltip.position)})}function D(l){return t.Mb(2,[t.Ib(671088640,1,{templateRef:0}),(l()(),t.gb(0,[[1,2]],null,0,null,w))],null,null)}var x=t.pb({encapsulation:0,styles:["p[_ngcontent-%COMP%]{ text-align:center;padding-top:30px}"],data:{}});function M(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,16,"div",[["style","display: flex; height:100px"]],null,null,null,null,null)),(l()(),t.rb(1,16777216,null,null,3,"div",[["style","background-color:#E6E6E6;flex:1"],["vclTooltip","Tooltip on the top"]],null,[[null,"mouseenter"],[null,"mouseleave"]],function(l,s,n){var a=!0;return"mouseenter"===s&&(a=!1!==t.Db(l,2).onMouseEnter()&&a),"mouseleave"===s&&(a=!1!==t.Db(l,2).onMouseLeave()&&a),a},null,null)),t.qb(2,16384,null,0,v.a,[t.q,t.N,t.k,m.a],{tooltip:[0,"tooltip"]},null),(l()(),t.rb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Tooltip on the top"])),(l()(),t.rb(5,16777216,null,null,3,"div",[["style","background-color:#D8D8D8;flex:1"],["vclTooltip","Tooltip on the right"],["vclTooltipPosition","right"]],null,[[null,"mouseenter"],[null,"mouseleave"]],function(l,s,n){var a=!0;return"mouseenter"===s&&(a=!1!==t.Db(l,6).onMouseEnter()&&a),"mouseleave"===s&&(a=!1!==t.Db(l,6).onMouseLeave()&&a),a},null,null)),t.qb(6,16384,null,0,v.a,[t.q,t.N,t.k,m.a],{tooltip:[0,"tooltip"],position:[1,"position"]},null),(l()(),t.rb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Tooltip on the right"])),(l()(),t.rb(9,16777216,null,null,3,"div",[["style","background-color:#BDBDBD;flex:1"],["vclTooltip","Tooltip on the left"],["vclTooltipPosition","left"]],null,[[null,"mouseenter"],[null,"mouseleave"]],function(l,s,n){var a=!0;return"mouseenter"===s&&(a=!1!==t.Db(l,10).onMouseEnter()&&a),"mouseleave"===s&&(a=!1!==t.Db(l,10).onMouseLeave()&&a),a},null,null)),t.qb(10,16384,null,0,v.a,[t.q,t.N,t.k,m.a],{tooltip:[0,"tooltip"],position:[1,"position"]},null),(l()(),t.rb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Tooltip on the left"])),(l()(),t.rb(13,16777216,null,null,3,"div",[["style","background-color:#A4A4A4;flex:1"],["vclTooltip","Tooltip on the bottom"],["vclTooltipPosition","bottom"]],null,[[null,"mouseenter"],[null,"mouseleave"]],function(l,s,n){var a=!0;return"mouseenter"===s&&(a=!1!==t.Db(l,14).onMouseEnter()&&a),"mouseleave"===s&&(a=!1!==t.Db(l,14).onMouseLeave()&&a),a},null,null)),t.qb(14,16384,null,0,v.a,[t.q,t.N,t.k,m.a],{tooltip:[0,"tooltip"],position:[1,"position"]},null),(l()(),t.rb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Tooltip on the bottom"])),(l()(),t.rb(17,0,null,null,22,"div",[["style","display: flex; height:100px; padding-top: 2em"]],null,null,null,null,null)),(l()(),t.rb(18,16777216,null,null,3,"div",[["style","background-color:#E6E6E6;flex:1"],["vclTooltip","Tooltip with no pointer arrow"]],null,[[null,"mouseenter"],[null,"mouseleave"]],function(l,s,n){var a=!0;return"mouseenter"===s&&(a=!1!==t.Db(l,19).onMouseEnter()&&a),"mouseleave"===s&&(a=!1!==t.Db(l,19).onMouseLeave()&&a),a},null,null)),t.qb(19,16384,null,0,v.a,[t.q,t.N,t.k,m.a],{tooltip:[0,"tooltip"],arrowPointer:[1,"arrowPointer"]},null),(l()(),t.rb(20,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Tooltip with no pointer arrow"])),(l()(),t.rb(22,16777216,null,null,3,"div",[["style","background-color:#D8D8D8;flex:1"],["vclTooltip","Tooltip with delay before showing"]],null,[[null,"mouseenter"],[null,"mouseleave"]],function(l,s,n){var a=!0;return"mouseenter"===s&&(a=!1!==t.Db(l,23).onMouseEnter()&&a),"mouseleave"===s&&(a=!1!==t.Db(l,23).onMouseLeave()&&a),a},null,null)),t.qb(23,16384,null,0,v.a,[t.q,t.N,t.k,m.a],{tooltip:[0,"tooltip"],showDelay:[1,"showDelay"]},null),(l()(),t.rb(24,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Tooltip with delay before showing"])),(l()(),t.rb(26,16777216,null,null,3,"div",[["style","background-color:#BDBDBD;flex:1"],["vclTooltip","Tooltip with delay before hiding"]],null,[[null,"mouseenter"],[null,"mouseleave"]],function(l,s,n){var a=!0;return"mouseenter"===s&&(a=!1!==t.Db(l,27).onMouseEnter()&&a),"mouseleave"===s&&(a=!1!==t.Db(l,27).onMouseLeave()&&a),a},null,null)),t.qb(27,16384,null,0,v.a,[t.q,t.N,t.k,m.a],{tooltip:[0,"tooltip"],hideDelay:[1,"hideDelay"]},null),(l()(),t.rb(28,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Tooltip with delay before hiding"])),(l()(),t.rb(30,16777216,null,null,9,"div",[["style","background-color:#A4A4A4;flex:1"]],null,[[null,"mouseenter"],[null,"mouseleave"]],function(l,s,n){var a=!0;return"mouseenter"===s&&(a=!1!==t.Db(l,31).onMouseEnter()&&a),"mouseleave"===s&&(a=!1!==t.Db(l,31).onMouseLeave()&&a),a},null,null)),t.qb(31,16384,null,0,v.a,[t.q,t.N,t.k,m.a],{tooltip:[0,"tooltip"]},null),(l()(),t.rb(32,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Tooltip with rich content"])),(l()(),t.rb(34,0,null,null,5,"vcl-tooltip",[],null,null,null,D,T)),t.qb(35,49152,[["tt",4]],0,f.a,[],null,null),(l()(),t.rb(36,0,null,0,3,"div",[["class","vclLayoutHorizontal vclLayoutCenter"]],null,null,null,null,null)),(l()(),t.rb(37,0,null,null,0,"img",[["src","http://lorempixel.com/50/50/cats/"]],null,null,null,null,null)),(l()(),t.rb(38,0,null,null,1,"span",[["class","vclGutterMarginLR"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Tooltip with rich content "]))],function(l,s){l(s,2,0,"Tooltip on the top"),l(s,6,0,"Tooltip on the right","right"),l(s,10,0,"Tooltip on the left","left"),l(s,14,0,"Tooltip on the bottom","bottom"),l(s,19,0,"Tooltip with no pointer arrow",!1),l(s,23,0,"Tooltip with delay before showing",500),l(s,27,0,"Tooltip with delay before hiding",500),l(s,31,0,t.Db(s,35))},null)}function q(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"ng-component",[],null,null,null,M,x)),t.qb(1,49152,null,0,a,[],null,null)],null,null)}var P=t.nb("ng-component",a,q,{},{},[]),B=n("POq0"),E=n("IP0z"),A=n("zMNK"),k=n("p/eS"),R=n("2FIb"),N=n("/HVE"),C=n("hOhj"),L=n("eo7r"),O=n("iInd"),S=n("PNUx");n.d(s,"ToolTipDemoModuleNgFactory",function(){return X});var X=t.ob(e,[],function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[d,b.a,j.a,P]],[3,t.j],t.w]),t.Bb(4608,p.n,p.m,[t.t,[2,p.A]]),t.Bb(4608,B.a,B.a,[]),t.Bb(4608,m.a,m.a,[m.h,m.c,t.j,m.f,m.d,t.q,t.y,p.d,E.b,[2,p.h]]),t.Bb(5120,m.i,m.j,[m.a]),t.Bb(1073742336,p.c,p.c,[]),t.Bb(1073742336,A.e,A.e,[]),t.Bb(1073742336,B.b,B.b,[]),t.Bb(1073742336,k.a,k.a,[]),t.Bb(1073742336,R.a,R.a,[]),t.Bb(1073742336,E.a,E.a,[]),t.Bb(1073742336,N.b,N.b,[]),t.Bb(1073742336,C.c,C.c,[]),t.Bb(1073742336,m.e,m.e,[]),t.Bb(1073742336,L.a,L.a,[]),t.Bb(1073742336,O.q,O.q,[[2,O.v],[2,O.m]]),t.Bb(1073742336,e,e,[]),t.Bb(1024,O.i,function(){return[[{path:"",component:S.a,data:o}]]},[])])})},Oou1:function(l,s,n){"use strict";var t=n("8Y7J"),a=n("zMNK"),o=n("XNiG"),e=n("l5mm"),p=n("EY2u"),i=n("l7GE"),r=n("ZUHj");class u{constructor(l){this.durationSelector=l}call(l,s){return s.subscribe(new c(l,this.durationSelector))}}class c extends i.a{constructor(l,s){super(l),this.durationSelector=s,this.hasValue=!1,this.durationSubscription=null}_next(l){try{const n=this.durationSelector.call(this,l);n&&this._tryNext(l,n)}catch(s){this.destination.error(s)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(l,s){let n=this.durationSubscription;this.value=l,this.hasValue=!0,n&&(n.unsubscribe(),this.remove(n)),(n=Object(r.a)(this,s))&&!n.closed&&this.add(this.durationSubscription=n)}notifyNext(l,s,n,t,a){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const l=this.value,s=this.durationSubscription;s&&(this.durationSubscription=null,s.unsubscribe(),this.remove(s)),this.value=null,this.hasValue=!1,super._next(l)}}}var h=n("IzEk"),g=n("7qb7"),d=n("Ge1g"),b=n("9MUX"),j=n("U3RR");n.d(s,"a",function(){return m});const v=(l,s)=>{if("right"===l)return{originX:"end",originY:"center",overlayX:"start",overlayY:"center",offsetX:s};if("left"===l)return{originX:"start",originY:"center",overlayX:"end",overlayY:"center",offsetX:-s};if("top"===l)return{originX:"center",originY:"top",overlayX:"center",overlayY:"bottom",offsetY:-s};if("bottom"===l)return{originX:"center",originY:"bottom",overlayX:"center",overlayY:"top",offsetY:s};throw new Error("Invalid tooltip position")};class m extends g.c{constructor(l,s,n,t){var a;super(l),this.viewContainerRef=s,this.elementRef=n,this.overlay=t,this.mouseOverEmitter=new o.a,this.tooltipTrigger=this.mouseOverEmitter.asObservable().pipe((a=l=>l?this.showDelay?Object(e.a)(this.showDelay).pipe(Object(h.a)(1)):p.a:this.hideDelay?Object(e.a)(this.hideDelay).pipe(Object(h.a)(1)):p.a,l=>l.lift(new u(a)))).subscribe(l=>{l&&!this.isAttached?this.open():!l&&this.isAttached&&this.close()}),this.position="top",this.arrowPointer=!0,this.showDelay=0,this.hideDelay=0,this.offset=10}onMouseEnter(){this.mouseOverEmitter.next(!0)}onMouseLeave(){this.mouseOverEmitter.next(!1)}getLayerConfig(){return new g.b({hasBackdrop:!1,scrollStrategy:this.overlay.scrollStrategies.reposition({autoClose:!0}),positionStrategy:this.overlay.position().flexibleConnectedTo(this.elementRef).withPositions([v(this.position,this.offset),v("right",this.offset),v("left",this.offset),v("top",this.offset),v("bottom",this.offset)])})}createPortal(){if("string"==typeof this.tooltip){const l=t.q.create([{provide:j.a,useValue:{content:this.tooltip,position:this.position,arrowPointer:this.arrowPointer}}],this.injector);return new a.b(b.a,this.viewContainerRef,l)}if(this.tooltip instanceof d.a)return new a.f(this.tooltip.templateRef,this.viewContainerRef,{tooltip:{position:this.position,arrowPointer:this.arrowPointer}});throw new Error("Invalid tooltip property")}}},U3RR:function(l,s,n){"use strict";n.d(s,"a",function(){return t});const t=new(n("8Y7J").p)("vcl_tooltip")},bEnq:function(l,s){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n    templateUrl: <span class="hljs-string">\'./demo.component.html\'</span>,\n    styles: [<span class="hljs-string">`p{ text-align:center;padding-top:30px}`</span>]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ToolTipDemoComponent  {\n\n}\n'},eo7r:function(l,s,n){"use strict";n.d(s,"a",function(){return t}),n("Ge1g"),n("Oou1"),n("9MUX");class t{}},l5mm:function(l,s,n){"use strict";n.d(s,"a",function(){return e});var t=n("HDdC"),a=n("D0XW"),o=n("Y7HM");function e(l=0,s=a.a){return(!Object(o.a)(l)||l<0)&&(l=0),s&&"function"==typeof s.schedule||(s=a.a),new t.a(n=>(n.add(s.schedule(p,l,{subscriber:n,counter:0,period:l})),n))}function p(l){const{subscriber:s,counter:n,period:t}=l;s.next(n),this.schedule({subscriber:s,counter:n+1,period:t},t)}}}]);