"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[843],{1843:(s,t,e)=>{e.r(t),e.d(t,{SpinnerDemoModule:()=>y,demo:()=>g});var p=e(6814),a=e(95),f=e(2911),c=e(2916),v=e(2320),n=e(5879),h=e(3881),M=e(7718),C=e(3691),D=e(8748),S=e(7536),T=e(3622);let A=(()=>{var o;class d{constructor(){this.data1=0,this.data2=0}}return(o=d).\u0275fac=function(i){return new(i||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["ng-component"]],decls:16,vars:6,consts:[[3,"spinner"],["vclInput","","type","number",3,"ngModel","ngModelChange"],["orientation","vertical",3,"ngModel","ngModelChange"],["orientation","Horizontal",3,"ngModel","ngModelChange"]],template:function(i,l){1&i&&(n.TgZ(0,"h3"),n._uU(1,"Vertical"),n.qZA(),n.TgZ(2,"vcl-form-control-group",0)(3,"vcl-label"),n._uU(4,"Vertical"),n.qZA(),n.TgZ(5,"vcl-input-field")(6,"input",1),n.NdJ("ngModelChange",function(r){return l.data1=r}),n.qZA(),n.TgZ(7,"vcl-spinner",2),n.NdJ("ngModelChange",function(r){return l.data1=r}),n.qZA()()(),n.TgZ(8,"h3"),n._uU(9,"Horizontal"),n.qZA(),n.TgZ(10,"vcl-form-control-group",0)(11,"vcl-label"),n._uU(12,"Horizontal"),n.qZA(),n.TgZ(13,"vcl-input-field")(14,"input",1),n.NdJ("ngModelChange",function(r){return l.data2=r}),n.qZA(),n.TgZ(15,"vcl-spinner",3),n.NdJ("ngModelChange",function(r){return l.data2=r}),n.qZA()()()),2&i&&(n.xp6(2),n.Q6J("spinner",!0),n.xp6(4),n.Q6J("ngModel",l.data1),n.xp6(1),n.Q6J("ngModel",l.data1),n.xp6(3),n.Q6J("spinner",!0),n.xp6(4),n.Q6J("ngModel",l.data2),n.xp6(1),n.Q6J("ngModel",l.data2))},dependencies:[a.Fj,a.wV,a.JJ,a.On,h.V,M.q,C.o,D.q8,S._T,T.O],encapsulation:2}),d})();const Z='# vcl-spinner\n\n`vcl-spinner` is a simple spinner element with 2 buttons where one increments the provided value, the other decrements.\n\n## Usage\n\n```typescript\nimport { VCLSpinnerModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [VCLSpinnerModule],\n  ...\n})\nexport class AppComponent {\n}\n```\n\n### Basic spinner\n\n```html\n<vcl-spinner [(ngModel)]="value"></vcl-spinner>\n```\n\n### Spinner inside input\n\n```html\n<vcl-form-control-group [spinner]="true">\n  <vcl-label>Sample</vcl-label>\n  <vcl-input-field>\n    <input vclInput [(ngModel)]="value" type="number" />\n  </vcl-input-field>\n  <vcl-spinner [(ngModel)]="value"></vcl-spinner>\n</vcl-form-control-group>\n```\n\n### API\n\n#### vcl-spinner square attributes\n\n| Name          | Type                       | Default    | Description                           |\n| ------------- | -------------------------- | ---------- | ------------------------------------- |\n| `orientation` | \'horizontal\' \\| \'vertical\' | \'vertical\' | Orientation the buttons are placed in |\n';function g(){return{label:"Spinner",tabs:{Demo:A,"README.md":{type:"md",content:Z},"demo.component.html":{type:"html",content:e(1119)},"demo.component.ts":{type:"ts",content:e(3238)}}}}let y=(()=>{var o;class d{}return(o=d).\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[p.ez,a.u5,v.l,c.WdB,c.LZz,c.NhM,c.V4c,f.Bz.forChild([{path:"",component:v.z,data:{demo:g}}])]}),d})()},1119:(s,t,e)=>{e.r(t),e.d(t,{default:()=>p});const p='<h3>Vertical</h3>\n\n<vcl-form-control-group [spinner]="true">\n  <vcl-label>Vertical</vcl-label>\n  <vcl-input-field>\n    <input vclInput [(ngModel)]="data1" type="number" />\n    <vcl-spinner [(ngModel)]="data1" orientation="vertical"></vcl-spinner>\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<h3>Horizontal</h3>\n\n<vcl-form-control-group [spinner]="true">\n  <vcl-label>Horizontal</vcl-label>\n  <vcl-input-field>\n    <input vclInput [(ngModel)]="data2" type="number" />\n    <vcl-spinner [(ngModel)]="data2" orientation="Horizontal"></vcl-spinner>\n  </vcl-input-field>\n</vcl-form-control-group>\n'},3238:(s,t,e)=>{e.r(t),e.d(t,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class SpinnerDemoComponent {\n  data1 = 0;\n  data2 = 0;\n}\n"}}]);