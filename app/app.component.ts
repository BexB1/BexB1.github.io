import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <header>
      <h1>{{title}}</h1>

      <h2>Web Developer</h2>

      <a href="https://github.com/BexB1">
        <i class="fa fa-github-square fa-2x"></i>
      </a>

      <a href="https://uk.linkedin.com/in/bexbolton">
        <i class="fa fa-linkedin-square fa-2x"></i>
      </a>

      <a href="https://twitter.com/IamBexB">
        <i class="fa fa-twitter-square fa-2x"></i>
      </a>

      <a href="mailto:bexbolton.webdev@gmail.com">
        <i class="fa fa-envelope-o fa-2x"></i>
      </a>

      <nav>
        <a routerLink="/">Home</a> //

        <a routerLink="projects">
        Projects
        </a> //

        <a routerLink="skills">Skills</a> //
        
        <a routerLink="/">Hey Bex, whatcha doin'?</a> //

      </nav>
    </header>


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