(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1JED":function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">true</span>&gt;</span>Disabled button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Label button with appended icon"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:bolt"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Label button with prepended icon"</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fa:bolt"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Emphasized label button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclEmphasized"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fa:bolt"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Square Button"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">selectable</span> (<span class="hljs-attr">select</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>Selectable button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">select</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>Selectable button (preselected)<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n'},S5Wt:function(l,n,t){"use strict";t.r(n);var s=t("CcnG"),a=function(){function l(){}return l.prototype.someAction=function(l){console.log("Action handler, param:",l)},l}(),e={demo:function(){return{label:"Button",tabs:{Demo:a,"README.md":{type:"md",content:t("e/HG")},"demo.component.html":{type:"pre",content:t("1JED")},"demo.component.ts":{type:"pre",content:t("tWdA")}}}}},u=function(){return function(){}}(),o=t("pMnS"),c=t("8Ip6"),b=t("5cNt"),p=t("G6uX"),r=s.ob({encapsulation:2,styles:[],data:{}});function i(l){return s.Jb(0,[(l()(),s.qb(0,0,null,null,2,"button",[["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(l,n,t){var a=!0,e=l.component;return"mouseenter"===n&&(a=!1!==s.Ab(l,1).onMouseEnter(t)&&a),"mouseleave"===n&&(a=!1!==s.Ab(l,1).onMouseLeave(t)&&a),"click"===n&&(a=!1!==e.someAction(t)&&a),a},null,null)),s.pb(1,16384,null,0,b.l,[s.k],null,null),(l()(),s.Hb(-1,null,["Button"])),(l()(),s.qb(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(5,0,null,null,2,"button",[["disabled","true"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(l,n,t){var a=!0,e=l.component;return"mouseenter"===n&&(a=!1!==s.Ab(l,6).onMouseEnter(t)&&a),"mouseleave"===n&&(a=!1!==s.Ab(l,6).onMouseLeave(t)&&a),"click"===n&&(a=!1!==e.someAction(t)&&a),a},null,null)),s.pb(6,16384,null,0,b.l,[s.k],{disabled:[0,"disabled"]},null),(l()(),s.Hb(-1,null,["Disabled button"])),(l()(),s.qb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(10,0,null,null,2,"button",[["appIcon","fa:bolt"],["label","Label button with appended icon"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(l,n,t){var a=!0,e=l.component;return"mouseenter"===n&&(a=!1!==s.Ab(l,11).onMouseEnter(t)&&a),"mouseleave"===n&&(a=!1!==s.Ab(l,11).onMouseLeave(t)&&a),"click"===n&&(a=!1!==e.someAction(t)&&a),a},p.nb,p.i)),s.pb(11,16384,null,0,b.l,[s.k],null,null),s.pb(12,49152,null,0,b.o,[],{label:[0,"label"],appIcon:[1,"appIcon"]},null),(l()(),s.qb(13,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(15,0,null,null,2,"button",[["label","Label button with prepended icon"],["prepIcon","fa:bolt"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(l,n,t){var a=!0,e=l.component;return"mouseenter"===n&&(a=!1!==s.Ab(l,16).onMouseEnter(t)&&a),"mouseleave"===n&&(a=!1!==s.Ab(l,16).onMouseLeave(t)&&a),"click"===n&&(a=!1!==e.someAction(t)&&a),a},p.nb,p.i)),s.pb(16,16384,null,0,b.l,[s.k],null,null),s.pb(17,49152,null,0,b.o,[],{label:[0,"label"],prepIcon:[1,"prepIcon"]},null),(l()(),s.qb(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(20,0,null,null,2,"button",[["class","vclEmphasized"],["label","Emphasized label button"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(l,n,t){var a=!0,e=l.component;return"mouseenter"===n&&(a=!1!==s.Ab(l,21).onMouseEnter(t)&&a),"mouseleave"===n&&(a=!1!==s.Ab(l,21).onMouseLeave(t)&&a),"click"===n&&(a=!1!==e.someAction(t)&&a),a},p.nb,p.i)),s.pb(21,16384,null,0,b.l,[s.k],null,null),s.pb(22,49152,null,0,b.o,[],{label:[0,"label"]},null),(l()(),s.qb(23,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(25,0,null,null,2,"button",[["icon","fa:bolt"],["title","Square Button"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[2,"vclSquare",null],[1,"aria-label",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(l,n,t){var a=!0,e=l.component;return"mouseenter"===n&&(a=!1!==s.Ab(l,26).onMouseEnter(t)&&a),"mouseleave"===n&&(a=!1!==s.Ab(l,26).onMouseLeave(t)&&a),"click"===n&&(a=!1!==e.someAction(t)&&a),a},p.mb,p.h)),s.pb(26,16384,null,0,b.l,[s.k],null,null),s.pb(27,49152,null,0,b.n,[],{title:[0,"title"],icon:[1,"icon"]},null),(l()(),s.qb(28,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(29,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(30,0,null,null,3,"button",[["selectable",""],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[2,"vclSelected",null]],[[null,"select"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(l,n,t){var a=!0,e=l.component;return"mouseenter"===n&&(a=!1!==s.Ab(l,31).onMouseEnter(t)&&a),"mouseleave"===n&&(a=!1!==s.Ab(l,31).onMouseLeave(t)&&a),"click"===n&&(a=!1!==s.Ab(l,32).onClick()&&a),"select"===n&&(a=!1!==e.someAction(t)&&a),a},null,null)),s.pb(31,16384,null,0,b.l,[s.k],null,null),s.pb(32,16384,null,0,b.p,[],{selectable:[0,"selectable"]},{select:"select"}),(l()(),s.Hb(-1,null,["Selectable button"])),(l()(),s.qb(34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.qb(36,0,null,null,3,"button",[["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[2,"vclSelected",null]],[[null,"select"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(l,n,t){var a=!0,e=l.component;return"mouseenter"===n&&(a=!1!==s.Ab(l,37).onMouseEnter(t)&&a),"mouseleave"===n&&(a=!1!==s.Ab(l,37).onMouseLeave(t)&&a),"click"===n&&(a=!1!==s.Ab(l,38).onClick()&&a),"select"===n&&(a=!1!==e.someAction(t)&&a),a},null,null)),s.pb(37,16384,null,0,b.l,[s.k],null,null),s.pb(38,16384,null,0,b.p,[],{selectable:[0,"selectable"]},{select:"select"}),(l()(),s.Hb(-1,null,["Selectable button (preselected)"]))],function(l,n){l(n,6,0,"true"),l(n,12,0,"Label button with appended icon","fa:bolt"),l(n,17,0,"Label button with prepended icon","fa:bolt"),l(n,22,0,"Emphasized label button"),l(n,27,0,"Square Button","fa:bolt"),l(n,32,0,""),l(n,38,0,!0)},function(l,n){l(n,0,0,!0,s.Ab(n,1).isDisabled,s.Ab(n,1).isDisabled,s.Ab(n,1).hovered),l(n,5,0,!0,s.Ab(n,6).isDisabled,s.Ab(n,6).isDisabled,s.Ab(n,6).hovered),l(n,10,0,!0,s.Ab(n,11).isDisabled,s.Ab(n,11).isDisabled,s.Ab(n,11).hovered,s.Ab(n,12).ariaLabel),l(n,15,0,!0,s.Ab(n,16).isDisabled,s.Ab(n,16).isDisabled,s.Ab(n,16).hovered,s.Ab(n,17).ariaLabel),l(n,20,0,!0,s.Ab(n,21).isDisabled,s.Ab(n,21).isDisabled,s.Ab(n,21).hovered,s.Ab(n,22).ariaLabel),l(n,25,0,!0,s.Ab(n,26).isDisabled,s.Ab(n,26).isDisabled,s.Ab(n,26).hovered,!0,s.Ab(n,27).title),l(n,30,0,!0,s.Ab(n,31).isDisabled,s.Ab(n,31).isDisabled,s.Ab(n,31).hovered,s.Ab(n,32).selected),l(n,36,0,!0,s.Ab(n,37).isDisabled,s.Ab(n,37).isDisabled,s.Ab(n,37).hovered,s.Ab(n,38).selected)})}function d(l){return s.Jb(0,[(l()(),s.qb(0,0,null,null,1,"ng-component",[],null,null,null,i,r)),s.pb(1,49152,null,0,a,[],null,null)],null,null)}var h=s.mb("ng-component",a,d,{},{},[]),m=t("Ip0R"),v=t("2FIb"),j=t("ZYCi"),g=t("PNUx");t.d(n,"ButtonDemoModuleNgFactory",function(){return A});var A=s.nb(u,[],function(l){return s.xb([s.yb(512,s.j,s.cb,[[8,[o.a,c.a,h]],[3,s.j],s.y]),s.yb(4608,m.n,m.m,[s.v,[2,m.y]]),s.yb(5120,b.hc,function(){return[new b.t]},[]),s.yb(1073742336,m.c,m.c,[]),s.yb(1073742336,b.fc,b.fc,[]),s.yb(1073742336,b.Yb,b.Yb,[]),s.yb(1073742336,v.a,v.a,[]),s.yb(1073742336,b.Db,b.Db,[]),s.yb(1073742336,b.Ib,b.Ib,[]),s.yb(1073742336,b.Cb,b.Cb,[]),s.yb(1073742336,b.tb,b.tb,[]),s.yb(1073742336,j.m,j.m,[[2,j.s],[2,j.l]]),s.yb(1073742336,u,u,[]),s.yb(1024,j.j,function(){return[[{path:"",component:g.a,data:e}]]},[])])})},"e/HG":function(l,n){l.exports='<h1 id="vcl-button">vcl-button</h1>\n<p><code>vcl-button</code> enhances the HTML <code>&lt;button&gt;</code> with styling and features.<br>It is the main control for triggering actions.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLButtonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLButtonModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{ ... }</pre>\n<h3 id="buttonvcl-button">button[vcl-button]</h3>\n<pre class="hljs"><code>&lt;button vcl-button (click)=&quot;someAction($event)&quot;&gt;Action&lt;/button&gt;</code></pre>\n<h3 id="buttonvcl-buttonlabel">button[vcl-button][label]</h3>\n<pre class="hljs"><code>&lt;button vcl-button label=&quot;Action&quot; appIcon=&quot;fa:bolt&quot;&gt;&lt;/button&gt;</code></pre>\n<h3 id="buttonvcl-buttonicon">button[vcl-button][icon]</h3>\n<pre class="hljs"><code>&lt;button vcl-button icon=&quot;fa:bolt&quot;&gt;&lt;/button&gt;</code></pre>\n<h3 id="buttonvcl-buttonselectable">button[vcl-button][selectable]</h3>\n<pre class="hljs"><code>&lt;button vcl-button selectable (select)=&quot;someAction($event)&quot;&gt;Action&lt;/button&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-button-attributes">vcl-button attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>State to indicate that the button is disabled</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-buttonlabel-attributes">vcl-button[label] attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>Sets button label</td>\n</tr>\n<tr>\n<td><code>title</code></td>\n<td>string</td>\n<td></td>\n<td>Sets button title</td>\n</tr>\n<tr>\n<td><code>flexLabel</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>The label gets a flex layout property if true</td>\n</tr>\n<tr>\n<td><code>prepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be prepended to the label</td>\n</tr>\n<tr>\n<td><code>appIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Same as prepIcon but appended</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-buttonicon-attributes">vcl-button[icon] attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>icon</code></td>\n<td>string</td>\n<td></td>\n<td>Sets the button icon</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-buttonselectable-attributes">vcl-button[selectable] attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Preselect button if true</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-buttonselectable-events">vcl-button[selectable] events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>select</code></td>\n<td>Triggered when the button is selected</td>\n</tr>\n</tbody></table>\n'},tWdA:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ButtonDemoComponent {\n  someAction(param) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'Action handler, param:\'</span>, param);\n  }\n}\n'}}]);