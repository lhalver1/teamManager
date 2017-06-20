import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Player } from '../../models/player';


@Component({
  selector: 'page-player-info-page',
  templateUrl: 'player-info-page.html'
})
export class PlayerInfoPage {
  player: Player;
  newPlayer: boolean;
  editing: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.player = navParams.get('player');
    this.newPlayer = navParams.get('newPlayer');
    this.editing = false;

    if (this.newPlayer) {
      this.editing = true;
      this.showNewPlayerAlert();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerInfoPage');
  }

  /**
   * @param  {Player} player - The player to be edited
   */
  edit(player: Player) {
    this.editing = true;
  }

  editPicture() {
    alert("Editing Picture is currently under construction");
  }

  showNewPlayerAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Player',
      subTitle: 'Tap on each of the fields to edit the information in them!',
      buttons: ['OK']
    });
    alert.present();
  }

  showCheckbox(optionsKey: string, propertyTitle: string, property: string) {
    let optionsObj = {
      "positions": ["P", "C", "1B", "2B", "3B", "SS", "LF", "CF", "RF"]
    };
    let optionsArr = optionsObj[optionsKey];

    let alert = this.alertCtrl.create();
    alert.setTitle(propertyTitle);

    for (let index = 0; index < optionsArr.length; index++) {
      let option = optionsArr[index];
      let alreadyChecked = false;

      for (let j = 0; j < this.player[property].length; j++) {
        let currPlayerOption = this.player[property][j];
        if (currPlayerOption === option) {
          alreadyChecked = true;
          break;
        }
      }

      alert.addInput({
        type: 'checkbox',
        label: option,
        value: option,
        checked: alreadyChecked
      });
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.player[property] = data;
      }
    });
    alert.present();
  }

  /**
   * @param  {string} type - The Type of the property being edited
   * @param  {any} min - If number, the smallest number available
   * @param  {any} max - If number, the largest number available
   * @param  {string} propertyTitle - The title of the prompt
   * @param  {string} property - The property on the player object to be edited
   */
  showPrompt(type: string, min: any, max: any, propertyTitle: string, property: string) {
    let prompt = this.alertCtrl.create({
      title: propertyTitle,
      message: "Enter the new value.",
      inputs: [
        {
          name: 'editValue',
          placeholder: propertyTitle,
          value: this.player[property],
          type: type,
          min: min,
          max: max
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.player[property] = data.editValue;
          }
        }
      ]
    });
    prompt.present();
  }

  showRadio(propertyTitle: string, property: string, optionsKey: string) {
    let optionsObj = {
      "bats": ["Right", "Left", "Switch"],
      "throws": ["Right", "Left"]
    };
    let optionsArr = optionsObj[optionsKey];


    let alert = this.alertCtrl.create();
    alert.setTitle(propertyTitle);

    for (let index = 0; index < optionsArr.length; index++) {
      let option = optionsArr[index];
      let alreadyChecked = false;

      for (let j = 0; j < this.player[optionsKey].length; j++) {
        let currPlayerOption = this.player[optionsKey];
        if (currPlayerOption === option) {
          alreadyChecked = true;
          break;
        }
      }

      alert.addInput({
        type: 'radio',
        label: option,
        value: option,
        checked: alreadyChecked
      });
    }


    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.player[property] = data;
      }
    });
    alert.present();
  }

}
