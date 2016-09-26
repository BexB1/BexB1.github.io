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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Bex Bolton";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <header>\n      <h1>{{title}}</h1>\n\n      <h2>Web Developer</h2>\n\n      <a href=\"https://github.com/BexB1\">\n        <i class=\"fa fa-github-square fa-2x\"></i>\n      </a>\n\n      <a href=\"https://uk.linkedin.com/in/bexbolton\">\n        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n      </a>\n\n      <a href=\"https://twitter.com/IamBexB\">\n        <i class=\"fa fa-twitter-square fa-2x\"></i>\n      </a>\n\n      <a href=\"mailto:bexbolton.webdev@gmail.com\">\n        <i class=\"fa fa-envelope-o fa-2x\"></i>\n      </a>\n\n      <nav>\n        <a routerLink=\"/\">Home</a> //\n\n        <a routerLink=\"projects\">\n        Projects\n        </a> //\n\n        <a routerLink=\"skills\">Skills</a> //\n        \n        <a routerLink=\"/\">Hey Bex, whatcha doin'?</a> //\n\n      </nav>\n    </header>\n\n\n    <hr />\n\n\n    <router-outlet></router-outlet>\n\n    ",
            styleUrls: [
                './css/reset.css',
                './css/style.css',
                './css/font-awesome/css/font-awesome.min.css'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map