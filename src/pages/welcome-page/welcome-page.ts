import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { RosterPage } from '../roster/roster';

import { GlobalService } from '../../services/global.service';

/*
  Generated class for the WelcomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'welcome-page',
  templateUrl: 'welcome-page.html'
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;
  skipMessage: string = 'Skip';

  constructor(public navCtrl: NavController, public globalService: GlobalService, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  skip() {
    this.globalService.setRootPage(RosterPage);
    this.navCtrl.setRoot(RosterPage);
  }

  slideChanged() {
    if (this.slides.isEnd()) {
      this.skipMessage = "Alright, I got it";
    }
  }

}
