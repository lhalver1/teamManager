import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen, SQLite } from 'ionic-native';

import { RosterPage } from '../pages/roster/roster';
import { WelcomePage } from '../pages/welcome-page/welcome-page';
import { StatsHomePage } from '../pages/stats-home-page/stats-home-page';

import { Page } from '../models/page';

import { GlobalService } from '../services/global.service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  pages: Array<Page>;
  db: SQLite;


  constructor(public platform: Platform,
              public menu: MenuController,
              public statusBar: StatusBar,
              public splashScreen: Splashscreen,
              public globalService: GlobalService) {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.pages = [
        new Page('Roster', RosterPage, 'people' ),
        new Page('Stats', StatsHomePage, 'analytics'),
        new Page('Welcome', WelcomePage, 'hand')
      ];

      this.rootPage = this.globalService.getRootPage();
    });
  }

  openPage(page) {
      this.menu.close();
      this.nav.setRoot(page.component);
    }
}
