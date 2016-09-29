import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="header">

    <div class="header-title">
      <h1>{{title}}</h1>
    </div>

      <div class="header-bottom">

      <nav>

      <h2>Web Developer</h2>

        <a routerLink="/">home</a> //

        <a routerLink="projects">
        projects
        </a> //

        <a routerLink="skills">skills</a> //

        <a href="../pics/Becky_Bolton_CV.pdf">CV</a>

        <a href="https://github.com/BexB1" target="_blank">
          <i class="fa fa-github-square"></i>
        </a>

        <a href="https://uk.linkedin.com/in/bexbolton" target="_blank">
          <i class="fa fa-linkedin-square"></i>
        </a>

        <a href="https://twitter.com/IamBexB" target="_blank">
          <i class="fa fa-twitter-square"></i>
        </a>

        <a href="mailto:bexbolton.webdev@gmail.com">
          <i class="fa fa-envelope-o"></i>
        </a>

      </nav>

      </div>
    </div>


    <hr />


    <router-outlet></router-outlet>

    `,
   styleUrls: [
     './css/reset.css', 
     './css/style.css',
     './css/font-awesome/css/font-awesome.min.css'
     ]
})

export class AppComponent {
  title = "Bex Bolton";
}