import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'; // เพิ่ม provider

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  
  user_val : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public rest : RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
    //เรียกใช้ ฟังชั่น feedUser 
    this.feedUser();
  }

  //ดึงค่าจากฟังก์ชั่น getUser จาก rest
  feedUser(){
    this.rest.getUser()
    .subscribe((data : any) => {
      this.user_val = data
      console.log(data);
    }, (err) =>{
      console.log(err);
    })
  }

  // เรียกหน้า detail โดยส่งพารามิเตอร์แบบ object ไปด้วย
  userDetail(key_obj){
    this.navCtrl.push('UserDetailPage',{data:key_obj});
  }

}
