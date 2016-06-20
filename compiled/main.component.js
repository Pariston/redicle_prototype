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
var core_1 = require('@angular/core');
var homePage_component_1 = require('./HomePage/homePage.component');
var articlePage_component_1 = require('./ArticlePage/articlePage.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        router_deprecated_1.RouteConfig([
            {
                path: '/',
                name: 'HomePage',
                component: homePage_component_1.HomePageComponent,
                useAsDefault: true
            },
            {
                path: '/article',
                name: 'ArticlePage',
                component: articlePage_component_1.ArticlePageComponent
            }
        ]),
        core_1.Component({
            selector: 'my-app',
            templateUrl: './components/main.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, homePage_component_1.HomePageComponent, articlePage_component_1.ArticlePageComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map