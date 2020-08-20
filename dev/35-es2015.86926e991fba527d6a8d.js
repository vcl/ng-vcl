(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{YDqW:function(s,a){s.exports='<span class="hljs-keyword">import</span> {Component} <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> RatingDemoComponent {\n\n  horizontalValue = <span class="hljs-number">2.5</span>;\n  verticalValue = <span class="hljs-number">2.5</span>;\n  customValue = <span class="hljs-number">7.5</span>;\n\n}\n'},iuMV:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Horizontal<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"horizontalValue"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Value: {{ horizontalValue }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Vertical<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"vertical"</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"verticalValue"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Value: {{ verticalValue }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Custom Star Count<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating</span> [<span class="hljs-attr">ratingItemCount</span>]=<span class="hljs-string">"10"</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"customValue"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Value: {{ customValue }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>With label<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"vInputEx1"</span>&gt;</span>\n  Rating: {{rating1.labelChange | async}}\n<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span> #<span class="hljs-attr">rating1</span>=<span class="hljs-string">"vclRating"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: red"</span>&gt;</span>Bad<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item</span>&gt;</span> \n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: orange"</span>&gt;</span>Average<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: green"</span>&gt;</span>Good<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>With rich label<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"vInputEx1"</span>&gt;</span>\n  Rating: <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item-label</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"rating2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item-label</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span> #<span class="hljs-attr">rating2</span>=<span class="hljs-string">"vclRating"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: red"</span>&gt;</span>Bad<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item</span>&gt;</span> \n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: orange"</span>&gt;</span>Average<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: green"</span>&gt;</span>Good<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Custom Icons<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating</span> <span class="hljs-attr">ratingFullIcon</span>=<span class="hljs-string">"fas fa-battery-full"</span> <span class="hljs-attr">ratingHalfIcon</span>=<span class="hljs-string">"fas fa-battery-half"</span> <span class="hljs-attr">ratingEmptyIcon</span>=<span class="hljs-string">"fas fa-battery-empty"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2.5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating</span>&gt;</span>\n'},j3VI:function(s,a,n){"use strict";n.r(a);var t=n("ofXK"),l=n("3Pt+"),p=n("tyNb"),c=n("2FIb"),e=n("fXoL"),r=n("ySGC"),h=n("SQVY"),g=n("R+ME");let i=(()=>{class s{constructor(){this.horizontalValue=2.5,this.verticalValue=2.5,this.customValue=7.5}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=e.Gb({type:s,selectors:[["ng-component"]],decls:50,vars:14,consts:[[3,"value","valueChange"],["type","vertical",3,"value","valueChange"],[3,"ratingItemCount","value","valueChange"],["for","vInputEx1",1,"form-control-label"],[3,"value"],["rating1","vclRating"],[2,"color","red"],[2,"color","orange"],[2,"color","green"],[3,"target"],["rating2","vclRating"],["ratingFullIcon","fas fa-battery-full","ratingHalfIcon","fas fa-battery-half","ratingEmptyIcon","fas fa-battery-empty",3,"value"]],template:function(s,a){if(1&s&&(e.Tb(0,"h2"),e.Ac(1,"Horizontal"),e.Rb(),e.Tb(2,"vcl-rating",0),e.bc("valueChange",(function(s){return a.horizontalValue=s})),e.Rb(),e.Tb(3,"div"),e.Ac(4),e.Rb(),e.Tb(5,"h2"),e.Ac(6,"Vertical"),e.Rb(),e.Tb(7,"vcl-rating",1),e.bc("valueChange",(function(s){return a.verticalValue=s})),e.Rb(),e.Tb(8,"div"),e.Ac(9),e.Rb(),e.Tb(10,"h2"),e.Ac(11,"Custom Star Count"),e.Rb(),e.Tb(12,"vcl-rating",2),e.bc("valueChange",(function(s){return a.customValue=s})),e.Rb(),e.Tb(13,"div"),e.Ac(14),e.Rb(),e.Tb(15,"h2"),e.Ac(16,"With label"),e.Rb(),e.Tb(17,"label",3),e.Ac(18),e.fc(19,"async"),e.Rb(),e.Tb(20,"vcl-rating",4,5),e.Tb(22,"vcl-rating-item"),e.Tb(23,"span",6),e.Ac(24,"Bad"),e.Rb(),e.Rb(),e.Tb(25,"vcl-rating-item"),e.Tb(26,"span",7),e.Ac(27,"Average"),e.Rb(),e.Rb(),e.Tb(28,"vcl-rating-item"),e.Tb(29,"span",8),e.Ac(30,"Good"),e.Rb(),e.Rb(),e.Rb(),e.Tb(31,"h2"),e.Ac(32,"With rich label"),e.Rb(),e.Tb(33,"label",3),e.Ac(34," Rating: "),e.Nb(35,"vcl-rating-item-label",9),e.Rb(),e.Tb(36,"vcl-rating",4,10),e.Tb(38,"vcl-rating-item"),e.Tb(39,"span",6),e.Ac(40,"Bad"),e.Rb(),e.Rb(),e.Tb(41,"vcl-rating-item"),e.Tb(42,"span",7),e.Ac(43,"Average"),e.Rb(),e.Rb(),e.Tb(44,"vcl-rating-item"),e.Tb(45,"span",8),e.Ac(46,"Good"),e.Rb(),e.Rb(),e.Rb(),e.Tb(47,"h2"),e.Ac(48,"Custom Icons"),e.Rb(),e.Nb(49,"vcl-rating",11)),2&s){const s=e.oc(21),n=e.oc(37);e.zb(2),e.jc("value",a.horizontalValue),e.zb(2),e.Cc("Value: ",a.horizontalValue,""),e.zb(3),e.jc("value",a.verticalValue),e.zb(2),e.Cc("Value: ",a.verticalValue,""),e.zb(3),e.jc("ratingItemCount",10)("value",a.customValue),e.zb(2),e.Cc("Value: ",a.customValue,""),e.zb(4),e.Cc(" Rating: ",e.gc(19,12,s.labelChange),"\n"),e.zb(2),e.jc("value",2),e.zb(15),e.jc("target",n),e.zb(1),e.jc("value",2),e.zb(13),e.jc("value",2.5)}},directives:[r.a,h.b,g.a],pipes:[t.b],encapsulation:2}),s})();var o=n("19H1");function j(){return{label:"Rating",tabs:{Demo:i,"README.md":{type:"md",content:'<h1 id="vcl-rating">vcl-rating</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-rating [(value)]=&quot;value&quot;&gt;&lt;/vcl-rating&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code> <em>(1)</em></td>\n<td>number</td>\n<td>0</td>\n<td>set the value</td>\n</tr>\n<tr>\n<td><code>type</code></td>\n<td>&apos;horizontal&apos;, &apos;vertical&apos;, &apos;small&apos;</td>\n<td>&apos;horizontal&apos;</td>\n<td>Rating type.</td>\n</tr>\n<tr>\n<td><code>fullStar</code></td>\n<td>string</td>\n<td>&apos;vcl:star&apos;</td>\n<td>Full star icon</td>\n</tr>\n<tr>\n<td><code>halfStar</code></td>\n<td>string</td>\n<td>&apos;vcl:star-half&apos;</td>\n<td>Half star icon</td>\n</tr>\n<tr>\n<td><code>emptyStar</code></td>\n<td>string</td>\n<td>&apos;vcl:star-empty&apos;</td>\n<td>Empty star icon</td>\n</tr>\n<tr>\n<td><code>starCount</code></td>\n<td>number</td>\n<td>5</td>\n<td>Max rating</td>\n</tr>\n<tr>\n<td><code>readonly</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Whether the stars can be clicked</td>\n</tr>\n</tbody></table>\n<h4 id="events">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>number</td>\n<td>emits when the value changes</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("iuMV")},"demo.component.ts":{type:"pre",content:n("YDqW")}}}}n.d(a,"demo",(function(){return j})),n.d(a,"RatingDemoModule",(function(){return m}));let m=(()=>{class s{}return s.\u0275mod=e.Kb({type:s}),s.\u0275inj=e.Jb({factory:function(a){return new(a||s)},imports:[[t.c,l.m,c.b,o.cb,p.g.forChild([{path:"",component:c.a,data:{demo:j}}])]]}),s})()}}]);