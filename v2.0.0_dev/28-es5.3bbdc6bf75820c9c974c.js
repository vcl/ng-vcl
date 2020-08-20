function _classCallCheck(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+eiR":function(s,n,a){"use strict";a.r(n),a.d(n,"demo",(function(){return j})),a.d(n,"NotificationDemoModule",(function(){return m}));var l,t=a("ofXK"),p=a("tyNb"),o=a("3Pt+"),e=a("19H1"),c=a("2FIb"),i=a("fXoL"),r=a("cjwi"),h=((l=function s(){_classCallCheck(this,s)}).\u0275fac=function(s){return new(s||l)},l.\u0275cmp=i.Gb({type:l,selectors:[["ng-component"]],decls:6,vars:0,consts:[["type","success"]],template:function(s,n){1&s&&(i.Sb(0,"vcl-notification"),i.yc(1," An inline message\n"),i.Rb(),i.Sb(2,"vcl-notification",0),i.Sb(3,"vcl-notification-title"),i.yc(4,"Success"),i.Rb(),i.yc(5," An inline success message\n"),i.Rb())},directives:[r.a,r.b],encapsulation:2}),l);function j(){return{label:"Notification",tabs:{Demo:h,"README.md":{type:"md",content:'<h1 id="vcl-notifications">vcl-notifications</h1>\n<p>Notification messages for events with growl-style support</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLNotifierModule, VCLLayerModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ \n    VCLNotifierModule,\n  ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<p>Inline</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-notification</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span> \n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vclNotificationHeader</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  An inline success message\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vclNotificationFooter</span>&gt;</span>Footer<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-notification</span>&gt;</span></pre>\n<p>Growl-style</p>\n<pre class="hljs"><span class="hljs-meta">@Component</span>({ ... })\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> notifier: NotifierService</span>) {}\n\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.queue({\n      content: <span class="hljs-string">&apos;A message&apos;</span>\n    });\n  }\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.info({\n      content: <span class="hljs-string">&apos;An info message&apos;</span>\n    });\n  }\n  success() {\n    <span class="hljs-keyword">this</span>.notifier.success({\n      content: <span class="hljs-string">&apos;A success message&apos;</span>,\n      position: NotifierPosition.BottomRight\n    });\n  }\n  warning() {\n    <span class="hljs-keyword">this</span>.notifier.warning({\n      content: <span class="hljs-string">&apos;A warning&apos;</span>,\n      showCloseButton: <span class="hljs-literal">true</span>,\n      timeout: <span class="hljs-number">10000</span>\n    });\n  }\n  error() {\n    <span class="hljs-keyword">this</span>.notifier.error({\n      content: <span class="hljs-string">&apos;An error message&apos;</span>,\n      timeout: <span class="hljs-literal">false</span>,\n      icon: <span class="hljs-string">&apos;fas:warning&apos;</span>,\n      position: NotifierPosition.TopLeft,\n      <span class="hljs-keyword">class</span>: <span class="hljs-string">&apos;my-error-message&apos;</span>\n    });\n  }\n}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> [<span class="hljs-attr">vclNotification</span>[]=<span class="hljs-string">&quot;{}&quot;</span> #<span class="hljs-attr">n</span>=<span class="hljs-string">&quot;vclNotification&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;n.open()&quot;</span>&gt;</span>Show notification<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> NotifierType {\n  None,\n  Info,\n  Success,\n  Warning,\n  <span class="hljs-built_in">Error</span>\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> NotifierPosition {\n  TopRight,\n  Top,\n  TopLeft,\n  BottomRight,\n  Bottom,\n  BottomLeft,\n  Center\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> NotifierOptions {\n  content?: <span class="hljs-built_in">string</span>;\n  <span class="hljs-keyword">type</span>?: NotifierType;\n  icon: <span class="hljs-built_in">string</span> | <span class="hljs-literal">false</span>;\n  showCloseButton?: <span class="hljs-built_in">boolean</span>;\n  position?: NotifierPosition;\n  timeout?: <span class="hljs-built_in">number</span> | <span class="hljs-built_in">boolean</span>;\n  <span class="hljs-keyword">class</span>?: <span class="hljs-built_in">string</span>;\n  context?: <span class="hljs-built_in">any</span>;\n}</pre>\n'},"demo.component.html":{type:"pre",content:a("2nGh")},"demo.component.ts":{type:"pre",content:a("ZkaI")}}}}var g,m=((g=function s(){_classCallCheck(this,s)}).\u0275mod=i.Kb({type:g}),g.\u0275inj=i.Jb({factory:function(s){return new(s||g)},imports:[[t.c,o.m,c.b,e.T,e.z,e.A,p.g.forChild([{path:"",component:c.a,data:{demo:j}}])]]}),g)},"2nGh":function(s,n){s.exports='\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-notification</span>&gt;</span> \n  An inline message\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-notification</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-notification</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span> \n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-notification-title</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-notification-title</span>&gt;</span>\n  An inline success message\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-notification</span>&gt;</span>\n\n'},ZkaI:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NotifierPosition, NotifierService, NotifierOptions } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n<span class="hljs-keyword">import</span> { Component, Input, ViewEncapsulation, ViewChild, TemplateRef } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { TemplatePortal } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/cdk/portal\'</span>;\n\n<span class="hljs-keyword">let</span> cnt = <span class="hljs-number">1</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> NotificationDemoComponent {\n\n\n}\n'}}]);