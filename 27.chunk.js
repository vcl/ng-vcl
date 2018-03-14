webpackJsonp([27],{370:function(s,n,a){"use strict";function l(s,n){return arguments.length>=2?Object(c.a)(s,n)(this):Object(c.a)(s)(this)}function t(){return{label:"Input Control Group",tabs:{Demo:i,"README.md":{type:"md",content:a(708)},"demo.component.html":{type:"pre",content:a(709)},"demo.component.ts":{type:"pre",content:a(710)}}}}function p(s){return r._29(0,[(s()(),r._6(0,0,null,null,4,"vcl-input-control-group",[],[[2,"vclInputInlineControlGroup",null],[2,"vclInputControlGroup",null]],null,null,m.b,m.a)),r._5(1,49152,null,0,y.a,[],{type:[0,"type"],label:[1,"label"]},null),(s()(),r._27(-1,0,["\n  "])),(s()(),r._6(3,0,null,0,0,"input",[["type","text"],["vcl-input",""]],null,null,null,null,null)),(s()(),r._27(-1,0,["\n"])),(s()(),r._27(-1,null,["\n"]))],function(s,n){var a=n.component;s(n,1,0,a.type,a.label)},function(s,n){s(n,0,0,r._20(n,1).inline,r._20(n,1).notInline)})}function e(s){return r._29(0,[(s()(),r._6(0,0,null,null,1,"ng-component",[],null,null,null,p,b)),r._5(1,49152,null,0,i,[],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var r=a(4),o=a(2),c=(a(503),a(194));o.a.prototype.scan=l;var u=(a(59),a(26)),i=function(){function s(){var s=this;this.message=new u.a,this.obs=o.a.interval(2e3).scan(function(s,n){return s++,s>3&&(s=0),s}).map(function(s){return 0==s?"error":1==s?"warning":2==s?"success":void 0}).map(function(n){return s.type=n,s.label="my custom "+n,{type:n,value:"my custom "+n}}).subscribe(function(n){return s.message.next(n)})}return s}(),h={demo:t},d=function(){function s(){}return s}(),j=a(410),m=a(551),y=a(504),g=[],b=r._4({encapsulation:2,styles:g,data:{}}),f=r._2("ng-component",i,e,{},{},[]),w=a(21),k=a(174),v=a(71),_=a(409),x=a(411),I=a(435),C=a(42),O=a(408);a.d(n,"InputControlGroupDemoModuleNgFactory",function(){return T});var T=r._3(d,[],function(s){return r._17([r._18(512,r.j,r.Z,[[8,[j.a,f]],[3,r.j],r.w]),r._18(4608,w.n,w.m,[r.t,[2,w.v]]),r._18(512,w.c,w.c,[]),r._18(512,k.a,k.a,[]),r._18(512,v.d,v.d,[]),r._18(512,_.a,_.a,[]),r._18(512,x.a,x.a,[]),r._18(512,I.a,I.a,[]),r._18(512,C.m,C.m,[[2,C.r],[2,C.l]]),r._18(512,d,d,[]),r._18(1024,C.j,function(){return[[{path:"",component:O.a,data:h}]]},[])])})},708:function(s,n){s.exports='<h1 id="vcl-input-control-group">vcl-input-control-group</h1>\n<p>Input-Control-Group to handle the error-state of any object.</p>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs">\n</pre>\n<h3 id="api">API</h3>\n<h4 id="properties-">Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>selectAllOnFocus</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects</td>\n</tr>\n<tr>\n<td><code>typedValue</code> <em>(1)</em></td>\n<td>any</td>\n<td></td>\n<td>The current value of the input element. Type is converted as specified in <code>valueType</code>  </td>\n</tr>\n<tr>\n<td><code>valueType</code></td>\n<td>string</td>\n<td>string</td>\n<td><code>string</code> or <code>number</code>. Type to use in <code>typedValue</code></td>\n</tr>\n</tbody>\n</table>\n<p><em>(1) Supports Two-way binding</em></p>\n'},709:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-control-group</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">"type"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"label"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span>  <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-control-group</span>&gt;</span>\n'},710:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Observable } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/Observable\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'rxjs/add/observable/interval\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'rxjs/add/operator/scan\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'rxjs/add/operator/map\'</span>;\n<span class="hljs-keyword">import</span> { Subject } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/Subject\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> InputControlGroupDemoComponent {\n\n  <span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span> | <span class="hljs-literal">undefined</span>;\n  label: <span class="hljs-built_in">string</span>;\n\n  message = <span class="hljs-keyword">new</span> Subject();\n  <span class="hljs-comment">// emit messages over time</span>\n  obs = Observable\n    .interval(<span class="hljs-number">2000</span>)\n    .scan(<span class="hljs-function">(<span class="hljs-params">s, x</span>) =&gt;</span> {\n      s++;\n      <span class="hljs-keyword">if</span> (s &gt; <span class="hljs-number">3</span>) s = <span class="hljs-number">0</span>;\n      <span class="hljs-keyword">return</span> s;\n    })\n    .map(<span class="hljs-function"><span class="hljs-params">s</span> =&gt;</span> {\n      <span class="hljs-keyword">if</span> (s == <span class="hljs-number">0</span>) <span class="hljs-keyword">return</span> <span class="hljs-string">\'error\'</span>;\n      <span class="hljs-keyword">if</span> (s == <span class="hljs-number">1</span>) <span class="hljs-keyword">return</span> <span class="hljs-string">\'warning\'</span>;\n      <span class="hljs-keyword">if</span> (s == <span class="hljs-number">2</span>) <span class="hljs-keyword">return</span> <span class="hljs-string">\'success\'</span>;\n      <span class="hljs-keyword">if</span> (s == <span class="hljs-number">3</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">undefined</span>;\n    })\n    .map(<span class="hljs-function"><span class="hljs-params">type</span> =&gt;</span> {\n\n      <span class="hljs-keyword">this</span>.type = <span class="hljs-keyword">type</span>;\n      <span class="hljs-keyword">this</span>.label = <span class="hljs-string">\'my custom \'</span> + <span class="hljs-keyword">type</span>;\n\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-keyword">type</span>,\n        value: <span class="hljs-string">\'my custom \'</span> + <span class="hljs-keyword">type</span>\n      };\n    })\n    .subscribe(<span class="hljs-function"><span class="hljs-params">msg</span> =&gt;</span> <span class="hljs-keyword">this</span>.message.next(msg));\n\n}\n'}});