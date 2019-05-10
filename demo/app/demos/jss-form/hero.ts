import { Validators, AbstractControl } from '@angular/forms';
import { VCLFormSchemaRoot } from '@ng-vcl/ng-vcl';

export const HERO_SCHEMA: VCLFormSchemaRoot = {
  formControl: 'form',
  properties: {
    name: {
      formControl: 'input',
      label: 'Name',
      placeholder: 'The hero\'s name',
      validators: [ Validators.required, Validators.minLength(2) ],
      required: true,
      hints: [
        {
          type: 'error',
          error: 'required',
          message: 'Name is required'
        },
        {
          type: 'error',
          error: 'minlength',
          message: 'Name must have a length of at least 2 characters'
        }
      ]
    },
    description: {
      formControl: 'textarea',
      label: 'Description',
      placeholder: 'The hero\'s Description',
    },
    leader: {
      formControl: 'switch',
      offLabel: 'No',
      onLabel: 'Yes',
      defaultValue: false,
      label: 'Leader'
    },
    picture: {
      formControl: 'file-input',
      label: 'Picture',
      multiple: false,
      placeholder: 'Picture of the hero'
    },
    email: {
      formControl: 'input',
      label: 'Email',
      validators: [ Validators.required, Validators.email ],
      required: true,
      hints: [
        {
          type: 'error',
          error: 'required',
          message: 'Email is required'
        },
        {
          type: 'error',
          error: 'email',
          message: 'Invalid Email address'
        }
      ]
    },
    gender: {
      formControl: 'radio-group',
      label: 'Gender',
      options: [{
        label: 'Male',
        value: 'm'
      }, {
        label: 'Female',
        value: 'f'
      }, {
        label: 'Genderless',
        value: 'g'
      }],
      defaultValue: 'm'
    },
    alignment: {
      formControl: 'button-group',
      label: 'Alignment',
      options: [{
        label: 'Good',
        value: 1
      }, {
        label: 'Neutral',
        value: 0
      }, {
        label: 'Evil',
        value: -1
      }]
    },
    hitpoints: {
      formControl: 'slider',
      label: 'Hit Points',
      defaultValue: 10,
      min: 5,
      max: 20,
      scale: 16,
      lock: true
    },
    skills: {
      formControl: 'object',
      type: 'fieldset',
      label: 'Skills',
      properties: {
        strength: {
          formControl: 'rating',
          label: (label) => `Strength (${label})`,
          items: ['1', '2', '3', '4', '5'],
          defaultValue: 3
        },
        agility: {
          formControl: 'rating',
          label: (label) => `Agility (${label})`,
          items: ['1', '2', '3', '4', '5'],
          defaultValue: 3
        },
        intelligence: {
          formControl: 'rating',
          label: (label) => `Intelligence (${label})`,
          items: ['1', '2', '3', '4', '5'],
          defaultValue: 3
        }
      },
      validators: [(control: AbstractControl) => {
        const s = control.get('strength');
        const a = control.get('agility');
        const i = control.get('intelligence');
        const skillPoints = (s && a && i) ? (s.value + a.value + i.value) : 0;
        return skillPoints > 10 ? { skills: true } : null;
      }],
      hints: [
        (control) => {
          const s = control.get('strength');
          const a = control.get('agility');
          const i = control.get('intelligence');
          const skillPoints = (s && a && i) ? (s.value + a.value + i.value) : 0;
          const message = `${skillPoints} of 10 skill points used`;
          if (control.hasError('skills')) {
            return {
              type: 'error',
              message
            };
          } else {
            const skillPointsAvailable = 10 - skillPoints;
            if (skillPointsAvailable > 0) {
              return {
                type: 'warning',
                message
              };
            }
            return {
              type: 'default',
              message
            };
          }
        }
      ]
    },
    perks: {
      formControl: 'select',
      label: 'Perks',
      placeholder: 'Select perks',
      selectionMode: 'multiple',
      options: [{
        label: 'Snake Eater',
        sublabel: 'It gives you a 25% increase to your poison resistance.',
        value: 'snakeeater'
      },
      {
        label: 'Swift Learner',
        sublabel: 'Swift Learner	Whenever you gain experience, you\'ll receive 5% more experience per level of the perk.',
        value: 'swiftlearner',
      },
      {
        label: 'Toughness',
        sublabel: 'It adds 10% to your general damage resistance per level.',
        value: 'toughness'
      },
      {
        label: 'Explorer',
        sublabel: 'You\'ll get more random encounters with this perk.',
        value: 'explorer'
      }],
      validators: [
        ((ctrl: AbstractControl) => {
          if (ctrl.value && Array.isArray(ctrl.value) && ctrl.value.length === 2) {
            return null;
          }
          return {
            perks: true
          };
        })
      ],
      hints: [{
        type: 'error',
        error: 'perks',
        message: 'You must select two perks'
      }],
    },
    terms: {
      formControl: 'checkbox',
      label: 'Agree to our terms',
      validators: [(control: AbstractControl) => {
        if (!control.value) {
          return {
            termsDisagree: true,
          };
        }
        return null;
      }],
      hints: [
        'Read the terms to learn how we collect, use and share your data',
        {
          type: 'error',
          error: 'termsDisagree',
          message: 'You must agree to our Terms'
        }
      ]
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
};
export const HERO_DEFAULTS = {
  color: '#008000',
  gender: 'male',
  hp: 5,
  custom: 3,
  attributes: ['test token'],
  items: [{name: 'Item 1', quantity: 2}],
  perks: ['heave_ho']
};
