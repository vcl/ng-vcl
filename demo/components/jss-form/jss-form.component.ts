import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'jss-form.component.html'
})
export class JssFormComponent implements OnInit {


  /**
   * form-types see here:
   * @link https://github.com/json-schema-form/angular-schema-form/blob/development/docs/index.md#form-types
   */

  mySchema = {
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
            formType: 'text'
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

  value = {
    color: 'red',
    alive: true,
    hp: 50
  };


  constructor() { }

  ngOnInit() { }

}
