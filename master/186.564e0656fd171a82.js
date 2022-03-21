"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[186],{3186:(p,l,t)=>{t.r(l),t.d(l,{VCLJssFormDemoModule:()=>q,demo:()=>g});var m=t(9808),s=t(2382),v=t(5852),i=t(6272),h=t(9155),b=t(6451),y=t(4004),e=t(4893),C=t(7768);const A=["heroForm"];function x(a,n){if(1&a&&(e.TgZ(0,"div",3)(1,"h4"),e._uU(2,"Form"),e.qZA(),e.TgZ(3,"pre"),e._uU(4),e.ALo(5,"json"),e.qZA()()),2&a){const r=n.ngIf;e.xp6(4),e.Oqu(e.lcZ(5,1,r))}}let S=(()=>{class a{constructor(r,o){this.notifier=r,this.da=o}ngOnInit(){this.heroSchema=function F(a){return{type:"form",fields:[{name:"name",type:"input",label:"Name",params:{placeholder:"The hero's name"},validators:[s.kI.required,s.kI.minLength(2)],required:!0,help:{title:"Help title",text:"Help text"},hints:[{type:"error",error:"required",message:"Name is required"},{type:"error",error:"minlength",message:"Name must have a length of at least 2 characters"}]},{type:"textarea",name:"description",label:"Description",params:{placeholder:"The hero's Description"}},{type:"datepicker",name:"dob",label:"Date of Birth",params:{placeholder:a.datepickerPlaceholder},help:{title:"Date of Birth title",text:"Date of Birth text",confirmButtonLabel:"Confirm",layerWidth:"15em",icon:"vcl:question"}},{type:"password-input",name:"password",label:"Password",params:{placeholder:"Enter password"},validators:[s.kI.required,s.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")],hints:[{type:"error",error:"required",message:"Password is required"},{type:"error",error:"pattern",message:"Password must..."},{type:"error",error:"pattern",message:"- At least 8 characters in length"},{type:"error",error:"pattern",message:"- Contain a lowercase letters"},{type:"error",error:"pattern",message:"- Contain a uppercase letters"},{type:"error",error:"pattern",message:"- Contain a number"},{type:"error",error:"pattern",message:"- Contain a special character"}]},{type:"counter",name:"level",label:"Level",defaultValue:1,params:{min:1,max:10}},{type:"switch",name:"leader",label:"Leader",defaultValue:!1,visible:(0,i.u7J)(["level"],n=>n.value>=5),validators:[n=>n.value?null:{leader:!0}],params:{offLabel:"No",onLabel:"Yes"}},{type:"file-input",name:"picture",label:"Picture",params:{multiple:!1,placeholder:"Picture of the hero"}},{type:"input",params:{prependedIcon:"mdi:email"},name:"email",label:"Email",validators:[s.kI.required,s.kI.email],required:!0,hints:[{type:"error",error:"required",message:"Email is required"},{type:"error",error:"email",message:"Invalid Email address"}]},{type:"radio-group",name:"gender",label:"Gender",defaultValue:"m",params:{options:[{label:"Male",value:"m"},{label:"Female",value:"f"},{label:"Genderless",value:"g"}]}},{type:"button-group",name:"alignment",label:"Alignment",params:{options:[{label:"Good",value:1},{label:"Neutral",value:0},{label:"Evil",value:-1}]}},{type:"hidden",name:"language",defaultValue:navigator.language},{type:"select-list",name:"class",label:"Class",defaultValue:null,params:{options:[{label:"Warrior",value:"warrior"},{label:"Mage",value:"mage"},{label:"Rogue",value:"rogue"}]}},{type:"slider",name:"hitpoints",label:"Hit Points",defaultValue:15,disabled:(0,i.u7J)(["class"],n=>!n.value),params:(0,i.u7J)(["class"],n=>"rogue"===n.value?{min:8,max:18,scale:11,lock:!0}:"mage"===n.value?{min:5,max:15,scale:11,lock:!0}:{min:10,max:20,scale:11,lock:!0})},{type:"object",name:"skills",layout:"fieldset",label:"Skills",fields:[{type:"rating",name:"strength",defaultValue:3,params:{items:["1","2","3","4","5"],valueLabel:n=>`Strength (${n})`}},{type:"rating",name:"agility",defaultValue:3,params:{items:["1","2","3","4","5"],valueLabel:n=>`Agility (${n})`}},{type:"rating",name:"intelligence",defaultValue:3,params:{items:["1","2","3","4","5"],valueLabel:n=>`Intelligence (${n})`}}],validators:[n=>{const r=n.get("strength"),o=n.get("agility"),u=n.get("intelligence");return(r&&o&&u?r.value+o.value+u.value:0)>10?{skills:!0}:null}],hints:[(0,i.u7J)(["skills","skills.strength","skills.agility","skills.intelligence"],(n,r,o,u)=>{const d=r&&o&&u?r.value+o.value+u.value:0,c=`${d} of 10 skill points used`;return n.hasError("skills")?{type:"error",message:c}:10-d>0?{type:"warning",message:c}:{type:"default",message:c}})]},{type:"token",name:"attributes",label:"Attributes",hints:[{type:"default",message:"Press enter to add attribute"},{type:"error",error:"minLength",message:"Minimum length is 2"}],validators:[n=>Array.isArray(n.value)&&n.value.length>1?null:{minLength:!0}]},{type:"select",name:"perks",label:"Perks",params:{placeholder:"Select perks",selectionMode:"multiple",search:!0,options:[{label:"Snake Eater",sublabel:"It gives you a 25% increase to your poison resistance.",value:"snakeeater"},{label:"Swift Learner",sublabel:"Swift Learner\tWhenever you gain experience, you'll receive 5% more experience per level of the perk.",value:"swiftlearner"},{label:"Toughness",sublabel:"It adds 10% to your general damage resistance per level.",value:"toughness"},{label:"Explorer",sublabel:"You'll get more random encounters with this perk.",value:"explorer"}]},validators:[n=>n.value&&Array.isArray(n.value)&&2===n.value.length?null:{perks:!0}],hints:[{type:"error",error:"perks",message:"You must select two perks"}]},{type:"array",name:"items",label:"Items",initialFields:0,fieldLabel:n=>"Item "+(n+1),noFieldsLabel:"No items",field:{type:"object",name:"item_object",fields:[{type:"input",name:"item_name",label:"Name",validators:[s.kI.required],required:!0,hints:[{type:"error",error:"required",message:"Item name is required"}]},{type:"input",name:"item_quantity",label:"Quantity",params:{inputType:"number"},validators:[s.kI.required,s.kI.min(1),s.kI.max(10)],required:!0,hints:[{type:"error",error:"required",message:"Item quantity is required"},{type:"error",error:"min",message:"Minimum is 1"},{type:"error",error:"max",message:"Maximum is 10"}]}]}},{type:"checkbox",name:"terms",label:"Agree to our terms",validators:[n=>n.value?null:{termsDisagree:!0}],hints:[{type:"default",message:"Read the terms to learn how we collect, use and share your data"},{type:"error",error:"termsDisagree",message:"You must agree to our Terms"}],errorStateAgent:(n,r)=>r.control.invalid&&n.submitted},{type:"buttons",buttons:[{type:"submit",label:"Submit",class:"emphasized",appIcon:"fas:arrow-circle-right"},{type:"button",label:"Reset",action:"reset"}]}]}}({datepickerPlaceholder:this.da.pattern("date")})}onSubmit(){this.heroForm.form.valid?this.notifier.success("Hero created"):this.notifier.error("Hero invalid")}onAction(r){"reset"===r&&this.heroForm.form&&(this.heroForm.form.resetForm(this.heroForm.defaultValue),this.notifier.info("Hero reset"))}ngAfterViewInit(){this.state$=(0,b.T)(this.heroForm.form.statusChanges,this.heroForm.form.valueChanges,this.heroForm.form.ngSubmit).pipe((0,y.U)(()=>({status:this.heroForm.form.status,valid:this.heroForm.form.valid,dirty:this.heroForm.form.dirty,submitted:this.heroForm.form.submitted,touched:this.heroForm.form.touched,pristine:this.heroForm.form.pristine,errors:this.heroForm.form.errors,value:this.heroForm.form.value})))}}return a.\u0275fac=function(r){return new(r||a)(e.Y36(i.lGB),e.Y36(i._AI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["ng-component"]],viewQuery:function(r,o){if(1&r&&e.Gf(A,5),2&r){let u;e.iGM(u=e.CRH())&&(o.heroForm=u.first)}},decls:6,vars:4,consts:[[2,"max-width","40em",3,"schema","formSubmit","formAction"],["heroForm","vclJssForm"],["class","value",4,"ngIf"],[1,"value"]],template:function(r,o){1&r&&(e.TgZ(0,"h2"),e._uU(1,"Create a hero"),e.qZA(),e.TgZ(2,"vcl-jss-form",0,1),e.NdJ("formSubmit",function(){return o.onSubmit()})("formAction",function(d){return o.onAction(d)}),e.qZA(),e.YNc(4,x,6,3,"div",2),e.ALo(5,"async")),2&r&&(e.xp6(2),e.Q6J("schema",o.heroSchema),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,2,o.state$)))},directives:[C.B,m.O5],pipes:[m.Ov,m.Ts],encapsulation:2}),a})();var k=t(5550),V=t(2007),f=t(8565);function L(a,n){if(1&a&&(e.TgZ(0,"vcl-label"),e._uU(1),e.qZA()),2&a){const r=e.oxw(2);e.xp6(1),e.Oqu(r.field.label)}}function I(a,n){if(1&a&&(e.TgZ(0,"vcl-form-control-group"),e.YNc(1,L,2,1,"vcl-label",0),e._UZ(2,"demo-counter",1),e.qZA()),2&a){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",!!r.field.label),e.xp6(1),e.Q6J("formControl",r.field.control)("min",r.field.params.min)("max",r.field.params.max)}}function g(){return{label:"JSS-Form",tabs:{Demo:S,"README.md":{type:"md",content:"# vcl-jss-form\n\nCreates a html-form from a provided schema.\n\n## Usage\n\n```ts\nimport { VCLJssFormModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLJssFormModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-jss-form [schema]=\"mySchema\" (formSubmit)=\"onSubmit($event)\" (formAction)=\"onAction($event)\" ></vcl-jss-form>\n```\n\n```ts\nimport { Validators } from '@angular/forms';\nimport { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';\n\nconst SCHEMA: VCLFormFieldSchemaRoot = {\n  type: 'form',\n  fields: {\n    name: {\n      type: 'input',\n      label: 'Name',\n      params: {\n        placeholder: 'Your name',\n      },\n      validators: [\n        Validators.required, Validators.minLength(2)\n      ],\n      required: true,\n      hints: [\n        {\n          type: 'error',\n          error: 'required',\n          message: 'Name is required'\n        },\n        {\n          type: 'error',\n          error: 'minlength',\n          message: 'Name must have a length of at least 2 characters'\n        }\n      ]\n    },\n    email: {\n      type: 'input',\n      label: 'Email',\n      validators: [Validators.email],\n      required: false,\n      hints: [\n        {\n          type: 'error',\n          error: 'email',\n          message: 'Invalid Email address'\n        }\n      ]\n    },\n    gender: {\n      type: 'radio-group',\n      label: 'Gender',\n      defaultValue: 'm',\n      params: {\n        options: [{\n          label: 'Male',\n          value: 'm'\n        }, {\n          label: 'Female',\n          value: 'f'\n        }, {\n          label: 'Genderless',\n          value: 'g'\n        }],\n      }\n    },\n    language: {\n      type: 'hidden',\n      defaultValue: navigator.language\n    },\n    terms: {\n      type: 'checkbox',\n      label: 'Agree to our terms',\n      validators: [(control: AbstractControl) => {\n        if (!control.value) {\n          return {\n            termsDisagree: true,\n          };\n        }\n        return null;\n      }],\n      hints: [\n        {\n          type: 'default',\n          message: 'Read the terms to learn how we collect, use and share your data'\n        },\n        {\n          type: 'error',\n          error: 'termsDisagree',\n          message: 'You must agree to our Terms'\n        }\n      ]\n    },\n    submit: {\n      type: 'buttons',\n      buttons: [\n        {\n          type: 'submit',\n          label: 'Submit',\n          class: 'emphasized'\n        },\n        {\n          type: 'button',\n          label: 'Reset',\n          action: 'reset'\n        }\n      ]\n    }\n  },\n};\n```\n\n#### Conditional properties\n\nSome properties can be conditional and change when another field value changes.\n\n```ts\nimport { VCLFormFieldSchemaRoot, conditional } from '@vcl/ng-vcl';\n\nconst SCHEMA: VCLFormFieldSchemaRoot = {\n  type: 'form',\n  fields: {\n    one: {\n      type: 'checkbox',\n      label: 'One'\n    },\n    two: {\n      type: 'checkbox',\n      visible: conditional(['one', (one) => !!one.value])\n      label: 'Two',\n    }\n  }\n}\n```\n\n#### Custom fields\n\nA component used in a custom field must implement the `ControlValueAccessor` interface to support the `formControl` directive.\n\n```ts\n@Component({\n  template: `\n    <span *ngIf=\"field.label\">{{ field.label }}</span><br>\n    <my-counter [formControl]=\"field.control\" [max]=\"field.params.max\"></my-counter>\n    `\n})\nexport class CounterFormFieldComponent {\n  constructor(public field: FormFieldControl) { }\n}\n\nFormFieldControl.register('counter', CounterFormFieldComponent);\n```\n\n```ts\nimport { VCLFormFieldSchemaRoot, conditional } from '@vcl/ng-vcl';\n\nconst SCHEMA: VCLFormFieldSchemaRoot = {\n  type: 'form',\n  fields: {\n    level: {\n      type: 'counter',\n      label: 'Counter',\n      params: {\n        max: 10\n      }\n    }\n  }\n}\n```\n"},"demo.component.html":{type:"html",content:t(7591)},"demo.component.ts":{type:"ts",content:t(7765)},"jss-form-extended.ts":{type:"ts",content:t(630)},"hero.ts":{type:"ts",content:t(8389)}}}}i.RKq.register("counter",(()=>{class a{constructor(r){this.field=r}}return a.\u0275fac=function(r){return new(r||a)(e.Y36(i.RKq))},a.\u0275cmp=e.Xpm({type:a,selectors:[["ng-component"]],decls:1,vars:1,consts:[[4,"ngIf"],[3,"formControl","min","max"]],template:function(r,o){1&r&&e.YNc(0,I,3,4,"vcl-form-control-group",0),2&r&&e.Q6J("ngIf",o.field.visible)},directives:[m.O5,k.o,V.q8,f.R,s.JJ,s.oH],encapsulation:2}),a})());let q=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[m.ez,s.u5,s.UX,h.l,f.q,i.o14,i.V4c,i.ds4,i.M8P,i.Zx3,i.N2R,v.Bz.forChild([{path:"",component:h.z,data:{demo:g}}])]]}),a})()},7591:(p,l,t)=>{t.r(l),t.d(l,{default:()=>m});const m='<h2>Create a hero</h2>\n\n<vcl-jss-form \n  style="max-width: 40em;"\n  #heroForm="vclJssForm"\n  [schema]="heroSchema" \n  (formSubmit)="onSubmit()" \n  (formAction)="onAction($event)">\n</vcl-jss-form>\n\n<div class="value" *ngIf="state$ | async as formState">\n  <h4>Form</h4>\n  <pre>{{formState | json}}</pre>\n</div>\n'},7765:(p,l,t)=>{t.r(l),t.d(l,{default:()=>m});const m="import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';\nimport { JssFormComponent, NotifierService, DateAdapter } from '@vcl/ng-vcl';\nimport { merge, Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\nimport { buildHeroSchema, ExtendedFormFieldSchemaRoot } from './hero';\n\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class JssFormDemoComponent implements AfterViewInit, OnInit {\n\n  constructor(private notifier: NotifierService, private da: DateAdapter) { }\n\n  @ViewChild('heroForm')\n  heroForm: JssFormComponent;\n\n  heroSchema?: ExtendedFormFieldSchemaRoot;\n\n  state$: Observable<any>;\n\n  ngOnInit(): void {\n    this.heroSchema = buildHeroSchema({\n      datepickerPlaceholder: this.da.pattern('date')\n    });\n  }\n\n  onSubmit() {\n    if (this.heroForm.form.valid) {\n      this.notifier.success('Hero created');\n    } else {\n      this.notifier.error('Hero invalid');\n    }\n  }\n\n  onAction(action: string) {\n    if (action === 'reset' && this.heroForm.form) {\n      this.heroForm.form.resetForm(this.heroForm.defaultValue);\n      this.notifier.info('Hero reset');\n    }\n  }\n\n  ngAfterViewInit() {\n    this.state$ = merge(this.heroForm.form.statusChanges, this.heroForm.form.valueChanges as any, this.heroForm.form.ngSubmit as any).pipe(\n      map(() => {\n        return {\n          status: this.heroForm.form.status,\n          valid: this.heroForm.form.valid,\n          dirty: this.heroForm.form.dirty,\n          submitted: this.heroForm.form.submitted,\n          touched: this.heroForm.form.touched,\n          pristine: this.heroForm.form.pristine,\n          errors: this.heroForm.form.errors,\n          value: this.heroForm.form.value,\n        };\n      })\n    );\n  }\n}\n"},8389:(p,l,t)=>{t.r(l),t.d(l,{default:()=>m});const m="import { Validators, AbstractControl } from '@angular/forms';\nimport { conditional, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';\nimport { CounterSchema } from './jss-form-extended';\n\n// Extended schema including the custom counter component\nexport type ExtendedFormFieldSchemaRoot = VCLFormFieldSchemaRoot<CounterSchema>;\n\nexport interface HeroSchemaConfig {\n  datepickerPlaceholder: string;\n}\n\nexport function buildHeroSchema(config: HeroSchemaConfig): ExtendedFormFieldSchemaRoot {\n  return {\n    type: 'form',\n    fields: [\n      {\n        name: 'name',\n        type: 'input',\n        label: 'Name',\n        params: {\n          placeholder: 'The hero\\'s name'\n        },\n        validators: [\n          Validators.required, Validators.minLength(2)\n        ],\n        required: true,\n        help: {\n          title: 'Help title',\n          text: 'Help text',\n        },\n        hints: [\n          {\n            type: 'error',\n            error: 'required',\n            message: 'Name is required'\n          },\n          {\n            type: 'error',\n            error: 'minlength',\n            message: 'Name must have a length of at least 2 characters'\n          }\n        ]\n      },\n      {\n        type: 'textarea',\n        name: 'description',\n        label: 'Description',\n        params: {\n          placeholder: 'The hero\\'s Description',\n        }\n      },\n      {\n        type: 'datepicker',\n        name: 'dob',\n        label: 'Date of Birth',\n        params: {\n          placeholder: config.datepickerPlaceholder\n        },\n        help: {\n          title: 'Date of Birth title',\n          text: 'Date of Birth text',\n          confirmButtonLabel: 'Confirm',\n          layerWidth: '15em',\n          icon: 'vcl:question'\n        },\n      },\n      {\n        type: 'password-input',\n        name: 'password',\n        label: 'Password',\n        params: {\n          placeholder: 'Enter password',\n        },\n        validators: [\n          Validators.required,\n          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}'),\n        ],\n        hints: [\n          {\n            type: 'error',\n            error: 'required',\n            message: 'Password is required'\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: 'Password must...'\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- At least 8 characters in length'\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- Contain a lowercase letters'\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- Contain a uppercase letters'\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- Contain a number'\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- Contain a special character'\n          }\n        ]\n      },\n      {\n        type: 'counter',\n        name: 'level',\n        label: 'Level',\n        defaultValue: 1,\n        params: {\n          min: 1,\n          max: 10\n        }\n      },\n      {\n        type: 'switch',\n        name: 'leader',\n        label: 'Leader',\n        defaultValue: false,\n        visible: conditional(['level'], (level: AbstractControl) => level.value >= 5),\n        validators: [(control: AbstractControl) => {\n          if (!control.value) {\n            return {\n              leader: true,\n            };\n          }\n          return null;\n        }],\n        params: {\n          offLabel: 'No',\n          onLabel: 'Yes',\n        }\n      },\n      {\n        type: 'file-input',\n        name: 'picture',\n        label: 'Picture',\n        params: {\n          multiple: false,\n          placeholder: 'Picture of the hero'\n        }\n      },\n      {\n        type: 'input',\n        params: {\n          prependedIcon: 'mdi:email',\n        },\n        name: 'email',\n        label: 'Email',\n        validators: [Validators.required, Validators.email],\n        required: true,\n        hints: [\n          {\n            type: 'error',\n            error: 'required',\n            message: 'Email is required'\n          },\n          {\n            type: 'error',\n            error: 'email',\n            message: 'Invalid Email address'\n          }\n        ]\n      },\n      {\n        type: 'radio-group',\n        name: 'gender',\n        label: 'Gender',\n        defaultValue: 'm',\n        params: {\n          options: [{\n            label: 'Male',\n            value: 'm'\n          }, {\n            label: 'Female',\n            value: 'f'\n          }, {\n            label: 'Genderless',\n            value: 'g'\n          }],\n        }\n      },\n      {\n        type: 'button-group',\n        name: 'alignment',\n        label: 'Alignment',\n        params: {\n          options: [{\n            label: 'Good',\n            value: 1\n          }, {\n            label: 'Neutral',\n            value: 0\n          }, {\n            label: 'Evil',\n            value: -1\n          }]\n        }\n      },\n      {\n        type: 'hidden',\n        name: 'language',\n        defaultValue: navigator.language\n      },\n      {\n        type: 'select-list',\n        name: 'class',\n        label: 'Class',\n        defaultValue: null,\n        params: {\n          options: [{\n            label: 'Warrior',\n            value: 'warrior'\n          }, {\n            label: 'Mage',\n            value: 'mage'\n          }, {\n            label: 'Rogue',\n            value: 'rogue'\n          }]\n        }\n      },\n      {\n        type: 'slider',\n        name: 'hitpoints',\n        label: 'Hit Points',\n        defaultValue: 15,\n        disabled: conditional(['class'], (c) => !c.value),\n        params: conditional(['class'], (control) => {\n          if (control.value === 'rogue') {\n            return {\n              min: 8,\n              max: 18,\n              scale: 11,\n              lock: true,\n            };\n          }  else if (control.value === 'mage') {\n            return {\n              min: 5,\n              max: 15,\n              scale: 11,\n              lock: true,\n            };\n          } else {\n            return {\n              min: 10,\n              max: 20,\n              scale: 11,\n              lock: true,\n            };\n          }\n        }),\n      },\n      {\n        type: 'object',\n        name: 'skills',\n        layout: 'fieldset',\n        label: 'Skills',\n        fields: [\n          {\n            type: 'rating',\n            name: 'strength',\n            defaultValue: 3,\n            params: {\n              items: ['1', '2', '3', '4', '5'],\n              valueLabel: (label) => `Strength (${label})`,\n            },\n          },\n          {\n            type: 'rating',\n            name: 'agility',\n            defaultValue: 3,\n            params: {\n              items: ['1', '2', '3', '4', '5'],\n              valueLabel: (label) => `Agility (${label})`,\n            },\n          },\n          {\n            type: 'rating',\n            name: 'intelligence',\n            defaultValue: 3,\n            params: {\n              items: ['1', '2', '3', '4', '5'],\n              valueLabel: (label) => `Intelligence (${label})`,\n            },\n          },\n        ],\n        validators: [(control: AbstractControl) => {\n          const s = control.get('strength');\n          const a = control.get('agility');\n          const i = control.get('intelligence');\n          const skillPoints = (s && a && i) ? (s.value + a.value + i.value) : 0;\n          return skillPoints > 10 ? { skills: true } : null;\n        }],\n        hints: [\n          conditional(['skills', 'skills.strength', 'skills.agility', 'skills.intelligence'], (control, s, a, i) => {\n            const skillPoints = (s && a && i) ? (s.value + a.value + i.value) : 0;\n            const message = `${skillPoints} of 10 skill points used`;\n            if (control.hasError('skills')) {\n              return {\n                type: 'error',\n                message\n              };\n            } else {\n              const skillPointsAvailable = 10 - skillPoints;\n              if (skillPointsAvailable > 0) {\n                return {\n                  type: 'warning',\n                  message\n                };\n              }\n              return {\n                type: 'default',\n                message\n              };\n            }\n          })\n        ]\n      },\n      {\n        type: 'token',\n        name: 'attributes',\n        label: 'Attributes',\n        hints: [\n          {\n            type: 'default',\n            message: 'Press enter to add attribute'\n          },\n          {\n            type: 'error',\n            error: 'minLength',\n            message: 'Minimum length is 2'\n          },\n        ],\n        validators: [(control: AbstractControl) => {\n          return Array.isArray(control.value) && control.value.length > 1 ? null : { minLength: true };\n        }],\n      },\n      {\n        type: 'select',\n        name: 'perks',\n        label: 'Perks',\n        params: {\n          placeholder: 'Select perks',\n          selectionMode: 'multiple',\n          search: true,\n          options: [{\n            label: 'Snake Eater',\n            sublabel: 'It gives you a 25% increase to your poison resistance.',\n            value: 'snakeeater'\n          },\n          {\n            label: 'Swift Learner',\n            sublabel: 'Swift Learner\tWhenever you gain experience, you\\'ll receive 5% more experience per level of the perk.',\n            value: 'swiftlearner',\n          },\n          {\n            label: 'Toughness',\n            sublabel: 'It adds 10% to your general damage resistance per level.',\n            value: 'toughness'\n          },\n          {\n            label: 'Explorer',\n            sublabel: 'You\\'ll get more random encounters with this perk.',\n            value: 'explorer'\n          }],\n        },\n        validators: [\n          (ctrl: AbstractControl) => {\n            if (ctrl.value && Array.isArray(ctrl.value) && ctrl.value.length === 2) {\n              return null;\n            }\n            return {\n              perks: true\n            };\n          }\n        ],\n        hints: [{\n          type: 'error',\n          error: 'perks',\n          message: 'You must select two perks'\n        }],\n      },\n      {\n        type: 'array',\n        name: 'items',\n        label: 'Items',\n        initialFields: 0,\n        fieldLabel: (index) => 'Item ' + (index + 1),\n        noFieldsLabel: 'No items',\n        field: {\n          type: 'object',\n          name: 'item_object',\n          fields: [\n            {\n              type: 'input',\n              name: 'item_name',\n              label: 'Name',\n              validators: [ Validators.required],\n              required: true,\n              hints: [\n                {\n                  type: 'error',\n                  error: 'required',\n                  message: 'Item name is required'\n                },\n              ]\n            },\n            {\n              type: 'input',\n              name: 'item_quantity',\n              label: 'Quantity',\n              params: {\n                inputType: 'number'\n              },\n              validators: [ Validators.required, Validators.min(1), Validators.max(10)],\n              required: true,\n              hints: [\n                {\n                  type: 'error',\n                  error: 'required',\n                  message: 'Item quantity is required'\n                },\n                {\n                  type: 'error',\n                  error: 'min',\n                  message: 'Minimum is 1'\n                },\n                {\n                  type: 'error',\n                  error: 'max',\n                  message: 'Maximum is 10'\n                },\n              ]\n            }\n          ]\n        }\n      },\n      {\n        type: 'checkbox',\n        name: 'terms',\n        label: 'Agree to our terms',\n        validators: [(control: AbstractControl) => {\n          if (!control.value) {\n            return {\n              termsDisagree: true,\n            };\n          }\n          return null;\n        }],\n        hints: [\n          {\n            type: 'default',\n            message: 'Read the terms to learn how we collect, use and share your data'\n          },\n          {\n            type: 'error',\n            error: 'termsDisagree',\n            message: 'You must agree to our Terms'\n          }\n        ],\n        errorStateAgent: (host, input) => input.control.invalid && host.submitted\n      },\n      {\n        type: 'buttons',\n        buttons: [\n          {\n            type: 'submit',\n            label: 'Submit',\n            class: 'emphasized',\n            appIcon: 'fas:arrow-circle-right'\n          },\n          {\n            type: 'button',\n            label: 'Reset',\n            action: 'reset'\n          }\n        ]\n      }\n    ]\n  };\n}\n"},630:(p,l,t)=>{t.r(l),t.d(l,{default:()=>m});const m='import { Component } from \'@angular/core\';\nimport { VCLFormFieldSchemaRoot, FormFieldControl, VCLFormFieldControlSchema, Conditional } from \'@vcl/ng-vcl\';\n\n@Component({\n  template: `\n    <vcl-form-control-group *ngIf="field.visible">\n      <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>\n      <demo-counter [formControl]="field.control" [min]="field.params.min" [max]="field.params.max"></demo-counter>\n    </vcl-form-control-group>\n    `,\n})\nexport class FormFieldCounterComponent {\n  constructor(public field: FormFieldControl) { }\n}\n\nexport interface CounterSchemaParams {\n  min?: number;\n  max?: number;\n}\n\nexport interface CounterSchema extends VCLFormFieldControlSchema {\n  type: \'counter\';\n  params?: CounterSchemaParams | Conditional<CounterSchemaParams>;\n}\n'}}]);