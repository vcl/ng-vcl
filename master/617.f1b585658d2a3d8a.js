"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[617],{4617:(c,a,e)=>{e.r(a),e.d(a,{SpinnerDemoModule:()=>y,demo:()=>u});var i=e(177),p=e(4341),g=e(164),d=e(3323),m=e(9042),n=e(4438),f=e(9826),h=e(2853),M=e(3729),C=e(5694),D=e(1503),E=e(9732);let S=(()=>{class l{constructor(){this.data1=0,this.data2=0}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=n.VBU({type:l,selectors:[["ng-component"]],standalone:!1,decls:16,vars:6,consts:[[3,"spinner"],["vclInput","","type","number",3,"ngModelChange","ngModel"],["orientation","vertical",3,"ngModelChange","ngModel"],["orientation","Horizontal",3,"ngModelChange","ngModel"]],template:function(r,o){1&r&&(n.j41(0,"h3"),n.EFF(1,"Vertical"),n.k0s(),n.j41(2,"vcl-form-control-group",0)(3,"vcl-label"),n.EFF(4,"Vertical"),n.k0s(),n.j41(5,"vcl-input-field")(6,"input",1),n.mxI("ngModelChange",function(t){return n.DH7(o.data1,t)||(o.data1=t),t}),n.k0s(),n.j41(7,"vcl-spinner",2),n.mxI("ngModelChange",function(t){return n.DH7(o.data1,t)||(o.data1=t),t}),n.k0s()()(),n.j41(8,"h3"),n.EFF(9,"Horizontal"),n.k0s(),n.j41(10,"vcl-form-control-group",0)(11,"vcl-label"),n.EFF(12,"Horizontal"),n.k0s(),n.j41(13,"vcl-input-field")(14,"input",1),n.mxI("ngModelChange",function(t){return n.DH7(o.data2,t)||(o.data2=t),t}),n.k0s(),n.j41(15,"vcl-spinner",3),n.mxI("ngModelChange",function(t){return n.DH7(o.data2,t)||(o.data2=t),t}),n.k0s()()()),2&r&&(n.R7$(2),n.Y8G("spinner",!0),n.R7$(4),n.R50("ngModel",o.data1),n.R7$(),n.R50("ngModel",o.data1),n.R7$(3),n.Y8G("spinner",!0),n.R7$(4),n.R50("ngModel",o.data2),n.R7$(),n.R50("ngModel",o.data2))},dependencies:[p.me,p.Q0,p.BC,p.vS,f.k,h._,M.W,C.C3,D.Uf,E.t],encapsulation:2})}}return l})();const R='# vcl-spinner\n\n`vcl-spinner` is a simple spinner element with 2 buttons where one increments the provided value, the other decrements.\n\n## Usage\n\n```js\nimport { VCLSpinnerModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [VCLSpinnerModule],\n  ...\n})\nexport class AppComponent {\n}\n```\n\n### Basic spinner\n\n```html\n<vcl-spinner [(ngModel)]="value"></vcl-spinner>\n```\n\n### Spinner inside input\n\n```html\n<vcl-form-control-group [spinner]="true">\n  <vcl-label>Sample</vcl-label>\n  <vcl-input-field>\n    <input vclInput [(ngModel)]="value" type="number"/>\n  </vcl-input-field>\n  <vcl-spinner [(ngModel)]="value"></vcl-spinner>\n</vcl-form-control-group>\n```\n\n### API\n\n#### vcl-spinner square attributes\n\n| Name                | Type           | Default  | Description\n| ------------        |----------------| -------- |------------\n| `orientation`       | \'horizontal\' \\| \'vertical\'     | \'vertical\' | Orientation the buttons are placed in\n';function u(){return{label:"Spinner",tabs:{Demo:S,"README.md":{type:"md",content:R},"demo.component.html":{type:"html",content:e(9530)},"demo.component.ts":{type:"ts",content:e(8662)}}}}let y=(()=>{class l{static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275mod=n.$C({type:l})}static{this.\u0275inj=n.G2t({imports:[i.MD,p.YN,m.q,d.AeE,d.HG6,d.j2$,d.e7Q,g.iI.forChild([{path:"",component:m.D,data:{demo:u}}])]})}}return l})()},9530:(c,a,e)=>{e.r(a),e.d(a,{default:()=>i});const i='<h3>Vertical</h3>\n\n<vcl-form-control-group [spinner]="true">\n  <vcl-label>Vertical</vcl-label>\n  <vcl-input-field>\n    <input vclInput [(ngModel)]="data1" type="number" />\n    <vcl-spinner [(ngModel)]="data1" orientation="vertical"></vcl-spinner>\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<h3>Horizontal</h3>\n\n<vcl-form-control-group [spinner]="true">\n  <vcl-label>Horizontal</vcl-label>\n  <vcl-input-field>\n    <input vclInput [(ngModel)]="data2" type="number" />\n    <vcl-spinner [(ngModel)]="data2" orientation="Horizontal"></vcl-spinner>\n  </vcl-input-field>\n</vcl-form-control-group>\n'},8662:(c,a,e)=>{e.r(a),e.d(a,{default:()=>i});const i="import { Component } from '@angular/core';\n\n@Component({\n    templateUrl: 'demo.component.html',\n    standalone: false\n})\nexport class SpinnerDemoComponent {\n  data1 = 0;\n  data2 = 0;\n}\n"}}]);