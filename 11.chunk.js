webpackJsonp([11],{1060:function(n,l){n.exports='<h1 id="vcl-table">vcl-table</h1>\n<p>Display tabular data.</p>\n<h2 id="usage">Usage</h2>\n<p>You can simply add directive to necessary element</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">hover</span>&gt;</span>\n...\n<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>\n</pre>\n<p>or pass parameter to toggle it behavior</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">table</span> [<span class="hljs-attr">hover</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n...\n  <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">&quot;10&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n...\n<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>\n</pre>\n<h2 id="features">Features</h2>\n<table>\n<thead>\n<tr>\n<th>Selector</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>hightlight</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Highlight single cells and columns.</td>\n</tr>\n<tr>\n<td><code>span</code></td>\n<td>number</td>\n<td>0</td>\n<td>Defines column width from <code>0</code> to <code>100</code> percents. Have to be used on the <code>th</code>s.</td>\n</tr>\n<tr>\n<td><code>sort</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Sortable columns are defined with the <code>sort</code> directive  on the respective <code>th</code>s. To handle sorting changes subscribe for <code>change</code> event <code>EventEmitter&lt;-1</code>|<code>0</code>|<code>1&gt;</code>. To add additional sort icon use <code>sort-icon</code> component withinside <code>th</code>s.</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Rows can be styled to suggest their selectability (single or multiple) using the <code>selectable</code> directive, which makes rows show a pointer cursor on hover.</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Visually select individual cells and thus rows.</td>\n</tr>\n<tr>\n<td><code>hover</code></td>\n<td></td>\n<td></td>\n<td>Highlight table row on select. This hovering&apos;s intention is just for the sakeof readability and should not indicate an action.</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Visually disable row content.</td>\n</tr>\n<tr>\n<td><code>altrow</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Alternating row color.</td>\n</tr>\n<tr>\n<td><code>noborder</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Removes cell borders</td>\n</tr>\n<tr>\n<td><code>dottedborder</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Style border from solid to dotted</td>\n</tr>\n<tr>\n<td><code>condensed</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Makes cell padding more compact</td>\n</tr>\n<tr>\n<td><code>vertical-border</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Adds vertical borders</td>\n</tr>\n<tr>\n<td><code>align-center</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the horizontal alignment of the <code>td</code>s or <code>table</code>s content to center</td>\n</tr>\n<tr>\n<td><code>align-right</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the horizontal alignment of the <code>td</code>s or <code>table</code>s content to right</td>\n</tr>\n<tr>\n<td><code>align-bottom</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the vertical alignment of the <code>td</code>s or <code>table</code>s content to bottom</td>\n</tr>\n<tr>\n<td><code>align-middle</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the vertical alignment of the <code>td</code>s or <code>table</code>s content to middle</td>\n</tr>\n<tr>\n<td><code>fixed</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>For tables with toolbars however, layout mode must be set to <code>fixed</code></td>\n</tr>\n<tr>\n<td><code>nowrap</code>, <code>overflow-ellipsis</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>In conjunction with the fixed layout mode, this directive can be used to truncate all cell content which would span more than one line and show an ellipsis to indicate truncated content instead</td>\n</tr>\n<tr>\n<td><code>break-words</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Break words of textual cell content apart. This works best in combination with the <code>fixed</code> layout mode</td>\n</tr>\n</tbody>\n</table>\n'},1061:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">vcl-table</span> <span class="hljs-attr">hover</span> <span class="hljs-attr">altrow</span> <span class="hljs-attr">vertical-border</span> <span class="hljs-attr">align-middle</span> <span class="hljs-attr">fixed</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">"50"</span> <span class="hljs-attr">sort</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"OnSortingDefaultColumn($event)"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Default Column ({{defaultColumnSortName}})<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">sort-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sort-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">"20"</span> <span class="hljs-attr">sort</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Right aligned Column<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">sort-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sort-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">"20"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Centered Column<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">"10"</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Lorem ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span>Sent<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">nowrap</span>&gt;</span>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n        voluptua.<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span>Sent<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">overflow-ellipsis</span>]=<span class="hljs-string">"readMore"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"readMore"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"readMore = false"</span>&gt;</span>Read more<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> Truncated content. Lorem ipsum dolor sit amet, consetetur\n        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n        ut labore et dolore magna aliquyam erat, sed diam voluptua.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">hightlight</span> <span class="hljs-attr">align-center</span>&gt;</span>N/A<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">disabled</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Disabled row.<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">hightlight</span> <span class="hljs-attr">align-center</span>&gt;</span>On hold<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">selectable</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"isSelected = !isSelected"</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"isSelected"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Click to unselect<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">hightlight</span> <span class="hljs-attr">align-center</span>&gt;</span>N/A<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Normal row.<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">hightlight</span> <span class="hljs-attr">align-center</span>&gt;</span>On hold<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>\n'},1062:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'./demo.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TableDemoComponent {\n  isSelected: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">true</span>;\n  defaultColumnSort: <span class="hljs-number">-1</span> | <span class="hljs-number">0</span> | <span class="hljs-number">1</span>;\n  readMore: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">true</span>;\n\n  OnSortingDefaultColumn(sort: <span class="hljs-number">-1</span> | <span class="hljs-number">0</span> | <span class="hljs-number">1</span>): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.defaultColumnSort = sort;\n  }\n\n\n  <span class="hljs-keyword">get</span> defaultColumnSortName(): <span class="hljs-built_in">string</span> {\n    <span class="hljs-keyword">switch</span> (<span class="hljs-keyword">this</span>.defaultColumnSort) {\n      <span class="hljs-keyword">case</span> <span class="hljs-number">-1</span>: {\n        <span class="hljs-keyword">return</span> <span class="hljs-string">\'desc\'</span>;\n      }\n      <span class="hljs-keyword">case</span> <span class="hljs-number">1</span>: {\n        <span class="hljs-keyword">return</span> <span class="hljs-string">\'asc\'</span>;\n      }\n      <span class="hljs-keyword">default</span>: {\n        <span class="hljs-keyword">return</span> <span class="hljs-string">\'none\'</span>;\n      }\n    }\n  }\n\n\n\n}\n'},402:function(n,l,s){"use strict";function a(){return{label:"Table",tabs:{Demo:o,"README.md":{type:"md",content:s(1060)},"demo.component.html":{type:"pre",content:s(1061)},"demo.component.ts":{type:"pre",content:s(1062)}}}}function t(n){return p._28(0,[(n()(),p._6(0,0,null,null,0,"div",[],[[8,"className",0]],null,null,null,null))],null,function(n,l){var s=l.component;n(l,0,0,p._9(1,"vclFloatRight vclIcon fa ",s.faIcon,""))})}function e(n){return p._28(0,[(n()(),p._6(0,0,null,null,1,"sort-icon",[],null,null,null,t,j)),p._5(1,49152,null,0,h,[g.b,p.k],null,null)],null,null)}function u(n){return p._28(0,[(n()(),p._6(0,0,null,null,1,"a",[],null,[[null,"click"]],function(n,l,s){var a=!0,t=n.component;if("click"===l){a=!1!=(t.readMore=!1)&&a}return a},null,null)),(n()(),p._26(-1,null,["Read more"]))],null,null)}function r(n){return p._28(0,[(n()(),p._6(0,0,null,null,164,"table",[["align-middle",""],["altrow",""],["fixed",""],["hover",""],["vcl-table",""],["vertical-border",""]],null,null,null,null,null)),p._5(1,540672,null,0,v,[p.E,p.k],null,null),p._5(2,16384,null,0,C,[p.E,p.k],null,null),p._5(3,540672,null,0,w,[p.E,p.k],{alt:[0,"alt"]},null),p._5(4,540672,null,0,k,[p.E,p.k],{border:[0,"border"]},null),p._5(5,540672,null,0,y,[p.E,p.k],{align:[0,"align"]},null),p._5(6,540672,null,0,S,[p.E,p.k],{fixed:[0,"fixed"]},null),(n()(),p._26(-1,null,["\n  "])),(n()(),p._6(8,0,null,null,39,"thead",[],null,null,null,null,null)),(n()(),p._26(-1,null,["\n    "])),(n()(),p._6(10,0,null,null,36,"tr",[],null,null,null,null,null)),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(12,0,null,null,10,"th",[["sort",""]],null,[[null,"change"],[null,"click"]],function(n,l,s){var a=!0,t=n.component;if("click"===l){a=!1!==p._20(n,14).OnChangeOrder()&&a}if("change"===l){a=!1!==t.OnSortingDefaultColumn(s)&&a}return a},null,null)),p._5(13,1589248,null,0,E,[p.E,p.k],{width:[0,"width"]},null),p._5(14,16384,null,1,O,[p.E,p.k],null,{change:"change"}),p._24(335544320,1,{sortIconComponent:0}),(n()(),p._26(-1,null,["\n        "])),(n()(),p._6(17,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),p._26(18,null,["Default Column (",")"])),(n()(),p._26(-1,null,["\n        "])),(n()(),p._6(20,0,null,null,1,"sort-icon",[],null,null,null,t,j)),p._5(21,49152,[[1,4]],0,h,[g.b,p.k],null,null),(n()(),p._26(-1,null,["\n      "])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(24,0,null,null,10,"th",[["sort",""]],null,[[null,"click"]],function(n,l,s){var a=!0;if("click"===l){a=!1!==p._20(n,26).OnChangeOrder()&&a}return a},null,null)),p._5(25,1589248,null,0,E,[p.E,p.k],{width:[0,"width"]},null),p._5(26,16384,null,1,O,[p.E,p.k],null,null),p._24(335544320,2,{sortIconComponent:0}),(n()(),p._26(-1,null,["\n        "])),(n()(),p._6(29,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),p._26(-1,null,["Right aligned Column"])),(n()(),p._26(-1,null,["\n        "])),(n()(),p._6(32,0,null,null,1,"sort-icon",[],null,null,null,t,j)),p._5(33,49152,[[2,4]],0,h,[g.b,p.k],null,null),(n()(),p._26(-1,null,["\n      "])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(36,0,null,null,5,"th",[],null,null,null,null,null)),p._5(37,1589248,null,0,E,[p.E,p.k],{width:[0,"width"]},null),(n()(),p._26(-1,null,["\n        "])),(n()(),p._6(39,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),p._26(-1,null,["Centered Column"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(43,0,null,null,2,"th",[],null,null,null,null,null)),p._5(44,1589248,null,0,E,[p.E,p.k],{width:[0,"width"]},null),(n()(),p._26(-1,null,["\n      "])),(n()(),p._26(-1,null,["\n    "])),(n()(),p._26(-1,null,["\n  "])),(n()(),p._26(-1,null,["\n  "])),(n()(),p._6(49,0,null,null,114,"tbody",[],null,null,null,null,null)),(n()(),p._26(-1,null,["\n    "])),(n()(),p._6(51,0,null,null,15,"tr",[],null,null,null,null,null)),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(53,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),p._26(-1,null,["Lorem ipsum"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(56,0,null,null,2,"td",[],null,null,null,null,null)),p._5(57,540672,null,0,T,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["11.000"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(60,0,null,null,2,"td",[["align-center",""]],null,null,null,null,null)),p._5(61,540672,null,0,x,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["Sent"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(64,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),p._5(65,540672,null,0,x,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["\n    "])),(n()(),p._26(-1,null,["\n    "])),(n()(),p._6(68,0,null,null,16,"tr",[],null,null,null,null,null)),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(70,0,null,null,2,"td",[["nowrap",""]],null,null,null,null,null)),p._5(71,540672,null,0,D,[p.E,p.k],{nowrap:[0,"nowrap"]},null),(n()(),p._26(-1,null,["Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n        voluptua."])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(74,0,null,null,2,"td",[],null,null,null,null,null)),p._5(75,540672,null,0,T,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["11.000"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(78,0,null,null,2,"td",[["align-center",""]],null,null,null,null,null)),p._5(79,540672,null,0,x,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["Sent"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(82,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),p._5(83,540672,null,0,x,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["\n    "])),(n()(),p._26(-1,null,["\n    "])),(n()(),p._6(86,0,null,null,19,"tr",[],null,null,null,null,null)),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(88,0,null,null,4,"td",[],null,null,null,null,null)),p._5(89,540672,null,0,I,[p.E,p.k],{ellipsis:[0,"ellipsis"]},null),(n()(),p._1(16777216,null,null,1,null,u)),p._5(91,16384,null,0,A.l,[p.P,p.M],{ngIf:[0,"ngIf"]},null),(n()(),p._26(-1,null,[" Truncated content. Lorem ipsum dolor sit amet, consetetur\n        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n        ut labore et dolore magna aliquyam erat, sed diam voluptua.\n      "])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(94,0,null,null,2,"td",[],null,null,null,null,null)),p._5(95,540672,null,0,T,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["11.000"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(98,0,null,null,3,"td",[["align-center",""],["hightlight",""]],null,null,null,null,null)),p._5(99,540672,null,0,N,[p.E,p.k],{hightlight:[0,"hightlight"]},null),p._5(100,540672,null,0,x,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["N/A"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(103,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),p._5(104,540672,null,0,x,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["\n    "])),(n()(),p._26(-1,null,["\n    "])),(n()(),p._6(107,0,null,null,17,"tr",[["disabled",""]],null,null,null,null,null)),p._5(108,540672,null,0,M,[p.E,p.k],{disabled:[0,"disabled"]},null),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(110,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),p._26(-1,null,["Disabled row."])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(113,0,null,null,2,"td",[],null,null,null,null,null)),p._5(114,540672,null,0,T,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["11.000"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(117,0,null,null,3,"td",[["align-center",""],["hightlight",""]],null,null,null,null,null)),p._5(118,540672,null,0,N,[p.E,p.k],{hightlight:[0,"hightlight"]},null),p._5(119,540672,null,0,x,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["On hold"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(122,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),p._5(123,540672,null,0,x,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["\n    "])),(n()(),p._26(-1,null,["\n    "])),(n()(),p._6(126,0,null,null,18,"tr",[["selectable",""]],null,[[null,"click"]],function(n,l,s){var a=!0,t=n.component;if("click"===l){a=!1!=(t.isSelected=!t.isSelected)&&a}return a},null,null)),p._5(127,540672,null,0,R,[p.E,p.k],{selected:[0,"selected"]},null),p._5(128,540672,null,0,q,[p.E,p.k],{selectable:[0,"selectable"]},null),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(130,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),p._26(-1,null,["Click to unselect"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(133,0,null,null,2,"td",[],null,null,null,null,null)),p._5(134,540672,null,0,T,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["11.000"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(137,0,null,null,3,"td",[["align-center",""],["hightlight",""]],null,null,null,null,null)),p._5(138,540672,null,0,N,[p.E,p.k],{hightlight:[0,"hightlight"]},null),p._5(139,540672,null,0,x,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["N/A"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(142,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),p._5(143,540672,null,0,x,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["\n    "])),(n()(),p._26(-1,null,["\n    "])),(n()(),p._6(146,0,null,null,16,"tr",[],null,null,null,null,null)),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(148,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),p._26(-1,null,["Normal row."])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(151,0,null,null,2,"td",[],null,null,null,null,null)),p._5(152,540672,null,0,T,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["11.000"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(155,0,null,null,3,"td",[["align-center",""],["hightlight",""]],null,null,null,null,null)),p._5(156,540672,null,0,N,[p.E,p.k],{hightlight:[0,"hightlight"]},null),p._5(157,540672,null,0,x,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["On hold"])),(n()(),p._26(-1,null,["\n      "])),(n()(),p._6(160,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),p._5(161,540672,null,0,x,[p.E,p.k],{align:[0,"align"]},null),(n()(),p._26(-1,null,["\n    "])),(n()(),p._26(-1,null,["\n  "])),(n()(),p._26(-1,null,["\n"])),(n()(),p._26(-1,null,["\n"]))],function(n,l){var s=l.component;n(l,3,0,"");n(l,4,0,"");n(l,5,0,"");n(l,6,0,"");n(l,13,0,50);n(l,25,0,20);n(l,37,0,20);n(l,44,0,10);n(l,57,0,!0);n(l,61,0,"");n(l,65,0,"");n(l,71,0,"");n(l,75,0,!0);n(l,79,0,"");n(l,83,0,""),n(l,89,0,s.readMore),n(l,91,0,s.readMore);n(l,95,0,!0);n(l,99,0,"");n(l,100,0,"");n(l,104,0,"");n(l,108,0,"");n(l,114,0,!0);n(l,118,0,"");n(l,119,0,"");n(l,123,0,""),n(l,127,0,s.isSelected);n(l,128,0,"");n(l,134,0,!0);n(l,138,0,"");n(l,139,0,"");n(l,143,0,"");n(l,152,0,!0);n(l,156,0,"");n(l,157,0,"");n(l,161,0,"")},function(n,l){n(l,18,0,l.component.defaultColumnSortName)})}function c(n){return p._28(0,[(n()(),p._6(0,0,null,null,1,"ng-component",[],null,null,null,r,L)),p._5(1,49152,null,0,o,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var p=s(3),o=function(){function n(){this.isSelected=!0,this.readMore=!0}return n.prototype.OnSortingDefaultColumn=function(n){this.defaultColumnSort=n},Object.defineProperty(n.prototype,"defaultColumnSortName",{get:function(){switch(this.defaultColumnSort){case-1:return"desc";case 1:return"asc";default:return"none"}},enumerable:!0,configurable:!0}),n}(),i={demo:a},d=function(){function n(){}return n}(),h=function(){function n(n,l){this.document=n,this.element=l,this.faIcon="fa-sort"}return n.prototype.ChangeSortOrder=function(n){switch(n){case 1:this.faIcon="fa-sort-up";break;case-1:this.faIcon="fa-sort-down";break;default:this.faIcon="fa-sort"}},n}(),g=s(31),m=[],j=p._4({encapsulation:2,styles:m,data:{}}),_=p._2("sort-icon",h,e,{sort:"sort"},{},[]),b=s(416),f=function(){function n(n,l){this.renderer=n,this.el=l}return n.prototype.ClassToggle=function(n,l,s){return this.el.nativeElement.localName!=s&&s?(console.error(n+" can only be used on "+s+" tag!"),!1):""===l||l?("table"==s&&"vclTable"!=n&&this.addClass("vclTable"),this.addClass(n)):this.removeClass(n)},n.prototype.addClass=function(n){return this.renderer.addClass(this.el.nativeElement,n),!0},n.prototype.removeClass=function(n){return this.renderer.removeClass(this.el.nativeElement,n),!1},n}(),v=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.alt&&(this.selectable=this.tableService.ClassToggle("vclTable",this.selectable,"table"))},n}(),C=function(){function n(n,l){this.renderer=n,this.el=l,"table"==this.el.nativeElement.localName?n.addClass(l.nativeElement,"vclRowHoverHighlight"):console.error("[hover] should be used for table tag only!")}return n}(),w=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.alt&&(this.alt=this.tableService.ClassToggle("vclAltRowColor",this.alt,"table"))},n}(),k=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.border&&(this.border=this.tableService.ClassToggle("vclVerticalBorder",this.border,"table"))},n}(),y=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.align&&(this.align=this.tableService.ClassToggle("vclVAlignMiddle",this.align,""))},n}(),S=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.fixed&&(this.fixed=this.tableService.ClassToggle("vclFixed",this.fixed,"table"))},n}(),E=function(){function n(n,l){this.renderer=n,this.el=l}return n.prototype.ngOnChanges=function(n){n.width&&this.ngAfterContentInit()},n.prototype.ngAfterContentInit=function(){if("th"==this.el.nativeElement.localName){var n="vclSpan-"+this.width+"p";this.renderer.addClass(this.el.nativeElement,n)}else console.error("Column width can be set only for header tag!")},n}(),O=function(){function n(n,l){this.renderer=n,this.el=l,this.change=new p.m,this.isHeader=!1,this.tableService=new f(n,l),this.isHeader=this.tableService.ClassToggle("vclSortableCol",!0,"th")&&this.tableService.ClassToggle("vclClearFix",!0,"th")}return n.prototype.OnChangeOrder=function(){if(this.isHeader)switch(this.order=1==this.order?-1:1,this.change.emit(this.order),this.order){case 1:this.renderer.removeClass(this.el.nativeElement,"vclClearFix"),this.renderer.removeClass(this.el.nativeElement,"vclSortDesc"),this.renderer.addClass(this.el.nativeElement,"vclSortAsc"),this.sortIconComponent&&this.sortIconComponent.ChangeSortOrder(1);break;case-1:this.renderer.removeClass(this.el.nativeElement,"vclSortAsc"),this.renderer.addClass(this.el.nativeElement,"vclSortDesc"),this.sortIconComponent&&this.sortIconComponent.ChangeSortOrder(-1)}},n}(),T=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.align&&(this.align=this.tableService.ClassToggle("vclAlignRight",this.align,"td"))},n}(),x=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.align&&(this.align=this.tableService.ClassToggle("vclAlignCentered",this.align,"td"))},n}(),D=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.nowrap&&(this.nowrap=this.tableService.ClassToggle("vclNoWrap",this.nowrap,"td"))},n}(),I=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.ellipsis&&(this.ellipsis=this.tableService.ClassToggle("vclOverflowEllipsis",this.ellipsis,"td"))},n}(),A=s(22),N=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.hightlight&&(this.hightlight=this.tableService.ClassToggle("vclCellHighlight",this.hightlight,"td"))},n}(),M=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.disabled&&(this.disabled=this.tableService.ClassToggle("vclDisabled",this.disabled,"tr"))},n}(),R=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.selected&&(this.selected=this.tableService.ClassToggle("vclSelected",this.selected,"tr"))},n}(),q=function(){function n(n,l){this.renderer=n,this.el=l,this.tableService=new f(n,l)}return n.prototype.ngOnChanges=function(n){n.alt&&(this.selectable=this.tableService.ClassToggle("vclRowSelectability",this.selectable,"tr"))},n}(),H=[],L=p._4({encapsulation:2,styles:H,data:{}}),F=p._2("ng-component",o,c,{},{},[]),V=s(185),P=s(76),z=s(415),B=s(417),U=s(659),J=s(36),W=s(414);s.d(l,"TableDemoModuleNgFactory",function(){return Y});var Y=p._3(d,[],function(n){return p._17([p._18(512,p.j,p.Z,[[8,[_,b.a,F]],[3,p.j],p.w]),p._18(4608,A.n,A.m,[p.t,[2,A.t]]),p._18(512,A.c,A.c,[]),p._18(512,V.a,V.a,[]),p._18(512,P.d,P.d,[]),p._18(512,z.a,z.a,[]),p._18(512,B.a,B.a,[]),p._18(512,U.a,U.a,[]),p._18(512,J.m,J.m,[[2,J.r],[2,J.l]]),p._18(512,d,d,[]),p._18(1024,J.j,function(){return[[{path:"",component:W.a,data:i}]]},[])])})}});