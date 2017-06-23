import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { TourNgBootstrapModule } from 'ng2-tour';

import { MyApp } from './app.component';
import { RosterPage } from '../pages/roster/roster';
import { WelcomePage } from '../pages/welcome-page/welcome-page';
import { PlayerInfoPage } from '../pages/player-info-page/player-info-page';
import { StatsHomePage } from '../pages/stats-home-page/stats-home-page';
import { AnimateItemSliding } from '../components/animate-item-sliding/animate-item-sliding';

import { PlayerProvider } from '../providers/player-provider';
import { GlobalService } from '../services/global.service';

@NgModule({
  declarations: [
    MyApp,
    RosterPage,
    PlayerInfoPage,
    WelcomePage,
    StatsHomePage,
    AnimateItemSliding
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RosterPage,
    PlayerInfoPage,
    WelcomePage,
    StatsHomePage
  ],
  providers: [
    StatusBar,
    Splashscreen,
    PlayerProvider,
    GlobalService,
    Camera,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
