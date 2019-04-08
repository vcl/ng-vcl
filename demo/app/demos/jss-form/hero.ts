import {CustomSampleComponent} from './custom-sample.component';

export const HERO_SCHEMA = {
  title: 'hero schema',
  description: 'describes a simple hero',
  type: 'object',
  properties: {
    name: {
      formControl: 'text',
      label: 'Name',
      type: 'string',
      minLength: 4,
      placeholder: 'The hero\'s name',
      hint: 'The hero\'s name',
    },
    description: {
      formControl: 'textarea',
      label: 'Description',
      type: 'string',
      placeholder: 'Text',
      hint: 'The hero\'s description',
    },
    password: {
      formControl: 'password',
      label: 'Password',
      type: 'string',
      placeholder: 'Password',
      visibleIcon: ' fas fa-unlock ',
      invisibleIcon: ' fas fa-unlock-alt ',
      hint: 'The account password'
    },
    mail_old: {
      formControl: 'hidden',
      type: 'string',
    },
    color: {
      formControl: 'select',
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
      formControl: 'radio',
      label: 'Gender',
      type: 'string',
      enum: ['male', 'female'],
      hint: 'The hero\'s gender',
    },
    perks: {
      formControl: 'dropdown',
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
      formControl: 'checkbox',
      label: 'Leader',
      type: 'boolean',
      hideLabel: true,
      hint: 'Whether the hero is a leader',
    },
    hp: {
      formControl: 'slider',
      label: 'Hitpoints',
      type: 'number',
      minimum: 0,
      maximum: 20,
      hint: 'The hero\'s max health',
    },
    alive: {
      formControl: 'switch',
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
          formControl: 'text',
          label: 'Skill name',
          type: 'string',
          minLength: 1,
          hint: 'The skills name',
        },
        damage: {
          formControl: 'number',
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
      formControl: 'token',
      label: 'Attributes',
      type: 'array'
    },
    dob: {
      formControl: 'date',
      label: 'Date of Birth',
      type: 'string',
      datePickerConfig: {
        displayTime: true
      }
    },
    custom: {
      formControl: 'custom',
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
      formControl: 'array',
      type: 'array',
      hint: 'The hero\'s items',
      items: {
        type: 'object',
        properties: {
          name: {
            formControl: 'text',
            label: 'Item name',
            type: 'string',
            minLength: 1,
            hint: 'The items name',
            classInputGroup: 'vclLayoutHorizontal',
            classLabel: 'vclLayoutFlex vclLayout1 vclAlignRight paddingRight1',
            classInput: 'vclLayoutFlex vclLayout11'
          },
          quantity: {
            formControl: 'number',
            label: 'Quantity',
            hint: 'The item quantity',
            type: 'number',
            min: 0,
            max: 100,
            classInputGroup: 'vclLayoutHorizontal',
            classLabel: 'vclLayoutFlex vclLayout1 vclAlignRight paddingRight1',
            classInput: 'vclLayoutFlex vclLayout11'
          }
        }
      }
    },
    submit: {
      formControl: 'buttons',
      buttons: [
        {
          formControl: 'submit',
          label: 'Submit',
          class: 'vclEmphasized'
        },
        {
          formControl: 'button',
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
