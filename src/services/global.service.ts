import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

// import { RosterPage } from '../pages/roster/roster';
import { WelcomePage } from '../pages/welcome-page/welcome-page';
// import { StatsHomePage } from '../pages/stats-home-page/stats-home-page';

@Injectable()
export class GlobalService {
  appRootPage: any = WelcomePage;

  constructor(public http: Http) {
      
  }

  getRootPage() {
    return this.appRootPage;
  }

  setRootPage(page) {
    this.appRootPage = page;
  }

}
