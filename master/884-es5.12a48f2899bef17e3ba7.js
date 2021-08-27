!function(){"use strict";function n(n,c){if(!(n instanceof c))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[884],{20884:function(c,o,e){e.r(o),e.d(o,{IcogramDemoModule:function(){return h},demo:function(){return m}});var i,t=e(16274),r=e(95454),l=e(36196),a=e(62518),s=e(84271),v=e(69857),p=e(852),d=((i=function c(){n(this,c)}).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=s.Xpm({type:i,selectors:[["ng-component"]],decls:21,vars:2,consts:[["vclPrepend","","icon","fas:chevron-right"],["vclAppend","","icon","fas:chevron-right"],["vcl-icogram","","href","'https://github.com/ng-vcl/ng-vcl'","target","'_blank'"],["vclPrepend","","icon","fas:link"],["vcl-a-icogram","",3,"href","disabled"]],template:function(n,c){1&n&&(s.TgZ(0,"vcl-icogram"),s._UZ(1,"vcl-icon",0),s._uU(2," icogram with accessible link\n"),s.qZA(),s._UZ(3,"br"),s._UZ(4,"br"),s.TgZ(5,"vcl-icogram"),s._UZ(6,"vcl-icon",0),s._uU(7," prep/app icons "),s._UZ(8,"vcl-icon",1),s.qZA(),s._UZ(9,"br"),s._UZ(10,"br"),s.TgZ(11,"a",2),s._UZ(12,"vcl-icon",3),s._uU(13," external link with appended icon\n"),s.qZA(),s._UZ(14,"br"),s._UZ(15,"br"),s.TgZ(16,"a",4),s._UZ(17,"vcl-icon",3),s._uU(18," Disabled link\n"),s.qZA(),s._UZ(19,"br"),s._UZ(20,"br")),2&n&&(s.xp6(16),s.Q6J("href","this is not considered when the link is disabled",s.LSH)("disabled",!0))},directives:[v.m,p.o,v.K],encapsulation:2}),i);function m(){return{label:"Icogram",tabs:{Demo:d,"README.md":{type:"md",content:'# vcl-icogram\n\nCombination of icon and text.\nIcons can be prepended or appended to a textual label and can be sourced from icon\nfonts.\nAlso supports the anchor tag\n\n## Usage\n\n```html\n<vcl-icogram>\n  <vcl-icon vclPrepend icon="fas:chevron-left"></vcl-icon>\n  Label\n  <vcl-icon vclAppend icon="fas:chevron-right"></vcl-icon>\n</vcl-icogram>\n  \n<a vcl-icogram\n  [href]="\'https://github.com/ng-vcl/ng-vcl\'"\n  [disabled]="true">\n  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>\n  Link\n</a>\n```\n'},"demo.component.html":{type:"html",content:e(35851)},"demo.component.ts":{type:"ts",content:e(22642)}}}}var h=function(){var c=function c(){n(this,c)};return c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=s.oAB({type:c}),c.\u0275inj=s.cJS({imports:[[t.ez,a.l,l.o14,l.NhM,r.Bz.forChild([{path:"",component:a.z,data:{demo:m}}])]]}),c}()},35851:function(n,c,o){o.r(c),c.default='<vcl-icogram >\n  <vcl-icon vclPrepend icon="fas:chevron-right"></vcl-icon>\n  icogram with accessible link\n</vcl-icogram>\n<br><br>\n<vcl-icogram>\n  <vcl-icon vclPrepend icon="fas:chevron-right"></vcl-icon>\n  prep/app icons\n  <vcl-icon vclAppend icon="fas:chevron-right"></vcl-icon>\n</vcl-icogram>\n<br><br>\n\n<a vcl-icogram href="\'https://github.com/ng-vcl/ng-vcl\'" target="\'_blank\'">\n  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>\n   external link with appended icon\n</a>\n<br><br>\n  \n<a vcl-a-icogram\n  [href]="\'this is not considered when the link is disabled\'"\n  [disabled]="true">\n  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>\n  Disabled link\n</a>\n<br><br>\n'},22642:function(n,c,o){o.r(c),c.default="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class IcogramDemoComponent {\n\n}\n"}}])}();