"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[497],{6497:(l,o,n)=>{n.r(o),n.d(o,{BreakpointsDemoModule:()=>O,demo:()=>b});var p=n(6814),v=n(2911),c=n(2320),h=n(7398),r=n(2916),e=n(5879),d=n(6256);const a=(0,h.U)(s=>s.matches);let k=(()=>{class s{constructor(t){this.breakpointObserver=t}ngOnInit(){this.xs$=this.breakpointObserver.observe(r.uCr.xs).pipe(a),this.sm$=this.breakpointObserver.observe(r.uCr.sm).pipe(a),this.md$=this.breakpointObserver.observe(r.uCr.md).pipe(a),this.lg$=this.breakpointObserver.observe(r.uCr.lg).pipe(a),this.xl$=this.breakpointObserver.observe(r.uCr.xl).pipe(a),this.xs_sm$=this.breakpointObserver.observe([r.uCr.xs,r.uCr.sm]).pipe(a)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(d.Yg))},s.\u0275cmp=e.Xpm({type:s,selectors:[["ng-component"]],decls:18,vars:18,template:function(t,i){1&t&&(e.TgZ(0,"pre"),e._uU(1),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"pre"),e._uU(4),e.ALo(5,"async"),e.qZA(),e.TgZ(6,"pre"),e._uU(7),e.ALo(8,"async"),e.qZA(),e.TgZ(9,"pre"),e._uU(10),e.ALo(11,"async"),e.qZA(),e.TgZ(12,"pre"),e._uU(13),e.ALo(14,"async"),e.qZA(),e.TgZ(15,"pre"),e._uU(16),e.ALo(17,"async"),e.qZA()),2&t&&(e.xp6(1),e.hij("xs: ",e.lcZ(2,6,i.xs$),""),e.xp6(3),e.hij("sm: ",e.lcZ(5,8,i.sm$),""),e.xp6(3),e.hij("md: ",e.lcZ(8,10,i.md$),""),e.xp6(3),e.hij("lg: ",e.lcZ(11,12,i.lg$),""),e.xp6(3),e.hij("xl: ",e.lcZ(14,14,i.xl$),""),e.xp6(3),e.hij("xs_sm: ",e.lcZ(17,16,i.xs_sm$),""))},dependencies:[p.Ov],encapsulation:2}),s})();const u="# Breakpoints\n\nVCL Breakpoint queries to be used with `@angular/cdk`'s BreakpointObserver or `window.matchMedia()`\n\n### Usage\n\n```ts\nimport { VCLBreakpoints } from '@vcl/ng-vcl';\nimport { BreakpointObserver } from '@angular/cdk/layout';\n\nexport class MyComponent implements OnInit {\n  constructor(private breakpointObserver: BreakpointObserver) {}\n\n  xs_sm$: Observable<boolean>;\n\n  ngOnInit(): void {\n    this.xs_sm$ = this.breakpointObserver\n      .observe([VCLBreakpoints.xs, VCLBreakpoints.sm])\n      .pipe(map(state => state.matches));\n  }\n}\n```\n";function b(){return{label:"Breakpoints",tabs:{Demo:k,"README.md":{type:"md",content:u},"demo.component.html":{type:"html",content:n(9088)},"demo.component.ts":{type:"ts",content:n(1917)}}}}let O=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.ez,c.l,v.Bz.forChild([{path:"",component:c.z,data:{demo:b}}])]}),s})()},9088:(l,o,n)=>{n.r(o),n.d(o,{default:()=>p});const p="<pre>xs: {{ xs$ | async }}</pre>\n<pre>sm: {{ sm$ | async }}</pre>\n<pre>md: {{ md$ | async }}</pre>\n<pre>lg: {{ lg$ | async }}</pre>\n<pre>xl: {{ xl$ | async }}</pre>\n<pre>xs_sm: {{ xs_sm$ | async }}</pre>\n"},1917:(l,o,n)=>{n.r(o),n.d(o,{default:()=>p});const p="import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';\nimport { Component, OnInit } from '@angular/core';\nimport { Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\nimport { VCLBreakpoints } from '@vcl/ng-vcl';\n\nconst pickMatches = map((state: BreakpointState) => state.matches);\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class BreakpointsDemoComponent implements OnInit {\n  constructor(private breakpointObserver: BreakpointObserver) {}\n\n  xs$: Observable<boolean>;\n  sm$: Observable<boolean>;\n  md$: Observable<boolean>;\n  lg$: Observable<boolean>;\n  xl$: Observable<boolean>;\n  xs_sm$: Observable<boolean>;\n\n  ngOnInit(): void {\n    this.xs$ = this.breakpointObserver\n      .observe(VCLBreakpoints.xs)\n      .pipe(pickMatches);\n    this.sm$ = this.breakpointObserver\n      .observe(VCLBreakpoints.sm)\n      .pipe(pickMatches);\n    this.md$ = this.breakpointObserver\n      .observe(VCLBreakpoints.md)\n      .pipe(pickMatches);\n    this.lg$ = this.breakpointObserver\n      .observe(VCLBreakpoints.lg)\n      .pipe(pickMatches);\n    this.xl$ = this.breakpointObserver\n      .observe(VCLBreakpoints.xl)\n      .pipe(pickMatches);\n    this.xs_sm$ = this.breakpointObserver\n      .observe([VCLBreakpoints.xs, VCLBreakpoints.sm])\n      .pipe(pickMatches);\n  }\n}\n"}}]);