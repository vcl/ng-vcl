(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1/Kn":function(n,t,s){"use strict";s.d(t,"a",function(){return a}),s.d(t,"b",function(){return i});var e=s("8Y7J"),l=s("XNiG");s("mbT9"),s("gW3m");const a=new e.p("vcl_input_host");let o=0;class i{constructor(n,t,s,e,a){this.elementRef=n,this.ngControl=t,this.formControlHost=s,this._errorStateAgent=e,this.inputHost=a,this.uniqueId="vcl_input_"+o++,this._disabled=!1,this._focused=!1,this.stateChangedEmitter=new l.a,this.stateChanged=this.stateChangedEmitter.asObservable(),this.controlType="input",this.materialModifierClass=void 0,this.disabled=!1,this.autoselect=!1,this.classVclInput=!0}get elementId(){return this.id||this.uniqueId}get isFocused(){return this._focused}get isLabelFloating(){return this.isFocused||this.value.length>0}get isDisabled(){return this.disabled||this._disabled||this.inputHost&&this.inputHost.isDisabled}get hasError(){const n=this.errorStateAgent||this._errorStateAgent;return!!n&&n(this.formControlHost,this)}get attrDisabled(){return!!this.isDisabled||null}focus(){this.elementRef.nativeElement.focus()}onFocus(){this._focused=!0,this.autoselect&&this.elementRef.nativeElement.select(),this.inputHost&&this.inputHost.notifyInputFocus(this),this.stateChangedEmitter.next()}onBlur(){this._focused=!1,this.inputHost&&this.inputHost.notifyInputBlur(this),this.stateChangedEmitter.next()}onLabelClick(n){this.elementRef.nativeElement.focus()}get value(){return this.elementRef.nativeElement.value||""}ngOnDestroy(){this.stateChangedEmitter&&this.stateChangedEmitter.complete()}getError(n){return this.hasError&&this.ngControl.getError(n)}onInput(){this.stateChangedEmitter.next()}}},"2JrD":function(n,t,s){"use strict";s.d(t,"b",function(){return l}),s.d(t,"a",function(){return a}),s.d(t,"c",function(){return o});var e=s("8Y7J");const l=new e.p("vcl-form-control-host"),a=new e.p("vcl-form-control-error-state-agent"),o=new e.p("vcl-form-control-input")},DD28:function(n,t,s){"use strict";s.d(t,"a",function(){return e}),s("sM5x"),s("tMsr"),s("nhKh");class e{}},KBb2:function(n,t){n.exports='<h1 id="vcl-token">vcl-token</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLTokenModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLTokenModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<h2 id="single-token">single token</h2>\n<pre class="hljs"><code>&lt;vcl-token&gt;mytoken&lt;/vcl-token&gt;</code></pre>\n<h2 id="single-selected-token">single selected token</h2>\n<pre class="hljs"><code>&lt;vcl-token [selected]=&quot;true&quot;&gt;mytoken&lt;/vcl-token&gt;</code></pre>\n<h2 id="single-removable-token">single removable token</h2>\n<pre class="hljs"><code>&lt;vcl-token [removable]=&quot;true&quot; (remove)=&quot;onRemove()&quot;&gt;mytoken&lt;/vcl-token&gt;</code></pre>\n<h2 id="token-list">token-list</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">&quot;true&quot;</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;changed($event);&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>mytoken 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>mytoken 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span></pre>\n<h2 id="token-input">token-input</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">&quot;changed($event);&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-token-attributes">vcl-token attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>token value</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the token is highlighted</td>\n</tr>\n<tr>\n<td><code>removable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the remove-cross is shown</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-token-events">vcl-token events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>remove</code></td>\n<td></td>\n<td>called when the remove-button is pressed</td>\n</tr>\n</tbody></table>\n<h4 id="token-list-attributes">token-list attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any[]</td>\n<td>any[]</td>\n<td>The values of the selected tokens</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selectable if true</td>\n</tr>\n</tbody></table>\n<h4 id="token-list-events">token-list events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>tokensChange</code></td>\n<td>string[]</td>\n<td>called when the selection of token changes</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-token-input-attributes">vcl-token-input attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>Token[]</td>\n<td>[]</td>\n<td>List of tokens</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selectable if true</td>\n</tr>\n<tr>\n<td><code>allowDuplicates</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens with matching values are not added</td>\n</tr>\n<tr>\n<td><code>addOnEnter</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>New token will be added when pressing enter</td>\n</tr>\n<tr>\n<td><code>preselect</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>tokens are preselected after being added if true</td>\n</tr>\n<tr>\n<td><code>tokenClass</code></td>\n<td>string</td>\n<td></td>\n<td>additional css class for tokens</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the token-input</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-token-input-events">vcl-token-input events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>Token[]</td>\n<td>called after tokens are added/removed or the selection of token changes</td>\n</tr>\n<tr>\n<td><code>confirm</code></td>\n<td>Token[]</td>\n<td>called after <code>enter</code> is pressed when input element is empty</td>\n</tr>\n</tbody></table>\n<h4 id="interfaces">interfaces</h4>\n<pre class="hljs"><span class="hljs-keyword">interface</span> Token {\n  label: <span class="hljs-built_in">string</span>;\n  value: <span class="hljs-built_in">any</span>;\n  selected?: <span class="hljs-built_in">boolean</span>;\n}</pre>\n'},XIT8:function(n,t,s){"use strict";s.d(t,"a",function(){return l});var e=s("pIVY");class l extends e.c{constructor(){super()}set vclMaterial(n){this.setMode(n)}}},b77Z:function(n,t){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single tokens<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span>&gt;</span>my token<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"true"</span>&gt;</span>my selected token<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">remove</span>)=<span class="hljs-string">"onRemove($event)"</span>&gt;</span>my removable token<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">remove</span>)=<span class="hljs-string">"onRemove($event)"</span>&gt;</span>my icon token<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>token-list<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"[1]"</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">"onListChange($event);"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"1"</span>&gt;</span>my token 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span>&gt;</span>my token 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>selectable and removable tokenlist<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"[1]"</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">"onListChange($event);"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"1"</span>&gt;</span>my token 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span>&gt;</span>my token 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>token-input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">"onInputChange($event);"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>token-input (disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input</span>&gt;</span>\n'},gW3m:function(n,t,s){"use strict";s.d(t,"c",function(){return l}),s.d(t,"b",function(){return a}),s("iSCa");var e=s("pIVY");function l(){return new e.c}s.d(t,"a",function(){return e.c}),s("XIT8");class a{}},hUuX:function(n,t,s){"use strict";s.d(t,"b",function(){return l});var e=s("1/Kn");s.d(t,"a",function(){return e.b});class l{}},iSCa:function(n,t,s){"use strict";s.d(t,"a",function(){return l});var e=s("JX91");s("pIVY");class l{constructor(n,t,s,e){this.config=n,this.elementRef=t,this.renderer=s,this.cdRef=e,this.focused=!1,this.float=!1,n&&(this.globalMode=n.mode,n.modeChange.subscribe(n=>{this.globalMode=n,this.cdRef.markForCheck()}))}get mode(){return this.localMode||this.globalMode||"float"}get active(){return(this.config||this.hasMaterialDirective)&&this.input}get hasMaterialDirective(){return this.elementRef.nativeElement.hasAttribute("vclMaterial")}get classMaterial(){return this.active&&"disabled"!==this.mode}get classMaterialFloatingLabel(){return this.active&&("static"===this.mode||"float"===this.mode&&this.float)}ngAfterViewInit(){this.active&&this.input.stateChanged.pipe(Object(e.a)(void 0)).subscribe(()=>{this.input.materialModifierClass&&this._currentModifierClass!==this.input.materialModifierClass?(this._currentModifierClass&&this.renderer.removeClass(this.elementRef.nativeElement,this._currentModifierClass),this.renderer.addClass(this.elementRef.nativeElement,this.input.materialModifierClass)):!this.input.materialModifierClass&&this._currentModifierClass&&this.renderer.removeClass(this.elementRef.nativeElement,this._currentModifierClass),this.float=this.input.isLabelFloating,this.focused=this.input.isLabelFloating&&this.input.isFocused})}}},kN3k:function(n,t,s){"use strict";s.r(t);var e=s("8Y7J");class l{onRemove(n){console.log("onRemove",n)}onListChange(n){console.log("onListChange",n)}onInputChange(n){console.log("onInputChange",n)}}const a={demo:function(){return{label:"Token",tabs:{Demo:l,"README.md":{type:"md",content:s("KBb2")},"demo.component.html":{type:"pre",content:s("b77Z")},"demo.component.ts":{type:"pre",content:s("qOPM")}}}}};class o{}var i=s("pMnS"),r=s("8Ip6"),c=s("+nGw"),u=s("sM5x"),h=s("s7LF"),d=s("nhKh"),p=e.pb({encapsulation:2,styles:[],data:{}});function b(n){return e.Mb(2,[e.Cb(null,0)],null,null)}var v=s("Gc1z"),g=s("pIVY"),m=s("tMsr"),k=s("2JrD"),f=s("1/Kn"),j=e.pb({encapsulation:2,styles:[],data:{}});function D(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["single tokens"])),(n()(),e.rb(2,0,null,null,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,t,s){var l=!0;return"blur"===t&&(l=!1!==e.Db(n,3).onBlur(s)&&l),"click"===t&&(l=!1!==e.Db(n,3).onClick(s)&&l),l},c.b,c.a)),e.qb(3,49152,null,0,u.b,[e.h,e.k,[3,u.a]],null,null),(n()(),e.Kb(-1,0,["my token"])),(n()(),e.rb(5,0,null,null,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,t,s){var l=!0;return"blur"===t&&(l=!1!==e.Db(n,6).onBlur(s)&&l),"click"===t&&(l=!1!==e.Db(n,6).onClick(s)&&l),l},c.b,c.a)),e.qb(6,49152,null,0,u.b,[e.h,e.k,[3,u.a]],{selected:[0,"selected"]},null),(n()(),e.Kb(-1,0,["my selected token"])),(n()(),e.rb(8,0,null,null,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"remove"],[null,"blur"],[null,"click"]],function(n,t,s){var l=!0,a=n.component;return"blur"===t&&(l=!1!==e.Db(n,9).onBlur(s)&&l),"click"===t&&(l=!1!==e.Db(n,9).onClick(s)&&l),"remove"===t&&(l=!1!==a.onRemove(s)&&l),l},c.b,c.a)),e.qb(9,49152,null,0,u.b,[e.h,e.k,[3,u.a]],{removable:[0,"removable"]},{remove:"remove"}),(n()(),e.Kb(-1,0,["my removable token"])),(n()(),e.rb(11,0,null,null,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"remove"],[null,"blur"],[null,"click"]],function(n,t,s){var l=!0,a=n.component;return"blur"===t&&(l=!1!==e.Db(n,12).onBlur(s)&&l),"click"===t&&(l=!1!==e.Db(n,12).onClick(s)&&l),"remove"===t&&(l=!1!==a.onRemove(s)&&l),l},c.b,c.a)),e.qb(12,49152,null,0,u.b,[e.h,e.k,[3,u.a]],{removable:[0,"removable"]},{remove:"remove"}),(n()(),e.Kb(-1,0,["my icon token"])),(n()(),e.rb(14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(15,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["token-list"])),(n()(),e.rb(17,0,null,null,11,"vcl-token-list",[],[[2,"vclTokenList",null],[2,"vclTokenContainer",null]],[[null,"valueChange"]],function(n,t,s){var e=!0;return"valueChange"===t&&(e=!1!==n.component.onListChange(s)&&e),e},b,p)),e.Hb(5120,null,h.m,function(n){return[n]},[d.a]),e.qb(19,1753088,null,1,d.a,[e.h],{value:[0,"value"]},null),e.Ib(603979776,1,{tokens:1}),e.Eb(21,1),e.Hb(2048,null,u.a,null,[d.a]),(n()(),e.rb(23,0,null,0,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,t,s){var l=!0;return"blur"===t&&(l=!1!==e.Db(n,24).onBlur(s)&&l),"click"===t&&(l=!1!==e.Db(n,24).onClick(s)&&l),l},c.b,c.a)),e.qb(24,49152,[[1,4]],0,u.b,[e.h,e.k,[3,u.a]],{_value:[0,"_value"]},null),(n()(),e.Kb(-1,0,["my token 1"])),(n()(),e.rb(26,0,null,0,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,t,s){var l=!0;return"blur"===t&&(l=!1!==e.Db(n,27).onBlur(s)&&l),"click"===t&&(l=!1!==e.Db(n,27).onClick(s)&&l),l},c.b,c.a)),e.qb(27,49152,[[1,4]],0,u.b,[e.h,e.k,[3,u.a]],{_value:[0,"_value"]},null),(n()(),e.Kb(-1,0,["my token 2"])),(n()(),e.rb(29,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(30,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["selectable and removable tokenlist"])),(n()(),e.rb(32,0,null,null,11,"vcl-token-list",[],[[2,"vclTokenList",null],[2,"vclTokenContainer",null]],[[null,"valueChange"]],function(n,t,s){var e=!0;return"valueChange"===t&&(e=!1!==n.component.onListChange(s)&&e),e},b,p)),e.Hb(5120,null,h.m,function(n){return[n]},[d.a]),e.qb(34,1753088,null,1,d.a,[e.h],{selectable:[0,"selectable"],removable:[1,"removable"],value:[2,"value"]},null),e.Ib(603979776,2,{tokens:1}),e.Eb(36,1),e.Hb(2048,null,u.a,null,[d.a]),(n()(),e.rb(38,0,null,0,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,t,s){var l=!0;return"blur"===t&&(l=!1!==e.Db(n,39).onBlur(s)&&l),"click"===t&&(l=!1!==e.Db(n,39).onClick(s)&&l),l},c.b,c.a)),e.qb(39,49152,[[2,4]],0,u.b,[e.h,e.k,[3,u.a]],{_value:[0,"_value"]},null),(n()(),e.Kb(-1,0,["my token 1"])),(n()(),e.rb(41,0,null,0,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,t,s){var l=!0;return"blur"===t&&(l=!1!==e.Db(n,42).onBlur(s)&&l),"click"===t&&(l=!1!==e.Db(n,42).onClick(s)&&l),l},c.b,c.a)),e.qb(42,49152,[[2,4]],0,u.b,[e.h,e.k,[3,u.a]],{_value:[0,"_value"]},null),(n()(),e.Kb(-1,0,["my token 2"])),(n()(),e.rb(44,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(45,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["token-input"])),(n()(),e.rb(47,0,null,null,9,"vcl-token-input",[],[[2,"vclInput",null],[2,"vclTokenInput",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutWrap",null],[1,"id",0],[2,"vclDisabled",null],[2,"vclError",null],[1,"tabindex",0]],[[null,"valueChange"],[null,"keydown"],[null,"keyup.enter"]],function(n,t,s){var l=!0,a=n.component;return"keydown"===t&&(l=!1!==e.Db(n,49).onKeydown(s)&&l),"keyup.enter"===t&&(l=!1!==e.Db(n,49).onKeyPressEnter(s)&&l),"valueChange"===t&&(l=!1!==a.onInputChange(s)&&l),l},v.b,v.a)),e.Hb(6144,null,g.b,null,[m.a]),e.qb(49,1097728,null,2,m.a,[e.k,e.C,e.h,[8,null],[2,k.b],[2,k.a]],null,{valueChange:"valueChange"}),e.Ib(603979776,3,{input:0}),e.Ib(603979776,4,{inputElementRef:0}),e.Hb(2048,null,f.a,null,[m.a]),(n()(),e.rb(53,0,[[4,0]],0,3,"input",[["vclInput",""]],[[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(n,t,s){var l=!0;return"focus"===t&&(l=!1!==e.Db(n,56).onFocus()&&l),"blur"===t&&(l=!1!==e.Db(n,56).onBlur()&&l),"input"===t&&(l=!1!==e.Db(n,56).onInput()&&l),"change"===t&&(l=!1!==e.Db(n,56).onInput()&&l),"ngModelChange"===t&&(l=!1!==e.Db(n,56).onInput()&&l),l},null,null)),e.Hb(6144,null,k.c,null,[f.b]),e.Hb(6144,null,g.b,null,[f.b]),e.qb(56,147456,[[3,4]],0,f.b,[e.k,[2,h.n],[2,k.b],[2,k.a],[2,f.a]],null,null),(n()(),e.rb(57,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["token-input (disabled)"])),(n()(),e.rb(59,0,null,null,9,"vcl-token-input",[],[[2,"vclInput",null],[2,"vclTokenInput",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutWrap",null],[1,"id",0],[2,"vclDisabled",null],[2,"vclError",null],[1,"tabindex",0]],[[null,"keydown"],[null,"keyup.enter"]],function(n,t,s){var l=!0;return"keydown"===t&&(l=!1!==e.Db(n,61).onKeydown(s)&&l),"keyup.enter"===t&&(l=!1!==e.Db(n,61).onKeyPressEnter(s)&&l),l},v.b,v.a)),e.Hb(6144,null,g.b,null,[m.a]),e.qb(61,1097728,null,2,m.a,[e.k,e.C,e.h,[8,null],[2,k.b],[2,k.a]],{disabled:[0,"disabled"]},null),e.Ib(603979776,5,{input:0}),e.Ib(603979776,6,{inputElementRef:0}),e.Hb(2048,null,f.a,null,[m.a]),(n()(),e.rb(65,0,[[6,0]],0,3,"input",[["vclInput",""]],[[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(n,t,s){var l=!0;return"focus"===t&&(l=!1!==e.Db(n,68).onFocus()&&l),"blur"===t&&(l=!1!==e.Db(n,68).onBlur()&&l),"input"===t&&(l=!1!==e.Db(n,68).onInput()&&l),"change"===t&&(l=!1!==e.Db(n,68).onInput()&&l),"ngModelChange"===t&&(l=!1!==e.Db(n,68).onInput()&&l),l},null,null)),e.Hb(6144,null,k.c,null,[f.b]),e.Hb(6144,null,g.b,null,[f.b]),e.qb(68,147456,[[5,4]],0,f.b,[e.k,[2,h.n],[2,k.b],[2,k.a],[2,f.a]],null,null)],function(n,t){n(t,6,0,!0),n(t,9,0,!0),n(t,12,0,!0);var s=n(t,21,0,1);n(t,19,0,s),n(t,24,0,1),n(t,27,0,2);var e=n(t,36,0,1);n(t,34,0,!0,!0,e),n(t,39,0,1),n(t,42,0,2),n(t,61,0,!0)},function(n,t){n(t,2,0,e.Db(t,3).classVclToken,e.Db(t,3).tabindex,e.Db(t,3).selected,e.Db(t,3).styleCursor,e.Db(t,3).isDisabled),n(t,5,0,e.Db(t,6).classVclToken,e.Db(t,6).tabindex,e.Db(t,6).selected,e.Db(t,6).styleCursor,e.Db(t,6).isDisabled),n(t,8,0,e.Db(t,9).classVclToken,e.Db(t,9).tabindex,e.Db(t,9).selected,e.Db(t,9).styleCursor,e.Db(t,9).isDisabled),n(t,11,0,e.Db(t,12).classVclToken,e.Db(t,12).tabindex,e.Db(t,12).selected,e.Db(t,12).styleCursor,e.Db(t,12).isDisabled),n(t,17,0,e.Db(t,19)._hostClasses,e.Db(t,19)._hostClasses),n(t,23,0,e.Db(t,24).classVclToken,e.Db(t,24).tabindex,e.Db(t,24).selected,e.Db(t,24).styleCursor,e.Db(t,24).isDisabled),n(t,26,0,e.Db(t,27).classVclToken,e.Db(t,27).tabindex,e.Db(t,27).selected,e.Db(t,27).styleCursor,e.Db(t,27).isDisabled),n(t,32,0,e.Db(t,34)._hostClasses,e.Db(t,34)._hostClasses),n(t,38,0,e.Db(t,39).classVclToken,e.Db(t,39).tabindex,e.Db(t,39).selected,e.Db(t,39).styleCursor,e.Db(t,39).isDisabled),n(t,41,0,e.Db(t,42).classVclToken,e.Db(t,42).tabindex,e.Db(t,42).selected,e.Db(t,42).styleCursor,e.Db(t,42).isDisabled),n(t,47,0,e.Db(t,49)._hostClasses,e.Db(t,49)._hostClasses,e.Db(t,49)._hostClasses,e.Db(t,49)._hostClasses,e.Db(t,49).elementId,e.Db(t,49).isDisabled,e.Db(t,49).hasError,e.Db(t,49)._hostAttrTabindex),n(t,53,0,e.Db(t,56).elementId,e.Db(t,56).classVclInput,e.Db(t,56).isDisabled,e.Db(t,56).hasError,e.Db(t,56).attrDisabled),n(t,59,0,e.Db(t,61)._hostClasses,e.Db(t,61)._hostClasses,e.Db(t,61)._hostClasses,e.Db(t,61)._hostClasses,e.Db(t,61).elementId,e.Db(t,61).isDisabled,e.Db(t,61).hasError,e.Db(t,61)._hostAttrTabindex),n(t,65,0,e.Db(t,68).elementId,e.Db(t,68).classVclInput,e.Db(t,68).isDisabled,e.Db(t,68).hasError,e.Db(t,68).attrDisabled)})}function C(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,1,"ng-component",[],null,null,null,D,j)),e.qb(1,49152,null,0,l,[],null,null)],null,null)}var y=e.nb("ng-component",l,C,{},{},[]),_=s("SVse"),T=s("POq0"),E=s("dy60"),I=s("tfYh"),w=s("zMNK"),R=s("p/eS"),M=s("2FIb"),x=s("hUuX"),q=s("61Fc"),B=s("g2Nb"),F=s("hyVG"),L=s("DD28"),K=s("iInd"),V=s("PNUx");s.d(t,"TokenDemoModuleNgFactory",function(){return S});var S=e.ob(o,[],function(n){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[i.a,r.a,y]],[3,e.j],e.w]),e.Bb(4608,_.n,_.m,[e.t,[2,_.A]]),e.Bb(4608,h.v,h.v,[]),e.Bb(4608,T.a,T.a,[]),e.Bb(4608,E.a,E.a,[[2,I.a]]),e.Bb(1073742336,_.c,_.c,[]),e.Bb(1073742336,h.u,h.u,[]),e.Bb(1073742336,h.l,h.l,[]),e.Bb(1073742336,w.e,w.e,[]),e.Bb(1073742336,T.b,T.b,[]),e.Bb(1073742336,R.a,R.a,[]),e.Bb(1073742336,M.a,M.a,[]),e.Bb(1073742336,x.b,x.b,[]),e.Bb(1073742336,q.c,q.c,[]),e.Bb(1073742336,B.a,B.a,[]),e.Bb(1073742336,F.a,F.a,[]),e.Bb(1073742336,L.a,L.a,[]),e.Bb(1073742336,K.q,K.q,[[2,K.v],[2,K.m]]),e.Bb(1073742336,o,o,[]),e.Bb(1024,K.i,function(){return[[{path:"",component:V.a,data:a}]]},[])])})},mbT9:function(n,t,s){"use strict";function e(n,t){return n&&t&&t.ngControl&&t.ngControl.invalid&&(t.ngControl.touched||n.submitted)}s.d(t,"b",function(){return e}),s.d(t,"a",function(){return l}),s("2JrD"),s("xsjC");class l{}},nhKh:function(n,t,s){"use strict";s.d(t,"a",function(){return a});var e=s("8Y7J"),l=s("JX91");s("sM5x");class a{constructor(n){this.cdRef=n,this.cvaDisabled=!1,this._hostClasses=!0,this.disabled=!1,this.selectable=!1,this.removable=!1,this.tokensChange=new e.m,this.value=[],this.onChangeCallback=n=>{},this.onTouchedCallback=()=>{}}get isDisabled(){return this.disabled||this.cvaDisabled}syncTokens(){let n=this.value;Array.isArray(n)||(n=[]),this.tokens&&this.tokens.forEach(t=>{t.selected=n.includes(t.value),t.selectable=this.selectable,t.removable=this.removable,t.setDisabledState(this.isDisabled)})}ngOnChanges(n){(n.disabled||n.value)&&this.syncTokens()}notifyTokenRemove(n){this.syncTokens()}notifyTokenSelect(n){this.value=this.tokens?this.tokens.filter(n=>n.selected).map(n=>n.value):[],this.syncTokens(),this.onChangeCallback(this.value)}notifyTokenBlur(n){n===this.tokens.last&&this.onTouchedCallback()}ngAfterContentInit(){this.tokenSub=this.tokens&&this.tokens.changes.pipe(Object(l.a)(null)).subscribe(()=>{this.syncTokens()})}ngOnDestroy(){this.dispose()}dispose(){this.tokenSub&&this.tokenSub.unsubscribe()}writeValue(n){this.value=n,this.syncTokens(),this.cdRef.markForCheck()}registerOnChange(n){this.onChangeCallback=n}registerOnTouched(n){this.onTouchedCallback=n}setDisabledState(n){this.cvaDisabled=n,this.syncTokens()}}},pIVY:function(n,t,s){"use strict";s.d(t,"a",function(){return a}),s.d(t,"b",function(){return o}),s.d(t,"c",function(){return i});var e=s("8Y7J"),l=s("XNiG");const a=new e.p("vcl-form-control-material-host"),o=new e.p("vcl-form-control-material-input");class i{constructor(n){this._modeChangeEmitter=new l.a,this.modeChange=this._modeChangeEmitter.asObservable(),this._mode=n||"float"}get mode(){return this._mode}setMode(n){this._mode=n,this._modeChangeEmitter.next(n)}}},qOPM:function(n,t){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TokenDemoComponent {\n\n  onRemove(token) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onRemove\'</span>, token);\n  }\n\n  onListChange(value) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onListChange\'</span>, value);\n  }\n\n  onInputChange(value) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onInputChange\'</span>, value);\n  }\n}\n'},sM5x:function(n,t,s){"use strict";s.d(t,"a",function(){return l}),s.d(t,"b",function(){return a});var e=s("8Y7J");const l=new e.p("vcl_token_observer");class a{constructor(n,t,s){this.cdRef=n,this.elementRef=t,this.observer=s,this.classVclToken=!0,this.tabindex=0,this.disabled=!1,this.selected=!1,this.selectable=!1,this.removable=!1,this.remove=new e.m,this.selectionChange=new e.m,this.cvaDisabled=!1}set label(n){this._label=n}get label(){return this._label||this.elementRef.nativeElement.innerHTML}get value(){return this._value||this.label}get styleCursor(){return this.selectable?null:"unset"}onBlur(n){this.observer&&this.observer.notifyTokenBlur(this)}onClick(n){!this.isDisabled&&this.selectable&&(this.selected=!this.selected,this.selectionChange.emit(this.selected),this.observer&&this.observer.notifyTokenSelect(this))}onRemoveClick(n){n.stopPropagation(),this.remove.emit(n),this.observer&&this.observer.notifyTokenRemove(this)}setDisabledState(n){this.cvaDisabled=n,this.cdRef.markForCheck()}get isDisabled(){return this.cvaDisabled||this.disabled}}},tMsr:function(n,t,s){"use strict";s.d(t,"a",function(){return i});var e=s("8Y7J"),l=s("dvZr"),a=s("XNiG");s("mbT9"),s("hUuX"),s("gW3m");let o=0;class i{constructor(n,t,s,l,i,r){this.elementRef=n,this.renderer=t,this.cdRef=s,this.ngControl=l,this.formControlHost=i,this._errorStateAgent=r,this._stateChangedEmitter=new a.a,this._generatedId="vcl_token-input_"+o++,this._cvaDisabled=!1,this.stateChanged=this._stateChangedEmitter.asObservable(),this.controlType="token-input",this._hostClasses=!0,this._hostAttrTabindex=-1,this.selectable=!1,this.addOnEnter=!0,this.allowDuplicates=!1,this.preselect=!0,this.removeToken=!0,this.value=[],this.disabled=!1,this.valueChange=new e.m,this.remove=new e.m,this.confirm=new e.m,this.onChange=()=>{},this.onTouched=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}get elementId(){return this.id||this._generatedId}get isDisabled(){return this._cvaDisabled||this.disabled}get isFocused(){return this.input.isFocused}get isLabelFloating(){return this.input.isLabelFloating||this.value&&this.value.length>0}get hasError(){const n=this.errorStateAgent||this._errorStateAgent;return!!n&&n(this.formControlHost,this)}removeLastToken(){this.value=[...this.value],this.value.pop(),this.triggerChange(),this.cdRef.markForCheck()}addToken(n){n="string"==typeof n?{label:n,value:n}:n;const t=Object.assign({selected:void 0===n.selected?this.preselect:n.selected},n);!1===this.allowDuplicates&&this.value.some(n=>n.value===t.value)||(this.value=[...this.value,t],this.triggerChange(),this.cdRef.markForCheck(),this.onTouched())}notifyInputFocus(n){this._stateChangedEmitter.next()}notifyInputBlur(n){this.onTouched(),this._stateChangedEmitter.next()}select(n){this.selectable&&(n.selected=!n.selected,this.triggerChange())}onTokenRemove(n){this.remove.emit(n),this.removeToken&&(this.value=this.value.filter(t=>t!==n),this.triggerChange())}triggerChange(){this.valueChange.emit(this.value),this.onChange(this.value)}onLabelClick(n){this.inputElementRef.nativeElement.focus()}writeValue(n){this.value=Array.isArray(n)?n.map(n=>"string"==typeof n?{label:n,selected:this.preselect}:n).filter(n=>"object"==typeof n&&n):[],this.cdRef.markForCheck()}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.disabled=n}onKeydown(n){if(n.target!==this.inputElementRef.nativeElement)return;const t=n.keyCode;t===l.a&&this._lastKeyCode===l.a&&""===this.inputElementRef.nativeElement.value?this.removeLastToken():t===l.c&&n.preventDefault(),this._lastKeyCode=t}onKeyPressEnter(n){if(n.target!==this.inputElementRef.nativeElement)return;const t=this.inputElementRef.nativeElement.value;""===t?this.confirm.emit():this.addOnEnter&&(this.addToken(t),this.inputElementRef.nativeElement.value="")}ngAfterContentInit(){this.inputElementRef&&this.renderer.addClass(this.inputElementRef.nativeElement,"vclLayoutFlex")}}},xsjC:function(n,t,s){"use strict";s.d(t,"a",function(){return a}),s("2JrD");var e=s("XNiG"),l=s("JX91");class a{constructor(n,t,s){this.elementRef=n,this.formGroup=t,this.ngForm=s,this._stateChangedEmitter=new e.a,this.stateChange=this._stateChangedEmitter.asObservable()}get classVclFormControlGroup(){return!this.classVclFormInlineControlGroup}get classVclFormInlineControlGroup(){return"vcl-form-inline-control-group"===this.elementRef.nativeElement.tagName.toLowerCase()}get attrVCLControlType(){return this.input&&this.input.controlType}get _form(){return this.ngForm||this.formGroup}get pending(){return this._form.pending}get invalid(){return this._form.invalid}get valid(){return this._form.valid}get touched(){return this._form.touched}get untouched(){return this._form.untouched}get submitted(){return this._form.submitted}ngAfterViewInit(){this.input&&this.input.stateChanged.pipe(Object(l.a)(void 0)).subscribe(this._stateChangedEmitter)}ngOnDestroy(){return this._stateChangedEmitter.complete()}}}}]);