(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2FIb":function(t,n,e){"use strict";e.d(n,"a",(function(){return w})),e.d(n,"b",(function(){return _}));var i=e("ofXK"),c=e("19H1"),s=e("+rOU"),o=e("fXoL"),r=e("tyNb"),a=e("jhN1"),u=e("tKhL"),b=e("ZMf7"),l=e("pKlR");function d(t,n){}function h(t,n){if(1&t&&(o.Sb(0,"div"),o.wc(1,d,0,0,"ng-template",6),o.Rb()),2&t){const t=o.dc().$implicit;o.Ab(1),o.ic("cdkPortalOutlet",t.content)}}function f(t,n){if(1&t&&(o.Sb(0,"div"),o.Sb(1,"pre"),o.yc(2),o.Rb(),o.Rb()),2&t){const t=o.dc().$implicit;o.Ab(2),o.zc(t.content)}}function m(t,n){if(1&t&&o.Nb(0,"div",7),2&t){const t=o.dc().$implicit;o.ic("innerHtml",t.content,o.pc)}}function p(t,n){if(1&t&&o.Nb(0,"div",8),2&t){const t=o.dc().$implicit;o.ic("innerHtml",t.content,o.pc)}}function v(t,n){if(1&t&&o.Nb(0,"pre",7),2&t){const t=o.dc().$implicit;o.ic("innerHtml",t.content,o.pc)}}function g(t,n){if(1&t&&(o.Sb(0,"vcl-tab"),o.Sb(1,"vcl-label"),o.yc(2),o.Rb(),o.wc(3,h,2,1,"div",1),o.wc(4,f,3,1,"div",1),o.wc(5,m,1,1,"div",4),o.wc(6,p,1,1,"div",5),o.wc(7,v,1,1,"pre",4),o.Rb()),2&t){const t=n.$implicit;o.Ab(2),o.zc(t.name),o.Ab(1),o.ic("ngIf","component"===t.type),o.Ab(1),o.ic("ngIf","text"===t.type),o.Ab(1),o.ic("ngIf","html"===t.type),o.Ab(1),o.ic("ngIf","md"===t.type),o.Ab(1),o.ic("ngIf","pre"===t.type)}}function y(t,n){if(1&t&&(o.Sb(0,"div"),o.Sb(1,"vcl-tab-nav",2),o.wc(2,g,8,6,"vcl-tab",3),o.Rb(),o.Rb()),2&t){const t=o.dc();o.Ab(2),o.ic("ngForOf",t.tabs)}}let w=(()=>{class t{constructor(t,n){this.activatedRoute=t,this.sanitizer=n,this.tabs=[]}ngOnInit(){const t=this.activatedRoute.snapshot.data.demo();t?(this.title=t.label,this.tabs=t.tabs?Object.keys(t.tabs).map(n=>{let e,i;return"object"==typeof t.tabs[n]&&t.tabs[n]?(e=t.tabs[n].type,i="pre"===e||"html"===e||"md"===e?this.sanitizer.bypassSecurityTrustHtml(t.tabs[n].content):t.tabs[n].content):"function"==typeof t.tabs[n]&&(e="component",i=new s.c(t.tabs[n])),{name:n,content:i,type:e}}):[]):(this.title="ng-vcl",this.tabs=[])}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(r.a),o.Mb(a.b))},t.\u0275cmp=o.Gb({type:t,selectors:[["ng-component"]],decls:3,vars:2,consts:[[1,"article-header"],[4,"ngIf"],["borders","true"],[4,"ngFor","ngForOf"],[3,"innerHtml",4,"ngIf"],["class","markdown-body",3,"innerHtml",4,"ngIf"],[3,"cdkPortalOutlet"],[3,"innerHtml"],[1,"markdown-body",3,"innerHtml"]],template:function(t,n){1&t&&(o.Sb(0,"h2",0),o.yc(1),o.Rb(),o.wc(2,y,3,1,"div",1)),2&t&&(o.Ab(1),o.Ac(" ",n.title,""),o.Ab(1),o.ic("ngIf",n.tabs.length>0))},directives:[i.t,u.a,i.s,b.a,l.b,s.b],encapsulation:2}),t})(),_=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},imports:[[i.c,c.db,s.g]]}),t})()},f0Vy:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return d}));var i=e("fXoL"),c=e("3Pt+"),s=e("19H1"),o=e("XNiG"),r=e("ofXK"),a=e("6B8K"),u=e("9Rb9");let b=0,l=(()=>{class t{constructor(t){this.formControlState=t,this._hostClasses=!0,this._stateChangedEmitter=new o.a,this._generatedId="vcl_file-input_"+b++,this._focused=!1,this._cvaDisabled=!1,this.stateChanged=this._stateChangedEmitter.asObservable(),this.controlType="counter",this.value=0,this.onChange=()=>{},this.onTouched=()=>{}}get elementId(){return this.id||this._generatedId}get isDisabled(){return this._cvaDisabled||this.disabled}get isFocused(){return this._focused}get hasError(){var t;return null===(t=this.formControlState)||void 0===t?void 0:t.hasError}getError(t,n){return this.formControlState.getError(t,n)}onLabelClick(t){}onFocus(){this._focused=!0,this._stateChangedEmitter.next()}onBlur(t){this._focused=!1,this._stateChangedEmitter.next(),t&&this.onTouched()}increment(){"number"==typeof this.max&&this.value>=this.max||(this.value++,this.onChange(this.value))}decrement(){"number"==typeof this.min&&this.value<=this.min||(this.value--,this.onChange(this.value),this.onTouched())}writeValue(t){this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._cvaDisabled=t}}return t.\u0275fac=function(n){return new(n||t)(i.Mb(s.h))},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-counter"]],hostVars:5,hostBindings:function(t,n){2&t&&(i.Bb("id",n.elementId),i.Db("icogram",n._hostClasses)("error",n.hasError))},inputs:{id:"id",disabled:"disabled",min:"min",max:"max"},features:[i.zb([s.h,{provide:c.p,useExisting:Object(i.S)(()=>t),multi:!0}])],decls:6,vars:1,consts:[["vcl-square-button","","vclPrepend","","type","button",3,"click","keydown.enter","focus"],["icon","fas:minus"],[1,"vclText"],["vcl-square-button","","vclAppend","","type","button",3,"click","keydown.enter","focus"],["icon","fas:plus"]],template:function(t,n){1&t&&(i.Sb(0,"button",0),i.ac("click",(function(){return n.decrement()}))("keydown.enter",(function(){return n.decrement()}))("focus",(function(){return n.onFocus()}))("focus",(function(){return n.onBlur(!1)})),i.Nb(1,"vcl-icon",1),i.Rb(),i.Sb(2,"div",2),i.yc(3),i.Rb(),i.Sb(4,"button",3),i.ac("click",(function(){return n.increment()}))("keydown.enter",(function(){return n.increment()}))("focus",(function(){return n.onFocus()}))("focus",(function(){return n.onBlur(!0)})),i.Nb(5,"vcl-icon",4),i.Rb()),2&t&&(i.Ab(3),i.zc(n.value))},directives:[a.b,u.a],styles:[".vclText[_ngcontent-%COMP%] {\n      font-size: 2.5em;\n      user-select: none;\n      padding-left: 0.2em;\n      padding-right: 0.2em;\n    }"]}),t})(),d=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(n){return new(n||t)},imports:[[r.c,c.m,c.B,s.N,s.B]]}),t})()}}]);