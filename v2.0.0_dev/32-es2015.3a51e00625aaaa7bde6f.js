(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"4cSI":function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return i})),n.d(a,"PasswordInputDemoModule",(function(){return u}));var t=n("ofXK"),p=n("3Pt+"),l=n("tyNb"),e=n("19H1"),c=n("2FIb"),o=n("fXoL"),r=n("5gLr"),h=n("1/Kn");let d=(()=>{class s{constructor(){this.password=""}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=o.Gb({type:s,selectors:[["ng-component"]],decls:12,vars:3,consts:[["vclInput","","placeholder","Enter password",3,"value","valueChange"],["vclInput","","placeholder","Enter password",3,"disabled"]],template:function(s,a){1&s&&(o.Sb(0,"h3"),o.yc(1,"Password input"),o.Rb(),o.Sb(2,"vcl-password-input"),o.Sb(3,"input",0),o.ac("valueChange",(function(s){return a.password=s})),o.Rb(),o.Rb(),o.Nb(4,"br"),o.Sb(5,"b"),o.yc(6,"Password input value:"),o.Rb(),o.yc(7),o.Sb(8,"h3"),o.yc(9,"Password input (disabled)"),o.Rb(),o.Sb(10,"vcl-password-input"),o.Nb(11,"input",1),o.Rb()),2&s&&(o.Ab(3),o.ic("value",a.password),o.Ab(4),o.Ac(" ",a.password," "),o.Ab(4),o.ic("disabled",!0))},directives:[r.a,h.a],encapsulation:2}),s})();function i(){return{label:"Password Input",tabs:{Demo:d,"README.md":{type:"md",content:'<h1 id="vcl-password-input">vcl-password-input</h1>\n<p>A container for the vcl-input which offers a button to toggle visibility of the input value.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-password-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Enter password&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-password-input</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>visible</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Input is visible by default when true</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("S+dB")},"demo.component.ts":{type:"pre",content:n("8nD9")}}}}let u=(()=>{class s{}return s.\u0275mod=o.Kb({type:s}),s.\u0275inj=o.Jb({factory:function(a){return new(a||s)},imports:[[t.c,p.m,c.b,e.X,e.O,l.g.forChild([{path:"",component:c.a,data:{demo:i}}])]]}),s})()},"8nD9":function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> PasswordInputDemoComponent {\n  password = <span class="hljs-string">\'\'</span>;\n}\n'},"S+dB":function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Password input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-password-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"password"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter password"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-password-input</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>Password input value:<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span> {{password}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Password input (disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-password-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter password"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-password-input</span>&gt;</span> \n'}}]);