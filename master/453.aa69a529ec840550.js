"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[453],{9453:(d,a,o)=>{o.r(a),o.d(a,{RadioButtonDemoModule:()=>T,demo:()=>s});var c=o(6814),i=o(95),m=o(2911),v=o(6062),g=o(2860),n=o(9212),p=o(8509),h=o(4268),f=o(6745),C=o(3842);let Z=(()=>{class e{constructor(){this.isChecked=!1,this.rgValue1="red",this.rgValue2="f",this.rgValue3="g"}onChange(r){console.log("radio-button onChange fired"),console.dir(r)}static#n=this.\u0275fac=function(t){return new(t||e)};static#o=this.\u0275cmp=n.Xpm({type:e,selectors:[["ng-component"]],decls:34,vars:4,consts:[[3,"ngModel","ngModelChange"],["value","m"],["icon","fas:mars"],["value","f"],["icon","fas:venus"],["value","g"],["icon","fas:genderless"],["layout","vertical",3,"ngModel","ngModelChange"]],template:function(t,l){1&t&&(n.TgZ(0,"h3"),n._uU(1,"Basic radio group"),n.qZA(),n.TgZ(2,"vcl-radio-group",0),n.NdJ("ngModelChange",function(u){return l.rgValue2=u}),n.TgZ(3,"vcl-radio-button",1)(4,"vcl-icogram"),n._uU(5," Male "),n._UZ(6,"vcl-icon",2),n.qZA()(),n.TgZ(7,"vcl-radio-button",3)(8,"vcl-icogram"),n._uU(9," Female "),n._UZ(10,"vcl-icon",4),n.qZA()(),n.TgZ(11,"vcl-radio-button",5)(12,"vcl-icogram"),n._uU(13," Genderless "),n._UZ(14,"vcl-icon",6),n.qZA()()(),n.TgZ(15,"p"),n._uU(16),n.qZA(),n.TgZ(17,"h3"),n._uU(18,"Vertical radio group"),n.qZA(),n.TgZ(19,"vcl-radio-group",7),n.NdJ("ngModelChange",function(u){return l.rgValue3=u}),n.TgZ(20,"vcl-radio-button",1)(21,"vcl-icogram"),n._uU(22," Male "),n._UZ(23,"vcl-icon",2),n.qZA()(),n.TgZ(24,"vcl-radio-button",3)(25,"vcl-icogram"),n._uU(26," Female "),n._UZ(27,"vcl-icon",4),n.qZA()(),n.TgZ(28,"vcl-radio-button",5)(29,"vcl-icogram"),n._uU(30," Genderless "),n._UZ(31,"vcl-icon",6),n.qZA()()(),n.TgZ(32,"p"),n._uU(33),n.qZA()),2&t&&(n.xp6(2),n.Q6J("ngModel",l.rgValue2),n.xp6(14),n.hij("Current value: ",l.rgValue2,""),n.xp6(3),n.Q6J("ngModel",l.rgValue3),n.xp6(14),n.hij("Current value: ",l.rgValue3,""))},dependencies:[i.JJ,i.On,p._,h.w,f.m,C.o],encapsulation:2})}return e})();const b="# vcl-radio-button\n\nA radio group with radio buttons utilizing `vcl-icon`\n\n## Usage\n\n```html\n<vcl-radio-group [(value)]=\"value\">\n  <vcl-radio-button value=\"red\"></vcl-radio-button> Red\n  <vcl-radio-button value=\"green\"></vcl-radio-button> Green\n</vcl-radio-group>\n```\n\n### API\n\n#### vcl-radio-button attributes\n\n| Name                | Type        | Default            | Description\n| ------------        | ----------- | ------------------ |--------------\n| `checked`*          | boolean     | false              | 2-Way-Binding. State of radio button\n| `value`             | any         |                    | Value of the radio button\n| `tabindex`          | number      | 0                  | The tabindex of the radio button\n\n#### vcl-radio-group attributes\n\n| Name                  | Type                          | Default      | Description\n| --------------------- | ----------------------        | --------     |--------------\n| `value`               | any \\| any[]                  |              | Value of the checked radio button\n| `layout`              | 'horizontal' \\| 'vertical'    | 'horizontal' | Renders radio group horizontally or vertically\n\n#### Events\n\n| Name                  | Type             | Description\n| --------------------- | ---------------  | -\n| `valueChange`         | any &#124; any[] | emits the new value when radio group value changes\n";function s(){return{label:"Radio Button",tabs:{Demo:Z,"README.md":{type:"md",content:b},"demo.component.html":{type:"html",content:o(8375)},"demo.component.ts":{type:"ts",content:o(761)}}}}let T=(()=>{class e{static#n=this.\u0275fac=function(t){return new(t||e)};static#o=this.\u0275mod=n.oAB({type:e});static#e=this.\u0275inj=n.cJS({imports:[c.ez,i.u5,g.l,v.M8P,v.o14,m.Bz.forChild([{path:"",component:g.z,data:{demo:s}}])]})}return e})()},8375:(d,a,o)=>{o.r(a),o.d(a,{default:()=>c});const c='<h3>Basic radio group</h3>\n<vcl-radio-group [(ngModel)]="rgValue2">\n  <vcl-radio-button value="m">\n    <vcl-icogram>\n      Male\n      <vcl-icon icon="fas:mars"></vcl-icon>\n    </vcl-icogram>\n  </vcl-radio-button>\n  <vcl-radio-button value="f">\n    <vcl-icogram>\n      Female\n      <vcl-icon icon="fas:venus"></vcl-icon>\n    </vcl-icogram>\n  </vcl-radio-button>\n  <vcl-radio-button value="g">\n    <vcl-icogram>\n      Genderless\n      <vcl-icon icon="fas:genderless"></vcl-icon>\n    </vcl-icogram>\n  </vcl-radio-button>\n</vcl-radio-group>\n<p>Current value: {{rgValue2}}</p>\n\n<h3>Vertical radio group</h3>\n<vcl-radio-group layout="vertical" [(ngModel)]="rgValue3">\n  <vcl-radio-button value="m">\n    <vcl-icogram>\n      Male\n      <vcl-icon icon="fas:mars"></vcl-icon>\n    </vcl-icogram>\n  </vcl-radio-button>\n  <vcl-radio-button value="f">\n    <vcl-icogram>\n      Female\n      <vcl-icon icon="fas:venus"></vcl-icon>\n    </vcl-icogram>\n  </vcl-radio-button>\n  <vcl-radio-button value="g">\n    <vcl-icogram>\n      Genderless\n      <vcl-icon icon="fas:genderless"></vcl-icon>\n    </vcl-icogram>\n  </vcl-radio-button>\n</vcl-radio-group>\n<p>Current value: {{rgValue3}}</p>\n'},761:(d,a,o)=>{o.r(a),o.d(a,{default:()=>c});const c="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class RadioButtonDemoComponent {\n  isChecked = false;\n\n  rgValue1 = 'red';\n  rgValue2 = 'f';\n  rgValue3 = 'g';\n\n  onChange(value) {\n    console.log('radio-button onChange fired');\n    console.dir(value);\n  }\n}\n"}}]);