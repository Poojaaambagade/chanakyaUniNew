import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appCharonly]'
})
export class CharonlyDirective {

  constructor(private elementRef :  ElementRef) { }

  @HostListener('input',['$event'])
  onInputChanges(){
    console.log('directives calling');
    let initialInputBoxValue = this.elementRef.nativeElement.value;
    console.log(initialInputBoxValue);
    this.elementRef.nativeElement.value = initialInputBoxValue.replace(/[^a-zA-z ]*/g , '');
  }


  

  

}
