"use strict";(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[635],{7635:function(e,l,a){a.r(l),a.d(l,{GalleryDemoModule:function(){return y},demo:function(){return u}});var t=a(16274),m=a(95454),i=a(46906),g=a(62518),n=a(84271),s=a(60884),o=a(79243),r=a(97225),p=a(79563),c=a(71884);let h=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["ng-component"]],decls:47,vars:7,consts:[[3,"selectedImage"],["image","https://picsum.photos/600/500?image=450","thumbnail","https://picsum.photos/200/200?image=450","alt","Image 1"],["image","https://picsum.photos/600/500?image=451","thumbnail","https://picsum.photos/200/200?image=451","alt","Image 2"],["image","https://picsum.photos/600/500?image=452","thumbnail","https://picsum.photos/200/200?image=452","alt","Image 3"],["image","https://picsum.photos/600/500?image=453","thumbnail","https://picsum.photos/200/200?image=453","alt","Image 4"],[1,"gallery-header"],[3,"selectedImage","wrap"],["image","https://picsum.photos/600/500?image=440","thumbnail","https://picsum.photos/200/200?image=440","alt","Image 1"],["image","https://picsum.photos/600/500?image=441","thumbnail","https://picsum.photos/200/200?image=441","alt","Image 2"],["image","https://picsum.photos/600/500?image=442","thumbnail","https://picsum.photos/200/200?image=442","alt","Image 3"],["image","https://picsum.photos/600/500?image=443","thumbnail","https://picsum.photos/200/200?image=443","alt","Image 4"],["external",""],["image","https://picsum.photos/600/500?image=430","thumbnail","https://picsum.photos/200/200?image=430","alt","Image 1"],["image","https://picsum.photos/600/500?image=431","thumbnail","https://picsum.photos/200/200?image=431","alt","Image 2"],["image","https://picsum.photos/600/500?image=432","thumbnail","https://picsum.photos/200/200?image=432","alt","Image 3"],["image","https://picsum.photos/600/500?image=433","thumbnail","https://picsum.photos/200/200?image=433","alt","Image 4"],[3,"target"]],template:function(e,l){if(1&e&&(n.TgZ(0,"vcl-gallery",0),n._UZ(1,"vcl-gallery-image",1),n._UZ(2,"vcl-gallery-image",2),n._UZ(3,"vcl-gallery-image",3),n._UZ(4,"vcl-gallery-image",4),n.TgZ(5,"div",5),n.TgZ(6,"h2"),n._uU(7,"Simple gallery"),n.qZA(),n.qZA(),n._UZ(8,"vcl-gallery-body"),n._UZ(9,"vcl-gallery-footer"),n._UZ(10,"vcl-gallery-thumbnails"),n.qZA(),n._UZ(11,"br"),n._UZ(12,"br"),n.TgZ(13,"vcl-gallery",6),n._UZ(14,"vcl-gallery-image",7),n._UZ(15,"vcl-gallery-image",8),n._UZ(16,"vcl-gallery-image",9),n._UZ(17,"vcl-gallery-image",10),n.TgZ(18,"div",5),n.TgZ(19,"h2"),n._uU(20,"Gallery with wrapping"),n.qZA(),n.qZA(),n._UZ(21,"vcl-gallery-body"),n._UZ(22,"vcl-gallery-footer"),n._UZ(23,"vcl-gallery-thumbnails"),n.qZA(),n._UZ(24,"br"),n._UZ(25,"br"),n.TgZ(26,"h2"),n._uU(27,"Gallery components seperated"),n.qZA(),n.TgZ(28,"vcl-gallery",0,11),n._UZ(30,"vcl-gallery-image",12),n._UZ(31,"vcl-gallery-image",13),n._UZ(32,"vcl-gallery-image",14),n._UZ(33,"vcl-gallery-image",15),n.qZA(),n.TgZ(34,"h3"),n._uU(35,"Body:"),n.qZA(),n._UZ(36,"vcl-gallery-body",16),n._UZ(37,"br"),n._UZ(38,"br"),n.TgZ(39,"h3"),n._uU(40,"Footer:"),n.qZA(),n._UZ(41,"vcl-gallery-footer",16),n._UZ(42,"br"),n._UZ(43,"br"),n.TgZ(44,"h3"),n._uU(45,"Thumbnails:"),n.qZA(),n._UZ(46,"vcl-gallery-thumbnails",16)),2&e){const e=n.MAs(29);n.Q6J("selectedImage",1),n.xp6(13),n.Q6J("selectedImage",1)("wrap",!0),n.xp6(15),n.Q6J("selectedImage",1),n.xp6(8),n.Q6J("target",e),n.xp6(5),n.Q6J("target",e),n.xp6(5),n.Q6J("target",e)}},directives:[s.vY,o.y,r.u,p.E,c.D],encapsulation:2}),e})();function u(){return{label:"Gallery",tabs:{Demo:h,"README.md":{type:"md",content:'# vcl-gallery\n\nA gallery containing multiple images with mobile swipe support.\n\n_Note: HammerJS must be loaded for touch events_\n\n## Usage\n\n```html\n<vcl-gallery [selectedImage]="1" [wrap]="true">\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=450" thumbnail="https://picsum.photos/200/200?image=450" alt="Image 1"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=451" thumbnail="https://picsum.photos/200/200?image=451" alt="Image 2"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=452" thumbnail="https://picsum.photos/200/200?image=452" alt="Image 3"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=453" thumbnail="https://picsum.photos/200/200?image=453" alt="Image 4"></vcl-gallery-image>\n\n  <vcl-gallery-header galleryTitle="Simple gallery"></vcl-gallery-header>\n  <vcl-gallery-body></vcl-gallery-body>\n  <vcl-gallery-footer></vcl-gallery-footer>\n  <vcl-gallery-thumbnails></vcl-gallery-thumbnails>\n</vcl-gallery>\n```\n\n### API\n\n#### Gallery Attributes\n\nName            | Type    | Default  | Description\n--------------- | ------- | -------- | ----------------------------------\n`selectedImage` | number  | 0        | the selected image (optional)\n`wrap`          | string  | false    | whether to wrap around (optional)\n`row`           | boolean | false    | align body and thumbnails in a row\n\n#### Gallery Methods\n\nName             | Arguments     | Description\n---------------- | ------------- | -------------------------\n`selectImage`    | index: number | select an image by index\n`selectNext`     |               | select next image\n`selectPrevious` |               | select previous image\n\n#### Image Attributes\n\nName        | Type    | Default  | Description\n----------- | ------- | -------- | ----------------------------\n`image`     | string  |          | image source\n`thumbnail` | string  | `""`     | thumbnail source (optional)\n`alt`       | string  | `""`     | alt text (optional)\n\n### Gallery Header Attributes\n\nName            | Type              | Default  | Description\n--------------- | ----------------- | -------- | ---------------------\n`galleryTitle`  | string            |          | title of the gallery\n`target`       | GalleryComponent  |          | gallery component (required if outside of it)\n\n### Gallery Body Attributes\n\nName            | Type              | Default  | Description\n--------------- | ----------------- | -------- | ---------------------\n`target`       | GalleryComponent  |          | gallery component (required if outside of it)\n\n### Gallery Footer Attributes\n\nName            | Type              | Default  | Description\n--------------- | ----------------- | -------- | ---------------------\n`target`       | GalleryComponent  |          | gallery component (required if outside of it)\n\n### Gallery Thumbnails Attributes\n\nName            | Type              | Default  | Description\n--------------- | ----------------- | -------- | ---------------------\n`target`        | GalleryComponent  |          | gallery component (required if outside of it)\n'},"demo.component.html":{type:"html",content:a(60219)},"demo.component.ts":{type:"ts",content:a(21453)}}}}let y=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[t.ez,g.l,i.jnL,m.Bz.forChild([{path:"",component:g.z,data:{demo:u}}])]]}),e})()},60219:function(e,l,a){a.r(l),l.default='<vcl-gallery [selectedImage]="1">\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=450" thumbnail="https://picsum.photos/200/200?image=450" alt="Image 1"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=451" thumbnail="https://picsum.photos/200/200?image=451" alt="Image 2"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=452" thumbnail="https://picsum.photos/200/200?image=452" alt="Image 3"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=453" thumbnail="https://picsum.photos/200/200?image=453" alt="Image 4"></vcl-gallery-image>\n\n  <div class="gallery-header">\n    <h2>Simple gallery</h2>\n  </div>\n\n  <vcl-gallery-body></vcl-gallery-body>\n  <vcl-gallery-footer></vcl-gallery-footer>\n  <vcl-gallery-thumbnails></vcl-gallery-thumbnails>\n</vcl-gallery>\n<br><br>\n\n<vcl-gallery [selectedImage]="1" [wrap]="true">\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=440" thumbnail="https://picsum.photos/200/200?image=440" alt="Image 1"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=441" thumbnail="https://picsum.photos/200/200?image=441" alt="Image 2"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=442" thumbnail="https://picsum.photos/200/200?image=442" alt="Image 3"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=443" thumbnail="https://picsum.photos/200/200?image=443" alt="Image 4"></vcl-gallery-image>\n\n  <div class="gallery-header">\n    <h2>Gallery with wrapping</h2>\n  </div>\n\n  <vcl-gallery-body></vcl-gallery-body>\n  <vcl-gallery-footer></vcl-gallery-footer>\n  <vcl-gallery-thumbnails></vcl-gallery-thumbnails>\n</vcl-gallery>\n<br><br>\n\n<h2>Gallery components seperated</h2>\n\n<vcl-gallery #external [selectedImage]="1">\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=430" thumbnail="https://picsum.photos/200/200?image=430" alt="Image 1"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=431" thumbnail="https://picsum.photos/200/200?image=431" alt="Image 2"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=432" thumbnail="https://picsum.photos/200/200?image=432" alt="Image 3"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=433" thumbnail="https://picsum.photos/200/200?image=433" alt="Image 4"></vcl-gallery-image>\n</vcl-gallery>\n\n<h3>Body:</h3>\n<vcl-gallery-body [target]="external"></vcl-gallery-body>\n<br><br>\n\n<h3>Footer:</h3>\n<vcl-gallery-footer [target]="external"></vcl-gallery-footer>\n<br><br>\n\n<h3>Thumbnails:</h3>\n<vcl-gallery-thumbnails [target]="external"></vcl-gallery-thumbnails>\n'},21453:function(e,l,a){a.r(l),l.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class GalleryDemoComponent {\n\n}\n"}}]);