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

    getPlayers(): Promise<Player[]> {
        return new Promise((resolve, reject) => {
            resolve(this.players);
        });
    }
    
    // // Load all github users
    // load(): Observable<User[]> {
    //   return this.http.get(`${this.githubApiUrl}/users`)
    //     .map(res => <User[]>res.json());
    // }

    // // Get github user by providing login(username)
    // loadDetails(login: string): Observable<User> {
    //   return this.http.get(`${this.githubApiUrl}/users/${login}`)
    //     .map(res => <User>(res.json()))
    // }

    // // Search for github users  
    // searchUsers(searchParam: string): Observable<User[]> {
    //   return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`) 
    //     .map(res => <User[]>(res.json().items))
    // }

    // // Get github user by providing login(username)
    // loadRepos(login: string): Observable<UserRepo[]> {
    //   return this.http.get(`${this.githubApiUrl}/users/${login}/repos`)
    //     .map(res => <UserRepo[]>(res.json()))
    // }

    // // Search Repositories
    // searchRepos(searchParam: string): Observable<Repo[]> {
    //   return this.http.get(`${this.githubApiUrl}/search/repositories?q=${searchParam}`) 
    //     .map(res => <Repo[]>(res.json().items))
    // }

}
