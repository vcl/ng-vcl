(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{CO1m:function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return b})),n.d(a,"BreakpointsDemoModule",(function(){return m}));var p=n("ofXK"),e=n("tyNb"),l=n("2FIb"),t=n("19H1"),r=n("lJxs"),o=n("fXoL"),c=n("0MNC");const i=Object(r.a)(s=>s.matches);let h=(()=>{class s{constructor(s){this.breakpointObserver=s}ngOnInit(){this.xs$=this.breakpointObserver.observe(t.z.xs).pipe(i),this.sm$=this.breakpointObserver.observe(t.z.sm).pipe(i),this.md$=this.breakpointObserver.observe(t.z.md).pipe(i),this.lg$=this.breakpointObserver.observe(t.z.lg).pipe(i),this.xl$=this.breakpointObserver.observe(t.z.xl).pipe(i),this.xs_sm$=this.breakpointObserver.observe([t.z.xs,t.z.sm]).pipe(i)}}return s.\u0275fac=function(a){return new(a||s)(o.Mb(c.a))},s.\u0275cmp=o.Gb({type:s,selectors:[["ng-component"]],decls:18,vars:18,template:function(s,a){1&s&&(o.Sb(0,"pre"),o.yc(1),o.ec(2,"async"),o.Rb(),o.Sb(3,"pre"),o.yc(4),o.ec(5,"async"),o.Rb(),o.Sb(6,"pre"),o.yc(7),o.ec(8,"async"),o.Rb(),o.Sb(9,"pre"),o.yc(10),o.ec(11,"async"),o.Rb(),o.Sb(12,"pre"),o.yc(13),o.ec(14,"async"),o.Rb(),o.Sb(15,"pre"),o.yc(16),o.ec(17,"async"),o.Rb()),2&s&&(o.Ab(1),o.Ac("xs: ",o.fc(2,6,a.xs$),""),o.Ab(3),o.Ac("sm: ",o.fc(5,8,a.sm$),""),o.Ab(3),o.Ac("md: ",o.fc(8,10,a.md$),""),o.Ab(3),o.Ac("lg: ",o.fc(11,12,a.lg$),""),o.Ab(3),o.Ac("xl: ",o.fc(14,14,a.xl$),""),o.Ab(3),o.Ac("xs_sm: ",o.fc(17,16,a.xs_sm$),""))},pipes:[p.b],encapsulation:2}),s})();function b(){return{label:"Breakpoints",tabs:{Demo:h,"README.md":{type:"md",content:'<h1 id="breakpoints">Breakpoints</h1>\n<p>VCL Breakpoint queries to be used with <code>@angular/cdk</code>&apos;s BreakpointObserver or <code>window.matchMedia()</code></p>\n<h3 id="usage">Usage</h3>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLBreakpoints } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n<span class="hljs-keyword">import</span> { BreakpointObserver } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@angular/cdk/layout&apos;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyComponent <span class="hljs-keyword">implements</span> OnInit {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">\n    <span class="hljs-keyword">private</span> breakpointObserver: BreakpointObserver,\n  </span>) {}\n\n  xs_sm$: Observable&lt;<span class="hljs-built_in">boolean</span>&gt;;\n\n  ngOnInit(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.xs_sm$ = <span class="hljs-keyword">this</span>.breakpointObserver.observe([VCLBreakpoints.xs, VCLBreakpoints.sm]).pipe(\n      map(<span class="hljs-function"><span class="hljs-params">state</span> =&gt;</span> state.matches)\n    );\n  }\n}\n</pre>\n'},"demo.component.html":{type:"pre",content:n("RxtE")},"demo.component.ts":{type:"pre",content:n("PfV2")}}}}let m=(()=>{class s{}return s.\u0275mod=o.Kb({type:s}),s.\u0275inj=o.Jb({factory:function(a){return new(a||s)},imports:[[p.c,l.b,e.g.forChild([{path:"",component:l.a,data:{demo:b}}])]]}),s})()},PfV2:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { BreakpointObserver, BreakpointState } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/cdk/layout\'</span>;\n<span class="hljs-keyword">import</span> { Observable } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { VCLBreakpoints } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n<span class="hljs-keyword">import</span> { map } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-keyword">const</span> pickMatches = map(<span class="hljs-function">(<span class="hljs-params">state: BreakpointState</span>) =&gt;</span> state.matches);\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BreakpointsDemoComponent {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">\n    <span class="hljs-keyword">private</span> breakpointObserver: BreakpointObserver,\n  </span>) {}\n\n  xs$: Observable&lt;<span class="hljs-built_in">boolean</span>&gt;;\n  sm$: Observable&lt;<span class="hljs-built_in">boolean</span>&gt;;\n  md$: Observable&lt;<span class="hljs-built_in">boolean</span>&gt;;\n  lg$: Observable&lt;<span class="hljs-built_in">boolean</span>&gt;;\n  xl$: Observable&lt;<span class="hljs-built_in">boolean</span>&gt;;\n  xs_sm$: Observable&lt;<span class="hljs-built_in">boolean</span>&gt;;\n\n  ngOnInit(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.xs$ = <span class="hljs-keyword">this</span>.breakpointObserver.observe(VCLBreakpoints.xs).pipe(pickMatches);\n    <span class="hljs-keyword">this</span>.sm$ = <span class="hljs-keyword">this</span>.breakpointObserver.observe(VCLBreakpoints.sm).pipe(pickMatches);\n    <span class="hljs-keyword">this</span>.md$ = <span class="hljs-keyword">this</span>.breakpointObserver.observe(VCLBreakpoints.md).pipe(pickMatches);\n    <span class="hljs-keyword">this</span>.lg$ = <span class="hljs-keyword">this</span>.breakpointObserver.observe(VCLBreakpoints.lg).pipe(pickMatches);\n    <span class="hljs-keyword">this</span>.xl$ = <span class="hljs-keyword">this</span>.breakpointObserver.observe(VCLBreakpoints.xl).pipe(pickMatches);\n    <span class="hljs-keyword">this</span>.xs_sm$ = <span class="hljs-keyword">this</span>.breakpointObserver.observe([VCLBreakpoints.xs, VCLBreakpoints.sm]).pipe(pickMatches);\n  }\n}\n'},RxtE:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>xs: {{xs$ | async}}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>sm: {{sm$ | async}}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>md: {{md$ | async}}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>lg: {{lg$ | async}}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>xl: {{xl$ | async}}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>xs_sm: {{xs_sm$ | async}}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n'}}]);