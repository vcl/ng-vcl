"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var index_1 = require("../src/index");
var l10n_module_1 = require("../src/l10n/l10n.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var markdown_component_1 = require("./components/markdown/markdown.component");
var demo_component_1 = require("./components/demo/demo.component");
var demos_1 = require("./demos");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        providers: [
            app_routes_1.appRoutingProviders
        ],
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            app_routes_1.routing,
            index_1.VCLModule,
            l10n_module_1.L10nModule.forRoot({
                config: {},
                loader: l10n_module_1.L10nStaticLoaderService,
                loaderConfig: {}
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            demo_component_1.DemoComponent,
            markdown_component_1.MarkdownComponent,
            demo_component_1.DemoContentComponent
        ].concat((demos_1.DEMOS.map(function (dc) { return Object.keys(dc.tabs).map(function (key) { return dc.tabs[key]; }).filter(function (o) { return typeof o === 'function'; }); }))),
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
