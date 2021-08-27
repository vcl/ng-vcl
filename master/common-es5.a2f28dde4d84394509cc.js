!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[592],{80224:function(t,n,i){i.d(n,{R:function(){return m},q:function(){return h}});var c,a=i(84271),r=i(24988),s=i(36196),l=i(6006),u=i(16274),g=i(57120),d=i(852),f=0,m=((c=function(){function t(n){e(this,t),this.injector=n,this._hostClasses=!0,this._stateChangedEmitter=new l.xQ,this._generatedId="vcl_file-input_"+f++,this._focused=!1,this._cvaDisabled=!1,this.stateChanged=this._stateChangedEmitter.asObservable(),this.controlType="counter",this.value=0,this.hasError=!1,this.onChange=function(){},this.onTouched=function(){}}return o(t,[{key:"ngControl",get:function(){return this.injector.get(r.a5,null)}},{key:"elementId",get:function(){return this.id||this._generatedId}},{key:"isDisabled",get:function(){return this._cvaDisabled||this.disabled}},{key:"isFocused",get:function(){return this._focused}},{key:"setErrorState",value:function(t){this.hasError=t}},{key:"onFocus",value:function(){this._focused=!0,this._stateChangedEmitter.next()}},{key:"onBlur",value:function(t){this._focused=!1,this._stateChangedEmitter.next(),t&&this.onTouched()}},{key:"increment",value:function(){"number"==typeof this.max&&this.value>=this.max||(this.value++,this.onChange(this.value))}},{key:"decrement",value:function(){"number"==typeof this.min&&this.value<=this.min||(this.value--,this.onChange(this.value),this.onTouched())}},{key:"writeValue",value:function(t){this.value=t}},{key:"registerOnChange",value:function(t){this.onChange=t}},{key:"registerOnTouched",value:function(t){this.onTouched=t}},{key:"setDisabledState",value:function(t){this._cvaDisabled=t}}]),t}()).\u0275fac=function(t){return new(t||c)(a.Y36(a.zs3))},c.\u0275cmp=a.Xpm({type:c,selectors:[["demo-counter"]],hostVars:3,hostBindings:function(t,n){2&t&&(a.uIk("id",n.elementId),a.ekj("error",n.hasError))},inputs:{id:"id",disabled:"disabled",min:"min",max:"max"},features:[a._Bn([{provide:r.JU,useExisting:(0,a.Gpc)(function(){return c}),multi:!0},{provide:s.YGr,useExisting:(0,a.Gpc)(function(){return c})}])],decls:6,vars:1,consts:[["vcl-button","","square","","type","button",1,"transparent",3,"click","keydown.enter","focus"],["icon","fas:minus"],["icon","fas:plus"]],template:function(t,n){1&t&&(a.TgZ(0,"button",0),a.NdJ("click",function(){return n.decrement()})("keydown.enter",function(t){return n.decrement(),t.preventDefault()})("focus",function(){return n.onFocus()})("focus",function(){return n.onBlur(!1)}),a._UZ(1,"vcl-icon",1),a.qZA(),a.TgZ(2,"span"),a._uU(3),a.qZA(),a.TgZ(4,"button",0),a.NdJ("click",function(){return n.increment()})("keydown.enter",function(t){return n.increment(),t.preventDefault()})("focus",function(){return n.onFocus()})("focus",function(){return n.onBlur(!0)}),a._UZ(5,"vcl-icon",2),a.qZA()),2&t&&(a.xp6(3),a.Oqu(n.value))},directives:[g.r,d.o],styles:["[_nghost-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%] > span[_ngcontent-%COMP%]{font-size:2em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-left:.2em;padding-right:.2em}"]}),c),h=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[u.ez,r.u5,r.UX,s.o14,s.V4c]]}),t}()},62518:function(n,i,c){c.d(i,{z:function(){return k},l:function(){return w}});var a=c(16274),r=c(36196),s=c(62718),l=c(84271),u=c(95454),g=c(93220),d=c(28711),f=c(54283),m=c(67811),h=c(19425);function I(t,n){}function b(t,n){if(1&t&&(l.TgZ(0,"div"),l.YNc(1,I,0,0,"ng-template",5),l.qZA()),2&t){var e=l.oxw().$implicit;l.xp6(1),l.Q6J("cdkPortalOutlet",e.content)}}function p(t,n){if(1&t&&(l.TgZ(0,"div"),l.TgZ(1,"pre"),l._uU(2),l.qZA(),l.qZA()),2&t){var e=l.oxw().$implicit;l.xp6(2),l.Oqu(e.content)}}function y(t,n){if(1&t&&l._UZ(0,"markdown",6),2&t){var e=l.oxw().$implicit;l.Q6J("data",e.content)}}function C(t,n){if(1&t&&(l._UZ(0,"markdown",6),l.ALo(1,"language")),2&t){var e=l.oxw().$implicit;l.Q6J("data",l.xi3(1,1,e.content,"typescript"))}}function v(t,n){if(1&t&&(l._UZ(0,"markdown",6),l.ALo(1,"language")),2&t){var e=l.oxw().$implicit;l.Q6J("data",l.xi3(1,1,e.content,"html"))}}function A(t,n){if(1&t&&(l.TgZ(0,"vcl-tab"),l.TgZ(1,"vcl-label"),l._uU(2),l.qZA(),l.YNc(3,b,2,1,"div",1),l.YNc(4,p,3,1,"div",1),l.YNc(5,y,1,1,"markdown",4),l.YNc(6,C,2,4,"markdown",4),l.YNc(7,v,2,4,"markdown",4),l.qZA()),2&t){var e=n.$implicit;l.xp6(2),l.Oqu(e.name),l.xp6(1),l.Q6J("ngIf","component"===e.type),l.xp6(1),l.Q6J("ngIf","text"===e.type),l.xp6(1),l.Q6J("ngIf","md"===e.type),l.xp6(1),l.Q6J("ngIf","ts"===e.type),l.xp6(1),l.Q6J("ngIf","html"===e.type)}}function Z(t,n){if(1&t&&(l.TgZ(0,"div"),l.TgZ(1,"vcl-tab-nav",2),l.YNc(2,A,8,6,"vcl-tab",3),l.qZA(),l.qZA()),2&t){var e=l.oxw();l.xp6(2),l.Q6J("ngForOf",e.tabs)}}var J,k=((J=function(){function n(t,i){e(this,n),this.activatedRoute=t,this.sanitizer=i,this.tabs=[]}return o(n,[{key:"ngOnInit",value:function(){var n=this.activatedRoute.snapshot.data.demo();n?(this.title=n.label,this.tabs=n.tabs?Object.keys(n.tabs).reduce(function(e,i){var o,c;return"object"==typeof n.tabs[i]&&n.tabs[i]?(o=n.tabs[i].type,c="object"==typeof n.tabs[i].content&&n.tabs[i].content&&n.tabs[i].content.default?n.tabs[i].content.default:n.tabs[i].content):"function"==typeof n.tabs[i]&&(o="component",c=new s.C5(n.tabs[i])),c&&o?[].concat(t(e),[{name:i,content:c,type:o}]):e},[]):[]):(this.title="ng-vcl",this.tabs=[])}}]),n}()).\u0275fac=function(t){return new(t||J)(l.Y36(u.gz),l.Y36(g.H7))},J.\u0275cmp=l.Xpm({type:J,selectors:[["ng-component"]],decls:3,vars:2,consts:[[1,"article-header"],[4,"ngIf"],["borders","true"],[4,"ngFor","ngForOf"],[3,"data",4,"ngIf"],[3,"cdkPortalOutlet"],[3,"data"]],template:function(t,n){1&t&&(l.TgZ(0,"h2",0),l._uU(1),l.qZA(),l.YNc(2,Z,3,1,"div",1)),2&t&&(l.xp6(1),l.hij(" ",n.title,""),l.xp6(1),l.Q6J("ngIf",n.tabs.length>0))},directives:[a.O5,d.d,a.sg,f.i,m.q8,s.Pl,h.lF],pipes:[h.Ay],styles:["markdown[_ngcontent-%COMP%]     table{display:block;width:100%;overflow:auto}markdown[_ngcontent-%COMP%]     table th, markdown[_ngcontent-%COMP%]     table td{padding:6px 13px;border:1px solid #dfe2e5}markdown[_ngcontent-%COMP%]     table tr{background-color:#fff;border-top:1px solid #c6cbd1}markdown[_ngcontent-%COMP%]     table tr:nth-child(2n){background-color:#f6f8fa}"]}),J),w=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[a.ez,r.Cm3,s.eL,h.JP.forChild()]]}),t}()},36669:function(t,n,i){i.d(n,{B:function(){return d}});var o=i(84271),c=i(93220),a=i(16274),r=i(852);function s(t,n){if(1&t&&(o.TgZ(0,"vcl-icon",3),o._UZ(1,"img",4),o.qZA()),2&t){var e=o.oxw();o.uIk("aria-label",e.label),o.xp6(1),o.Udp("width",e.imageWidth)("height",e.imageHeight),o.Q6J("src",e.imageSrc,o.LSH)}}function l(t,n){if(1&t&&o._UZ(0,"vcl-icon",5),2&t){var e=o.oxw();o.Q6J("icon",e.icon),o.uIk("aria-label",e.label)}}var u,g=["*"],d=((u=function t(n){e(this,t),this.sanitizer=n,this.layout="vertical",this.label="Loading",this.imageHeight="3em",this.imageWidth="3em",this.imageSrc=this.sanitizer.bypassSecurityTrustResourceUrl("data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iCiAgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIgogICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIgoJd2lkdGg9IjEwMCUiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KCTxnPgoJICAgIDxkZWZzPgoJICAgIAk8Y2xpcFBhdGggaWQ9ImNsaXAiPgoJICAgICAgCQk8cGF0aCAgZD0iTSA1MCA1MCBMIDM1IDAgTCA2NSAwIHoiIC8+CgkJICAgIDwvY2xpcFBhdGg+CgkgICAgCTxlbGxpcHNlIGlkPSJDaXJjbGVCbG9jayIgY2xpcC1wYXRoPSJ1cmwoI2NsaXApIiBjeD0iNTAiIGN5PSI1MCIgcng9IjQwIiByeT0iNDAiIHN0eWxlPSJmaWxsOm5vbmU7IHN0cm9rZTojRThFOEU4IiBzdHJva2Utd2lkdGg9IjE1Ii8+CgkgICAgPC9kZWZzPgoKCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoNDAgNTAgNTApIiAvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSg4MCA1MCA1MCkiIC8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMTYwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgyMDAgNTAgNTApIi8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDI0MCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMjgwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgzMjAgNTAgNTApIi8+CgoJCTxlbGxpcHNlIGNsaXAtcGF0aD0idXJsKCNjbGlwKSIgY3g9IjUwIiBjeT0iNTAiIHJ4PSI0MCIgcnk9IjQwIiBzdHlsZT0iZmlsbDpub25lOyBzdHJva2U6IzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxNSI+CgkJCTxhbmltYXRlVHJhbnNmb3JtCgkJCQlhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCgkJCQlhdHRyaWJ1dGVUeXBlPSJYTUwiCgkJCQl0eXBlPSJyb3RhdGUiCgkJCQl2YWx1ZXM9IjAgNTAgNTA7IDQwIDUwIDUwOyA4MCA1MCA1MDsgMTIwIDUwIDUwOyAxNjAgNTAgNTA7IDIwMCA1MCA1MDsgMjQwIDUwIDUwOyAyODAgNTAgNTA7IDMyMCA1MCA1MCIKCQkJCWR1cj0iM3MiCgkJCQlyZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIKCQkJCWFkZGl0aXZlPSJyZXBsYWNlIgoJCQkJY2FsY01vZGU9ImRpc2NyZXRlIgoJCQkJZmlsbD0iZnJlZXplIi8+CgkJPC9lbGxpcHNlPgoJPC9nPgo8L3N2Zz4=")}).\u0275fac=function(t){return new(t||u)(o.Y36(c.H7))},u.\u0275cmp=o.Xpm({type:u,selectors:[["vcl-busy-indicator"]],inputs:{layout:"layout",label:"label",icon:"icon",imageHeight:"imageHeight",imageWidth:"imageWidth"},ngContentSelectors:g,decls:5,vars:6,consts:[["role","status",1,"justify-center","icogram"],["class","self-center",4,"ngIf"],["class","self-center",3,"icon",4,"ngIf"],[1,"self-center"],["role","\u201dpresentation\u201d",3,"src"],[1,"self-center",3,"icon"]],template:function(t,n){1&t&&(o.F$t(),o.TgZ(0,"div",0),o.YNc(1,s,2,6,"vcl-icon",1),o.YNc(2,l,1,2,"vcl-icon",2),o.TgZ(3,"div",3),o.Hsn(4),o.qZA(),o.qZA()),2&t&&(o.ekj("col","vertical"==n.layout)("row","horizontal"==n.layout),o.xp6(1),o.Q6J("ngIf",!n.icon),o.xp6(1),o.Q6J("ngIf",n.icon))},directives:[a.O5,r.o],styles:["vcl-busy-indicator{display:inline-block}\n"],encapsulation:2,changeDetection:0}),u)}}])}();