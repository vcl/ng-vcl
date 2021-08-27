"use strict";(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[387],{92387:function(n,l,a){a.r(l),a.d(l,{TabNavDemoModule:function(){return r},demo:function(){return s}});var t=a(16274),e=a(95454),b=a(36196),c=a(62518),v=a(84271),o=a(28711),T=a(54283),Z=a(67811);let u=(()=>{class n{constructor(){this.tabIndex=0}}return n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=v.Xpm({type:n,selectors:[["ng-component"]],decls:89,vars:8,consts:[[3,"disabled"],["layout","right","tabContentClass","vclSpan-70p","tabsClass","vclSpan-30p"],["layout","left","tabContentClass","vclSpan-70p","tabsClass","vclSpan-30p"],["borders","true"],[3,"selectedTabIndex","selectedTabIndexChange"]],template:function(n,l){1&n&&(v.TgZ(0,"h3"),v._uU(1,"Default"),v.qZA(),v.TgZ(2,"vcl-tab-nav"),v.TgZ(3,"vcl-tab"),v.TgZ(4,"vcl-label"),v._uU(5,"Tab1"),v.qZA(),v._uU(6," Content1 "),v.qZA(),v.TgZ(7,"vcl-tab"),v.TgZ(8,"vcl-label"),v._uU(9,"Tab2"),v.qZA(),v._uU(10," Content2 "),v.qZA(),v.TgZ(11,"vcl-tab",0),v.TgZ(12,"vcl-label"),v._uU(13,"Tab3"),v.qZA(),v._uU(14," Content3 "),v.qZA(),v.qZA(),v._UZ(15,"hr"),v.TgZ(16,"h3"),v._uU(17,'With layout="right"'),v.qZA(),v.TgZ(18,"vcl-tab-nav",1),v.TgZ(19,"vcl-tab"),v.TgZ(20,"vcl-label"),v._uU(21,"Tab1"),v.qZA(),v._uU(22," Content1 "),v.qZA(),v.TgZ(23,"vcl-tab"),v.TgZ(24,"vcl-label"),v._uU(25,"Tab2"),v.qZA(),v._uU(26," Content2 "),v.qZA(),v.TgZ(27,"vcl-tab",0),v.TgZ(28,"vcl-label"),v._uU(29,"Tab3"),v.qZA(),v._uU(30," Content3 "),v.qZA(),v.qZA(),v._UZ(31,"hr"),v.TgZ(32,"h3"),v._uU(33,'With layout="left"'),v.qZA(),v.TgZ(34,"vcl-tab-nav",2),v.TgZ(35,"vcl-tab"),v.TgZ(36,"vcl-label"),v._uU(37,"Tab1"),v.qZA(),v._uU(38," Content1 "),v.qZA(),v.TgZ(39,"vcl-tab"),v.TgZ(40,"vcl-label"),v._uU(41,"Tab2"),v.qZA(),v._uU(42," Content2 "),v.qZA(),v.TgZ(43,"vcl-tab",0),v.TgZ(44,"vcl-label"),v._uU(45,"Tab3"),v.qZA(),v._uU(46," Content3 "),v.qZA(),v.qZA(),v._UZ(47,"hr"),v.TgZ(48,"h3"),v._uU(49,"With borders"),v.qZA(),v.TgZ(50,"vcl-tab-nav",3),v.TgZ(51,"vcl-tab"),v.TgZ(52,"vcl-label"),v._uU(53,"Tab1"),v.qZA(),v._uU(54," Content1 "),v.qZA(),v.TgZ(55,"vcl-tab"),v.TgZ(56,"vcl-label"),v._uU(57,"Tab2"),v.qZA(),v._uU(58," Content2 "),v.qZA(),v.TgZ(59,"vcl-tab",0),v.TgZ(60,"vcl-label"),v._uU(61,"Tab3"),v.qZA(),v._uU(62," Content3 "),v.qZA(),v.qZA(),v._UZ(63,"hr"),v.TgZ(64,"h3"),v._uU(65,"Shared content"),v.qZA(),v.TgZ(66,"vcl-tab-nav",4),v.NdJ("selectedTabIndexChange",function(n){return l.tabIndex=n}),v.TgZ(67,"vcl-tab"),v.TgZ(68,"vcl-label"),v._uU(69,"Tab1"),v.qZA(),v.qZA(),v.TgZ(70,"vcl-tab"),v.TgZ(71,"vcl-label"),v._uU(72,"Tab2"),v.qZA(),v.qZA(),v.TgZ(73,"vcl-tab",0),v.TgZ(74,"vcl-label"),v._uU(75,"Tab3"),v.qZA(),v.qZA(),v._uU(76),v.qZA(),v.TgZ(77,"h3"),v._uU(78,"No content"),v.qZA(),v.TgZ(79,"vcl-tab-nav"),v.TgZ(80,"vcl-tab"),v.TgZ(81,"vcl-label"),v._uU(82,"Tab1"),v.qZA(),v.qZA(),v.TgZ(83,"vcl-tab"),v.TgZ(84,"vcl-label"),v._uU(85,"Tab2"),v.qZA(),v.qZA(),v.TgZ(86,"vcl-tab",0),v.TgZ(87,"vcl-label"),v._uU(88,"Tab3"),v.qZA(),v.qZA(),v.qZA()),2&n&&(v.xp6(11),v.Q6J("disabled",!0),v.xp6(16),v.Q6J("disabled",!0),v.xp6(16),v.Q6J("disabled",!0),v.xp6(16),v.Q6J("disabled",!0),v.xp6(7),v.Q6J("selectedTabIndex",l.tabIndex),v.xp6(7),v.Q6J("disabled",!0),v.xp6(3),v.hij(" Shared Content Tab: ",l.tabIndex,"\n"),v.xp6(10),v.Q6J("disabled",!0))},directives:[o.d,T.i,Z.q8],encapsulation:2}),n})();function s(){return{label:"Tab Navigation",tabs:{Demo:u,"README.md":{type:"md",content:'# vcl-tab-nav\n\nThe tab nav allows to organize content in tabs.\nOnly one tab is visible at a given time.\n\n## Usage\n\n```js\nimport { VCLTabNavModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLTabNavModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-tab-nav>\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n    <vcl-label>Tab2</vcl-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n```\n\n### API\n\n#### vcl-tab-nav attributes\n\n| Name                     | Type        | Default  | Description\n| ------------             | ----------- | -------- |--------------\n| `selectedTabIndex`       | number      |        0 | The index of the currently visible tab\n| `borders`                | boolean     |    false | Enables borders for the tab-nav\n| `layout`                 | string      |          | The layout: `undefined` , `"left"` or `"right"`\n\n#### Events\n\n| Name                             | Type             | Description\n| ---------------------            | ---------------  | -\n| `selectedTabIndexChange`         | number           | emits the new value when the tab changes\n\n\n#### vcl-tab attributes\n\n| Name                     | Type        | Default  | Description\n| ------------             | ----------- | -------- |--------------\n| `disabled`               | boolean     |   false  | Disables the tab when true\n\n'},"demo.component.html":{type:"html",content:a(41798)},"demo.component.ts":{type:"ts",content:a(20763)}}}}let r=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=v.oAB({type:n}),n.\u0275inj=v.cJS({imports:[[t.ez,c.l,b.Cm3,e.Bz.forChild([{path:"",component:c.z,data:{demo:s}}])]]}),n})()},41798:function(n,l,a){a.r(l),l.default='<h3>Default</h3>\n\n<vcl-tab-nav >\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-label>Tab2</vcl-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n\n<hr>\n\n<h3>With layout="right"</h3>\n\n<vcl-tab-nav layout="right" tabContentClass="vclSpan-70p" tabsClass="vclSpan-30p">\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-label>Tab2</vcl-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n\n<hr>\n\n<h3>With layout="left"</h3>\n\n<vcl-tab-nav layout="left" tabContentClass="vclSpan-70p" tabsClass="vclSpan-30p">\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-label>Tab2</vcl-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n\n<hr>\n\n<h3>With borders</h3>\n\n<vcl-tab-nav borders=true>\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-label>Tab2</vcl-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n\n<hr>\n\n\n<h3>Shared content</h3>\n\n<vcl-tab-nav [(selectedTabIndex)]="tabIndex">\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-label>Tab2</vcl-label>\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n  </vcl-tab>\n  Shared Content Tab: {{tabIndex}}\n</vcl-tab-nav>\n\n\n<h3>No content</h3>\n\n<vcl-tab-nav>\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-label>Tab2</vcl-label>\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n  </vcl-tab>\n</vcl-tab-nav>\n'},20763:function(n,l,a){a.r(l),l.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class TabNavDemoComponent {\n  tabIndex = 0;\n}\n"}}]);