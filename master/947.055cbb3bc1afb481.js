"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[947],{1947:(k,l,n)=>{n.r(l),n.d(l,{TokenDemoModule:()=>T,demo:()=>d});var v=n(177),h=n(4341),p=n(164),i=n(3323),u=n(9042),e=n(4438),g=n(9096),b=n(3439),f=n(7829);const r=()=>[1];let C=(()=>{class t{onRemove(a){console.log("onRemove",a)}onListChange(a){console.log("onListChange",a)}onInputChange(a){console.log("onInputChange",a)}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["ng-component"]],standalone:!1,decls:33,vars:14,consts:[[3,"selected"],[3,"remove","removable"],[3,"valueChange","value"],[3,"value"],[3,"valueChange","value","selectable","removable"],[3,"valueChange"],[3,"disabled"]],template:function(s,c){1&s&&(e.j41(0,"h3"),e.EFF(1,"single tokens"),e.k0s(),e.j41(2,"vcl-token"),e.EFF(3,"my token"),e.k0s(),e.j41(4,"vcl-token",0),e.EFF(5,"my selected token"),e.k0s(),e.j41(6,"vcl-token",1),e.bIt("remove",function(o){return c.onRemove(o)}),e.EFF(7,"my removable token"),e.k0s(),e.j41(8,"vcl-token",1),e.bIt("remove",function(o){return c.onRemove(o)}),e.EFF(9,"my icon token"),e.k0s(),e.nrm(10,"br"),e.j41(11,"h3"),e.EFF(12,"token-list"),e.k0s(),e.j41(13,"vcl-token-list",2),e.bIt("valueChange",function(o){return c.onListChange(o)}),e.j41(14,"vcl-token",3),e.EFF(15,"my token 1"),e.k0s(),e.j41(16,"vcl-token",3),e.EFF(17,"my token 2"),e.k0s()(),e.nrm(18,"br"),e.j41(19,"h3"),e.EFF(20,"selectable and removable tokenlist"),e.k0s(),e.j41(21,"vcl-token-list",4),e.bIt("valueChange",function(o){return c.onListChange(o)}),e.j41(22,"vcl-token",3),e.EFF(23,"my token 1"),e.k0s(),e.j41(24,"vcl-token",3),e.EFF(25,"my token 2"),e.k0s()(),e.nrm(26,"br"),e.j41(27,"h3"),e.EFF(28,"token-input"),e.k0s(),e.j41(29,"vcl-token-input",5),e.bIt("valueChange",function(o){return c.onInputChange(o)}),e.k0s(),e.j41(30,"h3"),e.EFF(31,"token-input (disabled)"),e.k0s(),e.nrm(32,"vcl-token-input",6)),2&s&&(e.R7$(4),e.Y8G("selected",!0),e.R7$(2),e.Y8G("removable",!0),e.R7$(2),e.Y8G("removable",!0),e.R7$(5),e.Y8G("value",e.lJ4(12,r)),e.R7$(),e.Y8G("value",1),e.R7$(2),e.Y8G("value",2),e.R7$(5),e.Y8G("value",e.lJ4(13,r))("selectable",!0)("removable",!0),e.R7$(),e.Y8G("value",1),e.R7$(2),e.Y8G("value",2),e.R7$(8),e.Y8G("disabled",!0))},dependencies:[g.b,b.R,f.i],encapsulation:2})}}return t})();const y='# vcl-token\n\n## Usage\n\n```js\nimport { VCLTokenModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLTokenModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n## single token\n\n```html\n<vcl-token>mytoken</vcl-token>\n```\n\n## single selected token\n\n```html\n<vcl-token [selected]="true">mytoken</vcl-token>\n```\n\n## single removable token\n\n```html\n<vcl-token [removable]="true" (remove)="onRemove()">mytoken</vcl-token>\n```\n\n## token-list\n\n```html\n<vcl-token-list [selectable]="true" (change)="changed($event);">\n  <vcl-token [selected]="true">mytoken 1</vcl-token>\n  <vcl-token [selected]="false">mytoken 2</vcl-token>\n</vcl-token-list>\n```\n\n## token-input\n\n```html\n<vcl-token-input (valueChange)="changed($event);"></vcl-token-input>\n```\n\n### API\n\n#### vcl-token attributes\n\nName          | Type    | Default   | Description\n------------  | ------- | -------   | ---------------------------------------\n`value`       | any     |           | token value\n`selected`    | boolean | false     | if true, the token is highlighted\n`removable`   | boolean | false     | if true, the remove-cross is shown\n\n#### vcl-token events\n\nName        | Type    | Description\n----------- | ------- | ----------------------\n`remove`    |         | called when the remove-button is pressed\n\n#### token-list attributes\n\nName         | Type     | Default  | Description\n------------ | -------- | -------- | ------------------------------------------------------------\n`value`      | any[]    | any[]    | The values of the selected tokens\n`selectable` | boolean  | false    | tokens are selectable if true\n\n#### token-list events\n\nName                  | Type     | Description\n--------------------- | -------- | -----------\n`tokensChange`        | string[] | called when the selection of token changes\n\n#### vcl-token-input attributes\n\nName                 | Type     | Default              | Description\n------------         | -------- | -------              | ------------------------------------------------------------\n`value`              | Token[]  | []                   | List of tokens\n`selectable`         | boolean  | false                | tokens are selectable if true\n`allowDuplicates`    | boolean  | false                | tokens with matching values are not added\n`addOnEnter`         | boolean  | true                 | New token will be added when pressing enter\n`preselect`          | boolean  | true                 | tokens are selected after being added if true\n`tokenClass`         | string   |                      | additional css class for tokens\n`tabindex`           | number   | 0                    | The tabindex of the token-input\n\n#### vcl-token-input events\n\nName            | Type    | Description\n--------------- | ------- | ---------------\n`valueChange`   | Token[] | called after tokens are added/removed or the selection of token changes\n`confirm`       | Token[] | called after `enter` is pressed when input element is empty\n\n#### interfaces\n\n```ts\ninterface Token {\n  label: string;\n  value: any;\n  selected?: boolean;\n}\n```\n';function d(){return{label:"Token",tabs:{Demo:C,"README.md":{type:"md",content:y},"demo.component.html":{type:"html",content:n(3642)},"demo.component.ts":{type:"ts",content:n(4662)}}}}let T=(()=>{class t{static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[v.MD,h.YN,u.q,i.L86,i.AeE,p.iI.forChild([{path:"",component:u.D,data:{demo:d}}])]})}}return t})()},3642:(k,l,n)=>{n.r(l),n.d(l,{default:()=>v});const v='<h3>single tokens</h3>\n<vcl-token>my token</vcl-token>\n<vcl-token [selected]="true">my selected token</vcl-token>\n<vcl-token [removable]="true" (remove)="onRemove($event)">my removable token</vcl-token>\n<vcl-token [removable]="true" (remove)="onRemove($event)">my icon token</vcl-token>\n<br/>\n\n<h3>token-list</h3>\n<vcl-token-list [value]="[1]" (valueChange)="onListChange($event);">\n  <vcl-token [value]="1">my token 1</vcl-token>\n  <vcl-token [value]="2">my token 2</vcl-token>\n</vcl-token-list>\n<br/>\n\n<h3>selectable and removable tokenlist</h3>\n<vcl-token-list [value]="[1]" [selectable]="true" [removable]="true" (valueChange)="onListChange($event);">\n  <vcl-token [value]="1">my token 1</vcl-token>\n  <vcl-token [value]="2">my token 2</vcl-token>\n</vcl-token-list>\n<br/>\n\n<h3>token-input</h3>\n<vcl-token-input (valueChange)="onInputChange($event);"></vcl-token-input>\n\n<h3>token-input (disabled)</h3>\n<vcl-token-input [disabled]="true"></vcl-token-input>\n'},4662:(k,l,n)=>{n.r(l),n.d(l,{default:()=>v});const v="import { Component } from '@angular/core';\n\n@Component({\n    templateUrl: 'demo.component.html',\n    standalone: false\n})\nexport class TokenDemoComponent {\n  onRemove(token) {\n    console.log('onRemove', token);\n  }\n\n  onListChange(value) {\n    console.log('onListChange', value);\n  }\n\n  onInputChange(value) {\n    console.log('onInputChange', value);\n  }\n}\n"}}]);