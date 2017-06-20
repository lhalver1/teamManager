import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { PlayerProvider } from '../providers/player-provider';
import { RosterPage } from '../pages/roster/roster';
import { PlayerInfoPage } from '../pages/player-info-page/player-info-page';
import { AnimateItemSliding } from '../components/animate-item-sliding/animate-item-sliding';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    RosterPage,
    PlayerInfoPage,
    AnimateItemSliding
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RosterPage,
    PlayerInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlayerProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
