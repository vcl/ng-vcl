(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+3cx":function(n,l,t){"use strict";t.d(l,"a",function(){return e});class e{}},"2JrD":function(n,l,t){"use strict";t.d(l,"b",function(){return s}),t.d(l,"a",function(){return a}),t.d(l,"c",function(){return i});var e=t("8Y7J");const s=new e.p("vcl-form-control-host"),a=new e.p("vcl-form-control-error-state-agent"),i=new e.p("vcl-form-control-input")},"4w3q":function(n,l){n.exports='<h1 id="vcl-file-input">vcl-file-input</h1>\n<p>Enhanced file input</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-file-input [multiple]=&quot;true&quot; [accept]=&quot;accept&quot; [disabled]=&quot;disabled&quot;&gt;My Files&lt;/vcl-file-input&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>accept</code></td>\n<td>string</td>\n<td></td>\n<td>like html5 file-input</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td></td>\n</tr>\n<tr>\n<td><code>multiple</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, more than 1 file can be selected</td>\n</tr>\n</tbody></table>\n<h4 id="events">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any | any[]</td>\n<td>emits the new value when files have changed</td>\n</tr>\n</tbody></table>\n'},DMRj:function(n,l,t){"use strict";var e=t("8Y7J");function s(n,l){if(n&&l){const t=Array.isArray(l)?l:l.split(","),e=n.name||"",s=n.type||"",a=s.replace(/\/.*$/,"");return t.some(n=>{const l=n.trim();return"."===l.charAt(0)?e.toLowerCase().endsWith(l.toLowerCase()):/\/\*$/.test(l)?a===l.replace(/\/.*$/,""):s===l})}return!0}t("mbT9");var a=t("XNiG");t.d(l,"a",function(){return u});let i=0;class u{constructor(n,l,t,s){this.cdRef=n,this.ngControl=l,this.formControlHost=t,this._errorStateAgent=s,this._hostClasses=!0,this._hostAttrRole="button",this.stateChangedEmitter=new a.a,this.stateChanged=this.stateChangedEmitter.asObservable(),this.controlType="file-input_",this._disabled=!1,this.generatedId="vcl_file-input_"+i++,this.valueChange=new e.m,this.disabled=!1,this.multiple=!1,this.files=new e.m,this.tabindex=0,this.invalidFiles=!1,this.isDragging=!1,this.isFocused=!1,this.onChange=(()=>{}),this.onTouched=(()=>{}),this.ngControl&&(this.ngControl.valueAccessor=this)}get elementId(){return this.id||this.generatedId}get hasError(){const n=this.errorStateAgent||this._errorStateAgent;return!!n&&n(this.formControlHost,this)}get isDisabled(){return this.disabled||this._disabled}get fileInput(){return this.input&&this.input.nativeElement}onFocus(){this.isFocused=!0,this.stateChangedEmitter.next()}onBlur(){this.isFocused=!1,this.stateChangedEmitter.next(),this.onTouched()}onLabelClick(n){this.disabled||(this.fileInput&&this.fileInput.click(),this.onTouched())}onInputChange(){this.fileInput&&this.fileInput.files&&this.updateFiles(this.fileInput.files)}checkFiles(n){this.invalidFiles=!!s&&Array.from(n).some(n=>!s(n,this.accept))}keydown(n){switch(n.code){case"Enter":case"Space":if(n.preventDefault(),this.disabled)return;this.fileInput&&this.fileInput.click(),this.onTouched()}}onClick(n){this.disabled||(this.fileInput&&this.fileInput.click(),this.onTouched())}onDragOver(n){this.isDragging=!0,n.preventDefault(),n.stopPropagation()}onDragLeave(n){this.isDragging=!1,n.preventDefault(),n.stopPropagation()}onDrop(n){n.preventDefault(),n.stopPropagation(),this.disabled||(this.isDragging=!1,this.updateFiles(n.target.files||n.dataTransfer.files),this.onTouched())}updateFiles(n){if(n instanceof FileList){let l=n[0].name;this.multiple&&(l+=" ("+n.length+")"),this.filename=l,this.value=n,this.checkFiles(n),this.files.emit(n),this.valueChange.emit(n),this.onChange(n)}}ngOnDestroy(){this.stateChangedEmitter&&this.stateChangedEmitter.complete()}writeValue(n){this.value=n,this.cdRef.markForCheck()}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this._disabled=n,this.cdRef.markForCheck()}}},Hv3H:function(n,l,t){"use strict";t.d(l,"a",function(){return r}),t.d(l,"b",function(){return d});var e=t("8Y7J"),s=t("b1Eb"),a=t("X5GH"),i=t("dy60"),u=t("9Rb9"),o=t("SVse"),r=(t("2JrD"),t("DMRj"),e.nb({encapsulation:2,styles:[],data:{}}));function c(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Gb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.filename)})}function p(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),e.yb(null,0)],null,null)}function d(n){return e.Ib(2,[e.Eb(402653184,1,{input:0}),(n()(),e.pb(1,0,[[1,0],["input",1]],null,0,"input",[["type","file"]],[[4,"display",null],[8,"accept",0],[8,"multiple",0],[8,"disabled",0]],[[null,"change"]],function(n,l,t){var e=!0;return"change"===l&&(e=!1!==n.component.onInputChange()&&e),e},null,null)),(n()(),e.pb(2,0,null,null,2,"vcl-icon",[["aria-hidden","true"],["class","vclFileInputIcon"],["role","img"]],[[2,"vclIcon",null],[1,"role",0]],null,null,s.b,s.a)),e.Db(512,null,a.a,a.a,[e.C,i.a]),e.ob(4,4767744,null,0,u.a,[a.a,e.k],{role:[0,"role"],icon:[1,"icon"]},null),(n()(),e.pb(5,0,null,null,4,"div",[["class","vclFileInputPlaceholder"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,c)),e.ob(7,16384,null,0,o.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,p)),e.ob(9,16384,null,0,o.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,4,0,"img","vcl:upload"),n(l,7,0,t.filename),n(l,9,0,!t.filename)},function(n,l){var t=l.component;n(l,1,0,"none",t.accept,t.multiple,t.disabled),n(l,2,0,e.zb(l,4).vclIcon,e.zb(l,4).attrRole)})}},N3FX:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FileInputDemoComponent { }\n'},UnD7:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>File Input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-file-input</span>&gt;</span>My File<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-file-input</span>&gt;</span>\n\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>File Input (Disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-file-input</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span>My File<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-file-input</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>File Input (multiple)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-file-input</span> [<span class="hljs-attr">multiple</span>]=<span class="hljs-string">"true"</span>&gt;</span>Many Files<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-file-input</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>File Input (.png only)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-file-input</span> <span class="hljs-attr">accept</span>=<span class="hljs-string">"image/png"</span>&gt;</span>An Image<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-file-input</span>&gt;</span>\n'},lIf4:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class s{}const a={demo:function(){return{label:"File Input",tabs:{Demo:s,"README.md":{type:"md",content:t("4w3q")},"demo.component.html":{type:"pre",content:t("UnD7")},"demo.component.ts":{type:"pre",content:t("N3FX")}}}}};class i{}var u=t("pMnS"),o=t("8Ip6"),r=t("Hv3H"),c=t("2JrD"),p=t("DMRj"),d=e.nb({encapsulation:2,styles:[],data:{}});function h(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,["File Input"])),(n()(),e.pb(2,0,null,null,3,"vcl-file-input",[],[[2,"vclInput",null],[2,"vclFileInput",null],[1,"role",0],[1,"id",0],[2,"vclError",null],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclDragndrop",null],[2,"isFocused",null]],[[null,"focus"],[null,"blur"],[null,"keydown"],[null,"click"],[null,"dragover"],[null,"dragleave"],[null,"drop"]],function(n,l,t){var s=!0;return"focus"===l&&(s=!1!==e.zb(n,4).onFocus()&&s),"blur"===l&&(s=!1!==e.zb(n,4).onBlur()&&s),"keydown"===l&&(s=!1!==e.zb(n,4).keydown(t)&&s),"click"===l&&(s=!1!==e.zb(n,4).onClick(t.target.value)&&s),"dragover"===l&&(s=!1!==e.zb(n,4).onDragOver(t)&&s),"dragleave"===l&&(s=!1!==e.zb(n,4).onDragLeave(t)&&s),"drop"===l&&(s=!1!==e.zb(n,4).onDrop(t)&&s),s},r.b,r.a)),e.Db(6144,null,c.c,null,[p.a]),e.ob(4,180224,null,0,p.a,[e.h,[8,null],[2,c.b],[2,c.a]],null,null),(n()(),e.Gb(-1,0,["My File"])),(n()(),e.pb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,["File Input (Disabled)"])),(n()(),e.pb(8,0,null,null,3,"vcl-file-input",[],[[2,"vclInput",null],[2,"vclFileInput",null],[1,"role",0],[1,"id",0],[2,"vclError",null],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclDragndrop",null],[2,"isFocused",null]],[[null,"focus"],[null,"blur"],[null,"keydown"],[null,"click"],[null,"dragover"],[null,"dragleave"],[null,"drop"]],function(n,l,t){var s=!0;return"focus"===l&&(s=!1!==e.zb(n,10).onFocus()&&s),"blur"===l&&(s=!1!==e.zb(n,10).onBlur()&&s),"keydown"===l&&(s=!1!==e.zb(n,10).keydown(t)&&s),"click"===l&&(s=!1!==e.zb(n,10).onClick(t.target.value)&&s),"dragover"===l&&(s=!1!==e.zb(n,10).onDragOver(t)&&s),"dragleave"===l&&(s=!1!==e.zb(n,10).onDragLeave(t)&&s),"drop"===l&&(s=!1!==e.zb(n,10).onDrop(t)&&s),s},r.b,r.a)),e.Db(6144,null,c.c,null,[p.a]),e.ob(10,180224,null,0,p.a,[e.h,[8,null],[2,c.b],[2,c.a]],{disabled:[0,"disabled"]},null),(n()(),e.Gb(-1,0,["My File"])),(n()(),e.pb(12,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,["File Input (multiple)"])),(n()(),e.pb(14,0,null,null,3,"vcl-file-input",[],[[2,"vclInput",null],[2,"vclFileInput",null],[1,"role",0],[1,"id",0],[2,"vclError",null],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclDragndrop",null],[2,"isFocused",null]],[[null,"focus"],[null,"blur"],[null,"keydown"],[null,"click"],[null,"dragover"],[null,"dragleave"],[null,"drop"]],function(n,l,t){var s=!0;return"focus"===l&&(s=!1!==e.zb(n,16).onFocus()&&s),"blur"===l&&(s=!1!==e.zb(n,16).onBlur()&&s),"keydown"===l&&(s=!1!==e.zb(n,16).keydown(t)&&s),"click"===l&&(s=!1!==e.zb(n,16).onClick(t.target.value)&&s),"dragover"===l&&(s=!1!==e.zb(n,16).onDragOver(t)&&s),"dragleave"===l&&(s=!1!==e.zb(n,16).onDragLeave(t)&&s),"drop"===l&&(s=!1!==e.zb(n,16).onDrop(t)&&s),s},r.b,r.a)),e.Db(6144,null,c.c,null,[p.a]),e.ob(16,180224,null,0,p.a,[e.h,[8,null],[2,c.b],[2,c.a]],{multiple:[0,"multiple"]},null),(n()(),e.Gb(-1,0,["Many Files"])),(n()(),e.pb(18,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,["File Input (.png only)"])),(n()(),e.pb(20,0,null,null,3,"vcl-file-input",[["accept","image/png"]],[[2,"vclInput",null],[2,"vclFileInput",null],[1,"role",0],[1,"id",0],[2,"vclError",null],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclDragndrop",null],[2,"isFocused",null]],[[null,"focus"],[null,"blur"],[null,"keydown"],[null,"click"],[null,"dragover"],[null,"dragleave"],[null,"drop"]],function(n,l,t){var s=!0;return"focus"===l&&(s=!1!==e.zb(n,22).onFocus()&&s),"blur"===l&&(s=!1!==e.zb(n,22).onBlur()&&s),"keydown"===l&&(s=!1!==e.zb(n,22).keydown(t)&&s),"click"===l&&(s=!1!==e.zb(n,22).onClick(t.target.value)&&s),"dragover"===l&&(s=!1!==e.zb(n,22).onDragOver(t)&&s),"dragleave"===l&&(s=!1!==e.zb(n,22).onDragLeave(t)&&s),"drop"===l&&(s=!1!==e.zb(n,22).onDrop(t)&&s),s},r.b,r.a)),e.Db(6144,null,c.c,null,[p.a]),e.ob(22,180224,null,0,p.a,[e.h,[8,null],[2,c.b],[2,c.a]],{accept:[0,"accept"]},null),(n()(),e.Gb(-1,0,["An Image"]))],function(n,l){n(l,10,0,!0),n(l,16,0,!0),n(l,22,0,"image/png")},function(n,l){n(l,2,0,e.zb(l,4)._hostClasses,e.zb(l,4)._hostClasses,e.zb(l,4)._hostAttrRole,e.zb(l,4).elementId,e.zb(l,4).invalidFiles,e.zb(l,4).tabindex,e.zb(l,4).isDisabled,e.zb(l,4).isDragging,e.zb(l,4).isFocused),n(l,8,0,e.zb(l,10)._hostClasses,e.zb(l,10)._hostClasses,e.zb(l,10)._hostAttrRole,e.zb(l,10).elementId,e.zb(l,10).invalidFiles,e.zb(l,10).tabindex,e.zb(l,10).isDisabled,e.zb(l,10).isDragging,e.zb(l,10).isFocused),n(l,14,0,e.zb(l,16)._hostClasses,e.zb(l,16)._hostClasses,e.zb(l,16)._hostAttrRole,e.zb(l,16).elementId,e.zb(l,16).invalidFiles,e.zb(l,16).tabindex,e.zb(l,16).isDisabled,e.zb(l,16).isDragging,e.zb(l,16).isFocused),n(l,20,0,e.zb(l,22)._hostClasses,e.zb(l,22)._hostClasses,e.zb(l,22)._hostAttrRole,e.zb(l,22).elementId,e.zb(l,22).invalidFiles,e.zb(l,22).tabindex,e.zb(l,22).isDisabled,e.zb(l,22).isDragging,e.zb(l,22).isFocused)})}function b(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"ng-component",[],null,null,null,h,d)),e.ob(1,49152,null,0,s,[],null,null)],null,null)}var g=e.lb("ng-component",s,b,{},{},[]),f=t("SVse"),m=t("s7LF"),v=t("POq0"),z=t("dy60"),D=t("tfYh"),F=t("zMNK"),I=t("p/eS"),C=t("2FIb"),j=t("61Fc"),y=t("+3cx"),k=t("iInd"),w=t("PNUx");t.d(l,"FileInputDemoModuleNgFactory",function(){return x});var x=e.mb(i,[],function(n){return e.wb([e.xb(512,e.j,e.Z,[[8,[u.a,o.a,g]],[3,e.j],e.w]),e.xb(4608,f.n,f.m,[e.t,[2,f.A]]),e.xb(4608,m.v,m.v,[]),e.xb(4608,v.a,v.a,[]),e.xb(4608,z.a,z.a,[[2,D.a]]),e.xb(1073742336,f.c,f.c,[]),e.xb(1073742336,m.u,m.u,[]),e.xb(1073742336,m.l,m.l,[]),e.xb(1073742336,F.e,F.e,[]),e.xb(1073742336,v.b,v.b,[]),e.xb(1073742336,I.a,I.a,[]),e.xb(1073742336,C.a,C.a,[]),e.xb(1073742336,j.a,j.a,[]),e.xb(1073742336,y.a,y.a,[]),e.xb(1073742336,k.q,k.q,[[2,k.v],[2,k.m]]),e.xb(1073742336,i,i,[]),e.xb(1024,k.i,function(){return[[{path:"",component:w.a,data:a}]]},[])])})},mbT9:function(n,l,t){"use strict";function e(n,l){return n&&l&&l.ngControl&&l.ngControl.invalid&&(l.ngControl.touched||n.submitted)}t.d(l,"b",function(){return e}),t.d(l,"a",function(){return s}),t("2JrD"),t("xsjC");class s{}},xsjC:function(n,l,t){"use strict";t.d(l,"a",function(){return a}),t("2JrD");var e=t("XNiG"),s=t("JX91");class a{constructor(n,l,t){this.elementRef=n,this.formGroup=l,this.ngForm=t,this._stateChangedEmitter=new e.a,this.stateChange=this._stateChangedEmitter.asObservable()}get classVclFormControlGroup(){return!this.classVclFormInlineControlGroup}get classVclFormInlineControlGroup(){return"vcl-form-inline-control-group"===this.elementRef.nativeElement.tagName.toLowerCase()}get _form(){return this.ngForm||this.formGroup}get pending(){return this._form.pending}get invalid(){return this._form.invalid}get valid(){return this._form.valid}get touched(){return this._form.touched}get untouched(){return this._form.untouched}get submitted(){return this._form.submitted}ngAfterViewInit(){this.input&&this.input.stateChanged.pipe(Object(s.a)(void 0)).subscribe(this._stateChangedEmitter)}ngOnDestroy(){return this._stateChangedEmitter.complete()}}}}]);