(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"3LFa":function(n,l){n.exports='<h1 id="vcl-password-input">vcl-password-input</h1>\n<p>A container for the vcl-input which offers a button to toggle visibility of the input value.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-password-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Enter password&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-password-input</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>visible</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Input is visible by default when true</td>\n</tr>\n</tbody></table>\n'},"8nD9":function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> PasswordInputDemoComponent {\n  password = <span class="hljs-string">\'\'</span>;\n}\n'},"RyI+":function(n,l,s){"use strict";s.d(l,"a",function(){return b}),s.d(l,"b",function(){return r});var a=s("CcnG"),t=s("slit"),u=s("6B8K"),p=s("b1Eb"),e=s("X5GH"),c=s("dy60"),o=s("9Rb9"),b=(s("2JrD"),s("5gLr"),s("pIVY"),a.qb({encapsulation:2,styles:[],data:{}}));function r(n){return a.Nb(2,[a.Jb(671088640,1,{button:0}),a.Db(null,0),(n()(),a.sb(2,0,null,null,4,"button",[["class","vclAppended"],["type","button"],["vcl-square-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(n,l,s){var t=!0,u=n.component;return"mouseenter"===l&&(t=!1!==a.Eb(n,3).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Eb(n,3).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Eb(n,3).onClick()&&t),"focus"===l&&(t=!1!==a.Eb(n,3).onFocus()&&t),"blur"===l&&(t=!1!==a.Eb(n,3).onBlur()&&t),"click"===l&&(t=!1!==u.toggle()&&t),t},t.b,t.a)),a.rb(3,49152,[[1,4]],0,u.b,[a.h,a.k,[3,u.a]],{disabled:[0,"disabled"],type:[1,"type"]},null),(n()(),a.sb(4,0,null,0,2,"vcl-icon",[],[[2,"vclIcon",null],[1,"role",0]],null,null,p.b,p.a)),a.Ib(512,null,e.a,e.a,[a.E,c.a]),a.rb(6,4767744,null,0,o.a,[e.a,a.k],{icon:[0,"icon"]},null)],function(n,l){var s=l.component;n(l,3,0,s.disabled,"button"),n(l,6,0,s.visible?"vcl:eye":"vcl:eye-off")},function(n,l){n(l,2,0,a.Eb(l,3).classVCLSquare,a.Eb(l,3).attrType,a.Eb(l,3).isDisabled,a.Eb(l,3).isDisabled,a.Eb(l,3)._hostClasses,a.Eb(l,3).hovered,a.Eb(l,3).selectable,a.Eb(l,3).selected),n(l,4,0,a.Eb(l,6).vclIcon,a.Eb(l,6).attrRole)})}},"S+dB":function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Password input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-password-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"password"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter password"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-password-input</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>Password input value:<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span> {{password}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Password input (disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-password-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter password"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-password-input</span>&gt;</span> \n'},i0np:function(n,l,s){"use strict";s.r(l);var a=s("CcnG"),t=function(){return function(){this.password=""}}(),u={demo:function(){return{label:"Password Input",tabs:{Demo:t,"README.md":{type:"md",content:s("3LFa")},"demo.component.html":{type:"pre",content:s("S+dB")},"demo.component.ts":{type:"pre",content:s("8nD9")}}}}},p=function(){return function(){}}(),e=s("pMnS"),c=s("8Ip6"),o=s("RyI+"),b=s("2JrD"),r=s("5gLr"),i=s("pIVY"),d=s("1/Kn"),h=s("gIcY"),g=a.qb({encapsulation:2,styles:[],data:{}});function v(n){return a.Nb(0,[(n()(),a.sb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Lb(-1,null,["Password input"])),(n()(),a.sb(2,0,null,null,8,"vcl-password-input",[],[[2,"vclInputGroupEmb",null],[1,"tabindex",0]],null,null,o.b,o.a)),a.Ib(6144,null,b.c,null,[r.a]),a.Ib(6144,null,i.b,null,[r.a]),a.rb(5,1097728,null,1,r.a,[a.E,[2,i.a]],null,null),a.Jb(603979776,1,{input:0}),(n()(),a.sb(7,0,null,0,3,"input",[["placeholder","Enter password"],["vclInput",""]],[[8,"value",0],[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"valueChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(n,l,s){var t=!0,u=n.component;return"focus"===l&&(t=!1!==a.Eb(n,10).onFocus()&&t),"blur"===l&&(t=!1!==a.Eb(n,10).onBlur()&&t),"input"===l&&(t=!1!==a.Eb(n,10).onInput()&&t),"change"===l&&(t=!1!==a.Eb(n,10).onInput()&&t),"ngModelChange"===l&&(t=!1!==a.Eb(n,10).onInput()&&t),"valueChange"===l&&(t=!1!==(u.password=s)&&t),t},null,null)),a.Ib(6144,null,b.c,null,[d.b]),a.Ib(6144,null,i.b,null,[d.b]),a.rb(10,147456,[[1,4]],0,d.b,[a.k,[2,h.n],[2,b.b],[2,b.a],[2,d.a]],null,null),(n()(),a.sb(11,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.sb(12,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),a.Lb(-1,null,["Password input value:"])),(n()(),a.Lb(14,null,[" "," "])),(n()(),a.sb(15,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Lb(-1,null,["Password input (disabled)"])),(n()(),a.sb(17,0,null,null,8,"vcl-password-input",[],[[2,"vclInputGroupEmb",null],[1,"tabindex",0]],null,null,o.b,o.a)),a.Ib(6144,null,b.c,null,[r.a]),a.Ib(6144,null,i.b,null,[r.a]),a.rb(20,1097728,null,1,r.a,[a.E,[2,i.a]],null,null),a.Jb(603979776,2,{input:0}),(n()(),a.sb(22,0,null,0,3,"input",[["placeholder","Enter password"],["vclInput",""]],[[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(n,l,s){var t=!0;return"focus"===l&&(t=!1!==a.Eb(n,25).onFocus()&&t),"blur"===l&&(t=!1!==a.Eb(n,25).onBlur()&&t),"input"===l&&(t=!1!==a.Eb(n,25).onInput()&&t),"change"===l&&(t=!1!==a.Eb(n,25).onInput()&&t),"ngModelChange"===l&&(t=!1!==a.Eb(n,25).onInput()&&t),t},null,null)),a.Ib(6144,null,b.c,null,[d.b]),a.Ib(6144,null,i.b,null,[d.b]),a.rb(25,147456,[[2,4]],0,d.b,[a.k,[2,h.n],[2,b.b],[2,b.a],[2,d.a]],{disabled:[0,"disabled"]},null)],function(n,l){n(l,25,0,!0)},function(n,l){var s=l.component;n(l,2,0,a.Eb(l,5).classVclInputGroup,a.Eb(l,5).attrTabindex),n(l,7,0,s.password,a.Eb(l,10).elementId,a.Eb(l,10).classVclInput,a.Eb(l,10).isDisabled,a.Eb(l,10).hasError,a.Eb(l,10).attrDisabled),n(l,14,0,s.password),n(l,17,0,a.Eb(l,20).classVclInputGroup,a.Eb(l,20).attrTabindex),n(l,22,0,a.Eb(l,25).elementId,a.Eb(l,25).classVclInput,a.Eb(l,25).isDisabled,a.Eb(l,25).hasError,a.Eb(l,25).attrDisabled)})}function j(n){return a.Nb(0,[(n()(),a.sb(0,0,null,null,1,"ng-component",[],null,null,null,v,g)),a.rb(1,49152,null,0,t,[],null,null)],null,null)}var E=a.ob("ng-component",t,j,{},{},[]),m=s("Ip0R"),I=s("M2Lx"),w=s("dy60"),f=s("tfYh"),C=s("4c35"),y=s("p/eS"),D=s("2FIb"),k=s("mbT9"),q=s("hUuX"),L=s("61Fc"),P=s("g2Nb"),x=s("hyVG"),M=s("j8i+"),B=s("ZYCi"),F=s("PNUx");s.d(l,"PasswordInputDemoModuleNgFactory",function(){return G});var G=a.pb(p,[],function(n){return a.Bb([a.Cb(512,a.j,a.bb,[[8,[e.a,c.a,E]],[3,a.j],a.y]),a.Cb(4608,m.n,m.m,[a.v,[2,m.A]]),a.Cb(4608,h.v,h.v,[]),a.Cb(4608,I.a,I.a,[]),a.Cb(4608,w.a,w.a,[[2,f.a]]),a.Cb(1073742336,m.c,m.c,[]),a.Cb(1073742336,h.u,h.u,[]),a.Cb(1073742336,h.l,h.l,[]),a.Cb(1073742336,C.e,C.e,[]),a.Cb(1073742336,I.b,I.b,[]),a.Cb(1073742336,y.a,y.a,[]),a.Cb(1073742336,D.a,D.a,[]),a.Cb(1073742336,k.a,k.a,[]),a.Cb(1073742336,q.b,q.b,[]),a.Cb(1073742336,L.c,L.c,[]),a.Cb(1073742336,P.a,P.a,[]),a.Cb(1073742336,x.a,x.a,[]),a.Cb(1073742336,M.a,M.a,[]),a.Cb(1073742336,B.q,B.q,[[2,B.v],[2,B.m]]),a.Cb(1073742336,p,p,[]),a.Cb(256,b.a,k.b,[]),a.Cb(1024,B.i,function(){return[[{path:"",component:F.a,data:u}]]},[])])})}}]);