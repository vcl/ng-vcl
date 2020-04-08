(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"5iVd":function(s,l){s.exports='<span class="hljs-keyword">import</span> { Component, ViewChild, ElementRef } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> SelectListDemoComponent {\n  value1 = <span class="hljs-string">\'gr\'</span>;\n  value2 = [];\n}\n'},fQng:function(s,l,a){"use strict";a.r(l);var t=a("ofXK"),n=a("3Pt+"),e=a("tyNb"),c=a("19H1"),p=a("+J/9"),h=a("2FIb"),i=a("fXoL"),g=a("zDo1"),j=a("gCzt"),m=a("StUX");let v=(()=>{class s{constructor(){this.value1="gr",this.value2=[]}}return s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=i.Gb({type:s,selectors:[["ng-component"]],decls:62,vars:4,consts:[[3,"value","valueChange"],["value","gr"],["value","fr"],["value","de"],["value","gb"],["value","jp"],["value","ch"],["value","th"],["selectionMode","multiple",3,"value","valueChange"]],template:function(s,l){1&s&&(i.Tb(0,"h3"),i.Ac(1,"Basic vcl-select-list"),i.Rb(),i.Tb(2,"vcl-select-list",0),i.bc("valueChange",(function(s){return l.value1=s})),i.Tb(3,"vcl-select-list-header"),i.Ac(4,"Europe"),i.Rb(),i.Tb(5,"vcl-select-list-item",1),i.Tb(6,"vcl-select-list-label"),i.Ac(7,"Greece"),i.Rb(),i.Tb(8,"vcl-select-list-sublabel"),i.Ac(9,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),i.Rb(),i.Rb(),i.Tb(10,"vcl-select-list-item",2),i.Tb(11,"vcl-select-list-label"),i.Ac(12,"France"),i.Rb(),i.Rb(),i.Tb(13,"vcl-select-list-item",3),i.Tb(14,"vcl-select-list-label"),i.Ac(15,"Germany"),i.Rb(),i.Rb(),i.Tb(16,"vcl-select-list-item",4),i.Tb(17,"vcl-select-list-label"),i.Ac(18,"The United Kingdom of Great Britain and Northern Ireland"),i.Rb(),i.Rb(),i.Tb(19,"vcl-select-list-header"),i.Ac(20,"Asia"),i.Rb(),i.Tb(21,"vcl-select-list-item",5),i.Tb(22,"vcl-select-list-label"),i.Ac(23,"Japan"),i.Rb(),i.Rb(),i.Tb(24,"vcl-select-list-item",6),i.Tb(25,"vcl-select-list-label"),i.Ac(26,"China"),i.Rb(),i.Rb(),i.Tb(27,"vcl-select-list-item",7),i.Tb(28,"vcl-select-list-label"),i.Ac(29,"Thailand"),i.Rb(),i.Rb(),i.Rb(),i.Ac(30),i.Tb(31,"h3"),i.Ac(32,"multi-select"),i.Rb(),i.Tb(33,"vcl-select-list",8),i.bc("valueChange",(function(s){return l.value2=s})),i.Tb(34,"vcl-select-list-header"),i.Ac(35,"Europe"),i.Rb(),i.Tb(36,"vcl-select-list-item",1),i.Tb(37,"vcl-select-list-label"),i.Ac(38,"Greece"),i.Rb(),i.Tb(39,"vcl-select-list-sublabel"),i.Ac(40,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),i.Rb(),i.Rb(),i.Tb(41,"vcl-select-list-item",2),i.Tb(42,"vcl-select-list-label"),i.Ac(43,"France"),i.Rb(),i.Rb(),i.Tb(44,"vcl-select-list-item",3),i.Tb(45,"vcl-select-list-label"),i.Ac(46,"Germany"),i.Rb(),i.Rb(),i.Tb(47,"vcl-select-list-item",4),i.Tb(48,"vcl-select-list-label"),i.Ac(49,"The United Kingdom of Great Britain and Northern Ireland"),i.Rb(),i.Rb(),i.Tb(50,"vcl-select-list-header"),i.Ac(51,"Asia"),i.Rb(),i.Tb(52,"vcl-select-list-item",5),i.Tb(53,"vcl-select-list-label"),i.Ac(54,"Japan"),i.Rb(),i.Rb(),i.Tb(55,"vcl-select-list-item",6),i.Tb(56,"vcl-select-list-label"),i.Ac(57,"China"),i.Rb(),i.Rb(),i.Tb(58,"vcl-select-list-item",7),i.Tb(59,"vcl-select-list-label"),i.Ac(60,"Thailand"),i.Rb(),i.Rb(),i.Rb(),i.Ac(61)),2&s&&(i.zb(2),i.jc("value",l.value1),i.zb(28),i.Cc(" Value: ",l.value1," "),i.zb(3),i.jc("value",l.value2),i.zb(28),i.Cc(" Value: ",l.value2,"\n"))},directives:[g.a,j.a,m.a,m.b,m.c],encapsulation:2}),s})();function r(){return{label:"Select List",tabs:{Demo:v,"README.md":{type:"md",content:'<h1 id="vcl-select-list">vcl-select-list</h1>\n<p>A list consisting of items which can be selected.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;3&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Item 3<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span></pre>\n<h3 id="vcl-select-list-attributes">vcl-select-list attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>Current value</td>\n</tr>\n<tr>\n<td><code>selectionMode</code></td>\n<td>&apos;single&apos; | &apos;multiple&apos; | &apos;none&apos;</td>\n<td>&apos;single&apos;</td>\n<td><code>single</code> allows only one item to be selected. <code>multi</code> allows multiple items to be selected.</td>\n</tr>\n</tbody></table>\n<h3 id="vcl-select-list-events">vcl-select-list events</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any</td>\n<td>Fired when the select-list value has changes</td>\n</tr>\n</tbody></table>\n<h3 id="vcl-select-list-item-attributes">vcl-select-list-item attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>The items value</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td></td>\n<td>Disables the item</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:a("sAGU")},"demo.component.ts":{type:"pre",content:a("5iVd")}}}}a.d(l,"demo",(function(){return r})),a.d(l,"SelectListDemoModule",(function(){return b}));let b=(()=>{class s{}return s.\u0275mod=i.Kb({type:s}),s.\u0275inj=i.Jb({factory:function(l){return new(l||s)},imports:[[t.c,n.m,h.b,c.C,c.I,c.db,c.P,c.Q,c.O,c.A,p.c,e.g.forChild([{path:"",component:h.a,data:{demo:r}}])]]}),s})()},sAGU:function(s,l){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic vcl-select-list<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value1"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Europe<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gr"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Greece<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"fr"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>France<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"de"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Germany<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gb"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>The United Kingdom of Great Britain and Northern Ireland<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Asia<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"jp"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Japan<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"ch"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>China<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"th"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Thailand<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n\nValue: {{value1}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>multi-select<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value2"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"multiple"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Europe<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gr"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Greece<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"fr"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>France<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"de"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Germany<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gb"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>The United Kingdom of Great Britain and Northern Ireland<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Asia<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"jp"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Japan<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"ch"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>China<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"th"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Thailand<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n\nValue: {{value2}}\n'}}]);