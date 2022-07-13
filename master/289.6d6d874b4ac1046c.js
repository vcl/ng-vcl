"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[289],{6289:(g,s,t)=>{t.r(s),t.d(s,{FormControlGroupDemoModule:()=>ne,demo:()=>b});var u=t(6895),n=t(433),A=t(3356),i=t(9787),d=t(9155),e=t(4650),f=t(8565),U=t(6994),C=t(6447),T=t(7997),x=t(5579),q=t(1435),y=t(1352),k=t(1441),w=t(5550),h=t(4102),Z=t(2007),F=t(565),N=t(1300),G=t(4275),P=t(8743),E=t(2918),V=t(8083),I=t(1225),D=t(5224),M=t(3058),R=t(8613),v=t(6656),J=t(900),_=t(4119),S=t(2939),L=t(8191),Q=t(4637),Y=t(4935),j=t(9563),B=t(2642);const H=["form"];function W(l,c){if(1&l){const r=e.EpF();e.TgZ(0,"vcl-panel-dialog")(1,"vcl-panel-title"),e._uU(2),e.qZA(),e._uU(3),e.TgZ(4,"button",53),e.NdJ("click",function(){e.CHM(r),e.oxw();const o=e.MAs(5);return e.KtG(o.close())}),e._uU(5,"OK"),e.qZA()()}if(2&l){const r=c.header,a=c.text;e.xp6(2),e.Oqu(r),e.xp6(1),e.hij(" ",a," ")}}function z(l,c){1&l&&(e.TgZ(0,"vcl-form-control-group")(1,"vcl-label"),e._uU(2,"Leader"),e.qZA(),e._UZ(3,"vcl-flip-switch",54),e.qZA())}function $(l,c){if(1&l&&(e.TgZ(0,"vcl-hint"),e._uU(1),e.qZA()),2&l){const r=e.oxw();e.xp6(1),e.AsE("",r.skillPoints," of ",r.skillPointsMax," skill points used")}}function K(l,c){if(1&l&&(e.TgZ(0,"vcl-hint-warning"),e._uU(1),e.qZA()),2&l){const r=e.oxw();e.xp6(1),e.AsE("",r.skillPoints," of ",r.skillPointsMax," skill points used")}}function O(l,c){if(1&l&&(e.TgZ(0,"vcl-hint-error"),e._uU(1),e.qZA()),2&l){const r=e.oxw();e.xp6(1),e.AsE("",r.skillPoints," of ",r.skillPointsMax," skill points used")}}const X=function(){return{width:"25em"}};let ee=(()=>{class l{constructor(r,a){this.notifier=r,this.da=a,this.datePattern=this.da.pattern("date"),this.skillPointsMax=10,this.defaultValues={level:1,leader:!1,hitpoints:10,strength:3,agility:3,intelligence:3,perks:[]},this.formGroup=new n.nJ({name:new n.p4("",[n.kI.required,n.kI.minLength(2)]),description:new n.p4("",[]),dob:new n.p4(null,[n.kI.required]),password:new n.p4("",[n.kI.required,n.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]),picture:new n.p4(null,[]),level:new n.p4(this.defaultValues.level,[]),leader:new n.p4(this.defaultValues.leader,[]),email:new n.p4("",{validators:[n.kI.email]}),terms:new n.p4(!1,[o=>o.value?null:{termsDisagree:!0}]),gender:new n.p4(null,n.kI.required),class:new n.p4(null,[n.kI.required]),alignment:new n.p4(null,[n.kI.required]),hitpoints:new n.p4(this.defaultValues.hitpoints,[n.kI.min(1),n.kI.max(100)]),strength:new n.p4(this.defaultValues.strength,[n.kI.min(1),n.kI.max(10)]),agility:new n.p4(this.defaultValues.agility,[n.kI.min(1),n.kI.max(10)]),intelligence:new n.p4(this.defaultValues.intelligence,[n.kI.min(1),n.kI.max(10)]),perks:new n.p4(this.defaultValues.perks,[this.validatePerks.bind(this)])},[this.validateSkills.bind(this)]),this.termsErrorStateAgent=(o,m)=>o&&m&&m.invalid&&o.submitted,this.helpLayerConfig={maxWidth:"25em"}}get level(){const r=this.formGroup&&this.formGroup.get("level");return r?r.value:0}get skillPoints(){const r=this.formGroup&&this.formGroup.get("strength"),a=this.formGroup&&this.formGroup.get("agility"),o=this.formGroup&&this.formGroup.get("intelligence");return r&&a&&o?r.value+a.value+o.value:0}get skillPointsAvailable(){return this.skillPointsMax-this.skillPoints}validateSkills(){return this.skillPoints>this.skillPointsMax?{skills:!0}:null}validatePerks(r){return Array.isArray(r.value)&&2===r.value.length?null:{perks:!0}}onSubmit(){this.formGroup.valid?this.notifier.success("Hero created"):this.notifier.error("Hero invalid")}onReset(){this.form.resetForm(this.defaultValues),this.notifier.info("Hero reset")}}return l.\u0275fac=function(r){return new(r||l)(e.Y36(i.lGB),e.Y36(i._AI))},l.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],viewQuery:function(r,a){if(1&r&&e.Gf(H,5),2&r){let o;e.iGM(o=e.CRH())&&(a.form=o.first)}},decls:231,vars:44,consts:[["novalidate","","vclForm","",2,"max-width","40em",3,"formGroup","submit"],["form","ngForm"],[3,"vclLayer"],["help","vclLayer"],[1,"help-wrapper"],["vclInput","","formControlName","name"],["vcl-button","","square","","type","button",1,"transparent",3,"click"],["icon","vcl:info",1,"scale130p"],["error","required"],["error","minlength"],[1,"auto-height"],["vclInput","","formControlName","description","placeholder","Description of the hero",3,"autogrow","minRows","maxRows"],[1,"row","gutterx-4"],[1,"flex"],["formControlName","dob",3,"placeholder"],["icon","fas:envelope"],["vclInput","","formControlName","email"],["error","email"],["vclInput","","formControlName","password","placeholder","Enter password"],["error","pattern"],["formControlName","level",3,"min","max"],[4,"ngIf"],["formControlName","picture",3,"multiple"],["formControlName","gender"],["value","m"],["vclAppend","","icon","fas:mars"],["value","f"],["vclAppend","","icon","fas:venus"],["value","g"],["vclAppend","","icon","fas:genderless"],["formControlName","alignment"],["vcl-button","",3,"value"],["formControlName","class"],[3,"value"],["formControlName","hitpoints",3,"min","max","scale","lock"],[3,"target"],["formControlName","strength"],["strengthRating","vclRating"],["formControlName","agility"],["agilityRating","vclRating"],["formControlName","intelligence"],["intelligenceRating","vclRating"],["placeholder","Select perks"],["formControlName","perks","selectionMode","multiple"],["error","perks"],[3,"errorStateAgent"],["formControlName","terms"],["href","'https://github.com/ng-vcl/ng-vcl'","target","'_blank'"],["error","termsDisagree"],[1,"loose-button-group"],["vcl-button","","type","submit",1,"emphasized"],["vcl-button","","type","button",3,"click"],[1,"value"],["vcl-button","","vclPanelFooterButton","",1,"transparent","outline",3,"click"],["formControlName","leader"]],template:function(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"form",0,1),e.NdJ("submit",function(){return a.onSubmit()}),e.TgZ(2,"h2"),e._uU(3,"Create a hero"),e.qZA(),e.YNc(4,W,6,2,"ng-template",2,3,e.W1O),e.TgZ(6,"vcl-form-control-group")(7,"vcl-label"),e._uU(8,"Name"),e.qZA(),e.TgZ(9,"div",4)(10,"vcl-input-field"),e._UZ(11,"input",5),e.qZA(),e.TgZ(12,"button",6),e.NdJ("click",function(){e.CHM(o);const p=e.MAs(5);return e.KtG(p.open({data:{header:"Name",text:"The name of the hero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ad excepturi molestiae esse unde repellendus ex accusantium officia placeat voluptatem commodi et, laboriosam laudantium, cum, ratione debitis inventore? Esse, eaque!"}}))}),e._UZ(13,"vcl-icon",7),e.qZA()(),e.TgZ(14,"vcl-hint-error",8),e._uU(15,"Name is required"),e.qZA(),e.TgZ(16,"vcl-hint-error",9),e._uU(17,"Name must have a length of at least 2 characters"),e.qZA()(),e.TgZ(18,"vcl-form-control-group")(19,"vcl-label"),e._uU(20,"Description"),e.qZA(),e.TgZ(21,"vcl-input-field",10),e._UZ(22,"textarea",11),e.qZA()(),e.TgZ(23,"div",12)(24,"vcl-form-control-group",13)(25,"vcl-label"),e._uU(26,"Date of Birth"),e.qZA(),e._UZ(27,"vcl-date-picker",14),e.TgZ(28,"vcl-hint-error",8),e._uU(29,"Date of Birth is required"),e.qZA()(),e.TgZ(30,"vcl-form-control-group",13)(31,"vcl-label"),e._uU(32,"Email"),e.qZA(),e.TgZ(33,"vcl-input-field"),e._UZ(34,"vcl-icon",15)(35,"input",16),e.qZA(),e.TgZ(36,"vcl-hint-error",8),e._uU(37,"Email is required"),e.qZA(),e.TgZ(38,"vcl-hint-error",17),e._uU(39,"Invalid Email address"),e.qZA()()(),e.TgZ(40,"vcl-form-control-group")(41,"vcl-label"),e._uU(42,"Password"),e.qZA(),e.TgZ(43,"vcl-password-input"),e._UZ(44,"input",18),e.qZA(),e.TgZ(45,"vcl-hint-error",8),e._uU(46,"Password is required"),e.qZA(),e.TgZ(47,"vcl-hint-error",19),e._uU(48,"Password must... "),e.qZA(),e.TgZ(49,"vcl-hint-error",19),e._uU(50,"- have at least 8 characters in length"),e.qZA(),e.TgZ(51,"vcl-hint-error",19),e._uU(52,"- contain a lowercase letters"),e.qZA(),e.TgZ(53,"vcl-hint-error",19),e._uU(54,"- contain a uppercase letters"),e.qZA(),e.TgZ(55,"vcl-hint-error",19),e._uU(56,"- contain a number"),e.qZA(),e.TgZ(57,"vcl-hint-error",19),e._uU(58,"- contain a special character"),e.qZA()(),e.TgZ(59,"vcl-form-control-group")(60,"vcl-label"),e._uU(61,"Level"),e.qZA(),e._UZ(62,"demo-counter",20),e.qZA(),e.YNc(63,z,4,0,"vcl-form-control-group",21),e.TgZ(64,"vcl-form-control-group")(65,"vcl-label"),e._uU(66,"Picture"),e.qZA(),e.TgZ(67,"vcl-file-input",22),e._uU(68,"Picture of the hero"),e.qZA()(),e.TgZ(69,"vcl-form-control-group")(70,"vcl-label"),e._uU(71,"Gender"),e.qZA(),e.TgZ(72,"vcl-radio-group",23)(73,"vcl-radio-button",24)(74,"vcl-icogram"),e._uU(75,"Male"),e._UZ(76,"vcl-icon",25),e.qZA()(),e.TgZ(77,"vcl-radio-button",26)(78,"vcl-icogram"),e._uU(79,"Female"),e._UZ(80,"vcl-icon",27),e.qZA()(),e.TgZ(81,"vcl-radio-button",28)(82,"vcl-icogram"),e._uU(83,"Genderless"),e._UZ(84,"vcl-icon",29),e.qZA()(),e.TgZ(85,"vcl-hint-error",8),e._uU(86,"You must select a gender"),e.qZA()()(),e.TgZ(87,"vcl-form-control-group")(88,"vcl-label"),e._uU(89,"Alignment"),e.qZA(),e.TgZ(90,"vcl-button-group",30)(91,"button",31),e._uU(92,"Good"),e.qZA(),e.TgZ(93,"button",31),e._uU(94,"Neutral"),e.qZA(),e.TgZ(95,"button",31),e._uU(96,"Evil"),e.qZA()(),e.TgZ(97,"vcl-hint-error",8),e._uU(98,"You must select an alignment"),e.qZA()(),e.TgZ(99,"vcl-form-control-group")(100,"vcl-label"),e._uU(101,"Class"),e.qZA(),e.TgZ(102,"vcl-select-list",32)(103,"vcl-select-list-item",33),e._uU(104," Warrior "),e.qZA(),e.TgZ(105,"vcl-select-list-item",33),e._uU(106," Mage "),e.qZA(),e.TgZ(107,"vcl-select-list-item",33),e._uU(108," Rogue "),e.qZA()(),e.TgZ(109,"vcl-hint-error",8),e._uU(110,"You must select a class"),e.qZA()(),e.TgZ(111,"vcl-form-control-group")(112,"vcl-label"),e._uU(113,"Hit points"),e.qZA(),e._UZ(114,"vcl-slider",34),e.qZA(),e.TgZ(115,"fieldset")(116,"legend"),e._uU(117,"Skills"),e.qZA(),e.TgZ(118,"vcl-form-control-group")(119,"vcl-label"),e._uU(120,"Strength ("),e._UZ(121,"vcl-rating-item-label",35),e._uU(122,")"),e.qZA(),e.TgZ(123,"vcl-rating",36,37)(125,"vcl-rating-item"),e._uU(126,"1"),e.qZA(),e.TgZ(127,"vcl-rating-item"),e._uU(128,"2"),e.qZA(),e.TgZ(129,"vcl-rating-item"),e._uU(130,"3"),e.qZA(),e.TgZ(131,"vcl-rating-item"),e._uU(132,"4"),e.qZA(),e.TgZ(133,"vcl-rating-item"),e._uU(134,"5"),e.qZA()()(),e.TgZ(135,"vcl-form-control-group")(136,"vcl-label"),e._uU(137,"Agility ("),e._UZ(138,"vcl-rating-item-label",35),e._uU(139,")"),e.qZA(),e.TgZ(140,"vcl-rating",38,39)(142,"vcl-rating-item"),e._uU(143,"1"),e.qZA(),e.TgZ(144,"vcl-rating-item"),e._uU(145,"2"),e.qZA(),e.TgZ(146,"vcl-rating-item"),e._uU(147,"3"),e.qZA(),e.TgZ(148,"vcl-rating-item"),e._uU(149,"4"),e.qZA(),e.TgZ(150,"vcl-rating-item"),e._uU(151,"5"),e.qZA()()(),e.TgZ(152,"vcl-form-control-group")(153,"vcl-label"),e._uU(154,"Intelligence ("),e._UZ(155,"vcl-rating-item-label",35),e._uU(156,")"),e.qZA(),e.TgZ(157,"vcl-rating",40,41)(159,"vcl-rating-item"),e._uU(160,"1"),e.qZA(),e.TgZ(161,"vcl-rating-item"),e._uU(162,"2"),e.qZA(),e.TgZ(163,"vcl-rating-item"),e._uU(164,"3"),e.qZA(),e.TgZ(165,"vcl-rating-item"),e._uU(166,"4"),e.qZA(),e.TgZ(167,"vcl-rating-item"),e._uU(168,"5"),e.qZA()()(),e.YNc(169,$,2,2,"vcl-hint",21),e.YNc(170,K,2,2,"vcl-hint-warning",21),e.YNc(171,O,2,2,"vcl-hint-error",21),e.qZA(),e.TgZ(172,"vcl-form-control-group")(173,"vcl-label"),e._uU(174,"Perks"),e.qZA(),e.TgZ(175,"vcl-select",42)(176,"vcl-select-list",43)(177,"vcl-select-list-item",33),e._uU(178," Snake Eater "),e.TgZ(179,"vcl-sub-label"),e._uU(180,"It gives you a 25% increase to your poison resistance.\t"),e.qZA()(),e.TgZ(181,"vcl-select-list-item",33),e._uU(182," Swift Learner "),e.TgZ(183,"vcl-sub-label"),e._uU(184,"Swift Learner\tWhenever you gain experience, you'll receive 5% more experience per level of the perk."),e.qZA()(),e.TgZ(185,"vcl-select-list-item",33),e._uU(186," Toughness "),e.TgZ(187,"vcl-sub-label"),e._uU(188,"It adds 10% to your general damage resistance per level."),e.qZA()(),e.TgZ(189,"vcl-select-list-item",33),e._uU(190," Explorer "),e.TgZ(191,"vcl-sub-label"),e._uU(192,"You'll get more random encounters with this perk."),e.qZA()()()(),e.TgZ(193,"vcl-hint-error",44),e._uU(194,"You must select two perks"),e.qZA()(),e.TgZ(195,"vcl-form-control-group",45)(196,"vcl-checkbox",46),e._uU(197," Agree to our terms "),e.qZA(),e.TgZ(198,"vcl-hint"),e._uU(199,"Read the "),e.TgZ(200,"a",47),e._uU(201,"terms"),e.qZA(),e._uU(202," to learn how we collect, use and share your data"),e.qZA(),e.TgZ(203,"vcl-hint-error",48),e._uU(204,"You must agree to our Terms"),e.qZA()(),e.TgZ(205,"div",49)(206,"button",50),e._uU(207,"Submit"),e.qZA(),e.TgZ(208,"button",51),e.NdJ("click",function(){return a.onReset()}),e._uU(209,"Reset"),e.qZA()(),e.TgZ(210,"div",52)(211,"h4"),e._uU(212,"Form"),e.qZA(),e.TgZ(213,"pre"),e._uU(214),e.qZA(),e.TgZ(215,"pre"),e._uU(216),e.qZA(),e.TgZ(217,"pre"),e._uU(218),e.qZA(),e.TgZ(219,"pre"),e._uU(220),e.qZA(),e.TgZ(221,"pre"),e._uU(222),e.qZA(),e.TgZ(223,"pre"),e._uU(224),e.qZA(),e.TgZ(225,"pre"),e._uU(226),e.ALo(227,"json"),e.qZA(),e.TgZ(228,"pre"),e._uU(229),e.ALo(230,"json"),e.qZA()()()}if(2&r){const o=e.MAs(1),m=e.MAs(124),p=e.MAs(141),re=e.MAs(158);e.Q6J("formGroup",a.formGroup),e.xp6(4),e.Q6J("vclLayer",e.DdM(43,X)),e.xp6(18),e.Q6J("autogrow",!0)("minRows",3)("maxRows",10),e.xp6(5),e.Q6J("placeholder",a.datePattern),e.xp6(35),e.Q6J("min",1)("max",10),e.xp6(1),e.Q6J("ngIf",a.level>=5),e.xp6(4),e.Q6J("multiple",!1),e.xp6(24),e.Q6J("value","good"),e.xp6(2),e.Q6J("value","neutral"),e.xp6(2),e.Q6J("value","evil"),e.xp6(8),e.Q6J("value","warrior"),e.xp6(2),e.Q6J("value","mage"),e.xp6(2),e.Q6J("value","rogue"),e.xp6(7),e.Q6J("min",5)("max",20)("scale",16)("lock",!0),e.xp6(7),e.Q6J("target",m),e.xp6(17),e.Q6J("target",p),e.xp6(17),e.Q6J("target",re),e.xp6(14),e.Q6J("ngIf",!o.hasError("skills")&&0===a.skillPointsAvailable),e.xp6(1),e.Q6J("ngIf",!o.hasError("skills")&&a.skillPointsAvailable>0),e.xp6(1),e.Q6J("ngIf",o.hasError("skills")),e.xp6(6),e.Q6J("value","snakeeater"),e.xp6(4),e.Q6J("value","swiftlearner"),e.xp6(4),e.Q6J("value","toughness"),e.xp6(4),e.Q6J("value","explorer"),e.xp6(6),e.Q6J("errorStateAgent",a.termsErrorStateAgent),e.xp6(19),e.hij("status: ",o.status,""),e.xp6(2),e.hij("valid: ",o.valid,""),e.xp6(2),e.hij("dirty: ",o.dirty,""),e.xp6(2),e.hij("submitted: ",o.submitted,""),e.xp6(2),e.hij("touched: ",o.touched,""),e.xp6(2),e.hij("pristine: ",o.pristine,""),e.xp6(2),e.hij("errors: ",e.lcZ(227,39,o.errors),""),e.xp6(3),e.hij("value: ",e.lcZ(230,41,o.value),"")}},dependencies:[u.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,f.R,U.r,C.o,T.m,x.K,q.V,y.b,k.q,w.o,h.b,h.N,Z.q8,Z.g9,F.$,N._T,G.C,P.A,E.a,V.I,I.Y,D.A,M.H,R.y,v.jW,v.r8,v.ag,J.b,_._,S.w,L.P,Q.H,Y.g,j.f,B.Q,u.Ts],styles:[".help-wrapper{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between}.help-wrapper>:first-child{flex:0 0 90%}\n"],encapsulation:2}),l})();function b(){return{label:"Form Control Group",tabs:{Demo:ee,"README.md":{type:"md",content:'# vcl-form-control-group\n\nForm control group to handle the error-state of form controls\n\n## Usage\n\n```js\nimport { VCLFormControlGroupModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLFormControlGroupModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<form vclForm [formGroup]="formGroup">\n  <vcl-form-control-group>\n    <vcl-label>Name</vcl-label>\n    <vcl-input-field>\n      <input formControlName="name">\n    </vcl-input-field>\n    <vcl-hint-error error="required">Name is required</vcl-hint-error>\n    <vcl-hint-error error="minlength">Name must have a length of at least 2 characters</vcl-hint-error>\n  </vcl-form-control-group>\n</form>\n```\n'},"demo.component.html":{type:"html",content:t(2681)},"demo.component.ts":{type:"ts",content:t(1610)}}}}let ne=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.u5,n.UX,d.l,f.q,i.V4c,i.PoV,i.WdB,i.UfJ,i.D6p,i.zY$,i.G4p,i.mt_,i.NhM,i.VzK,i.Rft,i.o14,i.M8P,i.dwA,i.Kef,i.uW2,i.Bnf,i.N2R,i.tuJ,i.ds4,A.Bz.forChild([{path:"",component:d.z,data:{demo:b}}])]}),l})()},2681:(g,s,t)=>{t.r(s),t.d(s,{default:()=>u});const u='<form novalidate [formGroup]="formGroup" #form="ngForm" style="max-width: 40em;" (submit)="onSubmit()" vclForm>\n  <h2>Create a hero</h2>\n\n  <ng-template [vclLayer]="{width: \'25em\'}" #help="vclLayer" let-header="header" let-text="text">\n    <vcl-panel-dialog>\n      <vcl-panel-title>{{header}}</vcl-panel-title>\n      {{text}}\n      <button vcl-button vclPanelFooterButton class="transparent outline" (click)="help.close()">OK</button>\n    </vcl-panel-dialog>\n  </ng-template>\n\n  <vcl-form-control-group>\n    <vcl-label>Name</vcl-label>\n    <div class="help-wrapper">\n      <vcl-input-field>\n        <input vclInput formControlName="name">\n      </vcl-input-field>\n      <button vcl-button square class="transparent" (click)="help.open({data: { header: \'Name\', text: \'The name of the hero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ad excepturi molestiae esse unde repellendus ex accusantium officia placeat voluptatem commodi et, laboriosam laudantium, cum, ratione debitis inventore? Esse, eaque!\'}})" type="button">\n        <vcl-icon class="scale130p" icon="vcl:info"></vcl-icon>\n      </button>\n    </div>\n    <vcl-hint-error error="required">Name is required</vcl-hint-error>\n    <vcl-hint-error error="minlength">Name must have a length of at least 2 characters</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Description</vcl-label>\n    <vcl-input-field class="auto-height">\n      <textarea vclInput formControlName="description" placeholder="Description of the hero" [autogrow]="true" [minRows]="3" [maxRows]="10"></textarea>\n    </vcl-input-field>\n  </vcl-form-control-group>\n\n  <div class="row gutterx-4">\n    <vcl-form-control-group class="flex">\n      <vcl-label>Date of Birth</vcl-label>\n      <vcl-date-picker formControlName="dob" [placeholder]="datePattern"></vcl-date-picker>\n      <vcl-hint-error error="required">Date of Birth is required</vcl-hint-error>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group class="flex">\n      <vcl-label>Email</vcl-label>\n      <vcl-input-field>\n        <vcl-icon icon="fas:envelope"></vcl-icon>\n        <input vclInput formControlName="email">\n      </vcl-input-field>\n      <vcl-hint-error error="required">Email is required</vcl-hint-error>\n      <vcl-hint-error error="email">Invalid Email address</vcl-hint-error>\n    </vcl-form-control-group>\n  </div>\n\n\n  <vcl-form-control-group>\n    <vcl-label>Password</vcl-label>\n    <vcl-password-input>\n      <input vclInput formControlName="password" placeholder="Enter password">\n    </vcl-password-input>\n    <vcl-hint-error error="required">Password is required</vcl-hint-error>\n    <vcl-hint-error error="pattern">Password must... </vcl-hint-error>\n    <vcl-hint-error error="pattern">- have at least 8 characters in length</vcl-hint-error>\n    <vcl-hint-error error="pattern">- contain a lowercase letters</vcl-hint-error>\n    <vcl-hint-error error="pattern">- contain a uppercase letters</vcl-hint-error>\n    <vcl-hint-error error="pattern">- contain a number</vcl-hint-error>\n    <vcl-hint-error error="pattern">- contain a special character</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Level</vcl-label>\n    <demo-counter formControlName="level" [min]="1" [max]="10"></demo-counter>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group *ngIf="level >= 5">\n    <vcl-label>Leader</vcl-label>\n    <vcl-flip-switch formControlName="leader"></vcl-flip-switch>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Picture</vcl-label>\n    <vcl-file-input [multiple]="false" formControlName="picture">Picture of the hero</vcl-file-input>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Gender</vcl-label>\n    <vcl-radio-group formControlName="gender">\n      <vcl-radio-button value="m">\n        <vcl-icogram>Male<vcl-icon vclAppend icon="fas:mars"></vcl-icon></vcl-icogram>\n      </vcl-radio-button>\n      <vcl-radio-button value="f">\n        <vcl-icogram>Female<vcl-icon vclAppend icon="fas:venus"></vcl-icon></vcl-icogram>\n      </vcl-radio-button>\n      <vcl-radio-button value="g">\n        <vcl-icogram>Genderless<vcl-icon vclAppend icon="fas:genderless"></vcl-icon></vcl-icogram>\n      </vcl-radio-button>\n      <vcl-hint-error error="required">You must select a gender</vcl-hint-error>\n    </vcl-radio-group>\n\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Alignment</vcl-label>\n    <vcl-button-group formControlName="alignment">\n      <button vcl-button [value]="\'good\'">Good</button>\n      <button vcl-button [value]="\'neutral\'">Neutral</button>\n      <button vcl-button [value]="\'evil\'">Evil</button>\n    </vcl-button-group>\n    <vcl-hint-error error="required">You must select an alignment</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Class</vcl-label>\n    <vcl-select-list formControlName="class">\n      <vcl-select-list-item [value]="\'warrior\'">\n        Warrior\n      </vcl-select-list-item>\n      <vcl-select-list-item [value]="\'mage\'">\n        Mage\n      </vcl-select-list-item>\n      <vcl-select-list-item [value]="\'rogue\'">\n        Rogue\n      </vcl-select-list-item>\n    </vcl-select-list>\n    <vcl-hint-error error="required">You must select a class</vcl-hint-error>\n  </vcl-form-control-group>\n\n\n  <vcl-form-control-group>\n    <vcl-label>Hit points</vcl-label>\n    <vcl-slider formControlName="hitpoints" [min]="5" [max]="20" [scale]="16" [lock]="true"></vcl-slider>\n  </vcl-form-control-group>\n\n  <fieldset>\n    <legend>Skills</legend>\n    <vcl-form-control-group>\n      <vcl-label>Strength (<vcl-rating-item-label [target]="strengthRating"></vcl-rating-item-label>)</vcl-label>\n      <vcl-rating formControlName="strength" #strengthRating="vclRating">\n        <vcl-rating-item>1</vcl-rating-item>\n        <vcl-rating-item>2</vcl-rating-item>\n        <vcl-rating-item>3</vcl-rating-item>\n        <vcl-rating-item>4</vcl-rating-item>\n        <vcl-rating-item>5</vcl-rating-item>\n      </vcl-rating>\n    </vcl-form-control-group>\n    <vcl-form-control-group>\n      <vcl-label>Agility (<vcl-rating-item-label [target]="agilityRating"></vcl-rating-item-label>)</vcl-label>\n      <vcl-rating formControlName="agility" #agilityRating="vclRating">\n        <vcl-rating-item>1</vcl-rating-item>\n        <vcl-rating-item>2</vcl-rating-item>\n        <vcl-rating-item>3</vcl-rating-item>\n        <vcl-rating-item>4</vcl-rating-item>\n        <vcl-rating-item>5</vcl-rating-item>\n      </vcl-rating>\n    </vcl-form-control-group>\n    <vcl-form-control-group>\n      <vcl-label>Intelligence (<vcl-rating-item-label [target]="intelligenceRating"></vcl-rating-item-label>)</vcl-label>\n      <vcl-rating formControlName="intelligence" #intelligenceRating="vclRating">\n        <vcl-rating-item>1</vcl-rating-item>\n        <vcl-rating-item>2</vcl-rating-item>\n        <vcl-rating-item>3</vcl-rating-item>\n        <vcl-rating-item>4</vcl-rating-item>\n        <vcl-rating-item>5</vcl-rating-item>\n      </vcl-rating>\n    </vcl-form-control-group>\n    <vcl-hint *ngIf="!form.hasError(\'skills\') && skillPointsAvailable === 0">{{skillPoints}} of {{skillPointsMax}} skill points used</vcl-hint>\n    <vcl-hint-warning *ngIf="!form.hasError(\'skills\') && skillPointsAvailable > 0">{{skillPoints}} of {{skillPointsMax}} skill points used</vcl-hint-warning>\n    <vcl-hint-error *ngIf="form.hasError(\'skills\')">{{skillPoints}} of {{skillPointsMax}} skill points used</vcl-hint-error>\n  </fieldset>\n\n  <vcl-form-control-group>\n    <vcl-label>Perks</vcl-label>\n    <vcl-select placeholder="Select perks">\n      <vcl-select-list formControlName="perks"  selectionMode="multiple">\n        <vcl-select-list-item [value]="\'snakeeater\'">\n          Snake Eater\n          <vcl-sub-label>It gives you a 25% increase to your poison resistance.\t</vcl-sub-label>\n        </vcl-select-list-item>\n        <vcl-select-list-item [value]="\'swiftlearner\'">\n          Swift Learner\n          <vcl-sub-label>Swift Learner\tWhenever you gain experience, you\'ll receive 5% more experience per level of the perk.</vcl-sub-label>\n        </vcl-select-list-item>\n        <vcl-select-list-item [value]="\'toughness\'">\n          Toughness\n          <vcl-sub-label>It adds 10% to your general damage resistance per level.</vcl-sub-label>\n        </vcl-select-list-item>\n        <vcl-select-list-item [value]="\'explorer\'">\n          Explorer\n          <vcl-sub-label>You\'ll get more random encounters with this perk.</vcl-sub-label>\n        </vcl-select-list-item>\n      </vcl-select-list>\n    </vcl-select>\n    <vcl-hint-error error="perks">You must select two perks</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group [errorStateAgent]="termsErrorStateAgent">\n    <vcl-checkbox formControlName="terms" >\n      Agree to our terms\n    </vcl-checkbox>\n    <vcl-hint>Read the <a href="\'https://github.com/ng-vcl/ng-vcl\'" target="\'_blank\'">terms</a> to learn how we collect, use and share your data</vcl-hint>\n    <vcl-hint-error error="termsDisagree">You must agree to our Terms</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <div class="loose-button-group">\n    <button vcl-button type="submit" class="emphasized">Submit</button>\n    <button vcl-button type="button" (click)="onReset()">Reset</button>\n  </div>\n\n  <div class="value">\n    <h4>Form</h4>\n    <pre>status: {{ form.status }}</pre>\n    <pre>valid: {{ form.valid }}</pre>\n    <pre>dirty: {{ form.dirty }}</pre>\n    <pre>submitted: {{ form.submitted }}</pre>\n    <pre>touched: {{ form.touched }}</pre>\n    <pre>pristine: {{ form.pristine }}</pre>\n    <pre>errors: {{ form.errors | json }}</pre>\n    <pre>value: {{ form.value | json }}</pre>\n  </div>\n</form>\n'},1610:(g,s,t)=>{t.r(s),t.d(s,{default:()=>u});const u="import { Component, ViewChild, ViewEncapsulation } from '@angular/core';\nimport { UntypedFormGroup, Validators, AbstractControl, UntypedFormControl, NgForm } from '@angular/forms';\nimport { NotifierService, FormControlErrorStateAgent, LayerConfig, DateAdapter } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'demo.component.html',\n  styleUrls: ['demo.component.scss'],\n  encapsulation: ViewEncapsulation.None\n})\nexport class FormControlGroupDemoComponent {\n\n  constructor(private notifier: NotifierService, private da: DateAdapter) { }\n\n  @ViewChild('form')\n  form: NgForm;\n\n  datePattern = this.da.pattern('date');\n\n  skillPointsMax = 10;\n\n  defaultValues = {\n    level: 1,\n    leader: false,\n    hitpoints: 10,\n    strength: 3,\n    agility: 3,\n    intelligence: 3,\n    perks: []\n  };\n\n  formGroup = new UntypedFormGroup({\n    name: new UntypedFormControl('', [\n      Validators.required,\n      Validators.minLength(2),\n    ]),\n    description: new UntypedFormControl('', []),\n    dob: new UntypedFormControl(null, [\n      Validators.required\n    ]),\n    password: new UntypedFormControl('', [\n      Validators.required,\n      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}'),\n    ]),\n    picture: new UntypedFormControl(null, []),\n    level: new UntypedFormControl(this.defaultValues.level, []),\n    leader: new UntypedFormControl(this.defaultValues.leader, []),\n    email: new UntypedFormControl('', {\n      validators: [ Validators.email ],\n    }),\n    terms: new UntypedFormControl(false, [\n      (control) => {\n        if (!control.value) {\n          return {\n            termsDisagree: true,\n          };\n        }\n        return null;\n      }\n    ]),\n    gender: new UntypedFormControl(null, Validators.required),\n    class: new UntypedFormControl(null, [ Validators.required ]),\n    alignment: new UntypedFormControl(null, [ Validators.required ]),\n    hitpoints: new UntypedFormControl(this.defaultValues.hitpoints, [ Validators.min(1), Validators.max(100)]),\n    strength: new UntypedFormControl(this.defaultValues.strength, [ Validators.min(1), Validators.max(10)]),\n    agility: new UntypedFormControl(this.defaultValues.agility, [ Validators.min(1), Validators.max(10)]),\n    intelligence: new UntypedFormControl(this.defaultValues.intelligence, [ Validators.min(1), Validators.max(10)]),\n    perks: new UntypedFormControl(this.defaultValues.perks, [ this.validatePerks.bind(this) ])\n  },\n  [\n    this.validateSkills.bind(this)\n  ]);\n\n  get level() {\n    const c = this.formGroup && this.formGroup.get('level');\n    return c ? c.value : 0;\n  }\n\n  get skillPoints() {\n    const s = this.formGroup && this.formGroup.get('strength');\n    const a = this.formGroup && this.formGroup.get('agility');\n    const i = this.formGroup && this.formGroup.get('intelligence');\n    if (s && a && i) {\n      return s.value + a.value + i.value;\n    }\n    return 0;\n  }\n\n  get skillPointsAvailable() {\n    return this.skillPointsMax - this.skillPoints;\n  }\n\n  validateSkills() {\n    if ((this.skillPoints) > this.skillPointsMax) {\n      return {\n        skills: true\n      };\n    }\n    return null;\n  }\n\n  validatePerks(c: AbstractControl) {\n    return (Array.isArray(c.value) && c.value.length === 2) ? null : { perks: true };\n  }\n\n  // Show only if invalid and after submitted\n  termsErrorStateAgent: FormControlErrorStateAgent = (form?, ngControl?) => {\n    return form && ngControl && ngControl.invalid && form.submitted;\n  }\n\n  onSubmit() {\n    if (this.formGroup.valid) {\n      this.notifier.success('Hero created');\n    } else {\n     this.notifier.error('Hero invalid');\n    }\n  }\n\n  onReset() {\n    this.form.resetForm(this.defaultValues);\n    this.notifier.info('Hero reset');\n  }\n\n  helpLayerConfig: LayerConfig = {\n    maxWidth: '25em',\n  }\n}\n"}}]);