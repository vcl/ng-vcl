"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[719],{719:(u,a,n)=>{n.r(a),n.d(a,{TokenDemoModule:()=>y,demo:()=>d});var s=n(9808),p=n(2382),h=n(4161),k=n(8934),r=n(9155),e=n(4893),g=n(2769),T=n(3546),C=n(7639);const i=function(){return[1]};let f=(()=>{class t{onRemove(o){console.log("onRemove",o)}onListChange(o){console.log("onListChange",o)}onInputChange(o){console.log("onInputChange",o)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:33,vars:14,consts:[[3,"selected"],[3,"removable","remove"],[3,"value","valueChange"],[3,"value"],[3,"value","selectable","removable","valueChange"],[3,"valueChange"],[3,"disabled"]],template:function(o,v){1&o&&(e.TgZ(0,"h3"),e._uU(1,"single tokens"),e.qZA(),e.TgZ(2,"vcl-token"),e._uU(3,"my token"),e.qZA(),e.TgZ(4,"vcl-token",0),e._uU(5,"my selected token"),e.qZA(),e.TgZ(6,"vcl-token",1),e.NdJ("remove",function(l){return v.onRemove(l)}),e._uU(7,"my removable token"),e.qZA(),e.TgZ(8,"vcl-token",1),e.NdJ("remove",function(l){return v.onRemove(l)}),e._uU(9,"my icon token"),e.qZA(),e._UZ(10,"br"),e.TgZ(11,"h3"),e._uU(12,"token-list"),e.qZA(),e.TgZ(13,"vcl-token-list",2),e.NdJ("valueChange",function(l){return v.onListChange(l)}),e.TgZ(14,"vcl-token",3),e._uU(15,"my token 1"),e.qZA(),e.TgZ(16,"vcl-token",3),e._uU(17,"my token 2"),e.qZA()(),e._UZ(18,"br"),e.TgZ(19,"h3"),e._uU(20,"selectable and removable tokenlist"),e.qZA(),e.TgZ(21,"vcl-token-list",4),e.NdJ("valueChange",function(l){return v.onListChange(l)}),e.TgZ(22,"vcl-token",3),e._uU(23,"my token 1"),e.qZA(),e.TgZ(24,"vcl-token",3),e._uU(25,"my token 2"),e.qZA()(),e._UZ(26,"br"),e.TgZ(27,"h3"),e._uU(28,"token-input"),e.qZA(),e.TgZ(29,"vcl-token-input",5),e.NdJ("valueChange",function(l){return v.onInputChange(l)}),e.qZA(),e.TgZ(30,"h3"),e._uU(31,"token-input (disabled)"),e.qZA(),e._UZ(32,"vcl-token-input",6)),2&o&&(e.xp6(4),e.Q6J("selected",!0),e.xp6(2),e.Q6J("removable",!0),e.xp6(2),e.Q6J("removable",!0),e.xp6(5),e.Q6J("value",e.DdM(12,i)),e.xp6(1),e.Q6J("value",1),e.xp6(2),e.Q6J("value",2),e.xp6(5),e.Q6J("value",e.DdM(13,i))("selectable",!0)("removable",!0),e.xp6(1),e.Q6J("value",1),e.xp6(2),e.Q6J("value",2),e.xp6(8),e.Q6J("disabled",!0))},directives:[g.q,T.M,C.p],encapsulation:2}),t})();function d(){return{label:"Token",tabs:{Demo:f,"README.md":{type:"md",content:'# vcl-token\n\n## Usage\n\n```js\nimport { VCLTokenModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLTokenModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n## single token\n\n```html\n<vcl-token>mytoken</vcl-token>\n```\n\n## single selected token\n\n```html\n<vcl-token [selected]="true">mytoken</vcl-token>\n```\n\n## single removable token\n\n```html\n<vcl-token [removable]="true" (remove)="onRemove()">mytoken</vcl-token>\n```\n\n## token-list\n\n```html\n<vcl-token-list [selectable]="true" (change)="changed($event);">\n  <vcl-token [selected]="true">mytoken 1</vcl-token>\n  <vcl-token [selected]="false">mytoken 2</vcl-token>\n</vcl-token-list>\n```\n\n## token-input\n\n```html\n<vcl-token-input (valueChange)="changed($event);"></vcl-token-input>\n```\n\n### API\n\n#### vcl-token attributes\n\nName          | Type    | Default   | Description\n------------  | ------- | -------   | ---------------------------------------\n`value`       | any     |           | token value\n`selected`    | boolean | false     | if true, the token is highlighted\n`removable`   | boolean | false     | if true, the remove-cross is shown\n\n#### vcl-token events\n\nName        | Type    | Description\n----------- | ------- | ----------------------\n`remove`    |         | called when the remove-button is pressed\n\n#### token-list attributes\n\nName         | Type     | Default  | Description\n------------ | -------- | -------- | ------------------------------------------------------------\n`value`      | any[]    | any[]    | The values of the selected tokens\n`selectable` | boolean  | false    | tokens are selectable if true\n\n#### token-list events\n\nName                  | Type     | Description\n--------------------- | -------- | -----------\n`tokensChange`        | string[] | called when the selection of token changes\n\n#### vcl-token-input attributes\n\nName                 | Type     | Default              | Description\n------------         | -------- | -------              | ------------------------------------------------------------\n`value`              | Token[]  | []                   | List of tokens\n`selectable`         | boolean  | false                | tokens are selectable if true\n`allowDuplicates`    | boolean  | false                | tokens with matching values are not added\n`addOnEnter`         | boolean  | true                 | New token will be added when pressing enter\n`preselect`          | boolean  | true                 | tokens are preselected after being added if true\n`tokenClass`         | string   |                      | additional css class for tokens\n`tabindex`           | number   | 0                    | The tabindex of the token-input\n\n#### vcl-token-input events\n\nName            | Type    | Description\n--------------- | ------- | ---------------\n`valueChange`   | Token[] | called after tokens are added/removed or the selection of token changes\n`confirm`       | Token[] | called after `enter` is pressed when input element is empty\n\n#### interfaces\n\n```ts\ninterface Token {\n  label: string;\n  value: any;\n  selected?: boolean;\n}\n```\n'},"demo.component.html":{type:"html",content:n(8690)},"demo.component.ts":{type:"ts",content:n(3485)}}}}let y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,p.u5,r.l,k.uW2,k.WdB,h.Bz.forChild([{path:"",component:r.z,data:{demo:d}}])]]}),t})()},8690:(u,a,n)=>{n.r(a),n.d(a,{default:()=>s});const s='<h3>single tokens</h3>\n<vcl-token>my token</vcl-token>\n<vcl-token [selected]="true">my selected token</vcl-token>\n<vcl-token [removable]="true" (remove)="onRemove($event)">my removable token</vcl-token>\n<vcl-token [removable]="true" (remove)="onRemove($event)">my icon token</vcl-token>\n\n<br/>\n\n<h3>token-list</h3>\n<vcl-token-list [value]="[1]" (valueChange)="onListChange($event);">\n  <vcl-token [value]="1">my token 1</vcl-token>\n  <vcl-token [value]="2">my token 2</vcl-token>\n</vcl-token-list>\n<br/>\n\n<h3>selectable and removable tokenlist</h3>\n<vcl-token-list [value]="[1]" [selectable]="true" [removable]="true" (valueChange)="onListChange($event);">\n  <vcl-token [value]="1">my token 1</vcl-token>\n  <vcl-token [value]="2">my token 2</vcl-token>\n</vcl-token-list>\n<br/>\n\n<h3>token-input</h3>\n<vcl-token-input (valueChange)="onInputChange($event);"></vcl-token-input>\n\n<h3>token-input (disabled)</h3>\n<vcl-token-input [disabled]="true"></vcl-token-input>\n'},3485:(u,a,n)=>{n.r(a),n.d(a,{default:()=>s});const s="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class TokenDemoComponent {\n\n  onRemove(token) {\n    console.log('onRemove', token);\n  }\n\n  onListChange(value) {\n    console.log('onListChange', value);\n  }\n\n  onInputChange(value) {\n    console.log('onInputChange', value);\n  }\n}\n"}}]);