import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersonly]'
})
export class NumbersonlyDirective {

  // custom directives using shared module

  constructor(private ElementRef : ElementRef) { }

  @HostListener ('input' , ['$event'])

  mobNumValidation(){
    console.log('mob validation calling');
    let mobNumInputBox = this.ElementRef.nativeElement.value;
    console.log(mobNumInputBox);
    this.ElementRef.nativeElement.value= mobNumInputBox.replace(/[^0-9]*/g ,'');
  }
}
