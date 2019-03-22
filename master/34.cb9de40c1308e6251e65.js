(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"3LFa":function(n,s){n.exports='<h1 id="vcl-password-input">vcl-password-input</h1>\n<p>A container for the vcl-input which offers a button to toggle visibility of the input value.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-password-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">vcl-password-input</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Enter password&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-password-input</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>visibleIcon</code></td>\n<td>string</td>\n<td><code>fa:eye-slash</code></td>\n<td>The icon on the button in visible state</td>\n</tr>\n<tr>\n<td><code>invisibleIcon</code></td>\n<td>string</td>\n<td><code>fa:eye</code></td>\n<td>The icon on the button in invisible state</td>\n</tr>\n<tr>\n<td><code>visible</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Input is visible by default when true</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the Password Input when true</td>\n</tr>\n</tbody></table>\n'},"8nD9":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> PasswordInputDemoComponent {\n  password = <span class="hljs-string">\'\'</span>;\n}\n'},"S+dB":function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Password input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-password-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">vcl-password-input</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"password"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter password"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-password-input</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>Password input value:<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span> {{password}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Password input (disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-password-input</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">vcl-password-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter password"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-password-input</span>&gt;</span> \n'},i0np:function(n,s,l){"use strict";l.r(s);var a=l("CcnG"),t=function(){return function(){this.password=""}}(),p={demo:function(){return{label:"Password Input",tabs:{Demo:t,"README.md":{type:"md",content:l("3LFa")},"demo.component.html":{type:"pre",content:l("S+dB")},"demo.component.ts":{type:"pre",content:l("8nD9")}}}}},u=function(){return function(){}}(),e=l("pMnS"),o=l("8Ip6"),c=l("G6uX"),d=l("5cNt"),i=l("gIcY"),r=a.ob({encapsulation:2,styles:[],data:{}});function b(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Hb(-1,null,["Password input"])),(n()(),a.qb(2,0,null,null,10,"vcl-password-input",[],[[2,"vclInputGroup",null],[1,"tabindex",0]],null,null,c.zb,c.u)),a.pb(3,49152,null,1,d.Y,[],null,null),a.Fb(335544320,1,{input:0}),(n()(),a.qb(5,0,null,0,7,"input",[["placeholder","Enter password"],["vcl-input",""],["vcl-password-input",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclDisabled",null],[1,"disabled",0],[1,"type",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,s,l){var t=!0,p=n.component;return"input"===s&&(t=!1!==a.Ab(n,6)._handleInput(l.target.value)&&t),"blur"===s&&(t=!1!==a.Ab(n,6).onTouched()&&t),"compositionstart"===s&&(t=!1!==a.Ab(n,6)._compositionStart()&&t),"compositionend"===s&&(t=!1!==a.Ab(n,6)._compositionEnd(l.target.value)&&t),"ngModelChange"===s&&(t=!1!==(p.password=l)&&t),t},null,null)),a.pb(6,16384,null,0,i.c,[a.E,a.k,[2,i.a]],null,null),a.Eb(1024,null,i.l,function(n){return[n]},[i.c]),a.pb(8,671744,null,0,i.q,[[8,null],[8,null],[8,null],[6,i.l]],{model:[0,"model"]},{update:"ngModelChange"}),a.Eb(2048,null,i.m,null,[i.q]),a.pb(10,16384,null,0,i.n,[[4,i.m]],null,null),a.pb(11,16384,[[1,4]],0,d.E,[],null,null),a.pb(12,16384,null,0,d.Z,[[4,d.E],[1,d.Y]],null,null),(n()(),a.qb(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.qb(14,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),a.Hb(-1,null,["Password input value:"])),(n()(),a.Hb(16,null,[" "," "])),(n()(),a.qb(17,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Hb(-1,null,["Password input (disabled)"])),(n()(),a.qb(19,0,null,null,5,"vcl-password-input",[],[[2,"vclInputGroup",null],[1,"tabindex",0]],null,null,c.zb,c.u)),a.pb(20,49152,null,1,d.Y,[],{disabled:[0,"disabled"]},null),a.Fb(335544320,2,{input:0}),(n()(),a.qb(22,0,null,0,2,"input",[["placeholder","Enter password"],["vcl-input",""],["vcl-password-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclDisabled",null],[1,"disabled",0],[1,"type",0]],null,null,null,null)),a.pb(23,16384,[[2,4]],0,d.E,[],null,null),a.pb(24,16384,null,0,d.Z,[[4,d.E],[1,d.Y]],null,null)],function(n,s){n(s,8,0,s.component.password),n(s,20,0,!0)},function(n,s){var l=s.component;n(s,2,0,!0,-1),n(s,5,1,[a.Ab(s,10).ngClassUntouched,a.Ab(s,10).ngClassTouched,a.Ab(s,10).ngClassPristine,a.Ab(s,10).ngClassDirty,a.Ab(s,10).ngClassValid,a.Ab(s,10).ngClassInvalid,a.Ab(s,10).ngClassPending,!0,a.Ab(s,11).isDisabled,a.Ab(s,11).attrDisabled,a.Ab(s,12).isDisabled,a.Ab(s,12).isDisabled,a.Ab(s,12).type]),n(s,16,0,l.password),n(s,19,0,!0,-1),n(s,22,0,!0,a.Ab(s,23).isDisabled,a.Ab(s,23).attrDisabled,a.Ab(s,24).isDisabled,a.Ab(s,24).isDisabled,a.Ab(s,24).type)})}function h(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"ng-component",[],null,null,null,b,r)),a.pb(1,49152,null,0,t,[],null,null)],null,null)}var g=a.mb("ng-component",t,h,{},{},[]),j=l("Ip0R"),m=l("2FIb"),w=l("ZYCi"),v=l("PNUx");l.d(s,"PasswordInputDemoModuleNgFactory",function(){return y});var y=a.nb(u,[],function(n){return a.xb([a.yb(512,a.j,a.cb,[[8,[e.a,o.a,g]],[3,a.j],a.y]),a.yb(4608,j.n,j.m,[a.v,[2,j.y]]),a.yb(4608,i.w,i.w,[]),a.yb(5120,d.ic,function(){return[new d.w,new d.O]},[]),a.yb(1073742336,j.c,j.c,[]),a.yb(1073742336,i.t,i.t,[]),a.yb(1073742336,i.k,i.k,[]),a.yb(1073742336,d.gc,d.gc,[]),a.yb(1073742336,d.Zb,d.Zb,[]),a.yb(1073742336,m.a,m.a,[]),a.yb(1073742336,d.Gb,d.Gb,[]),a.yb(1073742336,d.Eb,d.Eb,[]),a.yb(1073742336,d.Jb,d.Jb,[]),a.yb(1073742336,d.Db,d.Db,[]),a.yb(1073742336,d.ub,d.ub,[]),a.yb(1073742336,d.Sb,d.Sb,[]),a.yb(1073742336,w.m,w.m,[[2,w.s],[2,w.l]]),a.yb(1073742336,u,u,[]),a.yb(1024,w.j,function(){return[[{path:"",component:v.a,data:p}]]},[])])})}}]);