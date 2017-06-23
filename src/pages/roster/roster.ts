import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Player } from '../../models/player';
import { PlayerProvider } from '../../providers/player-provider';
import { PlayerInfoPage } from '../player-info-page/player-info-page';

@Component({
  selector: 'page-roster',
  templateUrl: 'roster.html'
})
export class RosterPage {
  players: Player[];
  reordering: boolean;

  constructor(public navCtrl: NavController, private playerProvider: PlayerProvider, public alertCtrl: AlertController) {
      this.players = [];
      this.reordering = false;
      this.getPlayers();
  }

  addPlayer() {
    let newPlayer = new Player(-1, 'first name', 'last name', '111-222-3333', 'default@gmail.com', 99, ["P", "C"], 'Right', 'Right');
    this.navCtrl.push(PlayerInfoPage, {player: newPlayer, newPlayer: true})
  }

  confirmPrompt(player: Player) {
    let prompt = this.alertCtrl.create({
      title: 'Confirm',
      message: "Are you sure you want to delete " + player.getFullName(),
      buttons: [
        {
          text: 'No',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: data => {
            this.removePlayer(player);
          }
        }
      ]
    });
    prompt.present();
  }

  getPlayers() {
    this.playerProvider.getPlayers().then((players) => {
      this.players = players;
      this.players.sort(function(a:Player, b:Player) {
        if (a.lastName < b.lastName)
          return -1;
        if (a.lastName > b.lastName)
          return 1;
        return 0;
      });
    });
  }

  goToDetails(player: Player) {
    this.navCtrl.push(PlayerInfoPage, {player: player, newPlayer: false});
  }

  removePlayer(player: Player) {
    for (let i = 0; i < this.players.length; i++) {
      let currPlayer = this.players[i];
      if (currPlayer.id === player.id) {
        this.players.splice(i, 1);
        break;
      }
    }
  }

}
