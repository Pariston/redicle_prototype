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
var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent = __decorate([
        core_1.Component({
            templateUrl: './components/HomePage/homePage.html',
            styles: ["\n    body { padding: 0; margin: 0; }\n    \n    .header {\n        background-color: #1f1f1f;\n        color: #eaeaea;\n        padding: 20px 10px;\n    }\n    \n    .centerContainer {\n        max-width: 1400px;\n        padding: 20px;\n        margin: 0 auto;\n     }\n     \n    .categories {\n        float: right;\n     }\n     \n     .slider {\n        height: 400px;\n        background: #3f3f3f url(\"public/images/slide1.jpg\") no-repeat center;\n        border-top: 3px solid #eaeaea;\n        border-bottom: 3px solid #eaeaea;\n     }\n     \n     .logo {\n        font-size: 25px;\n        color: red;\n        font-weight: bold;\n     }\n     \n    .categories {\n        padding: 0px;\n        margin: -20px 0 0;\n     }\n     \n     .categories > li {\n        display: inline-block;\n        text-transform: uppercase;\n        margin-left: 20px;\n        font-size: 15px;\n     }\n     \n     .sections {\n        background-color: #fff;\n        overflow: hidden;\n      }\n      \n     .left_section {\n        padding: 20px;\n        float: left;\n        color: #1f1f1f;\n        word-wrap:break-word;\n        width: 70%;\n      }\n      \n      .right_section {\n        background-color: #1a1a1a;\n        height: 100%;\n        /*background-color: #4f4f4f;*/\n        padding: 20px;\n        float: right;\n        width: 300px;\n        width: 23%;\n       }\n       \n       .footer {\n        margin-top: 20px;\n        background-color: #1f1f1f;\n        padding: 20px;\n        height: 200px;\n       }\n       .post_header{\n           color: #323336;\n           font-size: 19px;\n           letter-spacing: 0.2px;\n           line-height: 50px;\n       }\n       .post_center >#header{\n            width: calc(100% + 100px);\n            max-width: 106%;\n            margin: -20px -20px 20px -20px;\n            max-height: 550px;\n       }\n       .post_center > p{\n            font-size: 1.3em;\n            line-height: 150%;\n            color: #2d2d2d;\n            margin-bottom: 20px;\n       }\n       .post_center > img {\n           max-width: 100%;\n           height: auto;\n       }\n       \n       .right_section_span{\n        border-bottom: 2px solid #385c7b;\n        width:100%;\n       }\n       .right_section span {\n        color: #fff;\n        line-height: 17px;\n        display: inline-block;\n        padding: 7px 12px 4px 12px;\n        background-color: #385c7b;\n      \n        \n       }\n       .right_section > ul {\n        list-style: none;\n      \n       }\n       .right_section > ul > li {\n        line-height: 30px;\n       }\n       .right_section > ul > li > a {\n        font-size: 18px;\n        text-decoration: none;\n          color:white;\n       }\n       .search{\n            background-color: transparent;\n            border-color: #333;\n            color: #fff;\n            border: 1px solid #e1e1e1;\n            border-color: #333;\n            width: 70%;\n            height: 34px; \n       }\n       .button{\n            height: 32px;\n            padding: 7px 15px 8px 15px;\n            line-height: 16px;\n            margin: 0;\n            background-color: #444;\n            color:white;\n            border-color: #444;\n       }\n       .search_section{\n            padding: 20px;\n            \n       }\n       \n       \n       \n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=homePage.component.js.map