"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[592],{8565:(y,p,a)=>{a.d(p,{R:()=>v,q:()=>l});var n=a(4650),_=a(433),u=a(9787),t=a(7579),I=a(6895),h=a(6447),b=a(6994);let f=0,v=(()=>{class c{constructor(i){this.injector=i,this._hostClasses=!0,this._stateChangedEmitter=new t.x,this._generatedId="vcl_file-input_"+f++,this._focused=!1,this._cvaDisabled=!1,this.stateChanged=this._stateChangedEmitter.asObservable(),this.controlType="counter",this.value=0,this.hasError=!1,this.onChange=()=>{},this.onTouched=()=>{}}get ngControl(){return this.injector.get(_.a5,null)}get elementId(){return this.id||this._generatedId}get isDisabled(){return this._cvaDisabled||this.disabled}get isFocused(){return this._focused}setErrorState(i){this.hasError=i}onFocus(){this._focused=!0,this._stateChangedEmitter.next()}onBlur(i){this._focused=!1,this._stateChangedEmitter.next(),i&&this.onTouched()}increment(){"number"==typeof this.max&&this.value>=this.max||(this.value++,this.onChange(this.value))}decrement(){"number"==typeof this.min&&this.value<=this.min||(this.value--,this.onChange(this.value),this.onTouched())}writeValue(i){this.value=i}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this._cvaDisabled=i}}return c.\u0275fac=function(i){return new(i||c)(n.Y36(n.zs3))},c.\u0275cmp=n.Xpm({type:c,selectors:[["demo-counter"]],hostVars:3,hostBindings:function(i,r){2&i&&(n.uIk("id",r.elementId),n.ekj("error",r.hasError))},inputs:{id:"id",disabled:"disabled",min:"min",max:"max"},features:[n._Bn([{provide:_.JU,useExisting:(0,n.Gpc)(()=>c),multi:!0},{provide:u.YGr,useExisting:(0,n.Gpc)(()=>c)}])],decls:6,vars:1,consts:[["vcl-button","","square","","type","button",1,"transparent",3,"click","keydown.enter","focus"],["icon","fas:minus"],["icon","fas:plus"]],template:function(i,r){1&i&&(n.TgZ(0,"button",0),n.NdJ("click",function(){return r.decrement()})("keydown.enter",function(A){return r.decrement(),A.preventDefault()})("focus",function(){return r.onFocus()})("focus",function(){return r.onBlur(!1)}),n._UZ(1,"vcl-icon",1),n.qZA(),n.TgZ(2,"span"),n._uU(3),n.qZA(),n.TgZ(4,"button",0),n.NdJ("click",function(){return r.increment()})("keydown.enter",function(A){return r.increment(),A.preventDefault()})("focus",function(){return r.onFocus()})("focus",function(){return r.onBlur(!0)}),n._UZ(5,"vcl-icon",2),n.qZA()),2&i&&(n.xp6(3),n.Oqu(r.value))},dependencies:[h.o,b.r],styles:["[_nghost-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%] > span[_ngcontent-%COMP%]{font-size:2em;-webkit-user-select:none;user-select:none;padding-left:.2em;padding-right:.2em}"]}),c})(),l=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[I.ez,_.u5,_.UX,u.o14,u.V4c]}),c})()},9155:(y,p,a)=>{a.d(p,{z:()=>x,l:()=>N});var n=a(6895),_=a(9787),u=a(4080),t=a(4650),I=a(4629),h=a(1481),b=a(9319),f=a(350),v=a(2007),l=a(9072);function c(o,m){}function s(o,m){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,c,0,0,"ng-template",5),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("cdkPortalOutlet",e.content)}}function i(o,m){if(1&o&&(t.TgZ(0,"div")(1,"pre"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.content)}}function r(o,m){if(1&o&&t._UZ(0,"markdown",6),2&o){const e=t.oxw().$implicit;t.Q6J("data",e.content)}}function g(o,m){if(1&o&&(t._UZ(0,"markdown",6),t.ALo(1,"language")),2&o){const e=t.oxw().$implicit;t.Q6J("data",t.xi3(1,1,e.content,"typescript"))}}function A(o,m){if(1&o&&(t._UZ(0,"markdown",6),t.ALo(1,"language")),2&o){const e=t.oxw().$implicit;t.Q6J("data",t.xi3(1,1,e.content,"html"))}}function Z(o,m){if(1&o&&(t._UZ(0,"markdown",6),t.ALo(1,"language")),2&o){const e=t.oxw().$implicit;t.Q6J("data",t.xi3(1,1,e.content,"scss"))}}function T(o,m){if(1&o&&(t.TgZ(0,"vcl-tab")(1,"vcl-label"),t._uU(2),t.qZA(),t.YNc(3,s,2,1,"div",1),t.YNc(4,i,3,1,"div",1),t.YNc(5,r,1,1,"markdown",4),t.YNc(6,g,2,4,"markdown",4),t.YNc(7,A,2,4,"markdown",4),t.YNc(8,Z,2,4,"markdown",4),t.qZA()),2&o){const e=m.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(1),t.Q6J("ngIf","component"===e.type),t.xp6(1),t.Q6J("ngIf","text"===e.type),t.xp6(1),t.Q6J("ngIf","md"===e.type),t.xp6(1),t.Q6J("ngIf","ts"===e.type),t.xp6(1),t.Q6J("ngIf","html"===e.type),t.xp6(1),t.Q6J("ngIf","scss"===e.type)}}function M(o,m){if(1&o&&(t.TgZ(0,"div")(1,"vcl-tab-nav",2),t.YNc(2,T,9,7,"vcl-tab",3),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.tabs)}}let x=(()=>{class o{constructor(e,C){this.activatedRoute=e,this.sanitizer=C,this.tabs=[]}ngOnInit(){const e=this.activatedRoute.snapshot.data.demo();e?(this.title=e.label,this.tabs=e.tabs?Object.keys(e.tabs).reduce((C,d)=>{let J,D;return"object"==typeof e.tabs[d]&&e.tabs[d]?(J=e.tabs[d].type,D="object"==typeof e.tabs[d].content&&e.tabs[d].content&&e.tabs[d].content.default?e.tabs[d].content.default:e.tabs[d].content):"function"==typeof e.tabs[d]&&(J="component",D=new u.C5(e.tabs[d])),D&&J?[...C,{name:d,content:D,type:J}]:C},[]):[]):(this.title="ng-vcl",this.tabs=[])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(I.gz),t.Y36(h.H7))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],decls:3,vars:2,consts:[[1,"article-header"],[4,"ngIf"],["borders","true"],[4,"ngFor","ngForOf"],[3,"data",4,"ngIf"],[3,"cdkPortalOutlet"],[3,"data"]],template:function(e,C){1&e&&(t.TgZ(0,"h2",0),t._uU(1),t.qZA(),t.YNc(2,M,3,1,"div",1)),2&e&&(t.xp6(1),t.Oqu(C.title),t.xp6(1),t.Q6J("ngIf",C.tabs.length>0))},dependencies:[n.sg,n.O5,b.i,f.d,v.q8,u.Pl,l.lF,l.Ay],styles:["markdown[_ngcontent-%COMP%]     table{display:block;width:100%;overflow:auto}markdown[_ngcontent-%COMP%]     table th, markdown[_ngcontent-%COMP%]     table td{padding:6px 13px;border:1px solid #dfe2e5}markdown[_ngcontent-%COMP%]     table tr{background-color:#fff;border-top:1px solid #c6cbd1}markdown[_ngcontent-%COMP%]     table tr:nth-child(2n){background-color:#f6f8fa}"]}),o})(),N=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[n.ez,_.Cm3,u.eL,l.JP.forChild()]}),o})()},2331:(y,p,a)=>{a.d(p,{B:()=>v});var n=a(4650),_=a(1481),u=a(6895),t=a(6447);function I(l,c){if(1&l&&(n.TgZ(0,"vcl-icon",3),n._UZ(1,"img",4),n.qZA()),2&l){const s=n.oxw();n.uIk("aria-label",s.label),n.xp6(1),n.Udp("width",s.imageWidth)("height",s.imageHeight),n.Q6J("src",s.imageSrc,n.LSH)}}function h(l,c){if(1&l&&n._UZ(0,"vcl-icon",5),2&l){const s=n.oxw();n.Q6J("icon",s.icon),n.uIk("aria-label",s.label)}}const b=["*"];let v=(()=>{class l{constructor(s){this.sanitizer=s,this.layout="vertical",this.label="Loading",this.imageHeight="3em",this.imageWidth="3em",this.imageSrc=this.sanitizer.bypassSecurityTrustResourceUrl("data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iCiAgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIgogICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIgoJd2lkdGg9IjEwMCUiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KCTxnPgoJICAgIDxkZWZzPgoJICAgIAk8Y2xpcFBhdGggaWQ9ImNsaXAiPgoJICAgICAgCQk8cGF0aCAgZD0iTSA1MCA1MCBMIDM1IDAgTCA2NSAwIHoiIC8+CgkJICAgIDwvY2xpcFBhdGg+CgkgICAgCTxlbGxpcHNlIGlkPSJDaXJjbGVCbG9jayIgY2xpcC1wYXRoPSJ1cmwoI2NsaXApIiBjeD0iNTAiIGN5PSI1MCIgcng9IjQwIiByeT0iNDAiIHN0eWxlPSJmaWxsOm5vbmU7IHN0cm9rZTojRThFOEU4IiBzdHJva2Utd2lkdGg9IjE1Ii8+CgkgICAgPC9kZWZzPgoKCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoNDAgNTAgNTApIiAvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSg4MCA1MCA1MCkiIC8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMTYwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgyMDAgNTAgNTApIi8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDI0MCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMjgwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgzMjAgNTAgNTApIi8+CgoJCTxlbGxpcHNlIGNsaXAtcGF0aD0idXJsKCNjbGlwKSIgY3g9IjUwIiBjeT0iNTAiIHJ4PSI0MCIgcnk9IjQwIiBzdHlsZT0iZmlsbDpub25lOyBzdHJva2U6IzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxNSI+CgkJCTxhbmltYXRlVHJhbnNmb3JtCgkJCQlhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCgkJCQlhdHRyaWJ1dGVUeXBlPSJYTUwiCgkJCQl0eXBlPSJyb3RhdGUiCgkJCQl2YWx1ZXM9IjAgNTAgNTA7IDQwIDUwIDUwOyA4MCA1MCA1MDsgMTIwIDUwIDUwOyAxNjAgNTAgNTA7IDIwMCA1MCA1MDsgMjQwIDUwIDUwOyAyODAgNTAgNTA7IDMyMCA1MCA1MCIKCQkJCWR1cj0iM3MiCgkJCQlyZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIKCQkJCWFkZGl0aXZlPSJyZXBsYWNlIgoJCQkJY2FsY01vZGU9ImRpc2NyZXRlIgoJCQkJZmlsbD0iZnJlZXplIi8+CgkJPC9lbGxpcHNlPgoJPC9nPgo8L3N2Zz4=")}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(_.H7))},l.\u0275cmp=n.Xpm({type:l,selectors:[["vcl-busy-indicator"]],inputs:{layout:"layout",label:"label",icon:"icon",imageHeight:"imageHeight",imageWidth:"imageWidth"},ngContentSelectors:b,decls:5,vars:6,consts:[["role","status",1,"justify-center","icogram"],["class","self-center",4,"ngIf"],["class","self-center",3,"icon",4,"ngIf"],[1,"self-center"],["role","\u201dpresentation\u201d",3,"src"],[1,"self-center",3,"icon"]],template:function(s,i){1&s&&(n.F$t(),n.TgZ(0,"div",0),n.YNc(1,I,2,6,"vcl-icon",1),n.YNc(2,h,1,2,"vcl-icon",2),n.TgZ(3,"div",3),n.Hsn(4),n.qZA()()),2&s&&(n.ekj("col","vertical"==i.layout)("row","horizontal"==i.layout),n.xp6(1),n.Q6J("ngIf",!i.icon),n.xp6(1),n.Q6J("ngIf",i.icon))},dependencies:[u.O5,t.o],styles:["vcl-busy-indicator{display:inline-block}\n"],encapsulation:2,changeDetection:0}),l})()}}]);