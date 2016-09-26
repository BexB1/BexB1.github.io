import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Router } from '@angular/router';
import { Projects } from './project';

@Component({
  selector: 'projects',
  templateUrl: 'app/projects/projects.component.html',
  styleUrls: ['css/style.css']
})

export class ProjectsComponent {

  constructor(
    private router: Router) {}

  projects = Projects;

 }