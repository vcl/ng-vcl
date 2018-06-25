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
    },
    description: {
      formType: 'textarea',
      label: 'Description',
      type: 'string',
      placeholder: 'Text',
    },
    password: {
      formType: 'password',
      label: 'Password',
      type: 'string',
      placeholder: 'Password',
      visibleIcon: ' fa fa-unlock ',
      invisibleIcon: ' fa fa-unlock-alt '
    },
    mail_old: {
      formType: 'hidden',
      type: 'string',
    },
    color: {
      formType: 'select',
      label: 'Team',
      description: 'color defines which team the hero belongs to',
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
      enum: ['male', 'female']
    },
    perks: {
      formType: 'dropdown',
      label: 'Perks',
      type: 'array',
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
      hideLabel: true
    },
    hp: {
      formType: 'slider',
      label: 'Hitpoints',
      type: 'number',
      minimum: 0,
      maximum: 20,
    },
    alive: {
      formType: 'switch',
      label: 'Is alive?',
      type: 'boolean'
    },
    mainSkill: {
      label: 'Main skill',
      description: 'nested object',
      type: 'object',
      properties: {
        name: {
          formType: 'text',
          label: 'Skill name',
          type: 'string',
          minLength: 1
        },
        damage: {
          formType: 'number',
          label: 'Skill damage',
          type: 'number',
          min: 0,
          max: 100
        }
      },
      required: ['name', 'damage']
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
  hp: 10
};
