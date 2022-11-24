"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[186],{3186:(c,l,a)=>{a.r(l),a.d(l,{VCLJssFormDemoModule:()=>v,demo:()=>A});var i=a(6895),s=a(433),S=a(4629),o=a(7074),F=a(9155),x=a(6451),k=a(4004),e=a(4650),I=a(7768),L=a(3058);const P=["heroForm"];function E(u,t){if(1&u&&(e.TgZ(0,"div",4)(1,"h4"),e._uU(2,"Form"),e.qZA(),e.TgZ(3,"pre"),e._uU(4),e.ALo(5,"json"),e.qZA()()),2&u){const r=t.ngIf;e.xp6(4),e.Oqu(e.lcZ(5,1,r))}}class h{static#e=this.\u0275fac=function(r){return new(r||h)};static#n=this.\u0275cmp=e.Xpm({type:h,selectors:[["demo-empty-component"]],decls:2,vars:1,template:function(r,n){1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r&&(e.xp6(1),e.Oqu(n.data))},encapsulation:2})}class f{constructor(t,r){this.notifier=t,this.da=r,this._disabled=!1}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.ngOnInit()}ngOnInit(){this.heroSchema=function V(u,t,r){return{type:"form",fields:[{name:"name",type:"input",label:"Name",params:{placeholder:"The hero's name",autocomplete:"off"},validators:[s.kI.required,s.kI.minLength(2)],required:!0,help:{title:"Help title",text:"Help text"},hints:[{type:"error",error:"required",message:"Name is required"},{type:"error",error:"minlength",message:"Name must have a length of at least 2 characters"}],disabled:t},{type:"textarea",name:"description",label:"Description",params:{placeholder:"The hero's Description"},disabled:t},{type:"date-picker",name:"dob",label:"Date of Birth",params:{placeholder:u.datePickerPlaceholder},help:{title:"Date of Birth title",text:"Date of Birth text",confirmButtonLabel:"Confirm",layerWidth:"15em",icon:"vcl:question"},disabled:t},{type:"password-input",name:"password",label:"Password",params:{placeholder:"Enter password"},validators:[s.kI.required,s.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")],hints:[{type:"error",error:"required",message:"Password is required"},{type:"error",error:"pattern",message:"Password must..."},{type:"error",error:"pattern",message:"- At least 8 characters in length"},{type:"error",error:"pattern",message:"- Contain a lowercase letters"},{type:"error",error:"pattern",message:"- Contain a uppercase letters"},{type:"error",error:"pattern",message:"- Contain a number"},{type:"error",error:"pattern",message:"- Contain a special character"}],disabled:t},{type:"counter",name:"level",label:"Level",defaultValue:1,params:{min:1,max:10},disabled:t},{type:"switch",name:"leader",label:"Leader",defaultValue:!1,visible:(0,o.u7J)(["level"],n=>n.value>=5),validators:[n=>n.value?null:{leader:!0}],params:{offLabel:"No",onLabel:"Yes"},disabled:t},{type:"file-input",name:"picture",label:"Picture",params:{multiple:!1,placeholder:"Picture of the hero"},disabled:t},{type:"input",params:{prependedIcon:"mdi:email"},name:"email",label:"Email",validators:[s.kI.required,s.kI.email],required:!0,hints:[{type:"error",error:"required",message:"Email is required"},{type:"error",error:"email",message:"Invalid Email address"}],disabled:t},{type:"radio-group",name:"gender",label:"Gender",defaultValue:"m",params:{options:[{label:"Male",value:"m"},{label:"Female",value:"f"},{label:"Genderless",value:"g"}]},disabled:t},{type:"button-group",name:"alignment",label:"Alignment",params:{options:[{label:"Good",value:1},{label:"Neutral",value:0},{label:"Evil",value:-1}]},disabled:t},{type:"hidden",name:"language",defaultValue:navigator.language},{type:"select-list",name:"class",label:"Class",defaultValue:null,params:{options:[{label:"Warrior",value:"warrior"},{label:"Mage",value:"mage"},{label:"Rogue",value:"rogue"}]},disabled:t},{type:"slider",name:"hitpoints",label:"Hit Points",defaultValue:15,disabled:(0,o.u7J)(["class"],n=>!n.value),params:(0,o.u7J)(["class"],n=>"rogue"===n.value?{min:8,max:18,scale:11,lock:!0}:"mage"===n.value?{min:5,max:15,scale:11,lock:!0}:{min:10,max:20,scale:11,lock:!0})},{type:"object",name:"skills",layout:"fieldset",label:"Skills",fields:[{type:"rating",name:"strength",defaultValue:3,params:{items:["1","2","3","4","5"],valueLabel:n=>`Strength (${n})`},disabled:t},{type:"rating",name:"agility",defaultValue:3,params:{items:["1","2","3","4","5"],valueLabel:n=>`Agility (${n})`},disabled:t},{type:"rating",name:"intelligence",defaultValue:3,params:{items:["1","2","3","4","5"],valueLabel:n=>`Intelligence (${n})`},disabled:t}],validators:[n=>{const m=n.get("strength"),p=n.get("agility"),d=n.get("intelligence");return(m&&p&&d?m.value+p.value+d.value:0)>10?{skills:!0}:null}],hints:[(0,o.u7J)(["skills","skills.strength","skills.agility","skills.intelligence"],(n,m,p,d)=>{const b=m&&p&&d?m.value+p.value+d.value:0,y=`${b} of 10 skill points used`;return n.hasError("skills")?{type:"error",message:y}:10-b>0?{type:"warning",message:y}:{type:"default",message:y}})],disabled:t},{type:"token",name:"attributes",label:"Attributes (Tokens)",params:{autocomplete:"off"},hints:[{type:"default",message:"Press enter to add attribute"},{type:"error",error:"minLength",message:"Minimum length is 2"}],validators:[n=>Array.isArray(n.value)&&n.value.length>1?null:{minLength:!0}],disabled:t},{type:"select",name:"perks",label:"Perks",params:{clearable:!0,placeholder:"Select perks",selectionMode:"multiple",search:!0,emptyComponent:{component:r,data:"No skills found!"},options:[{label:"Snake Eater",sublabel:"It gives you a 25% increase to your poison resistance.",value:"snakeeater"},{label:"Swift Learner",sublabel:"Swift Learner\tWhenever you gain experience, you'll receive 5% more experience per level of the perk.",value:"swiftlearner"},{label:"Toughness",sublabel:"It adds 10% to your general damage resistance per level.",value:"toughness"},{label:"Explorer",sublabel:"You'll get more random encounters with this perk.",value:"explorer"}]},validators:[n=>n.value&&Array.isArray(n.value)&&2===n.value.length?null:{perks:!0}],hints:[{type:"error",error:"perks",message:"You must select two perks"}],disabled:t},{type:"array",name:"items",label:"Items",initialFields:0,fieldLabel:n=>"Item "+(n+1),noFieldsLabel:"No items",field:{type:"object",name:"item_object",fields:[{type:"input",name:"item_name",label:"Name",validators:[s.kI.required],required:!0,hints:[{type:"error",error:"required",message:"Item name is required"}],disabled:t},{type:"input",name:"item_quantity",label:"Quantity",params:{inputType:"number",spinner:!0},validators:[s.kI.required,s.kI.min(1),s.kI.max(10)],required:!0,hints:[{type:"error",error:"required",message:"Item quantity is required"},{type:"error",error:"min",message:"Minimum is 1"},{type:"error",error:"max",message:"Maximum is 10"}],disabled:t}]},disabled:t},{type:"checkbox",name:"terms",label:"Agree to our terms",validators:[n=>n.value?null:{termsDisagree:!0}],hints:[{type:"default",message:"Read the terms to learn how we collect, use and share your data"},{type:"error",error:"termsDisagree",message:"You must agree to our Terms"}],errorStateAgent:(n,m)=>m.control.invalid&&n.submitted,disabled:t},{type:"buttons",buttons:[{type:"submit",label:"Submit",class:"emphasized",appIcon:"fas:arrow-circle-right",disabled:t},{type:"button",label:"Reset",action:"reset",disabled:t}]}]}}({datePickerPlaceholder:this.da.pattern("date")},this.disabled,h)}onSubmit(){this.heroForm.form.valid?this.notifier.success("Hero created"):this.notifier.error("Hero invalid")}onAction(t){"reset"===t&&this.heroForm.form&&(this.heroForm.form.resetForm(this.heroForm.defaultValue),this.notifier.info("Hero reset"))}ngAfterViewInit(){this.state$=(0,x.T)(this.heroForm.form.statusChanges,this.heroForm.form.valueChanges,this.heroForm.form.ngSubmit).pipe((0,k.U)(()=>({status:this.heroForm.form.status,valid:this.heroForm.form.valid,dirty:this.heroForm.form.dirty,submitted:this.heroForm.form.submitted,touched:this.heroForm.form.touched,pristine:this.heroForm.form.pristine,errors:this.heroForm.form.errors,value:this.heroForm.form.value})))}static#e=this.\u0275fac=function(r){return new(r||f)(e.Y36(o.lGB),e.Y36(o._AI))};static#n=this.\u0275cmp=e.Xpm({type:f,selectors:[["ng-component"]],viewQuery:function(r,n){if(1&r&&e.Gf(P,5),2&r){let m;e.iGM(m=e.CRH())&&(n.heroForm=m.first)}},decls:9,vars:5,consts:[[3,"value","valueChange"],["autocomplete","off",2,"max-width","40em",3,"schema","formSubmit","formAction"],["heroForm","vclJssForm"],["class","value",4,"ngIf"],[1,"value"]],template:function(r,n){1&r&&(e.TgZ(0,"h2"),e._uU(1,"Disable all inputs"),e.qZA(),e.TgZ(2,"vcl-flip-switch",0),e.NdJ("valueChange",function(p){return n.disabled=p}),e.qZA(),e.TgZ(3,"h2"),e._uU(4,"Create a hero"),e.qZA(),e.TgZ(5,"vcl-jss-form",1,2),e.NdJ("formSubmit",function(){return n.onSubmit()})("formAction",function(p){return n.onAction(p)}),e.qZA(),e.YNc(7,E,6,3,"div",3),e.ALo(8,"async")),2&r&&(e.xp6(2),e.Q6J("value",n.disabled),e.xp6(3),e.Q6J("schema",n.heroSchema),e.xp6(2),e.Q6J("ngIf",e.lcZ(8,3,n.state$)))},dependencies:[i.O5,I.B,L.H,i.Ov,i.Ts],encapsulation:2})}var C=a(8565),q=a(5550),T=a(2007);function w(u,t){if(1&u&&(e.TgZ(0,"vcl-label"),e._uU(1),e.qZA()),2&u){const r=e.oxw(2);e.xp6(1),e.Oqu(r.field.label)}}function D(u,t){if(1&u&&(e.TgZ(0,"vcl-form-control-group"),e.YNc(1,w,2,1,"vcl-label",0),e._UZ(2,"demo-counter",1),e.qZA()),2&u){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",!!r.field.label),e.xp6(1),e.Q6J("formControl",r.field.control)("min",r.field.params.min)("max",r.field.params.max)}}class g{constructor(t){this.field=t}static#e=this.\u0275fac=function(r){return new(r||g)(e.Y36(o.RKq))};static#n=this.\u0275cmp=e.Xpm({type:g,selectors:[["ng-component"]],decls:1,vars:1,consts:[[4,"ngIf"],[3,"formControl","min","max"]],template:function(r,n){1&r&&e.YNc(0,D,3,4,"vcl-form-control-group",0),2&r&&e.Q6J("ngIf",n.field.visible)},dependencies:[i.O5,s.JJ,s.oH,C.R,q.o,T.q8],encapsulation:2})}function A(){return{label:"JSS-Form",tabs:{Demo:f,"README.md":{type:"md",content:"# vcl-jss-form\n\nCreates a html-form from a provided schema.\n\n## Usage\n\n```ts\nimport { VCLJssFormModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLJssFormModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-jss-form [schema]=\"mySchema\" (formSubmit)=\"onSubmit($event)\" (formAction)=\"onAction($event)\" ></vcl-jss-form>\n```\n\n```ts\nimport { Validators } from '@angular/forms';\nimport { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';\n\nconst SCHEMA: VCLFormFieldSchemaRoot = {\n  type: 'form',\n  fields: {\n    name: {\n      type: 'input',\n      label: 'Name',\n      params: {\n        placeholder: 'Your name',\n      },\n      validators: [\n        Validators.required, Validators.minLength(2)\n      ],\n      required: true,\n      hints: [\n        {\n          type: 'error',\n          error: 'required',\n          message: 'Name is required'\n        },\n        {\n          type: 'error',\n          error: 'minlength',\n          message: 'Name must have a length of at least 2 characters'\n        }\n      ]\n    },\n    email: {\n      type: 'input',\n      label: 'Email',\n      validators: [Validators.email],\n      required: false,\n      hints: [\n        {\n          type: 'error',\n          error: 'email',\n          message: 'Invalid Email address'\n        }\n      ]\n    },\n    gender: {\n      type: 'radio-group',\n      label: 'Gender',\n      defaultValue: 'm',\n      params: {\n        options: [{\n          label: 'Male',\n          value: 'm'\n        }, {\n          label: 'Female',\n          value: 'f'\n        }, {\n          label: 'Genderless',\n          value: 'g'\n        }],\n      }\n    },\n    language: {\n      type: 'hidden',\n      defaultValue: navigator.language\n    },\n    terms: {\n      type: 'checkbox',\n      label: 'Agree to our terms',\n      validators: [(control: AbstractControl) => {\n        if (!control.value) {\n          return {\n            termsDisagree: true,\n          };\n        }\n        return null;\n      }],\n      hints: [\n        {\n          type: 'default',\n          message: 'Read the terms to learn how we collect, use and share your data'\n        },\n        {\n          type: 'error',\n          error: 'termsDisagree',\n          message: 'You must agree to our Terms'\n        }\n      ]\n    },\n    submit: {\n      type: 'buttons',\n      buttons: [\n        {\n          type: 'submit',\n          label: 'Submit',\n          class: 'emphasized'\n        },\n        {\n          type: 'button',\n          label: 'Reset',\n          action: 'reset'\n        }\n      ]\n    }\n  },\n};\n```\n\n#### Conditional properties\n\nSome properties can be conditional and change when another field value changes.\n\n```ts\nimport { VCLFormFieldSchemaRoot, conditional } from '@vcl/ng-vcl';\n\nconst SCHEMA: VCLFormFieldSchemaRoot = {\n  type: 'form',\n  fields: {\n    one: {\n      type: 'checkbox',\n      label: 'One'\n    },\n    two: {\n      type: 'checkbox',\n      visible: conditional(['one', (one) => !!one.value])\n      label: 'Two',\n    }\n  }\n}\n```\n\n#### Custom fields\n\nA component used in a custom field must implement the `ControlValueAccessor` interface to support the `formControl` directive.\n\n```ts\n@Component({\n  template: `\n    <span *ngIf=\"field.label\">{{ field.label }}</span><br>\n    <my-counter [formControl]=\"field.control\" [max]=\"field.params.max\"></my-counter>\n    `\n})\nexport class CounterFormFieldComponent {\n  constructor(public field: FormFieldControl) { }\n}\n\nFormFieldControl.register('counter', CounterFormFieldComponent);\n```\n\n```ts\nimport { VCLFormFieldSchemaRoot, conditional } from '@vcl/ng-vcl';\n\nconst SCHEMA: VCLFormFieldSchemaRoot = {\n  type: 'form',\n  fields: {\n    level: {\n      type: 'counter',\n      label: 'Counter',\n      params: {\n        max: 10\n      }\n    }\n  }\n}\n```\n"},"demo.component.html":{type:"html",content:a(7591)},"demo.component.ts":{type:"ts",content:a(7765)},"jss-form-extended.ts":{type:"ts",content:a(630)},"hero.ts":{type:"ts",content:a(8389)}}}}o.RKq.register("counter",g);class v{static#e=this.\u0275fac=function(r){return new(r||v)};static#n=this.\u0275mod=e.oAB({type:v});static#t=this.\u0275inj=e.cJS({imports:[i.ez,s.u5,s.UX,F.l,C.q,o.o14,o.V4c,o.ds4,o.M8P,o.Zx3,o.N2R,o.mt_,S.Bz.forChild([{path:"",component:F.z,data:{demo:A}}])]})}},7591:(c,l,a)=>{a.r(l),a.d(l,{default:()=>i});const i='<h2>Disable all inputs</h2>\n<vcl-flip-switch [(value)]="disabled"></vcl-flip-switch>\n\n<h2>Create a hero</h2>\n\n<vcl-jss-form\n  style="max-width: 40em;"\n  autocomplete="off"\n  #heroForm="vclJssForm"\n  [schema]="heroSchema"\n  (formSubmit)="onSubmit()"\n  (formAction)="onAction($event)">\n</vcl-jss-form>\n\n<div class="value" *ngIf="state$ | async as formState">\n  <h4>Form</h4>\n  <pre>{{formState | json}}</pre>\n</div>\n'},7765:(c,l,a)=>{a.r(l),a.d(l,{default:()=>i});const i="import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';\nimport { JssFormComponent, NotifierService, DateAdapter } from '@vcl/ng-vcl';\nimport { merge, Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\nimport { buildHeroSchema, ExtendedFormFieldSchemaRoot } from './hero';\n\n@Component({\n  selector: 'demo-empty-component',\n  template: `<span>{{ data }}</span>`,\n})\nexport class SampleEmptyComponent {\n  data: string;\n}\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class JssFormDemoComponent implements AfterViewInit, OnInit {\n  private _disabled = false;\n\n  get disabled(): boolean {\n    return this._disabled;\n  }\n\n  set disabled(value: boolean) {\n    this._disabled = value;\n    this.ngOnInit();\n  }\n\n  constructor(private notifier: NotifierService, private da: DateAdapter) {}\n\n  @ViewChild('heroForm')\n  heroForm: JssFormComponent;\n\n  heroSchema?: ExtendedFormFieldSchemaRoot;\n\n  state$: Observable<any>;\n\n  ngOnInit(): void {\n    this.heroSchema = buildHeroSchema(\n      {\n        datePickerPlaceholder: this.da.pattern('date'),\n      },\n      this.disabled,\n      SampleEmptyComponent\n    );\n  }\n\n  onSubmit() {\n    if (this.heroForm.form.valid) {\n      this.notifier.success('Hero created');\n    } else {\n      this.notifier.error('Hero invalid');\n    }\n  }\n\n  onAction(action: string) {\n    if (action === 'reset' && this.heroForm.form) {\n      this.heroForm.form.resetForm(this.heroForm.defaultValue);\n      this.notifier.info('Hero reset');\n    }\n  }\n\n  ngAfterViewInit() {\n    this.state$ = merge(\n      this.heroForm.form.statusChanges,\n      this.heroForm.form.valueChanges as any,\n      this.heroForm.form.ngSubmit as any\n    ).pipe(\n      map(() => {\n        return {\n          status: this.heroForm.form.status,\n          valid: this.heroForm.form.valid,\n          dirty: this.heroForm.form.dirty,\n          submitted: this.heroForm.form.submitted,\n          touched: this.heroForm.form.touched,\n          pristine: this.heroForm.form.pristine,\n          errors: this.heroForm.form.errors,\n          value: this.heroForm.form.value,\n        };\n      })\n    );\n  }\n}\n"},8389:(c,l,a)=>{a.r(l),a.d(l,{default:()=>i});const i="import { Validators, AbstractControl } from '@angular/forms';\nimport { conditional, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';\nimport { CounterSchema } from './jss-form-extended';\n\n// Extended schema including the custom counter component\nexport type ExtendedFormFieldSchemaRoot = VCLFormFieldSchemaRoot<CounterSchema>;\n\nexport interface HeroSchemaConfig {\n  datePickerPlaceholder: string;\n}\n\nexport function buildHeroSchema(\n  config: HeroSchemaConfig,\n  disabled: boolean,\n  emptyComponent: any\n): ExtendedFormFieldSchemaRoot {\n  return {\n    type: 'form',\n    fields: [\n      {\n        name: 'name',\n        type: 'input',\n        label: 'Name',\n        params: {\n          placeholder: \"The hero's name\",\n          autocomplete: 'off',\n        },\n        validators: [Validators.required, Validators.minLength(2)],\n        required: true,\n        help: {\n          title: 'Help title',\n          text: 'Help text',\n        },\n        hints: [\n          {\n            type: 'error',\n            error: 'required',\n            message: 'Name is required',\n          },\n          {\n            type: 'error',\n            error: 'minlength',\n            message: 'Name must have a length of at least 2 characters',\n          },\n        ],\n        disabled,\n      },\n      {\n        type: 'textarea',\n        name: 'description',\n        label: 'Description',\n        params: {\n          placeholder: \"The hero's Description\",\n        },\n        disabled,\n      },\n      {\n        type: 'date-picker',\n        name: 'dob',\n        label: 'Date of Birth',\n        params: {\n          placeholder: config.datePickerPlaceholder,\n        },\n        help: {\n          title: 'Date of Birth title',\n          text: 'Date of Birth text',\n          confirmButtonLabel: 'Confirm',\n          layerWidth: '15em',\n          icon: 'vcl:question',\n        },\n        disabled,\n      },\n      {\n        type: 'password-input',\n        name: 'password',\n        label: 'Password',\n        params: {\n          placeholder: 'Enter password',\n        },\n        validators: [\n          Validators.required,\n          Validators.pattern(\n            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'\n          ),\n        ],\n        hints: [\n          {\n            type: 'error',\n            error: 'required',\n            message: 'Password is required',\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: 'Password must...',\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- At least 8 characters in length',\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- Contain a lowercase letters',\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- Contain a uppercase letters',\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- Contain a number',\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- Contain a special character',\n          },\n        ],\n        disabled,\n      },\n      {\n        type: 'counter',\n        name: 'level',\n        label: 'Level',\n        defaultValue: 1,\n        params: {\n          min: 1,\n          max: 10,\n        },\n        disabled,\n      },\n      {\n        type: 'switch',\n        name: 'leader',\n        label: 'Leader',\n        defaultValue: false,\n        visible: conditional(\n          ['level'],\n          (level: AbstractControl) => level.value >= 5\n        ),\n        validators: [\n          (control: AbstractControl) => {\n            if (!control.value) {\n              return {\n                leader: true,\n              };\n            }\n            return null;\n          },\n        ],\n        params: {\n          offLabel: 'No',\n          onLabel: 'Yes',\n        },\n        disabled,\n      },\n      {\n        type: 'file-input',\n        name: 'picture',\n        label: 'Picture',\n        params: {\n          multiple: false,\n          placeholder: 'Picture of the hero',\n        },\n        disabled,\n      },\n      {\n        type: 'input',\n        params: {\n          prependedIcon: 'mdi:email',\n        },\n        name: 'email',\n        label: 'Email',\n        validators: [Validators.required, Validators.email],\n        required: true,\n        hints: [\n          {\n            type: 'error',\n            error: 'required',\n            message: 'Email is required',\n          },\n          {\n            type: 'error',\n            error: 'email',\n            message: 'Invalid Email address',\n          },\n        ],\n        disabled,\n      },\n      {\n        type: 'radio-group',\n        name: 'gender',\n        label: 'Gender',\n        defaultValue: 'm',\n        params: {\n          options: [\n            {\n              label: 'Male',\n              value: 'm',\n            },\n            {\n              label: 'Female',\n              value: 'f',\n            },\n            {\n              label: 'Genderless',\n              value: 'g',\n            },\n          ],\n        },\n        disabled,\n      },\n      {\n        type: 'button-group',\n        name: 'alignment',\n        label: 'Alignment',\n        params: {\n          options: [\n            {\n              label: 'Good',\n              value: 1,\n            },\n            {\n              label: 'Neutral',\n              value: 0,\n            },\n            {\n              label: 'Evil',\n              value: -1,\n            },\n          ],\n        },\n        disabled,\n      },\n      {\n        type: 'hidden',\n        name: 'language',\n        defaultValue: navigator.language,\n      },\n      {\n        type: 'select-list',\n        name: 'class',\n        label: 'Class',\n        defaultValue: null,\n        params: {\n          options: [\n            {\n              label: 'Warrior',\n              value: 'warrior',\n            },\n            {\n              label: 'Mage',\n              value: 'mage',\n            },\n            {\n              label: 'Rogue',\n              value: 'rogue',\n            },\n          ],\n        },\n        disabled,\n      },\n      {\n        type: 'slider',\n        name: 'hitpoints',\n        label: 'Hit Points',\n        defaultValue: 15,\n        disabled: conditional(['class'], c => !c.value),\n        params: conditional(['class'], control => {\n          if (control.value === 'rogue') {\n            return {\n              min: 8,\n              max: 18,\n              scale: 11,\n              lock: true,\n            };\n          } else if (control.value === 'mage') {\n            return {\n              min: 5,\n              max: 15,\n              scale: 11,\n              lock: true,\n            };\n          } else {\n            return {\n              min: 10,\n              max: 20,\n              scale: 11,\n              lock: true,\n            };\n          }\n        }),\n      },\n      {\n        type: 'object',\n        name: 'skills',\n        layout: 'fieldset',\n        label: 'Skills',\n        fields: [\n          {\n            type: 'rating',\n            name: 'strength',\n            defaultValue: 3,\n            params: {\n              items: ['1', '2', '3', '4', '5'],\n              valueLabel: label => `Strength (${label})`,\n            },\n            disabled,\n          },\n          {\n            type: 'rating',\n            name: 'agility',\n            defaultValue: 3,\n            params: {\n              items: ['1', '2', '3', '4', '5'],\n              valueLabel: label => `Agility (${label})`,\n            },\n            disabled,\n          },\n          {\n            type: 'rating',\n            name: 'intelligence',\n            defaultValue: 3,\n            params: {\n              items: ['1', '2', '3', '4', '5'],\n              valueLabel: label => `Intelligence (${label})`,\n            },\n            disabled,\n          },\n        ],\n        validators: [\n          (control: AbstractControl) => {\n            const s = control.get('strength');\n            const a = control.get('agility');\n            const i = control.get('intelligence');\n            const skillPoints = s && a && i ? s.value + a.value + i.value : 0;\n            return skillPoints > 10 ? { skills: true } : null;\n          },\n        ],\n        hints: [\n          conditional(\n            [\n              'skills',\n              'skills.strength',\n              'skills.agility',\n              'skills.intelligence',\n            ],\n            (control, s, a, i) => {\n              const skillPoints = s && a && i ? s.value + a.value + i.value : 0;\n              const message = `${skillPoints} of 10 skill points used`;\n              if (control.hasError('skills')) {\n                return {\n                  type: 'error',\n                  message,\n                };\n              } else {\n                const skillPointsAvailable = 10 - skillPoints;\n                if (skillPointsAvailable > 0) {\n                  return {\n                    type: 'warning',\n                    message,\n                  };\n                }\n                return {\n                  type: 'default',\n                  message,\n                };\n              }\n            }\n          ),\n        ],\n        disabled,\n      },\n      {\n        type: 'token',\n        name: 'attributes',\n        label: 'Attributes (Tokens)',\n        params: {\n          autocomplete: 'off',\n        },\n        hints: [\n          {\n            type: 'default',\n            message: 'Press enter to add attribute',\n          },\n          {\n            type: 'error',\n            error: 'minLength',\n            message: 'Minimum length is 2',\n          },\n        ],\n        validators: [\n          (control: AbstractControl) => {\n            return Array.isArray(control.value) && control.value.length > 1\n              ? null\n              : { minLength: true };\n          },\n        ],\n        disabled,\n      },\n      {\n        type: 'select',\n        name: 'perks',\n        label: 'Perks',\n        params: {\n          clearable: true,\n          placeholder: 'Select perks',\n          selectionMode: 'multiple',\n          search: true,\n          emptyComponent: {\n            component: emptyComponent,\n            data: 'No skills found!',\n          },\n          options: [\n            {\n              label: 'Snake Eater',\n              sublabel:\n                'It gives you a 25% increase to your poison resistance.',\n              value: 'snakeeater',\n            },\n            {\n              label: 'Swift Learner',\n              sublabel:\n                \"Swift Learner\tWhenever you gain experience, you'll receive 5% more experience per level of the perk.\",\n              value: 'swiftlearner',\n            },\n            {\n              label: 'Toughness',\n              sublabel:\n                'It adds 10% to your general damage resistance per level.',\n              value: 'toughness',\n            },\n            {\n              label: 'Explorer',\n              sublabel: \"You'll get more random encounters with this perk.\",\n              value: 'explorer',\n            },\n          ],\n        },\n        validators: [\n          (ctrl: AbstractControl) => {\n            if (\n              ctrl.value &&\n              Array.isArray(ctrl.value) &&\n              ctrl.value.length === 2\n            ) {\n              return null;\n            }\n            return {\n              perks: true,\n            };\n          },\n        ],\n        hints: [\n          {\n            type: 'error',\n            error: 'perks',\n            message: 'You must select two perks',\n          },\n        ],\n        disabled,\n      },\n      {\n        type: 'array',\n        name: 'items',\n        label: 'Items',\n        initialFields: 0,\n        fieldLabel: index => 'Item ' + (index + 1),\n        noFieldsLabel: 'No items',\n        field: {\n          type: 'object',\n          name: 'item_object',\n          fields: [\n            {\n              type: 'input',\n              name: 'item_name',\n              label: 'Name',\n              validators: [Validators.required],\n              required: true,\n              hints: [\n                {\n                  type: 'error',\n                  error: 'required',\n                  message: 'Item name is required',\n                },\n              ],\n              disabled,\n            },\n            {\n              type: 'input',\n              name: 'item_quantity',\n              label: 'Quantity',\n              params: {\n                inputType: 'number',\n                spinner: true,\n              },\n              validators: [\n                Validators.required,\n                Validators.min(1),\n                Validators.max(10),\n              ],\n              required: true,\n              hints: [\n                {\n                  type: 'error',\n                  error: 'required',\n                  message: 'Item quantity is required',\n                },\n                {\n                  type: 'error',\n                  error: 'min',\n                  message: 'Minimum is 1',\n                },\n                {\n                  type: 'error',\n                  error: 'max',\n                  message: 'Maximum is 10',\n                },\n              ],\n              disabled,\n            },\n          ],\n        },\n        disabled,\n      },\n      {\n        type: 'checkbox',\n        name: 'terms',\n        label: 'Agree to our terms',\n        validators: [\n          (control: AbstractControl) => {\n            if (!control.value) {\n              return {\n                termsDisagree: true,\n              };\n            }\n            return null;\n          },\n        ],\n        hints: [\n          {\n            type: 'default',\n            message:\n              'Read the terms to learn how we collect, use and share your data',\n          },\n          {\n            type: 'error',\n            error: 'termsDisagree',\n            message: 'You must agree to our Terms',\n          },\n        ],\n        errorStateAgent: (host, input) =>\n          input.control.invalid && host.submitted,\n        disabled,\n      },\n      {\n        type: 'buttons',\n        buttons: [\n          {\n            type: 'submit',\n            label: 'Submit',\n            class: 'emphasized',\n            appIcon: 'fas:arrow-circle-right',\n            disabled,\n          },\n          {\n            type: 'button',\n            label: 'Reset',\n            action: 'reset',\n            disabled,\n          },\n        ],\n      },\n    ],\n  };\n}\n"},630:(c,l,a)=>{a.r(l),a.d(l,{default:()=>i});const i='import { Component } from \'@angular/core\';\nimport {\n  VCLFormFieldSchemaRoot,\n  FormFieldControl,\n  VCLFormFieldControlSchema,\n  Conditional,\n} from \'@vcl/ng-vcl\';\n\n@Component({\n  template: `\n    <vcl-form-control-group *ngIf="field.visible">\n      <vcl-label *ngIf="!!field.label">{{ field.label }}</vcl-label>\n      <demo-counter\n        [formControl]="field.control"\n        [min]="field.params.min"\n        [max]="field.params.max"></demo-counter>\n    </vcl-form-control-group>\n  `,\n})\nexport class FormFieldCounterComponent {\n  constructor(public field: FormFieldControl) {}\n}\n\nexport interface CounterSchemaParams {\n  min?: number;\n  max?: number;\n}\n\nexport interface CounterSchema extends VCLFormFieldControlSchema {\n  type: \'counter\';\n  params?: CounterSchemaParams | Conditional<CounterSchemaParams>;\n}\n'}}]);