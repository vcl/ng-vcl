import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VCLProgressBarComponent } from './progress-bar.component';

export { VCLProgressBarComponent };
@NgModule({
  imports: [VCLProgressBarComponent],
  exports: [VCLProgressBarComponent],
})
export class VCLProgressBarModule {}
