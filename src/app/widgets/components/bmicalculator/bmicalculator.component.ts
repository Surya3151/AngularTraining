// root app component
import { Component } from '@angular/core'

@Component({
  selector: 'bmi-component',
  templateUrl: './bmicalculator.component.html'
})


export class BmiCalcApp {

    bmi: string='';
    height:any=0;
    weight:any=0;

    constructor(){
    }

    calculateBMI(){
      if (this.height === "" || isNaN(this.height)) 
        this.bmi = "Provide a valid Height!";

      else if (this.weight === "" || isNaN(this.weight)) 
        this.bmi = "Provide a valid Weight!";

      else{
        this.bmi = (this.weight / ((this.height * this.height) 
        / 10000)).toFixed(2);
      }  
    }

    clearForm(){
        this.height=0;
        this.weight=0
        this.bmi=''
    }
}