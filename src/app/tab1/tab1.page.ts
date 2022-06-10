import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {

          }
        }, {
          text: 'SIM, Favoritar',
          handler: () => {
            this.apersentarToast();
          }
        }
      ]
    });

    await alert.present();
  }
  async apersentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos Favoitos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
