import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public router: Router) {

  }
  loginCompo() {
    this.router.navigateByUrl("/login")
  }
  adminModuleLoginCompo() {
    this.router.navigateByUrl("/admin/adminLogin")
  }
  userLoginCompo() {
    this.router.navigateByUrl("/user/userLogin")
}
}
