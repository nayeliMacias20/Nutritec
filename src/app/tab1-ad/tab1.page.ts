import { Component } from '@angular/core';
import { AdminService } from '../servicios/admin.service';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  handlerMessage = '';
  constructor(public adminService: AdminService,
  public modalController: ModalController, public alertController: AlertController) { }
  autocomplete: { input: string; };
  //Mandamos a llamar la información que tenemos en la base de datos de las dietas
  ngOnInit() {
    this.adminService.obtenerDiets();
  }

  async Alert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: '¿Estas seguro de agregar esta deliciosa opción?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });
    await alert.present();
  }

  updateSearchResults() {
    console.log(this.autocomplete.input)    //search input will display
  }
}
