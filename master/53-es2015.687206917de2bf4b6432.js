"use strict";(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[53],{16053:function(e,n,t){t.r(n),t.d(n,{LayerDemoModule:function(){return k},demo:function(){return w}});var o=t(95454),a=t(16274),r=t(36196),l=t(62518),c=t(84271),i=t(59150),s=t(10275),p=t(57120);let u=(()=>{class e{constructor(e){this.layer=e}get title(){return this.layer.data.title}close(e){this.layer.close({value:e})}}return e.\u0275fac=function(n){return new(n||e)(c.Y36(r.Cc_))},e.\u0275cmp=c.Xpm({type:e,selectors:[["ng-component"]],decls:8,vars:2,consts:[[3,"showCloseButton","close"],["vcl-button","","vclPanelFooterButton","",1,"transparent","outline",3,"click"],["vcl-button","","vclPanelFooterButton","",1,"emphasized",3,"click"]],template:function(e,n){1&e&&(c.TgZ(0,"vcl-panel-dialog",0),c.NdJ("close",function(){return n.close()}),c.TgZ(1,"vcl-panel-title"),c._uU(2),c.qZA(),c._uU(3," bar layer content "),c.TgZ(4,"button",1),c.NdJ("click",function(){return n.close()}),c._uU(5,"Close Layer"),c.qZA(),c.TgZ(6,"button",2),c.NdJ("click",function(){return n.close("data")}),c._uU(7,"Close Layer with result"),c.qZA(),c.qZA()),2&e&&(c.Q6J("showCloseButton",!0),c.xp6(2),c.Oqu(n.title))},directives:[i.y,s.ag,s.jW,p.r,s.r8],encapsulation:2}),e})();var y=t(68101);function m(e,n){if(1&e){const e=c.EpF();c.TgZ(0,"button",7),c.NdJ("click",function(){return c.CHM(e),c.oxw().decline()}),c._uU(1,"Decline"),c.qZA()}}let f=(()=>{class e{constructor(e){this.layer=e,this._hostClasses=!0}accept(){this.layer.nag(),this.layer.close({accept:!0})}decline(){this.layer.close({accept:!1})}}return e.\u0275fac=function(n){return new(n||e)(c.Y36(r.Cc_))},e.\u0275cmp=c.Xpm({type:e,selectors:[["ng-component"]],hostVars:8,hostBindings:function(e,n){2&e&&c.ekj("nag",n._hostClasses)("container",n._hostClasses)("row",n._hostClasses)("justify-center",n._hostClasses)},decls:11,vars:1,consts:[[1,"layout-width","row","center"],[1,"flex","layout-three"],["href","#"],[1,"row","justify-center","center","gutter-margin-l-r"],[1,"loose-button-group"],["vcl-button","","type","button",3,"click",4,"ngIf"],["vcl-button","","type","button",1,"emphasized",3,"click"],["vcl-button","","type","button",3,"click"]],template:function(e,n){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c._uU(2," Cookies and similar technologies help us deliver our services. By using our services, you agree to our use of cookies. You can find further information about the use of Cookies on this website in our "),c.TgZ(3,"a",2),c._uU(4,"privacy policy"),c.qZA(),c._uU(5,". "),c.qZA(),c.TgZ(6,"div",3),c.TgZ(7,"div",4),c.YNc(8,m,2,0,"button",5),c.TgZ(9,"button",6),c.NdJ("click",function(){return n.accept()}),c._uU(10,"Accept"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(8),c.Q6J("ngIf",n.layer.data.allowDecline))},directives:[a.O5,p.r],styles:["[_nghost-%COMP%]{width:100%}"]}),e})(),g=(()=>{class e extends r.Cc_{constructor(e,n){super(e),this.overlay=n}getComponent(){return f}createLayerConfig(e){return super.createLayerConfig({closeOnEscape:!1,hasBackdrop:!1,width:"100%",positionStrategy:this.overlay.position().global().bottom().centerHorizontally()},e)}nag(){console.log("Nag...")}}return e.\u0275fac=function(n){return new(n||e)(c.LFG(c.zs3),c.LFG(y.aV))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=t(88460);const v=["tplLayerRef"];function h(e,n){if(1&e){const e=c.EpF();c.TgZ(0,"vcl-panel-dialog",4),c.NdJ("close",function(){return c.CHM(e),c.oxw(),c.MAs(15).close()}),c.TgZ(1,"vcl-panel-title"),c._uU(2),c.qZA(),c._uU(3," Press escape or click outside of layer to close"),c._UZ(4,"br"),c._UZ(5,"br"),c.TgZ(6,"button",5),c.NdJ("click",function(){return c.CHM(e),c.oxw(),c.MAs(15).close()}),c._uU(7,"Close layer"),c.qZA(),c.qZA()}if(2&e){const e=n.title;c.Q6J("showCloseButton",!0),c.xp6(2),c.Oqu(e)}}function b(e,n){if(1&e){const e=c.EpF();c.TgZ(0,"vcl-panel-dialog",4),c.NdJ("close",function(){return c.CHM(e),c.oxw().tplLayer.close()}),c.TgZ(1,"vcl-panel-title"),c._uU(2),c.qZA(),c._uU(3," Press escape or click outside of layer to close"),c._UZ(4,"br"),c._UZ(5,"br"),c.TgZ(6,"button",5),c.NdJ("click",function(){return c.CHM(e),c.oxw().tplLayer.close()}),c._uU(7,"Close layer"),c.qZA(),c.qZA()}if(2&e){const e=n.title;c.Q6J("showCloseButton",!0),c.xp6(2),c.Oqu(e)}}let C=0,L=(()=>{class e{constructor(e,n,t){this.nagLayer=e,this.layerService=n,this.viewContainerRef=t,this.barLayer=n.create(u,{closeOnBackdropClick:!1,closeOnEscape:!1})}ngAfterViewInit(){this.tplLayer=this.layerService.createTemplateLayer(this.tplLayerRef,this.viewContainerRef)}openBarComponent(){this.barLayer.open({data:{title:`bar component layer title (${C++})`}}).subscribe(e=>{console.log("Bar component result: "+(null==e?void 0:e.value))})}openNagLayer(){this.nagLayer.open({data:{allowDecline:!0}}).subscribe(e=>{e.accept?console.log("Accepted"):console.log("Declined")})}ngOnDestroy(){var e;null===(e=this.barLayer)||void 0===e||e.destroy()}}return e.\u0275fac=function(n){return new(n||e)(c.Y36(g),c.Y36(r.ITu),c.Y36(c.s_b))},e.\u0275cmp=c.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(e,n){if(1&e&&c.Gf(v,5),2&e){let e;c.iGM(e=c.CRH())&&(n.tplLayerRef=e.first)}},decls:18,vars:0,consts:[["vcl-button","",3,"click"],["vclLayer",""],["inlineLayer","vclLayer"],["tplLayerRef",""],[3,"showCloseButton","close"],["vcl-button","","vclPanelFooterButton","",1,"transparent","outline",3,"click"]],template:function(e,n){if(1&e){const e=c.EpF();c.TgZ(0,"button",0),c.NdJ("click",function(){return c.CHM(e),c.MAs(15).open({data:{title:"Inline layer"}})}),c._uU(1,"Open inline layer"),c.qZA(),c._UZ(2,"br"),c._UZ(3,"br"),c.TgZ(4,"button",0),c.NdJ("click",function(){return n.tplLayer.open({data:{title:"Template layer"}})}),c._uU(5,"Open template layer"),c.qZA(),c._UZ(6,"br"),c._UZ(7,"br"),c.TgZ(8,"button",0),c.NdJ("click",function(){return n.openBarComponent()}),c._uU(9,"Open bar component as layer"),c.qZA(),c._UZ(10,"br"),c._UZ(11,"br"),c.TgZ(12,"button",0),c.NdJ("click",function(){return n.openNagLayer()}),c._uU(13,"Open nag layer"),c.qZA(),c.YNc(14,h,8,2,"ng-template",1,2,c.W1O),c.YNc(16,b,8,2,"ng-template",null,3,c.W1O)}},directives:[p.r,d.A,i.y,s.ag,s.jW,s.r8],encapsulation:2}),e})();function w(){return{label:"Layer",tabs:{Demo:L,"README.md":{type:"md",content:'# vcl-layer\n\nAn overlay placed in the center of the screen.\nThe layer uses @angular/cdk\'s [overlay api](https://material.angular.io/cdk/overlay/api) for positioning.\n\n## Usage\n\n### The layer reference object\n\nA layer reference object extends from the `TemplateLayerRef` or `ComponentLayerRef` class which allows layer interaction like listening for events and opening/closing the layer.\nBoth classes implement the `Layer` interface`\n\nA layer reference can be created via the `vcl-layer` component or with the `LayerService` from a component class:\n\n#### Inline layer (TemplateLayerRef)\n\n```html\n<button vcl-button (click)="myTemplateLayer.open()">Open Layer</button>\n\n<vcl-layer #myTemplateLayer="vclLayer">\n  \x3c!-- myTemplateLayer is of type TemplateLayerRef --\x3e\n  <div class="vclPanel vclM-0">\n    <div class="vclPanelBody">\n      <p class="vclPanelContent">\n        Content\n        <button vcl-button (click)="myTemplateLayer.close()">Close Layer</button>\n      </p>\n    </div>\n  </vcl-layer>\n</vcl-layer>\n```\n\n#### Component layer (ComponentLayerRef)\n\nAny component can inject the ComponentLayerRef class. \nIt will be available if the component is opened via the layer service\n\n```ts\nimport { ComponentLayerRef } from \'@vcl/ng-vcl\';\n\n// This is just a common component\n@Component({ ... })\nexport class MyLayerComponent {\n  // layer is a reference to the current layer.\n  // Its value is null when the component is not used as a layer\n  constructor(@Optional() private layer?: ComponentLayerRef) { }\n\n  close() {\n    // Close the layer\n    this.layer.close(\'result\');\n  }\n}\n```\n\nAny component can be opened with the layer service.\nMake sure the component is provided in your module as part of the `entryComponents`.\n\n```ts\nimport { LayerService } from \'@vcl/ng-vcl\';\nimport { MyLayerComponent } from \'./my-layer.component\';\n\n@Component({ ... })\nexport class DemoComponent {\n  constructor(\n    private layerService: LayerService // This is the reference to the component layer\n  ) {}\n\n  openComponentLayer() {\n    const layer = this.layerService.open(MyLayerComponent);\n    layer.afterClose.subscribe(result => {\n      console.log(result);\n    });\n  }\n}\n```\n\n### API\n\n```ts\nexport interface Layer {\n  readonly afterClose: Observable<any>;\n  readonly isVisible: boolean;\n  readonly data: any;\n  toggle(): void;\n  open(config?: LayerConfig): void;\n  close(result?: any): void;\n  destroy(): void;\n}\n\nclass LayerService {\n  create(component: ComponentType<TComponent>, config?: LayerConfig): ComponentLayerRef;\n  open(component: ComponentType<TComponent>, config?: LayerConfig): ComponentLayerRef;\n}\n\nexport class LayerConfig<TData = any> extends OverlayConfig {\n  data?: TData;\n  closeOnBackdropClick?: boolean;\n  closeOnEscape?: boolean;\n}\n\n```\n\n#### vcl-layer attributes\n\n| Name                   | Type                 | Default  | Description\n| ------------           | -----------          | -------- |--------------\n| `closeOnBackdropClick` | boolean              | true     | Wether a the layer should close when clicked outside\n| `closeOnEscape`        | boolean              | true     | Wether a the layer should close when escape is pressed\n| `position`             | PositionStrategy     |          | \n'},"demo.component.html":{type:"html",content:t(34305)},"demo.component.ts":{type:"ts",content:t(33634)},"nag.component.html":{type:"html",content:t(96978)},"nag.component.ts":{type:"ts",content:t(20749)},"bar.component.html":{type:"html",content:t(43734)},"bar.component.ts":{type:"ts",content:t(39949)}}}}let k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({providers:[g],imports:[[a.ez,l.l,r.G4p,r.V4c,r.NhM,r.VzK,o.Bz.forChild([{path:"",component:l.z,data:{demo:w}}])]]}),e})()},43734:function(e,n,t){t.r(n),n.default='<vcl-panel-dialog [showCloseButton]="true" (close)="close()">\n  <vcl-panel-title>{{title}}</vcl-panel-title>\n  bar layer content\n  <button vcl-button vclPanelFooterButton class="transparent outline" (click)="close()">Close Layer</button>\n  <button vcl-button vclPanelFooterButton class="emphasized" (click)="close(\'data\')">Close Layer with result</button>\n</vcl-panel-dialog>\n'},39949:function(e,n,t){t.r(n),n.default="import { Component } from '@angular/core';\nimport { ComponentLayerRef } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'bar.component.html',\n})\nexport class BarComponent {\n\n  constructor(private layer: ComponentLayerRef) { }\n\n  get title() {\n    return this.layer.data.title;\n  }\n\n  close(value?: string) {\n    this.layer.close({\n      value\n    });\n  }\n}\n"},34305:function(e,n,t){t.r(n),n.default='<button vcl-button (click)="inlineLayer.open({data: { title: \'Inline layer\' }})">Open inline layer</button>\n<br><br>\n<button vcl-button (click)="tplLayer.open({data: { title: \'Template layer\' }})">Open template layer</button>\n<br><br>\n<button vcl-button (click)="openBarComponent()">Open bar component as layer</button>\n<br><br>\n<button vcl-button (click)="openNagLayer()">Open nag layer</button>\n\n<ng-template vclLayer #inlineLayer="vclLayer" let-title="title">\n  <vcl-panel-dialog [showCloseButton]="true" (close)="inlineLayer.close()">\n    <vcl-panel-title>{{title}}</vcl-panel-title>\n    Press escape or click outside of layer to close<br><br>\n    <button vcl-button vclPanelFooterButton class="transparent outline" (click)="inlineLayer.close()">Close layer</button>\n  </vcl-panel-dialog>\n</ng-template>\n\n<ng-template #tplLayerRef let-title="title">\n  <vcl-panel-dialog [showCloseButton]="true" (close)="tplLayer.close()">\n    <vcl-panel-title>{{title}}</vcl-panel-title>\n    Press escape or click outside of layer to close<br><br>\n    <button vcl-button vclPanelFooterButton class="transparent outline" (click)="tplLayer.close()">Close layer</button>\n  </vcl-panel-dialog>\n</ng-template>\n'},33634:function(e,n,t){t.r(n),n.default="import { Component, AfterViewInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';\nimport { LayerService, LayerRef } from '@vcl/ng-vcl';\nimport { BarComponent } from './bar.component';\nimport { NagLayer } from './nag.component';\n\nlet i = 0;\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class LayerDemoComponent implements AfterViewInit {\n\n  barLayer: LayerRef;\n\n  @ViewChild('tplLayerRef')\n  tplLayerRef: TemplateRef<any>;\n\n  tplLayer: LayerRef;\n\n  constructor(\n    private nagLayer: NagLayer,\n    private layerService: LayerService,\n    private viewContainerRef: ViewContainerRef\n  ) {  \n    this.barLayer = layerService.create(BarComponent, {\n      closeOnBackdropClick: false,\n      closeOnEscape: false\n    });\n\n  }\n  ngAfterViewInit(): void {\n    this.tplLayer = this.layerService.createTemplateLayer(this.tplLayerRef, this.viewContainerRef);\n  }\n\n  openBarComponent() {\n    this.barLayer.open({\n      data: {\n        title: `bar component layer title (${i++})`\n      }\n    }).subscribe(result => {\n      console.log('Bar component result: ' + result?.value);\n    });\n  }\n\n  openNagLayer() {\n    this.nagLayer.open({\n      data: {\n        allowDecline: true\n      }\n    }).subscribe((result) => {\n      if (result.accept) {\n        console.log('Accepted');\n      } else {\n        console.log('Declined');\n      }\n    });\n  }\n\n  ngOnDestroy() {\n    this.barLayer?.destroy();\n  }\n}\n"},96978:function(e,n,t){t.r(n),n.default='<div class="layout-width row center">\n  <div class="flex layout-three">\n    Cookies and similar technologies help us deliver our services. By using our services,\n    you agree to our use of cookies. You can find further information about the\n    use of Cookies on this website in our <a href="#">privacy policy</a>.\n  </div>\n  <div class="row justify-center center gutter-margin-l-r">\n    <div class="loose-button-group">\n      <button *ngIf="layer.data.allowDecline" vcl-button type="button" (click)="decline()">Decline</button>\n      <button vcl-button type="button" class="emphasized" (click)="accept()">Accept</button>\n    </div>\n  </div>\n</div>\n'},20749:function(e,n,t){t.r(n),n.default="import { Component, Injector, Injectable, Inject, forwardRef, HostBinding } from '@angular/core';\nimport { Overlay } from '@angular/cdk/overlay';\nimport { ComponentLayerRef, LayerConfig } from '@vcl/ng-vcl';\n\nexport interface NagLayerData {\n  allowDecline: boolean;\n}\n\nexport interface NagLayerResult {\n  accept: boolean;\n}\n\nexport interface INagLayer extends ComponentLayerRef<NagLayerData, NagLayerResult, NagComponent> {\n  nag(): void;\n}\n\n@Component({\n  templateUrl: 'nag.component.html',\n  styles: [`:host { width: 100%; }`]\n})\nexport class NagComponent {\n  // Inject the ComponentLayerRef and use an interface for typings\n  // Injecting with forwardRef(() => NagLayer) would result in an `Cannot access 'NagLayer' before initialization` at runtime when targeting es2015\n  // See https://github.com/angular/angular/issues/30106\n  constructor(@Inject(ComponentLayerRef) public layer: INagLayer) { }\n\n  @HostBinding('class.nag')\n  @HostBinding('class.container')\n  @HostBinding('class.row')\n  @HostBinding('class.justify-center')\n  _hostClasses = true;\n\n  accept() {\n    this.layer.nag();\n    this.layer.close({\n      accept: true\n    });\n  }\n\n  decline() {\n    this.layer.close({\n      accept: false\n    });\n  }\n}\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class NagLayer extends ComponentLayerRef<NagLayerData, NagLayerResult, NagComponent> implements INagLayer {\n\n  constructor(injector: Injector, private overlay: Overlay) {\n    super(injector);\n  }\n\n  // Return the layer component\n  getComponent() {\n    return NagComponent;\n  }\n\n  // Overrides default configuration\n  createLayerConfig(config?: LayerConfig): LayerConfig {\n    return super.createLayerConfig({\n      closeOnEscape: false,\n      hasBackdrop: false,\n      width: '100%',\n      positionStrategy: this.overlay.position()\n        .global()\n        .bottom()\n        .centerHorizontally()\n    }, config);\n  }\n\n  nag(): void {\n    console.log('Nag...');\n  }\n}\n"}}]);