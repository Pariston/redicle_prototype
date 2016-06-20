import { Component } from '@angular/core';
import { HomePageComponent } from './HomePage/homePage.component';
import { ArticlePageComponent } from './ArticlePage/articlePage.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@RouteConfig([
    {
        path: '/',
        name: 'HomePage',
        component: HomePageComponent,
        useAsDefault: true
    },
    {
        path: '/article',
        name: 'ArticlePage',
        component: ArticlePageComponent
    }
])

@Component({
    selector: 'my-app',
    templateUrl: './components/main.html',
    directives: [ ROUTER_DIRECTIVES, HomePageComponent, ArticlePageComponent ],
    providers: [ ROUTER_PROVIDERS ]
})
export class MainComponent { }