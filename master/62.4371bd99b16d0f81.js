"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[62],{5062:(p,l,o)=>{o.r(l),o.d(l,{LayerDemoModule:()=>w,demo:()=>C});var s=o(4161),d=o(9808),i=o(8934),g=o(9155),e=o(4893),f=o(8613),u=o(6656),y=o(6994);let h=(()=>{class t{constructor(n){this.layer=n}get title(){return this.layer.data.title}close(n){this.layer.close({value:n})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(i.Cc_))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:8,vars:2,consts:[[3,"showCloseButton","close"],["vcl-button","","vclPanelFooterButton","",1,"transparent","outline",3,"click"],["vcl-button","","vclPanelFooterButton","",1,"emphasized",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"vcl-panel-dialog",0),e.NdJ("close",function(){return a.close()}),e.TgZ(1,"vcl-panel-title"),e._uU(2),e.qZA(),e._uU(3," bar layer content "),e.TgZ(4,"button",1),e.NdJ("click",function(){return a.close()}),e._uU(5,"Close Layer"),e.qZA(),e.TgZ(6,"button",2),e.NdJ("click",function(){return a.close("data")}),e._uU(7,"Close Layer with result"),e.qZA()()),2&n&&(e.Q6J("showCloseButton",!0),e.xp6(2),e.Oqu(a.title))},directives:[f.y,u.ag,u.jW,y.r,u.r8],encapsulation:2}),t})();var L=o(1314);function b(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(){return e.CHM(n),e.oxw().decline()}),e._uU(1,"Decline"),e.qZA()}}let _=(()=>{class t{constructor(n){this.layer=n,this._hostClasses=!0}accept(){this.layer.nag(),this.layer.close({accept:!0})}decline(){this.layer.close({accept:!1})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(i.Cc_))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],hostVars:8,hostBindings:function(n,a){2&n&&e.ekj("nag",a._hostClasses)("container",a._hostClasses)("row",a._hostClasses)("justify-center",a._hostClasses)},decls:11,vars:1,consts:[[1,"layout-width","row","center"],[1,"flex","layout-three"],["href","#"],[1,"row","justify-center","center","gutter-margin-l-r"],[1,"loose-button-group"],["vcl-button","","type","button",3,"click",4,"ngIf"],["vcl-button","","type","button",1,"emphasized",3,"click"],["vcl-button","","type","button",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Cookies and similar technologies help us deliver our services. By using our services, you agree to our use of cookies. You can find further information about the use of Cookies on this website in our "),e.TgZ(3,"a",2),e._uU(4,"privacy policy"),e.qZA(),e._uU(5,". "),e.qZA(),e.TgZ(6,"div",3)(7,"div",4),e.YNc(8,b,2,0,"button",5),e.TgZ(9,"button",6),e.NdJ("click",function(){return a.accept()}),e._uU(10,"Accept"),e.qZA()()()()),2&n&&(e.xp6(8),e.Q6J("ngIf",a.layer.data.allowDecline))},directives:[d.O5,y.r],styles:["[_nghost-%COMP%]{width:100%}"]}),t})(),v=(()=>{class t extends i.Cc_{constructor(n,a){super(n),this.overlay=a}getComponent(){return _}createLayerConfig(n){return super.createLayerConfig({closeOnEscape:!1,hasBackdrop:!1,width:"100%",positionStrategy:this.overlay.position().global().bottom().centerHorizontally()},n)}nag(){console.log("Nag...")}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(e.zs3),e.LFG(L.aV))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var T=o(5224);const B=["tplLayerRef"];function N(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"vcl-panel-dialog",4),e.NdJ("close",function(){return e.CHM(n),e.oxw(),e.MAs(15).close()}),e.TgZ(1,"vcl-panel-title"),e._uU(2),e.qZA(),e._uU(3," Press escape or click outside of layer to close"),e._UZ(4,"br")(5,"br"),e.TgZ(6,"button",5),e.NdJ("click",function(){return e.CHM(n),e.oxw(),e.MAs(15).close()}),e._uU(7,"Close layer"),e.qZA()()}if(2&t){const n=r.title;e.Q6J("showCloseButton",!0),e.xp6(2),e.Oqu(n)}}function R(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"vcl-panel-dialog",4),e.NdJ("close",function(){return e.CHM(n),e.oxw().tplLayer.close()}),e.TgZ(1,"vcl-panel-title"),e._uU(2),e.qZA(),e._uU(3," Press escape or click outside of layer to close"),e._UZ(4,"br")(5,"br"),e.TgZ(6,"button",5),e.NdJ("click",function(){return e.CHM(n),e.oxw().tplLayer.close()}),e._uU(7,"Close layer"),e.qZA()()}if(2&t){const n=r.title;e.Q6J("showCloseButton",!0),e.xp6(2),e.Oqu(n)}}let k=0,A=(()=>{class t{constructor(n,a,c){this.nagLayer=n,this.layerService=a,this.viewContainerRef=c,this.barLayer=a.create(h,{closeOnBackdropClick:!1,closeOnEscape:!1})}ngAfterViewInit(){this.tplLayer=this.layerService.createTemplateLayer(this.tplLayerRef,this.viewContainerRef)}openBarComponent(){this.barLayer.open({data:{title:`bar component layer title (${k++})`}}).subscribe(n=>{console.log("Bar component result: "+(null==n?void 0:n.value))})}openNagLayer(){this.nagLayer.open({data:{allowDecline:!0}}).subscribe(n=>{n.accept?console.log("Accepted"):console.log("Declined")})}ngOnDestroy(){var n;null===(n=this.barLayer)||void 0===n||n.destroy()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(v),e.Y36(i.ITu),e.Y36(e.s_b))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(n,a){if(1&n&&e.Gf(B,5),2&n){let c;e.iGM(c=e.CRH())&&(a.tplLayerRef=c.first)}},decls:18,vars:0,consts:[["vcl-button","",3,"click"],["vclLayer",""],["inlineLayer","vclLayer"],["tplLayerRef",""],[3,"showCloseButton","close"],["vcl-button","","vclPanelFooterButton","",1,"transparent","outline",3,"click"]],template:function(n,a){if(1&n){const c=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){return e.CHM(c),e.MAs(15).open({data:{title:"Inline layer"}})}),e._uU(1,"Open inline layer"),e.qZA(),e._UZ(2,"br")(3,"br"),e.TgZ(4,"button",0),e.NdJ("click",function(){return a.tplLayer.open({data:{title:"Template layer"}})}),e._uU(5,"Open template layer"),e.qZA(),e._UZ(6,"br")(7,"br"),e.TgZ(8,"button",0),e.NdJ("click",function(){return a.openBarComponent()}),e._uU(9,"Open bar component as layer"),e.qZA(),e._UZ(10,"br")(11,"br"),e.TgZ(12,"button",0),e.NdJ("click",function(){return a.openNagLayer()}),e._uU(13,"Open nag layer"),e.qZA(),e.YNc(14,N,8,2,"ng-template",1,2,e.W1O),e.YNc(16,R,8,2,"ng-template",null,3,e.W1O)}},directives:[y.r,T.A,f.y,u.ag,u.jW,u.r8],encapsulation:2}),t})();function C(){return{label:"Layer",tabs:{Demo:A,"README.md":{type:"md",content:'# vcl-layer\n\nAn overlay placed in the center of the screen.\nThe layer uses @angular/cdk\'s [overlay api](https://material.angular.io/cdk/overlay/api) for positioning.\n\n## Usage\n\n### The layer reference object\n\nA layer reference object extends from the `TemplateLayerRef` or `ComponentLayerRef` class which allows layer interaction like listening for events and opening/closing the layer.\nBoth classes implement the `Layer` interface`\n\nA layer reference can be created via the `vcl-layer` component or with the `LayerService` from a component class:\n\n#### Inline layer (TemplateLayerRef)\n\n```html\n<button vcl-button (click)="myTemplateLayer.open()">Open Layer</button>\n\n<vcl-layer #myTemplateLayer="vclLayer">\n  \x3c!-- myTemplateLayer is of type TemplateLayerRef --\x3e\n  <div class="vclPanel vclM-0">\n    <div class="vclPanelBody">\n      <p class="vclPanelContent">\n        Content\n        <button vcl-button (click)="myTemplateLayer.close()">Close Layer</button>\n      </p>\n    </div>\n  </vcl-layer>\n</vcl-layer>\n```\n\n#### Component layer (ComponentLayerRef)\n\nAny component can inject the ComponentLayerRef class. \nIt will be available if the component is opened via the layer service\n\n```ts\nimport { ComponentLayerRef } from \'@vcl/ng-vcl\';\n\n// This is just a common component\n@Component({ ... })\nexport class MyLayerComponent {\n  // layer is a reference to the current layer.\n  // Its value is null when the component is not used as a layer\n  constructor(@Optional() private layer?: ComponentLayerRef) { }\n\n  close() {\n    // Close the layer\n    this.layer.close(\'result\');\n  }\n}\n```\n\nAny component can be opened with the layer service.\nMake sure the component is provided in your module as part of the `entryComponents`.\n\n```ts\nimport { LayerService } from \'@vcl/ng-vcl\';\nimport { MyLayerComponent } from \'./my-layer.component\';\n\n@Component({ ... })\nexport class DemoComponent {\n  constructor(\n    private layerService: LayerService // This is the reference to the component layer\n  ) {}\n\n  openComponentLayer() {\n    const layer = this.layerService.open(MyLayerComponent);\n    layer.afterClose.subscribe(result => {\n      console.log(result);\n    });\n  }\n}\n```\n\n### API\n\n```ts\nexport interface Layer {\n  readonly afterClose: Observable<any>;\n  readonly isVisible: boolean;\n  readonly data: any;\n  toggle(): void;\n  open(config?: LayerConfig): void;\n  close(result?: any): void;\n  destroy(): void;\n}\n\nclass LayerService {\n  create(component: ComponentType<TComponent>, config?: LayerConfig): ComponentLayerRef;\n  open(component: ComponentType<TComponent>, config?: LayerConfig): ComponentLayerRef;\n}\n\nexport class LayerConfig<TData = any> extends OverlayConfig {\n  data?: TData;\n  closeOnBackdropClick?: boolean;\n  closeOnEscape?: boolean;\n}\n\n```\n\n#### vcl-layer attributes\n\n| Name                   | Type                 | Default  | Description\n| ------------           | -----------          | -------- |--------------\n| `closeOnBackdropClick` | boolean              | true     | Wether a the layer should close when clicked outside\n| `closeOnEscape`        | boolean              | true     | Wether a the layer should close when escape is pressed\n| `position`             | PositionStrategy     |          | \n'},"demo.component.html":{type:"html",content:o(4305)},"demo.component.ts":{type:"ts",content:o(3634)},"nag.component.html":{type:"html",content:o(6978)},"nag.component.ts":{type:"ts",content:o(749)},"bar.component.html":{type:"html",content:o(3734)},"bar.component.ts":{type:"ts",content:o(9949)}}}}let w=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[v],imports:[[d.ez,g.l,i.G4p,i.V4c,i.NhM,i.VzK,s.Bz.forChild([{path:"",component:g.z,data:{demo:C}}])]]}),t})()},3734:(p,l,o)=>{o.r(l),o.d(l,{default:()=>s});const s='<vcl-panel-dialog [showCloseButton]="true" (close)="close()">\n  <vcl-panel-title>{{title}}</vcl-panel-title>\n  bar layer content\n  <button vcl-button vclPanelFooterButton class="transparent outline" (click)="close()">Close Layer</button>\n  <button vcl-button vclPanelFooterButton class="emphasized" (click)="close(\'data\')">Close Layer with result</button>\n</vcl-panel-dialog>\n'},9949:(p,l,o)=>{o.r(l),o.d(l,{default:()=>s});const s="import { Component } from '@angular/core';\nimport { ComponentLayerRef } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'bar.component.html',\n})\nexport class BarComponent {\n\n  constructor(private layer: ComponentLayerRef) { }\n\n  get title() {\n    return this.layer.data.title;\n  }\n\n  close(value?: string) {\n    this.layer.close({\n      value\n    });\n  }\n}\n"},4305:(p,l,o)=>{o.r(l),o.d(l,{default:()=>s});const s='<button vcl-button (click)="inlineLayer.open({data: { title: \'Inline layer\' }})">Open inline layer</button>\n<br><br>\n<button vcl-button (click)="tplLayer.open({data: { title: \'Template layer\' }})">Open template layer</button>\n<br><br>\n<button vcl-button (click)="openBarComponent()">Open bar component as layer</button>\n<br><br>\n<button vcl-button (click)="openNagLayer()">Open nag layer</button>\n\n<ng-template vclLayer #inlineLayer="vclLayer" let-title="title">\n  <vcl-panel-dialog [showCloseButton]="true" (close)="inlineLayer.close()">\n    <vcl-panel-title>{{title}}</vcl-panel-title>\n    Press escape or click outside of layer to close<br><br>\n    <button vcl-button vclPanelFooterButton class="transparent outline" (click)="inlineLayer.close()">Close layer</button>\n  </vcl-panel-dialog>\n</ng-template>\n\n<ng-template #tplLayerRef let-title="title">\n  <vcl-panel-dialog [showCloseButton]="true" (close)="tplLayer.close()">\n    <vcl-panel-title>{{title}}</vcl-panel-title>\n    Press escape or click outside of layer to close<br><br>\n    <button vcl-button vclPanelFooterButton class="transparent outline" (click)="tplLayer.close()">Close layer</button>\n  </vcl-panel-dialog>\n</ng-template>\n'},3634:(p,l,o)=>{o.r(l),o.d(l,{default:()=>s});const s="import { Component, AfterViewInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';\nimport { LayerService, LayerRef } from '@vcl/ng-vcl';\nimport { BarComponent } from './bar.component';\nimport { NagLayer } from './nag.component';\n\nlet i = 0;\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class LayerDemoComponent implements AfterViewInit {\n\n  barLayer: LayerRef;\n\n  @ViewChild('tplLayerRef')\n  tplLayerRef: TemplateRef<any>;\n\n  tplLayer: LayerRef;\n\n  constructor(\n    private nagLayer: NagLayer,\n    private layerService: LayerService,\n    private viewContainerRef: ViewContainerRef\n  ) {  \n    this.barLayer = layerService.create(BarComponent, {\n      closeOnBackdropClick: false,\n      closeOnEscape: false\n    });\n\n  }\n  ngAfterViewInit(): void {\n    this.tplLayer = this.layerService.createTemplateLayer(this.tplLayerRef, this.viewContainerRef);\n  }\n\n  openBarComponent() {\n    this.barLayer.open({\n      data: {\n        title: `bar component layer title (${i++})`\n      }\n    }).subscribe(result => {\n      console.log('Bar component result: ' + result?.value);\n    });\n  }\n\n  openNagLayer() {\n    this.nagLayer.open({\n      data: {\n        allowDecline: true\n      }\n    }).subscribe((result) => {\n      if (result.accept) {\n        console.log('Accepted');\n      } else {\n        console.log('Declined');\n      }\n    });\n  }\n\n  ngOnDestroy() {\n    this.barLayer?.destroy();\n  }\n}\n"},6978:(p,l,o)=>{o.r(l),o.d(l,{default:()=>s});const s='<div class="layout-width row center">\n  <div class="flex layout-three">\n    Cookies and similar technologies help us deliver our services. By using our services,\n    you agree to our use of cookies. You can find further information about the\n    use of Cookies on this website in our <a href="#">privacy policy</a>.\n  </div>\n  <div class="row justify-center center gutter-margin-l-r">\n    <div class="loose-button-group">\n      <button *ngIf="layer.data.allowDecline" vcl-button type="button" (click)="decline()">Decline</button>\n      <button vcl-button type="button" class="emphasized" (click)="accept()">Accept</button>\n    </div>\n  </div>\n</div>\n'},749:(p,l,o)=>{o.r(l),o.d(l,{default:()=>s});const s="import { Component, Injector, Injectable, Inject, forwardRef, HostBinding } from '@angular/core';\nimport { Overlay } from '@angular/cdk/overlay';\nimport { ComponentLayerRef, LayerConfig } from '@vcl/ng-vcl';\n\nexport interface NagLayerData {\n  allowDecline: boolean;\n}\n\nexport interface NagLayerResult {\n  accept: boolean;\n}\n\nexport interface INagLayer extends ComponentLayerRef<NagLayerData, NagLayerResult, NagComponent> {\n  nag(): void;\n}\n\n@Component({\n  templateUrl: 'nag.component.html',\n  styles: [`:host { width: 100%; }`]\n})\nexport class NagComponent {\n  // Inject the ComponentLayerRef and use an interface for typings\n  // Injecting with forwardRef(() => NagLayer) would result in an `Cannot access 'NagLayer' before initialization` at runtime when targeting es2015\n  // See https://github.com/angular/angular/issues/30106\n  constructor(@Inject(ComponentLayerRef) public layer: INagLayer) { }\n\n  @HostBinding('class.nag')\n  @HostBinding('class.container')\n  @HostBinding('class.row')\n  @HostBinding('class.justify-center')\n  _hostClasses = true;\n\n  accept() {\n    this.layer.nag();\n    this.layer.close({\n      accept: true\n    });\n  }\n\n  decline() {\n    this.layer.close({\n      accept: false\n    });\n  }\n}\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class NagLayer extends ComponentLayerRef<NagLayerData, NagLayerResult, NagComponent> implements INagLayer {\n\n  constructor(injector: Injector, private overlay: Overlay) {\n    super(injector);\n  }\n\n  // Return the layer component\n  getComponent() {\n    return NagComponent;\n  }\n\n  // Overrides default configuration\n  createLayerConfig(config?: LayerConfig): LayerConfig {\n    return super.createLayerConfig({\n      closeOnEscape: false,\n      hasBackdrop: false,\n      width: '100%',\n      positionStrategy: this.overlay.position()\n        .global()\n        .bottom()\n        .centerHorizontally()\n    }, config);\n  }\n\n  nag(): void {\n    console.log('Nag...');\n  }\n}\n"}}]);