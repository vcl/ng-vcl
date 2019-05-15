import { Validators, AbstractControl } from '@angular/forms';
import { VCLFormFieldSchemaRoot } from '@ng-vcl/ng-vcl';

export const HERO_SCHEMA: VCLFormFieldSchemaRoot = {
  type: 'form',
  fields: {
    name: {
      type: 'input',
      label: 'Name',
      placeholder: 'The hero\'s name',
      validators: [Validators.required, Validators.minLength(2)],
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
      type: 'textarea',
      label: 'Description',
      placeholder: 'The hero\'s Description',
      required: true,
      validators: [Validators.required],
      hints: [
        {
          type: 'error',
          error: 'required',
          message: 'Description is required'
        }
      ]
    },
    leader: {
      type: 'switch',
      offLabel: 'No',
      onLabel: 'Yes',
      defaultValue: false,
      label: 'Leader',
      validators: [(control: AbstractControl) => {
        if (!control.value) {
          return {
            leader: true,
          };
        }
        return null;
      }],
      hints: [
        {
          type: 'error',
          error: 'leader',
          message: 'Hero must be leader'
        }
      ]
    },
    picture: {
      type: 'file-input',
      label: 'Picture',
      multiple: false,
      placeholder: 'Picture of the hero'
    },
    email: {
      type: 'input',
      label: 'Email',
      validators: [Validators.required, Validators.email],
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
      type: 'radio-group',
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
      type: 'button-group',
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
    mail_old: {
      type: 'hidden'
    },
    dob: {
      type: 'date-picker',
      label: 'Date of Birth',
      datePickerConfig: {
        displayTime: true
      }
    },
    hitpoints: {
      type: 'slider',
      label: 'Hit Points',
      min: 5,
      max: 20,
      scale: 16,
      lock: true,
      validators: [(control: AbstractControl) => {
        if (control.value < 15) {
          return {
            minVal: true,
          };
        }
        return null;
      }],
      hints: [
        {
          type: 'error',
          error: 'minVal',
          message: 'Minimum value is 15'
        }
      ]
    },
    skills: {
      type: 'object',
      layout: 'fieldset',
      label: 'Skills',
      fields: {
        strength: {
          type: 'rating',
          label: (label) => `Strength (${label})`,
          items: ['1', '2', '3', '4', '5'],
          defaultValue: 3
        },
        agility: {
          type: 'rating',
          label: (label) => `Agility (${label})`,
          items: ['1', '2', '3', '4', '5'],
          defaultValue: 3
        },
        intelligence: {
          type: 'rating',
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
    attributes: {
      type: 'token',
      label: 'Attributes',
      hints: [
        {
          type: 'default',
          message: 'Attributes'
        },
        {
          type: 'error',
          error: 'minLength',
          message: 'Minimum length is 2'
        },
      ],
      validators: [(control: AbstractControl) => {
        return Array.isArray(control.value) && control.value.length > 1 ? null : { minLength: true };
      }],
    },
    counter: {
      type: 'counter',
      label: 'Counter',
      defaultValue: 1
    },
    perks: {
      type: 'select',
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
        (ctrl: AbstractControl) => {
          if (ctrl.value && Array.isArray(ctrl.value) && ctrl.value.length === 2) {
            return null;
          }
          return {
            perks: true
          };
        }
      ],
      hints: [{
        type: 'error',
        error: 'perks',
        message: 'You must select two perks'
      }],
    },
    terms: {
      type: 'checkbox',
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
      type: 'buttons',
      buttons: [
        {
          type: 'submit',
          label: 'Submit',
          class: 'vclEmphasized'
        },
        {
          type: 'button',
          label: 'Reset',
          action: 'reset'
        }
      ]
    }
  },
};
export const HERO_DEFAULTS = {
  color: '#008000',
  mail_old: 'a',
  hp: 5,
  custom: 3,
  items: [{name: 'Item 1', quantity: 2}],
  perks: ['heave_ho']
};
