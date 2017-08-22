import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  onGoToClick (){
    console.log('lets go to detials page!');
    this.navCtrl.push('DetailsPage');
  }

}
