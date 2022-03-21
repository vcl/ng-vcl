import { Validators, AbstractControl } from '@angular/forms';
import { conditional, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';
import { CounterSchema } from './jss-form-extended';

// Extended schema including the custom counter component
export type ExtendedFormFieldSchemaRoot = VCLFormFieldSchemaRoot<CounterSchema>;

export interface HeroSchemaConfig {
  datePickerPlaceholder: string;
}

export function buildHeroSchema(config: HeroSchemaConfig): ExtendedFormFieldSchemaRoot {
  return {
    type: 'form',
    fields: [
      {
        name: 'name',
        type: 'input',
        label: 'Name',
        params: {
          placeholder: 'The hero\'s name'
        },
        validators: [
          Validators.required, Validators.minLength(2)
        ],
        required: true,
        help: {
          title: 'Help title',
          text: 'Help text',
        },
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
      {
        type: 'textarea',
        name: 'description',
        label: 'Description',
        params: {
          placeholder: 'The hero\'s Description',
        }
      },
      {
        type: 'date-picker',
        name: 'dob',
        label: 'Date of Birth',
        params: {
          placeholder: config.datePickerPlaceholder
        },
        help: {
          title: 'Date of Birth title',
          text: 'Date of Birth text',
          confirmButtonLabel: 'Confirm',
          layerWidth: '15em',
          icon: 'vcl:question'
        },
      },
      {
        type: 'password-input',
        name: 'password',
        label: 'Password',
        params: {
          placeholder: 'Enter password',
        },
        validators: [
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        ],
        hints: [
          {
            type: 'error',
            error: 'required',
            message: 'Password is required'
          },
          {
            type: 'error',
            error: 'pattern',
            message: 'Password must...'
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- At least 8 characters in length'
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- Contain a lowercase letters'
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- Contain a uppercase letters'
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- Contain a number'
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- Contain a special character'
          }
        ]
      },
      {
        type: 'counter',
        name: 'level',
        label: 'Level',
        defaultValue: 1,
        params: {
          min: 1,
          max: 10
        }
      },
      {
        type: 'switch',
        name: 'leader',
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
      {
        type: 'file-input',
        name: 'picture',
        label: 'Picture',
        params: {
          multiple: false,
          placeholder: 'Picture of the hero'
        }
      },
      {
        type: 'input',
        params: {
          prependedIcon: 'mdi:email',
        },
        name: 'email',
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
      {
        type: 'radio-group',
        name: 'gender',
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
      {
        type: 'button-group',
        name: 'alignment',
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
      {
        type: 'hidden',
        name: 'language',
        defaultValue: navigator.language
      },
      {
        type: 'select-list',
        name: 'class',
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
      {
        type: 'slider',
        name: 'hitpoints',
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
      {
        type: 'object',
        name: 'skills',
        layout: 'fieldset',
        label: 'Skills',
        fields: [
          {
            type: 'rating',
            name: 'strength',
            defaultValue: 3,
            params: {
              items: ['1', '2', '3', '4', '5'],
              valueLabel: (label) => `Strength (${label})`,
            },
          },
          {
            type: 'rating',
            name: 'agility',
            defaultValue: 3,
            params: {
              items: ['1', '2', '3', '4', '5'],
              valueLabel: (label) => `Agility (${label})`,
            },
          },
          {
            type: 'rating',
            name: 'intelligence',
            defaultValue: 3,
            params: {
              items: ['1', '2', '3', '4', '5'],
              valueLabel: (label) => `Intelligence (${label})`,
            },
          },
        ],
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
      {
        type: 'token',
        name: 'attributes',
        label: 'Attributes',
        hints: [
          {
            type: 'default',
            message: 'Press enter to add attribute'
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
      {
        type: 'select',
        name: 'perks',
        label: 'Perks',
        params: {
          placeholder: 'Select perks',
          selectionMode: 'multiple',
          search: true,
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
      {
        type: 'array',
        name: 'items',
        label: 'Items',
        initialFields: 0,
        fieldLabel: (index) => 'Item ' + (index + 1),
        noFieldsLabel: 'No items',
        field: {
          type: 'object',
          name: 'item_object',
          fields: [
            {
              type: 'input',
              name: 'item_name',
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
            {
              type: 'input',
              name: 'item_quantity',
              label: 'Quantity',
              params: {
                inputType: 'number'
              },
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
          ]
        }
      },
      {
        type: 'checkbox',
        name: 'terms',
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
        ],
        errorStateAgent: (host, input) => input.control.invalid && host.submitted
      },
      {
        type: 'buttons',
        buttons: [
          {
            type: 'submit',
            label: 'Submit',
            class: 'emphasized',
            appIcon: 'fas:arrow-circle-right'
          },
          {
            type: 'button',
            label: 'Reset',
            action: 'reset'
          }
        ]
      }
    ]
  };
}
