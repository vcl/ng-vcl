"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[863],{7863:(s,l,t)=>{t.r(l),t.d(l,{ButtonGroupDemoModule:()=>R,demo:()=>r});var c=t(177),m=t(4341),d=t(3339),v=t(3323),i=t(9042),n=t(4438),h=t(7038),g=t(8070),f=t(6692);let F=(()=>{class e{constructor(){this.value1=2,this.value2=1,this.value3=[]}static#n=this.\u0275fac=function(a){return new(a||e)};static#t=this.\u0275cmp=n.VBU({type:e,selectors:[["ng-component"]],decls:42,vars:19,consts:[[3,"valueChange","value"],["vcl-button","",3,"value"],[1,"vertical",2,"width","10em",3,"valueChange","value"],["selectionMode","multiple",3,"valueChange","value"],["vcl-button","","square","",3,"value"],["icon","fas:italic"],["icon","fas:bold"],["icon","fas:underline"],["selectionMode","multiple",3,"disabled"]],template:function(a,o){1&a&&(n.j41(0,"h3"),n.EFF(1,"Horizontal button group"),n.k0s(),n.j41(2,"vcl-button-group",0),n.mxI("valueChange",function(u){return n.DH7(o.value1,u)||(o.value1=u),u}),n.j41(3,"button",1),n.EFF(4,"One"),n.k0s(),n.j41(5,"button",1),n.EFF(6,"Two"),n.k0s(),n.j41(7,"button",1),n.EFF(8,"Three"),n.k0s()(),n.j41(9,"p"),n.EFF(10),n.k0s(),n.j41(11,"h3"),n.EFF(12,"Vertical button group"),n.k0s(),n.j41(13,"vcl-button-group",2),n.mxI("valueChange",function(u){return n.DH7(o.value2,u)||(o.value2=u),u}),n.j41(14,"button",1),n.EFF(15,"One"),n.k0s(),n.j41(16,"button",1),n.EFF(17,"Two"),n.k0s(),n.j41(18,"button",1),n.EFF(19,"Three"),n.k0s()(),n.j41(20,"p"),n.EFF(21),n.k0s(),n.j41(22,"h3"),n.EFF(23,"Horizontal button group (multiple selection)"),n.k0s(),n.j41(24,"vcl-button-group",3),n.mxI("valueChange",function(u){return n.DH7(o.value3,u)||(o.value3=u),u}),n.j41(25,"button",4),n.nrm(26,"vcl-icon",5),n.k0s(),n.j41(27,"button",4),n.nrm(28,"vcl-icon",6),n.k0s(),n.j41(29,"button",4),n.nrm(30,"vcl-icon",7),n.k0s()(),n.j41(31,"p"),n.EFF(32),n.k0s(),n.j41(33,"h3"),n.EFF(34,"Disabled button group"),n.k0s(),n.j41(35,"vcl-button-group",8)(36,"button",4),n.nrm(37,"vcl-icon",5),n.k0s(),n.j41(38,"button",4),n.nrm(39,"vcl-icon",6),n.k0s(),n.j41(40,"button",4),n.nrm(41,"vcl-icon",7),n.k0s()()),2&a&&(n.R7$(2),n.R50("value",o.value1),n.R7$(),n.Y8G("value",1),n.R7$(2),n.Y8G("value",2),n.R7$(2),n.Y8G("value",3),n.R7$(3),n.SpI("Selected value: ",o.value1,""),n.R7$(3),n.R50("value",o.value2),n.R7$(),n.Y8G("value",1),n.R7$(2),n.Y8G("value",2),n.R7$(2),n.Y8G("value",3),n.R7$(3),n.SpI("Selected value: ",o.value2,""),n.R7$(3),n.R50("value",o.value3),n.R7$(),n.Y8G("value","italic"),n.R7$(2),n.Y8G("value","bold"),n.R7$(2),n.Y8G("value","underline"),n.R7$(3),n.SpI("Selected values: ",o.value3,""),n.R7$(3),n.Y8G("disabled",!0),n.R7$(),n.Y8G("value","italic"),n.R7$(2),n.Y8G("value","bold"),n.R7$(2),n.Y8G("value","underline"))},dependencies:[h.Z,g.Q,f.R],encapsulation:2})}return e})();const C='# vcl-button-group\n\nA button group which distributes space for each button equally to occupy 100% horizontal space.\n\n## Usage\n\n```js\nimport { VCLButtonGroupModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLButtonGroupModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-button-group [(value)]="value" mode="single">\n  <button vcl-button [value]="1">Action 1</button>\n  <button vcl-button [value]="2">Action 2</button>\n  <button vcl-button [value]="3">Action 3</button>\n</vcl-button-group>\n```\n\n### API\n\n#### Attributes\n\n| Name                  | Type                           | Default  | Description\n| --------------------- | ----------------------         | -------- |--------------\n| `value`               | any &#124; any[]               |          | Index of the selected button(s)\n| `selectionMode`       | `single` \\| `multiple`         | `single` | Select only one or multiple buttons\n\n#### Events\n\n| Name                  | Type                           | Description\n| -                     | -                              | -\n| `valueChange`         | event (any &#124; any[])       | Triggers when selected buttons change\n';function r(){return{label:"Button Group",tabs:{Demo:F,"README.md":{type:"md",content:C},"demo.component.html":{type:"html",content:t(7549)},"demo.component.ts":{type:"ts",content:t(7257)}}}}let R=(()=>{class e{static#n=this.\u0275fac=function(a){return new(a||e)};static#t=this.\u0275mod=n.$C({type:e});static#o=this.\u0275inj=n.G2t({imports:[c.MD,m.YN,i.q,v.tqJ,v.e7Q,v.j2$,d.iI.forChild([{path:"",component:i.D,data:{demo:r}}])]})}return e})()},7549:(s,l,t)=>{t.r(l),t.d(l,{default:()=>c});const c='<h3>Horizontal button group</h3>\n<vcl-button-group [(value)]="value1">\n  <button vcl-button [value]="1">One</button>\n  <button vcl-button [value]="2">Two</button>\n  <button vcl-button [value]="3">Three</button>\n</vcl-button-group>\n<p>Selected value: {{ value1 }}</p>\n\n<h3>Vertical button group</h3>\n<vcl-button-group class="vertical" style="width: 10em" [(value)]="value2">\n  <button vcl-button [value]="1">One</button>\n  <button vcl-button [value]="2">Two</button>\n  <button vcl-button [value]="3">Three</button>\n</vcl-button-group>\n<p>Selected value: {{ value2 }}</p>\n\n<h3>Horizontal button group (multiple selection)</h3>\n<vcl-button-group selectionMode="multiple" [(value)]="value3">\n  <button vcl-button square [value]="\'italic\'">\n    <vcl-icon icon="fas:italic"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'bold\'">\n    <vcl-icon icon="fas:bold"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'underline\'">\n    <vcl-icon icon="fas:underline"></vcl-icon>\n  </button>\n</vcl-button-group>\n<p>Selected values: {{ value3 }}</p>\n\n<h3>Disabled button group</h3>\n<vcl-button-group [disabled]="true" selectionMode="multiple">\n  <button vcl-button square [value]="\'italic\'">\n    <vcl-icon icon="fas:italic"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'bold\'">\n    <vcl-icon icon="fas:bold"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'underline\'">\n    <vcl-icon icon="fas:underline"></vcl-icon>\n  </button>\n</vcl-button-group>\n'},7257:(s,l,t)=>{t.r(l),t.d(l,{default:()=>c});const c="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class ButtonGroupDemoComponent {\n  value1 = 2;\n  value2 = 1;\n  value3 = [];\n}\n"}}]);