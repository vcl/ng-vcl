"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[240],{240:(a,i,n)=>{n.r(i),n.d(i,{NotificationDemoModule:()=>v,demo:()=>f});var e=n(6895),p=n(3356),u=n(433),l=n(9787),m=n(9155),t=n(4650),r=n(6816);let d=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],decls:6,vars:0,consts:[["type","success"]],template:function(s,h){1&s&&(t.TgZ(0,"vcl-notification"),t._uU(1," An inline message\n"),t.qZA(),t.TgZ(2,"vcl-notification",0)(3,"vcl-notification-title"),t._uU(4,"Success"),t.qZA(),t._uU(5," An inline success message\n"),t.qZA())},dependencies:[r.c7,r.Ij],encapsulation:2}),o})();function f(){return{label:"Notification",tabs:{Demo:d,"README.md":{type:"md",content:"# vcl-notifications\n\nNotification messages for events with growl-style support\n\n## Usage\n\n```js\nimport { VCLNotifierModule, VCLLayerModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ \n    VCLNotifierModule,\n  ],\n  ...\n})\nexport class AppComponent {}\n```\n\nInline\n\n```html\n<vcl-notification type=\"success\"> \n  <span vclNotificationHeader>Success</span>\n  An inline success message\n  <span vclNotificationFooter>Footer</span>\n</vcl-notification>\n```\n\nGrowl-style\n\n\n```ts\n@Component({ ... })\nexport class MyComponent {\n\n  constructor(private notifier: NotifierService) {}\n\n  info() {\n    this.notifier.queue({\n      content: 'A message'\n    });\n  }\n  info() {\n    this.notifier.info({\n      content: 'An info message'\n    });\n  }\n  success() {\n    this.notifier.success({\n      content: 'A success message',\n      position: NotifierPosition.BottomRight\n    });\n  }\n  warning() {\n    this.notifier.warning({\n      content: 'A warning',\n      showCloseButton: true,\n      timeout: 10000\n    });\n  }\n  error() {\n    this.notifier.error({\n      content: 'An error message',\n      timeout: false,\n      icon: 'fas:warning',\n      position: NotifierPosition.TopLeft,\n      class: 'my-error-message'\n    });\n  }\n}\n```\n\n```html\n<ng-template [vclNotification[]=\"{}\" #n=\"vclNotification\">\n  <p>Hello</p>\n</ng-template>\n<button (click)=\"n.open()\">Show notification</button>\n\n```\n\n\n### API\n\n```ts\nexport enum NotifierType {\n  None,\n  Info,\n  Success,\n  Warning,\n  Error\n}\n\nexport enum NotifierPosition {\n  TopRight,\n  Top,\n  TopLeft,\n  BottomRight,\n  Bottom,\n  BottomLeft,\n  Center\n}\n\nexport interface NotifierOptions {\n  content?: string;\n  type?: NotifierType;\n  icon: string | false;\n  showCloseButton?: boolean;\n  position?: NotifierPosition;\n  timeout?: number | boolean;\n  class?: string;\n  context?: any;\n}\n```\n"},"demo.component.html":{type:"html",content:n(8452)},"demo.component.ts":{type:"ts",content:n(8638)}}}}let v=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[e.ez,u.u5,m.l,l.m2H,l.PoV,l.V4c,p.Bz.forChild([{path:"",component:m.z,data:{demo:f}}])]}),o})()},8452:(a,i,n)=>{n.r(i),n.d(i,{default:()=>e});const e='\n<vcl-notification> \n  An inline message\n</vcl-notification>\n\n<vcl-notification type="success"> \n  <vcl-notification-title>Success</vcl-notification-title>\n  An inline success message\n</vcl-notification>\n\n'},8638:(a,i,n)=>{n.r(i),n.d(i,{default:()=>e});const e="import { NotifierPosition, NotifierService, NotifierOptions } from '@vcl/ng-vcl';\nimport { Component, Input, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';\nimport { TemplatePortal } from '@angular/cdk/portal';\n\nlet cnt = 1;\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class NotificationDemoComponent {\n\n\n}\n"}}]);