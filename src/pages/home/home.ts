import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  // random(type:number) {

  //     var data;
  //     if (type == 1) {
  //       data = Food1;
  //     } else {
  //       data = Food2;
  //     }

  //     var num = data.length;
  //     var random = Math.floor((Math.random() * num) + 1) - 1 ;  
  //     this.name = data[random].name;
  //     this.img = data[random].img;
      
  // }
  
}
