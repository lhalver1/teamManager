import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { Player } from '../../models/player';
import { PlayerProvider } from '../../providers/player-provider';
import { PlayerInfoPage } from '../player-info-page/player-info-page';

@Component({
  selector: 'page-roster',
  templateUrl: 'roster.html'
})
export class RosterPage {
  players: Player[];

  constructor(public navCtrl: NavController, private playerProvider: PlayerProvider) {
      this.players = [];
      this.getPlayers();
  }

  addPlayer() {
    let newPlayer = new Player(-1, 'first name', 'last name', '111-222-3333', 'default@gmail.com', 99, ["P", "C"], 'Right', 'Right');
    this.navCtrl.push(PlayerInfoPage, {player: newPlayer, newPlayer: true})
  }

  getPlayers() {
    this.playerProvider.getPlayers().then((players) => {
      this.players = players;
    });
  }

  goToDetails(player: Player) {
    this.navCtrl.push(PlayerInfoPage, {player: player});
  }

  removePlayer(playerId: string) {
  }

}
