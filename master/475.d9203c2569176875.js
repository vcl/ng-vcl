"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[475],{2475:(s,o,n)=>{n.r(o),n.d(o,{DrawerDemoModule:()=>C,demo:()=>u});var a=n(6814),g=n(2911),w=n(2916),i=n(2320),e=n(5879),p=n(5296),D=n(566),h=n(6163);let f=(()=>{var r;class c{constructor(){this.opened=!0}}return(r=c).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],decls:32,vars:1,consts:[["vcl-button","",3,"click"],[2,"width","20em","height","20em","background-color","#b47c17"],[2,"width","5em","background-color","#166a24",3,"opened"],["mode","side",2,"width","5em","background-color","#166a24"],["drawer1","vclDrawer"],["mode","over",2,"width","5em","background-color","#166a24"],["drawer2","vclDrawer"]],template:function(t,l){if(1&t){const v=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){return l.opened=!l.opened}),e._uU(1,"Toggle drawer"),e.qZA(),e._UZ(2,"br")(3,"br"),e.TgZ(4,"vcl-drawer-container",1)(5,"vcl-drawer",2),e._uU(6," Drawer "),e.qZA(),e._uU(7," Content\n"),e.qZA(),e._UZ(8,"br")(9,"br"),e.TgZ(10,"button",0),e.NdJ("click",function(){e.CHM(v);const m=e.MAs(16);return e.KtG(m.toggle())}),e._uU(11,"Toggle drawer"),e.qZA(),e._UZ(12,"br")(13,"br"),e.TgZ(14,"vcl-drawer-container",1)(15,"vcl-drawer",3,4),e._uU(17," Drawer "),e.qZA(),e._uU(18," Content\n"),e.qZA(),e._UZ(19,"br")(20,"br"),e.TgZ(21,"button",0),e.NdJ("click",function(){e.CHM(v);const m=e.MAs(27);return e.KtG(m.toggle())}),e._uU(22,"Toggle drawer"),e.qZA(),e._UZ(23,"br")(24,"br"),e.TgZ(25,"vcl-drawer-container",1)(26,"vcl-drawer",5,6),e._uU(28," Drawer "),e.qZA(),e._uU(29," Content\n"),e.qZA(),e._UZ(30,"br")(31,"br")}2&t&&(e.xp6(5),e.Q6J("opened",l.opened))},dependencies:[p.r,D.h,h.y],encapsulation:2}),c})();const T="# vcl-drawer\n\nSliding drawer with content area. In closed state, only the content area is visible.\n\n## Usage\n\n```html\n<vcl-drawer-container>\n  <vcl-drawer mode=\"side\"> Drawer </vcl-drawer>\n  Content\n</vcl-drawer-container>\n```\n\n### Drawer modes\n\n`side`: Drawer appears besides the content. The content is pushed away and shrinked to make space for the drawer.\n`over`: Drawer floats over the content. The content is covered by a backdrop.\n\n### Opening and closing the drawer\n\nA drawer can be opened and closed with the `opened` property.\n\nThe opened state can also be changed via the drawer instance.\nIt exposes a `open()`, `close()` and `toggle()` method.\n\n```html\n<vcl-drawer-container #drawer=\"vclDrawer\">\n  <vcl-drawer>...</vcl-drawer>\n  ...\n</vcl-drawer-container>\n<button (click)=\"drawer.toggle()\">Toggle</button>\n```\n\n### API\n\n#### Attributes\n\n| Name       | Type              | Default | Description                                                                            |\n| ---------- | ----------------- | ------- | -------------------------------------------------------------------------------------- |\n| `position` | 'left' \\| 'right' | 'left'  | Drawer position                                                                        |\n| `mode`     | 'side' \\| 'over'  | 'side'  | Drawer mode                                                                            |\n| `opened`   | boolean           | `false` | Drawer is opened. Default value is `true` for `side` mode and `false` for `over` mode. |\n";function u(){return{label:"Drawer",tabs:{Demo:f,"README.md":{type:"md",content:T},"demo.component.html":{type:"html",content:n(6968)},"demo.component.ts":{type:"ts",content:n(4463)}}}}let C=(()=>{var r;class c{}return(r=c).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[a.ez,i.l,w.V4c,w.yLU,g.Bz.forChild([{path:"",component:i.z,data:{demo:u}}])]}),c})()},6968:(s,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a='<button vcl-button (click)="opened = !opened">Toggle drawer</button>\n\n<br /><br />\n\n<vcl-drawer-container\n  style="width: 20em; height: 20em; background-color: #b47c17">\n  <vcl-drawer [opened]="opened" style="width: 5em; background-color: #166a24">\n    Drawer\n  </vcl-drawer>\n  Content\n</vcl-drawer-container>\n\n<br /><br />\n\n<button vcl-button (click)="drawer1.toggle()">Toggle drawer</button>\n\n<br /><br />\n\n<vcl-drawer-container\n  style="width: 20em; height: 20em; background-color: #b47c17">\n  <vcl-drawer\n    #drawer1="vclDrawer"\n    mode="side"\n    style="width: 5em; background-color: #166a24">\n    Drawer\n  </vcl-drawer>\n  Content\n</vcl-drawer-container>\n\n<br /><br />\n\n<button vcl-button (click)="drawer2.toggle()">Toggle drawer</button>\n\n<br /><br />\n\n<vcl-drawer-container\n  style="width: 20em; height: 20em; background-color: #b47c17">\n  <vcl-drawer\n    #drawer2="vclDrawer"\n    mode="over"\n    style="width: 5em; background-color: #166a24">\n    Drawer\n  </vcl-drawer>\n  Content\n</vcl-drawer-container>\n\n<br /><br />\n'},4463:(s,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class DrawerDemoComponent {\n  opened = true;\n}\n"}}]);