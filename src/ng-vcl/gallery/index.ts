import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { GalleryImageComponent } from './gallery-image';

@NgModule({
  imports: [CommonModule],
  exports: [GalleryComponent],
  declarations: [GalleryComponent]
})
export class VCLGalleryModule { }

@NgModule({
  imports: [CommonModule],
  exports: [GalleryImageComponent],
  declarations: [GalleryImageComponent]
})
export class VCLGalleryImageModule { }
