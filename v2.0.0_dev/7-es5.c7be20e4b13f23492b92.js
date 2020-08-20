function _defineProperties(s,a){for(var n=0;n<a.length;n++){var l=a[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,l.key,l)}}function _createClass(s,a,n){return a&&_defineProperties(s.prototype,a),n&&_defineProperties(s,n),s}function _classCallCheck(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{A8Yd:function(s,a){s.exports='<span class="hljs-keyword">import</span> { HttpClient } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common/http\'</span>;\n<span class="hljs-keyword">import</span> { Component, OnDestroy } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { BehaviorSubject ,  of, scheduled, asapScheduler } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { switchMap, map, catchError, startWith, distinctUntilChanged } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-keyword">const</span> BOOK_API_URL = <span class="hljs-string">\'https://www.googleapis.com/books/v1/volumes\'</span>;\n\n<span class="hljs-keyword">interface</span> Book {\n  id: <span class="hljs-built_in">string</span>;\n  title: <span class="hljs-built_in">string</span>;\n  author?: <span class="hljs-built_in">string</span>;\n  date?: <span class="hljs-built_in">string</span>;\n  image?: <span class="hljs-built_in">string</span>;\n}\n<span class="hljs-keyword">interface</span> Search {\n  state: <span class="hljs-string">\'cleared\'</span> | <span class="hljs-string">\'loading\'</span> | <span class="hljs-string">\'error\'</span> | <span class="hljs-string">\'success\'</span>;\n  books: Book[];\n}\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'async.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AutocompleteAsyncDemoComponent <span class="hljs-keyword">implements</span> OnDestroy {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> http: HttpClient</span>) { }\n\n  search: Search = {\n    state: <span class="hljs-string">\'cleared\'</span>,\n    books: []\n  };\n\n  books: Book[] = [];\n\n  search$ = <span class="hljs-keyword">new</span> BehaviorSubject&lt;<span class="hljs-built_in">string</span>&gt;(<span class="hljs-string">\'\'</span>);\n\n  ngOnInit() {\n    <span class="hljs-keyword">this</span>.search$.pipe(\n      distinctUntilChanged(),\n      switchMap(<span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> {\n        <span class="hljs-comment">// Show nothing if less than 2 characters</span>\n        <span class="hljs-keyword">if</span> (!value || value.length &lt; <span class="hljs-number">2</span>) {\n          <span class="hljs-keyword">return</span> scheduled&lt;Search&gt;([{ state: <span class="hljs-string">\'cleared\'</span>, books: [] }], asapScheduler);\n        } <span class="hljs-keyword">else</span> {\n          <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.http.get(<span class="hljs-string">`<span class="hljs-subst">${BOOK_API_URL}</span>?q=<span class="hljs-subst">${value}</span>&amp;projection=lite`</span>).pipe(\n            map(<span class="hljs-function">(<span class="hljs-params">data: <span class="hljs-built_in">any</span></span>) =&gt;</span> {\n              <span class="hljs-keyword">const</span> items = data.items || [];\n              <span class="hljs-keyword">return</span> {\n                state: <span class="hljs-string">\'success\'</span>,\n                books: items.filter(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.id &amp;&amp; item.volumeInfo &amp;&amp; item.volumeInfo.title)\n                            .map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> ({\n                  id: item.id,\n                  title: item.volumeInfo.title,\n                  image: item.volumeInfo.imageLinks &amp;&amp; item.volumeInfo.imageLinks &amp;&amp; item.volumeInfo.imageLinks.smallThumbnail,\n                  author: item.volumeInfo.authors &amp;&amp; item.volumeInfo.authors.join(<span class="hljs-string">\', \'</span>),\n                  date: item.volumeInfo.publishedDate,\n                }))\n              };\n            }),\n            catchError(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> scheduled&lt;Search&gt;([{ state: <span class="hljs-string">\'error\'</span>, books: [] }], asapScheduler)), <span class="hljs-comment">// Error state</span>\n            startWith({ state: <span class="hljs-string">\'loading\'</span>, books: [] }) <span class="hljs-comment">// Set state to loading before the request</span>\n          );\n        }\n      }),\n      startWith&lt;Search&gt;({ state: <span class="hljs-string">\'cleared\'</span>, books: [] }) <span class="hljs-comment">// Initial state</span>\n    ).subscribe(<span class="hljs-function"><span class="hljs-params">search</span> =&gt;</span> <span class="hljs-keyword">this</span>.search = search);\n  }\n\n  onSelectBook(book: Book) {\n    <span class="hljs-keyword">if</span> (book) {\n      <span class="hljs-keyword">this</span>.search$.next(<span class="hljs-string">\'\'</span>);\n      <span class="hljs-keyword">this</span>.books.push(book);\n    }\n  }\n\n  onClearBooks() {\n    <span class="hljs-keyword">this</span>.books = [];\n  }\n\n  ngOnDestroy() {\n    <span class="hljs-keyword">this</span>.search$.complete();\n  }\n}\n'},khga:function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return E})),n.d(a,"AutocompleteDemoModule",(function(){return L}));var l,t=n("ofXK"),e=n("3Pt+"),p=n("tyNb"),c=n("19H1"),o=n("vxfF"),h=n("2FIb"),i=n("fXoL"),r=n("oZnf"),j=n("9Rb9"),g=n("1/Kn"),m=n("RCbH"),u=n("F3U6"),d=n("zDo1"),b=n("gCzt"),v=n("StUX"),f=n("pKlR"),k=((l=function s(){_classCallCheck(this,s)}).\u0275fac=function(s){return new(s||l)},l.\u0275cmp=i.Gb({type:l,selectors:[["ng-component"]],decls:28,vars:1,consts:[["icon","fas:flag"],["placeholder","Search","vclInput","",3,"vclAutocompleteInput"],["acCountries","vclAutocomplete"],["value","Greece"],["value","France"],["value","Germany"],["value","The United Kingdom"],["value","Japan"],["value","China"],["value","Thailand"]],template:function(s,a){if(1&s&&(i.Sb(0,"h3"),i.yc(1,"Basic autocomplete"),i.Rb(),i.Sb(2,"vcl-input-field"),i.Nb(3,"vcl-icon",0),i.Nb(4,"input",1),i.Rb(),i.Sb(5,"vcl-autocomplete",null,2),i.Sb(7,"vcl-select-list"),i.Sb(8,"vcl-select-list-header"),i.yc(9,"Europe"),i.Rb(),i.Sb(10,"vcl-select-list-item",3),i.yc(11," Greece "),i.Sb(12,"vcl-sub-label"),i.yc(13,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),i.Rb(),i.Rb(),i.Sb(14,"vcl-select-list-item",4),i.yc(15," France "),i.Rb(),i.Sb(16,"vcl-select-list-item",5),i.yc(17," Germany "),i.Rb(),i.Sb(18,"vcl-select-list-item",6),i.yc(19," The United Kingdom of Great Britain and Northern Ireland "),i.Rb(),i.Sb(20,"vcl-select-list-header"),i.yc(21,"Asia"),i.Rb(),i.Sb(22,"vcl-select-list-item",7),i.yc(23," Japan "),i.Rb(),i.Sb(24,"vcl-select-list-item",8),i.yc(25," China "),i.Rb(),i.Sb(26,"vcl-select-list-item",9),i.yc(27," Thailand "),i.Rb(),i.Rb(),i.Rb()),2&s){var n=i.nc(6);i.Ab(4),i.ic("vclAutocompleteInput",n)}},directives:[r.a,j.a,g.a,m.a,u.a,d.a,b.a,v.a,f.b],encapsulation:2}),l),y=n("2Vo4"),w=n("7HRe"),I=n("7Hc7"),S=n("/uUt"),A=n("eIep"),R=n("lJxs"),C=n("JIr8"),B=n("JX91"),x=n("tk/3"),O=n("6B8K"),D=n("kVmk"),q=n("dCgY");function _(s,a){1&s&&(i.Sb(0,"vcl-select-list-content"),i.Sb(1,"div",7),i.Nb(2,"vcl-busy-indicator",8),i.Rb(),i.Rb())}function T(s,a){1&s&&(i.Sb(0,"vcl-select-list-content"),i.Sb(1,"div",8),i.yc(2,"No books found"),i.Rb(),i.Rb())}function $(s,a){if(1&s&&(i.Sb(0,"vcl-select-list-item",10),i.yc(1),i.Rb()),2&s){var n=a.$implicit;i.ic("value",n),i.Ab(1),i.Ac(" ",n.title," ")}}function F(s,a){if(1&s&&(i.Qb(0),i.wc(1,$,2,2,"vcl-select-list-item",9),i.Pb()),2&s){var n=i.dc();i.Ab(1),i.ic("ngForOf",n.search.books)}}function N(s,a){if(1&s&&(i.Sb(0,"li",15),i.Sb(1,"div"),i.Nb(2,"img",16),i.Rb(),i.Sb(3,"div",17),i.Sb(4,"div",18),i.Sb(5,"div",19),i.Sb(6,"h2",20),i.yc(7),i.Rb(),i.Rb(),i.Sb(8,"div",21),i.Sb(9,"i"),i.yc(10),i.Rb(),i.Nb(11,"br"),i.Sb(12,"span"),i.yc(13),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&s){var n=a.$implicit;i.Ab(2),i.ic("src",n.image,i.qc),i.Ab(5),i.zc(n.title),i.Ab(3),i.zc(n.date),i.Ab(3),i.zc(n.author)}}function G(s,a){if(1&s){var n=i.Tb();i.Qb(0),i.Sb(1,"h3"),i.yc(2),i.Rb(),i.Sb(3,"div",11),i.Sb(4,"ul",12),i.wc(5,N,14,4,"li",13),i.Rb(),i.Rb(),i.Sb(6,"button",14),i.ac("click",(function(){return i.oc(n),i.dc().onClearBooks()})),i.yc(7,"Clear"),i.Rb(),i.Pb()}if(2&s){var l=i.dc();i.Ab(2),i.Ac("Books (",l.books.length,")"),i.Ab(3),i.ic("ngForOf",l.books)}}var U,K=function(s){return{autocomplete:s,mapInputValue:"void"}},P=((U=function(){function s(a){_classCallCheck(this,s),this.http=a,this.search={state:"cleared",books:[]},this.books=[],this.search$=new y.a("")}return _createClass(s,[{key:"ngOnInit",value:function(){var s=this;this.search$.pipe(Object(S.a)(),Object(A.a)((function(a){return!a||a.length<2?Object(w.a)([{state:"cleared",books:[]}],I.a):s.http.get("https://www.googleapis.com/books/v1/volumes?q=".concat(a,"&projection=lite")).pipe(Object(R.a)((function(s){return{state:"success",books:(s.items||[]).filter((function(s){return s.id&&s.volumeInfo&&s.volumeInfo.title})).map((function(s){return{id:s.id,title:s.volumeInfo.title,image:s.volumeInfo.imageLinks&&s.volumeInfo.imageLinks&&s.volumeInfo.imageLinks.smallThumbnail,author:s.volumeInfo.authors&&s.volumeInfo.authors.join(", "),date:s.volumeInfo.publishedDate}}))}})),Object(C.a)((function(){return Object(w.a)([{state:"error",books:[]}],I.a)})),Object(B.a)({state:"loading",books:[]}))})),Object(B.a)({state:"cleared",books:[]})).subscribe((function(a){return s.search=a}))}},{key:"onSelectBook",value:function(s){s&&(this.search$.next(""),this.books.push(s))}},{key:"onClearBooks",value:function(){this.books=[]}},{key:"ngOnDestroy",value:function(){this.search$.complete()}}]),s}()).\u0275fac=function(s){return new(s||U)(i.Mb(x.a))},U.\u0275cmp=i.Gb({type:U,selectors:[["ng-component"]],decls:15,vars:8,consts:[["vclPrepend","","icon","fas:search"],["vclInput","","placeholder","Search Google Books api",3,"vclAutocompleteInput","input","vclAutocompleteInputSelectionChange"],["inputBooks",""],["vcl-square-button","","vclAppend","",3,"click"],[3,"icon"],["acBooks","vclAutocomplete"],[4,"ngIf"],[1,"row","justify-content-center"],[2,"padding","1em"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"data-list","item-selectability","item-hover-highlight","no-border","scrollable","y",2,"max-height","20em"],["role","listbox","aria-multiselectable","false",1,"data-list-body"],["class","data-list-item row","role","option","aria-selected","false",4,"ngFor","ngForOf"],["vcl-button","",3,"click"],["role","option","aria-selected","false",1,"data-list-item","row"],[1,"responsive-image",3,"src"],[1,"gutter-margin","flex"],[1,"row"],[1,"row","center","flex"],[1,"m-0"],[1,"secondary-text-color","align-right"]],template:function(s,a){if(1&s){var n=i.Tb();i.Sb(0,"h3"),i.yc(1,"vcl-dropdown with async data"),i.Rb(),i.Sb(2,"vcl-input-field"),i.Nb(3,"vcl-icon",0),i.Sb(4,"input",1,2),i.ac("input",(function(s){return a.search$.next(s.target.value)}))("vclAutocompleteInputSelectionChange",(function(s){return a.onSelectBook(s)})),i.Rb(),i.Sb(6,"button",3),i.ac("click",(function(){i.oc(n);var s=i.nc(5);return s.value="",s.focus(),a.search$.next("")})),i.Nb(7,"vcl-icon",4),i.Rb(),i.Rb(),i.Sb(8,"vcl-autocomplete",null,5),i.Sb(10,"vcl-select-list"),i.wc(11,_,3,0,"vcl-select-list-content",6),i.wc(12,T,3,0,"vcl-select-list-content",6),i.wc(13,F,2,1,"ng-container",6),i.Rb(),i.Rb(),i.wc(14,G,8,2,"ng-container",6)}if(2&s){var l=i.nc(9);i.Ab(4),i.ic("vclAutocompleteInput","cleared"===a.search.state?void 0:i.kc(6,K,l)),i.Ab(3),i.ic("icon","fas:times-circle"),i.Ab(4),i.ic("ngIf","loading"===a.search.state),i.Ab(1),i.ic("ngIf","success"===a.search.state&&0===a.search.books.length),i.Ab(1),i.ic("ngIf","success"===a.search.state&&a.search.books.length>0),i.Ab(1),i.ic("ngIf",a.books.length>0)}},directives:[r.a,j.a,g.a,m.a,O.b,u.a,d.a,t.t,D.a,q.a,t.s,v.a],encapsulation:2}),U);function E(){return{label:"Autocomplete",tabs:{Demo:k,"Async Demo":P,"README.md":{type:"md",content:'<h1 id="vcl-autocomplete">vcl-autocomplete</h1>\n<p>An autocomplete extension for inputs utilizing the select-list</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type to open dropdown&quot;</span> [<span class="hljs-attr">vclAutocomplete</span>]=<span class="hljs-string">&quot;ac&quot;</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete</span> #<span class="hljs-attr">ac</span>=<span class="hljs-string">&quot;vclAutocomplete&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Items<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n      Item 1\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-sub-label</span>&gt;</span>Description of Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-sub-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n      Item 2\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-sub-label</span>&gt;</span>Description of Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-sub-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;3&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n      Item 3\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-sub-label</span>&gt;</span>Description of Item 3<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-sub-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-seperator</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-seperator</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;4&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n      Seperated Item\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-sub-label</span>&gt;</span>Description of Item 4<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-sub-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete</span>&gt;</span></pre>\n<h3 id="vcl-autocomplete-attributes">vcl-autocomplete attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>width</code></td>\n<td>number | string</td>\n<td></td>\n<td>Dropdown width</td>\n</tr>\n<tr>\n<td><code>height</code></td>\n<td>number | string</td>\n<td>&apos;20em&apos;</td>\n<td>Dropdown height</td>\n</tr>\n<tr>\n<td><code>maxHeight</code></td>\n<td>number | string</td>\n<td></td>\n<td>Dropdown max height</td>\n</tr>\n</tbody></table>\n<h3 id="vcl-autocomplete-events">vcl-autocomplete events</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>afterClose</code></td>\n<td>any</td>\n<td>Fired after the dropdown was closed</td>\n</tr>\n</tbody></table>\n<h3 id="inputvclautocomplete-attributes">input[vclAutocomplete] attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vclAutocomplete</code></td>\n<td>vcl-autocomplete</td>\n<td></td>\n<td>The autocomplete component to use</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("pKWc")},"demo.component.ts":{type:"pre",content:n("tYw5")},"async.component.html":{type:"pre",content:n("oXPO")},"async.component.ts":{type:"pre",content:n("A8Yd")}}}}var J,L=((J=function s(){_classCallCheck(this,s)}).\u0275mod=i.Kb({type:J}),J.\u0275inj=i.Jb({factory:function(s){return new(s||J)},imports:[[t.c,e.m,h.b,c.A,c.N,c.O,c.M,c.y,c.v,o.c,p.g.forChild([{path:"",component:h.a,data:{demo:E}}])]]}),J)},oXPO:function(s,a){s.exports='\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>vcl-dropdown with async data<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> #<span class="hljs-attr">inputBooks</span> \n         <span class="hljs-attr">vclInput</span> \n         <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Search Google Books api"</span> \n         (<span class="hljs-attr">input</span>)=<span class="hljs-string">"search$.next($event.target.value)"</span>\n         [<span class="hljs-attr">vclAutocompleteInput</span>]=<span class="hljs-string">"search.state === \'cleared\' ? undefined : {autocomplete: acBooks, mapInputValue: \'void\'}"</span>\n         (<span class="hljs-attr">vclAutocompleteInputSelectionChange</span>)=<span class="hljs-string">"onSelectBook($event)"</span>\n         /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> <span class="hljs-attr">vclAppend</span>\n          (<span class="hljs-attr">click</span>)=<span class="hljs-string">"inputBooks.value = \'\'; inputBooks.focus(); search$.next(\'\')"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">"\'fas:times-circle\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete</span> #<span class="hljs-attr">acBooks</span>=<span class="hljs-string">"vclAutocomplete"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-content</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"search.state === \'loading\'"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row justify-content-center"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 1em"</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-content</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-content</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"search.state === \'success\' &amp;&amp; search.books.length === 0"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 1em"</span>&gt;</span>No books found<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-content</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"search.state === \'success\' &amp;&amp; search.books.length &gt; 0"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let book of search.books"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"book"</span>&gt;</span>\n        {{book.title}}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"books.length &gt; 0"</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Books ({{books.length}})<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"data-list item-selectability item-hover-highlight no-border scrollable y"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"max-height: 20em;"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"data-list-body"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"listbox"</span> <span class="hljs-attr">aria-multiselectable</span>=<span class="hljs-string">"false"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let book of books"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"data-list-item row"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"option"</span> <span class="hljs-attr">aria-selected</span>=<span class="hljs-string">"false"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"responsive-image"</span> [<span class="hljs-attr">src</span>]=<span class="hljs-string">"book.image"</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gutter-margin flex"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row center flex"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-0"</span>&gt;</span>{{book.title}}<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"secondary-text-color align-right"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">i</span>&gt;</span>{{book.date}}<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{book.author}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"onClearBooks()"</span>&gt;</span>Clear<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>\n'},pKWc:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic autocomplete<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:flag"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Search"</span>\n         <span class="hljs-attr">vclInput</span>\n         [<span class="hljs-attr">vclAutocompleteInput</span>]=<span class="hljs-string">"acCountries"</span>\n         /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete</span> #<span class="hljs-attr">acCountries</span>=<span class="hljs-string">"vclAutocomplete"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Europe<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"Greece"</span>&gt;</span>\n      Greece\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-sub-label</span>&gt;</span>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-sub-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"France"</span>&gt;</span>\n      France\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"Germany"</span>&gt;</span>\n      Germany\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"The United Kingdom"</span>&gt;</span>\n      The United Kingdom of Great Britain and Northern Ireland\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Asia<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"Japan"</span>&gt;</span>\n      Japan\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"China"</span>&gt;</span>\n      China\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"Thailand"</span>&gt;</span>\n      Thailand\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete</span>&gt;</span>\n'},tYw5:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AutocompleteDemoComponent {\n\n}\n'}}]);