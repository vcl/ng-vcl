(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"5XRZ":function(n,s,l){"use strict";l.r(s);var a=l("CcnG"),t=function(){function n(){this.clicks=0}return n.prototype.offClick=function(){this.clicks++},n}(),p={demo:function(){return{label:"Off Click",tabs:{Demo:t,"README.md":{type:"md",content:l("iyUH")},"demo.component.html":{type:"pre",content:l("Su78")},"demo.component.ts":{type:"pre",content:l("vyX7")}}}}},c=function(){return function(){}}(),e=l("pMnS"),o=l("8Ip6"),i=l("5cNt"),u=l("Ip0R"),r=a.ob({encapsulation:2,styles:[],data:{}});function h(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),a.Hb(1,null,["offClicks triggered: ",""]))],null,function(n,s){n(s,1,0,s.component.clicks)})}function f(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),a.Hb(-1,null,["Click anywhere to trigger an offClick"]))],null,null)}function g(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,8,"div",[["style","border: 2px solid;background-color:red;width:300px;height:300px"]],null,[[null,"offClick"]],function(n,s,l){var a=!0;return"offClick"===s&&(a=!1!==n.component.offClick()&&a),a},null,null)),a.pb(1,4341760,null,0,i.jd,[a.k],null,{offClick:"offClick"}),(n()(),a.Hb(-1,null,[" DIV 1 "])),(n()(),a.qb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Hb(-1,null,[" Click somewhere outside to trigger an offClick "])),(n()(),a.qb(5,0,null,null,3,"div",[["style","border: 1px solid;background-color:green;width:50%;margin:auto; height:100px"]],null,null,null,null,null)),(n()(),a.Hb(-1,null,[" DIV 2 "])),(n()(),a.qb(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Hb(-1,null,[" This is a subelement of DIV 1 "])),(n()(),a.qb(9,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.hb(16777216,null,null,1,null,h)),a.pb(11,16384,null,0,u.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(n()(),a.hb(16777216,null,null,1,null,f)),a.pb(13,16384,null,0,u.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null)],function(n,s){var l=s.component;n(s,11,0,l.clicks>0),n(s,13,0,0===l.clicks)},null)}function d(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"ng-component",[],null,null,null,g,r)),a.pb(1,49152,null,0,t,[],null,null)],null,null)}var b=a.mb("ng-component",t,d,{},{},[]),j=l("2FIb"),m=l("ZYCi"),k=l("PNUx");l.d(s,"OffClickDemoModuleNgFactory",function(){return y});var y=a.nb(c,[],function(n){return a.xb([a.yb(512,a.j,a.cb,[[8,[e.a,o.a,b]],[3,a.j],a.y]),a.yb(4608,u.n,u.m,[a.v,[2,u.y]]),a.yb(1073742336,u.c,u.c,[]),a.yb(1073742336,i.gc,i.gc,[]),a.yb(1073742336,i.Zb,i.Zb,[]),a.yb(1073742336,j.a,j.a,[]),a.yb(1073742336,i.Rb,i.Rb,[]),a.yb(1073742336,m.m,m.m,[[2,m.s],[2,m.l]]),a.yb(1073742336,c,c,[]),a.yb(1024,m.j,function(){return[[{path:"",component:k.a,data:p}]]},[])])})},Su78:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> (<span class="hljs-attr">offClick</span>)=<span class="hljs-string">"offClick()"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"border: 2px solid;background-color:red;width:300px;height:300px"</span>&gt;</span>\n  DIV 1\n  <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  Click somewhere outside to trigger an offClick\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"border: 1px solid;background-color:green;width:50%;margin:auto; height:100px"</span>&gt;</span>\n    DIV 2 \n    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    This is a subelement of DIV 1 \n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"clicks &gt; 0"</span>&gt;</span>offClicks triggered: {{clicks}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"clicks === 0"</span>&gt;</span>Click anywhere to trigger an offClick<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  \n'},iyUH:function(n,s){n.exports='<h1 id="offclick-directive">offClick directive</h1>\n<p>The offClick event fires when a click event is handled and its source is not(!) the element or any of its subelements.  </p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLOffClickModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLOffClickModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<p>offClick() is called when the click`s source is not DIV1 or DIV2  </p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> (<span class="hljs-attr">offClick</span>)=<span class="hljs-string">&quot;offClick()&quot;</span>&gt;</span>\n  DIV1\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    DIV2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre>\n'},vyX7:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> OffClickDemoComponent  {\n\n  clicks = <span class="hljs-number">0</span>;\n\n  offClick() {\n    <span class="hljs-keyword">this</span>.clicks++;\n  }\n}\n'}}]);