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
          new Player(1, 'Larry', 'Hatteburg', '123-456-7890', 'lhatteburg@gmail.com', 6, ['LF', 'CF'], 'Right', 'Right'),
          new Player(2, 'Joe', 'Hatteburg', '987-654-3210', 'jhatteburg@gmail.com', 52, ['SS', '3B'], 'Right', 'Right'),
          new Player(3, 'Marcus', 'King', '101-202-3030', 'mking@gmail.com', 8, ['LF', 'CF'], 'Right', 'Right'),
          new Player(4, 'Cody', 'Kessel', '222-567-5309', 'ckessel@gmail.com', 4, ['RF', '1B'], 'Left', 'Right'),
          new Player(5, 'Duke', 'Gregory', '987-765-1223', 'dgregory@gmail.com', 24, ['LF', 'CF'], 'Right', 'Right'),
          new Player(5, 'Jack', 'Bauer', '101-546-4089', 'jbauer@gmail.com', 12, ['P', '2B'], 'Right', 'Right')
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
