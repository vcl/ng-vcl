(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{AZ7W:function(n,e,t){"use strict";t.r(e),t.d(e,"demo",function(){return m}),t.d(e,"FileInputDemoModule",function(){return f});var l=t("ofXK"),i=t("3Pt+"),c=t("tyNb"),p=t("19H1"),u=t("2FIb"),o=t("fXoL"),a=t("DMRj");let s=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Eb({type:n,selectors:[["ng-component"]],decls:16,vars:2,consts:[[3,"disabled"],[3,"multiple"],["accept","image/png"]],template:function(n,e){1&n&&(o.Qb(0,"h3"),o.xc(1,"File Input"),o.Pb(),o.Qb(2,"vcl-file-input"),o.xc(3,"My File"),o.Pb(),o.Qb(4,"h3"),o.xc(5,"File Input (Disabled)"),o.Pb(),o.Qb(6,"vcl-file-input",0),o.xc(7,"My File"),o.Pb(),o.Qb(8,"h3"),o.xc(9,"File Input (multiple)"),o.Pb(),o.Qb(10,"vcl-file-input",1),o.xc(11,"Many Files"),o.Pb(),o.Qb(12,"h3"),o.xc(13,"File Input (.png only)"),o.Pb(),o.Qb(14,"vcl-file-input",2),o.xc(15,"An Image"),o.Pb()),2&n&&(o.zb(6),o.gc("disabled",!0),o.zb(4),o.gc("multiple",!0))},directives:[a.a],encapsulation:2}),n})();function m(){return{label:"File Input",tabs:{Demo:s,"README.md":{type:"md",content:'# vcl-file-input\n\nEnhanced file input\n\n## Usage\n\n```html\n<vcl-file-input [multiple]="true" [accept]="accept" [disabled]="disabled">My Files</vcl-file-input>\n```\n\n### API\n\n#### Attributes\n\nName          | Type    | Default      | Description\n------------- | ------- | ------------ | ---------------------------------------------------\n`accept`      | string  |              | like html5 file-input\n`disabled`    | boolean | false        |\n`multiple`    | boolean | false        | if true, more than 1 file can be selected\n\n#### Events\n\n| Name                  | Type             | Description\n| --------------------- | ---------------  | -\n| `valueChange`         | any &#124; any[] | emits the new value when files have changed\n'},"demo.component.html":{type:"html",content:t("uQ53")},"demo.component.ts":{type:"ts",content:t("fBKU")}}}}let f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.Ib({type:n}),n.\u0275inj=o.Hb({imports:[[l.c,i.i,u.b,p.G,c.g.forChild([{path:"",component:u.a,data:{demo:m}}])]]}),n})()},fBKU:function(n,e,t){"use strict";t.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class FileInputDemoComponent { }\n"},uQ53:function(n,e,t){"use strict";t.r(e),e.default='<h3>File Input</h3>\n<vcl-file-input>My File</vcl-file-input>\n\n\n<h3>File Input (Disabled)</h3>\n<vcl-file-input [disabled]="true">My File</vcl-file-input>\n\n<h3>File Input (multiple)</h3>\n<vcl-file-input [multiple]="true">Many Files</vcl-file-input>\n\n<h3>File Input (.png only)</h3>\n<vcl-file-input accept="image/png">An Image</vcl-file-input>\n'}}]);