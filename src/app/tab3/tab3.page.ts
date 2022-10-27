import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { VentasService } from '../servicios/ventas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  clave:string
  color:string
  talla:string
  cantidad: number
  numtarjeta:number
  nombrec : string
  domicilio: string
  

  constructor(public actionSheetController:ActionSheetController,
    public router:Router,
    public alertController:AlertController,
    public ventasService: VentasService) {}
  tab2(){
    this.router.navigate(['/tabs/tab2'])
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'TexApp',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Regresar',
        icon: 'arrow-back-circle-outline',
        handler: () => {
          console.log('Play clicked');
          this.tab2();
        }
      }, {
        text: 'Ver pedido',
        icon: 'qr-code-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  async ventaProduct(){
    if(this.clave==null || this.color==null || this.talla==null || this.numtarjeta ==null|| this.nombrec==null || this.domicilio ==null || this.cantidad==null){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Completar los datos necesarios',
        buttons: ['Ok']
      })
      await alert.present();
    }else{
      
      this.ventasService.venta.clave=this.clave;
      this.ventasService.venta.color="negro";
      this.ventasService.venta.talla=this.talla;
      this.ventasService.venta.numtarjeta=this.numtarjeta;
      this.ventasService.venta.nombrec=this.nombrec;
      this.ventasService.venta.domicilio=this.domicilio;
      this.ventasService.venta.cantidad=this.cantidad;
      console.log(this.ventasService.venta);
      this.ventasService.createVenta()
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: '',
        message: 'Venta Exitosa',
        buttons: ['Ok']
        });
        await alert.present();
        
      this.clave=null;
      this.color=null;
      this.talla=null;
      this.numtarjeta=null;
      this.nombrec=null;
      this.domicilio=null;
      this.cantidad=null;
    }
  }
}
