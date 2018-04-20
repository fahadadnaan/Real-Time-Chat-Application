import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
username: string ='';
message: string ='';
messages: object[] = [];
subscription;
constructor(public navParams: NavParams, public navCtrl: NavController,public db:AngularFireDatabase) {
  this.username = this.navParams.get('username');
  this.subscription =  this.db.list('/chat').valueChanges().subscribe( data => {
      this.messages = data;
  });
}


sendMessage(){
  this.db.list('/chat').push({
    username: this.username,
    message: this.message

  }).then( () =>{
//message sent
  });
  this.message='';
}

ionViewWillLeave(){
  this.subscription.unsubscribe();
  this.db.list('/chat').push({
    specialMessage: true,
    message: `${this.username} has left the room`
  });
}

ionViewDidLoad() {
  this.db.list('/chat').push({
    specialMessage: true,
    message: `${this.username} has joined the room`
  });
}
  
}


