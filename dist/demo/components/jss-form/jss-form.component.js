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
var JssFormComponent = (function () {
    function JssFormComponent() {
        this.mySchema = {
            title: 'hero schema',
            description: 'describes a simple hero',
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    formType: 'text',
                    placeholder: 'The heroe\'s name',
                    minLength: 4,
                    maxLength: 100,
                },
                color: {
                    description: 'color defines which team the hero belongs to',
                    label: 'team',
                    formType: 'select',
                    type: 'string',
                    enum: ['red', 'green', 'blue', 'yellow']
                },
                isleader: {
                    label: 'leader',
                    formType: 'checkbox',
                    type: 'boolean'
                },
                hp: {
                    type: 'number',
                    formType: 'slider',
                    min: 0,
                    max: 100
                },
                alive: {
                    type: 'boolean',
                    formType: 'switch'
                },
                mainSkill: {
                    description: 'nested object',
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            formType: 'text',
                            minLength: 1
                        },
                        damage: {
                            type: 'number',
                            formType: 'number',
                            min: 0,
                            max: 100
                        }
                    },
                    required: ['name', 'damage']
                }
            },
            required: ['name', 'color']
        };
        this.value = {
            isleader: true,
            color: 'red',
            alive: true,
            hp: 50
        };
    }
    JssFormComponent.prototype.ngOnInit = function () {
    };
    JssFormComponent.prototype.onError = function (err) {
        console.log('error:');
        console.dir(err);
    };
    return JssFormComponent;
}());
JssFormComponent = __decorate([
    core_1.Component({
        templateUrl: 'jss-form.component.html'
    }),
    __metadata("design:paramtypes", [])
], JssFormComponent);
exports.JssFormComponent = JssFormComponent;
