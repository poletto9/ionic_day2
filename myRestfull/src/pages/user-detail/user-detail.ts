import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {
  values : any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.values = this.navParams.get('data');
    console.log(this.values.username) // เรียกผ่านตัวแปร
    // console.log(this.navParams.get('data').username) // เรียก key_obj ตรงๆ ผ่านจากตัวแปร data 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }

}
