"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var projects_component_1 = require('./projects/projects.component');
var skills_component_1 = require('./skills/skills.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'projects',
        component: projects_component_1.ProjectsComponent
    },
    {
        path: 'skills',
        component: skills_component_1.SkillsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map