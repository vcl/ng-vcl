"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[855],{9855:(o,i,l)=>{l.r(i),l.d(i,{SelectListDemoModule:()=>D,demo:()=>m});var v=l(177),d=l(4341),F=l(3339),c=l(3323),E=l(6535),u=l(9042),e=l(4438),p=l(6692),g=l(2116),f=l(4293),j=l(783),C=l(5694);let A=(()=>{class n{constructor(){this.value1="gr",this.value2=[],this.value3="gr"}static#e=this.\u0275fac=function(a){return new(a||n)};static#l=this.\u0275cmp=e.VBU({type:n,selectors:[["ng-component"]],decls:71,vars:7,consts:[[3,"valueChange","value"],["value","gr"],["vclPrepend","","icon","fas:flag"],["value","fr"],["value","de"],["value","gb"],["value","jp"],["value","ch"],["value","th"],["selectionMode","multiple",3,"valueChange","value"],[3,"valueChange","value","disabled"]],template:function(a,t){1&a&&(e.j41(0,"h3"),e.EFF(1,"Basic vcl-select-list"),e.k0s(),e.j41(2,"vcl-select-list",0),e.mxI("valueChange",function(s){return e.DH7(t.value1,s)||(t.value1=s),s}),e.j41(3,"vcl-select-list-header"),e.EFF(4,"Europe"),e.k0s(),e.j41(5,"vcl-select-list-item",1),e.nrm(6,"vcl-icon",2),e.EFF(7," Greece "),e.j41(8,"vcl-sub-label"),e.EFF(9,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),e.k0s()(),e.j41(10,"vcl-select-list-item",3),e.EFF(11," France "),e.k0s(),e.j41(12,"vcl-select-list-item",4),e.EFF(13," Germany "),e.k0s(),e.j41(14,"vcl-select-list-item",5),e.EFF(15," The United Kingdom of Great Britain and Northern Ireland "),e.k0s(),e.j41(16,"vcl-select-list-header"),e.EFF(17,"Asia"),e.k0s(),e.j41(18,"vcl-select-list-item",6),e.EFF(19," Japan "),e.k0s(),e.j41(20,"vcl-select-list-item",7),e.EFF(21," China "),e.k0s(),e.j41(22,"vcl-select-list-item",8),e.EFF(23," Thailand "),e.k0s()(),e.EFF(24),e.j41(25,"h3"),e.EFF(26,"multi-select"),e.k0s(),e.j41(27,"vcl-select-list",9),e.mxI("valueChange",function(s){return e.DH7(t.value2,s)||(t.value2=s),s}),e.j41(28,"vcl-select-list-header"),e.EFF(29,"Europe"),e.k0s(),e.j41(30,"vcl-select-list-item",1),e.EFF(31," Greece "),e.j41(32,"vcl-sub-label"),e.EFF(33,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),e.k0s()(),e.j41(34,"vcl-select-list-item",3),e.EFF(35," France "),e.k0s(),e.j41(36,"vcl-select-list-item",4),e.EFF(37," Germany "),e.k0s(),e.j41(38,"vcl-select-list-item",5),e.EFF(39," The United Kingdom of Great Britain and Northern Ireland "),e.k0s(),e.j41(40,"vcl-select-list-header"),e.EFF(41,"Asia"),e.k0s(),e.j41(42,"vcl-select-list-item",6),e.EFF(43," Japan "),e.k0s(),e.j41(44,"vcl-select-list-item",7),e.EFF(45," China "),e.k0s(),e.j41(46,"vcl-select-list-item",8),e.EFF(47," Thailand "),e.k0s()(),e.EFF(48),e.j41(49,"vcl-select-list",10),e.mxI("valueChange",function(s){return e.DH7(t.value3,s)||(t.value3=s),s}),e.j41(50,"vcl-select-list-header"),e.EFF(51,"Europe"),e.k0s(),e.j41(52,"vcl-select-list-item",1),e.EFF(53," Greece "),e.j41(54,"vcl-sub-label"),e.EFF(55,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),e.k0s()(),e.j41(56,"vcl-select-list-item",3),e.EFF(57," France "),e.k0s(),e.j41(58,"vcl-select-list-item",4),e.EFF(59," Germany "),e.k0s(),e.j41(60,"vcl-select-list-item",5),e.EFF(61," The United Kingdom of Great Britain and Northern Ireland "),e.k0s(),e.j41(62,"vcl-select-list-header"),e.EFF(63,"Asia"),e.k0s(),e.j41(64,"vcl-select-list-item",6),e.EFF(65," Japan "),e.k0s(),e.j41(66,"vcl-select-list-item",7),e.EFF(67," China "),e.k0s(),e.j41(68,"vcl-select-list-item",8),e.EFF(69," Thailand "),e.k0s()(),e.EFF(70)),2&a&&(e.R7$(2),e.R50("value",t.value1),e.R7$(22),e.SpI(" Value: ",t.value1," "),e.R7$(3),e.R50("value",t.value2),e.R7$(21),e.SpI(" Value: ",t.value2," "),e.R7$(),e.R50("value",t.value3),e.Y8G("disabled",!0),e.R7$(21),e.SpI(" Value: ",t.value3,"\n"))},dependencies:[p.R,g.e,f.J,j.B,C.Wr],encapsulation:2})}return n})();const y='# vcl-select-list\n\nA list consisting of items which can be selected.\n\n## Usage\n\n```html\n<vcl-select-list [(value)]="value">\n  <vcl-select-list-item value="1">\n    Item 1\n  </vcl-select-list-item>\n  <vcl-select-list-item value="2">\n    Item 2\n  </vcl-select-list-item>\n  <vcl-select-list-item value="3" [disabled]="true">\n    Item 3\n  </vcl-select-list-item>\n</vcl-select-list>\n```\n\n### vcl-select-list attributes\n\nName            | Type       | Default     | Description\n----------      |------------| -------     | --------------------------------------\n`value`         | any        |             | Current value\n`selectionMode` | \'single\' \\| \'multiple\' \\| \'none\' | \'single\'    | `single` allows only one item to be selected. `multi` allows multiple items to be selected.\n`search`        | string     |             | Value to search for in all results\n\n### vcl-select-list events\n\nName            | Type    | Description\n----------      | ------- | --------------------------------------\n`valueChange`   | any     | Fired when the select-list value has changes\n\n\n### vcl-select-list-item attributes\n\nName              | Type                  | Default   | Description\n----------        | -------               | -------   | --------------------------------------\n`value`           | any                   |           | The items value\n`disabled`        | boolean               |           | Disables the item\n';function m(){return{label:"Select List",tabs:{Demo:A,"README.md":{type:"md",content:y},"demo.component.html":{type:"html",content:l(1504)},"demo.component.ts":{type:"ts",content:l(960)}}}}let D=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#l=this.\u0275mod=e.$C({type:n});static#t=this.\u0275inj=e.G2t({imports:[v.MD,d.YN,u.q,c.e7Q,c.AE5,c.j2$,c.AeE,c.QLd,c.wpX,E.E9,F.iI.forChild([{path:"",component:u.D,data:{demo:m}}])]})}return n})()},1504:(o,i,l)=>{l.r(i),l.d(i,{default:()=>v});const v='<h3>Basic vcl-select-list</h3>\n\n<vcl-select-list [(value)]="value1">\n  <vcl-select-list-header>Europe</vcl-select-list-header>\n  <vcl-select-list-item value="gr">\n    <vcl-icon vclPrepend icon="fas:flag"></vcl-icon>\n    Greece\n    <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n  </vcl-select-list-item>\n  <vcl-select-list-item value="fr">\n    France\n  </vcl-select-list-item>\n  <vcl-select-list-item value="de">\n    Germany\n  </vcl-select-list-item>\n  <vcl-select-list-item value="gb">\n    The United Kingdom of Great Britain and Northern Ireland\n  </vcl-select-list-item>\n  <vcl-select-list-header>Asia</vcl-select-list-header>\n  <vcl-select-list-item value="jp">\n    Japan\n  </vcl-select-list-item>\n  <vcl-select-list-item value="ch">\n    China\n  </vcl-select-list-item>\n  <vcl-select-list-item value="th">\n    Thailand\n  </vcl-select-list-item>\n</vcl-select-list>\n \nValue: {{value1}}\n\n<h3>multi-select</h3>\n\n<vcl-select-list [(value)]="value2" selectionMode="multiple">\n  <vcl-select-list-header>Europe</vcl-select-list-header>\n  <vcl-select-list-item value="gr">\n    Greece\n    <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n  </vcl-select-list-item>\n  <vcl-select-list-item value="fr">\n    France\n  </vcl-select-list-item>\n  <vcl-select-list-item value="de">\n    Germany\n  </vcl-select-list-item>\n  <vcl-select-list-item value="gb">\n    The United Kingdom of Great Britain and Northern Ireland\n  </vcl-select-list-item>\n  <vcl-select-list-header>Asia</vcl-select-list-header>\n  <vcl-select-list-item value="jp">\n    Japan\n  </vcl-select-list-item>\n  <vcl-select-list-item value="ch">\n    China\n  </vcl-select-list-item>\n  <vcl-select-list-item value="th">\n    Thailand\n  </vcl-select-list-item>\n</vcl-select-list>\n\nValue: {{value2}}\n\n<vcl-select-list [(value)]="value3" [disabled]="true">\n  <vcl-select-list-header>Europe</vcl-select-list-header>\n  <vcl-select-list-item value="gr">\n    Greece\n    <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n  </vcl-select-list-item>\n  <vcl-select-list-item value="fr">\n    France\n  </vcl-select-list-item>\n  <vcl-select-list-item value="de">\n    Germany\n  </vcl-select-list-item>\n  <vcl-select-list-item value="gb">\n    The United Kingdom of Great Britain and Northern Ireland\n  </vcl-select-list-item>\n  <vcl-select-list-header>Asia</vcl-select-list-header>\n  <vcl-select-list-item value="jp">\n    Japan\n  </vcl-select-list-item>\n  <vcl-select-list-item value="ch">\n    China\n  </vcl-select-list-item>\n  <vcl-select-list-item value="th">\n    Thailand\n  </vcl-select-list-item>\n</vcl-select-list>\n\nValue: {{value3}}\n'},960:(o,i,l)=>{l.r(i),l.d(i,{default:()=>v});const v="import { Component, ViewChild, ElementRef } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class SelectListDemoComponent {\n  value1 = 'gr';\n  value2 = [];\n  value3 = 'gr';\n}\n"}}]);