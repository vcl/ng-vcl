import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { directives } from './directives/directives';
import { SortIconComponent } from './components/sorticon.component';

@NgModule({
  imports: [CommonModule],
  exports: [SortIconComponent, ...directives],
  declarations: [SortIconComponent, ...directives],
  entryComponents: [SortIconComponent],
  providers: [],
})
export class VCLTableModule { }
