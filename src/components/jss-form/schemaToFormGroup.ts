import { FormGroup, Validators, FormBuilder, AbstractControl  } from '@angular/forms';

export function schemaToFormGroup(schema: any): any {

  const fGroupObj = {
    name: ['', Validators.required],
    'mainSkill.name': ['', Validators.required],
    mainSkill: {
      name: ['', Validators.required]
    }
  };

  function traverse(currentObj, currentPath) {

    if (typeof currentObj !== 'object') return;
    for (let attributeName in currentObj) {
      let nextPath = currentPath;
      if (attributeName != 'properties') nextPath = nextPath + '.' + attributeName;
      traverse(currentObj[attributeName], nextPath);
    }
  }
  // TODO traverse(schema, '');

  return fGroupObj;
}
