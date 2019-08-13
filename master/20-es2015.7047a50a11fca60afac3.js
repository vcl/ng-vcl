(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2JrD":function(n,s,t){"use strict";t.d(s,"b",function(){return l}),t.d(s,"a",function(){return a}),t.d(s,"c",function(){return c});var e=t("8Y7J");const l=new e.p("vcl-form-control-host"),a=new e.p("vcl-form-control-error-state-agent"),c=new e.p("vcl-form-control-input")},"4JRc":function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclCheckboxLabel</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-checkbox</span> [(<span class="hljs-attr">checked</span>)]=<span class="hljs-string">"value1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n  Check! \n<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclCheckboxLabel</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-checkbox</span> [(<span class="hljs-attr">checked</span>)]=<span class="hljs-string">"value2"</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">true</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n  Check! (disabled) \n<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n'},"5AAY":function(n,s,t){"use strict";t.d(s,"a",function(){return r}),t.d(s,"b",function(){return h});var e=t("8Y7J"),l=t("b1Eb"),a=t("X5GH"),c=t("dy60"),o=t("9Rb9"),r=(t("2JrD"),t("AXxg"),e.pb({encapsulation:2,styles:[],data:{}}));function h(n){return e.Mb(2,[(n()(),e.rb(0,0,null,null,2,"vcl-icon",[],[[2,"vclIcon",null],[1,"role",0]],null,null,l.b,l.a)),e.Hb(512,null,a.a,a.a,[e.C,c.a]),e.qb(2,4767744,null,0,o.a,[a.a,e.k],{icon:[0,"icon"]},null)],function(n,s){n(s,2,0,s.component.checked?"vcl:box-checked":"vcl:box")},function(n,s){n(s,0,0,e.Db(s,2).vclIcon,e.Db(s,2).attrRole)})}},AXxg:function(n,s,t){"use strict";t.d(s,"a",function(){return c});var e=t("8Y7J"),l=(t("mbT9"),t("XNiG"));let a=0;class c{constructor(n,s,t,c){this.cdRef=n,this.ngControl=s,this.formControlHost=t,this._errorStateAgent=c,this.stateChangedEmitter=new l.a,this.stateChanged=this.stateChangedEmitter.asObservable(),this.controlType="checkbox",this._focused=!1,this.generatedId="vcl_checkbox_"+a++,this._hostClasses=!0,this.attrRole="checkbox",this.tabindex=0,this._disabled=!1,this.checked=!1,this.checkedChange=new e.m,this.formDisabled=!1,this.onChange=()=>{},this.onTouched=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}get elementId(){return this.id||this.generatedId}get isFocused(){return this._focused}get attrAriaChecked(){return this.checked}get attrAriaDisabled(){return this.isDisabled}get isDisabled(){return this.formDisabled||this.disabled}get hasError(){const n=this.errorStateAgent||this._errorStateAgent;return!!n&&n(this.formControlHost,this)}set disabled(n){this._disabled=n,this.stateChangedEmitter.next()}get disabled(){return this._disabled}get value(){return this.checked}onLabelClick(n){this.toggleValue()}onKeyup(n){switch(n.code){case"Space":n.preventDefault(),this.toggleValue()}}onClick(n){this.toggleValue(),n.stopPropagation()}onBlur(){this._focused=!1,this.onTouched(),this.stateChangedEmitter.next()}onFocus(){this._focused=!0,this.stateChangedEmitter.next()}toggleValue(){this.isDisabled||(this.checked=!this.checked,this.checkedChange.emit(this.checked),this.cdRef.markForCheck(),this.onTouched(),this.onChange(this.checked),this.stateChangedEmitter.next())}ngOnDestroy(){this.stateChangedEmitter&&this.stateChangedEmitter.complete()}writeValue(n){this.checked=!!n,this.cdRef.markForCheck()}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.formDisabled=n,this.cdRef.markForCheck()}}},Fv3e:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> CheckboxDemoComponent {\n  value1 = <span class="hljs-literal">false</span>;\n  value2 = <span class="hljs-literal">false</span>;\n}\n'},Qrva:function(n,s){n.exports='<h1 id="vcl-checkbox">vcl-checkbox</h1>\n<p>A Checkbox utilizing <code>vcl-icon</code></p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLCheckboxModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLCheckboxModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclCheckboxLabel</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-checkbox</span> [(<span class="hljs-attr">checked</span>)]=<span class="hljs-string">&quot;value1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n  Check! \n<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>checked</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>State of checkbox</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the checkbox</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables checkbox if true</td>\n</tr>\n</tbody></table>\n<h3 id="events">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>checkedChange</code></td>\n<td>any</td>\n<td>Fired when the checked state has changed</td>\n</tr>\n</tbody></table>\n'},WpF5:function(n,s,t){"use strict";t.r(s);var e=t("8Y7J");class l{constructor(){this.value1=!1,this.value2=!1}}const a={demo:function(){return{label:"Checkbox",tabs:{Demo:l,"README.md":{type:"md",content:t("Qrva")},"demo.component.html":{type:"pre",content:t("4JRc")},"demo.component.ts":{type:"pre",content:t("Fv3e")}}}}};class c{}var o=t("pMnS"),r=t("8Ip6"),h=t("qjyM"),i=t("5AAY"),u=t("2JrD"),b=t("AXxg"),d=e.pb({encapsulation:2,styles:[],data:{}});function p(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Basic"])),(n()(),e.rb(2,0,null,null,6,"label",[["vclCheckboxLabel",""]],[[2,"vclFormControlLabel",null],[2,"vclFormControlLabelWrapping",null],[2,"vclDisabled",null],[1,"aria-label",0]],[[null,"click"]],function(n,s,t){var l=!0;return"click"===s&&(l=!1!==e.Db(n,3).onClick(t)&&l),l},null,null)),e.qb(3,16384,null,1,h.a,[],null,null),e.Ib(603979776,1,{checkbox:0}),(n()(),e.rb(5,0,null,null,2,"vcl-checkbox",[],[[1,"id",0],[2,"vclCheckbox",null],[1,"role",0],[1,"aria-checked",0],[1,"aria-disabled",0],[2,"vclDisabled",null],[2,"vclError",null],[1,"tabindex",0]],[[null,"checkedChange"],[null,"keyup"],[null,"click"],[null,"blur"],[null,"focus"]],function(n,s,t){var l=!0,a=n.component;return"keyup"===s&&(l=!1!==e.Db(n,7).onKeyup(t)&&l),"click"===s&&(l=!1!==e.Db(n,7).onClick(t)&&l),"blur"===s&&(l=!1!==e.Db(n,7).onBlur()&&l),"focus"===s&&(l=!1!==e.Db(n,7).onFocus()&&l),"checkedChange"===s&&(l=!1!==(a.value1=t)&&l),l},i.b,i.a)),e.Hb(6144,null,u.c,null,[b.a]),e.qb(7,180224,[[1,4]],0,b.a,[e.h,[8,null],[2,u.b],[2,u.a]],{checked:[0,"checked"]},{checkedChange:"checkedChange"}),(n()(),e.Kb(-1,null,[" Check! "])),(n()(),e.rb(9,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Disabled"])),(n()(),e.rb(11,0,null,null,6,"label",[["vclCheckboxLabel",""]],[[2,"vclFormControlLabel",null],[2,"vclFormControlLabelWrapping",null],[2,"vclDisabled",null],[1,"aria-label",0]],[[null,"click"]],function(n,s,t){var l=!0;return"click"===s&&(l=!1!==e.Db(n,12).onClick(t)&&l),l},null,null)),e.qb(12,16384,null,1,h.a,[],null,null),e.Ib(603979776,2,{checkbox:0}),(n()(),e.rb(14,0,null,null,2,"vcl-checkbox",[["disabled","true"]],[[1,"id",0],[2,"vclCheckbox",null],[1,"role",0],[1,"aria-checked",0],[1,"aria-disabled",0],[2,"vclDisabled",null],[2,"vclError",null],[1,"tabindex",0]],[[null,"checkedChange"],[null,"keyup"],[null,"click"],[null,"blur"],[null,"focus"]],function(n,s,t){var l=!0,a=n.component;return"keyup"===s&&(l=!1!==e.Db(n,16).onKeyup(t)&&l),"click"===s&&(l=!1!==e.Db(n,16).onClick(t)&&l),"blur"===s&&(l=!1!==e.Db(n,16).onBlur()&&l),"focus"===s&&(l=!1!==e.Db(n,16).onFocus()&&l),"checkedChange"===s&&(l=!1!==(a.value2=t)&&l),l},i.b,i.a)),e.Hb(6144,null,u.c,null,[b.a]),e.qb(16,180224,[[2,4]],0,b.a,[e.h,[8,null],[2,u.b],[2,u.a]],{disabled:[0,"disabled"],checked:[1,"checked"]},{checkedChange:"checkedChange"}),(n()(),e.Kb(-1,null,[" Check! (disabled) "]))],function(n,s){var t=s.component;n(s,7,0,t.value1),n(s,16,0,"true",t.value2)},function(n,s){n(s,2,0,e.Db(s,3).classVCLFormControlLabel,e.Db(s,3).classVCLFormControlLabelWrapping,e.Db(s,3).isDisabled,e.Db(s,3)._label),n(s,5,0,e.Db(s,7).elementId,e.Db(s,7)._hostClasses,e.Db(s,7).attrRole,e.Db(s,7).attrAriaChecked,e.Db(s,7).attrAriaDisabled,e.Db(s,7).isDisabled,e.Db(s,7).hasError,e.Db(s,7).tabindex),n(s,11,0,e.Db(s,12).classVCLFormControlLabel,e.Db(s,12).classVCLFormControlLabelWrapping,e.Db(s,12).isDisabled,e.Db(s,12)._label),n(s,14,0,e.Db(s,16).elementId,e.Db(s,16)._hostClasses,e.Db(s,16).attrRole,e.Db(s,16).attrAriaChecked,e.Db(s,16).attrAriaDisabled,e.Db(s,16).isDisabled,e.Db(s,16).hasError,e.Db(s,16).tabindex)})}function g(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,1,"ng-component",[],null,null,null,p,d)),e.qb(1,49152,null,0,l,[],null,null)],null,null)}var m=e.nb("ng-component",l,g,{},{},[]),k=t("SVse"),C=t("s7LF"),f=t("POq0"),v=t("dy60"),D=t("tfYh"),j=t("zMNK"),x=t("p/eS"),y=t("2FIb"),F=t("61Fc"),L=t("fspu"),A=t("mbT9"),_=t("iInd"),w=t("PNUx");t.d(s,"CheckboxDemoModuleNgFactory",function(){return B});var B=e.ob(c,[],function(n){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[o.a,r.a,m]],[3,e.j],e.w]),e.Bb(4608,k.n,k.m,[e.t,[2,k.A]]),e.Bb(4608,C.v,C.v,[]),e.Bb(4608,f.a,f.a,[]),e.Bb(4608,v.a,v.a,[[2,D.a]]),e.Bb(1073742336,k.c,k.c,[]),e.Bb(1073742336,C.u,C.u,[]),e.Bb(1073742336,C.l,C.l,[]),e.Bb(1073742336,j.e,j.e,[]),e.Bb(1073742336,f.b,f.b,[]),e.Bb(1073742336,x.a,x.a,[]),e.Bb(1073742336,y.a,y.a,[]),e.Bb(1073742336,F.c,F.c,[]),e.Bb(1073742336,L.a,L.a,[]),e.Bb(1073742336,A.a,A.a,[]),e.Bb(1073742336,_.q,_.q,[[2,_.v],[2,_.m]]),e.Bb(1073742336,c,c,[]),e.Bb(256,u.a,A.b,[]),e.Bb(1024,_.i,function(){return[[{path:"",component:w.a,data:a}]]},[])])})},fspu:function(n,s,t){"use strict";t.d(s,"a",function(){return e}),t("AXxg"),t("qjyM");class e{}},mbT9:function(n,s,t){"use strict";function e(n,s){return n&&s&&s.ngControl&&s.ngControl.invalid&&(s.ngControl.touched||n.submitted)}t.d(s,"b",function(){return e}),t.d(s,"a",function(){return l}),t("2JrD"),t("xsjC");class l{}},qjyM:function(n,s,t){"use strict";t.d(s,"a",function(){return e}),t("AXxg");class e{constructor(){this.classVCLFormControlLabel=!0,this.classVCLFormControlLabelWrapping=!0}get isDisabled(){return this.checkbox&&this.checkbox.isDisabled}onClick(n){this.checkbox&&this.checkbox.onLabelClick(n)}}},xsjC:function(n,s,t){"use strict";t.d(s,"a",function(){return a}),t("2JrD");var e=t("XNiG"),l=t("JX91");class a{constructor(n,s,t){this.elementRef=n,this.formGroup=s,this.ngForm=t,this._stateChangedEmitter=new e.a,this.stateChange=this._stateChangedEmitter.asObservable()}get classVclFormControlGroup(){return!this.classVclFormInlineControlGroup}get classVclFormInlineControlGroup(){return"vcl-form-inline-control-group"===this.elementRef.nativeElement.tagName.toLowerCase()}get attrVCLControlType(){return this.input&&this.input.controlType}get _form(){return this.ngForm||this.formGroup}get pending(){return this._form.pending}get invalid(){return this._form.invalid}get valid(){return this._form.valid}get touched(){return this._form.touched}get untouched(){return this._form.untouched}get submitted(){return this._form.submitted}ngAfterViewInit(){this.input&&this.input.stateChanged.pipe(Object(l.a)(void 0)).subscribe(this._stateChangedEmitter)}ngOnDestroy(){return this._stateChangedEmitter.complete()}}}}]);