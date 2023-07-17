"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[204],{3204:(p,l,e)=>{e.r(l),e.d(l,{FileInputDemoModule:()=>F,demo:()=>c});var o=e(6814),a=e(95),s=e(2911),d=e(5972),m=e(2320),n=e(5879),f=e(7207);let h=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-component"]],decls:16,vars:2,consts:[[3,"disabled"],[3,"multiple"],["accept","image/png"]],template:function(i,g){1&i&&(n.TgZ(0,"h3"),n._uU(1,"File Input"),n.qZA(),n.TgZ(2,"vcl-file-input"),n._uU(3,"My File"),n.qZA(),n.TgZ(4,"h3"),n._uU(5,"File Input (Disabled)"),n.qZA(),n.TgZ(6,"vcl-file-input",0),n._uU(7,"My File"),n.qZA(),n.TgZ(8,"h3"),n._uU(9,"File Input (multiple)"),n.qZA(),n.TgZ(10,"vcl-file-input",1),n._uU(11,"Many Files"),n.qZA(),n.TgZ(12,"h3"),n._uU(13,"File Input (.png only)"),n.qZA(),n.TgZ(14,"vcl-file-input",2),n._uU(15,"An Image"),n.qZA()),2&i&&(n.xp6(6),n.Q6J("disabled",!0),n.xp6(4),n.Q6J("multiple",!0))},dependencies:[f.Y],encapsulation:2}),t})();const v='# vcl-file-input\n\nEnhanced file input\n\n## Usage\n\n```html\n<vcl-file-input [multiple]="true" [accept]="accept" [disabled]="disabled"\n  >My Files</vcl-file-input\n>\n```\n\n### API\n\n#### Attributes\n\n| Name       | Type    | Default | Description                               |\n| ---------- | ------- | ------- | ----------------------------------------- |\n| `accept`   | string  |         | like html5 file-input                     |\n| `disabled` | boolean | false   |\n| `multiple` | boolean | false   | if true, more than 1 file can be selected |\n\n#### Events\n\n| Name          | Type             | Description                                 |\n| ------------- | ---------------- | ------------------------------------------- |\n| `valueChange` | any &#124; any[] | emits the new value when files have changed |\n';function c(){return{label:"File Input",tabs:{Demo:h,"README.md":{type:"md",content:v},"demo.component.html":{type:"html",content:e(1498)},"demo.component.ts":{type:"ts",content:e(4931)}}}}let F=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[o.ez,a.u5,m.l,d.zY$,s.Bz.forChild([{path:"",component:m.z,data:{demo:c}}])]}),t})()},1498:(p,l,e)=>{e.r(l),e.d(l,{default:()=>o});const o='<h3>File Input</h3>\n<vcl-file-input>My File</vcl-file-input>\n\n<h3>File Input (Disabled)</h3>\n<vcl-file-input [disabled]="true">My File</vcl-file-input>\n\n<h3>File Input (multiple)</h3>\n<vcl-file-input [multiple]="true">Many Files</vcl-file-input>\n\n<h3>File Input (.png only)</h3>\n<vcl-file-input accept="image/png">An Image</vcl-file-input>\n'},4931:(p,l,e)=>{e.r(l),e.d(l,{default:()=>o});const o="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class FileInputDemoComponent {}\n"}}]);