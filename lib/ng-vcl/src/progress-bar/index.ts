import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';

export { ProgressBarComponent };
@NgModule({
  imports: [ProgressBarComponent],
  exports: [ProgressBarComponent],
})
export class VCLProgressBarModule {}
