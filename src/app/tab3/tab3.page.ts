import { Component } from '@angular/core';
import { ColacionesService } from '../servicios/colaciones.service';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
//import { VentasService } from '../servicios/ventas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  handlerMessage = '';
  //Buscador

  

  constructor(public router: Router, public colacionesService: ColacionesService,
    public modalController: ModalController,
    public alertController: AlertController) { }
  //public ventasService: VentasService
  autocomplete: { input: string; };
  //Mandamos a llamar la información que tenemos en la base de datos de las dietas
  ngOnInit() {
    this.colacionesService.obtenerColaciones();
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
