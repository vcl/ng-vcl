(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/pV8":function(n,i,a){"use strict";a.r(i),a.d(i,"demo",(function(){return s})),a.d(i,"NavigationDemoModule",(function(){return p}));var c=a("ofXK"),o=a("tyNb"),l=a("19H1"),v=a("2FIb"),t=a("fXoL"),e=a("ZuQ0"),g=a("SgBA"),b=a("Vp9f"),r=a("9Rb9");let m=(()=>{class n{onNavigate(n){console.log("Navigate",n)}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Eb({type:n,selectors:[["ng-component"]],decls:60,vars:2,consts:[["vclPrepend","","icon","fas:home"],["products","vclNavigationItem"],["vclPrepend","",3,"icon"],["vclPrepend","","icon","fas:bicycle"],["contact","vclNavigationItem"],["vclPrepend","","icon","fas:envelope"],["layout","horizontal"]],template:function(n,i){if(1&n&&(t.Qb(0,"h3"),t.wc(1,"Basic navigation"),t.Pb(),t.Qb(2,"vcl-navigation"),t.Qb(3,"vcl-navigation-item"),t.Qb(4,"vcl-navigation-label"),t.Qb(5,"vcl-icogram"),t.Lb(6,"vcl-icon",0),t.wc(7," Home "),t.Pb(),t.Pb(),t.Pb(),t.Qb(8,"vcl-navigation-item",null,1),t.Qb(10,"vcl-navigation-label"),t.Qb(11,"vcl-icogram"),t.Lb(12,"vcl-icon",2),t.wc(13," Products "),t.Pb(),t.Pb(),t.Qb(14,"vcl-navigation"),t.Qb(15,"vcl-navigation-item"),t.Qb(16,"vcl-navigation-label"),t.Qb(17,"vcl-icogram"),t.Lb(18,"vcl-icon",3),t.wc(19," Product 1 "),t.Pb(),t.Pb(),t.Pb(),t.Qb(20,"vcl-navigation-item"),t.Qb(21,"vcl-navigation-label"),t.Qb(22,"vcl-icogram"),t.Lb(23,"vcl-icon",3),t.wc(24," Product 2 "),t.Pb(),t.Pb(),t.Pb(),t.Pb(),t.Pb(),t.Qb(25,"vcl-navigation-item",null,4),t.Qb(27,"vcl-navigation-label"),t.Qb(28,"vcl-icogram"),t.Lb(29,"vcl-icon",2),t.wc(30," Contact "),t.Pb(),t.Pb(),t.Qb(31,"vcl-navigation"),t.Qb(32,"vcl-navigation-item"),t.Qb(33,"vcl-navigation-label"),t.Qb(34,"vcl-icogram"),t.Lb(35,"vcl-icon",5),t.wc(36," Contact 1 "),t.Pb(),t.Pb(),t.Pb(),t.Qb(37,"vcl-navigation-item"),t.Qb(38,"vcl-navigation-label"),t.Qb(39,"vcl-icogram"),t.Lb(40,"vcl-icon",5),t.wc(41," Contact 2 "),t.Pb(),t.Pb(),t.Pb(),t.Pb(),t.Pb(),t.Pb(),t.Qb(42,"h3"),t.wc(43,"Horizontal navigation"),t.Pb(),t.Qb(44,"vcl-navigation",6),t.Qb(45,"vcl-navigation-item"),t.Qb(46,"vcl-navigation-label"),t.Qb(47,"vcl-icogram"),t.Lb(48,"vcl-icon",0),t.wc(49," Home "),t.Pb(),t.Pb(),t.Pb(),t.Qb(50,"vcl-navigation-item"),t.Qb(51,"vcl-navigation-label"),t.Qb(52,"vcl-icogram"),t.Lb(53,"vcl-icon",3),t.wc(54," Products "),t.Pb(),t.Pb(),t.Pb(),t.Qb(55,"vcl-navigation-item"),t.Qb(56,"vcl-navigation-label"),t.Qb(57,"vcl-icogram"),t.Lb(58,"vcl-icon",5),t.wc(59," Contacts "),t.Pb(),t.Pb(),t.Pb(),t.Pb()),2&n){const n=t.lc(9),i=t.lc(26);t.yb(12),t.gc("icon",n.opened?"fas:chevron-down":"fas:chevron-right"),t.yb(17),t.gc("icon",i.opened?"fas:chevron-down":"fas:chevron-right")}},directives:[e.a,g.a,g.b,b.a,r.a],encapsulation:2}),n})();function s(){return{label:"Navigation",tabs:{Demo:m,"README.md":{type:"md",content:"# vcl-navigation\n\nThe navigation groups navigation items to form a navigation menu.\n\n## Usage\n\n```js\nimport { VCLNavigationModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLNavigationModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-navigation>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:home\"></vcl-icon>\n        Home\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:bicycle\"></vcl-icon>\n        Products\n      </vcl-icogram>\n    </vcl-navigation-label>\n    <vcl-navigation>\n      <vcl-navigation-item>\n        <vcl-navigation-label>Product 1</vcl-navigation-label>\n      </vcl-navigation-item>\n      <vcl-navigation-item>\n        <vcl-navigation-label>Product 2</vcl-navigation-label>\n      </vcl-navigation-item>\n    </vcl-navigation>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:envelope\"></vcl-icon>\n        Contact\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n</vcl-navigation>\n```\n\n### API\n\n#### vcl-navigation attributes\n\n| Name                     | Type                           | Default        | Description                                    |\n| ------------------------ | -----------                    | --------       |----------------------------------------------- |\n| `layout`                 | 'horizontal' \\| 'vertical'     | 'horizontal'   | \n\n#### vcl-navigation-item attributes\n\n| Name                     | Type        | Default  | Description                                    |\n| ------------------------ | ----------- | -------- |----------------------------------------------- |\n| `opened`                 | boolean     | false    | if true and nested this opens the subitems     |\n| `selected`               | boolean     | false    | Wether the item is selected                    |\n"},"demo.component.html":{type:"html",content:a("OVtP")},"demo.component.ts":{type:"ts",content:a("QaKs")}}}}let p=(()=>{class n{}return n.\u0275mod=t.Ib({type:n}),n.\u0275inj=t.Hb({factory:function(i){return new(i||n)},imports:[[c.c,v.b,l.VCLNavigationModule,l.VCLButtonModule,l.VCLIcogramModule,o.g.forChild([{path:"",component:v.a,data:{demo:s}}])]]}),n})()},OVtP:function(n,i,a){"use strict";a.r(i),i.default='<h3>Basic navigation</h3>\n\n<vcl-navigation>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon="fas:home"></vcl-icon>\n        Home\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item #products="vclNavigationItem">\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend [icon]="products.opened ? \'fas:chevron-down\' : \'fas:chevron-right\'"></vcl-icon>\n        Products\n      </vcl-icogram>\n    </vcl-navigation-label>\n    <vcl-navigation>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon="fas:bicycle"></vcl-icon>\n            Product 1\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon="fas:bicycle"></vcl-icon>\n            Product 2\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n    </vcl-navigation>\n  </vcl-navigation-item>\n  <vcl-navigation-item #contact="vclNavigationItem">\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend [icon]="contact.opened ? \'fas:chevron-down\' : \'fas:chevron-right\'"></vcl-icon>\n        Contact\n      </vcl-icogram>\n    </vcl-navigation-label>\n    <vcl-navigation>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon="fas:envelope"></vcl-icon>\n            Contact 1\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon="fas:envelope"></vcl-icon>\n            Contact 2\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n    </vcl-navigation>    \n  </vcl-navigation-item>\n</vcl-navigation>\n\n<h3>Horizontal navigation</h3>\n\n<vcl-navigation layout="horizontal">\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon="fas:home"></vcl-icon>\n        Home\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon="fas:bicycle"></vcl-icon>\n        Products\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon="fas:envelope"></vcl-icon>\n        Contacts\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n</vcl-navigation>\n  '},QaKs:function(n,i,a){"use strict";a.r(i),i.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class NavigationDemoComponent {\n\n  hoverName?: string;\n  hoverLastName?: string;\n\n  onNavigate(route) {\n    console.log('Navigate', route);\n  }\n}\n"}}]);