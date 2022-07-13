"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[766],{6766:(i,o,n)=>{n.r(o),n.d(o,{SliderDemoModule:()=>Z,demo:()=>r});var s=n(6895),c=n(3356),h=n(433),p=n(9787),d=n(9155),e=n(4650),g=n(8191);const C=function(){return["\u2600","\u2601","\u2602","\u2603","\u2604","1"]},T=function(){return["d","i","s","a","b","l","e","d"]};let f=(()=>{class a{constructor(){this.value1=0,this.value2=0,this.value3=0,this.value4=0,this.value5=0,this.value6=0}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["ng-component"]],decls:22,vars:30,consts:[[3,"value","valueChange"],[3,"value","min","max","scale","valueChange"],[3,"value","min","max","scale","lock","valueChange"],[3,"value","min","max","enableWheel","scale","valueChange"],[3,"value","min","max","disabled","scale","valueChange"]],template:function(t,l){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Basic"),e.qZA(),e.TgZ(2,"vcl-slider",0),e.NdJ("valueChange",function(u){return l.value1=u}),e.qZA(),e._uU(3),e.TgZ(4,"h3"),e._uU(5,"With a scale"),e.qZA(),e.TgZ(6,"vcl-slider",1),e.NdJ("valueChange",function(u){return l.value2=u}),e.qZA(),e._uU(7),e.TgZ(8,"h3"),e._uU(9,"With value locked to the scale"),e.qZA(),e.TgZ(10,"vcl-slider",2),e.NdJ("valueChange",function(u){return l.value3=u}),e.qZA(),e._uU(11),e.TgZ(12,"h3"),e._uU(13,"custom labeled scale"),e.qZA(),e.TgZ(14,"vcl-slider",3),e.NdJ("valueChange",function(u){return l.value4=u}),e.qZA(),e._uU(15),e.TgZ(16,"h3"),e._uU(17,"disabled"),e.qZA(),e.TgZ(18,"vcl-slider",4),e.NdJ("valueChange",function(u){return l.value5=u}),e.qZA(),e.TgZ(19,"h3"),e._uU(20,"With value outer min/max bounds"),e.qZA(),e.TgZ(21,"vcl-slider",1),e.NdJ("valueChange",function(u){return l.value6=u}),e.qZA()),2&t&&(e.xp6(2),e.Q6J("value",l.value1),e.xp6(1),e.hij("\nValue: ",l.value1," "),e.xp6(3),e.Q6J("value",l.value2)("min",0)("max",100)("scale",11),e.xp6(1),e.hij("\nValue: ",l.value2," "),e.xp6(3),e.Q6J("value",l.value3)("min",0)("max",100)("scale",11)("lock",!0),e.xp6(1),e.hij("\nValue: ",l.value3," "),e.xp6(3),e.Q6J("value",l.value4)("min",0)("max",5)("enableWheel",!0)("scale",e.DdM(28,C)),e.xp6(1),e.hij("\nValue: ",l.value4," "),e.xp6(3),e.Q6J("value",l.value5)("min",0)("max",7)("disabled",!0)("scale",e.DdM(29,T)),e.xp6(3),e.Q6J("value",l.value6)("min",10)("max",100)("scale",11))},dependencies:[g.P],encapsulation:2}),a})();function r(){return{label:"Slider",tabs:{Demo:f,"README.md":{type:"md",content:'# vcl-slider\n\n## Usage\n\n_Note: HammerJS must be loaded for touch events_\n\n```js\nimport { VCLSliderModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLSliderModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-slider\n  [(value)]="value1"\n  [min]="0"\n  [max]="100"\n  [scale]="10">\n</vcl-slider>\n```\n\n```html\n<vcl-slider\n  [(value)]="value2"\n  [min]="0"\n  [max]="50"\n  [lock]="5"\n  [enableWheel]="true"\n  [scale]="[\'Zero\',\'One\',\'Two\',\'Three\',\'Four\',\'Five\']">\n</vcl-slider>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type                   | Default            | Description\n| ------------        | -----------            | ------------------ |--------------\n| `value`             | number                 |                    | The current value\n| `min`               | number                 | 0                  | The min value\n| `max`               | number                 | 100                | The max value\n| `scale`             | string[] &#124 number  |                    | The legend below the slider\n| `lock`              | boolean                | false              | The selectable value is locked to the scale\n| `enableWheel`       | boolean                | false              | Allows to change the value with the mouse wheel\n| `disabled`          | boolean                | false              | Disables the slider when true\n| `tabindex`          | number                 | 0                  | The tabindex of the slider\n\n#### Events\n\nName                  | Type             | Description\n--------------------- | ---------------  | -\n`valueChange`         | any &#124; any[] | emits the new value when slider value changes\n'},"demo.component.html":{type:"html",content:n(8699)},"demo.component.ts":{type:"ts",content:n(7062)}}}}let Z=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[s.ez,h.u5,d.l,p.dwA,c.Bz.forChild([{path:"",component:d.z,data:{demo:r}}])]}),a})()},8699:(i,o,n)=>{n.r(o),n.d(o,{default:()=>s});const s='<h3>Basic</h3>\n<vcl-slider [(value)]="value1"></vcl-slider>\nValue: {{value1}}\n\n<h3>With a scale</h3>\n<vcl-slider \n  [(value)]="value2" \n  [min]="0" \n  [max]="100"\n  [scale]="11">\n</vcl-slider>\nValue: {{value2}}\n\n<h3>With value locked to the scale</h3>\n<vcl-slider \n  [(value)]="value3" \n  [min]="0" \n  [max]="100"\n  [scale]="11"\n  [lock]="true" >\n</vcl-slider>\nValue: {{value3}}\n\n\n<h3>custom labeled scale</h3>\n<vcl-slider \n  [(value)]="value4" \n  [min]="0" \n  [max]="5" \n  [enableWheel]="true" \n  [scale]="[\'\u2600\',\'\u2601\',\'\u2602\',\'\u2603\',\'\u2604\',\'1\']">\n</vcl-slider>\nValue: {{value4}}\n\n\n<h3>disabled</h3>\n\n<vcl-slider \n  [(value)]="value5" \n  [min]="0" \n  [max]="7" \n  [disabled]="true" \n  [scale]="[\'d\',\'i\',\'s\',\'a\',\'b\',\'l\', \'e\', \'d\']">\n</vcl-slider>\n\n<h3>With value outer min/max bounds</h3>\n<vcl-slider \n  [(value)]="value6" \n  [min]="10" \n  [max]="100"\n  [scale]="11">\n</vcl-slider>\n'},7062:(i,o,n)=>{n.r(o),n.d(o,{default:()=>s});const s="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class SliderDemoComponent {\n  value1 = 0;\n  value2 = 0;\n  value3 = 0;\n  value4 = 0;\n  value5 = 0;\n  value6 = 0;\n}\n"}}]);