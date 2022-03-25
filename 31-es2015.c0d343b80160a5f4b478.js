(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"1cLn":function(n,e,t){"use strict";t.r(e),t.d(e,"demo",function(){return d}),t.d(e,"PanelDemoModule",function(){return m});var l=t("ofXK"),o=t("tyNb"),a=t("3Pt+"),c=t("19H1"),i=t("2FIb"),s=t("fXoL"),r=t("s+0I"),p=t("yMTc"),u=t("9Rb9"),v=t("6B8K");let b=(()=>{class n{constructor(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Eb({type:n,selectors:[["ng-component"]],decls:25,vars:1,consts:[[1,"row","align-items-center","py-1"],[3,"showCloseButton"],[1,"row","gutterx-3","align-items-center"],["icon","fas:exclamation-circle",1,"scale300p"],["type","button","vcl-button","","vclPanelFooterButton","",1,"transparent","outline"],["type","button","vcl-button","","vclPanelFooterButton","",1,"emphasized"],["type","warning"]],template:function(n,e){1&n&&(s.Qb(0,"vcl-panel"),s.Qb(1,"vcl-panel-title"),s.xc(2,"Panel Title"),s.Pb(),s.xc(3," Panel Content "),s.Qb(4,"vcl-panel-footer"),s.Qb(5,"div",0),s.xc(6," Panel Footer "),s.Pb(),s.Pb(),s.Pb(),s.Qb(7,"vcl-panel-dialog",1),s.Qb(8,"vcl-panel-title"),s.xc(9,"Panel Title"),s.Pb(),s.Qb(10,"div",2),s.Lb(11,"vcl-icon",3),s.Qb(12,"div"),s.xc(13,"Panel Content"),s.Pb(),s.Pb(),s.Qb(14,"button",4),s.xc(15," Cancel "),s.Pb(),s.Qb(16,"button",5),s.xc(17," Save Changes "),s.Pb(),s.Pb(),s.Qb(18,"vcl-panel",6),s.Qb(19,"vcl-panel-title"),s.xc(20,"Panel Title"),s.Pb(),s.Qb(21,"div",2),s.Lb(22,"vcl-icon",3),s.Qb(23,"div"),s.xc(24,"Panel with semantic coloring"),s.Pb(),s.Pb(),s.Pb()),2&n&&(s.zb(7),s.gc("showCloseButton",!0))},directives:[r.a,p.d,p.c,p.a,u.a,v.b,p.b],encapsulation:2}),n})();function d(){return{label:"Panel",tabs:{Demo:b,"README.md":{type:"md",content:'# vcl-panel\n\nA panel consisting a body, header and footer. All elements are optional. \nThere is a dialog variant, optimized for modal dialogs.\n\n## Usage\n\n```js\nimport { VCLPanelModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ \n    VCLPanelModule\n  ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-panel> \n  <vcl-panel-title>Panel Title</vcl-panel-title>\n  Panel Content\n  <vcl-panel-footer>Panel Footer</vcl-panel-footer>\n</vcl-panel>\n\n<vcl-panel-dialog [showCloseButton]="true">\n  <vcl-panel-title>Panel Title</vcl-panel-title>\n  <div class="row gutterx-3 align-items-center">\n    <vcl-icon icon="fas:exclamation-circle" class="scale300p"></vcl-icon>\n    <div>Panel Content</div>\n  </div>\n  <button type="button" vcl-button vclPanelFooterButton class="transparent outline">\n    Cancel\n  </button>\n  <button type="button" vcl-button vclPanelFooterButton class="emphasized">\n    Save Changes\n  </button>\n</vcl-panel-dialog>\n```\n\n### API\n\n#### Attributes\n\nName                | Type                                                     | Default                  | Description\n------------------- | ---------------------------                              | -------------------      | ------------------- \n`showCloseButton`   | boolean                                                  | false                    | Shows a close button in the header\n`type`              | \'success\' \\| \'danger\' \\| \'warning\' \\| \'error\' \\| \'info\'  |                          | Semantic coloring\n  \n#### Events  \n\nName             | Description\n------------     | --------------------------------------------------------------------------\n`close`          | Fired when the close button is clicked\n'},"demo.component.html":{type:"html",content:t("oAtO")},"demo.component.ts":{type:"ts",content:t("5jKa")}}}}let m=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.Ib({type:n}),n.\u0275inj=s.Hb({imports:[[l.c,a.i,i.b,c.V,c.z,c.M,o.g.forChild([{path:"",component:i.a,data:{demo:d}}])]]}),n})()},"5jKa":function(n,e,t){"use strict";t.r(e),e.default="import { Component, Input, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n  encapsulation: ViewEncapsulation.None,\n})\nexport class PanelDemoComponent {\n\n  constructor() {}\n\n\n}\n"},oAtO:function(n,e,t){"use strict";t.r(e),e.default='<vcl-panel>\n  <vcl-panel-title>Panel Title</vcl-panel-title>\n  Panel Content\n  <vcl-panel-footer>\n    <div class="row align-items-center py-1">\n      Panel Footer\n    </div>\n  </vcl-panel-footer>\n</vcl-panel>\n\n<vcl-panel-dialog [showCloseButton]="true">\n  <vcl-panel-title>Panel Title</vcl-panel-title>\n  <div class="row gutterx-3 align-items-center">\n    <vcl-icon icon="fas:exclamation-circle" class="scale300p"></vcl-icon>\n    <div>Panel Content</div>\n  </div>\n  <button type="button" vcl-button vclPanelFooterButton class="transparent outline">\n    Cancel\n  </button>\n  <button type="button" vcl-button vclPanelFooterButton class="emphasized">\n    Save Changes\n  </button>\n</vcl-panel-dialog>\n\n<vcl-panel type="warning">\n  <vcl-panel-title>Panel Title</vcl-panel-title>\n  <div class="row gutterx-3 align-items-center">\n    <vcl-icon icon="fas:exclamation-circle" class="scale300p"></vcl-icon>\n    <div>Panel with semantic coloring</div>\n  </div>\n</vcl-panel>\n'}}]);