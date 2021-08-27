"use strict";(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[561],{90561:function(e,n,l){l.r(n),l.d(n,{SliderDemoModule:function(){return h},demo:function(){return d}});var a=l(16274),u=l(95454),t=l(24988),s=l(36196),i=l(62518),v=l(84271),c=l(20812);const r=function(){return["\u2600","\u2601","\u2602","\u2603","\u2604","1"]},o=function(){return["d","i","s","a","b","l","e","d"]};let m=(()=>{class e{constructor(){this.value1=0,this.value2=0,this.value3=0,this.value4=0,this.value5=0,this.value6=0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v.Xpm({type:e,selectors:[["ng-component"]],decls:22,vars:30,consts:[[3,"value","valueChange"],[3,"value","min","max","scale","valueChange"],[3,"value","min","max","scale","lock","valueChange"],[3,"value","min","max","enableWheel","scale","valueChange"],[3,"value","min","max","disabled","scale","valueChange"]],template:function(e,n){1&e&&(v.TgZ(0,"h3"),v._uU(1,"Basic"),v.qZA(),v.TgZ(2,"vcl-slider",0),v.NdJ("valueChange",function(e){return n.value1=e}),v.qZA(),v._uU(3),v.TgZ(4,"h3"),v._uU(5,"With a scale"),v.qZA(),v.TgZ(6,"vcl-slider",1),v.NdJ("valueChange",function(e){return n.value2=e}),v.qZA(),v._uU(7),v.TgZ(8,"h3"),v._uU(9,"With value locked to the scale"),v.qZA(),v.TgZ(10,"vcl-slider",2),v.NdJ("valueChange",function(e){return n.value3=e}),v.qZA(),v._uU(11),v.TgZ(12,"h3"),v._uU(13,"custom labeled scale"),v.qZA(),v.TgZ(14,"vcl-slider",3),v.NdJ("valueChange",function(e){return n.value4=e}),v.qZA(),v._uU(15),v.TgZ(16,"h3"),v._uU(17,"disabled"),v.qZA(),v.TgZ(18,"vcl-slider",4),v.NdJ("valueChange",function(e){return n.value5=e}),v.qZA(),v.TgZ(19,"h3"),v._uU(20,"With value outer min/max bounds"),v.qZA(),v.TgZ(21,"vcl-slider",1),v.NdJ("valueChange",function(e){return n.value6=e}),v.qZA()),2&e&&(v.xp6(2),v.Q6J("value",n.value1),v.xp6(1),v.hij("\nValue: ",n.value1," "),v.xp6(3),v.Q6J("value",n.value2)("min",0)("max",100)("scale",11),v.xp6(1),v.hij("\nValue: ",n.value2," "),v.xp6(3),v.Q6J("value",n.value3)("min",0)("max",100)("scale",11)("lock",!0),v.xp6(1),v.hij("\nValue: ",n.value3," "),v.xp6(3),v.Q6J("value",n.value4)("min",0)("max",5)("enableWheel",!0)("scale",v.DdM(28,r)),v.xp6(1),v.hij("\nValue: ",n.value4," "),v.xp6(3),v.Q6J("value",n.value5)("min",0)("max",7)("disabled",!0)("scale",v.DdM(29,o)),v.xp6(3),v.Q6J("value",n.value6)("min",10)("max",100)("scale",11))},directives:[c.P],encapsulation:2}),e})();function d(){return{label:"Slider",tabs:{Demo:m,"README.md":{type:"md",content:'# vcl-slider\n\n## Usage\n\n_Note: HammerJS must be loaded for touch events_\n\n```js\nimport { VCLSliderModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLSliderModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-slider\n  [(value)]="value1"\n  [min]="0"\n  [max]="100"\n  [scale]="10">\n</vcl-slider>\n```\n\n```html\n<vcl-slider\n  [(value)]="value2"\n  [min]="0"\n  [max]="50"\n  [lock]="5"\n  [enableWheel]="true"\n  [scale]="[\'Zero\',\'One\',\'Two\',\'Three\',\'Four\',\'Five\']">\n</vcl-slider>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type                   | Default            | Description\n| ------------        | -----------            | ------------------ |--------------\n| `value`             | number                 |                    | The current value\n| `min`               | number                 | 0                  | The min value\n| `max`               | number                 | 100                | The max value\n| `scale`             | string[] &#124 number  |                    | The legend below the slider\n| `lock`              | boolean                | false              | The selectable value is locked to the scale\n| `enableWheel`       | boolean                | false              | Allows to change the value with the mouse wheel\n| `disabled`          | boolean                | false              | Disables the slider when true\n| `tabindex`          | number                 | 0                  | The tabindex of the slider\n\n#### Events\n\nName                  | Type             | Description\n--------------------- | ---------------  | -\n`valueChange`         | any &#124; any[] | emits the new value when slider value changes\n'},"demo.component.html":{type:"html",content:l(28699)},"demo.component.ts":{type:"ts",content:l(57062)}}}}let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=v.oAB({type:e}),e.\u0275inj=v.cJS({imports:[[a.ez,t.u5,i.l,s.dwA,u.Bz.forChild([{path:"",component:i.z,data:{demo:d}}])]]}),e})()},28699:function(e,n,l){l.r(n),n.default='<h3>Basic</h3>\n<vcl-slider [(value)]="value1"></vcl-slider>\nValue: {{value1}}\n\n<h3>With a scale</h3>\n<vcl-slider \n  [(value)]="value2" \n  [min]="0" \n  [max]="100"\n  [scale]="11">\n</vcl-slider>\nValue: {{value2}}\n\n<h3>With value locked to the scale</h3>\n<vcl-slider \n  [(value)]="value3" \n  [min]="0" \n  [max]="100"\n  [scale]="11"\n  [lock]="true" >\n</vcl-slider>\nValue: {{value3}}\n\n\n<h3>custom labeled scale</h3>\n<vcl-slider \n  [(value)]="value4" \n  [min]="0" \n  [max]="5" \n  [enableWheel]="true" \n  [scale]="[\'\u2600\',\'\u2601\',\'\u2602\',\'\u2603\',\'\u2604\',\'1\']">\n</vcl-slider>\nValue: {{value4}}\n\n\n<h3>disabled</h3>\n\n<vcl-slider \n  [(value)]="value5" \n  [min]="0" \n  [max]="7" \n  [disabled]="true" \n  [scale]="[\'d\',\'i\',\'s\',\'a\',\'b\',\'l\', \'e\', \'d\']">\n</vcl-slider>\n\n<h3>With value outer min/max bounds</h3>\n<vcl-slider \n  [(value)]="value6" \n  [min]="10" \n  [max]="100"\n  [scale]="11">\n</vcl-slider>\n'},57062:function(e,n,l){l.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class SliderDemoComponent {\n  value1 = 0;\n  value2 = 0;\n  value3 = 0;\n  value4 = 0;\n  value5 = 0;\n  value6 = 0;\n}\n"}}]);