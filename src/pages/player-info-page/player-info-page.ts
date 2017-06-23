import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';

import { PlayerProvider } from '../../providers/player-provider';

import { Player } from '../../models/player';


@Component({
  selector: 'page-player-info-page',
  templateUrl: 'player-info-page.html'
})
export class PlayerInfoPage {
  player: Player;
  originalPlayer: Player;
  newPlayer: boolean;
  editing: boolean;
  updating: boolean;

  constructor(public navCtrl: NavController,
              public playerProvider: PlayerProvider,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public imagePicker: ImagePicker,
              public camera: Camera) {
    this.player = navParams.get('player');
    this.originalPlayer = new Player(this.player.id, this.player.firstName, this.player.lastName, this.player.phone, this.player.email, this.player.number, this.player.positions, this.player.bats, this.player.throws);
    this.newPlayer = navParams.get('newPlayer');
    this.editing = false;
    this.updating= false;

    if (this.newPlayer) {
      this.editing = true;
      this.showNewPlayerAlert();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerInfoPage');
  }

  cancelEdit() {
    if (this.editing) {
      this.navCtrl.pop();
    } else if (this.updating) {
      this.player = this.originalPlayer;
      this.updating = false;
    }
  }

  /**
   * @param  {Player} player - The player to be edited
   */
  edit(player: Player) {
    this.updating = true;
  }

  editPicture() {
    let prompt = this.alertCtrl.create({
      title: 'Choose',
      message: "Do you want to take a new picture or choose from your gallary?",
      buttons: [
        {
          text: 'Choose',
          handler: data => {
            alert('Choose clicked');
            let options = {
              maximumImagesCount: 1
            }
            this.imagePicker.getPictures(options).then((results) => {
              for (var i = 0; i < results.length; i++) {
                  console.log('Image URI: ' + results[i]);
              }
            }, (err) => { });
          }
        },
        {
          text: 'Camera',
          handler: data => {
            alert('Camera clicked');
            let cameraOptions: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE
            }
            this.camera.getPicture(cameraOptions).then((imageData) => {
               // imageData is either a base64 encoded string or a file URI
               // If it's base64:
               let base64Image = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
               // Handle error
            });
          }
        }
      ]
    });
    prompt.present();
  }

  save() {
    if (this.editing) {
      this.editing = false;
      this.playerProvider.addPlayer(this.player);
    } else if(this.updating) {
      this.updating = false;
      this.playerProvider.updatePlayer(this.player);
    }
    this.navCtrl.pop();
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
      "positions": ["DH", "P", "C", "1B", "2B", "3B", "SS", "LF", "CF", "RF"]
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