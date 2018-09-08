import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  message: string;
  list: string[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.message = "this is a news page."
    for (let i = 0; i < 15; i++) {
      this.list.push("this is " + i + " news");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');

  }

}
