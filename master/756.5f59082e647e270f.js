"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[756],{1756:(v,o,l)=>{l.r(o),l.d(o,{InputDemoModule:()=>C,demo:()=>m});var c=l(6895),u=l(433),s=l(4629),p=l(9787),d=l(9155),n=l(4650),g=l(1435),f=l(1352),b=l(1441),Z=l(5550),I=l(2007),h=l(1300),A=l(6447),x=l(6994);let T=(()=>{class t{constructor(){this.data1="",this.data2=""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-component"]],decls:43,vars:8,consts:[["vclInput","",3,"ngModel","ngModelChange"],["vclInput","","autoselect","true"],["vclPrepend","","icon","mdi:email"],["vclAppend","","vcl-button","","square",""],["icon","mdi:close"],["vclInput","","value","readonly",3,"readonly"],["vclInput","","value","disabled",3,"disabled"],[1,"auto-height"],["vclInput","","rows","3"],["vclInput","",3,"autogrow","minRows","maxRows"],["vclInput","",3,"disabled"]],template:function(e,r){1&e&&(n.TgZ(0,"vcl-form-control-group")(1,"vcl-label"),n._uU(2,"Basic input"),n.qZA(),n.TgZ(3,"vcl-input-field")(4,"input",0),n.NdJ("ngModelChange",function(i){return r.data1=i}),n.qZA()()(),n.TgZ(5,"vcl-form-control-group")(6,"vcl-label"),n._uU(7,"Input (autoselect)"),n.qZA(),n.TgZ(8,"vcl-input-field"),n._UZ(9,"input",1),n.qZA()(),n.TgZ(10,"vcl-form-control-group")(11,"vcl-label"),n._uU(12,"Email"),n.qZA(),n.TgZ(13,"vcl-input-field"),n._UZ(14,"vcl-icon",2),n.TgZ(15,"input",0),n.NdJ("ngModelChange",function(i){return r.data2=i}),n.qZA(),n.TgZ(16,"button",3),n._UZ(17,"vcl-icon",4),n.qZA()()(),n.TgZ(18,"vcl-form-control-group")(19,"vcl-label"),n._uU(20,"Readonly input"),n.qZA(),n.TgZ(21,"vcl-input-field"),n._UZ(22,"input",5),n.qZA()(),n.TgZ(23,"vcl-form-control-group")(24,"vcl-label"),n._uU(25,"Disabled input"),n.qZA(),n.TgZ(26,"vcl-input-field"),n._UZ(27,"input",6),n.qZA()(),n.TgZ(28,"vcl-form-control-group")(29,"vcl-label"),n._uU(30,"textarea"),n.qZA(),n.TgZ(31,"vcl-input-field",7),n._UZ(32,"textarea",8),n.qZA()(),n.TgZ(33,"vcl-form-control-group")(34,"vcl-label"),n._uU(35,"Autogrowing textarea"),n.qZA(),n.TgZ(36,"vcl-input-field",7),n._UZ(37,"textarea",9),n.qZA()(),n.TgZ(38,"vcl-form-control-group")(39,"vcl-label"),n._uU(40,"Disabled textarea"),n.qZA(),n.TgZ(41,"vcl-input-field",7),n._UZ(42,"textarea",10),n.qZA()()),2&e&&(n.xp6(4),n.Q6J("ngModel",r.data1),n.xp6(11),n.Q6J("ngModel",r.data2),n.xp6(7),n.Q6J("readonly",!0),n.xp6(5),n.Q6J("disabled",!0),n.xp6(10),n.Q6J("autogrow",!0)("minRows",5)("maxRows",10),n.xp6(5),n.Q6J("disabled",!0))},dependencies:[u.Fj,u.JJ,u.On,g.V,f.b,b.q,Z.o,I.q8,h._T,A.o,x.r],encapsulation:2}),t})();function m(){return{label:"Input",tabs:{Demo:T,"README.md":{type:"md",content:'# input\n\nEnhanced text input\n\n## Usage\n\n```js\nimport { VCLInputModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLInputModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-form-control-group>\n  <vcl-label>Basic input</vcl-label>\n  <vcl-input-field>\n    <input vclInput [(ngModel)]="data1" />\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Basic textarea</vcl-label>\n  <vcl-input-field>\n    <textarea vclInput [(ngModel)]="data1" [autogrow]="true" [minRows]="5" [maxRows]="10"></textarea>\n  </vcl-input-field>\n</vcl-form-control-group>\n\n```\n\n### API\n\n#### input[vclInput] attributes\n\nName            | Type    | Default | Description\n--------------- | ------- | ------- | -----------------------------------------------\n`disabled`      | boolean | false   | Disables the input when true\n`autoselect`    | boolean | false   | Selects text on focus\n\n\n#### textarea[vclInput] Attributes\n\n| Name                | Type        | Default            | Description\n| ------------        | ----------- | ------------------ |--------------\n| `autogrow`          | boolean     | false              | Adjusts the `rows` attribute so it matches the current values number of lines\n| `minRows`           | number      |                    | The min value for `rows` when using autogrow\n| `maxRows`           | number      |                    | The max value for `rows` when using autogrow\n| `autoselect`        | boolean     | false              | Selects text on focus\n'},"demo.component.html":{type:"html",content:l(8838)},"demo.component.ts":{type:"ts",content:l(5678)}}}}let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.ez,u.u5,d.l,p.WdB,p.NhM,p.V4c,s.Bz.forChild([{path:"",component:d.z,data:{demo:m}}])]}),t})()},8838:(v,o,l)=>{l.r(o),l.d(o,{default:()=>c});const c='<vcl-form-control-group>\n  <vcl-label>Basic input</vcl-label>\n  <vcl-input-field>\n    <input vclInput [(ngModel)]="data1" />\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Input (autoselect)</vcl-label>\n  <vcl-input-field>\n    <input vclInput autoselect=true />\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Email</vcl-label>\n  <vcl-input-field>\n    <vcl-icon vclPrepend icon="mdi:email"></vcl-icon>\n    <input vclInput [(ngModel)]="data2" />\n    <button vclAppend vcl-button square>\n      <vcl-icon icon="mdi:close"></vcl-icon>\n    </button>\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Readonly input</vcl-label>\n  <vcl-input-field>\n    <input vclInput value=\'readonly\' [readonly]="true" />\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Disabled input</vcl-label>\n  <vcl-input-field>\n    <input vclInput value=\'disabled\' [disabled]="true" />\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>textarea</vcl-label>\n  <vcl-input-field class="auto-height">\n    <textarea vclInput rows="3"></textarea>\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Autogrowing textarea</vcl-label>\n  <vcl-input-field class="auto-height">\n    <textarea vclInput [autogrow]="true" [minRows]="5" [maxRows]="10"></textarea>\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Disabled textarea</vcl-label>\n  <vcl-input-field class="auto-height">\n    <textarea vclInput [disabled]="true"></textarea>\n  </vcl-input-field>\n</vcl-form-control-group>\n'},5678:(v,o,l)=>{l.r(o),l.d(o,{default:()=>c});const c="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class InputDemoComponent {\n  data1 = '';\n  data2 = '';\n}\n"}}]);