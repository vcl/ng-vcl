(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"21eT":function(a,l){a.exports='<h1 id="vcl-calendar">vcl-calendar</h1>\n<p>A calendar to display and select dates</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLCalendarModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLCalendarModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><code>&lt;vcl-calendar [date]=&quot;date&quot;&gt;&lt;/vcl-calendar&gt;</code></pre>\n<h3 id="date-representation">Date representation</h3>\n<p>The calendar uses the <code>VCLDateAdapter</code> for date representation.<br>Check the <a href="#/dateadapter"><code>VCLDateAdapter</code> docs</a> for further information.</p>\n<h3 id="vcl-calendar-selectionmode">vcl-calendar selectionMode</h3>\n<p>The calendar supports a variety of selection modes. The default <code>selectionMode</code> is <code>date</code></p>\n<ul>\n<li><code>date</code> Can select a single dates</li>\n<li><code>range</code> Can select a date range with a starting and ending date (see <code>VCLDateRange</code> interface)</li>\n<li><code>month</code> Can a single month</li>\n<li><code>month-multiple</code> Can select a single dates</li>\n<li><code>month-multiple</code> Can select multiple months </li>\n<li><code>month-range</code> Can a month range with a starting and ending month (see <code>VCLDateRange</code> interface)</li>\n</ul>\n<h3 id="api">API</h3>\n<h4 id="vcl-calendar-attributes">vcl-calendar attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>VCLDate | VCLDate[] | VCLDateRange<vcldate></vcldate></td>\n<td></td>\n<td>Selected date(s)/date range in the calendar</td>\n</tr>\n<tr>\n<td><code>viewDate</code></td>\n<td>VCLDate</td>\n<td>today</td>\n<td>The currently shown date in the calendar</td>\n</tr>\n<tr>\n<td><code>minDate</code></td>\n<td>VCLDate</td>\n<td></td>\n<td>Minimum selectable date</td>\n</tr>\n<tr>\n<td><code>maxDate</code></td>\n<td>VCLDate</td>\n<td></td>\n<td>Maximum selectable date</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the calendar when true</td>\n</tr>\n<tr>\n<td><code>available</code></td>\n<td>VCLDate | VCLDate[] | VCLDateRange<vcldate></vcldate></td>\n<td></td>\n<td>Marks dates as available</td>\n</tr>\n<tr>\n<td><code>unavailable</code></td>\n<td>VCLDate | VCLDate[] | VCLDateRange<vcldate></vcldate></td>\n<td></td>\n<td>Marks dates as unavailable</td>\n</tr>\n<tr>\n<td><code>selectionMode</code></td>\n<td>VCLCalendarSelectionMode</td>\n<td></td>\n<td>See selectionMode description</td>\n</tr>\n<tr>\n<td><code>showWeekOfTheYear</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Show of the year when true</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-calendar-events">vcl-calendar events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>VCLDate | VCLDate[] | VCLDateRange<vcldate></vcldate></td>\n<td>Triggered when a new date is selected</td>\n</tr>\n<tr>\n<td><code>viewDateChange</code></td>\n<td>VCLDate</td>\n<td>Triggered when the viewDate changes</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-calendar-interfaces">vcl-calendar interfaces</h4>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> VCLCalendarSelectionMode = <span class="hljs-string">&apos;date&apos;</span> | <span class="hljs-string">&apos;multiple&apos;</span> | <span class="hljs-string">&apos;range&apos;</span> | <span class="hljs-string">&apos;month&apos;</span> | <span class="hljs-string">&apos;month-multiple&apos;</span> | <span class="hljs-string">&apos;month-range&apos;</span>;\n\n<span class="hljs-keyword">interface</span> VCLDateRange&lt;VCLDate&gt; {\n  start: VCLDate;\n  end: VCLDate;\n}</pre>\n'},"C6B+":function(a,l,n){"use strict";n.r(l);var s=n("8Y7J");n("19H1");class e{constructor(a){this.dateAdapter=a,this.today=this.dateAdapter.today(),this.viewDate=new Date(2019,2,1),this.available={start:new Date(2019,2,1),end:new Date(2019,2,31)},this.unavailable=this.dateAdapter.always()}}const t={demo:function(){return{label:"Calendar",tabs:{Demo:e,"README.md":{type:"md",content:n("21eT")},"demo.component.html":{type:"pre",content:n("HThc")},"demo.component.ts":{type:"pre",content:n("rR98")}}}}};class c{}var p=n("pMnS"),d=n("8Ip6"),r=n("slit"),o=n("6B8K"),u=n("lD/8"),h=n("VSXH"),i=n("SVse"),b=n("T1Ne"),g=s.pb({encapsulation:2,styles:[],data:{}});function v(a){return s.Mb(0,[(a()(),s.rb(0,0,null,null,8,"div",[["class","vclDGRow"],["vclCalendarFooter",""]],null,null,null,null,null)),(a()(),s.rb(1,0,null,null,7,"div",[["class","vclDGCell vclToolbar"]],null,null,null,null,null)),(a()(),s.rb(2,0,null,null,6,"div",[["class","vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter"],["role","menubar"]],null,null,null,null,null)),(a()(),s.rb(3,0,null,null,2,"button",[["class","vclTransparent vclLayoutFlex"],["type","button"],["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(a,l,n){var e=!0,t=a.component;return"mouseenter"===l&&(e=!1!==s.Db(a,4).onMouseEnter()&&e),"mouseleave"===l&&(e=!1!==s.Db(a,4).onMouseLeave()&&e),"click"===l&&(e=!1!==s.Db(a,4).onClick()&&e),"focus"===l&&(e=!1!==s.Db(a,4).onFocus()&&e),"blur"===l&&(e=!1!==s.Db(a,4).onBlur()&&e),"click"===l&&(e=!1!==(s.Db(a.parent,41).viewDate=t.today)&&e),e},r.b,r.a)),s.qb(4,49152,null,0,o.b,[s.h,s.k,[3,o.a]],{type:[0,"type"]},null),(a()(),s.Kb(-1,0,[" go to today "])),(a()(),s.rb(6,0,null,null,2,"button",[["class","vclTransparent vclLayoutFlex"],["type","button"],["vcl-square-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(a,l,n){var e=!0;return"mouseenter"===l&&(e=!1!==s.Db(a,7).onMouseEnter()&&e),"mouseleave"===l&&(e=!1!==s.Db(a,7).onMouseLeave()&&e),"click"===l&&(e=!1!==s.Db(a,7).onClick()&&e),"focus"===l&&(e=!1!==s.Db(a,7).onFocus()&&e),"blur"===l&&(e=!1!==s.Db(a,7).onBlur()&&e),"click"===l&&(e=!1!==(s.Db(a.parent,41).viewDate=s.Db(a.parent,41).date)&&e),e},r.b,r.a)),s.qb(7,49152,null,0,o.b,[s.h,s.k,[3,o.a]],{type:[0,"type"]},null),(a()(),s.Kb(-1,0,[" go to selected "]))],function(a,l){a(l,4,0,"button"),a(l,7,0,"button")},function(a,l){a(l,3,0,s.Db(l,4).classVCLSquare,s.Db(l,4).attrType,s.Db(l,4).isDisabled,s.Db(l,4).isDisabled,s.Db(l,4)._hostClasses,s.Db(l,4).hovered,s.Db(l,4).selectable,s.Db(l,4).selected),a(l,6,0,s.Db(l,7).classVCLSquare,s.Db(l,7).attrType,s.Db(l,7).isDisabled,s.Db(l,7).isDisabled,s.Db(l,7)._hostClasses,s.Db(l,7).hovered,s.Db(l,7).selectable,s.Db(l,7).selected)})}function j(a){return s.Mb(0,[(a()(),s.rb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(a()(),s.Kb(-1,null,["Basic calendar"])),(a()(),s.rb(2,0,null,null,1,"vcl-calendar",[],[[2,"vclDataGrid",null],[2,"vclDGVAlignMiddle",null],[2,"vclDGAlignCentered",null],[2,"vclCalendar",null],[2,"vclCalInput",null]],[[null,"valueChange"]],function(a,l,n){var s=!0;return"valueChange"===l&&(s=!1!==(a.component.date=n)&&s),s},u.b,u.a)),s.qb(3,114688,null,0,h.a,[h.b],{value:[0,"value"]},{valueChange:"valueChange"}),(a()(),s.Kb(4,null,["\nValue: "," "])),(a()(),s.rb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(a()(),s.Kb(-1,null,['Calendar (selectionMode="range")'])),(a()(),s.rb(7,0,null,null,1,"vcl-calendar",[["selectionMode","range"]],[[2,"vclDataGrid",null],[2,"vclDGVAlignMiddle",null],[2,"vclDGAlignCentered",null],[2,"vclCalendar",null],[2,"vclCalInput",null]],[[null,"valueChange"]],function(a,l,n){var s=!0;return"valueChange"===l&&(s=!1!==(a.component.dateRange=n)&&s),s},u.b,u.a)),s.qb(8,114688,null,0,h.a,[h.b],{value:[0,"value"],selectionMode:[1,"selectionMode"]},{valueChange:"valueChange"}),(a()(),s.Kb(9,null,["\nValue: "," - "," "])),(a()(),s.rb(10,0,null,null,1,"h3",[],null,null,null,null,null)),(a()(),s.Kb(-1,null,['Calendar (selectionMode="multiple")'])),(a()(),s.rb(12,0,null,null,1,"vcl-calendar",[["selectionMode","multiple"]],[[2,"vclDataGrid",null],[2,"vclDGVAlignMiddle",null],[2,"vclDGAlignCentered",null],[2,"vclCalendar",null],[2,"vclCalInput",null]],[[null,"valueChange"]],function(a,l,n){var s=!0;return"valueChange"===l&&(s=!1!==(a.component.dateArray=n)&&s),s},u.b,u.a)),s.qb(13,114688,null,0,h.a,[h.b],{value:[0,"value"],selectionMode:[1,"selectionMode"]},{valueChange:"valueChange"}),(a()(),s.Kb(14,null,["\nValue: "," "])),(a()(),s.rb(15,0,null,null,1,"h3",[],null,null,null,null,null)),(a()(),s.Kb(-1,null,['Calendar (selectionMode="month")'])),(a()(),s.rb(17,0,null,null,1,"vcl-calendar",[["selectionMode","month"]],[[2,"vclDataGrid",null],[2,"vclDGVAlignMiddle",null],[2,"vclDGAlignCentered",null],[2,"vclCalendar",null],[2,"vclCalInput",null]],[[null,"valueChange"]],function(a,l,n){var s=!0;return"valueChange"===l&&(s=!1!==(a.component.month=n)&&s),s},u.b,u.a)),s.qb(18,114688,null,0,h.a,[h.b],{value:[0,"value"],selectionMode:[1,"selectionMode"]},{valueChange:"valueChange"}),(a()(),s.Kb(19,null,["\nValue: "," "])),(a()(),s.rb(20,0,null,null,1,"h3",[],null,null,null,null,null)),(a()(),s.Kb(-1,null,['Calendar (selectionMode="month-range")'])),(a()(),s.rb(22,0,null,null,1,"vcl-calendar",[["selectionMode","month-range"]],[[2,"vclDataGrid",null],[2,"vclDGVAlignMiddle",null],[2,"vclDGAlignCentered",null],[2,"vclCalendar",null],[2,"vclCalInput",null]],[[null,"valueChange"]],function(a,l,n){var s=!0;return"valueChange"===l&&(s=!1!==(a.component.monthRange=n)&&s),s},u.b,u.a)),s.qb(23,114688,null,0,h.a,[h.b],{value:[0,"value"],selectionMode:[1,"selectionMode"]},{valueChange:"valueChange"}),(a()(),s.Kb(24,null,["\nValue: "," - "," "])),(a()(),s.rb(25,0,null,null,1,"h3",[],null,null,null,null,null)),(a()(),s.Kb(-1,null,['Calendar (selectionMode="month-multiple")'])),(a()(),s.rb(27,0,null,null,1,"vcl-calendar",[["selectionMode","month-multiple"]],[[2,"vclDataGrid",null],[2,"vclDGVAlignMiddle",null],[2,"vclDGAlignCentered",null],[2,"vclCalendar",null],[2,"vclCalInput",null]],[[null,"valueChange"]],function(a,l,n){var s=!0;return"valueChange"===l&&(s=!1!==(a.component.monthArray=n)&&s),s},u.b,u.a)),s.qb(28,114688,null,0,h.a,[h.b],{value:[0,"value"],selectionMode:[1,"selectionMode"]},{valueChange:"valueChange"}),(a()(),s.Kb(29,null,["\nValue: "," "])),(a()(),s.rb(30,0,null,null,1,"h3",[],null,null,null,null,null)),(a()(),s.Kb(-1,null,["Calendar (disabled)"])),(a()(),s.rb(32,0,null,null,1,"vcl-calendar",[],[[2,"vclDataGrid",null],[2,"vclDGVAlignMiddle",null],[2,"vclDGAlignCentered",null],[2,"vclCalendar",null],[2,"vclCalInput",null]],null,null,u.b,u.a)),s.qb(33,114688,null,0,h.a,[h.b],{disabled:[0,"disabled"]},null),(a()(),s.rb(34,0,null,null,1,"h3",[],null,null,null,null,null)),(a()(),s.Kb(-1,null,["Calendar with (un)available dates"])),(a()(),s.rb(36,0,null,null,1,"vcl-calendar",[],[[2,"vclDataGrid",null],[2,"vclDGVAlignMiddle",null],[2,"vclDGAlignCentered",null],[2,"vclCalendar",null],[2,"vclCalInput",null]],null,null,u.b,u.a)),s.qb(37,114688,null,0,h.a,[h.b],{available:[0,"available"],unavailable:[1,"unavailable"],viewDate:[2,"viewDate"]},null),(a()(),s.rb(38,0,null,null,1,"h3",[],null,null,null,null,null)),(a()(),s.Kb(-1,null,["Calendar with custom footer"])),(a()(),s.rb(40,0,null,null,3,"vcl-calendar",[],[[2,"vclDataGrid",null],[2,"vclDGVAlignMiddle",null],[2,"vclDGAlignCentered",null],[2,"vclCalendar",null],[2,"vclCalInput",null]],null,null,u.b,u.a)),s.qb(41,114688,[["calendar",4]],0,h.a,[h.b],null,null),(a()(),s.gb(16777216,null,1,1,null,v)),s.qb(43,16384,null,0,i.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null)],function(a,l){var n=l.component;a(l,3,0,n.date),a(l,8,0,n.dateRange,"range"),a(l,13,0,n.dateArray,"multiple"),a(l,18,0,n.month,"month"),a(l,23,0,n.monthRange,"month-range"),a(l,28,0,n.monthArray,"month-multiple"),a(l,33,0,!0),a(l,37,0,n.available,n.unavailable,n.viewDate),a(l,41,0),a(l,43,0,"month"===s.Db(l,41).view)},function(a,l){var n=l.component;a(l,2,0,s.Db(l,3)._calendarHostClasses,s.Db(l,3)._calendarHostClasses,s.Db(l,3)._calendarHostClasses,s.Db(l,3)._calendarHostClasses,s.Db(l,3)._calendarHostClasses),a(l,4,0,n.date),a(l,7,0,s.Db(l,8)._calendarHostClasses,s.Db(l,8)._calendarHostClasses,s.Db(l,8)._calendarHostClasses,s.Db(l,8)._calendarHostClasses,s.Db(l,8)._calendarHostClasses),a(l,9,0,null==n.dateRange?null:n.dateRange.start,null==n.dateRange?null:n.dateRange.end),a(l,12,0,s.Db(l,13)._calendarHostClasses,s.Db(l,13)._calendarHostClasses,s.Db(l,13)._calendarHostClasses,s.Db(l,13)._calendarHostClasses,s.Db(l,13)._calendarHostClasses),a(l,14,0,n.dateArray),a(l,17,0,s.Db(l,18)._calendarHostClasses,s.Db(l,18)._calendarHostClasses,s.Db(l,18)._calendarHostClasses,s.Db(l,18)._calendarHostClasses,s.Db(l,18)._calendarHostClasses),a(l,19,0,n.month),a(l,22,0,s.Db(l,23)._calendarHostClasses,s.Db(l,23)._calendarHostClasses,s.Db(l,23)._calendarHostClasses,s.Db(l,23)._calendarHostClasses,s.Db(l,23)._calendarHostClasses),a(l,24,0,null==n.monthRange?null:n.monthRange.start,null==n.monthRange?null:n.monthRange.end),a(l,27,0,s.Db(l,28)._calendarHostClasses,s.Db(l,28)._calendarHostClasses,s.Db(l,28)._calendarHostClasses,s.Db(l,28)._calendarHostClasses,s.Db(l,28)._calendarHostClasses),a(l,29,0,n.monthArray),a(l,32,0,s.Db(l,33)._calendarHostClasses,s.Db(l,33)._calendarHostClasses,s.Db(l,33)._calendarHostClasses,s.Db(l,33)._calendarHostClasses,s.Db(l,33)._calendarHostClasses),a(l,36,0,s.Db(l,37)._calendarHostClasses,s.Db(l,37)._calendarHostClasses,s.Db(l,37)._calendarHostClasses,s.Db(l,37)._calendarHostClasses,s.Db(l,37)._calendarHostClasses),a(l,40,0,s.Db(l,41)._calendarHostClasses,s.Db(l,41)._calendarHostClasses,s.Db(l,41)._calendarHostClasses,s.Db(l,41)._calendarHostClasses,s.Db(l,41)._calendarHostClasses)})}function m(a){return s.Mb(0,[(a()(),s.rb(0,0,null,null,1,"ng-component",[],null,null,null,j,g)),s.qb(1,49152,null,0,e,[b.a],null,null)],null,null)}var C=s.nb("ng-component",e,m,{},{},[]),D=n("POq0"),y=n("dy60"),w=n("tfYh"),M=n("4+xd"),V=n("CwIP"),f=n("px6G"),_=n("MTt7"),H=n("zMNK"),L=n("p/eS"),A=n("2FIb"),k=n("61Fc"),R=n("g2Nb"),G=n("hyVG"),B=n("pSq7"),q=n("QHdq"),T=n("iInd"),K=n("PNUx");n.d(l,"CalendarDemoModuleNgFactory",function(){return x});var x=s.ob(c,[],function(a){return s.Ab([s.Bb(512,s.j,s.Z,[[8,[p.a,d.a,C]],[3,s.j],s.w]),s.Bb(4608,i.n,i.m,[s.t,[2,i.A]]),s.Bb(4608,D.a,D.a,[]),s.Bb(4608,y.a,y.a,[[2,w.a]]),s.Bb(4608,b.a,M.a,[V.a,b.b,[2,s.t],[2,f.b]]),s.Bb(5120,h.b,function(a,l,n,s,e,t){return[new _.c(a),new _.a(l),new _.b(n),new _.f(s),new _.d(e),new _.e(t)]},[b.a,b.a,b.a,b.a,b.a,b.a]),s.Bb(1073742336,i.c,i.c,[]),s.Bb(1073742336,H.e,H.e,[]),s.Bb(1073742336,D.b,D.b,[]),s.Bb(1073742336,L.a,L.a,[]),s.Bb(1073742336,A.a,A.a,[]),s.Bb(1073742336,k.c,k.c,[]),s.Bb(1073742336,R.a,R.a,[]),s.Bb(1073742336,G.a,G.a,[]),s.Bb(1073742336,B.a,B.a,[]),s.Bb(1073742336,q.b,q.b,[]),s.Bb(1073742336,T.q,T.q,[[2,T.v],[2,T.m]]),s.Bb(1073742336,c,c,[]),s.Bb(256,b.b,0,[]),s.Bb(256,V.a,V.b,[]),s.Bb(1024,T.i,function(){return[[{path:"",component:K.a,data:t}]]},[])])})},HThc:function(a,l){a.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic calendar<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"date"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\nValue: {{date}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Calendar (selectionMode="range")<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"dateRange"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"range"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\nValue: {{dateRange?.start}} - {{dateRange?.end}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Calendar (selectionMode="multiple")<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"dateArray"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"multiple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\nValue: {{dateArray}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Calendar (selectionMode="month")<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"month"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"month"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\nValue: {{month}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Calendar (selectionMode="month-range")<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"monthRange"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"month-range"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\nValue: {{monthRange?.start}} - {{monthRange?.end}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Calendar (selectionMode="month-multiple")<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"monthArray"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"month-multiple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\nValue: {{monthArray}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Calendar (disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Calendar with (un)available dates<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [<span class="hljs-attr">available</span>]=<span class="hljs-string">"available"</span> [<span class="hljs-attr">unavailable</span>]=<span class="hljs-string">"unavailable"</span> [<span class="hljs-attr">viewDate</span>]=<span class="hljs-string">"viewDate"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Calendar with custom footer<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> #<span class="hljs-attr">calendar</span>=<span class="hljs-string">"vclCalendar"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclCalendarFooter</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclDGRow"</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"calendar.view === \'month\'"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclDGCell vclToolbar"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"menubar"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclTransparent vclLayoutFlex"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"calendar.viewDate = today"</span>&gt;</span>\n          go to today\n        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclTransparent vclLayoutFlex"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"calendar.viewDate = calendar.date"</span>&gt;</span>\n          go to selected\n        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\n'},rR98:function(a,l){a.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { VCLDateRange, VCLDateAdapter } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> CalendarDemoComponent {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> dateAdapter: VCLDateAdapter&lt;<span class="hljs-built_in">Date</span>&gt;</span>) { }\n\n  date: <span class="hljs-built_in">Date</span>;\n  dateRange: VCLDateRange&lt;<span class="hljs-built_in">Date</span>&gt;;\n  dateArray: <span class="hljs-built_in">Date</span>[];\n\n  month: <span class="hljs-built_in">Date</span>;\n  monthRange: VCLDateRange&lt;<span class="hljs-built_in">Date</span>&gt;;\n  monthArray: <span class="hljs-built_in">Date</span>[];\n\n  today = <span class="hljs-keyword">this</span>.dateAdapter.today();\n\n  viewDate = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2019</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>);\n\n  available = {\n    start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2019</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>),\n    end: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2019</span>, <span class="hljs-number">2</span>, <span class="hljs-number">31</span>),\n  };\n\n  unavailable = <span class="hljs-keyword">this</span>.dateAdapter.always();\n}\n'}}]);