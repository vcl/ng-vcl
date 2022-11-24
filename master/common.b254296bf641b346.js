"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[592],{8565:(E,C,s)=>{s.d(C,{R:()=>u,q:()=>d});var o=s(4650),p=s(433),m=s(7074),t=s(7579),T=s(6895),x=s(6447),O=s(6994);let D=0;class u{constructor(a){this.injector=a,this._hostClasses=!0,this._stateChangedEmitter=new t.x,this._generatedId="vcl_file-input_"+D++,this._focused=!1,this._cvaDisabled=!1,this.stateChanged=this._stateChangedEmitter.asObservable(),this.controlType="counter",this.value=0,this.hasError=!1,this.onChange=()=>{},this.onTouched=()=>{}}get ngControl(){return this.injector.get(p.a5,null)}get elementId(){return this.id||this._generatedId}get isDisabled(){return this._cvaDisabled||this.disabled}get isFocused(){return this._focused}setErrorState(a){this.hasError=a}onFocus(){this._focused=!0,this._stateChangedEmitter.next()}onBlur(a){this._focused=!1,this._stateChangedEmitter.next(),a&&this.onTouched()}increment(){"number"==typeof this.max&&this.value>=this.max||(this.value++,this.onChange(this.value))}decrement(){"number"==typeof this.min&&this.value<=this.min||(this.value--,this.onChange(this.value),this.onTouched())}writeValue(a){this.value=a}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}setDisabledState(a){this._cvaDisabled=a}static#t=this.\u0275fac=function(l){return new(l||u)(o.Y36(o.zs3))};static#n=this.\u0275cmp=o.Xpm({type:u,selectors:[["demo-counter"]],hostVars:3,hostBindings:function(l,c){2&l&&(o.uIk("id",c.elementId),o.ekj("error",c.hasError))},inputs:{id:"id",disabled:"disabled",min:"min",max:"max"},features:[o._Bn([{provide:p.JU,useExisting:(0,o.Gpc)(()=>u),multi:!0},{provide:m.YGr,useExisting:(0,o.Gpc)(()=>u)}])],decls:6,vars:1,consts:[["vcl-button","","square","","type","button",1,"transparent",3,"click","keydown.enter","focus"],["icon","fas:minus"],["icon","fas:plus"]],template:function(l,c){1&l&&(o.TgZ(0,"button",0),o.NdJ("click",function(){return c.decrement()})("keydown.enter",function(f){return c.decrement(),f.preventDefault()})("focus",function(){return c.onFocus()})("focus",function(){return c.onBlur(!1)}),o._UZ(1,"vcl-icon",1),o.qZA(),o.TgZ(2,"span"),o._uU(3),o.qZA(),o.TgZ(4,"button",0),o.NdJ("click",function(){return c.increment()})("keydown.enter",function(f){return c.increment(),f.preventDefault()})("focus",function(){return c.onFocus()})("focus",function(){return c.onBlur(!0)}),o._UZ(5,"vcl-icon",2),o.qZA()),2&l&&(o.xp6(3),o.Oqu(c.value))},dependencies:[x.o,O.r],styles:["[_nghost-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%] > span[_ngcontent-%COMP%]{font-size:2em;-webkit-user-select:none;user-select:none;padding-left:.2em;padding-right:.2em}"]})}class d{static#t=this.\u0275fac=function(l){return new(l||d)};static#n=this.\u0275mod=o.oAB({type:d});static#e=this.\u0275inj=o.cJS({imports:[T.ez,p.u5,p.UX,m.o14,m.V4c]})}},9155:(E,C,s)=>{s.d(C,{z:()=>v,l:()=>g});var o=s(6895),p=s(7074),m=s(4080),t=s(4650),T=s(4629),x=s(1481),O=s(9319),D=s(5005),u=s(2007),d=s(9072);function w(i,e){}function a(i,e){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,w,0,0,"ng-template",5),t.qZA()),2&i){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("cdkPortalOutlet",n.content)}}function l(i,e){if(1&i&&(t.TgZ(0,"div")(1,"pre"),t._uU(2),t.qZA()()),2&i){const n=t.oxw().$implicit;t.xp6(2),t.Oqu(n.content)}}function c(i,e){if(1&i&&t._UZ(0,"markdown",6),2&i){const n=t.oxw().$implicit;t.Q6J("data",n.content)}}function _(i,e){if(1&i&&(t._UZ(0,"markdown",6),t.ALo(1,"language")),2&i){const n=t.oxw().$implicit;t.Q6J("data",t.xi3(1,1,n.content,"typescript"))}}function f(i,e){if(1&i&&(t._UZ(0,"markdown",6),t.ALo(1,"language")),2&i){const n=t.oxw().$implicit;t.Q6J("data",t.xi3(1,1,n.content,"html"))}}function P(i,e){if(1&i&&(t._UZ(0,"markdown",6),t.ALo(1,"language")),2&i){const n=t.oxw().$implicit;t.Q6J("data",t.xi3(1,1,n.content,"scss"))}}function y(i,e){if(1&i&&(t.TgZ(0,"vcl-tab")(1,"vcl-label"),t._uU(2),t.qZA(),t.YNc(3,a,2,1,"div",1),t.YNc(4,l,3,1,"div",1),t.YNc(5,c,1,1,"markdown",4),t.YNc(6,_,2,4,"markdown",4),t.YNc(7,f,2,4,"markdown",4),t.YNc(8,P,2,4,"markdown",4),t.qZA()),2&i){const n=e.$implicit;t.xp6(2),t.Oqu(n.name),t.xp6(1),t.Q6J("ngIf","component"===n.type),t.xp6(1),t.Q6J("ngIf","text"===n.type),t.xp6(1),t.Q6J("ngIf","md"===n.type),t.xp6(1),t.Q6J("ngIf","ts"===n.type),t.xp6(1),t.Q6J("ngIf","html"===n.type),t.xp6(1),t.Q6J("ngIf","scss"===n.type)}}function I(i,e){if(1&i&&(t.TgZ(0,"div")(1,"vcl-tab-nav",2),t.YNc(2,y,9,7,"vcl-tab",3),t.qZA()()),2&i){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.tabs)}}class v{constructor(e,n){this.activatedRoute=e,this.sanitizer=n,this.tabs=[]}ngOnInit(){const e=this.activatedRoute.snapshot.data.demo();e?(this.title=e.label,this.tabs=e.tabs?Object.keys(e.tabs).reduce((n,r)=>{let b,h;return"object"==typeof e.tabs[r]&&e.tabs[r]?(b=e.tabs[r].type,h="object"==typeof e.tabs[r].content&&e.tabs[r].content&&e.tabs[r].content.default?e.tabs[r].content.default:e.tabs[r].content):"function"==typeof e.tabs[r]&&(b="component",h=new m.C5(e.tabs[r])),h&&b?[...n,{name:r,content:h,type:b}]:n},[]):[]):(this.title="ng-vcl",this.tabs=[])}static#t=this.\u0275fac=function(n){return new(n||v)(t.Y36(T.gz),t.Y36(x.H7))};static#n=this.\u0275cmp=t.Xpm({type:v,selectors:[["ng-component"]],decls:3,vars:2,consts:[[1,"article-header"],[4,"ngIf"],["borders","true"],[4,"ngFor","ngForOf"],[3,"data",4,"ngIf"],[3,"cdkPortalOutlet"],[3,"data"]],template:function(n,r){1&n&&(t.TgZ(0,"h2",0),t._uU(1),t.qZA(),t.YNc(2,I,3,1,"div",1)),2&n&&(t.xp6(1),t.Oqu(r.title),t.xp6(1),t.Q6J("ngIf",r.tabs.length>0))},dependencies:[o.sg,o.O5,O.i,D.d,u.q8,m.Pl,d.lF,d.Ay],styles:["markdown[_ngcontent-%COMP%]     table{display:block;width:100%;overflow:auto}markdown[_ngcontent-%COMP%]     table th, markdown[_ngcontent-%COMP%]     table td{padding:6px 13px;border:1px solid #dfe2e5}markdown[_ngcontent-%COMP%]     table tr{background-color:#fff;border-top:1px solid #c6cbd1}markdown[_ngcontent-%COMP%]     table tr:nth-child(2n){background-color:#f6f8fa}"]})}class g{static#t=this.\u0275fac=function(n){return new(n||g)};static#n=this.\u0275mod=t.oAB({type:g});static#e=this.\u0275inj=t.cJS({imports:[o.ez,p.Cm3,m.eL,d.JP.forChild()]})}}}]);