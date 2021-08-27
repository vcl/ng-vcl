!function(){"use strict";function e(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[967],{93967:function(l,t,n){n.r(t),n.d(t,{SelectListDemoModule:function(){return f},demo:function(){return A}});var s,i=n(16274),c=n(24988),a=n(95454),u=n(36196),v=n(23402),o=n(62518),r=n(84271),m=n(38834),h=n(44077),d=n(54660),g=n(852),Z=n(67811),p=((s=function l(){e(this,l),this.value1="gr",this.value2=[],this.value3="gr"}).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=r.Xpm({type:s,selectors:[["ng-component"]],decls:71,vars:7,consts:[[3,"value","valueChange"],["value","gr"],["vclPrepend","","icon","fas:flag"],["value","fr"],["value","de"],["value","gb"],["value","jp"],["value","ch"],["value","th"],["selectionMode","multiple",3,"value","valueChange"],[3,"value","disabled","valueChange"]],template:function(e,l){1&e&&(r.TgZ(0,"h3"),r._uU(1,"Basic vcl-select-list"),r.qZA(),r.TgZ(2,"vcl-select-list",0),r.NdJ("valueChange",function(e){return l.value1=e}),r.TgZ(3,"vcl-select-list-header"),r._uU(4,"Europe"),r.qZA(),r.TgZ(5,"vcl-select-list-item",1),r._UZ(6,"vcl-icon",2),r._uU(7," Greece "),r.TgZ(8,"vcl-sub-label"),r._uU(9,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),r.qZA(),r.qZA(),r.TgZ(10,"vcl-select-list-item",3),r._uU(11," France "),r.qZA(),r.TgZ(12,"vcl-select-list-item",4),r._uU(13," Germany "),r.qZA(),r.TgZ(14,"vcl-select-list-item",5),r._uU(15," The United Kingdom of Great Britain and Northern Ireland "),r.qZA(),r.TgZ(16,"vcl-select-list-header"),r._uU(17,"Asia"),r.qZA(),r.TgZ(18,"vcl-select-list-item",6),r._uU(19," Japan "),r.qZA(),r.TgZ(20,"vcl-select-list-item",7),r._uU(21," China "),r.qZA(),r.TgZ(22,"vcl-select-list-item",8),r._uU(23," Thailand "),r.qZA(),r.qZA(),r._uU(24),r.TgZ(25,"h3"),r._uU(26,"multi-select"),r.qZA(),r.TgZ(27,"vcl-select-list",9),r.NdJ("valueChange",function(e){return l.value2=e}),r.TgZ(28,"vcl-select-list-header"),r._uU(29,"Europe"),r.qZA(),r.TgZ(30,"vcl-select-list-item",1),r._uU(31," Greece "),r.TgZ(32,"vcl-sub-label"),r._uU(33,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),r.qZA(),r.qZA(),r.TgZ(34,"vcl-select-list-item",3),r._uU(35," France "),r.qZA(),r.TgZ(36,"vcl-select-list-item",4),r._uU(37," Germany "),r.qZA(),r.TgZ(38,"vcl-select-list-item",5),r._uU(39," The United Kingdom of Great Britain and Northern Ireland "),r.qZA(),r.TgZ(40,"vcl-select-list-header"),r._uU(41,"Asia"),r.qZA(),r.TgZ(42,"vcl-select-list-item",6),r._uU(43," Japan "),r.qZA(),r.TgZ(44,"vcl-select-list-item",7),r._uU(45," China "),r.qZA(),r.TgZ(46,"vcl-select-list-item",8),r._uU(47," Thailand "),r.qZA(),r.qZA(),r._uU(48),r.TgZ(49,"vcl-select-list",10),r.NdJ("valueChange",function(e){return l.value3=e}),r.TgZ(50,"vcl-select-list-header"),r._uU(51,"Europe"),r.qZA(),r.TgZ(52,"vcl-select-list-item",1),r._uU(53," Greece "),r.TgZ(54,"vcl-sub-label"),r._uU(55,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),r.qZA(),r.qZA(),r.TgZ(56,"vcl-select-list-item",3),r._uU(57," France "),r.qZA(),r.TgZ(58,"vcl-select-list-item",4),r._uU(59," Germany "),r.qZA(),r.TgZ(60,"vcl-select-list-item",5),r._uU(61," The United Kingdom of Great Britain and Northern Ireland "),r.qZA(),r.TgZ(62,"vcl-select-list-header"),r._uU(63,"Asia"),r.qZA(),r.TgZ(64,"vcl-select-list-item",6),r._uU(65," Japan "),r.qZA(),r.TgZ(66,"vcl-select-list-item",7),r._uU(67," China "),r.qZA(),r.TgZ(68,"vcl-select-list-item",8),r._uU(69," Thailand "),r.qZA(),r.qZA(),r._uU(70)),2&e&&(r.xp6(2),r.Q6J("value",l.value1),r.xp6(22),r.hij(" Value: ",l.value1," "),r.xp6(3),r.Q6J("value",l.value2),r.xp6(21),r.hij(" Value: ",l.value2," "),r.xp6(1),r.Q6J("value",l.value3)("disabled",!0),r.xp6(21),r.hij(" Value: ",l.value3,"\n"))},directives:[m.g,h.m,d.fN,g.o,Z.g9],encapsulation:2}),s);function A(){return{label:"Select List",tabs:{Demo:p,"README.md":{type:"md",content:'# vcl-select-list\n\nA list consisting of items which can be selected.\n\n## Usage\n\n```html\n<vcl-select-list [(value)]="value">\n  <vcl-select-list-item value="1">\n    Item 1\n  </vcl-select-list-item>\n  <vcl-select-list-item value="2">\n    Item 2\n  </vcl-select-list-item>\n  <vcl-select-list-item value="3" [disabled]="true">\n    Item 3\n  </vcl-select-list-item>\n</vcl-select-list>\n```\n\n### vcl-select-list attributes\n\nName            | Type                             | Default     | Description\n----------      | -------                          | -------     | --------------------------------------\n`value`         | any                              |             | Current value\n`selectionMode` | \'single\' \\| \'multiple\' \\| \'none\' | \'single\'    | `single` allows only one item to be selected. `multi` allows multiple items to be selected.\n\n### vcl-select-list events\n\nName            | Type    | Description\n----------      | ------- | --------------------------------------\n`valueChange`   | any     | Fired when the select-list value has changes\n\n\n### vcl-select-list-item attributes\n\nName              | Type                  | Default   | Description\n----------        | -------               | -------   | --------------------------------------\n`value`           | any                   |           | The items value\n`disabled`        | boolean               |           | Disables the item\n'},"demo.component.html":{type:"html",content:n(64723)},"demo.component.ts":{type:"ts",content:n(12426)}}}}var f=function(){var l=function l(){e(this,l)};return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=r.oAB({type:l}),l.\u0275inj=r.cJS({imports:[[i.ez,c.u5,o.l,u.V4c,u.Kef,u.NhM,u.WdB,u.o14,u.OD1,v.Cl,a.Bz.forChild([{path:"",component:o.z,data:{demo:A}}])]]}),l}()},64723:function(e,l,t){t.r(l),l.default='<h3>Basic vcl-select-list</h3>\n\n<vcl-select-list [(value)]="value1">\n  <vcl-select-list-header>Europe</vcl-select-list-header>\n  <vcl-select-list-item value="gr">\n    <vcl-icon vclPrepend icon="fas:flag"></vcl-icon>\n    Greece\n    <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n  </vcl-select-list-item>\n  <vcl-select-list-item value="fr">\n    France\n  </vcl-select-list-item>\n  <vcl-select-list-item value="de">\n    Germany\n  </vcl-select-list-item>\n  <vcl-select-list-item value="gb">\n    The United Kingdom of Great Britain and Northern Ireland\n  </vcl-select-list-item>\n  <vcl-select-list-header>Asia</vcl-select-list-header>\n  <vcl-select-list-item value="jp">\n    Japan\n  </vcl-select-list-item>\n  <vcl-select-list-item value="ch">\n    China\n  </vcl-select-list-item>\n  <vcl-select-list-item value="th">\n    Thailand\n  </vcl-select-list-item>\n</vcl-select-list>\n \nValue: {{value1}}\n\n<h3>multi-select</h3>\n\n<vcl-select-list [(value)]="value2" selectionMode="multiple">\n  <vcl-select-list-header>Europe</vcl-select-list-header>\n  <vcl-select-list-item value="gr">\n    Greece\n    <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n  </vcl-select-list-item>\n  <vcl-select-list-item value="fr">\n    France\n  </vcl-select-list-item>\n  <vcl-select-list-item value="de">\n    Germany\n  </vcl-select-list-item>\n  <vcl-select-list-item value="gb">\n    The United Kingdom of Great Britain and Northern Ireland\n  </vcl-select-list-item>\n  <vcl-select-list-header>Asia</vcl-select-list-header>\n  <vcl-select-list-item value="jp">\n    Japan\n  </vcl-select-list-item>\n  <vcl-select-list-item value="ch">\n    China\n  </vcl-select-list-item>\n  <vcl-select-list-item value="th">\n    Thailand\n  </vcl-select-list-item>\n</vcl-select-list>\n\nValue: {{value2}}\n\n<vcl-select-list [(value)]="value3" [disabled]="true">\n  <vcl-select-list-header>Europe</vcl-select-list-header>\n  <vcl-select-list-item value="gr">\n    Greece\n    <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n  </vcl-select-list-item>\n  <vcl-select-list-item value="fr">\n    France\n  </vcl-select-list-item>\n  <vcl-select-list-item value="de">\n    Germany\n  </vcl-select-list-item>\n  <vcl-select-list-item value="gb">\n    The United Kingdom of Great Britain and Northern Ireland\n  </vcl-select-list-item>\n  <vcl-select-list-header>Asia</vcl-select-list-header>\n  <vcl-select-list-item value="jp">\n    Japan\n  </vcl-select-list-item>\n  <vcl-select-list-item value="ch">\n    China\n  </vcl-select-list-item>\n  <vcl-select-list-item value="th">\n    Thailand\n  </vcl-select-list-item>\n</vcl-select-list>\n\nValue: {{value3}}\n'},12426:function(e,l,t){t.r(l),l.default="import { Component, ViewChild, ElementRef } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class SelectListDemoComponent {\n  value1 = 'gr';\n  value2 = [];\n  value3 = 'gr';\n}\n"}}])}();