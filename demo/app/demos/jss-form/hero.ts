import {CustomSampleComponent} from './custom-sample.component';

export const HERO_SCHEMA = {
  title: 'hero schema',
  description: 'describes a simple hero',
  type: 'object',
  properties: {
    name: {
      formType: 'text',
      label: 'Name',
      type: 'string',
      minLength: 4,
      placeholder: 'The hero\'s name',
      hint: 'The hero\'s name',
    },
    description: {
      formType: 'textarea',
      label: 'Description',
      type: 'string',
      placeholder: 'Text',
      hint: 'The hero\'s description',
    },
    password: {
      formType: 'password',
      label: 'Password',
      type: 'string',
      placeholder: 'Password',
      visibleIcon: ' fas fa-unlock ',
      invisibleIcon: ' fas fa-unlock-alt ',
      hint: 'The account password'
    },
    mail_old: {
      formType: 'hidden',
      type: 'string',
    },
    color: {
      formType: 'select',
      label: 'Team',
      hint: 'color defines which team the hero belongs to',
      type: 'string',
      options: [
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
          value: '#0000FF',
          sublabel: 'Sublabels!'
        },
        {
          label: 'Yellow',
          value: '#FFFF00'
        }
      ]
    },
    gender: {
      formType: 'radio',
      label: 'Gender',
      type: 'string',
      enum: ['male', 'female'],
      hint: 'The hero\'s gender',
    },
    perks: {
      formType: 'dropdown',
      label: 'Perks',
      type: 'array',
      hint: 'The hero\'s perks',
      options: [
        {
          label: 'Heave Ho!',
          value: 'heave_ho	'
        },
        {
          label: 'Snakeater',
          value: 'snakeater',
          sublabel: 'Sublabels!'
        },
        {
          label: 'Karma Beacon',
          value: 'karma_beacon'
        },
      ]
    },
    leader: {
      formType: 'checkbox',
      label: 'Leader',
      type: 'boolean',
      hideLabel: true,
      hint: 'Whether the hero is a leader',
    },
    hp: {
      formType: 'slider',
      label: 'Hitpoints',
      type: 'number',
      minimum: 0,
      maximum: 20,
      hint: 'The hero\'s max health',
    },
    alive: {
      formType: 'switch',
      label: 'Is alive?',
      type: 'boolean'
    },
    mainSkill: {
      label: 'Main skill',
      description: 'nested object',
      hint: 'The hero\'s main skill',
      type: 'object',
      properties: {
        name: {
          formType: 'text',
          label: 'Skill name',
          type: 'string',
          minLength: 1,
          hint: 'The skills name',
        },
        damage: {
          formType: 'number',
          label: 'Skill damage',
          hint: 'The skills max damage',
          type: 'number',
          min: 0,
          max: 100
        }
      },
      required: ['name', 'damage']
    },
    attributes: {
      formType: 'token',
      label: 'Attributes',
      type: 'array'
    },
    dob: {
      formType: 'date',
      label: 'Date of Birth',
      type: 'string',
      datePickerConfig: {
        displayTime: true
      }
    },
    custom: {
      formType: 'custom',
      label: 'Custom Component',
      type: 'number',
      minimum: 3,
      maximum: 5,
      customComponent: CustomSampleComponent,
      customParameters: {
        message: 'Counter:'
      }
    },
    items: {
      label: 'Items',
      singularLabel: 'Item',
      formType: 'array',
      type: 'array',
      hint: 'The hero\'s items',
      items: {
        type: 'object',
        properties: {
          name: {
            formType: 'text',
            label: 'Item name',
            type: 'string',
            minLength: 1,
            hint: 'The items name',
          },
          quantity: {
            formType: 'number',
            label: 'Quantity',
            hint: 'The item quantity',
            type: 'number',
            min: 0,
            max: 100
          }
        }
      }
    },
    submit: {
      formType: 'buttons',
      buttons: [
        {
          formType: 'submit',
          label: 'Submit',
          class: 'vclEmphasized'
        },
        {
          formType: 'button',
          label: 'Reset',
          action: 'reset'
        }
      ]
    }
  },
  required: ['name', 'color', 'perks']
};

export const HERO_DEFAULTS = {
  color: '#ff0000',
  leader: false,
  alive: true,
  hp: 10,
  custom: 0
};
