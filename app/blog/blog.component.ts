import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Router } from '@angular/router';
import { Skill } from './skill';


@Component({
  selector: 'blog',
  templateUrl: 'app/blog/blog.component.html',
  styleUrls: ['css/style.css']
})

export class BlogComponent {
  constructor(
    private router: Router) {}
}