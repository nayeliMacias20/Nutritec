import { Component, Input } from '@angular/core';
import { ComidasService } from '../servicios/comidas.service';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  handlerMessage = '';
  constructor(public router: Router, public comidasService: ComidasService,
    public modalController: ModalController, public alertController: AlertController) {}
  
  autocomplete: { input: string; };
  //Mandamos a llamar la información que tenemos en la base de datos de las dietas
  ngOnInit() {
    this.comidasService.obtenerComidas();
  }
  home() {
    this.router.navigate(['/tabs/tab1'])
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

