import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'; //เพิ่มขึ้นใหม่

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  public rest : RestProvider) {

    // this.rest.getPost()
    // .subscribe((data : any) => {
    //   console.log(data);
    // }, (err) =>{
    //   console.log(err);
    // })

  }

  getUser(){
    this.rest.getUser()
    .subscribe((data : any) => {
      console.log(data);
    }, (err) =>{
      console.log(err);
    })
  }

  goUser(){
    this.navCtrl.push('UsersPage');
  }
  
}
