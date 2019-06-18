(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"/RJ6":function(n,t){n.exports='\n<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TextareaDemoComponent {\n\n  data1 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n  data2 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n\n  data3 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n}\n'},"0Pyo":function(n,t){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data1"</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Textarea with autogrow (minRows=5, maxRows=10)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data2"</span> [<span class="hljs-attr">autogrow</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">minRows</span>]=<span class="hljs-string">"5"</span> [<span class="hljs-attr">maxRows</span>]=<span class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n'},"2JrD":function(n,t,e){"use strict";e.d(t,"b",function(){return s}),e.d(t,"a",function(){return a}),e.d(t,"c",function(){return o});var l=e("8Y7J");const s=new l.p("vcl-form-control-host"),a=new l.p("vcl-form-control-error-state-agent"),o=new l.p("vcl-form-control-input")},A72M:function(n,t){n.exports='<h1 id="vcl-textarea">vcl-textarea</h1>\n<p>Enhanced textarea</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;textarea vclInput [(ngModel)]=&quot;data1&quot; [autogrow]=&quot;true&quot; [minRows]=&quot;5&quot; [maxRows]=&quot;10&quot;&gt;&lt;/textarea&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>autogrow</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Adjusts the <code>rows</code> attribute so it matches the current values number of lines</td>\n</tr>\n<tr>\n<td><code>minRows</code></td>\n<td>number</td>\n<td></td>\n<td>The min value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>maxRows</code></td>\n<td>number</td>\n<td></td>\n<td>The max value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>autoselect</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects text on focus</td>\n</tr>\n</tbody></table>\n'},HoaW:function(n,t,e){"use strict";e.d(t,"a",function(){return l});class l{}},"g5E+":function(n,t,e){"use strict";e.r(t);var l=e("8Y7J");class s{constructor(){this.data1="line 1\nline 2\nline 3\nline 4\nline 5\nline 6",this.data2="line 1\nline 2\nline 3\nline 4\nline 5\nline 6",this.data3="line 1\nline 2\nline 3\nline 4\nline 5\nline 6"}}const a={demo:function(){return{label:"Textarea",tabs:{Demo:s,"README.md":{type:"md",content:e("A72M")},"demo.component.html":{type:"pre",content:e("0Pyo")},"demo.component.ts":{type:"pre",content:e("/RJ6")}}}}};class o{}var r=e("pMnS"),i=e("8Ip6"),u=e("2JrD"),c=e("q1D+"),h=e("s7LF"),d=l.nb({encapsulation:2,styles:[],data:{}});function p(n){return l.Ib(0,[(n()(),l.pb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["Default"])),(n()(),l.pb(2,0,null,null,7,"textarea",[["rows","3"],["vclInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"vclInput",null],[1,"id",0],[2,"vclDisabled",null],[1,"rows",0],[2,"vclError",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"propertychange"],[null,"focus"]],function(n,t,e){var s=!0,a=n.component;return"input"===t&&(s=!1!==l.zb(n,4)._handleInput(e.target.value)&&s),"blur"===t&&(s=!1!==l.zb(n,4).onTouched()&&s),"compositionstart"===t&&(s=!1!==l.zb(n,4)._compositionStart()&&s),"compositionend"===t&&(s=!1!==l.zb(n,4)._compositionEnd(e.target.value)&&s),"propertychange"===t&&(s=!1!==l.zb(n,9).onChange()&&s),"input"===t&&(s=!1!==l.zb(n,9).onChange()&&s),"focus"===t&&(s=!1!==l.zb(n,9).onFocus()&&s),"blur"===t&&(s=!1!==l.zb(n,9).onBlur()&&s),"ngModelChange"===t&&(s=!1!==(a.data1=e)&&s),s},null,null)),l.Db(6144,null,u.c,null,[c.a]),l.ob(4,16384,null,0,h.c,[l.C,l.k,[2,h.a]],null,null),l.Db(1024,null,h.m,function(n){return[n]},[h.c]),l.ob(6,671744,null,0,h.r,[[8,null],[8,null],[8,null],[6,h.m]],{model:[0,"model"]},{update:"ngModelChange"}),l.Db(2048,null,h.n,null,[h.r]),l.ob(8,16384,null,0,h.o,[[4,h.n]],null,null),l.ob(9,5128192,null,0,c.a,[l.k,l.h,[2,h.n],[2,u.b],[2,u.a]],{rows:[0,"rows"]},null),(n()(),l.pb(10,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["Textarea with autogrow (minRows=5, maxRows=10)"])),(n()(),l.pb(12,0,null,null,7,"textarea",[["vclInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"vclInput",null],[1,"id",0],[2,"vclDisabled",null],[1,"rows",0],[2,"vclError",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"propertychange"],[null,"focus"]],function(n,t,e){var s=!0,a=n.component;return"input"===t&&(s=!1!==l.zb(n,14)._handleInput(e.target.value)&&s),"blur"===t&&(s=!1!==l.zb(n,14).onTouched()&&s),"compositionstart"===t&&(s=!1!==l.zb(n,14)._compositionStart()&&s),"compositionend"===t&&(s=!1!==l.zb(n,14)._compositionEnd(e.target.value)&&s),"propertychange"===t&&(s=!1!==l.zb(n,19).onChange()&&s),"input"===t&&(s=!1!==l.zb(n,19).onChange()&&s),"focus"===t&&(s=!1!==l.zb(n,19).onFocus()&&s),"blur"===t&&(s=!1!==l.zb(n,19).onBlur()&&s),"ngModelChange"===t&&(s=!1!==(a.data2=e)&&s),s},null,null)),l.Db(6144,null,u.c,null,[c.a]),l.ob(14,16384,null,0,h.c,[l.C,l.k,[2,h.a]],null,null),l.Db(1024,null,h.m,function(n){return[n]},[h.c]),l.ob(16,671744,null,0,h.r,[[8,null],[8,null],[8,null],[6,h.m]],{model:[0,"model"]},{update:"ngModelChange"}),l.Db(2048,null,h.n,null,[h.r]),l.ob(18,16384,null,0,h.o,[[4,h.n]],null,null),l.ob(19,5128192,null,0,c.a,[l.k,l.h,[2,h.n],[2,u.b],[2,u.a]],{autogrow:[0,"autogrow"],maxRows:[1,"maxRows"],minRows:[2,"minRows"]},null)],function(n,t){var e=t.component;n(t,6,0,e.data1),n(t,9,0,"3"),n(t,16,0,e.data2),n(t,19,0,!0,10,5)},function(n,t){n(t,2,1,[l.zb(t,8).ngClassUntouched,l.zb(t,8).ngClassTouched,l.zb(t,8).ngClassPristine,l.zb(t,8).ngClassDirty,l.zb(t,8).ngClassValid,l.zb(t,8).ngClassInvalid,l.zb(t,8).ngClassPending,l.zb(t,9).classVclInput,l.zb(t,9).elementId,l.zb(t,9).isDisabled,l.zb(t,9).rows,l.zb(t,9).hasError]),n(t,12,1,[l.zb(t,18).ngClassUntouched,l.zb(t,18).ngClassTouched,l.zb(t,18).ngClassPristine,l.zb(t,18).ngClassDirty,l.zb(t,18).ngClassValid,l.zb(t,18).ngClassInvalid,l.zb(t,18).ngClassPending,l.zb(t,19).classVclInput,l.zb(t,19).elementId,l.zb(t,19).isDisabled,l.zb(t,19).rows,l.zb(t,19).hasError])})}function g(n){return l.Ib(0,[(n()(),l.pb(0,0,null,null,1,"ng-component",[],null,null,null,p,d)),l.ob(1,49152,null,0,s,[],null,null)],null,null)}var m=l.lb("ng-component",s,g,{},{},[]),b=e("SVse"),f=e("POq0"),w=e("zMNK"),v=e("p/eS"),C=e("2FIb"),x=e("HoaW"),j=e("iInd"),z=e("PNUx");e.d(t,"TextareaDemoModuleNgFactory",function(){return R});var R=l.mb(o,[],function(n){return l.wb([l.xb(512,l.j,l.Z,[[8,[r.a,i.a,m]],[3,l.j],l.w]),l.xb(4608,b.n,b.m,[l.t,[2,b.A]]),l.xb(4608,h.v,h.v,[]),l.xb(4608,f.a,f.a,[]),l.xb(1073742336,b.c,b.c,[]),l.xb(1073742336,h.u,h.u,[]),l.xb(1073742336,h.l,h.l,[]),l.xb(1073742336,w.e,w.e,[]),l.xb(1073742336,f.b,f.b,[]),l.xb(1073742336,v.a,v.a,[]),l.xb(1073742336,C.a,C.a,[]),l.xb(1073742336,x.a,x.a,[]),l.xb(1073742336,j.q,j.q,[[2,j.v],[2,j.m]]),l.xb(1073742336,o,o,[]),l.xb(1024,j.i,function(){return[[{path:"",component:z.a,data:a}]]},[])])})},mbT9:function(n,t,e){"use strict";function l(n,t){return n&&t&&t.ngControl&&t.ngControl.invalid&&(t.ngControl.touched||n.submitted)}e.d(t,"b",function(){return l}),e.d(t,"a",function(){return s}),e("2JrD"),e("xsjC");class s{}},"q1D+":function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e("mbT9");var l=e("XNiG");let s=0;class a{constructor(n,t,e,a,o){this.elementRef=n,this.cdRef=t,this.ngControl=e,this.formControlHost=a,this._errorStateAgent=o,this.stateChangedEmitter=new l.a,this._focused=!1,this.generatedId="vcl_textarea_"+s++,this.controlType="textarea",this.stateChanged=this.stateChangedEmitter.asObservable(),this.classVclInput=!0,this.disabled=!1,this.autoselect=!1,this.autogrow=!1}get elementId(){return this.id||this.generatedId}get isDisabled(){return this.disabled}get isFocused(){return this._focused}get value(){return this.elementRef.nativeElement.value}get hasError(){const n=this.errorStateAgent||this._errorStateAgent;return!!n&&n(this.formControlHost,this)}onChange(){this.setRows(this.elementRef&&this.elementRef.nativeElement.value)}onFocus(){this._focused=!0,this.stateChangedEmitter.next()}onBlur(){this._focused=!1,this.stateChangedEmitter.next()}ngOnChanges(n){"value"in n&&this.setRows(n.value.currentValue)}ngDoCheck(){this.setRows(this.elementRef&&this.elementRef.nativeElement.value)}ngAfterViewInit(){this.setRows(this.elementRef&&this.elementRef.nativeElement.value)}onLabelClick(n){this.elementRef.nativeElement.focus()}setRows(n){if(this.autogrow&&"string"==typeof n){const t=n.split("\n").length+1;this.rows="number"==typeof this.minRows&&t<this.minRows?this.minRows:"number"==typeof this.maxRows&&t>this.maxRows?this.maxRows:t}}notifyFormControlLabelClick(n){this.elementRef.nativeElement.focus()}ngOnDestroy(){this.stateChangedEmitter&&this.stateChangedEmitter.complete()}}},xsjC:function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e("2JrD");var l=e("XNiG"),s=e("JX91");class a{constructor(n,t,e){this.elementRef=n,this.formGroup=t,this.ngForm=e,this._stateChangedEmitter=new l.a,this.stateChange=this._stateChangedEmitter.asObservable()}get classVclFormControlGroup(){return!this.classVclFormInlineControlGroup}get classVclFormInlineControlGroup(){return"vcl-form-inline-control-group"===this.elementRef.nativeElement.tagName.toLowerCase()}get _form(){return this.ngForm||this.formGroup}get pending(){return this._form.pending}get invalid(){return this._form.invalid}get valid(){return this._form.valid}get touched(){return this._form.touched}get untouched(){return this._form.untouched}get submitted(){return this._form.submitted}ngAfterViewInit(){this.input&&this.input.stateChanged.pipe(Object(s.a)(void 0)).subscribe(this._stateChangedEmitter)}ngOnDestroy(){return this._stateChangedEmitter.complete()}}}}]);