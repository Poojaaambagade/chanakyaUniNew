import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent {
  constructor(public router: Router) {
  }
  login() {
    this.router.navigateByUrl("/login")
  }
  studentActivity(){
    this.router.navigateByUrl("/student/studentActivity")
  }
  directive() {
    this.router.navigateByUrl("/directives")
  }
}
