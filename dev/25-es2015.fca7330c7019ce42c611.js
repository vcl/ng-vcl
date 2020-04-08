(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"8Wny":function(s,a,n){"use strict";n.r(a);var l=n("ofXK"),p=n("tyNb"),c=n("19H1"),t=n("2FIb"),e=n("fXoL"),h=n("Vp9f"),r=n("9Rb9");let o=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=e.Gb({type:s,selectors:[["ng-component"]],decls:21,vars:2,consts:[["vclPrepend","","icon","fas:chevron-right"],["vclAppend","","icon","fas:chevron-right"],["vcl-icogram","","href","'https://github.com/ng-vcl/ng-vcl'","target","'_blank'"],["vclPrepend","","icon","fas:link"],["vcl-a-icogram","",3,"href","disabled"]],template:function(s,a){1&s&&(e.Sb(0,"vcl-icogram"),e.Nb(1,"vcl-icon",0),e.yc(2," icogram with accessible link\n"),e.Rb(),e.Nb(3,"br"),e.Nb(4,"br"),e.Sb(5,"vcl-icogram"),e.Nb(6,"vcl-icon",0),e.yc(7," prep/app icons "),e.Nb(8,"vcl-icon",1),e.Rb(),e.Nb(9,"br"),e.Nb(10,"br"),e.Sb(11,"a",2),e.Nb(12,"vcl-icon",3),e.yc(13," external link with appended icon\n"),e.Rb(),e.Nb(14,"br"),e.Nb(15,"br"),e.Sb(16,"a",4),e.Nb(17,"vcl-icon",3),e.yc(18," Disabled link\n"),e.Rb(),e.Nb(19,"br"),e.Nb(20,"br")),2&s&&(e.Ab(16),e.ic("href","this is not considered when the link is disabled",e.qc)("disabled",!0))},directives:[h.a,r.a,h.b],encapsulation:2}),s})();function i(){return{label:"Icogram",tabs:{Demo:o,"README.md":{type:"md",content:'<h1 id="vcl-icogram">vcl-icogram</h1>\n<p>Combination of icon and text.<br>Icons can be prepended or appended to a textual label and can be sourced from icon<br>fonts.<br>Also supports the anchor tag</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:chevron-left&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  Label\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclAppend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:chevron-right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-icogram</span>\n  [<span class="hljs-attr">href</span>]=<span class="hljs-string">&quot;&apos;https://github.com/ng-vcl/ng-vcl&apos;&quot;</span>\n  [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:link&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  Link\n<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></pre>\n'},"demo.component.html":{type:"pre",content:n("A73y")},"demo.component.ts":{type:"pre",content:n("Q2Y1")}}}}n.d(a,"demo",(function(){return i})),n.d(a,"IcogramDemoModule",(function(){return g}));let g=(()=>{class s{}return s.\u0275mod=e.Kb({type:s}),s.\u0275inj=e.Jb({factory:function(a){return new(a||s)},imports:[[l.c,t.b,c.O,c.P,p.g.forChild([{path:"",component:t.a,data:{demo:i}}])]]}),s})()},A73y:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  icogram with accessible link\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  prep/app icons\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclAppend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-icogram</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"\'https://github.com/ng-vcl/ng-vcl\'"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"\'_blank\'"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:link"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n   external link with appended icon\n<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  \n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-a-icogram</span>\n  [<span class="hljs-attr">href</span>]=<span class="hljs-string">"\'this is not considered when the link is disabled\'"</span>\n  [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:link"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  Disabled link\n<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n'},Q2Y1:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> IcogramDemoComponent {\n\n}\n'}}]);