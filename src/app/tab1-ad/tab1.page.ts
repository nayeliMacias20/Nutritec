import { Component } from '@angular/core';
import { DesayunosService } from '../servicios/desayunos.service';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  handlerMessage = '';
  //Buscador

  constructor(public router:Router, public desayunosService: DesayunosService,
    public modalController: ModalController,
    public alertController: AlertController) {
      this.desayunosService.obtenerDesayunos();
     }
     
  autocomplete: { input: string; };

  //Mandamos a llamar la información que tenemos en la base de datos de las dietas
  ngOnInit() {
    
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
