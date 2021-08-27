!function(){"use strict";function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[411],{17411:function(t,o,e){e.r(o),e.d(o,{NotificationDemoModule:function(){return g},demo:function(){return m}});var i,c=e(16274),s=e(95454),r=e(24988),a=e(36196),l=e(62518),f=e(84271),p=e(49388),u=((i=function t(){n(this,t)}).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=f.Xpm({type:i,selectors:[["ng-component"]],decls:6,vars:0,consts:[["type","success"]],template:function(n,t){1&n&&(f.TgZ(0,"vcl-notification"),f._uU(1," An inline message\n"),f.qZA(),f.TgZ(2,"vcl-notification",0),f.TgZ(3,"vcl-notification-title"),f._uU(4,"Success"),f.qZA(),f._uU(5," An inline success message\n"),f.qZA())},directives:[p.c7,p.Ij],encapsulation:2}),i);function m(){return{label:"Notification",tabs:{Demo:u,"README.md":{type:"md",content:"# vcl-notifications\n\nNotification messages for events with growl-style support\n\n## Usage\n\n```js\nimport { VCLNotifierModule, VCLLayerModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ \n    VCLNotifierModule,\n  ],\n  ...\n})\nexport class AppComponent {}\n```\n\nInline\n\n```html\n<vcl-notification type=\"success\"> \n  <span vclNotificationHeader>Success</span>\n  An inline success message\n  <span vclNotificationFooter>Footer</span>\n</vcl-notification>\n```\n\nGrowl-style\n\n\n```ts\n@Component({ ... })\nexport class MyComponent {\n\n  constructor(private notifier: NotifierService) {}\n\n  info() {\n    this.notifier.queue({\n      content: 'A message'\n    });\n  }\n  info() {\n    this.notifier.info({\n      content: 'An info message'\n    });\n  }\n  success() {\n    this.notifier.success({\n      content: 'A success message',\n      position: NotifierPosition.BottomRight\n    });\n  }\n  warning() {\n    this.notifier.warning({\n      content: 'A warning',\n      showCloseButton: true,\n      timeout: 10000\n    });\n  }\n  error() {\n    this.notifier.error({\n      content: 'An error message',\n      timeout: false,\n      icon: 'fas:warning',\n      position: NotifierPosition.TopLeft,\n      class: 'my-error-message'\n    });\n  }\n}\n```\n\n```html\n<ng-template [vclNotification[]=\"{}\" #n=\"vclNotification\">\n  <p>Hello</p>\n</ng-template>\n<button (click)=\"n.open()\">Show notification</button>\n\n```\n\n\n### API\n\n```ts\nexport enum NotifierType {\n  None,\n  Info,\n  Success,\n  Warning,\n  Error\n}\n\nexport enum NotifierPosition {\n  TopRight,\n  Top,\n  TopLeft,\n  BottomRight,\n  Bottom,\n  BottomLeft,\n  Center\n}\n\nexport interface NotifierOptions {\n  content?: string;\n  type?: NotifierType;\n  icon: string | false;\n  showCloseButton?: boolean;\n  position?: NotifierPosition;\n  timeout?: number | boolean;\n  class?: string;\n  context?: any;\n}\n```\n"},"demo.component.html":{type:"html",content:e(8452)},"demo.component.ts":{type:"ts",content:e(18638)}}}}var g=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({imports:[[c.ez,r.u5,l.l,a.m2H,a.PoV,a.V4c,s.Bz.forChild([{path:"",component:l.z,data:{demo:m}}])]]}),t}()},8452:function(n,t,o){o.r(t),t.default='\n<vcl-notification> \n  An inline message\n</vcl-notification>\n\n<vcl-notification type="success"> \n  <vcl-notification-title>Success</vcl-notification-title>\n  An inline success message\n</vcl-notification>\n\n'},18638:function(n,t,o){o.r(t),t.default="import { NotifierPosition, NotifierService, NotifierOptions } from '@vcl/ng-vcl';\nimport { Component, Input, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';\nimport { TemplatePortal } from '@angular/cdk/portal';\n\nlet cnt = 1;\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class NotificationDemoComponent {\n\n\n}\n"}}])}();