"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[769],{9769:(g,m,s)=>{s.r(m),s.d(m,{ZoomBoxDemoModule:()=>B,demo:()=>p});var a=s(6814),x=s(2911),u=s(2916),d=s(2320),o=s(5879);const v=function(n,e,t,i,r){return{position:"static","background-image":n,width:e,height:t,"background-position-x":i,"background-position-y":r}};let f=(()=>{class n{constructor(){this._hostAttrRole="zoombox"}get zoomedSource(){return this.image?this.image:this.target.image}get zoomedX(){return this.image?this.target.x*this.scale:this.target.x}get zoomedY(){return this.image?this.target.y*this.scale:this.target.y}get zoomedWidth(){return this.image?this.target.width*this.scale:this.target.width}get zoomedHeight(){return this.image?this.target.height*this.scale:this.target.height}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["vcl-zoom-box"]],hostVars:1,hostBindings:function(t,i){2&t&&o.uIk("role",i._hostAttrRole)},inputs:{target:"target",image:"image",scale:"scale"},decls:1,vars:7,consts:[[1,"zoom-box",3,"ngStyle"]],template:function(t,i){1&t&&o._UZ(0,"div",0),2&t&&o.Q6J("ngStyle",o.qbA(1,v,"url("+i.zoomedSource+")",i.zoomedWidth+"px",i.zoomedHeight+"px","-"+i.zoomedX+"px","-"+i.zoomedY+"px"))},dependencies:[a.PC],encapsulation:2}),n})();const b=["*"];let l=(()=>{class n{constructor(t,i){this.element=t,this.renderer=i,this.renderer.addClass(t.nativeElement,"zoom-box-magnifier")}update(){const t={top:this.parent.y+"px",left:this.parent.x+"px",width:this.parent.width+"px",height:this.parent.height+"px",display:this.parent.hiding||this.parent.invisible?"none":"block","pointer-events":"none"};Object.keys(t).forEach(i=>{this.renderer.setStyle(this.element.nativeElement,i,t[i])})}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.SBq),o.Y36(o.Qsj))},n.\u0275cmp=o.Xpm({type:n,selectors:[["vcl-zoom-box-magnifier"]],ngContentSelectors:b,decls:1,vars:0,template:function(t,i){1&t&&(o.F$t(),o.Hsn(0))},encapsulation:2}),n})();const Z=["*"];let z=(()=>{class n{get image(){return this.imgContent.getAttribute("src")}constructor(t,i){this.element=t,this.renderer=i,this.x=0,this.y=0,this.resetOnOut=!1,this.hidden=!1,this.hiding=!1,this.invisible=!1,this.startX=-1,this.startY=-1,this.renderer.setStyle(t.nativeElement,"position","relative")}ngAfterContentInit(){this.magnifier.parent=this,this.magnifier.update(),this.imgContent=this.element.nativeElement.querySelector("img"),this.imgContent.onmousemove=t=>this.onMove(t),this.imgContent.onmouseover=()=>this.onOver(),this.imgContent.onmouseout=()=>this.onOut()}onMove(t){-1===this.startX&&(this.startX=this.x,this.startY=this.y);const h=this.height/2,c=this.imgContent.height-this.height/2;this.x=Math.max(this.width/2,Math.min(this.imgContent.width-this.width/2,t.layerX))-this.width/2,this.y=Math.max(h,Math.min(c,t.layerY))-this.height/2,this.magnifier.update()}onOver(){(this.hidden||this.hiding)&&(this.hiding=!1),this.magnifier.update()}onOut(){this.resetOnOut&&(this.x=this.startX,this.y=this.startY),this.hidden&&(this.hiding=!0),this.magnifier.update()}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.SBq),o.Y36(o.Qsj))},n.\u0275cmp=o.Xpm({type:n,selectors:[["vcl-zoom-box-container"]],contentQueries:function(t,i,r){if(1&t&&o.Suo(r,l,5),2&t){let h;o.iGM(h=o.CRH())&&(i.magnifier=h.first)}},inputs:{x:"x",y:"y",width:"width",height:"height",resetOnOut:"resetOnOut",hidden:"hidden",hiding:"hiding",invisible:"invisible"},ngContentSelectors:Z,decls:2,vars:0,template:function(t,i){1&t&&(o.F$t(),o.TgZ(0,"div"),o.Hsn(1),o.qZA())},encapsulation:2}),n})(),y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["ng-component"]],decls:58,vars:34,consts:[[1,"grid-row"],[1,"grid-span-4"],[3,"x","y","width","height"],["first",""],["ngSrc","https://picsum.photos/320/320?image=434"],[3,"target"],[3,"x","y","width","height","resetOnOut"],["second",""],["image","https://picsum.photos/640/640?image=434",3,"target","scale"],[3,"x","y","width","height","hiding"],["third",""],[3,"x","y","width","height","hidden","hiding"],["fourth",""],[3,"x","y","width","height","invisible"],["fifth",""]],template:function(t,i){if(1&t&&(o.TgZ(0,"h3"),o._uU(1,"Sample Zoom-Box"),o.qZA(),o.TgZ(2,"div",0)(3,"div",1)(4,"vcl-zoom-box-container",2,3),o._UZ(6,"img",4)(7,"vcl-zoom-box-magnifier"),o.qZA()(),o.TgZ(8,"div",1),o._UZ(9,"vcl-zoom-box",5),o.qZA()(),o._UZ(10,"br")(11,"br"),o.TgZ(12,"h3"),o._uU(13,"Zoom-Box with a higher resolution image and mouse reset"),o.qZA(),o.TgZ(14,"div",0)(15,"div",1)(16,"vcl-zoom-box-container",6,7),o._UZ(18,"img",4)(19,"vcl-zoom-box-magnifier"),o.qZA()(),o.TgZ(20,"div",1),o._UZ(21,"vcl-zoom-box",8),o.qZA()(),o._UZ(22,"br")(23,"br"),o.TgZ(24,"h3"),o._uU(25,"Zoom-Box with an initially hidden magnifier"),o.qZA(),o.TgZ(26,"div",0)(27,"div",1)(28,"vcl-zoom-box-container",9,10),o._UZ(30,"img",4)(31,"vcl-zoom-box-magnifier"),o.qZA()(),o.TgZ(32,"div",1),o._UZ(33,"vcl-zoom-box",8),o.qZA()(),o._UZ(34,"br")(35,"br"),o.TgZ(36,"h3"),o._uU(37,"Zoom-Box with appearing magnifier"),o.qZA(),o.TgZ(38,"div",0)(39,"div",1)(40,"vcl-zoom-box-container",11,12),o._UZ(42,"img",4)(43,"vcl-zoom-box-magnifier"),o.qZA()(),o.TgZ(44,"div",1),o._UZ(45,"vcl-zoom-box",8),o.qZA()(),o._UZ(46,"br")(47,"br"),o.TgZ(48,"h3"),o._uU(49,"Zoom-Box with an constantly hidden magnifier"),o.qZA(),o.TgZ(50,"div",0)(51,"div",1)(52,"vcl-zoom-box-container",13,14),o._UZ(54,"img",4)(55,"vcl-zoom-box-magnifier"),o.qZA()(),o.TgZ(56,"div",1),o._UZ(57,"vcl-zoom-box",8),o.qZA()()),2&t){const r=o.MAs(5),h=o.MAs(17),c=o.MAs(29),w=o.MAs(41),A=o.MAs(53);o.xp6(4),o.Q6J("x",30)("y",60)("width",120)("height",190),o.xp6(5),o.Q6J("target",r),o.xp6(7),o.Q6J("x",30)("y",60)("width",190)("height",120)("resetOnOut",!0),o.xp6(5),o.Q6J("target",h)("scale",2),o.xp6(7),o.Q6J("x",30)("y",60)("width",190)("height",120)("hiding",!0),o.xp6(5),o.Q6J("target",c)("scale",2),o.xp6(7),o.Q6J("x",30)("y",60)("width",190)("height",120)("hidden",!0)("hiding",!0),o.xp6(5),o.Q6J("target",w)("scale",2),o.xp6(7),o.Q6J("x",30)("y",60)("width",190)("height",120)("invisible",!0),o.xp6(5),o.Q6J("target",A)("scale",2)}},dependencies:[f,l,z],encapsulation:2}),n})();const C='# vcl-zoom-box\n\nZoom into areas of images.\n\n## Usage\n\n```html\n<vcl-zoom-box-container #first [x]="30" [y]="60" [width]="120" [height]="190">\n  <img ngSrc="https://picsum.photos/320/320?image=434" />\n  <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n</vcl-zoom-box-container>\n<vcl-zoom-box [target]="first"></vcl-zoom-box>\n```\n\n### API\n\n#### Zoom-Box Container Attributes\n\n| Name         | Type    | Default | Description                            |\n| ------------ | ------- | ------- | -------------------------------------- |\n| `x`          | number  | 0       | Left offset (optional)                 |\n| `y`          | number  | 0       | Top offset (optional)                  |\n| `width`      | number  |         | Width of zoomed box                    |\n| `height`     | number  |         | Height of zoomed box                   |\n| `resetOnOut` | boolean | false   | Reset position to initial on mouse out |\n\n### Zoom-Box Attributes\n\n| Name           | Type   | Default | Description                                                           |\n| -------------- | ------ | ------- | --------------------------------------------------------------------- |\n| `image`        | string | ""      | High resolution image (optional)                                      |\n| `highResScale` | number | 1       | High resolution image scale multiplier (required if image is defined) |\n';function p(){return{label:"Zoom Box",tabs:{Demo:y,"README.md":{type:"md",content:C},"demo.component.html":{type:"html",content:s(5520)},"demo.component.ts":{type:"ts",content:s(718)}}}}let B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[a.ez,d.l,u.YcP,x.Bz.forChild([{path:"",component:d.z,data:{demo:p}}])]}),n})()},5520:(g,m,s)=>{s.r(m),s.d(m,{default:()=>a});const a='<h3>Sample Zoom-Box</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container\n      #first\n      [x]="30"\n      [y]="60"\n      [width]="120"\n      [height]="190">\n      <img ngSrc="https://picsum.photos/320/320?image=434" />\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="first"></vcl-zoom-box>\n  </div>\n</div>\n<br /><br />\n\n<h3>Zoom-Box with a higher resolution image and mouse reset</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container\n      #second\n      [x]="30"\n      [y]="60"\n      [width]="190"\n      [height]="120"\n      [resetOnOut]="true">\n      <img ngSrc="https://picsum.photos/320/320?image=434" />\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box\n      [target]="second"\n      image="https://picsum.photos/640/640?image=434"\n      [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n<br /><br />\n\n<h3>Zoom-Box with an initially hidden magnifier</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container\n      #third\n      [x]="30"\n      [y]="60"\n      [width]="190"\n      [height]="120"\n      [hiding]="true">\n      <img ngSrc="https://picsum.photos/320/320?image=434" />\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box\n      [target]="third"\n      image="https://picsum.photos/640/640?image=434"\n      [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n<br /><br />\n\n<h3>Zoom-Box with appearing magnifier</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container\n      #fourth\n      [x]="30"\n      [y]="60"\n      [width]="190"\n      [height]="120"\n      [hidden]="true"\n      [hiding]="true">\n      <img ngSrc="https://picsum.photos/320/320?image=434" />\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box\n      [target]="fourth"\n      image="https://picsum.photos/640/640?image=434"\n      [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n<br /><br />\n\n<h3>Zoom-Box with an constantly hidden magnifier</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container\n      #fifth\n      [x]="30"\n      [y]="60"\n      [width]="190"\n      [height]="120"\n      [invisible]="true">\n      <img ngSrc="https://picsum.photos/320/320?image=434" />\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box\n      [target]="fifth"\n      image="https://picsum.photos/640/640?image=434"\n      [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n'},718:(g,m,s)=>{s.r(m),s.d(m,{default:()=>a});const a="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class ZoomBoxDemoComponent {}\n"}}]);