import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'jss-form.component.html'
})
export class JssFormComponent implements OnInit {


  mySchema = {
    title: 'hero schema',
    description: 'describes a simple hero',
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 4,
        maxLength: 100
      },
      color: {
        label: 'team',
        description: 'color defines which team the hero belongs to',
        type: 'string',
        enum: ['red', 'green', 'blue', 'yellow']
      },
      hp: {
        type: 'number',
        min: 0,
        max: 100,
        default: 100
      },
      mainSkill: {
        description: 'nested object',
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          damage: {
            type: 'number',
            min: 0,
            max: 100
          }
        },
        required: ['name', 'damage']
      }
    },
    required: ['name', 'color']
  };

  value = {};


  constructor() { }

  ngOnInit() { }

}
