import { FormFieldControl, FormField } from './field';
import { FormFieldArrayComponent, FormFieldArray } from './array';
import {
  FormFieldButtonGroupComponent,
  FormFieldButtonGroup,
} from './button-group';
import { FormFieldButtonComponent, FormFieldButton } from './button';
import { FormFieldButtonsComponent, FormFieldButtons } from './buttons';
import { FormFieldCheckboxComponent, FormFieldCheckbox } from './checkbox';
import {
  FormFieldDatepickerComponent,
  FormFieldDatePicker,
} from './date-picker';
import { FormFieldFileInputComponent, FormFieldFileInput } from './file-input';
import { FormFieldHiddenComponent, FormFieldHidden } from './hidden';
import { FormFieldInputComponent, FormFieldInput } from './input';
import { FormFieldObjectComponent, FormFieldObject } from './object';
import {
  FormFieldPasswordInputComponent,
  FormFieldPasswordInput,
} from './password-input';
import { FormFieldRadioGroupComponent, FormFieldRadio } from './radio-group';
import { FormFieldRatingComponent, FormFieldRating } from './rating';
import {
  FormFieldSelectListComponent,
  FormFieldSelectList,
} from './select-list';
import { FormFieldSelectComponent, FormFieldSelect } from './select';
import { FormFieldSliderComponent, FormFieldSlider } from './slider';
import { FormFieldSwitchComponent, FormFieldSwitch } from './switch';
import { FormFieldTextareaComponent, FormFieldTextarea } from './textarea';
import { FormFieldTokenComponent, FormFieldToken } from './token';

export const initializeFields = () => {
  FormField.register('button', FormFieldButtonComponent, FormFieldButton);
  FormField.register('submit', FormFieldButtonComponent, FormFieldButton);
  FormField.register('buttons', FormFieldButtonsComponent, FormFieldButtons);

  FormFieldControl.register('array', FormFieldArrayComponent, FormFieldArray);
  FormFieldControl.register(
    'button-group',
    FormFieldButtonGroupComponent,
    FormFieldButtonGroup
  );
  FormFieldControl.register(
    'checkbox',
    FormFieldCheckboxComponent,
    FormFieldCheckbox
  );
  FormFieldControl.register(
    'date-picker',
    FormFieldDatepickerComponent,
    FormFieldDatePicker
  );
  FormFieldControl.register(
    'file-input',
    FormFieldFileInputComponent,
    FormFieldFileInput
  );
  FormFieldControl.register(
    'hidden',
    FormFieldHiddenComponent,
    FormFieldHidden
  );
  FormFieldControl.register('input', FormFieldInputComponent, FormFieldInput);
  FormFieldControl.register(
    'object',
    FormFieldObjectComponent,
    FormFieldObject
  );
  FormFieldControl.register(
    'password-input',
    FormFieldPasswordInputComponent,
    FormFieldPasswordInput
  );
  FormFieldControl.register(
    'radio-group',
    FormFieldRadioGroupComponent,
    FormFieldRadio
  );
  FormFieldControl.register(
    'rating',
    FormFieldRatingComponent,
    FormFieldRating
  );
  FormFieldControl.register(
    'select-list',
    FormFieldSelectListComponent,
    FormFieldSelectList
  );
  FormFieldControl.register(
    'select',
    FormFieldSelectComponent,
    FormFieldSelect
  );
  FormFieldControl.register(
    'slider',
    FormFieldSliderComponent,
    FormFieldSlider
  );
  FormFieldControl.register(
    'switch',
    FormFieldSwitchComponent,
    FormFieldSwitch
  );
  FormFieldControl.register(
    'textarea',
    FormFieldTextareaComponent,
    FormFieldTextarea
  );
  FormFieldControl.register('token', FormFieldTokenComponent, FormFieldToken);
};

export * from './field';
export * from './array';
export * from './button';
export * from './buttons';
export * from './password-input';
export * from './input';
export * from './textarea';
export * from './select-list';
export * from './select';
export * from './switch';
export * from './slider';
export * from './checkbox';
export * from './radio-group';
export * from './token';
export * from './date-picker';
export * from './file-input';
export * from './button-group';
export * from './hidden';
export * from './rating';
export * from './object';
