import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Player } from '../models/player';

@Injectable()
export class PlayerProvider {
    players: Player[];

  constructor(public http: Http) { 
      this.players = [
          new Player(1, 'Troy', 'Tulowitzki', '123-456-7890', 'tulo@gmail.com', 2, ['SS'], 'Right', 'Right'),
          new Player(2, 'Jake', 'Lamb', '987-654-3210', 'lambbomb@gmail.com', 22, ['3B'], 'Right', 'Right'),
          new Player(3, 'DJ', 'LeMahieu', '101-202-3030', 'thedj@gmail.com', 9, ['2B'], 'Right', 'Right'),
          new Player(4, 'Paul', 'Goldschmidt', '222-567-5309', 'goldy@gmail.com', 44, ['1B'], 'Right', 'Right'),
          new Player(5, 'Zach', 'Greinke', '987-765-1223', 'zackgreinke@gmail.com', 21, ['P'], 'Right', 'Right'),
          new Player(6, 'Chris', 'Iannetta', '101-546-4089', 'iannetta@gmail.com', 8, ['C'], 'Right', 'Right'),
          new Player(7, 'Yoenis', 'Cespedes', '101-546-4089', 'ycespedes@gmail.com', 12, ['LF'], 'Right', 'Right'),
          new Player(8, 'Charlie', 'Blackmon', '101-546-4089', 'chucknazty@gmail.com', 19, ['CF'], 'Left', 'Left'),
          new Player(9, 'Bryce', 'Harper', '101-546-4089', 'harper@gmail.com', 34, ['RF'], 'Left', 'Left'),
      ];
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  getPlayers(): Promise<Player[]> {
    return new Promise((resolve, reject) => {
      resolve(this.players);
    });
  }

  updatePlayer(player: Player) {
    for (var i = 0; i < this.players.length; i++) {
        var currPlayer = this.players[i];
        if (currPlayer.id === player.id) {
            currPlayer = player;
            break;
        }
    }
  }

}
