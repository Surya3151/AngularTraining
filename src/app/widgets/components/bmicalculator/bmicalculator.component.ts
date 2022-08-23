// root app component
import { Component } from '@angular/core'

@Component({
  selector: 'bmi-component',
  templateUrl: './bmicalculator.component.html'
})


export class BmiCalcApp {

    bmi: string;
    constructor(){
        this.bmi = '';
    }

    calculateBMI(height:any, weight:any){
      if (height === "" || isNaN(height)) 
        this.bmi = "Provide a valid Height!";

      else if (weight === "" || isNaN(weight)) 
        this.bmi = "Provide a valid Weight!";

      else{
        this.bmi = (weight / ((height * height) 
        / 10000)).toFixed(2);
      }  
    }
}