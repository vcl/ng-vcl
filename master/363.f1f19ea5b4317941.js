"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[363],{7363:(i,s,a)=>{a.r(s),a.d(s,{SliderDemoModule:()=>b,demo:()=>d});var t=a(177),c=a(3339),h=a(4341),p=a(3323),v=a(9042),e=a(4438),C=a(4756);const g=()=>["\u2600","\u2601","\u2602","\u2603","\u2604","1"],f=()=>["d","i","s","a","b","l","e","d"];let D=(()=>{class u{constructor(){this.value1=0,this.value2=0,this.value3=0,this.value4=0,this.value5=0,this.value6=0}static#e=this.\u0275fac=function(o){return new(o||u)};static#l=this.\u0275cmp=e.VBU({type:u,selectors:[["ng-component"]],decls:22,vars:30,consts:[[3,"valueChange","value"],[3,"valueChange","value","min","max","scale"],[3,"valueChange","value","min","max","scale","lock"],[3,"valueChange","value","min","max","enableWheel","scale"],[3,"valueChange","value","min","max","disabled","scale"]],template:function(o,n){1&o&&(e.j41(0,"h3"),e.EFF(1,"Basic"),e.k0s(),e.j41(2,"vcl-slider",0),e.mxI("valueChange",function(l){return e.DH7(n.value1,l)||(n.value1=l),l}),e.k0s(),e.EFF(3),e.j41(4,"h3"),e.EFF(5,"With a scale"),e.k0s(),e.j41(6,"vcl-slider",1),e.mxI("valueChange",function(l){return e.DH7(n.value2,l)||(n.value2=l),l}),e.k0s(),e.EFF(7),e.j41(8,"h3"),e.EFF(9,"With value locked to the scale"),e.k0s(),e.j41(10,"vcl-slider",2),e.mxI("valueChange",function(l){return e.DH7(n.value3,l)||(n.value3=l),l}),e.k0s(),e.EFF(11),e.j41(12,"h3"),e.EFF(13,"custom labeled scale"),e.k0s(),e.j41(14,"vcl-slider",3),e.mxI("valueChange",function(l){return e.DH7(n.value4,l)||(n.value4=l),l}),e.k0s(),e.EFF(15),e.j41(16,"h3"),e.EFF(17,"disabled"),e.k0s(),e.j41(18,"vcl-slider",4),e.mxI("valueChange",function(l){return e.DH7(n.value5,l)||(n.value5=l),l}),e.k0s(),e.j41(19,"h3"),e.EFF(20,"With value outer min/max bounds"),e.k0s(),e.j41(21,"vcl-slider",1),e.mxI("valueChange",function(l){return e.DH7(n.value6,l)||(n.value6=l),l}),e.k0s()),2&o&&(e.R7$(2),e.R50("value",n.value1),e.R7$(),e.SpI("\nValue: ",n.value1," "),e.R7$(3),e.R50("value",n.value2),e.Y8G("min",0)("max",100)("scale",11),e.R7$(),e.SpI("\nValue: ",n.value2," "),e.R7$(3),e.R50("value",n.value3),e.Y8G("min",0)("max",100)("scale",11)("lock",!0),e.R7$(),e.SpI("\nValue: ",n.value3," "),e.R7$(3),e.R50("value",n.value4),e.Y8G("min",0)("max",5)("enableWheel",!0)("scale",e.lJ4(28,g)),e.R7$(),e.SpI("\nValue: ",n.value4," "),e.R7$(3),e.R50("value",n.value5),e.Y8G("min",0)("max",7)("disabled",!0)("scale",e.lJ4(29,f)),e.R7$(3),e.R50("value",n.value6),e.Y8G("min",10)("max",100)("scale",11))},dependencies:[C.d],encapsulation:2})}return u})();const F='# vcl-slider\n\n## Usage\n\n_Note: HammerJS must be loaded for touch events_\n\n```js\nimport { VCLSliderModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLSliderModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-slider\n  [(value)]="value1"\n  [min]="0"\n  [max]="100"\n  [scale]="10">\n</vcl-slider>\n```\n\n```html\n<vcl-slider\n  [(value)]="value2"\n  [min]="0"\n  [max]="50"\n  [lock]="5"\n  [enableWheel]="true"\n  [scale]="[\'Zero\',\'One\',\'Two\',\'Three\',\'Four\',\'Five\']">\n</vcl-slider>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type                   | Default            | Description\n| ------------        | -----------            | ------------------ |--------------\n| `value`             | number                 |                    | The current value\n| `min`               | number                 | 0                  | The min value\n| `max`               | number                 | 100                | The max value\n| `scale`             | string[] &#124 number  |                    | The legend below the slider\n| `lock`              | boolean                | false              | The selectable value is locked to the scale\n| `enableWheel`       | boolean                | false              | Allows to change the value with the mouse wheel\n| `disabled`          | boolean                | false              | Disables the slider when true\n| `tabindex`          | number                 | 0                  | The tabindex of the slider\n\n#### Events\n\nName                  | Type             | Description\n--------------------- | ---------------  | -\n`valueChange`         | any &#124; any[] | emits the new value when slider value changes\n';function d(){return{label:"Slider",tabs:{Demo:D,"README.md":{type:"md",content:F},"demo.component.html":{type:"html",content:a(2108)},"demo.component.ts":{type:"ts",content:a(2031)}}}}let b=(()=>{class u{static#e=this.\u0275fac=function(o){return new(o||u)};static#l=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[t.MD,h.YN,v.q,p.F5u,c.iI.forChild([{path:"",component:v.D,data:{demo:d}}])]})}return u})()},2108:(i,s,a)=>{a.r(s),a.d(s,{default:()=>t});const t='<h3>Basic</h3>\n<vcl-slider [(value)]="value1"></vcl-slider>\nValue: {{value1}}\n\n<h3>With a scale</h3>\n<vcl-slider \n  [(value)]="value2" \n  [min]="0" \n  [max]="100"\n  [scale]="11">\n</vcl-slider>\nValue: {{value2}}\n\n<h3>With value locked to the scale</h3>\n<vcl-slider \n  [(value)]="value3" \n  [min]="0" \n  [max]="100"\n  [scale]="11"\n  [lock]="true" >\n</vcl-slider>\nValue: {{value3}}\n\n\n<h3>custom labeled scale</h3>\n<vcl-slider \n  [(value)]="value4" \n  [min]="0" \n  [max]="5" \n  [enableWheel]="true" \n  [scale]="[\'\u2600\',\'\u2601\',\'\u2602\',\'\u2603\',\'\u2604\',\'1\']">\n</vcl-slider>\nValue: {{value4}}\n\n\n<h3>disabled</h3>\n\n<vcl-slider \n  [(value)]="value5" \n  [min]="0" \n  [max]="7" \n  [disabled]="true" \n  [scale]="[\'d\',\'i\',\'s\',\'a\',\'b\',\'l\', \'e\', \'d\']">\n</vcl-slider>\n\n<h3>With value outer min/max bounds</h3>\n<vcl-slider \n  [(value)]="value6" \n  [min]="10" \n  [max]="100"\n  [scale]="11">\n</vcl-slider>\n'},2031:(i,s,a)=>{a.r(s),a.d(s,{default:()=>t});const t="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class SliderDemoComponent {\n  value1 = 0;\n  value2 = 0;\n  value3 = 0;\n  value4 = 0;\n  value5 = 0;\n  value6 = 0;\n}\n"}}]);