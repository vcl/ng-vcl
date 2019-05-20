import { Validators, AbstractControl } from '@angular/forms';
import { VCLFormFieldSchemaRoot, conditional } from '@ng-vcl/ng-vcl';

export const HERO_SCHEMA: VCLFormFieldSchemaRoot<'counter'> = {
  type: 'form',
  fields: {
    name: {
      type: 'input',
      label: 'Name',
      params: {
        placeholder: 'The hero\'s name',
      },
      validators: [
        Validators.required, Validators.minLength(2)
      ],
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
      params: {
        placeholder: 'The hero\'s Description',
      }
    },
    level: {
      type: 'counter',
      label: 'Level',
      defaultValue: 1,
      params: {
        min: 1,
        max: 10
      }
    },
    leader: {
      type: 'switch',
      label: 'Leader',
      defaultValue: false,
      visible: conditional(['level'], (level: AbstractControl) => level.value >= 5),
      validators: [(control: AbstractControl) => {
        if (!control.value) {
          return {
            leader: true,
          };
        }
        return null;
      }],
      params: {
        offLabel: 'No',
        onLabel: 'Yes',
      }
    },
    picture: {
      type: 'file-input',
      label: 'Picture',
      params: {
        multiple: false,
        placeholder: 'Picture of the hero'
      }
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
      defaultValue: 'm',
      params: {
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
      }
    },
    dob: {
      type: 'date-picker',
      label: 'Date of Birth'
    },
    alignment: {
      type: 'button-group',
      label: 'Alignment',
      params: {
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
      }
    },
    language: {
      type: 'hidden',
      defaultValue: navigator.language
    },
    class: {
      type: 'select-list',
      label: 'Class',
      defaultValue: null,
      params: {
        options: [{
          label: 'Warrior',
          value: 'warrior'
        }, {
          label: 'Mage',
          value: 'mage'
        }, {
          label: 'Rogue',
          value: 'rogue'
        }]
      }
    },
    hitpoints: {
      type: 'slider',
      label: 'Hit Points',
      defaultValue: 15,
      disabled: conditional(['class'], (c) => !c.value),
      params: conditional(['class'], (control) => {
        if (control.value === 'rogue') {
          return {
            min: 8,
            max: 18,
            scale: 11,
            lock: true,
          };
        }  else if (control.value === 'mage') {
          return {
            min: 5,
            max: 15,
            scale: 11,
            lock: true,
          };
        } else {
          return {
            min: 10,
            max: 20,
            scale: 11,
            lock: true,
          };
        }
      }),
    },
    skills: {
      type: 'object',
      layout: 'fieldset',
      label: 'Skills',
      fields: {
        strength: {
          type: 'rating',
          defaultValue: 3,
          params: {
            items: ['1', '2', '3', '4', '5'],
            valueLabel: (label) => `Strength (${label})`,
          },
        },
        agility: {
          type: 'rating',
          defaultValue: 3,
          params: {
            items: ['1', '2', '3', '4', '5'],
            valueLabel: (label) => `Agility (${label})`,
          },
        },
        intelligence: {
          type: 'rating',
          defaultValue: 3,
          params: {
            items: ['1', '2', '3', '4', '5'],
            valueLabel: (label) => `Intelligence (${label})`,
          },
        },
      },
      validators: [(control: AbstractControl) => {
        const s = control.get('strength');
        const a = control.get('agility');
        const i = control.get('intelligence');
        const skillPoints = (s && a && i) ? (s.value + a.value + i.value) : 0;
        return skillPoints > 10 ? { skills: true } : null;
      }],
      hints: [
        conditional(['skills', 'skills.strength', 'skills.agility', 'skills.intelligence'], (control, s, a, i) => {
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
        })
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
    perks: {
      type: 'select',
      label: 'Perks',
      params: {
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
      },
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
    items: {
      type: 'array',
      label: 'Items',
      initialFields: 2,
      fieldLabel: (index) => 'Item ' + (index + 1),
      noFieldsLabel: 'Hero carries no items',
      field: {
        type: 'object',
        fields: {
          item_name: {
            type: 'input',
            label: 'Name',
            validators: [ Validators.required],
            required: true,
            hints: [
              {
                type: 'error',
                error: 'required',
                message: 'Item name is required'
              },
            ]
          },
          item_quantity: {
            type: 'number',
            label: 'Quantity',
            validators: [ Validators.required, Validators.min(1), Validators.max(10)],
            required: true,
            hints: [
              {
                type: 'error',
                error: 'required',
                message: 'Item quantity is required'
              },
              {
                type: 'error',
                error: 'min',
                message: 'Minimum is 1'
              },
              {
                type: 'error',
                error: 'max',
                message: 'Maximum is 10'
              },
            ]
          }
        }
      }
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
        {
          type: 'default',
          message: 'Read the terms to learn how we collect, use and share your data'
        },
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
