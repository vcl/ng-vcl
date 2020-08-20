function _classCallCheck(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(s,a){for(var n=0;n<a.length;n++){var l=a[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,l.key,l)}}function _createClass(s,a,n){return a&&_defineProperties(s.prototype,a),n&&_defineProperties(s,n),s}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{MElT:function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return L})),n.d(a,"MaterialDesignInputsDemoModule",(function(){return x}));var l,t=n("ofXK"),p=n("3Pt+"),e=n("tyNb"),r=n("19H1"),c=n("2FIb"),o=n("fXoL"),h=n("xsjC"),i=n("iSCa"),j=n("7FAN"),g=n("EaCA"),m=n("8Ii/"),u=n("btmi"),b=n("XIT8"),d=n("p31x"),v=n("1/Kn"),f=n("QI9E"),y=n("q1D+"),w=n("jPeI"),k=n("VSXH"),S=n("nj5o"),R=n("9Rb9"),C=n("LpWs"),N=n("5gLr"),F=n("I9Sx"),q=n("zDo1"),M=n("StUX"),A=n("6B8K"),D=["form"],I=((l=function(){function s(a){_classCallCheck(this,s),this.notifier=a,this.material="float",this.defaultValues={perks:[]},this.formGroup=new p.j({name:new p.g("",[p.F.required,p.F.minLength(2)]),dob:new p.g(null,[p.F.required]),description:new p.g("",[]),password:new p.g("",[p.F.required]),email:new p.g("",[p.F.email]),perks:new p.g(this.defaultValues.perks,[this.validatePerks.bind(this)])},[])}return _createClass(s,[{key:"validatePerks",value:function(s){return Array.isArray(s.value)&&2===s.value.length?null:{perks:!0}}},{key:"onSubmit",value:function(){this.formGroup.valid?this.notifier.success("Hero created"):this.notifier.error("Hero invalid")}},{key:"onReset",value:function(){this.form.resetForm(this.defaultValues),this.notifier.info("Hero reset")}}]),s}()).\u0275fac=function(s){return new(s||l)(o.Mb(r.u))},l.\u0275cmp=o.Gb({type:l,selectors:[["ng-component"]],viewQuery:function(s,a){var n;1&s&&o.Dc(D,!0),2&s&&o.mc(n=o.bc())&&(a.form=n.first)},decls:103,vars:22,consts:[["vclFormControlLabel",""],[3,"ngModel","ngModelChange"],["vclRadioButtonLabel",""],["value","float"],["value","static"],["value","disabled"],["novalidate","",1,"form",3,"formGroup","vclMaterial","submit"],["form","ngForm"],["vclInput","","formControlName","name","placeholder","Name of the hero"],["error","required"],["error","minlength"],["vclInput","","formControlName","description","placeholder","Description of the hero",3,"autogrow","minRows","maxRows"],["formControlName","dob","placeholder","MM/DD/YYYY"],["vclPrepend","","icon","fas:envelope"],["vclInput","","formControlName","email","placeholder","Email of the hero"],["error","email"],["vclInput","","formControlName","password","placeholder","Enter password"],["placeholder","Select two perks"],["formControlName","perks","selectionMode","multiple"],[3,"value"],["error","perks"],[1,"loose-button-group"],["vcl-button","","type","submit",1,"emphasized"],["vcl-button","","type","button",3,"click"],[1,"value"]],template:function(s,a){if(1&s&&(o.Sb(0,"vcl-form-control-group"),o.Sb(1,"label",0),o.yc(2,"Material input mode"),o.Rb(),o.Sb(3,"vcl-radio-group",1),o.ac("ngModelChange",(function(s){return a.material=s})),o.Sb(4,"label",2),o.Nb(5,"vcl-radio-button",3),o.yc(6," Float "),o.Rb(),o.Sb(7,"label",2),o.Nb(8,"vcl-radio-button",4),o.yc(9," Static "),o.Rb(),o.Sb(10,"label",2),o.Nb(11,"vcl-radio-button",5),o.yc(12," Disabled "),o.Rb(),o.Rb(),o.Rb(),o.Sb(13,"form",6,7),o.ac("submit",(function(){return a.onSubmit()})),o.Sb(15,"h2"),o.yc(16,"Create a hero"),o.Rb(),o.Sb(17,"vcl-form-control-group"),o.Sb(18,"label",0),o.yc(19,"Name"),o.Nb(20,"vcl-required"),o.Rb(),o.Nb(21,"input",8),o.Sb(22,"vcl-hint-error",9),o.yc(23,"Name is required"),o.Rb(),o.Sb(24,"vcl-hint-error",10),o.yc(25,"Name must have a length of at least 2 characters"),o.Rb(),o.Rb(),o.Sb(26,"vcl-form-control-group"),o.Sb(27,"label",0),o.yc(28,"Description"),o.Rb(),o.Nb(29,"textarea",11),o.Rb(),o.Sb(30,"vcl-form-control-group"),o.Sb(31,"label",0),o.yc(32,"Date of Birth"),o.Rb(),o.Sb(33,"vcl-datepicker",12),o.Nb(34,"vcl-calendar"),o.Rb(),o.Rb(),o.Sb(35,"vcl-form-control-group"),o.Sb(36,"label",0),o.yc(37,"Email"),o.Rb(),o.Sb(38,"vcl-embedded-input-group"),o.Nb(39,"vcl-icon",13),o.Nb(40,"input",14),o.Rb(),o.Sb(41,"vcl-hint-error",9),o.yc(42,"Email is required"),o.Rb(),o.Sb(43,"vcl-hint-error",15),o.yc(44,"Invalid Email address"),o.Rb(),o.Rb(),o.Sb(45,"vcl-form-control-group"),o.Sb(46,"label",0),o.yc(47,"Password"),o.Nb(48,"vcl-required"),o.Rb(),o.Sb(49,"vcl-password-input"),o.Nb(50,"input",16),o.Rb(),o.Sb(51,"vcl-hint-error",9),o.yc(52,"Password is required"),o.Rb(),o.Rb(),o.Sb(53,"vcl-form-control-group"),o.Sb(54,"label",0),o.yc(55,"Select perks"),o.Nb(56,"vcl-required"),o.Rb(),o.Sb(57,"vcl-select",17),o.Sb(58,"vcl-select-list",18),o.Sb(59,"vcl-select-list-item",19),o.yc(60," Snake Eater "),o.Sb(61,"vcl-sub-label"),o.yc(62,"It gives you a 25% increase to your poison resistance.\t"),o.Rb(),o.Rb(),o.Sb(63,"vcl-select-list-item",19),o.yc(64," Swift Learner "),o.Sb(65,"vcl-sub-label"),o.yc(66,"Swift Learner\tWhenever you gain experience, you'll receive 5% more experience per level of the perk."),o.Rb(),o.Rb(),o.Sb(67,"vcl-select-list-item",19),o.yc(68," Toughness "),o.Sb(69,"vcl-sub-label"),o.yc(70,"It adds 10% to your general damage resistance per level."),o.Rb(),o.Rb(),o.Sb(71,"vcl-select-list-item",19),o.yc(72," Explorer "),o.Sb(73,"vcl-sub-label"),o.yc(74,"You'll get more random encounters with this perk."),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(75,"vcl-hint-error",20),o.yc(76,"You must select two perks"),o.Rb(),o.Rb(),o.Sb(77,"div",21),o.Sb(78,"button",22),o.yc(79,"Submit"),o.Rb(),o.Sb(80,"button",23),o.ac("click",(function(){return a.onReset()})),o.yc(81,"Reset"),o.Rb(),o.Rb(),o.Sb(82,"div",24),o.Sb(83,"h4"),o.yc(84,"Form"),o.Rb(),o.Sb(85,"pre"),o.yc(86),o.Rb(),o.Sb(87,"pre"),o.yc(88),o.Rb(),o.Sb(89,"pre"),o.yc(90),o.Rb(),o.Sb(91,"pre"),o.yc(92),o.Rb(),o.Sb(93,"pre"),o.yc(94),o.Rb(),o.Sb(95,"pre"),o.yc(96),o.Rb(),o.Sb(97,"pre"),o.yc(98),o.ec(99,"json"),o.Rb(),o.Sb(100,"pre"),o.yc(101),o.ec(102,"json"),o.Rb(),o.Rb(),o.Rb()),2&s){var n=o.nc(14);o.Ab(3),o.ic("ngModel",a.material),o.Ab(10),o.ic("formGroup",a.formGroup)("vclMaterial",a.material),o.Ab(16),o.ic("autogrow",!0)("minRows",3)("maxRows",10),o.Ab(30),o.ic("value","snakeeater"),o.Ab(4),o.ic("value","swiftlearner"),o.Ab(4),o.ic("value","toughness"),o.Ab(4),o.ic("value","explorer"),o.Ab(15),o.Ac("status: ",n.status,""),o.Ab(2),o.Ac("valid: ",n.valid,""),o.Ab(2),o.Ac("dirty: ",n.dirty,""),o.Ab(2),o.Ac("submitted: ",n.submitted,""),o.Ab(2),o.Ac("touched: ",n.touched,""),o.Ab(2),o.Ac("pristine: ",n.pristine,""),o.Ab(2),o.Ac("errors: ",o.fc(99,18,n.errors),""),o.Ab(3),o.Ac("value: ",o.fc(102,20,n.value),"")}},directives:[h.a,i.a,j.a,g.a,p.r,p.u,m.a,u.a,p.H,p.s,b.a,p.k,d.a,v.b,p.c,p.i,f.a,y.a,w.a,k.a,S.a,R.a,C.c,N.a,F.a,q.a,M.a,C.d,A.b],pipes:[t.k],encapsulation:2}),l);function L(){return{label:"Material Design Inputs",tabs:{Demo:I,"README.md":{type:"md",content:'<h1 id="material-design-inputs">Material Design Inputs</h1>\n<p>Material design inputs</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLMaterialDesignInputsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLMaterialDesignInputsModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-comment">&lt;!-- Enables material mode for all supported input controls --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">vclForm</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;formGroup&quot;</span> <span class="hljs-attr">vclMaterial</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Name&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Override material mode for description --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span> <span class="hljs-attr">vclMaterial</span>=<span class="hljs-string">&quot;static&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Description<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;description&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Name&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span></pre>\n<h4 id="formvclmaterial-attributes">form[vclMaterial] attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vclMaterial</code></td>\n<td>&apos;float&apos; | &apos;static&apos; | &apos;disabled&apos;</td>\n<td>&apos;float&apos;</td>\n<td>Material mode</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-form-control-groupvclmaterial-attributes">vcl-form-control-group[vclMaterial] attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vclMaterial</code></td>\n<td>&apos;float&apos; | &apos;static&apos; | &apos;disabled&apos;</td>\n<td>&apos;float&apos;</td>\n<td>Material mode</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("uFiD")},"demo.component.ts":{type:"pre",content:n("nv3G")}}}}var E,x=((E=function s(){_classCallCheck(this,s)}).\u0275mod=o.Kb({type:E}),E.\u0275inj=o.Jb({factory:function(s){return new(s||E)},imports:[[t.c,p.m,p.B,c.b,r.C,r.J,r.B,r.cb,r.R,r.Z,r.Q,r.P,r.eb,r.hb,r.X,r.H,r.N,r.U,e.g.forChild([{path:"",component:c.a,data:{demo:L}}])]]}),E)},nv3G:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component, ViewChild } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup, Validators, AbstractControl, FormControl, ValidationErrors, NgForm } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { NotifierService, FormControlErrorStateAgent, FormControlHost, FormControlInput } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MaterialDesignInputsDemoComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> notifier: NotifierService</span>) { }\n\n  material = <span class="hljs-string">\'float\'</span>;\n\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'form\'</span>)\n  form: NgForm;\n\n  defaultValues = {\n    perks: []\n  };\n\n  formGroup = <span class="hljs-keyword">new</span> FormGroup({\n    name: <span class="hljs-keyword">new</span> FormControl(<span class="hljs-string">\'\'</span>, [\n      Validators.required,\n      Validators.minLength(<span class="hljs-number">2</span>),\n    ]),\n    dob: <span class="hljs-keyword">new</span> FormControl(<span class="hljs-literal">null</span>, [\n      Validators.required\n    ]),\n    description: <span class="hljs-keyword">new</span> FormControl(<span class="hljs-string">\'\'</span>, []),\n    password: <span class="hljs-keyword">new</span> FormControl(<span class="hljs-string">\'\'</span>, [\n      Validators.required\n    ]),\n    email: <span class="hljs-keyword">new</span> FormControl(<span class="hljs-string">\'\'</span>, [\n      Validators.email,\n    ]),\n    perks: <span class="hljs-keyword">new</span> FormControl(<span class="hljs-keyword">this</span>.defaultValues.perks, [ <span class="hljs-keyword">this</span>.validatePerks.bind(<span class="hljs-keyword">this</span>) ])\n  }, []);\n\n  validatePerks(c: AbstractControl) {\n    <span class="hljs-keyword">return</span> (<span class="hljs-built_in">Array</span>.isArray(c.value) &amp;&amp; c.value.length === <span class="hljs-number">2</span>) ? <span class="hljs-literal">null</span> : { perks: <span class="hljs-literal">true</span> };\n  }\n\n  onSubmit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.formGroup.valid) {\n      <span class="hljs-keyword">this</span>.notifier.success(<span class="hljs-string">\'Hero created\'</span>);\n    } <span class="hljs-keyword">else</span> {\n     <span class="hljs-keyword">this</span>.notifier.error(<span class="hljs-string">\'Hero invalid\'</span>);\n    }\n  }\n\n  onReset() {\n    <span class="hljs-keyword">this</span>.form.resetForm(<span class="hljs-keyword">this</span>.defaultValues);\n    <span class="hljs-keyword">this</span>.notifier.info(<span class="hljs-string">\'Hero reset\'</span>);\n  }\n}\n'},uFiD:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Material input mode<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"material"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclRadioButtonLabel</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"float"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n      Float\n    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclRadioButtonLabel</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"static"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n      Static\n    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclRadioButtonLabel</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"disabled"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n      Disabled\n    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">novalidate</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"formGroup"</span> #<span class="hljs-attr">form</span>=<span class="hljs-string">"ngForm"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form"</span> (<span class="hljs-attr">submit</span>)=<span class="hljs-string">"onSubmit()"</span> [<span class="hljs-attr">vclMaterial</span>]=<span class="hljs-string">"material"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Create a hero<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Name<span class="hljs-tag">&lt;<span class="hljs-name">vcl-required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">"name"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Name of the hero"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-hint-error</span> <span class="hljs-attr">error</span>=<span class="hljs-string">"required"</span>&gt;</span>Name is required<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-hint-error</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-hint-error</span> <span class="hljs-attr">error</span>=<span class="hljs-string">"minlength"</span>&gt;</span>Name must have a length of at least 2 characters<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-hint-error</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Description<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">"description"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Description of the hero"</span> [<span class="hljs-attr">autogrow</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">minRows</span>]=<span class="hljs-string">"3"</span> [<span class="hljs-attr">maxRows</span>]=<span class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Date of Birth<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-datepicker</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">"dob"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"MM/DD/YYYY"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-datepicker</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Email<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:envelope"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Email of the hero"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-hint-error</span> <span class="hljs-attr">error</span>=<span class="hljs-string">"required"</span>&gt;</span>Email is required<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-hint-error</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-hint-error</span> <span class="hljs-attr">error</span>=<span class="hljs-string">"email"</span>&gt;</span>Invalid Email address<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-hint-error</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Password<span class="hljs-tag">&lt;<span class="hljs-name">vcl-required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-password-input</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter password"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-password-input</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-hint-error</span> <span class="hljs-attr">error</span>=<span class="hljs-string">"required"</span>&gt;</span>Password is required<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-hint-error</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Select perks<span class="hljs-tag">&lt;<span class="hljs-name">vcl-required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Select two perks"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">"perks"</span>  <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"multiple"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'snakeeater\'"</span>&gt;</span>\n          Snake Eater\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-sub-label</span>&gt;</span>It gives you a 25% increase to your poison resistance.\t<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-sub-label</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'swiftlearner\'"</span>&gt;</span>\n          Swift Learner\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-sub-label</span>&gt;</span>Swift Learner\tWhenever you gain experience, you\'ll receive 5% more experience per level of the perk.<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-sub-label</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'toughness\'"</span>&gt;</span>\n          Toughness\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-sub-label</span>&gt;</span>It adds 10% to your general damage resistance per level.<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-sub-label</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'explorer\'"</span>&gt;</span>\n          Explorer\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-sub-label</span>&gt;</span>You\'ll get more random encounters with this perk.<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-sub-label</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span> \n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-hint-error</span> <span class="hljs-attr">error</span>=<span class="hljs-string">"perks"</span>&gt;</span>You must select two perks<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-hint-error</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"loose-button-group"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"emphasized"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"onReset()"</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"value"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>Form<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>status: {{ form.status }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>valid: {{ form.valid }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>dirty: {{ form.dirty }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>submitted: {{ form.submitted }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>touched: {{ form.touched }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>pristine: {{ form.pristine }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>errors: {{ form.errors | json }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>value: {{ form.value | json }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);