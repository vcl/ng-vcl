(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{CI8A:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> InputDemoComponent {\n  data1 = <span class="hljs-string">\'foobar\'</span>;\n}\n'},S1uV:function(l,n,s){"use strict";s.r(n);var a=s("CcnG"),t=function(){return function(){this.data1="foobar"}}(),u={demo:function(){return{label:"Input",tabs:{Demo:t,"README.md":{type:"md",content:s("qsjp")},"demo.component.html":{type:"pre",content:s("UOgG")},"demo.component.ts":{type:"pre",content:s("CI8A")}}}}},p=function(){return function(){}}(),e=s("pMnS"),c=s("8Ip6"),b=s("2JrD"),o=s("1/Kn"),r=s("pIVY"),h=s("gIcY"),d=a.qb({encapsulation:2,styles:[],data:{}});function i(l){return a.Nb(0,[(l()(),a.sb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Lb(-1,null,["Input"])),(l()(),a.sb(2,0,null,null,8,"input",[["vclInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"],[null,"change"]],function(l,n,s){var t=!0,u=l.component;return"input"===n&&(t=!1!==a.Eb(l,5)._handleInput(s.target.value)&&t),"blur"===n&&(t=!1!==a.Eb(l,5).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Eb(l,5)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Eb(l,5)._compositionEnd(s.target.value)&&t),"focus"===n&&(t=!1!==a.Eb(l,10).onFocus()&&t),"blur"===n&&(t=!1!==a.Eb(l,10).onBlur()&&t),"input"===n&&(t=!1!==a.Eb(l,10).onInput()&&t),"change"===n&&(t=!1!==a.Eb(l,10).onInput()&&t),"ngModelChange"===n&&(t=!1!==a.Eb(l,10).onInput()&&t),"ngModelChange"===n&&(t=!1!==(u.data1=s)&&t),t},null,null)),a.Ib(6144,null,b.c,null,[o.b]),a.Ib(6144,null,r.b,null,[o.b]),a.rb(5,16384,null,0,h.c,[a.E,a.k,[2,h.a]],null,null),a.Ib(1024,null,h.m,function(l){return[l]},[h.c]),a.rb(7,671744,null,0,h.r,[[8,null],[8,null],[8,null],[6,h.m]],{model:[0,"model"]},{update:"ngModelChange"}),a.Ib(2048,null,h.n,null,[h.r]),a.rb(9,16384,null,0,h.o,[[4,h.n]],null,null),a.rb(10,147456,null,0,o.b,[a.k,[2,h.n],[2,b.b],[2,b.a],[2,o.a]],null,null),(l()(),a.sb(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.sb(12,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a.Lb(-1,null,["Input value:"])),(l()(),a.Lb(14,null,[" "," "])),(l()(),a.sb(15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.sb(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.sb(17,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Lb(-1,null,["Input (autoselect)"])),(l()(),a.sb(19,0,null,null,3,"input",[["autoselect","true"],["vclInput",""]],[[8,"value",0],[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(l,n,s){var t=!0;return"focus"===n&&(t=!1!==a.Eb(l,22).onFocus()&&t),"blur"===n&&(t=!1!==a.Eb(l,22).onBlur()&&t),"input"===n&&(t=!1!==a.Eb(l,22).onInput()&&t),"change"===n&&(t=!1!==a.Eb(l,22).onInput()&&t),"ngModelChange"===n&&(t=!1!==a.Eb(l,22).onInput()&&t),t},null,null)),a.Ib(6144,null,b.c,null,[o.b]),a.Ib(6144,null,r.b,null,[o.b]),a.rb(22,147456,null,0,o.b,[a.k,[2,h.n],[2,b.b],[2,b.a],[2,o.a]],{autoselect:[0,"autoselect"]},null),(l()(),a.sb(23,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.sb(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.sb(25,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Lb(-1,null,["Input (readonly)"])),(l()(),a.sb(27,0,null,null,3,"input",[["readonly","true"],["value","readOnly"],["vclInput",""]],[[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(l,n,s){var t=!0;return"focus"===n&&(t=!1!==a.Eb(l,30).onFocus()&&t),"blur"===n&&(t=!1!==a.Eb(l,30).onBlur()&&t),"input"===n&&(t=!1!==a.Eb(l,30).onInput()&&t),"change"===n&&(t=!1!==a.Eb(l,30).onInput()&&t),"ngModelChange"===n&&(t=!1!==a.Eb(l,30).onInput()&&t),t},null,null)),a.Ib(6144,null,b.c,null,[o.b]),a.Ib(6144,null,r.b,null,[o.b]),a.rb(30,147456,null,0,o.b,[a.k,[2,h.n],[2,b.b],[2,b.a],[2,o.a]],null,null),(l()(),a.sb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.sb(32,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.sb(33,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Lb(-1,null,["Input (disabled)"])),(l()(),a.sb(35,0,null,null,3,"input",[["value","disabled"],["vclInput",""]],[[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(l,n,s){var t=!0;return"focus"===n&&(t=!1!==a.Eb(l,38).onFocus()&&t),"blur"===n&&(t=!1!==a.Eb(l,38).onBlur()&&t),"input"===n&&(t=!1!==a.Eb(l,38).onInput()&&t),"change"===n&&(t=!1!==a.Eb(l,38).onInput()&&t),"ngModelChange"===n&&(t=!1!==a.Eb(l,38).onInput()&&t),t},null,null)),a.Ib(6144,null,b.c,null,[o.b]),a.Ib(6144,null,r.b,null,[o.b]),a.rb(38,147456,null,0,o.b,[a.k,[2,h.n],[2,b.b],[2,b.a],[2,o.a]],{disabled:[0,"disabled"]},null),(l()(),a.sb(39,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){l(n,7,0,n.component.data1),l(n,22,0,"true"),l(n,38,0,!0)},function(l,n){var s=n.component;l(n,2,1,[a.Eb(n,9).ngClassUntouched,a.Eb(n,9).ngClassTouched,a.Eb(n,9).ngClassPristine,a.Eb(n,9).ngClassDirty,a.Eb(n,9).ngClassValid,a.Eb(n,9).ngClassInvalid,a.Eb(n,9).ngClassPending,a.Eb(n,10).elementId,a.Eb(n,10).classVclInput,a.Eb(n,10).isDisabled,a.Eb(n,10).hasError,a.Eb(n,10).attrDisabled]),l(n,14,0,s.data1),l(n,19,0,"Foo",a.Eb(n,22).elementId,a.Eb(n,22).classVclInput,a.Eb(n,22).isDisabled,a.Eb(n,22).hasError,a.Eb(n,22).attrDisabled),l(n,27,0,a.Eb(n,30).elementId,a.Eb(n,30).classVclInput,a.Eb(n,30).isDisabled,a.Eb(n,30).hasError,a.Eb(n,30).attrDisabled),l(n,35,0,a.Eb(n,38).elementId,a.Eb(n,38).classVclInput,a.Eb(n,38).isDisabled,a.Eb(n,38).hasError,a.Eb(n,38).attrDisabled)})}function g(l){return a.Nb(0,[(l()(),a.sb(0,0,null,null,1,"ng-component",[],null,null,null,i,d)),a.rb(1,49152,null,0,t,[],null,null)],null,null)}var j=a.ob("ng-component",t,g,{},{},[]),m=s("Ip0R"),I=s("M2Lx"),E=s("4c35"),v=s("p/eS"),C=s("2FIb"),f=s("mbT9"),y=s("hUuX"),D=s("ZYCi"),M=s("PNUx");s.d(n,"InputDemoModuleNgFactory",function(){return k});var k=a.pb(p,[],function(l){return a.Bb([a.Cb(512,a.j,a.bb,[[8,[e.a,c.a,j]],[3,a.j],a.y]),a.Cb(4608,m.n,m.m,[a.v,[2,m.A]]),a.Cb(4608,h.v,h.v,[]),a.Cb(4608,I.a,I.a,[]),a.Cb(1073742336,m.c,m.c,[]),a.Cb(1073742336,h.u,h.u,[]),a.Cb(1073742336,h.l,h.l,[]),a.Cb(1073742336,E.e,E.e,[]),a.Cb(1073742336,I.b,I.b,[]),a.Cb(1073742336,v.a,v.a,[]),a.Cb(1073742336,C.a,C.a,[]),a.Cb(1073742336,f.a,f.a,[]),a.Cb(1073742336,y.b,y.b,[]),a.Cb(1073742336,D.q,D.q,[[2,D.v],[2,D.m]]),a.Cb(1073742336,p,p,[]),a.Cb(256,b.a,f.b,[]),a.Cb(1024,D.i,function(){return[[{path:"",component:M.a,data:u}]]},[])])})},UOgG:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data1"</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>Input value:<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span> {{data1}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Input (autoselect)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">autoselect</span>=<span class="hljs-string">true</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'Foo\'"</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Input (readonly)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">value</span>=<span class="hljs-string">\'readOnly\'</span> <span class="hljs-attr">readonly</span>=<span class="hljs-string">true</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Input (disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">value</span>=<span class="hljs-string">\'disabled\'</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n'},qsjp:function(l,n){l.exports='<h1 id="vcl-input">vcl-input</h1>\n<p>Enhanced text input</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLInputModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLInputModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;data&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">autoselect</span>=<span class="hljs-string">true</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vclinput-attributes">vclInput attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the input when true</td>\n</tr>\n<tr>\n<td><code>autoselect</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects text on focus</td>\n</tr>\n</tbody></table>\n'}}]);