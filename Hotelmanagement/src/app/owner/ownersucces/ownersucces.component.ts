import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownersucces',
  templateUrl: './ownersucces.component.html',
  styleUrls: ['./ownersucces.component.scss']
})
export class OwnersuccesComponent {

  constructor(private router : Router){}
  


  registration(){
    this.router.navigateByUrl('/owner/nweHotelReg');

  }
}
