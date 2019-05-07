import {CustomSampleComponent} from './custom-sample.component';
import { AbstractControl, Validators } from '@angular/forms';
import { VCLFormSchema } from '../../../../lib/jss-form';

export const HERO_SCHEMA: VCLFormSchema = {
  title: 'hero schema',
  formControl: 'object',
  properties: {
    name: {
      formControl: 'input',
      label: 'Name',
      required: true,
      placeholder: 'The hero\'s name',
      hints: ['The hero\'s name', {error: 'required', message: 'heyy'}],
      validator: Validators.required
    },
    description: {
      formControl: 'textarea',
      label: 'Description',
      placeholder: 'The hero\'s Description',
      hints: ['The hero\'s description'],
    },
    // password: {
    //   formControl: 'password',
    //   label: 'Password',
    //   placeholder: 'Password',
    //   visibleIcon: ' fas fa-unlock ',
    //   invisibleIcon: ' fas fa-unlock-alt ',
    //   hint: 'The account password'
    // },
    // mail_old: {
    //   formControl: 'hidden',
    // },
    // color: {
    //   formControl: 'select',
    //   label: 'Team',
    //   hint: 'color defines which team the hero belongs to',
    //   mode: 'single',
    //   options: [
    //     {
    //       label: 'Red',
    //       value: '#ff0000'
    //     },
    //     {
    //       label: 'Green',
    //       value: '#008000'
    //     },
    //     {
    //       label: 'Blue',
    //       value: '#0000FF',
    //       sublabel: 'Sublabels!'
    //     },
    //     {
    //       label: 'Yellow',
    //       value: '#FFFF00'
    //     }
    //   ]
    // },
    gender: {
      formControl: 'radio',
      label: 'Gender',
      options: [{value: 'male', label: 'male'}, {value: 'female', label: 'female'}],
      hints: ['The hero\'s description', {error: 'required', message: 'is req'}],
    },
    perks: {
      formControl: 'dropdown',
      label: 'Perks',
      hints: ['The hero\'s perks'],
      selectionMode: 'multiple',
      options: [
        {
          label: 'Heave Ho!',
          value: 'heave_ho'
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
      hints: ['Whether the hero is a leader'],
    },
    // hp: {
    //   formControl: 'slider',
    //   label: 'Hitpoints',
    //   minimum: 0,
    //   maximum: 20,
    //   scale: 2,
    //   lock: false,
    //   hint: 'The hero\'s max health',
    // },
    alive: {
      formControl: 'switch',
      onLabel: 'yes',
      offLabel: 'no',
      label: 'Is alive ?',
    },
    // mainSkill: {
    //   label: 'Main skill',
    //   description: 'nested object',
    //   hint: 'The hero\'s main skill',
    //   formControl: 'object',
    //   properties: {
    //     name: {
    //       formControl: 'input',
    //       label: 'Skill name',
    //       hint: 'The skills name',
    //       validator: {
    //         type: 'string',
    //         minLength: 6
    //       }
    //     },
    //     damage: {
    //       formControl: 'number',
    //       label: 'Skill damage',
    //       hint: 'The skills max damage',
    //       validator: {
    //         type: ['number', 'null'],
    //         minimum: 0,
    //         maximum: 100,
    //       }
    //     }
    //   },
    // },
    // attributes: {
    //   formControl: 'token',
    //   label: 'Attributes',
    // },
    // dob: {
    //   formControl: 'date',
    //   label: 'Date of Birth',
    //   datePickerConfig: {
    //     displayTime: true
    //   }
    // },
    // custom: {
    //   formControl: 'custom',
    //   label: 'Custom Component',
    //   customComponent: CustomSampleComponent,
    //   customParameters: {
    //     message: 'Counter:'
    //   }
    // },
    // items: {
    //   label: 'Items',
    //   singularLabel: 'Item',
    //   formControl: 'array',
    //   hint: 'The hero\'s items',
    //   count: 2,
    //   items: {
    //     formControl: 'object',
    //     properties: {
    //       name: {
    //         formControl: 'input',
    //         label: 'Item name',
    //         validator: (c: AbstractControl) => {
    //           if (c.value) {
    //             return null;
    //           }
    //           return {
    //             foo: 'bar'
    //           };
    //         },
    //         hint: 'The items name',
    //         classInputGroup: 'vclLayoutHorizontal',
    //         classLabel: 'vclLayoutFlex vclLayout1 vclAlignRight paddingRight1',
    //         classInput: 'vclLayoutFlex vclLayout11'
    //       },
    //       quantity: {
    //         formControl: 'number',
    //         label: 'Quantity',
    //         hint: 'The item quantity',
    //         required: true,
    //         classInputGroup: 'vclLayoutHorizontal',
    //         classLabel: 'vclLayoutFlex vclLayout1 vclAlignRight paddingRight1',
    //         classInput: 'vclLayoutFlex vclLayout11'
    //       }
    //     }
    //   }
    // },
    simpleButton: {
      formControl: 'button',
      label: 'simpleButton',
      action: 'simpleButton'
    },
    submit: {
      formControl: 'button-group',
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
