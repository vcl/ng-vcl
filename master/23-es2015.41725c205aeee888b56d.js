(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{EnUH:function(e,r,t){"use strict";t.r(r),r.default='<form novalidate [formGroup]="formGroup" #form="ngForm" style="max-width: 40em;" (submit)="onSubmit()" vclForm>\n  <h2>Create a hero</h2>\n\n  <ng-template [vclLayer]="{width: \'25em\'}" #help="vclLayer" let-header="header" let-text="text">\n    <vcl-panel-dialog>\n      <vcl-panel-title>{{header}}</vcl-panel-title>\n      {{text}}\n      <button vcl-button vclPanelFooterButton class="transparent outline" (click)="help.close()">OK</button>\n    </vcl-panel-dialog>\n  </ng-template> \n \n  <vcl-form-control-group>\n    <vcl-label>Name</vcl-label>\n    <div class="help-wrapper">\n      <vcl-input-field>\n        <input vclInput formControlName="name">\n      </vcl-input-field>\n      <button vcl-button square class="transparent" (click)="help.open({data: { header: \'Name\', text: \'The name of the hero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ad excepturi molestiae esse unde repellendus ex accusantium officia placeat voluptatem commodi et, laboriosam laudantium, cum, ratione debitis inventore? Esse, eaque!\'}})" type="button">\n        <vcl-icon class="scale130p" icon="vcl:info"></vcl-icon>\n      </button>\n    </div>\n    <vcl-hint-error error="required">Name is required</vcl-hint-error>\n    <vcl-hint-error error="minlength">Name must have a length of at least 2 characters</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Description</vcl-label>\n    <vcl-input-field>\n      <textarea vclInput formControlName="description" placeholder="Description of the hero" [autogrow]="true" [minRows]="3" [maxRows]="10"></textarea>\n    </vcl-input-field>\n  </vcl-form-control-group>\n\n  <div class="row gutterx-4">\n    <vcl-form-control-group class="flex">\n      <vcl-label>Date of Birth</vcl-label>\n      <vcl-datepicker formControlName="dob" [placeholder]="datePattern"></vcl-datepicker>\n      <vcl-hint-error error="required">Date of Birth is required</vcl-hint-error>\n    </vcl-form-control-group>\n  \n    <vcl-form-control-group class="flex">\n      <vcl-label>Email</vcl-label>\n      <vcl-input-field>\n        <vcl-icon icon="fas:envelope"></vcl-icon>\n        <input vclInput formControlName="email">\n      </vcl-input-field>\n      <vcl-hint-error error="required">Email is required</vcl-hint-error>\n      <vcl-hint-error error="email">Invalid Email address</vcl-hint-error>\n    </vcl-form-control-group>\n  </div>\n\n  \n  <vcl-form-control-group>\n    <vcl-label>Password</vcl-label>\n    <vcl-password-input>\n      <input vclInput formControlName="password" placeholder="Enter password">\n    </vcl-password-input>\n    <vcl-hint-error error="required">Password is required</vcl-hint-error>\n    <vcl-hint-error error="pattern">Password must... </vcl-hint-error>\n    <vcl-hint-error error="pattern">- have at least 8 characters in length</vcl-hint-error>\n    <vcl-hint-error error="pattern">- contain a lowercase letters</vcl-hint-error>\n    <vcl-hint-error error="pattern">- contain a uppercase letters</vcl-hint-error>\n    <vcl-hint-error error="pattern">- contain a number</vcl-hint-error>\n    <vcl-hint-error error="pattern">- contain a special character</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Level</vcl-label>\n    <demo-counter formControlName="level" [min]="1" [max]="10"></demo-counter>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group *ngIf="level >= 5">\n    <vcl-label>Leader</vcl-label>\n    <vcl-flip-switch formControlName="leader"></vcl-flip-switch>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Picture</vcl-label>\n    <vcl-file-input [multiple]="false" formControlName="picture">Picture of the hero</vcl-file-input>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Gender</vcl-label>\n    <vcl-radio-group formControlName="gender">\n      <vcl-radio-button value="m">\n        <vcl-icogram>Male<vcl-icon vclAppend icon="fas:mars"></vcl-icon></vcl-icogram>\n      </vcl-radio-button>\n      <vcl-radio-button value="f">\n        <vcl-icogram>Female<vcl-icon vclAppend icon="fas:venus"></vcl-icon></vcl-icogram>\n      </vcl-radio-button>\n      <vcl-radio-button value="g">\n        <vcl-icogram>Genderless<vcl-icon vclAppend icon="fas:genderless"></vcl-icon></vcl-icogram>\n      </vcl-radio-button>\n      <vcl-hint-error error="required">You must select a gender</vcl-hint-error>\n    </vcl-radio-group>\n\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Alignment</vcl-label>\n    <vcl-button-group formControlName="alignment">\n      <button vcl-button [value]="\'good\'">Good</button>\n      <button vcl-button [value]="\'neutral\'">Neutral</button>\n      <button vcl-button [value]="\'evil\'">Evil</button>\n    </vcl-button-group>\n    <vcl-hint-error error="required">You must select an alignment</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Class</vcl-label>\n    <vcl-select-list formControlName="class">\n      <vcl-select-list-item [value]="\'warrior\'">\n        Warrior\n      </vcl-select-list-item>\n      <vcl-select-list-item [value]="\'mage\'">\n        Mage\n      </vcl-select-list-item>\n      <vcl-select-list-item [value]="\'rogue\'">\n        Rogue\n      </vcl-select-list-item>\n    </vcl-select-list>\n    <vcl-hint-error error="required">You must select a class</vcl-hint-error>\n  </vcl-form-control-group>\n\n\n  <vcl-form-control-group>\n    <vcl-label>Hit points</vcl-label>\n    <vcl-slider formControlName="hitpoints" [min]="5" [max]="20" [scale]="16" [lock]="true"></vcl-slider>\n  </vcl-form-control-group>\n\n  <fieldset>\n    <legend>Skills</legend>\n    <vcl-form-control-group>\n      <vcl-label>Strength (<vcl-rating-item-label [target]="strengthRating"></vcl-rating-item-label>)</vcl-label>\n      <vcl-rating formControlName="strength" #strengthRating="vclRating">\n        <vcl-rating-item>1</vcl-rating-item>\n        <vcl-rating-item>2</vcl-rating-item>\n        <vcl-rating-item>3</vcl-rating-item>\n        <vcl-rating-item>4</vcl-rating-item>\n        <vcl-rating-item>5</vcl-rating-item>\n      </vcl-rating>\n    </vcl-form-control-group>\n    <vcl-form-control-group>\n      <vcl-label>Agility (<vcl-rating-item-label [target]="agilityRating"></vcl-rating-item-label>)</vcl-label>\n      <vcl-rating formControlName="agility" #agilityRating="vclRating">\n        <vcl-rating-item>1</vcl-rating-item>\n        <vcl-rating-item>2</vcl-rating-item>\n        <vcl-rating-item>3</vcl-rating-item>\n        <vcl-rating-item>4</vcl-rating-item>\n        <vcl-rating-item>5</vcl-rating-item>\n      </vcl-rating>\n    </vcl-form-control-group>\n    <vcl-form-control-group>\n      <vcl-label>Intelligence (<vcl-rating-item-label [target]="intelligenceRating"></vcl-rating-item-label>)</vcl-label>\n      <vcl-rating formControlName="intelligence" #intelligenceRating="vclRating">\n        <vcl-rating-item>1</vcl-rating-item>\n        <vcl-rating-item>2</vcl-rating-item>\n        <vcl-rating-item>3</vcl-rating-item>\n        <vcl-rating-item>4</vcl-rating-item>\n        <vcl-rating-item>5</vcl-rating-item>\n      </vcl-rating>\n    </vcl-form-control-group>\n    <vcl-hint *ngIf="!form.hasError(\'skills\') && skillPointsAvailable === 0">{{skillPoints}} of {{skillPointsMax}} skill points used</vcl-hint>\n    <vcl-hint-warning *ngIf="!form.hasError(\'skills\') && skillPointsAvailable > 0">{{skillPoints}} of {{skillPointsMax}} skill points used</vcl-hint-warning>\n    <vcl-hint-error *ngIf="form.hasError(\'skills\')">{{skillPoints}} of {{skillPointsMax}} skill points used</vcl-hint-error>\n  </fieldset>\n\n  <vcl-form-control-group>\n    <vcl-label>Perks</vcl-label>\n    <vcl-select placeholder="Select perks">\n      <vcl-select-list formControlName="perks"  selectionMode="multiple">\n        <vcl-select-list-item [value]="\'snakeeater\'">\n          Snake Eater\n          <vcl-sub-label>It gives you a 25% increase to your poison resistance.\t</vcl-sub-label>\n        </vcl-select-list-item>\n        <vcl-select-list-item [value]="\'swiftlearner\'">\n          Swift Learner\n          <vcl-sub-label>Swift Learner\tWhenever you gain experience, you\'ll receive 5% more experience per level of the perk.</vcl-sub-label>\n        </vcl-select-list-item>\n        <vcl-select-list-item [value]="\'toughness\'">\n          Toughness\n          <vcl-sub-label>It adds 10% to your general damage resistance per level.</vcl-sub-label>\n        </vcl-select-list-item>\n        <vcl-select-list-item [value]="\'explorer\'">\n          Explorer\n          <vcl-sub-label>You\'ll get more random encounters with this perk.</vcl-sub-label>\n        </vcl-select-list-item> \n      </vcl-select-list>\n    </vcl-select>\n    <vcl-hint-error error="perks">You must select two perks</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group [errorStateAgent]="termsErrorStateAgent">\n    <vcl-checkbox formControlName="terms" >\n      Agree to our terms\n    </vcl-checkbox>\n    <vcl-hint>Read the <a href="\'https://github.com/ng-vcl/ng-vcl\'" target="\'_blank\'">terms</a> to learn how we collect, use and share your data</vcl-hint>\n    <vcl-hint-error error="termsDisagree">You must agree to our Terms</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <div class="loose-button-group">\n    <button vcl-button type="submit" class="emphasized">Submit</button>\n    <button vcl-button type="button" (click)="onReset()">Reset</button>\n  </div>\n\n  <div class="value">\n    <h4>Form</h4>\n    <pre>status: {{ form.status }}</pre>\n    <pre>valid: {{ form.valid }}</pre>\n    <pre>dirty: {{ form.dirty }}</pre>\n    <pre>submitted: {{ form.submitted }}</pre>\n    <pre>touched: {{ form.touched }}</pre>\n    <pre>pristine: {{ form.pristine }}</pre>\n    <pre>errors: {{ form.errors | json }}</pre>\n    <pre>value: {{ form.value | json }}</pre>\n  </div>\n</form>\n  '},"Ey8+":function(e,r,t){"use strict";t.r(r),r.default="import { Component, ViewChild, ViewEncapsulation } from '@angular/core';\nimport { FormGroup, Validators, AbstractControl, FormControl, NgForm } from '@angular/forms';\nimport { NotifierService, FormControlErrorStateAgent, LayerConfig, DateAdapter } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'demo.component.html',\n  styleUrls: ['demo.component.scss'],\n  encapsulation: ViewEncapsulation.None\n})\nexport class FormControlGroupDemoComponent {\n\n  constructor(private notifier: NotifierService, private da: DateAdapter) { }\n\n  @ViewChild('form')\n  form: NgForm;\n\n  datePattern = this.da.pattern('date');\n\n  skillPointsMax = 10;\n\n  defaultValues = {\n    level: 1,\n    leader: false,\n    hitpoints: 10,\n    strength: 3,\n    agility: 3,\n    intelligence: 3,\n    perks: []\n  };\n\n  formGroup = new FormGroup({\n    name: new FormControl('', [\n      Validators.required,\n      Validators.minLength(2),\n    ]),\n    description: new FormControl('', []),\n    dob: new FormControl(null, [\n      Validators.required\n    ]),\n    password: new FormControl('', [\n      Validators.required,\n      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}'),\n    ]),\n    picture: new FormControl(null, []),\n    level: new FormControl(this.defaultValues.level, []),\n    leader: new FormControl(this.defaultValues.leader, []),\n    email: new FormControl('', [\n      Validators.email,\n    ]),\n    terms: new FormControl(false, [\n      (control) => {\n        if (!control.value) {\n          return {\n            termsDisagree: true,\n          };\n        }\n        return null;\n      }\n    ]),\n    gender: new FormControl(null, Validators.required),\n    class: new FormControl(null, [ Validators.required ]),\n    alignment: new FormControl(null, [ Validators.required ]),\n    hitpoints: new FormControl(this.defaultValues.hitpoints, [ Validators.min(1), Validators.max(100)]),\n    strength: new FormControl(this.defaultValues.strength, [ Validators.min(1), Validators.max(10)]),\n    agility: new FormControl(this.defaultValues.agility, [ Validators.min(1), Validators.max(10)]),\n    intelligence: new FormControl(this.defaultValues.intelligence, [ Validators.min(1), Validators.max(10)]),\n    perks: new FormControl(this.defaultValues.perks, [ this.validatePerks.bind(this) ])\n  }, [\n    this.validateSkills.bind(this)\n  ]);\n\n  get level() {\n    const c = this.formGroup && this.formGroup.get('level');\n    return c ? c.value : 0;\n  }\n\n  get skillPoints() {\n    const s = this.formGroup && this.formGroup.get('strength');\n    const a = this.formGroup && this.formGroup.get('agility');\n    const i = this.formGroup && this.formGroup.get('intelligence');\n    if (s && a && i) {\n      return s.value + a.value + i.value;\n    }\n    return 0;\n  }\n\n  get skillPointsAvailable() {\n    return this.skillPointsMax - this.skillPoints;\n  }\n\n  validateSkills() {\n    if ((this.skillPoints) > this.skillPointsMax) {\n      return {\n        skills: true\n      };\n    }\n    return null;\n  }\n\n  validatePerks(c: AbstractControl) {\n    return (Array.isArray(c.value) && c.value.length === 2) ? null : { perks: true };\n  }\n\n  // Show only if invalid and after submitted\n  termsErrorStateAgent: FormControlErrorStateAgent = (form?, ngControl?) => {\n    return form && ngControl && ngControl.invalid && form.submitted;\n  }\n\n  onSubmit() {\n    if (this.formGroup.valid) {\n      this.notifier.success('Hero created');\n    } else {\n     this.notifier.error('Hero invalid');\n    }\n  }\n\n  onReset() {\n    this.form.resetForm(this.defaultValues);\n    this.notifier.info('Hero reset');\n  }\n\n\n  helpLayerConfig: LayerConfig = {\n    maxWidth: '25em',\n  }\n}\n"},"L79/":function(e,r,t){"use strict";t.r(r),t.d(r,"demo",(function(){return Z})),t.d(r,"FormControlGroupDemoModule",(function(){return X}));var l=t("ofXK"),n=t("3Pt+"),o=t("tyNb"),i=t("19H1"),c=t("2FIb"),a=t("fXoL"),s=t("JuoG"),u=t("X9a5"),v=t("xsjC"),m=t("x1VK"),b=t("pKlR"),p=t("oZnf"),g=t("1/Kn"),d=t("6B8K"),f=t("9Rb9"),h=t("QI9E"),P=t("mo8z"),x=t("jPeI"),O=t("5gLr"),w=t("f0Vy"),k=t("DMRj"),y=t("EaCA"),C=t("btmi"),V=t("Vp9f"),F=t("ErXM"),N=t("zDo1"),A=t("StUX"),L=t("AS2X"),M=t("R+ME"),G=t("ySGC"),S=t("SQVY"),E=t("I9Sx"),R=t("AXxg"),I=t("s+0I"),q=t("yMTc"),D=t("TzFS");const K=["form"];function z(e,r){if(1&e){const e=a.Qb();a.Pb(0,"vcl-panel-dialog"),a.Pb(1,"vcl-panel-title"),a.xc(2),a.Ob(),a.xc(3),a.Pb(4,"button",52),a.Wb("click",(function(){return a.lc(e),a.Zb(),a.kc(5).close()})),a.xc(5,"OK"),a.Ob(),a.Ob()}if(2&e){const e=r.header,t=r.text;a.yb(2),a.yc(e),a.yb(1),a.zc(" ",t," ")}}function H(e,r){1&e&&(a.Pb(0,"vcl-form-control-group"),a.Pb(1,"vcl-label"),a.xc(2,"Leader"),a.Ob(),a.Kb(3,"vcl-flip-switch",53),a.Ob())}function Y(e,r){if(1&e&&(a.Pb(0,"vcl-hint"),a.xc(1),a.Ob()),2&e){const e=a.Zb();a.yb(1),a.Ac("",e.skillPoints," of ",e.skillPointsMax," skill points used")}}function j(e,r){if(1&e&&(a.Pb(0,"vcl-hint-warning"),a.xc(1),a.Ob()),2&e){const e=a.Zb();a.yb(1),a.Ac("",e.skillPoints," of ",e.skillPointsMax," skill points used")}}function B(e,r){if(1&e&&(a.Pb(0,"vcl-hint-error"),a.xc(1),a.Ob()),2&e){const e=a.Zb();a.yb(1),a.Ac("",e.skillPoints," of ",e.skillPointsMax," skill points used")}}const T=function(){return{width:"25em"}};let W=(()=>{class e{constructor(e,r){this.notifier=e,this.da=r,this.datePattern=this.da.pattern("date"),this.skillPointsMax=10,this.defaultValues={level:1,leader:!1,hitpoints:10,strength:3,agility:3,intelligence:3,perks:[]},this.formGroup=new n.j({name:new n.g("",[n.F.required,n.F.minLength(2)]),description:new n.g("",[]),dob:new n.g(null,[n.F.required]),password:new n.g("",[n.F.required,n.F.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]),picture:new n.g(null,[]),level:new n.g(this.defaultValues.level,[]),leader:new n.g(this.defaultValues.leader,[]),email:new n.g("",[n.F.email]),terms:new n.g(!1,[e=>e.value?null:{termsDisagree:!0}]),gender:new n.g(null,n.F.required),class:new n.g(null,[n.F.required]),alignment:new n.g(null,[n.F.required]),hitpoints:new n.g(this.defaultValues.hitpoints,[n.F.min(1),n.F.max(100)]),strength:new n.g(this.defaultValues.strength,[n.F.min(1),n.F.max(10)]),agility:new n.g(this.defaultValues.agility,[n.F.min(1),n.F.max(10)]),intelligence:new n.g(this.defaultValues.intelligence,[n.F.min(1),n.F.max(10)]),perks:new n.g(this.defaultValues.perks,[this.validatePerks.bind(this)])},[this.validateSkills.bind(this)]),this.termsErrorStateAgent=(e,r)=>e&&r&&r.invalid&&e.submitted,this.helpLayerConfig={maxWidth:"25em"}}get level(){const e=this.formGroup&&this.formGroup.get("level");return e?e.value:0}get skillPoints(){const e=this.formGroup&&this.formGroup.get("strength"),r=this.formGroup&&this.formGroup.get("agility"),t=this.formGroup&&this.formGroup.get("intelligence");return e&&r&&t?e.value+r.value+t.value:0}get skillPointsAvailable(){return this.skillPointsMax-this.skillPoints}validateSkills(){return this.skillPoints>this.skillPointsMax?{skills:!0}:null}validatePerks(e){return Array.isArray(e.value)&&2===e.value.length?null:{perks:!0}}onSubmit(){this.formGroup.valid?this.notifier.success("Hero created"):this.notifier.error("Hero invalid")}onReset(){this.form.resetForm(this.defaultValues),this.notifier.info("Hero reset")}}return e.\u0275fac=function(r){return new(r||e)(a.Jb(i.NotifierService),a.Jb(i.DateAdapter))},e.\u0275cmp=a.Db({type:e,selectors:[["ng-component"]],viewQuery:function(e,r){var t;1&e&&a.Bc(K,!0),2&e&&a.jc(t=a.Xb())&&(r.form=t.first)},decls:231,vars:44,consts:[["novalidate","","vclForm","",2,"max-width","40em",3,"formGroup","submit"],["form","ngForm"],[3,"vclLayer"],["help","vclLayer"],[1,"help-wrapper"],["vclInput","","formControlName","name"],["vcl-button","","square","","type","button",1,"transparent",3,"click"],["icon","vcl:info",1,"scale130p"],["error","required"],["error","minlength"],["vclInput","","formControlName","description","placeholder","Description of the hero",3,"autogrow","minRows","maxRows"],[1,"row","gutterx-4"],[1,"flex"],["formControlName","dob",3,"placeholder"],["icon","fas:envelope"],["vclInput","","formControlName","email"],["error","email"],["vclInput","","formControlName","password","placeholder","Enter password"],["error","pattern"],["formControlName","level",3,"min","max"],[4,"ngIf"],["formControlName","picture",3,"multiple"],["formControlName","gender"],["value","m"],["vclAppend","","icon","fas:mars"],["value","f"],["vclAppend","","icon","fas:venus"],["value","g"],["vclAppend","","icon","fas:genderless"],["formControlName","alignment"],["vcl-button","",3,"value"],["formControlName","class"],[3,"value"],["formControlName","hitpoints",3,"min","max","scale","lock"],[3,"target"],["formControlName","strength"],["strengthRating","vclRating"],["formControlName","agility"],["agilityRating","vclRating"],["formControlName","intelligence"],["intelligenceRating","vclRating"],["placeholder","Select perks"],["formControlName","perks","selectionMode","multiple"],["error","perks"],[3,"errorStateAgent"],["formControlName","terms"],["href","'https://github.com/ng-vcl/ng-vcl'","target","'_blank'"],["error","termsDisagree"],[1,"loose-button-group"],["vcl-button","","type","submit",1,"emphasized"],["vcl-button","","type","button",3,"click"],[1,"value"],["vcl-button","","vclPanelFooterButton","",1,"transparent","outline",3,"click"],["formControlName","leader"]],template:function(e,r){if(1&e){const e=a.Qb();a.Pb(0,"form",0,1),a.Wb("submit",(function(){return r.onSubmit()})),a.Pb(2,"h2"),a.xc(3,"Create a hero"),a.Ob(),a.vc(4,z,6,2,"ng-template",2,3,a.wc),a.Pb(6,"vcl-form-control-group"),a.Pb(7,"vcl-label"),a.xc(8,"Name"),a.Ob(),a.Pb(9,"div",4),a.Pb(10,"vcl-input-field"),a.Kb(11,"input",5),a.Ob(),a.Pb(12,"button",6),a.Wb("click",(function(){return a.lc(e),a.kc(5).open({data:{header:"Name",text:"The name of the hero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ad excepturi molestiae esse unde repellendus ex accusantium officia placeat voluptatem commodi et, laboriosam laudantium, cum, ratione debitis inventore? Esse, eaque!"}})})),a.Kb(13,"vcl-icon",7),a.Ob(),a.Ob(),a.Pb(14,"vcl-hint-error",8),a.xc(15,"Name is required"),a.Ob(),a.Pb(16,"vcl-hint-error",9),a.xc(17,"Name must have a length of at least 2 characters"),a.Ob(),a.Ob(),a.Pb(18,"vcl-form-control-group"),a.Pb(19,"vcl-label"),a.xc(20,"Description"),a.Ob(),a.Pb(21,"vcl-input-field"),a.Kb(22,"textarea",10),a.Ob(),a.Ob(),a.Pb(23,"div",11),a.Pb(24,"vcl-form-control-group",12),a.Pb(25,"vcl-label"),a.xc(26,"Date of Birth"),a.Ob(),a.Kb(27,"vcl-datepicker",13),a.Pb(28,"vcl-hint-error",8),a.xc(29,"Date of Birth is required"),a.Ob(),a.Ob(),a.Pb(30,"vcl-form-control-group",12),a.Pb(31,"vcl-label"),a.xc(32,"Email"),a.Ob(),a.Pb(33,"vcl-input-field"),a.Kb(34,"vcl-icon",14),a.Kb(35,"input",15),a.Ob(),a.Pb(36,"vcl-hint-error",8),a.xc(37,"Email is required"),a.Ob(),a.Pb(38,"vcl-hint-error",16),a.xc(39,"Invalid Email address"),a.Ob(),a.Ob(),a.Ob(),a.Pb(40,"vcl-form-control-group"),a.Pb(41,"vcl-label"),a.xc(42,"Password"),a.Ob(),a.Pb(43,"vcl-password-input"),a.Kb(44,"input",17),a.Ob(),a.Pb(45,"vcl-hint-error",8),a.xc(46,"Password is required"),a.Ob(),a.Pb(47,"vcl-hint-error",18),a.xc(48,"Password must... "),a.Ob(),a.Pb(49,"vcl-hint-error",18),a.xc(50,"- have at least 8 characters in length"),a.Ob(),a.Pb(51,"vcl-hint-error",18),a.xc(52,"- contain a lowercase letters"),a.Ob(),a.Pb(53,"vcl-hint-error",18),a.xc(54,"- contain a uppercase letters"),a.Ob(),a.Pb(55,"vcl-hint-error",18),a.xc(56,"- contain a number"),a.Ob(),a.Pb(57,"vcl-hint-error",18),a.xc(58,"- contain a special character"),a.Ob(),a.Ob(),a.Pb(59,"vcl-form-control-group"),a.Pb(60,"vcl-label"),a.xc(61,"Level"),a.Ob(),a.Kb(62,"demo-counter",19),a.Ob(),a.vc(63,H,4,0,"vcl-form-control-group",20),a.Pb(64,"vcl-form-control-group"),a.Pb(65,"vcl-label"),a.xc(66,"Picture"),a.Ob(),a.Pb(67,"vcl-file-input",21),a.xc(68,"Picture of the hero"),a.Ob(),a.Ob(),a.Pb(69,"vcl-form-control-group"),a.Pb(70,"vcl-label"),a.xc(71,"Gender"),a.Ob(),a.Pb(72,"vcl-radio-group",22),a.Pb(73,"vcl-radio-button",23),a.Pb(74,"vcl-icogram"),a.xc(75,"Male"),a.Kb(76,"vcl-icon",24),a.Ob(),a.Ob(),a.Pb(77,"vcl-radio-button",25),a.Pb(78,"vcl-icogram"),a.xc(79,"Female"),a.Kb(80,"vcl-icon",26),a.Ob(),a.Ob(),a.Pb(81,"vcl-radio-button",27),a.Pb(82,"vcl-icogram"),a.xc(83,"Genderless"),a.Kb(84,"vcl-icon",28),a.Ob(),a.Ob(),a.Pb(85,"vcl-hint-error",8),a.xc(86,"You must select a gender"),a.Ob(),a.Ob(),a.Ob(),a.Pb(87,"vcl-form-control-group"),a.Pb(88,"vcl-label"),a.xc(89,"Alignment"),a.Ob(),a.Pb(90,"vcl-button-group",29),a.Pb(91,"button",30),a.xc(92,"Good"),a.Ob(),a.Pb(93,"button",30),a.xc(94,"Neutral"),a.Ob(),a.Pb(95,"button",30),a.xc(96,"Evil"),a.Ob(),a.Ob(),a.Pb(97,"vcl-hint-error",8),a.xc(98,"You must select an alignment"),a.Ob(),a.Ob(),a.Pb(99,"vcl-form-control-group"),a.Pb(100,"vcl-label"),a.xc(101,"Class"),a.Ob(),a.Pb(102,"vcl-select-list",31),a.Pb(103,"vcl-select-list-item",32),a.xc(104," Warrior "),a.Ob(),a.Pb(105,"vcl-select-list-item",32),a.xc(106," Mage "),a.Ob(),a.Pb(107,"vcl-select-list-item",32),a.xc(108," Rogue "),a.Ob(),a.Ob(),a.Pb(109,"vcl-hint-error",8),a.xc(110,"You must select a class"),a.Ob(),a.Ob(),a.Pb(111,"vcl-form-control-group"),a.Pb(112,"vcl-label"),a.xc(113,"Hit points"),a.Ob(),a.Kb(114,"vcl-slider",33),a.Ob(),a.Pb(115,"fieldset"),a.Pb(116,"legend"),a.xc(117,"Skills"),a.Ob(),a.Pb(118,"vcl-form-control-group"),a.Pb(119,"vcl-label"),a.xc(120,"Strength ("),a.Kb(121,"vcl-rating-item-label",34),a.xc(122,")"),a.Ob(),a.Pb(123,"vcl-rating",35,36),a.Pb(125,"vcl-rating-item"),a.xc(126,"1"),a.Ob(),a.Pb(127,"vcl-rating-item"),a.xc(128,"2"),a.Ob(),a.Pb(129,"vcl-rating-item"),a.xc(130,"3"),a.Ob(),a.Pb(131,"vcl-rating-item"),a.xc(132,"4"),a.Ob(),a.Pb(133,"vcl-rating-item"),a.xc(134,"5"),a.Ob(),a.Ob(),a.Ob(),a.Pb(135,"vcl-form-control-group"),a.Pb(136,"vcl-label"),a.xc(137,"Agility ("),a.Kb(138,"vcl-rating-item-label",34),a.xc(139,")"),a.Ob(),a.Pb(140,"vcl-rating",37,38),a.Pb(142,"vcl-rating-item"),a.xc(143,"1"),a.Ob(),a.Pb(144,"vcl-rating-item"),a.xc(145,"2"),a.Ob(),a.Pb(146,"vcl-rating-item"),a.xc(147,"3"),a.Ob(),a.Pb(148,"vcl-rating-item"),a.xc(149,"4"),a.Ob(),a.Pb(150,"vcl-rating-item"),a.xc(151,"5"),a.Ob(),a.Ob(),a.Ob(),a.Pb(152,"vcl-form-control-group"),a.Pb(153,"vcl-label"),a.xc(154,"Intelligence ("),a.Kb(155,"vcl-rating-item-label",34),a.xc(156,")"),a.Ob(),a.Pb(157,"vcl-rating",39,40),a.Pb(159,"vcl-rating-item"),a.xc(160,"1"),a.Ob(),a.Pb(161,"vcl-rating-item"),a.xc(162,"2"),a.Ob(),a.Pb(163,"vcl-rating-item"),a.xc(164,"3"),a.Ob(),a.Pb(165,"vcl-rating-item"),a.xc(166,"4"),a.Ob(),a.Pb(167,"vcl-rating-item"),a.xc(168,"5"),a.Ob(),a.Ob(),a.Ob(),a.vc(169,Y,2,2,"vcl-hint",20),a.vc(170,j,2,2,"vcl-hint-warning",20),a.vc(171,B,2,2,"vcl-hint-error",20),a.Ob(),a.Pb(172,"vcl-form-control-group"),a.Pb(173,"vcl-label"),a.xc(174,"Perks"),a.Ob(),a.Pb(175,"vcl-select",41),a.Pb(176,"vcl-select-list",42),a.Pb(177,"vcl-select-list-item",32),a.xc(178," Snake Eater "),a.Pb(179,"vcl-sub-label"),a.xc(180,"It gives you a 25% increase to your poison resistance.\t"),a.Ob(),a.Ob(),a.Pb(181,"vcl-select-list-item",32),a.xc(182," Swift Learner "),a.Pb(183,"vcl-sub-label"),a.xc(184,"Swift Learner\tWhenever you gain experience, you'll receive 5% more experience per level of the perk."),a.Ob(),a.Ob(),a.Pb(185,"vcl-select-list-item",32),a.xc(186," Toughness "),a.Pb(187,"vcl-sub-label"),a.xc(188,"It adds 10% to your general damage resistance per level."),a.Ob(),a.Ob(),a.Pb(189,"vcl-select-list-item",32),a.xc(190," Explorer "),a.Pb(191,"vcl-sub-label"),a.xc(192,"You'll get more random encounters with this perk."),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(193,"vcl-hint-error",43),a.xc(194,"You must select two perks"),a.Ob(),a.Ob(),a.Pb(195,"vcl-form-control-group",44),a.Pb(196,"vcl-checkbox",45),a.xc(197," Agree to our terms "),a.Ob(),a.Pb(198,"vcl-hint"),a.xc(199,"Read the "),a.Pb(200,"a",46),a.xc(201,"terms"),a.Ob(),a.xc(202," to learn how we collect, use and share your data"),a.Ob(),a.Pb(203,"vcl-hint-error",47),a.xc(204,"You must agree to our Terms"),a.Ob(),a.Ob(),a.Pb(205,"div",48),a.Pb(206,"button",49),a.xc(207,"Submit"),a.Ob(),a.Pb(208,"button",50),a.Wb("click",(function(){return r.onReset()})),a.xc(209,"Reset"),a.Ob(),a.Ob(),a.Pb(210,"div",51),a.Pb(211,"h4"),a.xc(212,"Form"),a.Ob(),a.Pb(213,"pre"),a.xc(214),a.Ob(),a.Pb(215,"pre"),a.xc(216),a.Ob(),a.Pb(217,"pre"),a.xc(218),a.Ob(),a.Pb(219,"pre"),a.xc(220),a.Ob(),a.Pb(221,"pre"),a.xc(222),a.Ob(),a.Pb(223,"pre"),a.xc(224),a.Ob(),a.Pb(225,"pre"),a.xc(226),a.ac(227,"json"),a.Ob(),a.Pb(228,"pre"),a.xc(229),a.ac(230,"json"),a.Ob(),a.Ob(),a.Ob()}if(2&e){const e=a.kc(1),t=a.kc(124),l=a.kc(141),n=a.kc(158);a.fc("formGroup",r.formGroup),a.yb(4),a.fc("vclLayer",a.gc(43,T)),a.yb(18),a.fc("autogrow",!0)("minRows",3)("maxRows",10),a.yb(5),a.fc("placeholder",r.datePattern),a.yb(35),a.fc("min",1)("max",10),a.yb(1),a.fc("ngIf",r.level>=5),a.yb(4),a.fc("multiple",!1),a.yb(24),a.fc("value","good"),a.yb(2),a.fc("value","neutral"),a.yb(2),a.fc("value","evil"),a.yb(8),a.fc("value","warrior"),a.yb(2),a.fc("value","mage"),a.yb(2),a.fc("value","rogue"),a.yb(7),a.fc("min",5)("max",20)("scale",16)("lock",!0),a.yb(7),a.fc("target",t),a.yb(17),a.fc("target",l),a.yb(17),a.fc("target",n),a.yb(14),a.fc("ngIf",!e.hasError("skills")&&0===r.skillPointsAvailable),a.yb(1),a.fc("ngIf",!e.hasError("skills")&&r.skillPointsAvailable>0),a.yb(1),a.fc("ngIf",e.hasError("skills")),a.yb(6),a.fc("value","snakeeater"),a.yb(4),a.fc("value","swiftlearner"),a.yb(4),a.fc("value","toughness"),a.yb(4),a.fc("value","explorer"),a.yb(6),a.fc("errorStateAgent",r.termsErrorStateAgent),a.yb(19),a.zc("status: ",e.status,""),a.yb(2),a.zc("valid: ",e.valid,""),a.yb(2),a.zc("dirty: ",e.dirty,""),a.yb(2),a.zc("submitted: ",e.submitted,""),a.yb(2),a.zc("touched: ",e.touched,""),a.yb(2),a.zc("pristine: ",e.pristine,""),a.yb(2),a.zc("errors: ",a.bc(227,39,e.errors),""),a.yb(3),a.zc("value: ",a.bc(230,41,e.value),"")}},directives:[n.H,n.s,s.a,n.k,u.a,v.a,m.a,b.a,p.a,g.a,n.c,n.r,n.i,d.b,f.a,h.b,P.a,x.a,O.a,w.a,l.t,k.a,y.a,C.a,V.a,F.a,N.a,A.a,L.a,M.a,G.a,S.b,E.a,b.b,R.a,h.a,I.a,q.a,q.e,q.b,D.a],pipes:[l.k],styles:[".help-wrapper{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between}.help-wrapper>:first-child{flex:0 0 90%}"],encapsulation:2}),e})();function Z(){return{label:"Form Control Group",tabs:{Demo:W,"README.md":{type:"md",content:'# vcl-form-control-group\n\nForm control group to handle the error-state of form controls\n\n## Usage\n\n```js\nimport { VCLFormControlGroupModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLFormControlGroupModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<form vclForm [formGroup]="formGroup">\n  <vcl-form-control-group>\n    <vcl-label>Name</vcl-label>\n    <vcl-input-field>\n      <input formControlName="name">\n    </vcl-input-field>\n    <vcl-hint-error error="required">Name is required</vcl-hint-error>\n    <vcl-hint-error error="minlength">Name must have a length of at least 2 characters</vcl-hint-error>\n  </vcl-form-control-group>\n</form>\n```\n'},"demo.component.html":{type:"html",content:t("EnUH")},"demo.component.ts":{type:"ts",content:t("Ey8+")}}}}let X=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(r){return new(r||e)},imports:[[l.c,n.m,n.B,c.b,w.b,i.VCLButtonModule,i.VCLButtonGroupModule,i.VCLInputModule,i.VCLPasswordInputModule,i.VCLRatingModule,i.VCLFileInputModule,i.VCLLayerModule,i.VCLFlipSwitchModule,i.VCLIconModule,i.VCLPanelModule,i.VCLCheckboxModule,i.VCLIcogramModule,i.VCLRadioButtonModule,i.VCLSliderModule,i.VCLSelectModule,i.VCLTokenModule,i.VCLTooltipModule,i.VCLNotifierModule,i.VCLDatepickerModule,i.VCLFormControlGroupModule,o.g.forChild([{path:"",component:c.a,data:{demo:Z}}])]]}),e})()}}]);