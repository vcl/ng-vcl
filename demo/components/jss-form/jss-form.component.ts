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
        enum: ['#ff0000', '#008000', '#0000FF', '#FFFF00'], // enum not required when items are used
        items: [
          {
            label: 'Red',
            value: '#ff0000'
          },
          {
            label: 'Green',
            value: '#008000'
          },
          {
            label: 'Blue',
            value: '#0000FF'
          },
          {
            label: 'Yellow',
            value: '#FFFF00'
          }
        ]
      },
      color2: {
        label: 'subcolor',
        formType: 'radio',
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
        formType: 'slider'
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

  value = {
    isleader: true,
    alive: true,
    hp: 50
  };



  constructor() { }

  ngOnInit() {
  }

  onError(err) {
//    console.log('error:');
//    console.dir(err);
  }

}
