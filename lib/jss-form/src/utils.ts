import { FormGroup, AbstractControl } from '@angular/forms';


export function markAsDeeplyTouched(control: AbstractControl): void {
  // Mark this control as touched
  control.markAsTouched();

  // Recursively mark any control children as touched
  if (control instanceof FormGroup) {
    Object.keys(control.controls).forEach(key => {
      const c2 = control.get(key);
      if (c2) {
        markAsDeeplyTouched(c2);
      }
    });
  }
}
