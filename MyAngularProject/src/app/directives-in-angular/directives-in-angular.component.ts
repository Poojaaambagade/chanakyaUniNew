import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives-in-angular',
  templateUrl: './directives-in-angular.component.html',
  styleUrls: ['./directives-in-angular.component.css']
})
export class DirectivesInAngularComponent {
  show=true;
  //  show = false;
  // toShowPara1!:string; (if you not assigned the value to the property then it will consider as unDefined.)
  toShowPara1="poonam";
  // unDefinedProperty:any;
  // nullProperty=null;
  toggle:any;
  cars:string[]=['mini-cup','jaugaur','marcedeez','swift']
  carDetails=[
    {carName:'swift',carPrice:800000,color:'white'},
    {carName:'nexon',carPrice:1400000,color:'white'},
    {carName:'altros',carPrice:1200000,color:'grey'},
    {carName:'bmw',carPrice:3000000,color:'white'},
    {carName:'jeep',carPrice:5000000,color:'black'},
  ]
  tableHeading:string[]=['carName','carPrice','color']
// array in array items 
  data =[20,60,50,30,[60,30,89]];
  data2:any[]=[];
  data3:any[]=[];
  color='pink';
  color1='red';
  styleCss='yellow';
  sytle1='red';
  multiclasses=300;
  ngClass:string='pooja';
  name:string='chinku';
  ngSwitchValue:number=500;


  constructor(){
  }
  ngOnInit() {
    this.data.forEach((items, i) => {
      if (i != 4) {
        this.data2.push(items)
      }
    })
    this.data.forEach((items: any, i) => {
      if (i == 4) {
        this.data3 = [...items];
      }
    })
 }

  toggleEffect(){
    this.toggle = !this.toggle
  }
}