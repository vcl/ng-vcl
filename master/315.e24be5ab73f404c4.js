"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[315],{2315:(p,s,e)=>{e.r(s),e.d(s,{AutocompleteDemoModule:()=>q,demo:()=>Z});var i=e(9808),k=e(2382),D=e(5367),r=e(265),x=e(393),d=e(9155),t=e(4893),h=e(1441),g=e(6447),f=e(1435),A=e(6766),v=e(3859),b=e(4935),B=e(9043),y=e(9563),U=e(2007);function O(o,l){1&o&&(t.TgZ(0,"vcl-select-list")(1,"vcl-select-list-header"),t._uU(2,"Europe"),t.qZA(),t.TgZ(3,"vcl-select-list-item",4),t._uU(4," Greece "),t.TgZ(5,"vcl-sub-label"),t._uU(6,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),t.qZA()(),t.TgZ(7,"vcl-select-list-item",5),t._uU(8," France "),t.qZA(),t.TgZ(9,"vcl-select-list-item",6),t._uU(10," Germany "),t.qZA(),t.TgZ(11,"vcl-select-list-item",7),t._uU(12," The United Kingdom of Great Britain and Northern Ireland "),t.qZA(),t.TgZ(13,"vcl-select-list-header"),t._uU(14,"Asia"),t.qZA(),t.TgZ(15,"vcl-select-list-item",8),t._uU(16," Japan "),t.qZA(),t.TgZ(17,"vcl-select-list-item",9),t._uU(18," China "),t.qZA(),t.TgZ(19,"vcl-select-list-item",10),t._uU(20," Thailand "),t.qZA()())}let E=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],decls:7,vars:1,consts:[["icon","fas:flag"],["placeholder","Search","vclInput","",3,"vclAutocompleteInput"],["vclAutocomplete",""],["acCountries","vclAutocomplete"],["value","Greece"],["value","France"],["value","Germany"],["value","The United Kingdom"],["value","Japan"],["value","China"],["value","Thailand"]],template:function(n,a){if(1&n&&(t.TgZ(0,"h3"),t._uU(1,"Basic autocomplete"),t.qZA(),t.TgZ(2,"vcl-input-field"),t._UZ(3,"vcl-icon",0)(4,"input",1),t.qZA(),t.YNc(5,O,21,0,"ng-template",2,3,t.W1O)),2&n){const m=t.MAs(6);t.xp6(4),t.Q6J("vclAutocompleteInput",m)}},directives:[h.q,g.o,f.V,A.X,v.oK,v.Fc,b.g,B.m,y.fN,U.g9],encapsulation:2}),o})();var S=e(1135),I=e(9975),T=e(3101),F=e(1884),N=e(3900),$=e(4004),J=e(262),C=e(8675),K=e(520),M=e(6994),j=e(3722),L=e(2331);function P(o,l){1&o&&(t.TgZ(0,"vcl-select-list-content")(1,"div",8),t._UZ(2,"vcl-busy-indicator",9),t.qZA()())}function Q(o,l){1&o&&(t.TgZ(0,"vcl-select-list-content")(1,"div",9),t._uU(2,"No books found"),t.qZA()())}function G(o,l){if(1&o&&(t.TgZ(0,"vcl-select-list-item",11),t._uU(1),t.qZA()),2&o){const n=l.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n.title," ")}}function W(o,l){if(1&o&&(t.ynx(0),t.YNc(1,G,2,2,"vcl-select-list-item",10),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.search.books)}}function R(o,l){if(1&o&&(t.TgZ(0,"vcl-select-list"),t.YNc(1,P,3,0,"vcl-select-list-content",7),t.YNc(2,Q,3,0,"vcl-select-list-content",7),t.YNc(3,W,2,1,"ng-container",7),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf","loading"===n.search.state),t.xp6(1),t.Q6J("ngIf","success"===n.search.state&&0===n.search.books.length),t.xp6(1),t.Q6J("ngIf","success"===n.search.state&&n.search.books.length>0)}}function X(o,l){if(1&o&&(t.TgZ(0,"li",16)(1,"div"),t._UZ(2,"img",17),t.qZA(),t.TgZ(3,"div",18)(4,"div",19)(5,"div",20)(6,"h2",21),t._uU(7),t.qZA()(),t.TgZ(8,"div",22)(9,"i"),t._uU(10),t.qZA(),t._UZ(11,"br"),t.TgZ(12,"span"),t._uU(13),t.qZA()()()()()),2&o){const n=l.$implicit;t.xp6(2),t.Q6J("src",n.image,t.LSH),t.xp6(5),t.Oqu(n.title),t.xp6(3),t.Oqu(n.date),t.xp6(3),t.Oqu(n.author)}}function Y(o,l){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"div",12)(4,"ul",13),t.YNc(5,X,14,4,"li",14),t.qZA()(),t.TgZ(6,"button",15),t.NdJ("click",function(){return t.CHM(n),t.oxw().onClearBooks()}),t._uU(7,"Clear"),t.qZA(),t.BQk()}if(2&o){const n=t.oxw();t.xp6(2),t.hij("Books (",n.books.length,")"),t.xp6(3),t.Q6J("ngForOf",n.books)}}const w=function(o){return{autocomplete:o,mapInputValue:"void"}};let H=(()=>{class o{constructor(n){this.http=n,this.search={state:"cleared",books:[]},this.books=[],this.search$=new S.X("")}ngOnInit(){this.search$.pipe((0,F.x)(),(0,N.w)(n=>!n||n.length<2?(0,I.x)([{state:"cleared",books:[]}],T.E):this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${n}&projection=lite`).pipe((0,$.U)(a=>({state:"success",books:(a.items||[]).filter(c=>c.id&&c.volumeInfo&&c.volumeInfo.title).map(c=>({id:c.id,title:c.volumeInfo.title,image:c.volumeInfo.imageLinks&&c.volumeInfo.imageLinks&&c.volumeInfo.imageLinks.smallThumbnail,author:c.volumeInfo.authors&&c.volumeInfo.authors.join(", "),date:c.volumeInfo.publishedDate}))})),(0,J.K)(()=>(0,I.x)([{state:"error",books:[]}],T.E)),(0,C.O)({state:"loading",books:[]}))),(0,C.O)({state:"cleared",books:[]})).subscribe(n=>this.search=n)}onSelectBook(n){n&&(this.search$.next(""),this.books.push(n))}onClearBooks(){this.books=[]}ngOnDestroy(){this.search$.complete()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(K.eN))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],decls:11,vars:5,consts:[["vclPrepend","","icon","fas:search"],["vclInput","","placeholder","Search Google Books api",3,"vclAutocompleteInput","input","vclAutocompleteInputSelectionChange"],["inputBooks",""],["vcl-button","","square","","vclAppend","",3,"click"],[3,"icon"],["vclAutocomplete",""],["acBooks","vclAutocomplete"],[4,"ngIf"],[1,"row","justify-content-center"],[2,"padding","1em"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"data-list","item-selectability","item-hover-highlight","no-border","scrollable","y",2,"max-height","20em"],["role","listbox","aria-multiselectable","false",1,"data-list-body"],["class","data-list-item row","role","option","aria-selected","false",4,"ngFor","ngForOf"],["vcl-button","",3,"click"],["role","option","aria-selected","false",1,"data-list-item","row"],[1,"responsive-image",3,"src"],[1,"gutter-margin","flex"],[1,"row"],[1,"row","center","flex"],[1,"m-0"],[1,"secondary-text-color","align-right"]],template:function(n,a){if(1&n){const m=t.EpF();t.TgZ(0,"h3"),t._uU(1,"vcl-dropdown with async data"),t.qZA(),t.TgZ(2,"vcl-input-field"),t._UZ(3,"vcl-icon",0),t.TgZ(4,"input",1,2),t.NdJ("input",function(u){return a.search$.next(u.target.value)})("vclAutocompleteInputSelectionChange",function(u){return a.onSelectBook(u)}),t.qZA(),t.TgZ(6,"button",3),t.NdJ("click",function(){t.CHM(m);const u=t.MAs(5);return u.value="",u.focus(),a.search$.next("")}),t._UZ(7,"vcl-icon",4),t.qZA()(),t.YNc(8,R,4,3,"ng-template",5,6,t.W1O),t.YNc(10,Y,8,2,"ng-container",7)}if(2&n){const m=t.MAs(9);t.xp6(4),t.Q6J("vclAutocompleteInput","cleared"===a.search.state?void 0:t.VKq(3,w,m)),t.xp6(3),t.Q6J("icon","fas:times-circle"),t.xp6(3),t.Q6J("ngIf",a.books.length>0)}},directives:[h.q,g.o,f.V,A.X,M.r,v.oK,v.Fc,b.g,i.O5,j.a,L.B,i.sg,y.fN],encapsulation:2}),o})();function Z(){return{label:"Autocomplete",tabs:{Demo:E,"Async Demo":H,"README.md":{type:"md",content:'# vcl-autocomplete\n\nAn autocomplete extension for inputs utilizing the select-list\n\n## Usage\n\n\n```html\n<input placeholder="Type to open dropdown" [vclAutocompleteInput]="ac" />\n\n<ng-template vclAutocomplete #ac="vclAutocomplete">\n  <vcl-select-list>\n    <vcl-select-list-header>Items</vcl-select-list-header>\n    <vcl-select-list-item value="1">\n      Item 1\n      <vcl-sub-label>Description of Item 1</vcl-sub-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value="2">\n      Item 2\n      <vcl-sub-label>Description of Item 2</vcl-sub-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value="3" [disabled]="true">\n      Item 3\n      <vcl-sub-label>Description of Item 3</vcl-sub-label>\n    </vcl-select-list-item>\n    <vcl-select-list-seperator></vcl-select-list-seperator>\n    <vcl-select-list-item value="4" [disabled]="true">\n      Seperated Item\n      <vcl-sub-label>Description of Item 4</vcl-sub-label>\n    </vcl-select-list-item>\n  </vcl-select-list>\n</ng-template>\n```\n\n### vclAutocomplete attributes\n\nName            | Type                             | Default     | Description\n----------      | -------                          | -------     | --------------------------------------\n`width`         | number \\| string                 |             | Dropdown width\n`height`        | number \\| string                 | \'20em\'      | Dropdown height\n`maxHeight`     | number \\| string                 |             | Dropdown max height\n\n### vclAutocomplete events\n\nName            | Type    | Description\n----------      | ------- | --------------------------------------\n`afterClose`    | any     | Fired after the dropdown was closed\n\n### input[vclAutocompleteInput] attributes\n\nName                         | Type                                   | Default | Description\n----------                   | -------                                | ------- | --------------------------------------\n`vclAutocomplete`            | vcl-autocomplete                       |         | The autocomplete component to use\n'},"demo.component.html":{type:"html",content:e(5945)},"demo.component.ts":{type:"ts",content:e(8429)},"async.component.html":{type:"html",content:e(5061)},"async.component.ts":{type:"ts",content:e(8755)}}}}let q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[i.ez,k.u5,d.l,r.V4c,r.NhM,r.WdB,r.o14,r.OD1,r.V9p,x.Cl,D.Bz.forChild([{path:"",component:d.z,data:{demo:Z}}])]]}),o})()},5061:(p,s,e)=>{e.r(s),e.d(s,{default:()=>i});const i='\n<h3>vcl-dropdown with async data</h3>\n\n<vcl-input-field>\n  <vcl-icon vclPrepend icon="fas:search"></vcl-icon>\n  <input #inputBooks \n         vclInput \n         placeholder="Search Google Books api" \n         (input)="search$.next($event.target.value)"\n         [vclAutocompleteInput]="search.state === \'cleared\' ? undefined : {autocomplete: acBooks, mapInputValue: \'void\'}"\n         (vclAutocompleteInputSelectionChange)="onSelectBook($event)"\n         />\n  <button vcl-button square vclAppend\n          (click)="inputBooks.value = \'\'; inputBooks.focus(); search$.next(\'\')">\n    <vcl-icon [icon]="\'fas:times-circle\'"></vcl-icon>\n  </button>\n</vcl-input-field>\n\n<ng-template vclAutocomplete #acBooks="vclAutocomplete">\n  <vcl-select-list>\n    <vcl-select-list-content *ngIf="search.state === \'loading\'">\n      <div class="row justify-content-center">\n        <vcl-busy-indicator style="padding: 1em"> </vcl-busy-indicator>\n      </div>\n    </vcl-select-list-content>\n    <vcl-select-list-content *ngIf="search.state === \'success\' && search.books.length === 0">\n      <div style="padding: 1em">No books found</div>\n    </vcl-select-list-content>\n    <ng-container *ngIf="search.state === \'success\' && search.books.length > 0">\n      <vcl-select-list-item *ngFor="let book of search.books" [value]="book">\n        {{book.title}}\n      </vcl-select-list-item>\n    </ng-container>\n  </vcl-select-list>\n</ng-template>\n\n<ng-container *ngIf="books.length > 0">\n\n  <h3>Books ({{books.length}})</h3>\n\n  <div class="data-list item-selectability item-hover-highlight no-border scrollable y" style="max-height: 20em;">\n    <ul class="data-list-body" role="listbox" aria-multiselectable="false">\n      <li *ngFor="let book of books" class="data-list-item row" role="option" aria-selected="false">\n        <div>\n          <img class="responsive-image" [src]="book.image">\n        </div>\n        <div class="gutter-margin flex">\n          <div class="row">\n            <div class="row center flex">\n              <h2 class="m-0">{{book.title}}</h2>\n            </div>\n            <div class="secondary-text-color align-right">\n              <i>{{book.date}}</i><br>\n              <span>{{book.author}}</span>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <button vcl-button (click)="onClearBooks()">Clear</button>\n\n</ng-container>\n'},8755:(p,s,e)=>{e.r(s),e.d(s,{default:()=>i});const i="import { HttpClient } from '@angular/common/http';\nimport { Component, OnDestroy } from '@angular/core';\nimport { BehaviorSubject ,  of, scheduled, asapScheduler } from 'rxjs';\nimport { switchMap, map, catchError, startWith, distinctUntilChanged } from 'rxjs/operators';\n\nconst BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';\n\ninterface Book {\n  id: string;\n  title: string;\n  author?: string;\n  date?: string;\n  image?: string;\n}\ninterface Search {\n  state: 'cleared' | 'loading' | 'error' | 'success';\n  books: Book[];\n}\n\n@Component({\n  templateUrl: 'async.component.html'\n})\nexport class AutocompleteAsyncDemoComponent implements OnDestroy {\n  constructor(private http: HttpClient) { }\n\n  search: Search = {\n    state: 'cleared',\n    books: []\n  };\n\n  books: Book[] = [];\n\n  search$ = new BehaviorSubject<string>('');\n\n  ngOnInit() {\n    this.search$.pipe(\n      distinctUntilChanged(),\n      switchMap(value => {\n        // Show nothing if less than 2 characters\n        if (!value || value.length < 2) {\n          return scheduled<Search>([{ state: 'cleared', books: [] }], asapScheduler);\n        } else {\n          return this.http.get(`${BOOK_API_URL}?q=${value}&projection=lite`).pipe(\n            map((data: any) => {\n              const items = data.items || [];\n              return {\n                state: 'success',\n                books: items.filter(item => item.id && item.volumeInfo && item.volumeInfo.title)\n                            .map(item => ({\n                  id: item.id,\n                  title: item.volumeInfo.title,\n                  image: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail,\n                  author: item.volumeInfo.authors && item.volumeInfo.authors.join(', '),\n                  date: item.volumeInfo.publishedDate,\n                }))\n              };\n            }),\n            catchError(() => scheduled<Search>([{ state: 'error', books: [] }], asapScheduler)), // Error state\n            startWith({ state: 'loading', books: [] }) // Set state to loading before the request\n          );\n        }\n      }),\n      startWith<Search>({ state: 'cleared', books: [] }) // Initial state\n    ).subscribe(search => this.search = search);\n  }\n\n  onSelectBook(book: Book) {\n    if (book) {\n      this.search$.next('');\n      this.books.push(book);\n    }\n  }\n\n  onClearBooks() {\n    this.books = [];\n  }\n\n  ngOnDestroy() {\n    this.search$.complete();\n  }\n}\n"},5945:(p,s,e)=>{e.r(s),e.d(s,{default:()=>i});const i='<h3>Basic autocomplete</h3>\n\n<vcl-input-field>\n  <vcl-icon icon="fas:flag"></vcl-icon>\n  <input placeholder="Search"\n         vclInput\n         [vclAutocompleteInput]="acCountries"\n         />\n</vcl-input-field>\n\n<ng-template vclAutocomplete #acCountries="vclAutocomplete">\n  <vcl-select-list>\n    <vcl-select-list-header>Europe</vcl-select-list-header>\n    <vcl-select-list-item value="Greece">\n      Greece\n      <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value="France">\n      France\n    </vcl-select-list-item>\n    <vcl-select-list-item value="Germany">\n      Germany\n    </vcl-select-list-item>\n    <vcl-select-list-item value="The United Kingdom">\n      The United Kingdom of Great Britain and Northern Ireland\n    </vcl-select-list-item>\n    <vcl-select-list-header>Asia</vcl-select-list-header>\n    <vcl-select-list-item value="Japan">\n      Japan\n    </vcl-select-list-item>\n    <vcl-select-list-item value="China">\n      China\n    </vcl-select-list-item>\n    <vcl-select-list-item value="Thailand">\n      Thailand\n    </vcl-select-list-item>\n  </vcl-select-list>\n</ng-template>\n'},8429:(p,s,e)=>{e.r(s),e.d(s,{default:()=>i});const i="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class AutocompleteDemoComponent {\n\n}\n"}}]);