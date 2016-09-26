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
var router_1 = require('@angular/router');
var SkillsComponent = (function () {
    function SkillsComponent(router) {
        this.router = router;
        this.skills = [
            { id: 1, name: 'HTML5', pic: '../pics/icons/HTML5.png' },
            { id: 2, name: 'CSS3', pic: '../pics/icons/CSS.png' },
            { id: 3, name: 'Sass', pic: '../pics/icons/sass.png' },
            { id: 4, name: 'JavaScript', pic: '../pics/icons/js.jpg' },
            { id: 5, name: 'jQuery', pic: '../pics/icons/jQuery.gif' },
            { id: 6, name: 'AngularJS', pic: '../pics/icons/angularjs.png' },
            { id: 7, name: 'Angular 2', pic: '../pics/icons/angular.png' },
            { id: 8, name: 'Bower JS', pic: '../pics/icons/bower.png' },
            { id: 9, name: 'Gulp', pic: '../pics/icons/gulp.svg' },
            { id: 10, name: 'Grunt', pic: '../pics/icons/grunt.png' }
        ];
        this.beSkills = [
            { id: 1, name: 'nodeJS', pic: '../pics/icons/nodejs.png' },
            { id: 2, name: 'Express JS', pic: '../pics/icons/expressjs.png' },
            { id: 3, name: 'MongoDB', pic: '../pics/icons/mongodb.png' },
            { id: 4, name: 'MySQL', pic: '../pics/icons/MySQL.png' },
            { id: 5, name: 'Ruby', pic: '../pics/icons/ruby.png' },
            { id: 6, name: 'Ruby on Rails', pic: '../pics/icons/rails.png' },
            { id: 7, name: 'Sinatra', pic: '../pics/icons/sinatra.png' },
            { id: 8, name: 'PostgreSQL', pic: '../pics/icons/postgres.png' },
        ];
        this.otherSkills = [
            { id: 1, name: 'Git', pic: '../pics/icons/git.png' },
            { id: 2, name: 'GitHub', pic: '../pics/icons/github.png' },
            { id: 3, name: 'TypeScript', pic: '../pics/icons/ts.png' },
            { id: 4, name: 'NPM', pic: '../pics/icons/npm.png' },
            { id: 5, name: 'Chai', pic: '../pics/icons/chai.png' },
            { id: 6, name: 'Mocha', pic: '../pics/icons/mocha.svg' },
            { id: 7, name: 'Heroku', pic: '../pics/icons/heroku.png' },
            { id: 8, name: 'Trello', pic: '../pics/icons/trello.png' }
        ];
    }
    SkillsComponent = __decorate([
        core_1.Component({
            selector: 'skills',
            templateUrl: 'app/skills/skills.component.html',
            styleUrls: ['css/style.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=skills.component.js.map