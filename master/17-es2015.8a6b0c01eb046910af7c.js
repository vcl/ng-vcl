(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1/Kn":function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t.d(l,"b",function(){return r});var s=t("8Y7J"),a=t("XNiG");t("mbT9"),t("gW3m");const e=new s.p("vcl_input_host");let u=0;class r{constructor(n,l,t,s,e){this.elementRef=n,this.ngControl=l,this.formControlHost=t,this._errorStateAgent=s,this.inputHost=e,this.uniqueId="vcl_input_"+u++,this._disabled=!1,this._focused=!1,this.stateChangedEmitter=new a.a,this.stateChanged=this.stateChangedEmitter.asObservable(),this.controlType="input",this.materialModifierClass=void 0,this.disabled=!1,this.autoselect=!1,this.classVclInput=!0}get elementId(){return this.id||this.uniqueId}get isFocused(){return this._focused}get isLabelFloating(){return this.isFocused||this.value.length>0}get isDisabled(){return this.disabled||this._disabled||this.inputHost&&this.inputHost.isDisabled}get hasError(){const n=this.errorStateAgent||this._errorStateAgent;return!!n&&n(this.formControlHost,this)}get attrDisabled(){return!!this.isDisabled||null}focus(){this.elementRef.nativeElement.focus()}onFocus(){this._focused=!0,this.autoselect&&this.elementRef.nativeElement.select(),this.inputHost&&this.inputHost.notifyInputFocus(this),this.stateChangedEmitter.next()}onBlur(){this._focused=!1,this.inputHost&&this.inputHost.notifyInputBlur(this),this.stateChangedEmitter.next()}onLabelClick(n){this.elementRef.nativeElement.focus()}get value(){return this.elementRef.nativeElement.value||""}ngOnDestroy(){this.stateChangedEmitter&&this.stateChangedEmitter.complete()}getError(n){return this.hasError&&this.ngControl.getError(n)}onInput(){this.stateChangedEmitter.next()}}},"2JrD":function(n,l,t){"use strict";t.d(l,"b",function(){return a}),t.d(l,"a",function(){return e}),t.d(l,"c",function(){return u});var s=t("8Y7J");const a=new s.p("vcl-form-control-host"),e=new s.p("vcl-form-control-error-state-agent"),u=new s.p("vcl-form-control-input")},CI8A:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> InputDemoComponent {\n  data1 = <span class="hljs-string">\'foobar\'</span>;\n}\n'},S1uV:function(n,l,t){"use strict";t.r(l);var s=t("8Y7J");class a{constructor(){this.data1="foobar"}}const e={demo:function(){return{label:"Input",tabs:{Demo:a,"README.md":{type:"md",content:t("qsjp")},"demo.component.html":{type:"pre",content:t("UOgG")},"demo.component.ts":{type:"pre",content:t("CI8A")}}}}};class u{}var r=t("pMnS"),i=t("8Ip6"),o=t("2JrD"),p=t("1/Kn"),c=t("pIVY"),h=t("s7LF"),d=s.pb({encapsulation:2,styles:[],data:{}});function b(n){return s.Mb(0,[(n()(),s.rb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.Kb(-1,null,["Input"])),(n()(),s.rb(2,0,null,null,8,"input",[["vclInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"],[null,"change"]],function(n,l,t){var a=!0,e=n.component;return"input"===l&&(a=!1!==s.Db(n,5)._handleInput(t.target.value)&&a),"blur"===l&&(a=!1!==s.Db(n,5).onTouched()&&a),"compositionstart"===l&&(a=!1!==s.Db(n,5)._compositionStart()&&a),"compositionend"===l&&(a=!1!==s.Db(n,5)._compositionEnd(t.target.value)&&a),"focus"===l&&(a=!1!==s.Db(n,10).onFocus()&&a),"blur"===l&&(a=!1!==s.Db(n,10).onBlur()&&a),"input"===l&&(a=!1!==s.Db(n,10).onInput()&&a),"change"===l&&(a=!1!==s.Db(n,10).onInput()&&a),"ngModelChange"===l&&(a=!1!==s.Db(n,10).onInput()&&a),"ngModelChange"===l&&(a=!1!==(e.data1=t)&&a),a},null,null)),s.Hb(6144,null,o.c,null,[p.b]),s.Hb(6144,null,c.b,null,[p.b]),s.qb(5,16384,null,0,h.c,[s.C,s.k,[2,h.a]],null,null),s.Hb(1024,null,h.m,function(n){return[n]},[h.c]),s.qb(7,671744,null,0,h.r,[[8,null],[8,null],[8,null],[6,h.m]],{model:[0,"model"]},{update:"ngModelChange"}),s.Hb(2048,null,h.n,null,[h.r]),s.qb(9,16384,null,0,h.o,[[4,h.n]],null,null),s.qb(10,147456,null,0,p.b,[s.k,[2,h.n],[2,o.b],[2,o.a],[2,p.a]],null,null),(n()(),s.rb(11,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.rb(12,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),s.Kb(-1,null,["Input value:"])),(n()(),s.Kb(14,null,[" "," "])),(n()(),s.rb(15,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.rb(16,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.rb(17,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.Kb(-1,null,["Input (autoselect)"])),(n()(),s.rb(19,0,null,null,3,"input",[["autoselect","true"],["vclInput",""]],[[8,"value",0],[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(n,l,t){var a=!0;return"focus"===l&&(a=!1!==s.Db(n,22).onFocus()&&a),"blur"===l&&(a=!1!==s.Db(n,22).onBlur()&&a),"input"===l&&(a=!1!==s.Db(n,22).onInput()&&a),"change"===l&&(a=!1!==s.Db(n,22).onInput()&&a),"ngModelChange"===l&&(a=!1!==s.Db(n,22).onInput()&&a),a},null,null)),s.Hb(6144,null,o.c,null,[p.b]),s.Hb(6144,null,c.b,null,[p.b]),s.qb(22,147456,null,0,p.b,[s.k,[2,h.n],[2,o.b],[2,o.a],[2,p.a]],{autoselect:[0,"autoselect"]},null),(n()(),s.rb(23,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.rb(24,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.rb(25,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.Kb(-1,null,["Input (readonly)"])),(n()(),s.rb(27,0,null,null,3,"input",[["readonly","true"],["value","readOnly"],["vclInput",""]],[[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(n,l,t){var a=!0;return"focus"===l&&(a=!1!==s.Db(n,30).onFocus()&&a),"blur"===l&&(a=!1!==s.Db(n,30).onBlur()&&a),"input"===l&&(a=!1!==s.Db(n,30).onInput()&&a),"change"===l&&(a=!1!==s.Db(n,30).onInput()&&a),"ngModelChange"===l&&(a=!1!==s.Db(n,30).onInput()&&a),a},null,null)),s.Hb(6144,null,o.c,null,[p.b]),s.Hb(6144,null,c.b,null,[p.b]),s.qb(30,147456,null,0,p.b,[s.k,[2,h.n],[2,o.b],[2,o.a],[2,p.a]],null,null),(n()(),s.rb(31,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.rb(32,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.rb(33,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.Kb(-1,null,["Input (disabled)"])),(n()(),s.rb(35,0,null,null,3,"input",[["value","disabled"],["vclInput",""]],[[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(n,l,t){var a=!0;return"focus"===l&&(a=!1!==s.Db(n,38).onFocus()&&a),"blur"===l&&(a=!1!==s.Db(n,38).onBlur()&&a),"input"===l&&(a=!1!==s.Db(n,38).onInput()&&a),"change"===l&&(a=!1!==s.Db(n,38).onInput()&&a),"ngModelChange"===l&&(a=!1!==s.Db(n,38).onInput()&&a),a},null,null)),s.Hb(6144,null,o.c,null,[p.b]),s.Hb(6144,null,c.b,null,[p.b]),s.qb(38,147456,null,0,p.b,[s.k,[2,h.n],[2,o.b],[2,o.a],[2,p.a]],{disabled:[0,"disabled"]},null),(n()(),s.rb(39,0,null,null,0,"br",[],null,null,null,null,null))],function(n,l){n(l,7,0,l.component.data1),n(l,22,0,"true"),n(l,38,0,!0)},function(n,l){var t=l.component;n(l,2,1,[s.Db(l,9).ngClassUntouched,s.Db(l,9).ngClassTouched,s.Db(l,9).ngClassPristine,s.Db(l,9).ngClassDirty,s.Db(l,9).ngClassValid,s.Db(l,9).ngClassInvalid,s.Db(l,9).ngClassPending,s.Db(l,10).elementId,s.Db(l,10).classVclInput,s.Db(l,10).isDisabled,s.Db(l,10).hasError,s.Db(l,10).attrDisabled]),n(l,14,0,t.data1),n(l,19,0,"Foo",s.Db(l,22).elementId,s.Db(l,22).classVclInput,s.Db(l,22).isDisabled,s.Db(l,22).hasError,s.Db(l,22).attrDisabled),n(l,27,0,s.Db(l,30).elementId,s.Db(l,30).classVclInput,s.Db(l,30).isDisabled,s.Db(l,30).hasError,s.Db(l,30).attrDisabled),n(l,35,0,s.Db(l,38).elementId,s.Db(l,38).classVclInput,s.Db(l,38).isDisabled,s.Db(l,38).hasError,s.Db(l,38).attrDisabled)})}function g(n){return s.Mb(0,[(n()(),s.rb(0,0,null,null,1,"ng-component",[],null,null,null,b,d)),s.qb(1,49152,null,0,a,[],null,null)],null,null)}var m=s.nb("ng-component",a,g,{},{},[]),f=t("SVse"),v=t("POq0"),j=t("zMNK"),D=t("p/eS"),C=t("2FIb"),I=t("hUuX"),M=t("iInd"),E=t("PNUx");t.d(l,"InputDemoModuleNgFactory",function(){return _});var _=s.ob(u,[],function(n){return s.Ab([s.Bb(512,s.j,s.Z,[[8,[r.a,i.a,m]],[3,s.j],s.w]),s.Bb(4608,f.n,f.m,[s.t,[2,f.A]]),s.Bb(4608,h.v,h.v,[]),s.Bb(4608,v.a,v.a,[]),s.Bb(1073742336,f.c,f.c,[]),s.Bb(1073742336,h.u,h.u,[]),s.Bb(1073742336,h.l,h.l,[]),s.Bb(1073742336,j.e,j.e,[]),s.Bb(1073742336,v.b,v.b,[]),s.Bb(1073742336,D.a,D.a,[]),s.Bb(1073742336,C.a,C.a,[]),s.Bb(1073742336,I.b,I.b,[]),s.Bb(1073742336,M.q,M.q,[[2,M.v],[2,M.m]]),s.Bb(1073742336,u,u,[]),s.Bb(1024,M.i,function(){return[[{path:"",component:E.a,data:e}]]},[])])})},UOgG:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data1"</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>Input value:<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span> {{data1}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Input (autoselect)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">autoselect</span>=<span class="hljs-string">true</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'Foo\'"</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Input (readonly)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">value</span>=<span class="hljs-string">\'readOnly\'</span> <span class="hljs-attr">readonly</span>=<span class="hljs-string">true</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Input (disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">value</span>=<span class="hljs-string">\'disabled\'</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n'},XIT8:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var s=t("pIVY");class a extends s.c{constructor(){super()}set vclMaterial(n){this.setMode(n)}}},gW3m:function(n,l,t){"use strict";t.d(l,"c",function(){return a}),t.d(l,"b",function(){return e}),t("iSCa");var s=t("pIVY");function a(){return new s.c}t.d(l,"a",function(){return s.c}),t("XIT8");class e{}},hUuX:function(n,l,t){"use strict";t.d(l,"b",function(){return a});var s=t("1/Kn");t.d(l,"a",function(){return s.b});class a{}},iSCa:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var s=t("JX91");t("pIVY");class a{constructor(n,l,t,s){this.config=n,this.elementRef=l,this.renderer=t,this.cdRef=s,this.focused=!1,this.float=!1,n&&(this.globalMode=n.mode,n.modeChange.subscribe(n=>{this.globalMode=n,this.cdRef.markForCheck()}))}get mode(){return this.localMode||this.globalMode||"float"}get active(){return(this.config||this.hasMaterialDirective)&&this.input}get hasMaterialDirective(){return this.elementRef.nativeElement.hasAttribute("vclMaterial")}get classMaterial(){return this.active&&"disabled"!==this.mode}get classMaterialFloatingLabel(){return this.active&&("static"===this.mode||"float"===this.mode&&this.float)}ngAfterViewInit(){this.active&&this.input.stateChanged.pipe(Object(s.a)(void 0)).subscribe(()=>{this.input.materialModifierClass&&this._currentModifierClass!==this.input.materialModifierClass?(this._currentModifierClass&&this.renderer.removeClass(this.elementRef.nativeElement,this._currentModifierClass),this.renderer.addClass(this.elementRef.nativeElement,this.input.materialModifierClass)):!this.input.materialModifierClass&&this._currentModifierClass&&this.renderer.removeClass(this.elementRef.nativeElement,this._currentModifierClass),this.float=this.input.isLabelFloating,this.focused=this.input.isLabelFloating&&this.input.isFocused})}}},mbT9:function(n,l,t){"use strict";function s(n,l){return n&&l&&l.ngControl&&l.ngControl.invalid&&(l.ngControl.touched||n.submitted)}t.d(l,"b",function(){return s}),t.d(l,"a",function(){return a}),t("2JrD"),t("xsjC");class a{}},pIVY:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t.d(l,"b",function(){return u}),t.d(l,"c",function(){return r});var s=t("8Y7J"),a=t("XNiG");const e=new s.p("vcl-form-control-material-host"),u=new s.p("vcl-form-control-material-input");class r{constructor(n){this._modeChangeEmitter=new a.a,this.modeChange=this._modeChangeEmitter.asObservable(),this._mode=n||"float"}get mode(){return this._mode}setMode(n){this._mode=n,this._modeChangeEmitter.next(n)}}},qsjp:function(n,l){n.exports='<h1 id="vcl-input">vcl-input</h1>\n<p>Enhanced text input</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLInputModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLInputModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;data&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">autoselect</span>=<span class="hljs-string">true</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vclinput-attributes">vclInput attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the input when true</td>\n</tr>\n<tr>\n<td><code>autoselect</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects text on focus</td>\n</tr>\n</tbody></table>\n'},xsjC:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t("2JrD");var s=t("XNiG"),a=t("JX91");class e{constructor(n,l,t){this.elementRef=n,this.formGroup=l,this.ngForm=t,this._stateChangedEmitter=new s.a,this.stateChange=this._stateChangedEmitter.asObservable()}get classVclFormControlGroup(){return!this.classVclFormInlineControlGroup}get classVclFormInlineControlGroup(){return"vcl-form-inline-control-group"===this.elementRef.nativeElement.tagName.toLowerCase()}get attrVCLControlType(){return this.input&&this.input.controlType}get _form(){return this.ngForm||this.formGroup}get pending(){return this._form.pending}get invalid(){return this._form.invalid}get valid(){return this._form.valid}get touched(){return this._form.touched}get untouched(){return this._form.untouched}get submitted(){return this._form.submitted}ngAfterViewInit(){this.input&&this.input.stateChanged.pipe(Object(a.a)(void 0)).subscribe(this._stateChangedEmitter)}ngOnDestroy(){return this._stateChangedEmitter.complete()}}}}]);