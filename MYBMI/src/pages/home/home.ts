import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weight: number
  height: number 
  bmi: number

  constructor(public navCtrl: NavController) {

  }

  calBmi() {
    // alert("test: " + this.weight + " " + this.height)
    this.bmi = this.weight / ((this.height / 100) * (this.height / 100))
    // alert(this.bmi)
    
   }

}