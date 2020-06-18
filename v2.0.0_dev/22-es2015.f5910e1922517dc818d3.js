(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{JJvK:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FlipSwitchDemoComponent {\n  value1 = <span class="hljs-literal">false</span>;\n  value2 = <span class="hljs-literal">false</span>;\n}\n'},"l/Db":function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-flip-switch</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-flip-switch</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\nCurrent value: {{value1}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With custom labels<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-flip-switch</span> <span class="hljs-attr">onLabel</span>=<span class="hljs-string">"Yes"</span> <span class="hljs-attr">offLabel</span>=<span class="hljs-string">"No"</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-flip-switch</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\nCurrent value: {{value2}}\n'},siuY:function(s,n,a){"use strict";a.r(n),a.d(n,"demo",(function(){return u})),a.d(n,"FlipSwitchDemoModule",(function(){return i}));var t=a("ofXK"),l=a("3Pt+"),e=a("tyNb"),p=a("19H1"),c=a("2FIb"),o=a("fXoL"),h=a("TzFS");let r=(()=>{class s{constructor(){this.value1=!1,this.value2=!1}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=o.Gb({type:s,selectors:[["ng-component"]],decls:10,vars:4,consts:[[3,"value","valueChange"],["onLabel","Yes","offLabel","No",3,"value","valueChange"]],template:function(s,n){1&s&&(o.Sb(0,"h3"),o.yc(1,"Basic"),o.Rb(),o.Sb(2,"vcl-flip-switch",0),o.ac("valueChange",(function(s){return n.value1=s})),o.Rb(),o.Nb(3,"br"),o.yc(4),o.Sb(5,"h3"),o.yc(6,"With custom labels"),o.Rb(),o.Sb(7,"vcl-flip-switch",1),o.ac("valueChange",(function(s){return n.value2=s})),o.Rb(),o.Nb(8,"br"),o.yc(9)),2&s&&(o.Ab(2),o.ic("value",n.value1),o.Ab(2),o.Ac("\nCurrent value: ",n.value1," "),o.Ab(3),o.ic("value",n.value2),o.Ab(2),o.Ac("\nCurrent value: ",n.value2,"\n"))},directives:[h.a],encapsulation:2}),s})();function u(){return{label:"Flip-Switch",tabs:{Demo:r,"README.md":{type:"md",content:'<h1 id="vcl-flip-switch">vcl-flip-switch</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-flip-switch [(value)]=&quot;value&quot; onLabel=&quot;On&quot; offLabel=&quot;Off&quot;&gt;&lt;/vcl-flip-switch&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>set the value</td>\n</tr>\n<tr>\n<td><code>onLabel</code></td>\n<td>string</td>\n<td>&apos;On&apos;</td>\n<td>The label for &quot;on&quot;</td>\n</tr>\n<tr>\n<td><code>offLabel</code></td>\n<td>string</td>\n<td>&apos;Off&apos;</td>\n<td>The label for &quot;off&quot;</td>\n</tr>\n</tbody></table>\n<h4 id="events">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any | any[]</td>\n<td>emits the new value after a change</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:a("l/Db")},"demo.component.ts":{type:"pre",content:a("JJvK")}}}}let i=(()=>{class s{}return s.\u0275mod=o.Kb({type:s}),s.\u0275inj=o.Jb({factory:function(n){return new(n||s)},imports:[[t.c,l.m,c.b,p.I,e.g.forChild([{path:"",component:c.a,data:{demo:u}}])]]}),s})()}}]);