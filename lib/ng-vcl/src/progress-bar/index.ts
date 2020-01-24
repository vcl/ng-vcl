import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';

export { ProgressBarComponent };
@NgModule({
  imports: [CommonModule],
  exports: [ProgressBarComponent],
  declarations: [ProgressBarComponent]
})
export class VCLProgressBarModule { }
