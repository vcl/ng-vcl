webpackJsonp([6],{1079:function(s,n){s.exports='<h1 id="vcl-zoom-box">vcl-zoom-box</h1>\n<p>Zoom into areas of images.</p>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">first</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">&quot;30&quot;</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">&quot;60&quot;</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">&quot;120&quot;</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;190&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/320/320?image=434&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">&quot;first&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="zoom-box-container-properties-">Zoom-Box Container Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>x</code></td>\n<td>number</td>\n<td>0</td>\n<td>Left offset (optional)</td>\n</tr>\n<tr>\n<td><code>y</code></td>\n<td>number</td>\n<td>0</td>\n<td>Top offset (optional)</td>\n</tr>\n<tr>\n<td><code>width</code></td>\n<td>number</td>\n<td></td>\n<td>Width of zoomed box</td>\n</tr>\n<tr>\n<td><code>height</code></td>\n<td>number</td>\n<td></td>\n<td>Height of zoomed box</td>\n</tr>\n<tr>\n<td><code>resetOnOut</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Reset position to initial on mouse out</td>\n</tr>\n</tbody>\n</table>\n<h3 id="zoom-box-properties">Zoom-Box Properties</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>image</code></td>\n<td>string</td>\n<td>&quot;&quot;</td>\n<td>High resolution image (optional)</td>\n</tr>\n<tr>\n<td><code>highResScale</code></td>\n<td>number</td>\n<td>1</td>\n<td>High resolution image scale multiplier (required if image is defined)</td>\n</tr>\n</tbody>\n</table>\n'},1080:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Sample Zoom-Box<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">first</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"190"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"first"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with a higher resolution image and mouse reset<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">second</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">resetOnOut</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"second"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with an initially hidden magnifier<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">third</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">hiding</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"third"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with appearing magnifier<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">fourth</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">hidden</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">hiding</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"fourth"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with an constantly hidden magnifier<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">fifth</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">invisible</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"fifth"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},1081:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ZoomBoxDemoComponent {\n\n}\n'},392:function(s,n,l){"use strict";function a(){return{label:"Busy",tabs:{Demo:o,"README.md":{type:"md",content:l(1079)},"demo.component.html":{type:"pre",content:l(1080)},"demo.component.ts":{type:"pre",content:l(1081)}}}}function t(s){return c._29(0,[(s()(),c._6(0,0,null,null,1,"div",[],null,null,null,null,null)),c._19(null,0)],null,null)}function p(s){return c._29(0,[c._19(null,0)],null,null)}function i(s){return c._29(0,[(s()(),c._6(0,0,null,null,2,"div",[["class","vclZoomBox"]],null,null,null,null,null)),c._5(1,278528,null,0,f.o,[c.s,c.k,c.E],{ngStyle:[0,"ngStyle"]},null),c._23(2,{position:0,"background-image":1,width:2,height:3,"background-position-x":4,"background-position-y":5}),(s()(),c._27(-1,null,["\n\n"]))],function(s,n){var l=n.component;s(n,1,0,s(n,2,0,"static","url("+l.zoomedSource+")",l.zoomedWidth+"px",l.zoomedHeight+"px","-"+l.zoomedX+"px","-"+l.zoomedY+"px"))},null)}function e(s){return c._29(0,[(s()(),c._6(0,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),c._27(-1,null,["Sample Zoom-Box"])),(s()(),c._27(-1,null,["\n"])),(s()(),c._6(3,0,null,null,20,"div",[["class","vclGridRow"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n  "])),(s()(),c._6(5,0,null,null,11,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n    "])),(s()(),c._6(7,0,null,null,8,"vcl-zoom-box-container",[],null,null,null,t,d)),c._5(8,1097728,[["first",4]],1,m,[c.k,c.E],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"]},null),c._25(335544320,1,{magnifier:0}),(s()(),c._27(-1,0,["\n      "])),(s()(),c._6(11,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(s()(),c._27(-1,0,["\n      "])),(s()(),c._6(13,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,p,b)),c._5(14,49152,[[1,4]],0,_,[c.k,c.E],null,null),(s()(),c._27(-1,0,["\n    "])),(s()(),c._27(-1,null,["\n  "])),(s()(),c._27(-1,null,["\n  "])),(s()(),c._6(18,0,null,null,4,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n    "])),(s()(),c._6(20,0,null,null,1,"vcl-zoom-box",[],[[1,"role",0]],null,null,i,z)),c._5(21,49152,null,0,x,[],{target:[0,"target"]},null),(s()(),c._27(-1,null,["\n  "])),(s()(),c._27(-1,null,["\n"])),(s()(),c._27(-1,null,["\n"])),(s()(),c._6(25,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),c._6(26,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),c._27(-1,null,["\n\n"])),(s()(),c._6(28,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),c._27(-1,null,["Zoom-Box with a higher resolution image and mouse reset"])),(s()(),c._27(-1,null,["\n"])),(s()(),c._6(31,0,null,null,20,"div",[["class","vclGridRow"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n  "])),(s()(),c._6(33,0,null,null,11,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n    "])),(s()(),c._6(35,0,null,null,8,"vcl-zoom-box-container",[],null,null,null,t,d)),c._5(36,1097728,[["second",4]],1,m,[c.k,c.E],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"],resetOnOut:[4,"resetOnOut"]},null),c._25(335544320,2,{magnifier:0}),(s()(),c._27(-1,0,["\n      "])),(s()(),c._6(39,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(s()(),c._27(-1,0,["\n      "])),(s()(),c._6(41,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,p,b)),c._5(42,49152,[[2,4]],0,_,[c.k,c.E],null,null),(s()(),c._27(-1,0,["\n    "])),(s()(),c._27(-1,null,["\n  "])),(s()(),c._27(-1,null,["\n  "])),(s()(),c._6(46,0,null,null,4,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n    "])),(s()(),c._6(48,0,null,null,1,"vcl-zoom-box",[["image","https://picsum.photos/640/640?image=434"]],[[1,"role",0]],null,null,i,z)),c._5(49,49152,null,0,x,[],{target:[0,"target"],image:[1,"image"],scale:[2,"scale"]},null),(s()(),c._27(-1,null,["\n  "])),(s()(),c._27(-1,null,["\n"])),(s()(),c._27(-1,null,["\n"])),(s()(),c._6(53,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),c._6(54,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),c._27(-1,null,["\n\n"])),(s()(),c._6(56,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),c._27(-1,null,["Zoom-Box with an initially hidden magnifier"])),(s()(),c._27(-1,null,["\n"])),(s()(),c._6(59,0,null,null,20,"div",[["class","vclGridRow"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n  "])),(s()(),c._6(61,0,null,null,11,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n    "])),(s()(),c._6(63,0,null,null,8,"vcl-zoom-box-container",[],null,null,null,t,d)),c._5(64,1097728,[["third",4]],1,m,[c.k,c.E],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"],hiding:[4,"hiding"]},null),c._25(335544320,3,{magnifier:0}),(s()(),c._27(-1,0,["\n      "])),(s()(),c._6(67,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(s()(),c._27(-1,0,["\n      "])),(s()(),c._6(69,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,p,b)),c._5(70,49152,[[3,4]],0,_,[c.k,c.E],null,null),(s()(),c._27(-1,0,["\n    "])),(s()(),c._27(-1,null,["\n  "])),(s()(),c._27(-1,null,["\n  "])),(s()(),c._6(74,0,null,null,4,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n    "])),(s()(),c._6(76,0,null,null,1,"vcl-zoom-box",[["image","https://picsum.photos/640/640?image=434"]],[[1,"role",0]],null,null,i,z)),c._5(77,49152,null,0,x,[],{target:[0,"target"],image:[1,"image"],scale:[2,"scale"]},null),(s()(),c._27(-1,null,["\n  "])),(s()(),c._27(-1,null,["\n"])),(s()(),c._27(-1,null,["\n"])),(s()(),c._6(81,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),c._6(82,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),c._27(-1,null,["\n\n"])),(s()(),c._6(84,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),c._27(-1,null,["Zoom-Box with appearing magnifier"])),(s()(),c._27(-1,null,["\n"])),(s()(),c._6(87,0,null,null,20,"div",[["class","vclGridRow"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n  "])),(s()(),c._6(89,0,null,null,11,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n    "])),(s()(),c._6(91,0,null,null,8,"vcl-zoom-box-container",[],null,null,null,t,d)),c._5(92,1097728,[["fourth",4]],1,m,[c.k,c.E],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"],hidden:[4,"hidden"],hiding:[5,"hiding"]},null),c._25(335544320,4,{magnifier:0}),(s()(),c._27(-1,0,["\n      "])),(s()(),c._6(95,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(s()(),c._27(-1,0,["\n      "])),(s()(),c._6(97,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,p,b)),c._5(98,49152,[[4,4]],0,_,[c.k,c.E],null,null),(s()(),c._27(-1,0,["\n    "])),(s()(),c._27(-1,null,["\n  "])),(s()(),c._27(-1,null,["\n  "])),(s()(),c._6(102,0,null,null,4,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n    "])),(s()(),c._6(104,0,null,null,1,"vcl-zoom-box",[["image","https://picsum.photos/640/640?image=434"]],[[1,"role",0]],null,null,i,z)),c._5(105,49152,null,0,x,[],{target:[0,"target"],image:[1,"image"],scale:[2,"scale"]},null),(s()(),c._27(-1,null,["\n  "])),(s()(),c._27(-1,null,["\n"])),(s()(),c._27(-1,null,["\n"])),(s()(),c._6(109,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),c._6(110,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),c._27(-1,null,["\n\n"])),(s()(),c._6(112,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),c._27(-1,null,["Zoom-Box with an constantly hidden magnifier"])),(s()(),c._27(-1,null,["\n"])),(s()(),c._6(115,0,null,null,20,"div",[["class","vclGridRow"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n  "])),(s()(),c._6(117,0,null,null,11,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n    "])),(s()(),c._6(119,0,null,null,8,"vcl-zoom-box-container",[],null,null,null,t,d)),c._5(120,1097728,[["fifth",4]],1,m,[c.k,c.E],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"],invisible:[4,"invisible"]},null),c._25(335544320,5,{magnifier:0}),(s()(),c._27(-1,0,["\n      "])),(s()(),c._6(123,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(s()(),c._27(-1,0,["\n      "])),(s()(),c._6(125,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,p,b)),c._5(126,49152,[[5,4]],0,_,[c.k,c.E],null,null),(s()(),c._27(-1,0,["\n    "])),(s()(),c._27(-1,null,["\n  "])),(s()(),c._27(-1,null,["\n  "])),(s()(),c._6(130,0,null,null,4,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),c._27(-1,null,["\n    "])),(s()(),c._6(132,0,null,null,1,"vcl-zoom-box",[["image","https://picsum.photos/640/640?image=434"]],[[1,"role",0]],null,null,i,z)),c._5(133,49152,null,0,x,[],{target:[0,"target"],image:[1,"image"],scale:[2,"scale"]},null),(s()(),c._27(-1,null,["\n  "])),(s()(),c._27(-1,null,["\n"])),(s()(),c._27(-1,null,["\n"]))],function(s,n){s(n,8,0,30,60,120,190),s(n,21,0,c._20(n,8));s(n,36,0,30,60,190,120,!0);s(n,49,0,c._20(n,36),"https://picsum.photos/640/640?image=434",2);s(n,64,0,30,60,190,120,!0);s(n,77,0,c._20(n,64),"https://picsum.photos/640/640?image=434",2);s(n,92,0,30,60,190,120,!0,!0);s(n,105,0,c._20(n,92),"https://picsum.photos/640/640?image=434",2);s(n,120,0,30,60,190,120,!0);s(n,133,0,c._20(n,120),"https://picsum.photos/640/640?image=434",2)},function(s,n){s(n,20,0,"zoombox");s(n,48,0,"zoombox");s(n,76,0,"zoombox");s(n,104,0,"zoombox");s(n,132,0,"zoombox")})}function h(s){return c._29(0,[(s()(),c._6(0,0,null,null,1,"ng-component",[],null,null,null,e,G)),c._5(1,49152,null,0,o,[],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var c=l(4),o=function(){function s(){}return s}(),u={demo:a},r=function(){function s(){}return s}(),g=l(410),m=function(){function s(s,n){this.element=s,this.x=0,this.y=0,this.resetOnOut=!1,this.hidden=!1,this.hiding=!1,this.invisible=!1,this.startX=-1,this.startY=-1,n.setStyle(s.nativeElement,"position","relative")}return s.prototype.ngAfterContentInit=function(){var s=this;this.magnifier.parent=this,this.magnifier.update(),this.imgContent=this.element.nativeElement.querySelector("img"),this.imgContent.onmousemove=function(n){return s.onMove(n)},this.imgContent.onmouseover=function(){return s.onOver()},this.imgContent.onmouseout=function(){return s.onOut()}},s.prototype.onMove=function(s){-1==this.startX&&(this.startX=this.x,this.startY=this.y);var n=this.width/2,l=this.imgContent.width-this.width/2,a=this.height/2,t=this.imgContent.height-this.height/2;this.x=Math.max(n,Math.min(l,s.layerX))-this.width/2,this.y=Math.max(a,Math.min(t,s.layerY))-this.height/2,this.magnifier.update()},s.prototype.onOver=function(){(this.hidden||this.hiding)&&(this.hiding=!1),this.magnifier.update()},s.prototype.onOut=function(){this.resetOnOut&&(this.x=this.startX,this.y=this.startY),this.hidden&&(this.hiding=!0),this.magnifier.update()},Object.defineProperty(s.prototype,"image",{get:function(){return this.imgContent.getAttribute("src")},enumerable:!0,configurable:!0}),s}(),j=[],d=c._4({encapsulation:2,styles:j,data:{}}),_=function(){function s(s,n){this.element=s,this.renderer=n,n.addClass(s.nativeElement,"vclZoomBoxMagnifier")}return s.prototype.update=function(){var s={top:this.parent.y+"px",left:this.parent.x+"px",width:this.parent.width+"px",height:this.parent.height+"px",display:this.parent.hiding||this.parent.invisible?"none":"block","pointer-events":"none"};for(var n in s)this.renderer.setStyle(this.element.nativeElement,n,s[n])},s}(),v=[],b=c._4({encapsulation:2,styles:v,data:{}}),f=l(21),x=function(){function s(){}return Object.defineProperty(s.prototype,"zoomedSource",{get:function(){return this.image?this.image:this.target.image},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"zoomedX",{get:function(){return this.image?this.target.x*this.scale:this.target.x},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"zoomedY",{get:function(){return this.image?this.target.y*this.scale:this.target.y},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"zoomedWidth",{get:function(){return this.image?this.target.width*this.scale:this.target.width},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"zoomedHeight",{get:function(){return this.image?this.target.height*this.scale:this.target.height},enumerable:!0,configurable:!0}),s}(),y=[],z=c._4({encapsulation:2,styles:y,data:{}}),w=[],G=c._4({encapsulation:2,styles:w,data:{}}),S=c._2("ng-component",o,h,{},{},[]),O=l(174),k=l(71),Z=l(409),B=l(411),E=l(670),q=l(42),C=l(408);l.d(n,"ZoomBoxDemoModuleNgFactory",function(){return R});var R=c._3(r,[],function(s){return c._17([c._18(512,c.j,c.Z,[[8,[g.a,S]],[3,c.j],c.w]),c._18(4608,f.n,f.m,[c.t,[2,f.v]]),c._18(512,f.c,f.c,[]),c._18(512,O.a,O.a,[]),c._18(512,k.d,k.d,[]),c._18(512,Z.a,Z.a,[]),c._18(512,B.a,B.a,[]),c._18(512,E.a,E.a,[]),c._18(512,q.m,q.m,[[2,q.r],[2,q.l]]),c._18(512,r,r,[]),c._18(1024,q.j,function(){return[[{path:"",component:C.a,data:u}]]},[])])})}});