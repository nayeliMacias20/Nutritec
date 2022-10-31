import { Component, Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ModalController} from '@ionic/angular';
import { AdminService } from '../servicios/admin.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  handlerMessage = '';
  constructor(public alertController: AlertController,
    public modalController: ModalController,
    public userService:AdminService) {}
  
  autocomplete: { input: string; };
  //Mandamos a llamar la información que tenemos en la base de datos de las dietas
  ngOnInit() {
    this.userService.obtenerUsers();
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

