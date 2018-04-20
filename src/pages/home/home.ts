import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 username: string = '';
  constructor(public navCtrl: NavController,
  private alrtctrl:AlertController) {

  }
  alert(title: string, message: string ){
    this.alrtctrl.create({

      title: title,
      subTitle: message,
      buttons: ['OK']

    }).present();
  }

  loginUser(){
    if (/^[a-zA-Z0-9]+$/.test(this.username)){
      this.navCtrl.push(ContactPage,{
        username: this.username
      });
    } else{
     this.alert('Error', 'Invalid Username');
    }
  }

}
