import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.component.html',
  styleUrls: ['css/style.css']
})

export class HomeComponent {
  constructor(
    private router: Router) {}
}