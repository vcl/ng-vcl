import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { GalleryImageComponent } from './gallery-image.component';
import {GalleryBodyComponent} from "./gallery-body.component";
import {GalleryFooterComponent} from "./gallery-footer.component";
import {GalleryHeaderComponent} from "./gallery-header.component";
import {GalleryThumbnailsComponent} from "./gallery-thumbnails.component";

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

@NgModule({
  imports: [CommonModule],
  exports: [GalleryBodyComponent],
  declarations: [GalleryBodyComponent]
})
export class VCLGalleryBodyModule { }

@NgModule({
  imports: [CommonModule],
  exports: [GalleryFooterComponent],
  declarations: [GalleryFooterComponent]
})
export class VCLGalleryFooterModule { }

@NgModule({
  imports: [CommonModule],
  exports: [GalleryHeaderComponent],
  declarations: [GalleryHeaderComponent]
})
export class VCLGalleryHeaderModule { }

@NgModule({
  imports: [CommonModule],
  exports: [GalleryThumbnailsComponent],
  declarations: [GalleryThumbnailsComponent]
})
export class VCLGalleryThumbnailsModule { }
