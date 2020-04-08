function _classCallCheck(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"/RJ6":function(n,s){n.exports='\n<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TextareaDemoComponent {\n\n  data1 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n  data2 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n\n  data3 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n}\n'},"0Pyo":function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data1"</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Textarea with autogrow (minRows=5, maxRows=10)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data2"</span> [<span class="hljs-attr">autogrow</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">minRows</span>]=<span class="hljs-string">"5"</span> [<span class="hljs-attr">maxRows</span>]=<span class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n'},B4IQ:function(n,s,a){"use strict";a.r(s),a.d(s,"demo",(function(){return h})),a.d(s,"TextareaDemoModule",(function(){return g}));var t,e=a("ofXK"),l=a("3Pt+"),o=a("tyNb"),c=a("19H1"),p=a("2FIb"),r=a("fXoL"),i=a("q1D+"),d=((t=function n(){_classCallCheck(this,n),this.data1="line 1\nline 2\nline 3\nline 4\nline 5\nline 6",this.data2="line 1\nline 2\nline 3\nline 4\nline 5\nline 6",this.data3="line 1\nline 2\nline 3\nline 4\nline 5\nline 6"}).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["ng-component"]],decls:6,vars:5,consts:[["vclInput","","rows","3",3,"ngModel","ngModelChange"],["vclInput","",3,"ngModel","autogrow","minRows","maxRows","ngModelChange"]],template:function(n,s){1&n&&(r.Sb(0,"h3"),r.yc(1,"Default"),r.Rb(),r.Sb(2,"textarea",0),r.ac("ngModelChange",(function(n){return s.data1=n})),r.Rb(),r.Sb(3,"h3"),r.yc(4,"Textarea with autogrow (minRows=5, maxRows=10)"),r.Rb(),r.Sb(5,"textarea",1),r.ac("ngModelChange",(function(n){return s.data2=n})),r.Rb()),2&n&&(r.Ab(2),r.ic("ngModel",s.data1),r.Ab(3),r.ic("ngModel",s.data2)("autogrow",!0)("minRows",5)("maxRows",10))},directives:[i.a,l.c,l.r,l.u],encapsulation:2}),t);function h(){return{label:"Textarea",tabs:{Demo:d,"README.md":{type:"md",content:'<h1 id="vcl-textarea">vcl-textarea</h1>\n<p>Enhanced textarea</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;textarea vclInput [(ngModel)]=&quot;data1&quot; [autogrow]=&quot;true&quot; [minRows]=&quot;5&quot; [maxRows]=&quot;10&quot;&gt;&lt;/textarea&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>autogrow</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Adjusts the <code>rows</code> attribute so it matches the current values number of lines</td>\n</tr>\n<tr>\n<td><code>minRows</code></td>\n<td>number</td>\n<td></td>\n<td>The min value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>maxRows</code></td>\n<td>number</td>\n<td></td>\n<td>The max value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>autoselect</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects text on focus</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:a("0Pyo")},"demo.component.ts":{type:"pre",content:a("/RJ6")}}}}var u,g=((u=function n(){_classCallCheck(this,n)}).\u0275mod=r.Kb({type:u}),u.\u0275inj=r.Jb({factory:function(n){return new(n||u)},imports:[[e.c,l.m,p.b,c.hb,o.g.forChild([{path:"",component:p.a,data:{demo:h}}])]]}),u)}}]);