"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
function equalInputMatcher(c) {
    return c.get('myname').value === c.get('myname2').value
        ? null : { notequal: true };
}
var FormComponent = (function () {
    function FormComponent(fb) {
        this.fb = fb;
        this.items = [
            { label: 'item 1' },
            { label: 'item 2' },
            { label: 'item 3' }
        ];
        this.tokenList = [
            {
                label: 'alice',
                selected: false
            },
            {
                label: 'bob',
                selected: false
            },
            {
                label: 'carol',
                selected: false
            },
            {
                label: 'dave',
                selected: false
            }
        ];
        this.tokenList2 = [
            {
                label: 'alice',
                selected: false
            },
            {
                label: 'bob',
                selected: false
            }
        ];
        this.form = this.fb.group({
            myname: ['', forms_1.Validators.required],
            myname2: ['', forms_1.Validators.required],
            itemselect: [''],
            myradio: [''],
            mydropdown: [''],
            mycheckbox: ['', forms_1.Validators.required],
            flip: [''],
            tokenlist: [''],
            tokeninput: [''],
            datepick: ['']
        }, {
            validator: equalInputMatcher
        });
        this.form.patchValue({
            myname: 'Steven'
        });
    }
    FormComponent.prototype.ngOnInit = function () { };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        templateUrl: 'form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormComponent);
exports.FormComponent = FormComponent;
